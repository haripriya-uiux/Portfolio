"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [isOpen, setIsOpen] = useState(false);
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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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
    <>
      <header className="sticky top-0 z-50 w-full border-b border-[#E5E5E5] bg-[#FAFAFA]">
        <div className="mx-auto flex items-center justify-between px-6 py-5 max-w-7xl">
          <div className="flex items-center">
            <Link href="/" onClick={() => setIsOpen(false)} className="font-syne text-[20px] font-bold text-black tracking-widest uppercase hover:opacity-80 transition-opacity">
              haripriya
            </Link>
          </div>

          {/* Navigation Links (Desktop) */}
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

          {/* Action Area & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
               <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
              </span>
              <span className="hidden xs:inline h-2 w-2 rounded-full bg-[#10B981]" />
              <span className="font-roboto text-[12px] font-semibold text-[#8C8C8C] uppercase tracking-widest">
                open to work
              </span>
             
            </div>

            {/* Mobile Burger Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="block md:hidden text-black focus:outline-none p-1.5 z-50 cursor-pointer"
              aria-label="Toggle Menu"
            >
              <div className="relative w-6 h-4.5 flex flex-col justify-between">
                <span className={`w-full h-[2px] bg-black rounded-full transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-[7.5px]" : ""}`} />
                <span className={`w-full h-[2px] bg-black rounded-full transition-opacity duration-200 ${isOpen ? "opacity-0" : ""}`} />
                <span className={`w-full h-[2px] bg-black rounded-full transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-[7.5px]" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 top-[65px] z-40 w-full bg-[#FAFAFA] px-6 py-12 flex flex-col md:hidden border-t border-[#E5E5E5] h-[calc(100vh-65px)]"
          >
            <nav className="flex flex-col gap-y-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`font-syne text-[22px] font-bold uppercase tracking-widest block py-3 border-b border-[#E5E5E5] transition-colors ${
                      item.isActive ? "text-black" : "text-[#8C8C8C] hover:text-black"
                    }`}
                  >
                    <span className="flex items-center justify-between">
                      {item.label}
                      {item.isActive && (
                        <span className="h-2.5 w-2.5 rounded-full bg-[#E34330]" />
                      )}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
