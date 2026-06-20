import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { BriefcaseIcon, ToolIcon, QuestionIcon } from "../components/Icons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Haripriya — Product Designer & UI/UX Architect",
  description: "Discover Haripriya's background, professional experience, academic training in multimedia design, and core product tools.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-black">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Header section */}
        <div className="flex justify-between items-end border-b border-[#E5E5E5] pb-6 mb-10">
          <div>
            <div className="font-plus-jakarta text-[14px] font-semibold text-[#E34330] tracking-widest uppercase mb-2">
              Resume
            </div>
            <h1 className="font-syne text-[22px] md:text-[32px] font-bold uppercase tracking-widest leading-none">
              About Me
            </h1>
          </div>
          <a
            href="#"
            className="bg-black text-white px-15 py-2.5 font-plus-jakarta  text-[14px] font-semibold uppercase tracking-widest flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download Full Resume
          </a>
        </div>
        <div className="mb-3">
          {/* Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Image & Quote */}
            <div className="lg:col-span-4 flex flex-col">
              <div className="relative w-full aspect-[4/5] border-[6px] border-[#222222] mb-8.5">
                <Image
                  src="/hero_img.webp"
                  alt="Haripriya"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover grayscale"
                />
              </div>
              <div className="pl-6 border-l-2 border-[#E34330]">
                <p className="font-playfair text-[16px] italic text-[#6F6F6F]">
                  "Design is not what it looks like or feels like. Design is how it works under pressure."
                </p>
              </div>
            </div>

            {/* Right Column: Bio & Stats */}
            <div className="lg:col-span-8 flex flex-col">
              <h3 className="font-plus-jakarta text-[18px] md:text-[20px] font-semibold text-black leading-[30px] mb-6">
                Hello, I am Haripriya. Over the past 2+ years, I've designed User Interface for Web Application, Mobile
                Application and POC Devices in Healthcare and Logistics Industry
              </h3>
              <p className="font-plus-jakarta text-[20px] font-medium text-[#6F6F6F] leading-[30px] mb-6">
                My background combines academic training in Multimedia and UI Design and Development, giving me a rare
                perspective that balances visual aesthetic elegance with deep, empathy-driven behavioural analysis. I
                believe that products should be highly functional before being beautiful, but true luxury is achieved
                when they are both.
              </p>
              <p className="font-plus-jakarta text-[20px] font-medium text-[#6F6F6F] leading-[30px] mb-6">
                I operate with extreme structural clarity. Whether it's laying down pixel-perfect vertical grid columns,
                mapping complex user pathways in user flows, building custom physical component modules in Figma, or
                structuring adaptive layouts in design, I treat developer handoff and technical feasibility as core
                design priorities.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-8 border-t border-[#E5E5E5] pt-3">
                <div>
                  <div className="font-syne text-[26px] md:text-[26px] font-bold text-black">10+</div>
                  <div className="font-plus-jakarta text-[14px] font-semibold text-[#A3A3A3] uppercase tracking-widest">
                    Projects Worked
                  </div>
                </div>
                <div>
                  <div className="font-syne text-[26px] md:text-[26px] font-bold text-black">2+</div>
                  <div className="font-plus-jakarta text-[14px] font-semibold text-[#A3A3A3] uppercase tracking-widest">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Scroll indicator inner */}
          <div className="mt-7 flex justify-center w-full">
            <a
              href="#experience"
              className="flex flex-col items-center justify-center font-roboto text-[16px] font-normal text-[#B8B4B4] uppercase tracking-widest hover:text-black transition-colors"
            >
              <span className="mb-1">scroll</span>
              <span className="text-[16px] font-sans">↓</span>
            </a>
          </div>
        </div>
        {/* Experience Section */}
        <section id="experience" className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <BriefcaseIcon stroke="#000000" size={24} />
            <h2 className="font-plus-jakarta text-[22px] font-medium text-[#E34330] uppercase tracking-widest">
              Experience
            </h2>
          </div>

          <div className="space-y-15">
            <div className="flex flex-col md:flex-row md:items-start justify-between">
              <div>
                <h3 className="font-syne text-[24px] font-bold text-black uppercase tracking-widest mb-4">
                  UI UX Designer
                </h3>
                <p className="font-roboto text-[16px] font-semibold text-black uppercase tracking-widest">
                  Start Tech Software Solutions <span className="font-normal text-[#6F6F6F]">- Chennai, TN, India</span>
                </p>
              </div>
              <div className="mt-4 md:mt-0 bg-[#DDDDDD] px-2.5 py-1.5 font-plus-jakarta text-[14px] font-semibold text-black uppercase tracking-widest">
                Mar 2024 - Current
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-start justify-between">
              <div>
                <h3 className="font-syne text-[24px] font-bold text-black uppercase tracking-widest mb-4">
                  UI UX Designer
                </h3>
                <p className="font-roboto text-[16px] font-semibold text-black uppercase tracking-widest">
                  Plenome Technologies <span className="font-normal text-[#6F6F6F]">- Chennai, TN, India</span>
                </p>
              </div>
              <div className="mt-4 md:mt-0 bg-[#DDDDDD] px-2.5 py-1.5 font-plus-jakarta text-[14px] font-semibold text-black uppercase tracking-widest">
                Jan 2024 - Mar 2024
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-start justify-between">
              <div>
                <h3 className="font-syne text-[24px] font-bold text-black uppercase tracking-widest mb-2">
                  Design Intern
                </h3>
                <p className="font-roboto text-[16px] font-semibold text-black uppercase tracking-widest">
                  Wiz Freights <span className="font-normal text-[#6F6F6F]">- Chennai, TN, India</span>
                </p>
              </div>
              <div className="mt-4 md:mt-0 bg-[#DDDDDD] px-2.5 py-1.5 font-plus-jakarta text-[14px] font-semibold text-black uppercase tracking-widest">
                Sept 2023 - Nov 2023
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <BriefcaseIcon stroke="#000000" size={24} />
            <h2 className="font-plus-jakarta text-[22px] font-medium text-[#E34330] uppercase tracking-widest">
              Education
            </h2>
          </div>

          <div className="space-y-15">
            <div className="flex flex-col md:flex-row md:items-start justify-between">
              <div>
                <h3 className="font-syne text-[24px] font-bold text-black uppercase tracking-widest mb-4">
                  PG Diploma in UI Design and Development
                </h3>
                <p className="font-roboto text-[16px] font-semibold text-black uppercase tracking-widest">
                  ICAT Design Media College <span className="font-normal text-[#6F6F6F]">- Chennai, TN, India</span>
                </p>
              </div>
              <div className="mt-4 md:mt-0 bg-[#DDDDDD] px-2.5 py-1.5 font-plus-jakarta text-[14px] font-semibold text-black uppercase tracking-widest">
                2022 - 2023
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-start justify-between">
              <div>
                <h3 className="font-syne text-[24px] font-bold text-black uppercase tracking-widest mb-4">
                  BCA in Multimedia and Animation
                </h3>
                <p className="font-roboto text-[16px] font-semibold text-black uppercase tracking-widest">
                  Hindustan Institute of Technology and Science{" "}
                  <span className="font-normal text-[#6F6F6F]">- Chennai, India (2 Months)</span>
                </p>
              </div>
              <div className="mt-4 md:mt-0 bg-[#DDDDDD] px-2.5 py-1.5 font-plus-jakarta text-[14px] font-semibold text-black uppercase tracking-widest">
                2019 - 2022
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <ToolIcon stroke="#000000" size={24} />
            <h2 className="font-plus-jakarta text-[22px] font-medium text-[#E34330] uppercase tracking-widest">
              Skills
            </h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="px-4 py-3 border border-[#6F6F6F] font-plus-jakarta text-[16px] font-semibold text-[#6F6F6F] uppercase tracking-widest bg-white">
              User Interface Design
            </div>
            <div className="px-4 py-3 border border-[#6F6F6F] font-plus-jakarta text-[16px] font-semibold text-[#6F6F6F] uppercase tracking-widest bg-white">
              User Experience Design
            </div>
            <div className="px-4 py-3 border border-[#6F6F6F] font-plus-jakarta text-[16px] font-semibold text-[#6F6F6F] uppercase tracking-widest bg-white">
              UX Research
            </div>
            <div className="px-4 py-3 border border-[#6F6F6F] font-plus-jakarta text-[16px] font-semibold text-[#6F6F6F] uppercase tracking-widest bg-white">
              Interaction Design
            </div>
            <div className="px-4 py-3 border border-[#6F6F6F] font-plus-jakarta text-[16px] font-semibold text-[#6F6F6F] uppercase tracking-widest bg-white">
              Visual / Graphic Design
            </div>
            <div className="px-4 py-3 border border-[#6F6F6F] font-plus-jakarta text-[16px] font-semibold text-[#6F6F6F] uppercase tracking-widest bg-white">
              Design Systems
            </div>
            <div className="px-4 py-3 border border-[#6F6F6F] font-plus-jakarta text-[16px] font-semibold text-[#6F6F6F] uppercase tracking-widest bg-white">
              Wireframing & Prototyping
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <ToolIcon stroke="#000000" size={24} />
            <h2 className="font-plus-jakarta text-[22px] font-medium text-[#E34330] uppercase tracking-widest">
              Tools
            </h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="px-4 py-3 border border-[#6F6F6F] font-plus-jakarta text-[16px] font-semibold text-[#6F6F6F] uppercase tracking-widest bg-white">
              Figma
            </div>
            <div className="px-4 py-3 border border-[#6F6F6F] font-plus-jakarta text-[16px] font-semibold text-[#6F6F6F] uppercase tracking-widest bg-white">
              Sketch
            </div>
            <div className="px-4 py-3 border border-[#6F6F6F] font-plus-jakarta text-[16px] font-semibold text-[#6F6F6F] uppercase tracking-widest bg-white">
              Adobe Illustrator
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="mb-20">
          <div className="font-plus-jakarta text-[14px] font-semibold text-[#A3A3A3] tracking-widest uppercase">
            Information
          </div>
          <h2 className="font-syne text-[26px] font-bold text-black tracking-widest mb-10">FAQs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* FAQ 1 */}
            <div className="border border-[#D8D8D8] bg-[#FCFCFC] p-6 flex items-center gap-4">
              <div className="text-[#E34330] mt-1">
                <QuestionIcon size={24} />
              </div>
              <div>
                <h4 className="font-plus-jakarta text-[20px] font-medium text-black mb-3">
                  Are you willing to relocate?
                </h4>
                <p className="font-plus-jakarta font-medium text-[20px] text-[#6F6F6F]">
                  Yes, I'm open to relocation for the right opportunity.
                </p>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="border border-[#D8D8D8] bg-[#FCFCFC] p-6 flex items-center gap-4">
              <div className="text-[#E34330] mt-1">
                <QuestionIcon size={24} />
              </div>
              <div>
                <h4 className="font-plus-jakarta text-[20px] font-medium text-black mb-3">
                  What is your total experience?
                </h4>
                <p className="font-plus-jakarta font-medium text-[20px] text-[#6F6F6F]">2 Years and 3 Months</p>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="border border-[#D8D8D8] bg-[#FCFCFC] p-6 flex items-center gap-4">
              <div className="text-[#E34330] mt-1">
                <QuestionIcon size={24} />
              </div>
              <div>
                <h4 className="font-plus-jakarta text-[20px] font-medium text-black mb-3">
                  Are you open to remote, hybrid, or on-site roles?
                </h4>
                <p className="font-plus-jakarta font-medium text-[20px] text-[#6F6F6F]">
                  I'm open to hybrid and on-site roles only.
                </p>
              </div>
            </div>

            {/* FAQ 4 */}
            <div className="border border-[#D8D8D8] bg-[#FCFCFC] p-6 flex items-center gap-4">
              <div className="text-[#E34330] mt-1">
                <QuestionIcon size={24} />
              </div>
              <div>
                <h4 className="font-plus-jakarta text-[20px] font-medium text-black mb-3">
                  What kind of role are you looking for?
                </h4>
                <p className="font-plus-jakarta font-medium text-[20px] text-[#6F6F6F]">
                  I'm seeking a UI/UX or Product Designer role
                </p>
              </div>
            </div>

            {/* FAQ 5 */}
            <div className="border border-[#D8D8D8] bg-[#FCFCFC] p-6 flex items-center gap-4">
              <div className="text-[#E34330] mt-1">
                <QuestionIcon size={24} />
              </div>
              <div>
                <h4 className="font-plus-jakarta text-[20px] font-medium text-black mb-3">
                  Can you do graphic design?
                </h4>
                <p className="font-plus-jakarta font-medium text-[20px] text-[#6F6F6F]">
                  Yes, Although I specialize in UI/UX design, I can create simple posters, logos, ID cards.
                </p>
              </div>
            </div>

            {/* FAQ 6 */}
            <div className="border border-[#D8D8D8] bg-[#FCFCFC] p-6 flex items-center gap-4">
              <div className="text-[#E34330] mt-1">
                <QuestionIcon size={24} />
              </div>
              <div>
                <h4 className="font-plus-jakarta text-[20px] font-medium text-black mb-3">
                  Do you know video editing?
                </h4>
                <p className="font-plus-jakarta font-medium text-[20px] text-[#6F6F6F]">
                  Yes. I can edit simple videos with transitions, text, subtitles, and basic animations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
