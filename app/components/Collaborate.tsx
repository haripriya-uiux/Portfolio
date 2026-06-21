import React from "react";
import Link from "next/link";

export default function Collaborate() {
  return (
    <section className="py-24 bg-[#FAFAFA]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center md:items-start">
          <div className="flex flex-col space-y-2">
            <div className="font-plus-jakarta text-[14px] font-semibold text-[#E34330] uppercase tracking-widest">
              COLLABORATE
            </div>
            <h2 className="font-syne text-[28px] sm:text-[36px] font-bold text-black uppercase leading-tight tracking-widest">
              LET'S BUILD
              <br />
              SOMETHING GREAT
              <br />
              TOGETHER.
            </h2>
            <p className="font-roboto text-[16px] sm:text-[18px] md:text-[20px] font-medium text-[#6F6F6F] leading-relaxed max-w-[540px] pt-5">
              Have an exciting idea, a contract role, or a product in need of structural refinement? Drop me a line and
              let's bring it to life.
            </p>
          </div>

          <div className="flex justify-start md:justify-end">
            <Link
              href="/contact"
              className="flex items-center justify-between w-full border border-black bg-transparent px-7 py-4.5 sm:py-6.5 hover:bg-[#F0F0F0] transition-colors"
            >
              <span className="font-syne text-[16px] sm:text-[20px] md:text-[24px] font-semibold text-black uppercase tracking-widest">
                SEND A MESSAGE
              </span>
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
