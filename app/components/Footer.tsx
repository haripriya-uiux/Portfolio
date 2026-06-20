import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <h2 className="font-syne text-[32px] md:text-[36px] font-bold uppercase tracking-widest mb-7">HARIPRIYA</h2>
            <p className="font-plus-jakarta text-[16px] font-normal text-[#C2C2C2] leading-6 max-w-[320px]">
              UI/UX Designer crafting quiet, high-impact digital solutions that elevate product clarity and conversion.
            </p>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Navigation */}
            <div className="flex flex-col text-left space-y-7">
              <h3 className="font-syne text-[20px] font-bold uppercase tracking-widest">NAVIGATION</h3>
              <ul className="flex flex-col space-y-5 font-plus-jakarta text-[16px] font-normal text-[#C2C2C2]">
                <li>
                  <Link href="/#projects" className="hover:text-white transition-colors">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Resume
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Say Hello */}
            <div className="flex flex-col text-left space-y-7">
              <h3 className="font-syne text-[20px] font-bold uppercase tracking-widest">SAY HELLO</h3>
              <ul className="flex flex-col space-y-5 font-plus-jakarta text-[16px] font-normal text-[#C2C2C2]">
                <li>
                  <a href="mailto:haripriya.uiux@gmail.com" className="hover:text-white transition-colors">
                    haripriya.uiux@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Socials */}
            <div className="flex flex-col text-left space-y-7">
              <h3 className="font-syne text-[20px] font-bold uppercase tracking-widest">SOCIALS</h3>
              <ul className="flex flex-col space-y-5 font-plus-jakarta text-[16px] font-normal text-[#C2C2C2]">
                <li>
                  <a
                    href="https://linkedin.com/in/haripriyauiuxdesigner"
                    className="flex items-center gap-1 hover:text-white transition-colors"
                  >
                    Linkedin
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
