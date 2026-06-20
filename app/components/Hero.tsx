import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="about" className="relative flex flex-col justify-center py-15 lg:py-20 bg-[#FAFAFA]">
      <div className="mx-auto max-w-7xl px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Hero Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <div className="font-plus-jakarta text-[14px] font-[600] text-[#E34330] tracking-[0.05em] leading-none uppercase">
            ui/ux designer & product thinker
          </div>
          
          <h1 className="font-syne text-[66px] font-[800] leading-none tracking-normal text-black">
            I design<br />
            <span className="font-playfair font-[500] italic text-[66px] leading-none tracking-normal text-[#E34330]">digital</span><br />
            experiences<br />
            that<br />
            connect.
          </h1>

          <p className="font-plus-jakarta text-[20px] font-[400] text-[#8C8C8C] max-w-[500px] mt-8.5">
            UI/UX Designer with 2+ Years of industry experience. <br/> Designing seamless digital experiences with a user-first mindset.
          </p>

          <div className="flex flex-row gap-8.5  mt-8.5">
            <Link
              href="/#projects"
              className="font-plus-jakarta font-[600] text-[14px]  tracking-[0.05em] uppercase flex items-center justify-center w-[220px] h-[54px] bg-black text-white border-[1.5px] border-black hover:bg-neutral-800 transition-colors"
            >
              view my work
            </Link>
            <Link
              href="/contact"
              className="font-plus-jakarta font-[600] text-[14px] tracking-[0.05em] uppercase flex items-center justify-center w-[220px] h-[54px] bg-transparent text-black border-[1.5px] border-[#D1D1D1] hover:border-black transition-colors"
            >
              download resume
            </Link>
          </div>
        </div>

        {/* Right Column: Hero Profile Image Frame */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end h-full items-center">
          <div className="relative border-[6px] border-[#222222] overflow-hidden w-[90%] md:w-[80%] lg:w-full max-w-[420px] aspect-[4/5] bg-neutral-100 flex flex-col justify-end shadow-sm">
            {/* Profile Image */}
            <Image
              src="/hero_img.webp"
              alt="Haripriya working on a laptop"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 420px"
              className="object-cover grayscale"
            />
            {/* Overlay bottom card */}
            <div className="relative z-10 bg-[#FAFAFA] mx-4 mb-4 p-5 text-left border border-[#E5E5E5]">
              <h3 className="font-syne text-[18px] font-bold text-black uppercase tracking-widest">
                haripriya
              </h3>
              <p className="font-roboto text-[10px] md:text-[12px] font-[400] text-[#8C8C8C] tracking-wider">
                Open to work in Chennai, Bangalore and Kochi
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center font-roboto text-[10px] font-bold text-[#B8B4B4] uppercase tracking-widest">
        <Link href="/#projects" className="flex flex-col items-center hover:text-black transition-colors cursor-pointer pb-2">
          <span className="mb-1">scroll</span>
          <span className="text-[12px] font-sans">↓</span>
        </Link>
      </div>
    </section>
  );
}
