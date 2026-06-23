import React from "react";
import Link from "next/link";
import Image from "next/image";
import DraggableBadge from "./DraggableBadge";

export default function Projects() {
  const projects = [
    {
      id: "01",
      slug: "transtan",
      title: "TRANSTAN",
      category: "WEB APPLICATION",
      subtitle: "Organ Transplant Management System",
      tag: "Healthcare",
      image: "/transtan_project.webp",
      hasImage: true,
    },
    {
      id: "02",
      slug: "ophub",
      title: "OP HUB",
      category: "POC DEVICE",
      subtitle: "Out Patient Appointment Management Device",
      tag: "Healthcare",
      image: "/ophub_project.webp",
      hasImage: true,
    },
    {
      id: "03",
      slug: "hims",
      title: "HIMS",
      category: "WEB APPLICATION",
      subtitle: "Hospital Information Management System",
      tag: "Healthcare",
      image: "/hims_project.webp",
      hasImage: true,
    },
    {
      id: "04",
      slug: "docride",
      title: "DOC RIDE",
      category: "MOBILE APPLICATION",
      subtitle: "Doctor Mobility System",
      tag: "Healthcare",
      image: "/docride_project.webp",
      hasImage: true,
    },
  ];

  return (
    <section id="projects" className="py-24 bg-[#FAFAFA]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E5E5E5] pb-6 mb-12">
          <div className="space-y-2">
            <div className="font-plus-jakarta text-[14px] font-semibold text-[#E34330] uppercase tracking-widest">
              PORTFOLIO
            </div>
            <h2 className="font-syne text-[22px] md:text-[32px] font-bold text-black uppercase tracking-widest leading-none">
              SELECTED WORK
            </h2>
          </div>
          <div className="font-roboto text-[16px] font-normal text-[#6F6F6F] mt-4 md:mt-0 tracking-wide">
            Displaying 8 Projects
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col group cursor-pointer">
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full bg-[#D3DEE0] mb-6 overflow-hidden flex items-center justify-center group/img">
                {project.hasImage && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="object-cover z-10 transition-transform duration-500 group-hover/img:scale-105"
                  />
                )}

                {/* Draggable Category Label */}
                <DraggableBadge label={project.category} />

                {/* Plus Button Link */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="absolute bottom-4 right-4 bg-black text-white w-10 h-10 flex items-center justify-center transition-transform hover:scale-105 z-30"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.3 14V7.7H0V6.3H6.3V0H7.7V6.3H14V7.7H7.7V14H6.3Z" fill="white" />
                  </svg>
                </Link>
              </div>

              {/* Text Container */}
              <div className="flex flex-col px-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-2">
                  <div className="flex items-center gap-x-3 md:gap-x-4.5">
                    <span className="font-playfair text-[#E34330] text-[16px] md:text-[20px] font-medium italic">{project.id}</span>
                    <h3 className="font-syne text-[20px] md:text-[26px] font-bold text-black uppercase tracking-widest">
                      {project.title}
                    </h3>
                  </div>
                  <span className="font-roboto text-[13px] md:text-[16px] font-bold text-black uppercase tracking-widest sm:ml-auto">
                    {project.tag}
                  </span>
                </div>
                <p className="font-roboto text-[14px] font-medium text-[#8C8C8C] mt-1.5 ml-6 md:ml-10">{project.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
