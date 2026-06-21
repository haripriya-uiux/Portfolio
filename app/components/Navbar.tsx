"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

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

  const navItems = [
    {
      label: "home",
      href: "/",
      isActive: pathname === "/" && activeSection === "about"
    },
    {
      label: "my works",
      href: "/#projects",
      isActive: (pathname === "/" && activeSection === "projects") || pathname.startsWith("/projects")
    },
    {
      label: "about me",
      href: "/about",
      isActive: pathname === "/about"
    },
    {
      label: "contact",
      href: "/contact",
      isActive: pathname === "/contact"
    }
  ];

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
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`font-roboto text-[14px] font-semibold uppercase tracking-widest pb-1 transition-colors relative ${
                item.isActive ? "text-black" : "text-[#8C8C8C] hover:text-black"
              }`}
            >
              {item.label}
              {item.isActive && (
                <motion.div
                  layoutId="active-underline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-black"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
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
