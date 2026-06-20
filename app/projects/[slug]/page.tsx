import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  // Rendering the TRANSTAN detail page based on the design
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-black">
      <Navbar />
      
      {/* Project Header */}
      <section className="pt-32 pb-12 px-6 max-w-7xl mx-auto">
        <div className="font-plus-jakarta text-[12px] font-bold text-[#E34330] tracking-widest uppercase mb-4">
          web application / healthcare
        </div>
        <h1 className="font-syne text-[32px] md:text-[48px] font-bold uppercase tracking-widest text-black leading-none mb-4">
          transtan
        </h1>
        <p className="font-playfair text-[18px] text-[#8C8C8C] italic">
          Organ Transplant Management System
        </p>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-[#E5E5E5]">
          <div>
            <h4 className="font-roboto text-[10px] font-bold text-[#A3A3A3] tracking-widest uppercase mb-2">My Role</h4>
            <p className="font-roboto text-[12px] font-bold text-black uppercase tracking-widest">UI/UX Designer (Primary)</p>
          </div>
          <div>
            <h4 className="font-roboto text-[10px] font-bold text-[#A3A3A3] tracking-widest uppercase mb-2">Duration</h4>
            <p className="font-roboto text-[12px] font-bold text-black uppercase tracking-widest">6 Months</p>
          </div>
          <div>
            <h4 className="font-roboto text-[10px] font-bold text-[#A3A3A3] tracking-widest uppercase mb-2">Platform</h4>
            <p className="font-roboto text-[12px] font-bold text-black uppercase tracking-widest">Web Application</p>
          </div>
        </div>
      </section>

      {/* Giant Hero Image */}
      <section className="px-6 max-w-7xl mx-auto mb-20">
        <div className="relative aspect-[16/9] w-full bg-[#D3DEE0] flex items-center justify-center overflow-hidden">
          <Image src={`/${params.slug}_project.png`} alt="Project Details" fill className="object-cover z-10" />
        </div>
      </section>

      {/* Overview Section */}
      <section className="px-6 max-w-7xl mx-auto mb-20">
        <h2 className="font-syne text-[24px] font-bold uppercase tracking-widest text-black mb-6">Overview</h2>
        <p className="font-roboto text-[15px] leading-relaxed text-[#6F6F6F] max-w-4xl">
          Organ Transplant Management System (OTMS) is a healthcare application that simplifies the organ transplant workflow by managing donor and recipient records, organ matching, approvals, and transplant coordination. It helps healthcare professionals work more efficiently while ensuring a smooth and organized transplant process.
        </p>
      </section>

      {/* Design Journey Section */}
      <section className="px-6 max-w-7xl mx-auto mb-20">
        <div className="font-roboto text-[10px] font-bold text-[#A3A3A3] tracking-widest uppercase mb-2">
          Execution
        </div>
        <h2 className="font-syne text-[24px] font-bold uppercase tracking-widest text-black mb-10">Design Journey</h2>

        <div className="space-y-6">
          {/* Step 1 */}
          <div className="border border-[#E5E5E5] bg-white p-8">
            <div className="font-playfair text-[#E34330] text-[16px] italic mb-4">Step 01</div>
            <h3 className="font-plus-jakarta text-[16px] font-bold text-black mb-3">Understanding the Problem</h3>
            <p className="font-roboto text-[14px] leading-relaxed text-[#6F6F6F]">
              I Started By Understanding The Existing OTMS Workflow Through Stakeholder Discussions And By Analyzing The Current System. This Helped Me Identify Usability Issues, Inefficient Workflows, And Opportunities To Improve The Overall User Experience.
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="border border-[#E5E5E5] bg-[#F7F7F7] p-8">
            <div className="font-playfair text-[#E34330] text-[16px] italic mb-4">Step 02</div>
            <h3 className="font-plus-jakarta text-[16px] font-bold text-black mb-3">Defining the Problem</h3>
            <p className="font-roboto text-[14px] leading-relaxed text-[#6F6F6F]">
              Complex Navigation, Time-Consuming Workflows, Information Overload, Inconsistent UI Elements, Difficulty Completing Critical Tasks Efficiently.
            </p>
          </div>

          {/* Step 3 */}
          <div className="border border-[#E5E5E5] bg-white p-8">
            <div className="font-playfair text-[#E34330] text-[16px] italic mb-4">Step 03</div>
            <h3 className="font-plus-jakarta text-[16px] font-bold text-black mb-3">Information Architecture</h3>
            <p className="font-roboto text-[14px] leading-relaxed text-[#6F6F6F]">
              I Reorganized The Application's Structure By Grouping Related Features, Simplifying Navigation, And Creating Logical User Flows For Faster Task Completion.
            </p>
          </div>

          {/* Step 4 */}
          <div className="border border-[#E5E5E5] bg-[#F7F7F7] p-8">
            <div className="font-playfair text-[#E34330] text-[16px] italic mb-4">Step 04</div>
            <h3 className="font-plus-jakarta text-[16px] font-bold text-black mb-3">Wireframing</h3>
            <p className="font-roboto text-[14px] leading-relaxed text-[#6F6F6F]">
              I Created Low-Fidelity Wireframes To Explore Layouts, Validate Workflows, And Gather Early Feedback Before Moving Into High-Fidelity Designs.
            </p>
          </div>

          {/* Step 5 */}
          <div className="border border-[#E5E5E5] bg-white p-8">
            <div className="font-playfair text-[#E34330] text-[16px] italic mb-4">Step 05</div>
            <h3 className="font-plus-jakarta text-[16px] font-bold text-black mb-3">Design System</h3>
            <p className="font-roboto text-[14px] leading-relaxed text-[#6F6F6F]">
              To Ensure Consistency Across The Product, I Built Reusable Components, Standardized Colors, Typography, Buttons, Forms, Tables, And Icons.
            </p>
          </div>

          {/* Step 6 */}
          <div className="border border-[#E5E5E5] bg-[#F7F7F7] p-8">
            <div className="font-playfair text-[#E34330] text-[16px] italic mb-4">Step 06</div>
            <h3 className="font-plus-jakarta text-[16px] font-bold text-black mb-3">UI Design</h3>
            <p className="font-roboto text-[14px] leading-relaxed text-[#6F6F6F]">
              Using The Approved Wireframes, I Designed Clean And Accessible Interfaces With Consistent Typography, Color Hierarchy, Spacing, And Reusable Components.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Used Section */}
      <section className="px-6 max-w-7xl mx-auto mb-32">
        <div className="bg-[#FAF8F7] border border-[#F0EBE8] p-8 md:p-12">
          <div className="font-roboto text-[10px] font-bold text-[#A3A3A3] tracking-widest uppercase mb-2">
            Software
          </div>
          <h2 className="font-syne text-[24px] font-bold uppercase tracking-widest text-black mb-8">Tools Used</h2>
          <div className="flex flex-wrap gap-4">
            <div className="px-6 py-2 border border-[#E34330] text-[#E34330] font-roboto text-[11px] font-bold uppercase tracking-widest bg-white">
              Figma
            </div>
            <div className="px-6 py-2 border border-[#E34330] text-[#E34330] font-roboto text-[11px] font-bold uppercase tracking-widest bg-white">
              Miro
            </div>
            <div className="px-6 py-2 border border-[#E34330] text-[#E34330] font-roboto text-[11px] font-bold uppercase tracking-widest bg-white">
              Adobe Illustrator
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
