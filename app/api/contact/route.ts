import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

// Secure Zod schema for input validation
const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name is too long")
    // Restrict name to standard alphabetical chars, spaces, hyphens, and common punctuation
    .regex(/^[a-zA-Z\s\-'\.]+$/, "Name contains invalid characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email format")
    .max(150, "Email is too long"),
  message: z
    .string()
    .min(1, "Message is required")
    .max(3000, "Message cannot exceed 3000 characters")
});

// Helper to escape HTML characters (XSS Prevention)
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "/": "&#x2F;"
  };
  return text.replace(/[&<>"'/]/g, (m) => map[m]);
}

// Regex to identify if message contains suspicious script blocks, html tags, or local file system pathing
function isSuspicious(text: string): boolean {
  const scriptRegex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
  const htmlTagRegex = /<[^>]*>/g;
  const fileProtocolRegex = /file:\/\//gi;
  const executableRegex = /\.(exe|bat|sh|cmd|vbs|scr|bin|dll|jar)/gi;

  return (
    scriptRegex.test(text) ||
    htmlTagRegex.test(text) ||
    fileProtocolRegex.test(text) ||
    executableRegex.test(text)
  );
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Zod Schema Validation
    const validation = contactSchema.safeParse(body);
    if (!validation.success) {
      const errorMsg = validation.error.issues.map((issue) => issue.message).join(", ");
      return NextResponse.json({ success: false, error: errorMsg }, { status: 400 });
    }

    const { name, email, message } = validation.data;

    // 2. Extra Security Check for Scripts/HTML/Assets injection
    if (isSuspicious(message) || isSuspicious(name)) {
      return NextResponse.json(
        {
          success: false,
          error: "Message blocked due to security validation. Scripts, HTML elements, or executable files are not allowed."
        },
        { status: 400 }
      );
    }

    // 3. HTML Escaping for safe output rendering in mail clients
    const sanitizedName = escapeHtml(name);
    const sanitizedEmail = escapeHtml(email);
    const sanitizedMessage = escapeHtml(message);

    // Retrieve mail configuration
    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const receiver = process.env.CONTACT_RECEIVER;

    const isSmtpConfigured = host && port && user && pass && receiver;

    if (isSmtpConfigured) {
      // 4. Nodemailer Config
      const transporter = nodemailer.createTransport({
        host,
        port: parseInt(port, 10),
        secure: parseInt(port, 10) === 465, // true for 465, false for 587
        auth: {
          user,
          pass
        }
      });

      // Send Email
      await transporter.sendMail({
        from: `"${sanitizedName}" <${user}>`,
        to: receiver,
        replyTo: email,
        subject: `New Message from Portfolio: ${sanitizedName}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #E5E5E5; padding: 25px; border-radius: 4px;">
            <h2 style="color: #E34330; border-bottom: 2px solid #E34330; padding-bottom: 10px; margin-top: 0;">New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${sanitizedName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #E34330;">${sanitizedEmail}</a></p>
            <p><strong>Message:</strong></p>
            <div style="background-color: #F9F9F9; border-left: 4px solid #E34330; padding: 15px; font-style: italic; white-space: pre-wrap; color: #333333; margin-top: 15px;">
              ${sanitizedMessage}
            </div>
            <hr style="border: 0; border-top: 1px solid #E5E5E5; margin: 25px 0;" />
            <p style="font-size: 11px; color: #A3A3A3; text-align: center; margin-bottom: 0;">Sent via Haripriya's Design Portfolio</p>
          </div>
        `
      });

      console.log(`[SMTP SUCCESS] Message from ${email} sent successfully.`);
    } else {
      // 5. Mock Sandbox fallback logging for local verification / missing .env config
      console.log("================ MOCK SMTP LOG ================");
      console.log(`To: ${receiver || "NOT SET (CONTACT_RECEIVER missing)"}`);
      console.log(`From: "${sanitizedName}" <${sanitizedEmail}>`);
      console.log(`Subject: New Message from Portfolio`);
      console.log(`Sanitized Content:`);
      console.log(sanitizedMessage);
      console.log("===============================================");
      console.warn(
        "[WARN] Outgoing email mock-logged. Configure SMTP credentials in .env.local for live mail delivery."
      );
    }

    return NextResponse.json({ success: true, message: "Your message was sent successfully!" });
  } catch (error) {
    console.error("[CONTACT API ERROR]", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
