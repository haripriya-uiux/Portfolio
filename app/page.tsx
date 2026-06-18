"use client";

import React, { useState, useEffect } from "react";

// Inline Types
interface Project {
  id: number;
  title: string;
  category: "design" | "engineering" | "system";
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
}

interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string;
  achievements: string[];
}

export default function Home() {
  // Theme Management
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // Determine initial theme
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    // Apply theme changes
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Projects Filtering
  const [activeFilter, setActiveFilter] = useState<"all" | "design" | "engineering" | "system">("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "Nova Design System",
      category: "system",
      description: "A comprehensive design system built in Figma and implemented in React & Tailwind CSS. Features dark mode tokens, fully accessible interactive inputs, and complete design-to-code synchrony.",
      tech: ["Figma Tokens", "React.js", "Tailwind CSS", "Storybook", "A11y"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Vibe - Music Streaming Dashboard",
      category: "engineering",
      description: "An interactive music application interface focusing on high-fidelity animations, micro-interactions, responsive sidebars, and customizable player interfaces.",
      tech: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript", "Figma"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "EcoSphere Mobile Application",
      category: "design",
      description: "End-to-end UX project including user research surveys, persona development, wireframing, and an interactive high-fidelity prototype in Figma.",
      tech: ["Figma", "UX Research", "ProtoPie", "Wireframing", "User Testing"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Apex Crypto Terminal UI",
      category: "design",
      description: "A dark-themed workspace design displaying complex real-time market data charts, transaction tables, and portfolio visual assets.",
      tech: ["Figma", "Visual Design", "Illustrator", "Dashboard Architecture"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter((p) => p.category === activeFilter);

  // Experience Data
  const experiences: Experience[] = [
    {
      id: 1,
      role: "Senior UI/UX Engineer",
      company: "Plenome Technologies",
      duration: "2024 - Present",
      description: "Leading user interface design and bridging the engineering gap by implementing pixel-perfect React layouts.",
      achievements: [
        "Architected custom design tokens in Figma and synced them with Tailwind CSS configuration files.",
        "Engineered smooth core interactive web flows, decreasing drop-off rates by 28%.",
        "Established accessibility (WCAG) guidelines across frontend applications.",
      ],
    },
    {
      id: 2,
      role: "UI/UX Designer & Developer",
      company: "TechFlow Solutions",
      duration: "2022 - 2024",
      description: "Conducted user research, mapped information architectures, built prototypes, and translated layouts to functional web designs.",
      achievements: [
        "Created interactive high-fidelity prototypes in Figma and ProtoPie for client review cycles.",
        "Coded responsive website pages using CSS Grid, Flexbox, and Framer Motion.",
        "Facilitated usability testing and integrated user feedback into iterative design updates.",
      ],
    },
  ];

  // Tool Categories
  const toolCategories = [
    {
      title: "Design & Prototyping",
      icon: (
        <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      tools: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "After Effects", "Spline 3D", "ProtoPie", "Framer", "Lottie"],
    },
    {
      title: "UI Engineering & Code",
      icon: (
        <svg className="h-6 w-6 text-cyan-600 dark:text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      tools: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "CSS Custom Properties", "Framer Motion", "HTML5 & CSS3", "Sass"],
    },
    {
      title: "UX Research & Workflow",
      icon: (
        <svg className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10a2 2 0 01-2 2h-2a2 2 0 01-2-2zm9-3h-1.5a1 1 0 00-1 1v3a1 1 0 001 1H18a1 1 0 001-1v-3a1 1 0 00-1-1zm-6 0a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3z" />
        </svg>
      ),
      tools: ["Design Systems", "Wireframing", "Usability Testing", "User Persona Mapping", "Storybook", "Git & GitHub", "Vercel", "WCAG Accessibility"],
    },
  ];

  // Contact Form State
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formErrors, setFormErrors] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;
    const errors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      errors.name = "Please enter your name.";
      valid = false;
    }
    if (!formData.email.trim()) {
      errors.email = "Please enter your email.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
      valid = false;
    }
    if (!formData.message.trim()) {
      errors.message = "Please enter a message.";
      valid = false;
    }

    if (!valid) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      // Reset success status after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100">
      
      {/* Sticky Glassmorphic Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/50 bg-slate-50/80 backdrop-blur-md transition-colors duration-300 dark:border-zinc-800/50 dark:bg-zinc-950/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="group flex items-center gap-2 font-mono text-xl font-bold tracking-tight">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-md transition-transform duration-300 group-hover:scale-105 dark:bg-indigo-500">
              H
            </span>
            <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent dark:from-indigo-400 dark:to-cyan-400 font-sans tracking-normal">
              Haripriya
            </span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">About</a>
            <a href="#skills" className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">Skills</a>
            <a href="#projects" className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">Projects</a>
            <a href="#experience" className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">Experience</a>
            <a href="#contact" className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">Contact</a>
          </nav>

          {/* Action Area */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition-all hover:bg-slate-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
            >
              {theme === "dark" ? (
                // Sun Icon
                <svg className="h-5 w-5 text-amber-400 animate-[pulse_2s_infinite]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m12.728 5.657a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : (
                // Moon Icon
                <svg className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <a
              href="#contact"
              className="hidden sm:inline-flex h-9 items-center justify-center rounded-lg bg-indigo-600 px-4 text-sm font-semibold text-white shadow-md transition-colors hover:bg-indigo-500 active:scale-[0.98] dark:bg-indigo-500 dark:hover:bg-indigo-400"
            >
              Hire Me
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="relative overflow-hidden py-20 lg:py-32">
        {/* Visual Background Elements */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(99,102,241,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(99,102,241,0.08),rgba(0,0,0,0))]" />
        
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:items-center">
          
          {/* Hero Content */}
          <div className="flex flex-col items-start space-y-6 text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/50 px-3 py-1 text-sm font-medium text-indigo-700 dark:border-indigo-500/20 dark:bg-indigo-950/35 dark:text-indigo-400">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              Available for New Opportunities
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Hi, I'm{" "}
              <span className="block mt-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400">
                Haripriya
              </span>
            </h1>

            <p className="text-xl font-semibold text-slate-800 dark:text-zinc-200">
              UI/UX Engineer & Designer
            </p>

            <p className="max-w-lg text-lg leading-relaxed text-slate-600 dark:text-zinc-400">
              I design interface systems and build premium frontend implementations. Bridging the gap between conceptual design and production-ready code.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="flex h-12 items-center justify-center rounded-lg bg-indigo-600 px-6 font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-500 hover:shadow-indigo-500/35 active:scale-95 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:shadow-none"
              >
                View Work Portfolio
              </a>
              <a
                href="#contact"
                className="flex h-12 items-center justify-center rounded-lg border border-slate-300 bg-white px-6 font-semibold shadow-sm transition-colors hover:bg-slate-100 hover:text-indigo-600 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-800 dark:hover:text-indigo-400"
              >
                Let's Connect
              </a>
            </div>
          </div>

          {/* Hero Profile Image Placeholder Frame */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative flex h-[320px] w-[320px] sm:h-[380px] sm:w-[380px] items-center justify-center">
              
              {/* Spinning Decorative Borders */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-400/30 animate-[spin_40s_linear_infinite] dark:border-indigo-500/20" />
              <div className="absolute inset-4 rounded-full border border-cyan-400/20 animate-[spin_25s_linear_infinite_reverse] dark:border-cyan-500/10" />

              {/* Glowing Background Ring */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-cyan-500/20 opacity-70 blur-xl dark:from-indigo-500/10 dark:via-purple-500/10 dark:to-cyan-500/10" />
              
              {/* Central Premium Placeholder Circle */}
              <div className="relative flex h-[280px] w-[280px] sm:h-[320px] sm:w-[320px] overflow-hidden rounded-full border border-slate-200 bg-gradient-to-tr from-slate-100 via-indigo-50/20 to-cyan-50/20 shadow-2xl transition-all duration-500 dark:border-zinc-800 dark:from-zinc-900 dark:via-indigo-950/25 dark:to-cyan-950/25">
                
                {/* Visual Diagonal Grid Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]" />

                {/* Circular Gradient Accent */}
                <div className="absolute top-1/4 left-1/4 h-32 w-32 rounded-full bg-indigo-500/20 opacity-50 blur-2xl dark:bg-indigo-400/10" />

                {/* Placeholder Icon and Text */}
                <div className="relative flex flex-col items-center justify-center w-full p-8 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-600 mb-4 dark:bg-indigo-500/20 dark:text-indigo-400">
                    {/* User Silhouette / Profile Icon */}
                    <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  
                  <span className="font-mono text-xs tracking-wider text-indigo-600 dark:text-indigo-400 uppercase font-semibold">
                    Profile Image Frame
                  </span>
                  
                  <p className="mt-2 text-xs text-slate-500 dark:text-zinc-500 max-w-[180px]">
                    Ideal size: 800 x 800 px. Image source can be updated in code later.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Creative Toolkit / Skills Section */}
      <section id="skills" className="border-t border-slate-200/60 bg-slate-100/30 py-20 dark:border-zinc-900 dark:bg-zinc-900/10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center space-y-4 mb-14">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Creative Toolkit & Stack</h2>
            <p className="mx-auto max-w-2xl text-slate-600 dark:text-zinc-400">
              An inspection of design software, structural frameworks, styling platforms, and UX testing processes that I use daily.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {toolCategories.map((category, idx) => (
              <div
                key={idx}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 mb-6 group-hover:scale-105 transition-transform duration-300 dark:bg-zinc-800">
                  {category.icon}
                </div>
                
                <h3 className="text-lg font-bold mb-4">{category.title}</h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-indigo-50 hover:text-indigo-600 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-indigo-950/40 dark:hover:text-indigo-400"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="text-left space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
              <p className="max-w-xl text-slate-600 dark:text-zinc-400">
                A showcase of design deliverables, design tokens implementation, and frontend templates.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 text-sm font-medium self-start md:self-end">
              {(["all", "design", "engineering", "system"] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-lg px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                    activeFilter === filter
                      ? "bg-indigo-600 text-white dark:bg-indigo-500"
                      : "bg-slate-200/50 hover:bg-slate-200 text-slate-700 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-300"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/40"
              >
                
                {/* 16:9 Image Placeholder Container */}
                <div className="relative aspect-video w-full overflow-hidden border-b border-slate-100 bg-gradient-to-br from-slate-100 via-indigo-50/10 to-cyan-50/10 dark:border-zinc-800 dark:from-zinc-900/60 dark:via-indigo-950/10 dark:to-cyan-950/10">
                  {/* Subtle Grid Background Pattern */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:16px_16px] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)]" />

                  {/* Radial Gradient overlay that changes on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-200/30 to-transparent transition-opacity group-hover:opacity-40 dark:from-zinc-950/40" />
                  
                  {/* Content inside placeholder */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-200/50 text-slate-500 mb-3 group-hover:scale-110 transition-transform duration-300 dark:bg-zinc-800/80 dark:text-zinc-400">
                      {/* Code / Visual Icon */}
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l-1-1h8l-1 1-.813-5.096M3 10h18M4 14h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v8a1 1 0 001 1z" />
                      </svg>
                    </div>
                    
                    <span className="font-mono text-xs font-semibold tracking-wider text-indigo-600/80 dark:text-indigo-400/80 uppercase">
                      Visual Image Placeholder
                    </span>
                    <p className="mt-1 text-[11px] text-slate-400 dark:text-zinc-500 max-w-[200px]">
                      Aspect Ratio 16:9. Design screenshot will replace this.
                    </p>
                  </div>

                  {/* Absolute category badge */}
                  <span className="absolute top-4 right-4 rounded-full bg-slate-900/80 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white dark:bg-zinc-950/80">
                    {project.category}
                  </span>
                </div>

                {/* Card Details */}
                <div className="flex flex-1 flex-col p-6 text-left">
                  <h3 className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-indigo-600 dark:text-zinc-100 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-zinc-400 flex-1">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700 dark:bg-zinc-800/60 dark:text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Link Actions */}
                  <div className="mt-6 flex items-center gap-4 border-t border-slate-100 pt-4 dark:border-zinc-800/80">
                    <a
                      href={project.githubUrl}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                      View Assets / Code
                    </a>
                    
                    <a
                      href={project.liveUrl}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors ml-auto"
                    >
                      Interactive Prototype
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="border-t border-slate-200/60 bg-slate-100/30 py-20 dark:border-zinc-900 dark:bg-zinc-900/10">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center space-y-4 mb-14">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Work Experience</h2>
            <p className="mx-auto max-w-2xl text-slate-600 dark:text-zinc-400">
              A chronological overview of my professional timeline, establishing designs, systems, and prototypes.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative border-l border-slate-200 pl-6 dark:border-zinc-800 space-y-12 ml-4">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative group text-left">
                
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-white border border-slate-300 dark:bg-zinc-900 dark:border-zinc-700">
                  <div className="h-1.5 w-1.5 rounded-full bg-indigo-600 transition-transform group-hover:scale-150 dark:bg-indigo-500" />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100">{exp.role}</h3>
                    <span className="font-mono text-sm font-semibold text-indigo-600 dark:text-indigo-400">{exp.company}</span>
                  </div>
                  <span className="inline-block self-start rounded-full bg-slate-200/50 px-3 py-1 text-xs font-bold tracking-wider text-slate-700 dark:bg-zinc-800/70 dark:text-zinc-300 sm:self-center">
                    {exp.duration}
                  </span>
                </div>

                <p className="mt-3 text-sm text-slate-600 dark:text-zinc-400 font-medium">
                  {exp.description}
                </p>

                {/* Achievements List */}
                <ul className="mt-4 space-y-2">
                  {exp.achievements.map((ach, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-500 dark:text-zinc-400">
                      <svg className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            
            {/* Contact Details Card (Left side) */}
            <div className="flex flex-col justify-between text-left lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get In Touch</h2>
                <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
                  Have an interesting design system to build, user flows to map, or a UI/UX position open? Send a message, connect with me, or drop an email!
                </p>
              </div>

              {/* Direct Info */}
              <div className="space-y-4 font-medium">
                <a
                  href="mailto:vpraveenganth666@gmail.com"
                  className="group flex items-center gap-3 text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  vpraveenganth666@gmail.com
                </a>

                <div className="flex items-center gap-3 text-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  Chennai, India
                </div>
              </div>

              {/* Social Channels */}
              <div className="flex gap-4">
                {/* LinkedIn */}
                <a
                  href="#"
                  aria-label="LinkedIn Profile"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white shadow-sm hover:border-indigo-500 hover:text-indigo-600 transition-colors dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-400 dark:hover:text-indigo-400"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                
                {/* GitHub */}
                <a
                  href="#"
                  aria-label="GitHub Profile"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white shadow-sm hover:border-indigo-500 hover:text-indigo-600 transition-colors dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-400 dark:hover:text-indigo-400"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Validation Contact Form (Right side) */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md dark:border-zinc-800/80 dark:bg-zinc-900/40">
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="text-left">
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-800 dark:text-zinc-200">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Jane Doe"
                      className={`mt-2 block w-full rounded-lg border bg-slate-50 px-4 py-3 text-sm outline-none transition-all dark:bg-zinc-900/60 ${
                        formErrors.name
                          ? "border-red-500 ring-2 ring-red-500/20"
                          : "border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 dark:border-zinc-800 dark:focus:border-indigo-400"
                      }`}
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-xs font-semibold text-red-500">{formErrors.name}</p>
                    )}
                  </div>

                  <div className="text-left">
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-800 dark:text-zinc-200">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="jane@example.com"
                      className={`mt-2 block w-full rounded-lg border bg-slate-50 px-4 py-3 text-sm outline-none transition-all dark:bg-zinc-900/60 ${
                        formErrors.email
                          ? "border-red-500 ring-2 ring-red-500/20"
                          : "border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 dark:border-zinc-800 dark:focus:border-indigo-400"
                      }`}
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-xs font-semibold text-red-500">{formErrors.email}</p>
                    )}
                  </div>

                  <div className="text-left">
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-800 dark:text-zinc-200">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Type your message details here..."
                      className={`mt-2 block w-full rounded-lg border bg-slate-50 px-4 py-3 text-sm outline-none transition-all dark:bg-zinc-900/60 resize-none ${
                        formErrors.message
                          ? "border-red-500 ring-2 ring-red-500/20"
                          : "border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 dark:border-zinc-800 dark:focus:border-indigo-400"
                      }`}
                    />
                    {formErrors.message && (
                      <p className="mt-1 text-xs font-semibold text-red-500">{formErrors.message}</p>
                    )}
                  </div>

                  {/* Submission Status Alerts */}
                  {isSubmitted && (
                    <div className="flex items-center gap-3 rounded-lg border border-emerald-500/30 bg-emerald-50/50 p-4 text-emerald-800 dark:bg-emerald-950/20 dark:text-emerald-400 text-left">
                      <svg className="h-5 w-5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div className="text-xs font-medium">
                        <span className="font-bold">Thank you!</span> Your message has been received successfully. I will get back to you shortly.
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white shadow-md transition-colors hover:bg-indigo-500 active:scale-[0.99] disabled:opacity-50 dark:bg-indigo-500 dark:hover:bg-indigo-400"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending Message...
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200/50 py-8 text-center text-xs text-slate-500 dark:border-zinc-800 dark:text-zinc-500">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-medium text-slate-500 dark:text-zinc-400">© {new Date().getFullYear()} Haripriya. All rights reserved.</p>
          <p className="font-mono">
            Designed & Built with React, Next.js & Tailwind CSS v4.
          </p>
        </div>
      </footer>

    </div>
  );
}
