"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 100; // Offset for navbar

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E5E5E5] bg-[#FAFAFA]">
      <div className="mx-auto flex items-center justify-between px-6 py-5 max-w-7xl">
        <div className="flex items-center">
          <Link href="/" className="font-syne text-[20px] font-bold text-black tracking-widest uppercase hover:opacity-80 transition-opacity">
            haripriya
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center justify-center gap-x-10">
          <Link
            href="/"
            className={`font-roboto text-[14px] font-semibold uppercase tracking-widest pb-1 transition-colors ${
              pathname === "/" && activeSection === "about"
                ? "text-black border-b-[2px] border-black"
                : "text-[#8C8C8C] hover:text-black"
            }`}
          >
            home
          </Link>
          <Link
            href="/#projects"
            className={`font-roboto text-[14px] font-semibold uppercase tracking-widest pb-1 transition-colors ${
              (pathname === "/" && activeSection === "projects") || pathname.startsWith('/projects')
                ? "text-black border-b-[2px] border-black"
                : "text-[#8C8C8C] hover:text-black"
            }`}
          >
            my works
          </Link>
          <Link
            href="/about"
            className={`font-roboto text-[14px] font-semibold uppercase tracking-widest pb-1 transition-colors ${
              pathname === '/about'
                ? "text-black border-b-[2px] border-black"
                : "text-[#8C8C8C] hover:text-black"
            }`}
          >
            about me
          </Link>
          <Link
            href="/contact"
            className={`font-roboto text-[14px] font-semibold uppercase tracking-widest pb-1 transition-colors ${
              pathname === '/contact'
                ? "text-black border-b-[2px] border-black"
                : "text-[#8C8C8C] hover:text-black"
            }`}
          >
            contact
          </Link>
        </nav>

        {/* Action Area */}
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#10B981]" />
          <span className="font-roboto text-[12px] font-semibold text-[#8C8C8C] uppercase tracking-widest">
            open to work
          </span>
        </div>
      </div>
    </header>
  );
}
