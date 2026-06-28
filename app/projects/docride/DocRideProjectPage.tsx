"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { DocSvgIcon } from "../../assets";

/* ─────────────────────────────────────────────────────────────────
   Scroll Reveal Hook
───────────────────────────────────────────────────────────────── */
function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  return { ref, isInView };
}

/* ─────────────────────────────────────────────────────────────────
   Palette  (exact from reference screenshots)
───────────────────────────────────────────────────────────────── */
const TEAL       = "#077188";
const TEAL_DARK  = "#0C3C4D";
const TEAL_LIGHT = "#C5E4EA";
const TEAL_MID   = "#065A6D";

/* ─────────────────────────────────────────────────────────────────
   Floating notification card
───────────────────────────────────────────────────────────────── */
function FloatingCard({
  side,
  delay,
  children,
  heroReady,
  className = "",
}: {
  side: "left" | "right";
  delay: number;
  children: React.ReactNode;
  heroReady: boolean;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -50 : 50 }}
      animate={heroReady ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute z-30 bg-white rounded-xl shadow-xl px-3 py-2.5 border border-gray-100 ${className}`}
      style={{ minWidth: 160 }}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Built-in phone screen mock UI
───────────────────────────────────────────────────────────────── */
function PhoneScreen() {
  return (
    <div className="w-full h-full flex flex-col bg-[#F4F8F9] overflow-hidden">
      {/* Status bar */}
      <div className="flex justify-between items-center px-4 pt-7 pb-1">
        <span className="font-plus-jakarta text-[10px] font-bold text-black">09:41</span>
        <div className="flex items-center gap-1">
          <svg width="15" height="10" viewBox="0 0 15 10" fill="none">
            <rect x="0" y="3" width="3" height="7" rx="1" fill="#111" />
            <rect x="4" y="2" width="3" height="8" rx="1" fill="#111" />
            <rect x="8" y="0" width="3" height="10" rx="1" fill="#111" />
            <rect x="12" y="2" width="3" height="7" rx="1" fill="#ccc" />
          </svg>
        </div>
      </div>

      {/* Location */}
      <div className="px-4 pb-2">
        <div className="flex items-center gap-1">
          <svg width="8" height="10" viewBox="0 0 8 10" fill={TEAL}>
            <path d="M4 0C2.07 0 0.5 1.57 0.5 3.5C0.5 5.75 4 9.5 4 9.5C4 9.5 7.5 5.75 7.5 3.5C7.5 1.57 5.93 0 4 0Z" />
          </svg>
          <span className="font-plus-jakarta text-[9px] font-bold" style={{ color: TEAL }}>MNM School ▾</span>
        </div>
        <p className="font-plus-jakarta text-[7px] text-gray-400 pl-4">GD Goenka School, Gurg...</p>
      </div>

      {/* Check-in card */}
      <div className="mx-3 bg-white rounded-xl shadow-sm px-3 py-2.5 mb-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="font-plus-jakarta text-[9px] font-bold text-black">09:00 a.m.</p>
            <p className="font-plus-jakarta text-[7px] text-gray-400">Monday · General Shift | May 02, 2025</p>
          </div>
          <div
            className="rounded-md px-2 py-1 shrink-0"
            style={{ background: TEAL }}
          >
            <span className="font-plus-jakarta text-[7px] font-bold text-white">CHECK IN</span>
          </div>
        </div>
      </div>

      {/* Schedule label */}
      <p className="font-plus-jakarta text-[8px] font-semibold text-black px-4 mb-1.5">Schedule List</p>

      {/* Schedule cards */}
      {[
        { badge: "09:00–04:00pm", status: "Today", statusColor: TEAL, showBtn: true },
        { badge: "09:00–04:00pm", status: "Upcoming", statusColor: "#6B7280", showBtn: false },
        { badge: "09:00–04:00pm", status: "Upcoming", statusColor: "#6B7280", showBtn: false },
      ].map((c, i) => (
        <div key={i} className="mx-3 bg-white rounded-xl shadow-sm px-3 py-2 mb-2">
          <div className="flex justify-between items-center mb-1">
            <span className="rounded-full px-1.5 py-0.5 text-[6px] font-bold text-white" style={{ background: TEAL }}>
              {c.badge}
            </span>
            <span className="font-plus-jakarta text-[6.5px] font-bold" style={{ color: c.statusColor }}>
              {c.status}
            </span>
          </div>
          <div className="flex gap-2">
            <div className="flex flex-col gap-1 flex-1">
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: TEAL }} />
                <span className="font-plus-jakarta text-[6px] text-gray-700 truncate">GD Goenka School, Gurgaon</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 border border-gray-300" />
                <span className="font-plus-jakarta text-[6px] text-gray-500 truncate">National Public School, Ind...</span>
              </div>
            </div>
            <div className="flex flex-col items-end shrink-0">
              <span className="font-syne text-[14px] font-bold text-black leading-none">05</span>
              <span className="font-plus-jakarta text-[5px] text-gray-400">Fri</span>
            </div>
          </div>
          <div className="flex items-center gap-1 mt-1.5">
            {["#077188", "#E34330", "#F59E0B"].map((col, ai) => (
              <div
                key={ai}
                className="w-4 h-4 rounded-full border-2 border-white -ml-1 first:ml-0"
                style={{ background: col }}
              />
            ))}
            <span className="font-plus-jakarta text-[5.5px] text-gray-400">+2 more</span>
            {c.showBtn && (
              <div
                className="ml-auto rounded-md px-2 py-0.5"
                style={{ background: TEAL }}
              >
                <span className="font-plus-jakarta text-[6.5px] font-bold text-white">Start Ride</span>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Bottom nav */}
      <div className="mt-auto border-t border-gray-100 bg-white flex justify-around py-2">
        {[
          { name: "Home", active: true },
          { name: "Schedule", active: false },
          { name: "Claim", active: false },
        ].map(({ name, active }) => (
          <div key={name} className="flex flex-col items-center gap-0.5">
            <div
              className="w-3.5 h-3.5 rounded-sm"
              style={{ background: active ? TEAL : "#D1D5DB" }}
            />
            <span
              className="font-plus-jakarta text-[5.5px]"
              style={{ color: active ? TEAL : "#9CA3AF" }}
            >
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Phone Mockup Shell
───────────────────────────────────────────────────────────────── */
function PhoneMockup({ children, className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <div
      className={`relative w-[260px] sm:w-[280px] md:w-[300px] h-[530px] sm:h-[560px] md:h-[600px] rounded-[44px] overflow-hidden flex flex-col ${className}`}
      style={{
        background: "#111",
        border: "9px solid #1C1C1C",
        boxShadow:
          "0 40px 100px rgba(0,0,0,0.45), 0 10px 30px rgba(0,0,0,0.25), inset 0 0 0 1px rgba(255,255,255,0.07)",
      }}
    >
      {/* Dynamic island */}
      <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[82px] h-[24px] bg-black rounded-full z-20" />
      <div className="flex-1 relative overflow-hidden">
        {children ?? <PhoneScreen />}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Fade-up reveal wrapper
───────────────────────────────────────────────────────────────── */
function RevealBlock({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, isInView } = useScrollReveal();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Design-Process Circle Node
   Reference: large teal circles, progressively bigger, staggered
───────────────────────────────────────────────────────────────── */
function ProcessNode({
  index,
  label,
  total,
}: {
  index: number;
  label: string;
  total: number;
}) {
  const { ref, isInView } = useScrollReveal(0.2);

  // Circle sizes grow toward the bottom, matching the reference
  const sizes = [48, 56, 64, 72, 80, 64, 96];
  const size = sizes[index] ?? 56;
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`flex items-center gap-5 ${isLeft ? "flex-row" : "flex-row-reverse"}`}
    >
      {/* Circle */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{
          duration: 0.5,
          delay: index * 0.1 + 0.1,
          type: "spring",
          stiffness: 200,
          damping: 18,
        }}
        className="rounded-full flex-shrink-0 flex items-center justify-center"
        style={{
          width: size,
          height: size,
          background: TEAL_LIGHT,
          opacity: 0.85 - index * 0.04,
        }}
      />

      {/* Label */}
      <p className="font-plus-jakarta text-[14px] sm:text-[15px] font-medium text-black">
        {label}
      </p>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Main Page
───────────────────────────────────────────────────────────────── */
export default function DocRideProjectPage() {
  const [heroReady, setHeroReady] = useState(false);
  const [titleReady, setTitleReady] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setHeroReady(true), 300);
    const t2 = setTimeout(() => setTitleReady(true), 1000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const designProcess = [
    "Client Requirements",
    "Workflow Analysis",
    "Quick Sketches",
    "High-Fidelity UI",
    "Interactive Prototype",
    "3 Design Iterations",
    "Developer Handoff",
  ];

  const palette = [
    { hex: "#0C3C4D", name: "" },
    { hex: "#0A6580", name: "" },
    { hex: "#077188", name: "" },
    { hex: "#1AA8BB", name: "" },
    { hex: "#C0E3E7", name: "" },
  ];

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      <Navbar />

      {/* ══════════════════════════════════════════════════════════
          HERO  — light grey/white bg, large DOC RIDE watermark,
                  teal swoosh curves left/right, phone 3D flip
      ══════════════════════════════════════════════════════════ */}
      <section
        className="relative flex flex-col items-center overflow-hidden"
        style={{
          minHeight: "100svh",
          background: "#F0F4F5",
        }}
      >
        {/* ── Large watermark "DOC RIDE" (outline only) ── */}
        <div
          className="absolute inset-x-0 top-[12%] flex justify-center pointer-events-none select-none z-0"
          aria-hidden="true"
        >
          <span
            className="font-syne font-bold uppercase text-center"
            style={{
              fontSize: "clamp(70px, 15vw, 180px)",
              letterSpacing: "0.1em",
              color: "transparent",
              WebkitTextStroke: `2px ${TEAL_DARK}`,
              opacity: 0.12,
              lineHeight: 1,
            }}
          >
            DOC RIDE
          </span>
        </div>

        {/* ── Teal SVG swoosh — LEFT side ── */}
        <div
          className="absolute left-0 top-0 h-full pointer-events-none z-0"
          aria-hidden="true"
          style={{ width: "35%", maxWidth: 380 }}
        >
          <DocSvgIcon
            className="w-full h-full"
            style={{ transform: "scaleX(-1)", opacity: 0.9 }}
          />
        </div>

        {/* ── Teal SVG swoosh — RIGHT side ── */}
        <div
          className="absolute right-0 top-0 h-full pointer-events-none z-0"
          aria-hidden="true"
          style={{ width: "35%", maxWidth: 380 }}
        >
          <DocSvgIcon className="w-full h-full" style={{ opacity: 0.9 }} />
        </div>

        {/* ── Smoke blobs behind phone ── */}
        <div
          className="absolute inset-x-0 flex justify-center pointer-events-none z-5"
          style={{ bottom: "14%" }}
          aria-hidden="true"
        >
          {[
            { cls: "smoke-blob-a", w: 260, h: 180, left: "calc(50% - 180px)", color: TEAL_LIGHT },
            { cls: "smoke-blob-b", w: 320, h: 220, left: "calc(50% - 120px)", color: "#A8D9E4" },
            { cls: "smoke-blob-c", w: 240, h: 160, left: "calc(50% + 10px)",  color: TEAL_LIGHT },
            { cls: "smoke-blob-d", w: 280, h: 200, left: "calc(50% - 250px)", color: "#B5DDE6" },
            { cls: "smoke-blob-e", w: 300, h: 200, left: "calc(50% + 60px)",  color: TEAL_LIGHT },
          ].map((b, i) => (
            <div
              key={i}
              className={`absolute ${b.cls}`}
              style={{
                left: b.left,
                bottom: 0,
                width: b.w,
                height: b.h,
                borderRadius: "50%",
                background: `radial-gradient(circle, ${b.color}BB 0%, ${b.color}55 55%, transparent 80%)`,
                filter: "blur(28px)",
              }}
            />
          ))}
        </div>

        {/* ── Foreground title (emerges through smoke) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={titleReady ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-x-0 top-[9%] flex flex-col items-center z-20 pointer-events-none"
        >
          <p
            className="font-plus-jakarta text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.35em] mb-2"
            style={{ color: TEAL }}
          >
            Project Showcase
          </p>
          <h1
            className="font-syne font-bold uppercase text-center"
            style={{
              fontSize: "clamp(44px, 9vw, 110px)",
              letterSpacing: "0.12em",
              color: TEAL_DARK,
              lineHeight: 1,
            }}
          >
            DOC&nbsp;RIDE
          </h1>
          <p
            className="font-playfair italic text-[14px] sm:text-[17px] mt-2"
            style={{ color: TEAL_MID }}
          >
            Doctor Mobility System
          </p>
        </motion.div>

        {/* ── Phone centred, animates up with 3D flip ── */}
        <div className="docride-perspective absolute bottom-0 left-1/2 -translate-x-1/2 z-20">
          <motion.div
            initial={{ y: "80%", rotateX: -50, opacity: 0 }}
            animate={heroReady ? { y: "0%", rotateX: 0, opacity: 1 } : {}}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
              opacity: { duration: 0.5 },
            }}
            style={{ transformOrigin: "bottom center", transformStyle: "preserve-3d" }}
          >
            <PhoneMockup />
          </motion.div>
        </div>

        {/* ── Floating notification — LEFT ── */}
        <FloatingCard
          side="left"
          delay={1.5}
          heroReady={heroReady}
          className="left-[6%] sm:left-[10%] top-[44%]"
        >
          <div className="flex items-center gap-1.5 mb-1">
            <div
              className="w-5 h-5 rounded-md flex items-center justify-center shrink-0"
              style={{ background: TEAL_DARK }}
            >
              <span className="text-white text-[7px] font-bold">DR</span>
            </div>
            <span className="font-plus-jakarta text-[9px] font-bold" style={{ color: TEAL_DARK }}>
              DocRide
            </span>
            <span className="font-plus-jakarta text-[8px] text-gray-400 ml-auto">30m ago</span>
          </div>
          <p className="font-plus-jakarta text-[10px] font-bold text-black">New Message!</p>
          <p className="font-plus-jakarta text-[8.5px] text-gray-500 mt-0.5 leading-tight">
            You&apos;ll arrive at your destination shortly.
          </p>
          <div className="mt-1.5 flex gap-1">
            <button className="text-[7px] font-plus-jakarta font-semibold px-2 py-0.5 rounded bg-gray-100 text-gray-600">
              Reply
            </button>
            <button className="text-[7px] font-plus-jakarta font-semibold px-2 py-0.5 rounded bg-gray-100 text-gray-600">
              Collect
            </button>
          </div>
        </FloatingCard>

        {/* ── Floating notification — RIGHT ── */}
        <FloatingCard
          side="right"
          delay={1.8}
          heroReady={heroReady}
          className="right-[6%] sm:right-[10%] top-[35%]"
        >
          <div className="flex items-center gap-1.5 mb-1">
            <div
              className="w-5 h-5 rounded-md flex items-center justify-center shrink-0"
              style={{ background: TEAL }}
            >
              <span className="text-white text-[7px] font-bold">DR</span>
            </div>
            <span className="font-plus-jakarta text-[9px] font-bold" style={{ color: TEAL_DARK }}>
              DocRide
            </span>
            <span className="font-plus-jakarta text-[8px] text-gray-400 ml-auto">30m ago</span>
          </div>
          <p className="font-plus-jakarta text-[10px] font-bold text-black">New Message!</p>
          <p className="font-plus-jakarta text-[8.5px] text-gray-500 mt-0.5 leading-tight">
            Ready for passenger drop-off?
          </p>
        </FloatingCard>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={titleReady ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-30"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8"
            style={{ background: `linear-gradient(to bottom, ${TEAL}, transparent)` }}
          />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          WHAT IS DOC RIDE?  — white bg, pill badge, big quote
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-28 px-4 sm:px-6 max-w-7xl mx-auto">
        <RevealBlock delay={0} className="mb-8">
          <div
            className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5"
            style={{ borderColor: TEAL_DARK, color: TEAL_DARK }}
          >
            <span className="font-plus-jakarta text-[11px] font-semibold">
              What is <span style={{ color: TEAL }} className="font-bold">Doc Ride</span> ?
            </span>
          </div>
        </RevealBlock>

        <RevealBlock delay={0.08}>
          {/* Opening quote */}
          <div className="mb-4">
            <span
              className="font-playfair font-bold leading-none select-none"
              style={{ fontSize: 72, color: TEAL_DARK, lineHeight: 0.8 }}
            >
              &ldquo;&ldquo;
            </span>
          </div>
          <p
            className="font-plus-jakarta text-[18px] sm:text-[22px] md:text-[26px] leading-[1.55] text-[#3A3A3A] max-w-4xl"
          >
            This application helps drivers manage their daily trips by{" "}
            <strong className="font-bold text-black">
              handling schedules, vehicle assignments,
            </strong>{" "}
            <span className="inline-flex items-center gap-1.5">
              <span
                className="inline-flex items-center justify-center w-7 h-7 rounded-full text-white text-[10px] font-bold align-middle"
                style={{ background: TEAL }}
              >
                ●
              </span>
              <strong className="font-bold text-black">trip tracking,</strong>
            </span>{" "}
            <strong className="font-bold text-black">
              passenger details, expense claims, and shift check-in/
            </strong>
            <strong className="font-bold text-black">check-out</strong>{" "}
            in one place.
          </p>
        </RevealBlock>
      </section>

      {/* ══════════════════════════════════════════════════════════
          PROJECT META + CONTEXT
          Left: four rows (Industry / Category / Platform / My Role)
          Right: context paragraph
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-white border-t border-gray-100 py-16 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16">
          {/* Left col */}
          <div className="flex flex-col gap-3">
            {[
              { label: "Industry",  value: "Healthcare" },
              { label: "Category",  value: "Transportation" },
              { label: "Platform",  value: "Mobile Application" },
              { label: "My Role",   value: "UI UX Designer" },
            ].map(({ label, value }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-3"
              >
                <span className="font-plus-jakarta text-[11px] font-semibold uppercase tracking-widest text-[#9CA3AF] w-20 shrink-0">
                  {label}
                </span>
                <span className="font-plus-jakarta text-[13px] font-bold text-black">{value}</span>
              </motion.div>
            ))}
          </div>

          {/* Right col */}
          <RevealBlock delay={0.1}>
            <p className="font-plus-jakarta text-[14px] sm:text-[15px] leading-[1.85] text-[#6F6F6F]">
              Doctors travel to multiple rural medical camps every day. Drivers
              previously relied on phone calls and manual coordination to manage trips,
              leading to scheduling confusion, missing passenger information, and
              delayed expense reporting. DocRide centralises the driver&apos;s daily
              workflow into a single mobile application.
            </p>
          </RevealBlock>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          DESIGN PROCESS  — matches reference exactly:
          "Design" (Playfair big) + "Process" below it
          Right: vertical list with LARGE TEAL CIRCLES growing bigger
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-4 sm:px-6" style={{ background: "#F9F9F7" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — heading + blurb */}
          <div className="lg:sticky lg:top-28">
            <RevealBlock>
              <p className="font-plus-jakarta text-[13px] sm:text-[14px] leading-[1.85] text-[#9CA3AF] mb-6 max-w-sm">
                With only one week to deliver the driver application, I
                focused on understanding user workflows, leveraging the
                existing design system, and rapidly iterating based on
                stakeholder feedback to deliver a development-ready design.
              </p>
            </RevealBlock>
            <RevealBlock delay={0.08}>
              <h2
                className="font-playfair font-bold leading-none mb-2"
                style={{ fontSize: "clamp(56px, 8vw, 96px)", color: "black" }}
              >
                Design
              </h2>
              <h2
                className="font-playfair font-normal leading-none"
                style={{ fontSize: "clamp(36px, 5.5vw, 64px)", color: "#9CA3AF" }}
              >
                Process
              </h2>
            </RevealBlock>
          </div>

          {/* Right — timeline with growing circles */}
          <div className="flex flex-col gap-6 pt-2">
            {designProcess.map((label, i) => (
              <ProcessNode key={label} index={i} label={label} total={designProcess.length} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          DESIGN SYSTEM  — LIGHT BG (matches reference screenshot 3)
          Grid of: colour strips | typography card | phone + components
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">

          {/* Top row: colour swatches (2 tall) + typography card + accent square */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-4">

            {/* Tall gradient swatch */}
            <RevealBlock delay={0} className="row-span-2">
              <div
                className="w-full h-full min-h-[120px] rounded-2xl"
                style={{
                  background: `linear-gradient(160deg, #1A7A8E 0%, #0C3C4D 100%)`,
                  minHeight: 140,
                }}
              />
            </RevealBlock>

            {/* "MAIN TYPEFACE" card */}
            <RevealBlock delay={0.07}>
              <div className="bg-white rounded-2xl p-4 flex flex-col justify-center min-h-[68px]">
                <p className="font-plus-jakarta text-[9px] uppercase tracking-widest text-gray-400 mb-0.5">Main Typeface</p>
                <p className="font-plus-jakarta text-[9px] text-gray-300">Regular · Medium</p>
              </div>
            </RevealBlock>

            {/* Big dark typography tile */}
            <RevealBlock delay={0.1} className="col-span-1 md:col-span-1 row-span-2">
              <div
                className="rounded-2xl p-4 flex flex-col justify-center min-h-[148px]"
                style={{ background: TEAL_DARK }}
              >
                <p className="font-plus-jakarta text-white text-[28px] sm:text-[36px] font-bold leading-tight tracking-tight">
                  AaBbCc<br />012345<br />!@#$%^
                </p>
              </div>
            </RevealBlock>

            {/* "Start Ride" button card */}
            <RevealBlock delay={0.13}>
              <div className="bg-white rounded-2xl px-4 py-3 flex items-center justify-center min-h-[68px]">
                <button
                  className="rounded-lg px-5 py-2 font-plus-jakarta text-[13px] font-bold text-white"
                  style={{ background: TEAL }}
                >
                  Start Ride
                </button>
              </div>
            </RevealBlock>

            {/* "Inter" typography card */}
            <RevealBlock delay={0.04}>
              <div className="bg-white rounded-2xl p-4 flex items-center justify-center min-h-[68px]">
                <span className="font-plus-jakarta text-[36px] font-bold text-black" style={{ letterSpacing: "-0.02em" }}>
                  Inter
                </span>
              </div>
            </RevealBlock>
          </div>

          {/* Second row: colour strip tiles + calendar + bottom nav */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">

            {/* Colour strip — horizontal */}
            <RevealBlock delay={0.05} className="col-span-2 sm:col-span-1">
              <div className="flex rounded-2xl overflow-hidden h-[90px]">
                {palette.map((c) => (
                  <div key={c.hex} className="flex-1" style={{ background: c.hex }} />
                ))}
              </div>
            </RevealBlock>

            {/* Calendar-style card */}
            <RevealBlock delay={0.08}>
              <div className="bg-white rounded-2xl p-3 min-h-[90px]">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400 text-[10px]">←</span>
                  <span className="font-plus-jakarta text-[9px] font-bold text-black">July 2025</span>
                  <span className="text-gray-400 text-[10px]">→</span>
                </div>
                <div className="grid grid-cols-7 gap-0.5">
                  {["Su","Mo","Tu","We","Th","Fr","Sa"].map(d => (
                    <span key={d} className="font-plus-jakarta text-[6px] text-gray-400 text-center">{d}</span>
                  ))}
                  {Array.from({ length: 30 }, (_, i) => i + 1).map(n => (
                    <div
                      key={n}
                      className="w-full aspect-square flex items-center justify-center rounded-full font-plus-jakarta text-[7px]"
                      style={{
                        background: n === 15 ? TEAL : "transparent",
                        color: n === 15 ? "white" : n < 7 ? "#9CA3AF" : "#374151",
                      }}
                    >
                      {n}
                    </div>
                  ))}
                </div>
              </div>
            </RevealBlock>

            {/* Bottom nav preview card */}
            <RevealBlock delay={0.11} className="col-span-2 sm:col-span-2">
              <div className="bg-white rounded-2xl p-4 flex items-center justify-center min-h-[90px]">
                <div className="flex gap-8 items-center">
                  {[
                    { name: "Home", active: true },
                    { name: "Schedule", active: false },
                  ].map(({ name, active }) => (
                    <div key={name} className="flex flex-col items-center gap-1">
                      <div
                        className="w-6 h-6 rounded"
                        style={{ background: active ? TEAL : "#D1D5DB" }}
                      />
                      <span
                        className="font-plus-jakarta text-[10px] font-semibold"
                        style={{ color: active ? TEAL : "#9CA3AF" }}
                      >
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealBlock>
          </div>

          {/* Third row: Phone mockup (centered) + vehicle card + tools */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">

            {/* Vehicle details card */}
            <RevealBlock delay={0.06}>
              <div className="bg-white rounded-2xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                    <div className="w-5 h-3 rounded-sm bg-gray-400" />
                  </div>
                  <div>
                    <p className="font-plus-jakarta text-[10px] font-bold text-black">AB 01 XY 9876</p>
                    <p className="font-plus-jakarta text-[8px] text-gray-400">334 km Covered</p>
                  </div>
                </div>
                <p className="font-plus-jakarta text-[9px] text-gray-600">Ford | Ford Mustang | 2014</p>
              </div>
            </RevealBlock>

            {/* Centered phone */}
            <RevealBlock delay={0.03} className="flex justify-center">
              <div className="docride-perspective">
                <motion.div
                  initial={{ rotateY: -20, opacity: 0 }}
                  whileInView={{ rotateY: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <PhoneMockup className="!w-[200px] !h-[400px]" />
                </motion.div>
              </div>
            </RevealBlock>

            {/* Schedule + tools */}
            <div className="flex flex-col gap-3">
              {/* Date cards */}
              <RevealBlock delay={0.09}>
                <div className="bg-white rounded-2xl p-4">
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: "13 Dec 2025", time: "10:00 AM", place: "BTM Research Park,\nKanagam Road,\nTaramani, Chennai 001" },
                      { label: "13 Dec 2025", time: "07:00 PM", place: "BTM Research Park,\nKanagam Road,\nTaramani, Chennai 001" },
                    ].map((d, i) => (
                      <div key={i}>
                        <p className="font-plus-jakarta text-[8px] font-bold text-black">{d.label}</p>
                        <p className="font-plus-jakarta text-[8px] font-bold" style={{ color: TEAL }}>{d.time}</p>
                        <p className="font-plus-jakarta text-[7px] text-gray-400 whitespace-pre-line">{d.place}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealBlock>

              {/* Plus button */}
              <RevealBlock delay={0.11}>
                <div className="flex justify-end">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xl font-light shadow-md"
                    style={{ background: TEAL }}
                  >
                    +
                  </div>
                </div>
              </RevealBlock>

              {/* Tools used */}
              <RevealBlock delay={0.13}>
                <div>
                  <p className="font-plus-jakarta text-[10px] text-gray-400 mb-1">Tools Used</p>
                  <div className="flex gap-2">
                    {/* Figma icon */}
                    <div className="w-8 h-8 rounded-lg overflow-hidden bg-white shadow-sm border border-gray-100 flex items-center justify-center">
                      <svg width="16" height="22" viewBox="0 0 38 57" fill="none">
                        <path d="M19 28.5C19 24.91 21.91 22 25.5 22C29.09 22 32 24.91 32 28.5C32 32.09 29.09 35 25.5 35C21.91 35 19 32.09 19 28.5Z" fill="#1ABCFE"/>
                        <path d="M6 41.5C6 37.91 8.91 35 12.5 35H19V41.5C19 45.09 16.09 48 12.5 48C8.91 48 6 45.09 6 41.5Z" fill="#0ACF83"/>
                        <path d="M19 9V22H25.5C29.09 22 32 19.09 32 15.5C32 11.91 29.09 9 25.5 9H19Z" fill="#FF7262"/>
                        <path d="M6 15.5C6 19.09 8.91 22 12.5 22H19V9H12.5C8.91 9 6 11.91 6 15.5Z" fill="#F24E1E"/>
                        <path d="M6 28.5C6 32.09 8.91 35 12.5 35H19V22H12.5C8.91 22 6 24.91 6 28.5Z" fill="#A259FF"/>
                      </svg>
                    </div>
                    {/* Illustrator icon */}
                    <div className="w-8 h-8 rounded-lg overflow-hidden bg-[#FF7C00] shadow-sm flex items-center justify-center">
                      <span className="font-syne text-white font-bold text-[10px]">Ai</span>
                    </div>
                  </div>
                </div>
              </RevealBlock>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
