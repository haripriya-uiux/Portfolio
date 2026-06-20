"use client";

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [validationErrors, setValidationErrors] = useState({ name: "", email: "", message: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error on change
    if (validationErrors[name as keyof typeof validationErrors]) {
      setValidationErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const errors = { name: "", email: "", message: "" };

    // Name check
    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    } else if (!/^[a-zA-Z\s\-'\.]+$/.test(formData.name)) {
      errors.name = "Name can only contain letters, spaces, hyphens, and dots";
      isValid = false;
    }

    // Email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Invalid email format";
      isValid = false;
    }

    // Message check
    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    } else if (formData.message.includes("<") || formData.message.includes(">")) {
      errors.message = "HTML elements or scripts are not allowed";
      isValid = false;
    } else if (formData.message.length > 3000) {
      errors.message = "Message cannot exceed 3000 characters";
      isValid = false;
    }

    setValidationErrors(errors);
    return isValid;
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Unable to connect to the server. Please check your internet connection and try again.");
    }
  };

  return (
    <section id="contact" className="pt-20 pb-30 bg-[#FAFAFA] border-t border-[#E5E5E5]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="flex flex-col space-y-2 border-b border-[#D8D8D8] pb-6 mb-10">
          <div className="font-plus-jakarta text-[14px] font-semibold text-[#E34330] uppercase tracking-widest">
            GET IN TOUCH
          </div>
          <h2 className="font-syne text-[32px] font-bold text-black uppercase tracking-widest leading-none">
            LET'S START A CONVERSATION
          </h2>
        </div>

        <p className="font-plus-jakarta text-[20px] font-medium text-[#6F6F6F] mb-6">
          Reach out via any channel below.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Left Side: Contact Info Blocks */}
          <div className="flex flex-col space-y-6">
            <div className="border border-[#D8D8D8] bg-transparent p-6 flex items-start gap-4">
              <div className="mt-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#666"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="flex flex-col space-y-3">
                <span className="font-roboto text-[14px] font-bold text-[#6F6F6F] uppercase tracking-widest">
                  PHONE
                </span>
                <a href="tel:+919790900531" className="font-plus-jakarta text-[20px] font-bold text-black">
                  +91 9790900531
                </a>
              </div>
            </div>

            <div className="border border-[#D8D8D8] bg-transparent p-6 flex items-start gap-4">
              <div className="mt-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#666"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="flex flex-col space-y-3">
                <span className="font-roboto text-[14px] font-bold text-[#6F6F6F] uppercase tracking-widest">
                  EMAIL ME
                </span>
                <a
                  href="mailto:haripriya.uiux@gmail.com"
                  target="_blank"
                  className="font-plus-jakarta text-[20px] font-bold text-black"
                >
                  haripriya.uiux@gmail.com
                </a>
              </div>
            </div>

            <div className="border border-[#D8D8D8] bg-transparent p-6 flex items-start gap-4">
              <div className="mt-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#666"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <div className="flex flex-col space-y-3">
                <span className="font-roboto text-[14px] font-bold text-[#6F6F6F] uppercase tracking-widest">
                  LINKEDIN
                </span>
                <a
                  target="_blank"
                  href="https://linkedin.com/in/haripriyauiuxdesigner"
                  className="font-plus-jakarta text-[20px] font-bold text-black hover:underline underline-offset-4"
                >
                  https://linkedin.com/in/haripriyauiuxdesigner
                </a>
              </div>
            </div>
          </div>
          {/* Right Side: Contact Form */}
          <div className="border border-[#D8D8D8] bg-transparent p-8 md:p-10 flex flex-col justify-center min-h-[450px]">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center text-center animate-fade-in py-8">
                <style>{`
                  @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(15px); }
                    to { opacity: 1; transform: translateY(0); }
                  }
                  @keyframes drawCheck {
                    to { stroke-dashoffset: 0; }
                  }
                  .animate-fade-in {
                    animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                  }
                  .checkmark-circle {
                    stroke-dasharray: 166;
                    stroke-dashoffset: 166;
                    stroke-width: 2;
                    stroke-miterlimit: 10;
                    stroke: #E34330;
                    fill: none;
                    animation: drawCheck 0.6s cubic-bezier(0.65, 0, 0.45, 1) 0.2s forwards;
                  }
                  .checkmark-check {
                    transform-origin: 50% 50%;
                    stroke-dasharray: 48;
                    stroke-dashoffset: 48;
                    animation: drawCheck 0.4s cubic-bezier(0.65, 0, 0.45, 1) 0.6s forwards;
                  }
                `}</style>
                
                <div className="w-20 h-20 bg-[#FAF8F7] rounded-full flex items-center justify-center mb-6 border border-[#F0EBE8] shadow-inner">
                  <svg className="w-10 h-10" viewBox="0 0 52 52">
                    <circle className="checkmark-circle" cx="26" cy="26" r="25" />
                    <path className="checkmark-check" stroke="#E34330" strokeWidth="3.5" strokeLinecap="round" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                  </svg>
                </div>

                <h3 className="font-syne text-[26px] font-bold text-black uppercase tracking-widest mb-4">
                  MESSAGE SENT!
                </h3>
                
                <p className="font-plus-jakarta text-[16px] font-medium text-[#6F6F6F] max-w-[400px] mb-8 leading-relaxed">
                  Thank you for reaching out. Your message has been safely validated and sent. I'll get back to you shortly!
                </p>

                <button
                  onClick={() => setStatus("idle")}
                  className="bg-black text-white px-8 py-3.5 font-syne text-[13px] font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-plus-jakarta text-[20px] font-bold text-black uppercase tracking-widest mb-7">
                  LEAVE A MESSAGE
                </h3>

                {status === "error" && (
                  <div className="p-4 border border-[#E34330] bg-[#FFF2F0] text-[#E34330] font-roboto text-[13px] font-bold uppercase tracking-wider text-left mb-6">
                    {errorMessage}
                  </div>
                )}

                <form onSubmit={handleFormSubmit} className="flex flex-col space-y-10">
                  <div className="flex flex-col space-y-3 text-left">
                    <label
                      htmlFor="name"
                      className="font-roboto text-[14px] font-semibold text-[#6F6F6F] uppercase tracking-widest"
                    >
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g., Daisy"
                      className={`border bg-white px-6 py-4.5 text-[14px] font-roboto outline-none transition-colors placeholder:text-[#CCCCCC] ${
                        validationErrors.name
                          ? "border-[#E34330] focus:border-[#E34330]"
                          : "border-[#D8D8D8] focus:border-black"
                      }`}
                      required
                    />
                    {validationErrors.name && (
                      <p className="text-[12px] font-roboto font-semibold text-[#E34330] uppercase tracking-wider mt-1">
                        {validationErrors.name}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col space-y-3 text-left">
                    <label
                      htmlFor="email"
                      className="font-roboto text-[14px] font-semibold text-[#6F6F6F] uppercase tracking-widest"
                    >
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g., daisy@gmail.com"
                      className={`border bg-white px-6 py-4.5 text-[14px] font-roboto outline-none transition-colors placeholder:text-[#CCCCCC] ${
                        validationErrors.email
                          ? "border-[#E34330] focus:border-[#E34330]"
                          : "border-[#D8D8D8] focus:border-black"
                      }`}
                      required
                    />
                    {validationErrors.email && (
                      <p className="text-[12px] font-roboto font-semibold text-[#E34330] uppercase tracking-wider mt-1">
                        {validationErrors.email}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col space-y-3 text-left">
                    <label
                      htmlFor="message"
                      className="font-roboto text-[14px] font-semibold text-[#6F6F6F] uppercase tracking-widest"
                    >
                      HOW CAN I HELP YOU? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe..."
                      className={`border bg-white p-6 text-[14px] font-roboto outline-none transition-colors resize-none placeholder:text-[#CCCCCC] ${
                        validationErrors.message
                          ? "border-[#E34330] focus:border-[#E34330]"
                          : "border-[#D8D8D8] focus:border-black"
                      }`}
                      required
                    />
                    {validationErrors.message && (
                      <p className="text-[12px] font-roboto font-semibold text-[#E34330] uppercase tracking-wider mt-1">
                        {validationErrors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="bg-black text-white px-6 py-4 font-syne text-[14px] font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors mt-4 disabled:bg-[#A3A3A3] disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === "submitting" ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        SENDING...
                      </>
                    ) : (
                      "SEND MESSAGE"
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
