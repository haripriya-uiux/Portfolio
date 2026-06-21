import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import { Metadata } from "next";

interface ProjectData {
  title: string;
  category: string;
  subtitle: string;
  role: string;
  duration: string;
  platform: string;
  overview: string;
  steps: {
    id: string;
    title: string;
    description: string;
    isBgLight: boolean;
  }[];
  tools: string[];
}

const projectsMap: Record<string, ProjectData> = {
  "transtan": {
    title: "transtan",
    category: "web application / healthcare",
    subtitle: "Organ Transplant Management System",
    role: "UI/UX Designer (Primary)",
    duration: "6 Months",
    platform: "Web Application",
    overview: "Organ Transplant Management System (OTMS) is a healthcare application that simplifies the organ transplant workflow by managing donor and recipient records, organ matching, approvals, and transplant coordination. It helps healthcare professionals work more efficiently while ensuring a smooth and organized transplant process.",
    steps: [
      { id: "Step 01", title: "Understanding the Problem", description: "I Started By Understanding The Existing OTMS Workflow Through Stakeholder Discussions And By Analyzing The Current System. This Helped Me Identify Usability Issues, Inefficient Workflows, And Opportunities To Improve The Overall User Experience.", isBgLight: true },
      { id: "Step 02", title: "Defining the Problem", description: "Complex Navigation, Time-Consuming Workflows, Information Overload, Inconsistent UI Elements, Difficulty Completing Critical Tasks Efficiently.", isBgLight: false },
      { id: "Step 03", title: "Information Architecture", description: "I Reorganized The Application's Structure By Grouping Related Features, Simplifying Navigation, And Creating Logical User Flows For Faster Task Completion.", isBgLight: true },
      { id: "Step 04", title: "Wireframing", description: "I Created Low-Fidelity Wireframes To Explore Layouts, Validate Workflows, And Gather Early Feedback Before Moving Into High-Fidelity Designs.", isBgLight: false },
      { id: "Step 05", title: "Design System", description: "To Ensure Consistency Across The Product, I Built Reusable Components, Standardized Colors, Typography, Buttons, Forms, Tables, And Icons.", isBgLight: true },
      { id: "Step 06", title: "UI Design", description: "Using The Approved Wireframes, I Designed Clean And Accessible Interfaces With Consistent Typography, Color Hierarchy, Spacing, And Reusable Components.", isBgLight: false }
    ],
    tools: ["Figma", "Miro", "Adobe Illustrator"]
  },
  "healthcare-case-study": {
    title: "healthcare",
    category: "mobile application / healthcare",
    subtitle: "Hospital Information Management System",
    role: "Lead UI/UX Designer",
    duration: "4 Months",
    platform: "Mobile App (iOS & Android)",
    overview: "A comprehensive mobile application designed for healthcare professionals and patients to manage clinic appointments, check electronic health records, request prescriptions, and communicate in real-time. The application streamlines workflows for medical staff and improves patient engagement.",
    steps: [
      { id: "Step 01", title: "User Interviews & Surveys", description: "Conducted interviews with both patients and hospital staff to capture primary pain points, revealing that long waiting queues and missing test reports were the most critical areas needing design improvements.", isBgLight: true },
      { id: "Step 02", title: "Synthesizing Insights", description: "Established user personas and mapped emotional journeys. Found that patients feel highly anxious during clinic waiting times and need transparent queue tracking on their mobile devices.", isBgLight: false },
      { id: "Step 03", title: "Task Flow & Architecture", description: "Designed an intuitive system architecture separating quick-access health actions (like downloading reports) from complex scheduling workflows.", isBgLight: true },
      { id: "Step 04", title: "Rapid Prototyping", description: "Built interactive digital wireframes in Figma to validate key screen flows: appointment booking, telemedicine calls, and profile record retrieval.", isBgLight: false },
      { id: "Step 05", title: "Visual Identity & Accessibility", description: "Selected calming, accessible colors (soft blues and neutral warm tones) conforming to WCAG standards, along with high-contrast text tags for elderly patients.", isBgLight: true },
      { id: "Step 06", title: "Usability Testing & Feedback", description: "Ran remote usability tests with 10 active patients. Refined card structures, form validations, and status colors based on navigation feedback.", isBgLight: false }
    ],
    tools: ["Figma", "FigJam", "Adobe Photoshop"]
  },
  "fintech-poc": {
    title: "fin tech",
    category: "poc device / fintech",
    subtitle: "Landing Page & Terminal UI",
    role: "Interaction Designer",
    duration: "3 Months",
    platform: "Point-of-Sale (POS) & Web",
    overview: "An interactive landing page and proof-of-concept interface for a modern financial technology payment terminal (POC device). The project focuses on seamless user checkout, clear transaction states, card processing feedback, and vendor management.",
    steps: [
      { id: "Step 01", title: "Market Analysis", description: "Evaluated current merchant POS terminals (Verifone, Square) to outline physical hardware limitations, screen dimensions, and typical transaction drop-offs.", isBgLight: true },
      { id: "Step 02", title: "Defining Constraints", description: "Recognized that transaction speed, daylight screen glare, and large tap-targets for fast-paced checkouts were the main UX priorities.", isBgLight: false },
      { id: "Step 03", title: "UI Layout Matrix", description: "Created grid-based screen layouts specifically sized for 5-inch merchant terminal displays, focusing on heavy typography and high-contrast color indicators.", isBgLight: true },
      { id: "Step 04", title: "Interactive Transitions", description: "Created prototype transitions for 'Card Tapped', 'Authorizing Transaction', and 'Payment Success' to maintain clear user feedback loops.", isBgLight: false },
      { id: "Step 05", title: "Landing Page Design", description: "Designed a modern product landing page showcasing terminal features, hardware specifications, and visual pricing models for target B2B buyers.", isBgLight: true },
      { id: "Step 06", title: "Handoff & Assets Spec", description: "Exported custom screen specs, motion guidelines, SVG assets, and grid dimensions to enable fast client-side development.", isBgLight: false }
    ],
    tools: ["Figma", "Miro", "Adobe After Effects"]
  },
  "fintech-branding": {
    title: "fin tech",
    category: "branding & web / fintech",
    subtitle: "Schedule Management System",
    role: "Visual & Brand Designer",
    duration: "2 Months",
    platform: "Web Dashboard",
    overview: "Branding and scheduling management interface for a major financial platform. Redesigned visual guidelines, logo systems, and an intuitive scheduling dashboard that enables automated recurring transactions, payroll calendars, and user management.",
    steps: [
      { id: "Step 01", title: "Stakeholder Alignment", description: "Analyzed current dashboard brand guidelines and alignment with the client's marketing requirements for scheduling automatic pay runs.", isBgLight: true },
      { id: "Step 02", title: "Defining Brand Tone", description: "Defined a trustworthy, minimal, and secure brand tone represented through clean layouts, geometric sans-serif fonts, and emerald green accent colors.", isBgLight: false },
      { id: "Step 03", title: "Typography & Color Palettes", description: "Established custom color palettes and structured type scales supporting complex data-heavy columns and charts.", isBgLight: true },
      { id: "Step 04", title: "Wireframing Scheduling Logs", description: "Created simple dashboard layouts for the scheduling planner, paying close attention to automated triggers and recurring calendar setups.", isBgLight: false },
      { id: "Step 05", title: "High Fidelity Dashboard UI", description: "Drafted high-fidelity screens showcasing multi-state calendar logs, active pay-runs, and audit trails.", isBgLight: true },
      { id: "Step 06", title: "Component Library Hand-off", description: "Constructed a structured Figma system library containing button states, input forms, and data tables to support future dashboard features.", isBgLight: false }
    ],
    tools: ["Figma", "Adobe Illustrator", "Sketch"]
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsMap[slug] || projectsMap["transtan"];
  const formattedTitle = project.title.toUpperCase();
  return {
    title: `${formattedTitle} | Design Case Study — Haripriya`,
    description: `Deep dive into the design journey, user experience architecture, and visual system of the ${formattedTitle} project, designed by Haripriya.`,
  };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsMap[slug] || projectsMap["transtan"];
  
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-black">
      <Navbar />
      
      {/* Project Header */}
      <section className="pt-20 md:pt-32 pb-12 px-6 max-w-7xl mx-auto">
        <div className="font-plus-jakarta text-[11px] sm:text-[12px] font-bold text-[#E34330] tracking-widest uppercase mb-4">
          {project.category}
        </div>
        <h1 className="font-syne text-[32px] sm:text-[40px] md:text-[48px] font-bold uppercase tracking-widest text-black leading-tight mb-4">
          {project.title}
        </h1>
        <p className="font-playfair text-[16px] sm:text-[18px] text-[#8C8C8C] italic">
          {project.subtitle}
        </p>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10 pt-8 border-t border-[#E5E5E5]">
          <div>
            <h4 className="font-roboto text-[10px] font-bold text-[#A3A3A3] tracking-widest uppercase mb-2">My Role</h4>
            <p className="font-roboto text-[12px] font-bold text-black uppercase tracking-widest">{project.role}</p>
          </div>
          <div>
            <h4 className="font-roboto text-[10px] font-bold text-[#A3A3A3] tracking-widest uppercase mb-2">Duration</h4>
            <p className="font-roboto text-[12px] font-bold text-black uppercase tracking-widest">{project.duration}</p>
          </div>
          <div>
            <h4 className="font-roboto text-[10px] font-bold text-[#A3A3A3] tracking-widest uppercase mb-2">Platform</h4>
            <p className="font-roboto text-[12px] font-bold text-black uppercase tracking-widest">{project.platform}</p>
          </div>
        </div>
      </section>

      {/* Giant Hero Image */}
      <section className="px-6 max-w-7xl mx-auto mb-16 md:mb-20">
        <div className="relative aspect-[16/9] w-full bg-[#D3DEE0] flex items-center justify-center overflow-hidden">
          <Image
            src={`/${slug}_project.png`}
            alt={project.title}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover z-10"
          />
        </div>
      </section>

      {/* Overview Section */}
      <section className="px-6 max-w-7xl mx-auto mb-16 md:mb-20">
        <h2 className="font-syne text-[20px] sm:text-[24px] font-bold uppercase tracking-widest text-black mb-6">Overview</h2>
        <p className="font-roboto text-[14px] sm:text-[15px] leading-relaxed text-[#6F6F6F] max-w-4xl">
          {project.overview}
        </p>
      </section>

      {/* Design Journey Section */}
      <section className="px-6 max-w-7xl mx-auto mb-16 md:mb-20">
        <div className="font-roboto text-[10px] font-bold text-[#A3A3A3] tracking-widest uppercase mb-2">
          Execution
        </div>
        <h2 className="font-syne text-[20px] sm:text-[24px] font-bold uppercase tracking-widest text-black mb-8 md:mb-10">Design Journey</h2>

        <div className="grid grid-cols-1 gap-6">
          {project.steps.map((step) => (
            <div 
              key={step.id} 
              className={`border border-[#E5E5E5] p-5 sm:p-8 ${step.isBgLight ? "bg-white" : "bg-[#F7F7F7]"}`}
            >
              <div className="font-playfair text-[#E34330] text-[14px] sm:text-[16px] italic mb-4">{step.id}</div>
              <h3 className="font-plus-jakarta text-[15px] sm:text-[16px] font-bold text-black mb-3">{step.title}</h3>
              <p className="font-roboto text-[13px] sm:text-[14px] leading-relaxed text-[#6F6F6F]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools Used Section */}
      <section className="px-6 max-w-7xl mx-auto mb-24 md:mb-32">
        <div className="bg-[#FAF8F7] border border-[#F0EBE8] p-6 sm:p-10 md:p-12">
          <div className="font-roboto text-[10px] font-bold text-[#A3A3A3] tracking-widest uppercase mb-2">
            Software
          </div>
          <h2 className="font-syne text-[20px] sm:text-[24px] font-bold uppercase tracking-widest text-black mb-6 sm:mb-8">Tools Used</h2>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {project.tools.map((tool) => (
              <div 
                key={tool} 
                className="px-4 sm:px-6 py-2 border border-[#E34330] text-[#E34330] font-roboto text-[10px] sm:text-[11px] font-bold uppercase tracking-widest bg-white"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
