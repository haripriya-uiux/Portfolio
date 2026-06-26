import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import { Metadata } from "next";

interface DesignStep {
  id: string;
  title: string;
  description: string;
}

interface SuccessMetric {
  value: string;
  label: string;
}

interface ProjectData {
  title: string;
  category: string;
  subtitle: string;
  projectNumber?: string;
  role: string;
  primaryUsers?: string;
  industry?: string;
  duration?: string;
  platform: string;
  overviewParts?: { text: string; bold?: boolean }[];
  overview?: string;
  coreFeatures?: string[];
  myContribution: string;
  challenge?: string;
  solution?: string;
  keyTakeaway?: string;
  steps?: DesignStep[];
  successMetrics?: SuccessMetric[];
  tools: string[];
}

const projectsMap: Record<string, ProjectData> = {
  transtan: {
    title: "transtan",
    category: "web application / healthcare",
    subtitle: "Organ Transplant Management System",
    role: "UI/UX Designer (Primary)",
    duration: "6 Months",
    platform: "Web Application",
    overview:
      "Organ Transplant Management System (OTMS) is a healthcare application that simplifies the organ transplant workflow by managing donor and recipient records, organ matching, approvals, and transplant coordination. It helps healthcare professionals work more efficiently while ensuring a smooth and organized transplant process.",
    myContribution:
      "As a UI/UX Designer, I led the end-to-end design process — from understanding complex stakeholder requirements to delivering high-fidelity screens. I worked closely with developers and hospital administrators to ensure every screen was intuitive and met real-world transplant coordination workflows.",
    challenge:
      "The system needed to handle critical, time-sensitive information across multiple user roles (doctors, coordinators, administrators) while remaining simple and error-free in high-pressure medical situations.",
    solution:
      "Designed a role-based dashboard system with clear information hierarchy, streamlined task flows, and a consistent design system that minimized cognitive load and reduced task completion time for each user type.",
    steps: [
      {
        id: "Step 01",
        title: "Research & Analysis",
        description:
          "Studied existing workflows to identify bottlenecks, repetitive actions, and navigation issues. Organized findings into clear observations that guided the redesign process.",
      },
      {
        id: "Step 02",
        title: "Wireframing",
        description:
          "Created low-fidelity wireframes to validate screen layouts, information hierarchy, and workflow before moving into high-fidelity designs.",
      },
      {
        id: "Step 03",
        title: "UI Design",
        description:
          "Designed clean, accessible interfaces with a strong focus on readability, consistency, and efficiency. Built reusable components and maintained strict visual hierarchy across multiple modules.",
      },
      {
        id: "Step 04",
        title: "Prototyping",
        description:
          "Developed interactive prototypes to demonstrate complete user flows and gather feedback before development.",
      },
      {
        id: "Step 05",
        title: "Developer Handoff",
        description:
          "Prepared design specifications, reusable components, spacing guidelines, and interaction details to support smooth implementation by developers.",
      },
    ],
    tools: ["Figma", "Adobe Illustrator"],
  },

  hims: {
    title: "hims",
    category: "web application / healthcare",
    subtitle: "Hospital Information Management System",
    role: "UX Designer (Secondary)",
    duration: "2 Months",
    platform: "Web Application",
    overview:
      "Hospital Information Management System (HIMS) is a comprehensive healthcare platform developed by my company to streamline clinical and administrative operations. It helps healthcare professionals manage patient records, appointments, diagnostics, billing, and other hospital workflows through a unified digital system.",
    myContribution:
      "As a UX/UI Designer, I worked on designing user-centered interfaces for various HIMS modules. I collaborated with product managers, developers, and stakeholders to simplify complex workflows, create intuitive user experiences, build reusable design components, and ensure seamless developer handoff.",
    keyTakeaway:
      "This project strengthened my ability to design and improve healthcare products by balancing user needs, business goals, and technical feasibility while creating intuitive and scalable solutions.",
    steps: [
      {
        id: "Step 01",
        title: "Research & Analysis",
        description:
          "Studied existing workflows to identify bottlenecks, repetitive actions, and navigation issues. Organized findings into clear observations that guided the redesign process.",
      },
      {
        id: "Step 02",
        title: "Wireframing",
        description:
          "Created low-fidelity wireframes to validate screen layouts, information hierarchy, and workflow before moving into high-fidelity designs.",
      },
      {
        id: "Step 03",
        title: "UI Design",
        description:
          "Designed clean, accessible interfaces with a strong focus on readability, consistency, and efficiency. Built reusable components and maintained strict visual hierarchy across multiple modules.",
      },
      {
        id: "Step 04",
        title: "Prototyping",
        description:
          "Developed interactive prototypes to demonstrate complete user flows and gather feedback before development.",
      },
      {
        id: "Step 05",
        title: "Developer Handoff",
        description:
          "Prepared design specifications, reusable components, spacing guidelines, and interaction details to support smooth implementation by developers.",
      },
    ],
    tools: ["Figma", "Adobe Illustrator"],
  },

  ophub: {
    title: "op - hub",
    category: "poc device / healthcare",
    subtitle: "Out Patient Hub",
    projectNumber: "PROJECT 03",
    role: "Secondary UX/UI Designer",
    primaryUsers: "Hospital Receptionists",
    industry: "Healthcare",
    platform: "POC Device",
    overviewParts: [
      { text: "OP HUB is a " },
      { text: "Point-of-Care (POC) application", bold: true },
      {
        text: " designed to simplify outpatient management in hospitals. It enables receptionists to book appointments, generate QR-based patient tokens, manage patient records, and handle billing through a single, streamlined interface.",
      },
    ],
    coreFeatures: ["Appointment Booking", "QR Token Generation", "Patient Records", "Billing"],
    myContribution:
      "As a Secondary UX/UI Designer, I collaborated with the primary designer and development team to design intuitive interfaces for the POC device. I contributed to screen designs, workflow improvements, UI consistency, component creation, and developer handoff while ensuring the experience remained efficient for hospital reception staff.",
    challenge:
      "The application needed to support multiple front-desk tasks within a compact POC interface, allowing receptionists to complete patient registration, appointment booking, token generation, and billing quickly with minimal effort.",
    solution:
      "Contributed to designing a clean and intuitive interface with clear information hierarchy, simplified workflows, and consistent UI components, helping receptionists perform day-to-day operations more efficiently.",
    successMetrics: [
      { value: "50+", label: "Hospitals Using The Product" },
      { value: "150+", label: "Receptionists Onboarded" },
      { value: "1000+", label: "Patients Served Monthly" },
    ],
    tools: ["Figma", "Adobe Illustrator"],
  },

  docride: {
    title: "doc ride",
    category: "mobile application / healthcare",
    subtitle: "Doctor Mobility System",
    projectNumber: "PROJECT 03",
    role: "Sole UI/UX Designer",
    primaryUsers: "Doctors & Transport Coordinators",
    industry: "Healthcare",
    platform: "Mobile Application",
    overview:
      "A mobile application designed to support doctor transportation for rural medical camps. The app helps coordinate travel, manage trip details, and ensure doctors reach their assigned locations efficiently, contributing to smoother healthcare operations.",
    coreFeatures: ["Trip Assignment", "Camp Schedule Management", "Live Trip Tracking", "Route & Location Details"],
    myContribution:
      "As the sole designer, I led the end-to-end design process, including user flow creation, wireframing, UI design, prototyping, and developer handoff. I collaborated with stakeholders to design an intuitive and efficient experience tailored to healthcare transportation workflows.",
    challenge:
      "Create a simple mobile experience that enables doctors and coordinators to manage transportation efficiently while minimizing manual coordination and improving operational visibility.",
    solution:
      "Designed a clean, intuitive interface with streamlined navigation, clear trip information, and user-friendly interactions to support seamless transportation management.",
    tools: ["Figma", "Adobe Illustrator"],
  },
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

  const hasExtendedInfo = !!(project.primaryUsers || project.industry);

  /* ─────────────────────────── shared class tokens ─────────────────────── */
  const sectionHeading = "font-syne text-[20px] sm:text-[24px] md:text-[28px] font-bold uppercase tracking-widest text-black";
  const bodyText       = "font-plus-jakarta text-[14px] sm:text-[15px] md:text-[16px] font-normal text-[#6F6F6F] leading-[1.75]";
  const labelSmall     = "font-plus-jakarta text-[10px] sm:text-[11px] font-semibold text-[#6F6F6F] tracking-widest uppercase";
  const infoLabel      = "font-plus-jakarta text-[9px] sm:text-[10px] md:text-[11px] font-semibold text-[#6F6F6F] tracking-widest uppercase mb-1";
  const infoValue      = "font-plus-jakarta text-[10px] sm:text-[11px] md:text-[12px] font-bold text-black uppercase leading-snug";

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-black">
      <Navbar />

      {/* ── Project Header ── */}
      <section className="pt-10 md:pt-20 pb-8 md:pb-10 px-4 sm:px-6 max-w-7xl mx-auto">
        {/* Label row */}
        <div className={`${labelSmall} text-[#E34330] mb-2`}>
          {project.projectNumber ?? project.category}
        </div>

        <h1 className="font-syne text-[22px] sm:text-[28px] md:text-[36px] font-bold uppercase tracking-widest text-black leading-tight mb-2">
          {project.title}
        </h1>
        <p className="font-playfair text-[13px] sm:text-[15px] md:text-[18px] font-normal text-[#8C8C8C] italic mb-6 md:mb-8">
          {project.subtitle}
        </p>

        {/* ── Info Grid ── */}
        <div className="flex flex-wrap justify-between gap-y-5 pt-5 md:pt-8 border-t border-[#E5E5E5]">
          <div className="text-left">
            <p className={infoLabel}>My Role</p>
            <p className={infoValue}>{project.role}</p>
          </div>

          {project.primaryUsers && (
            <div className="text-left">
              <p className={infoLabel}>Primary Users</p>
              <p className={infoValue}>{project.primaryUsers}</p>
            </div>
          )}

          {project.industry && (
            <div className="text-left">
              <p className={infoLabel}>Industry</p>
              <p className={infoValue}>{project.industry}</p>
            </div>
          )}

          {project.duration && (
            <div className="text-left">
              <p className={infoLabel}>Duration</p>
              <p className={infoValue}>{project.duration}</p>
            </div>
          )}

          <div className="text-right">
            <p className={infoLabel}>Platform</p>
            <p className={infoValue}>{project.platform}</p>
          </div>
        </div>
      </section>

      {/* ── Hero Image ── */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-10 md:mb-14">
        <div className="relative aspect-[16/9] w-full bg-[#E8E8E8] overflow-hidden">
          <Image
            src={`/${slug}_project.webp`}
            alt={project.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
      </section>

      {/* ── Overview + Core Features + Success Metrics ── */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-10 md:mb-16">
        {project.successMetrics ? (
          /* OP HUB: two-column on lg, stacks on mobile */
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

            {/* LEFT: Overview + Core Features */}
            <div className="flex-1 min-w-0 flex flex-col gap-8 md:gap-10">
              <div>
                <h2 className={`${sectionHeading} mb-3`}>Overview</h2>
                <p className={bodyText}>
                  {project.overviewParts
                    ? project.overviewParts.map((part, i) =>
                        part.bold
                          ? <strong key={i} className="font-bold text-black">{part.text}</strong>
                          : <span key={i}>{part.text}</span>
                      )
                    : project.overview}
                </p>
              </div>

              {project.coreFeatures && (
                <div>
                  <h2 className={`${sectionHeading} mb-3`}>Core Features</h2>
                  <ol className="list-none flex flex-col gap-0.5">
                    {project.coreFeatures.map((f, i) => (
                      <li key={i} className={bodyText}>{i + 1}. {f}</li>
                    ))}
                  </ol>
                </div>
              )}
            </div>

            {/* RIGHT: Success Metrics — full width on mobile, fixed sidebar on lg */}
            <div className="bg-[#F5EDEC] p-5 sm:p-7 md:p-9 w-full lg:w-[320px] xl:w-[360px] shrink-0">
              <p className="font-plus-jakarta text-[10px] sm:text-[11px] font-semibold text-[#E34330] uppercase mb-2">
                Performance
              </p>
              <h3 className="font-syne text-[17px] sm:text-[20px] md:text-[24px] font-bold uppercase text-black mb-5 md:mb-7 leading-snug">
                Project Success<br />Metrics
              </h3>
              <div className="flex flex-row lg:flex-col gap-5 md:gap-6 flex-wrap">
                {project.successMetrics.map((m, i) => (
                  <div key={i} className="min-w-[80px]">
                    <p className="font-plus-jakarta text-[28px] sm:text-[32px] md:text-[36px] font-extrabold text-black leading-none mb-1">
                      {m.value}
                    </p>
                    <p className="font-plus-jakarta text-[9px] sm:text-[10px] md:text-[11px] font-semibold text-[#6F6F6F] uppercase tracking-widest leading-snug">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Standard layout: Overview + optional Core Features */
          <div className="flex flex-col gap-8 md:gap-10">
            <div>
              <h2 className={`${sectionHeading} mb-3`}>Overview</h2>
              <p className={bodyText}>
                {project.overviewParts
                  ? project.overviewParts.map((part, i) =>
                      part.bold
                        ? <strong key={i} className="font-bold text-black">{part.text}</strong>
                        : <span key={i}>{part.text}</span>
                    )
                  : project.overview}
              </p>
            </div>

            {project.coreFeatures && (
              <div>
                <h2 className={`${sectionHeading} mb-3`}>Core Features</h2>
                <ol className="list-none flex flex-col gap-0.5">
                  {project.coreFeatures.map((f, i) => (
                    <li key={i} className={bodyText}>{i + 1}. {f}</li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        )}
      </section>

      {/* ── My Contribution ── */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-10 md:mb-14">
        <h2 className={`${sectionHeading} mb-3`}>My Contribution</h2>
        <p className={bodyText}>{project.myContribution}</p>
      </section>

      {/* ── Challenge ── */}
      {project.challenge && (
        <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-10 md:mb-14">
          <h2 className={`${sectionHeading} mb-3`}>Challenge</h2>
          <p className={bodyText}>{project.challenge}</p>
        </section>
      )}

      {/* ── Solution ── */}
      {project.solution && (
        <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-10 md:mb-14">
          <h2 className={`${sectionHeading} mb-3`}>Solution</h2>
          <p className={bodyText}>{project.solution}</p>
        </section>
      )}

      {/* ── Key Takeaway — HIMS only ── */}
      {project.keyTakeaway && (
        <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-10 md:mb-14">
          <h2 className={`${sectionHeading} mb-3`}>Key Takeaway</h2>
          <p className={bodyText}>{project.keyTakeaway}</p>
        </section>
      )}

      {/* ── Design Journey — HIMS & TRANSTAN ── */}
      {project.steps && project.steps.length > 0 && (
        <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-10 md:mb-20">
          <p className={`${labelSmall} mb-2`}>EXECUTION</p>
          <h2 className={`${sectionHeading} mb-6 md:mb-9`}>Design Journey</h2>
          <div className="flex flex-col gap-3 md:gap-4">
            {project.steps.map((step) => (
              <div key={step.id} className="border border-[#D8D8D8] bg-white p-4 sm:p-5 md:p-6">
                <p className="font-playfair text-[#E34330] font-medium text-[13px] sm:text-[15px] md:text-[17px] italic mb-2 md:mb-3">
                  {step.id}
                </p>
                <h3 className="font-plus-jakarta text-[14px] sm:text-[15px] md:text-[17px] font-bold text-black mb-1.5 md:mb-2">
                  {step.title}
                </h3>
                <p className="font-plus-jakarta text-[13px] sm:text-[14px] md:text-[15px] font-normal text-[#6F6F6F] leading-[1.7]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Tools Used ── */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-16 md:mb-24">
        <div className="bg-[#E343300D] border border-[#EDE8E4] p-5 sm:p-6 md:p-8">
          <p className={`${labelSmall} mb-2`}>Software</p>
          <h2 className={`${sectionHeading} mb-5 md:mb-7`}>Tools Used</h2>
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
            {project.tools.map((tool) => (
              <div
                key={tool}
                className="px-3 sm:px-4 py-2 sm:py-2.5 border border-[#E34330] text-[#E34330] font-plus-jakarta text-[11px] sm:text-[13px] md:text-[14px] font-semibold uppercase bg-white"
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
