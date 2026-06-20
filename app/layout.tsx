import type { Metadata } from "next";
import { Syne, Roboto, Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["500", "800"],
});

export const metadata: Metadata = {
  title: "Haripriya | Product Designer & UI/UX Architect — Crafting Sleek, High-Impact Digital Products",
  description: "Portfolio of Haripriya, a Product Designer & UI/UX Architect with 2+ years of experience designing empathy-driven, pixel-perfect interfaces for Healthcare & Logistics industries.",
  keywords: [
    "UI UX Designer",
    "Product Designer",
    "UX Architect",
    "UI Design Portfolio",
    "Product Design Portfolio",
    "Figma Specialist",
    "Healthcare App Design",
    "Logistics UI Design",
    "Interaction Designer",
    "Web Application Designer",
    "Mobile Design Case Studies"
  ],
  authors: [{ name: "Haripriya" }],
  creator: "Haripriya",
  openGraph: {
    title: "Haripriya | Product Designer & UI/UX Architect",
    description: "Designing sleek, human-centered digital products for healthcare and logistics.",
    url: "https://haripriya.design",
    siteName: "Haripriya Portfolio",
    images: [
      {
        url: "/hero_img.webp",
        width: 800,
        height: 1000,
        alt: "Haripriya - Product Designer & UI/UX Architect"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Haripriya | Product Designer & UI/UX Architect",
    description: "Designing sleek, human-centered digital products.",
    images: ["/hero_img.webp"]
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${roboto.variable} ${plusJakartaSans.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-black">{children}</body>
    </html>
  );
}
