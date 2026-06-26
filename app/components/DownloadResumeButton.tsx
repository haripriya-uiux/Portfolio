"use client";

import React, { useState, useRef } from "react";

interface DownloadResumeButtonProps {
  variant?: "hero" | "about";
  className?: string;
  children?: React.ReactNode;
}

export default function DownloadResumeButton({ variant = "hero", className, children }: DownloadResumeButtonProps) {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const [downloading, setDownloading] = useState(false);
  const [done, setDone] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // ── 1. Ripple origin from click position ──
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples((prev) => [...prev, { id, x, y }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 700);

    // ── 2. Progress bar + checkmark sequence ──
    if (timerRef.current) clearTimeout(timerRef.current);
    setDownloading(true);
    setDone(false);

    timerRef.current = setTimeout(() => {
      setDownloading(false);
      setDone(true);
      timerRef.current = setTimeout(() => setDone(false), 1800);
    }, 1400);
  };

  const defaultHeroClass =
    "font-plus-jakarta font-[600] text-[14px] tracking-[0.05em] uppercase flex items-center justify-center w-full xs:w-[220px] h-[54px] bg-transparent text-black border-[1.5px] border-[#D1D1D1] hover:border-black transition-colors cursor-pointer relative overflow-hidden isolate select-none";

  const defaultAboutClass =
    "bg-black text-white px-6 md:px-15 py-2.5 font-plus-jakarta text-[14px] font-semibold uppercase tracking-widest flex items-center justify-center gap-2 hover:opacity-80 transition-opacity cursor-pointer relative overflow-hidden isolate w-full sm:w-auto select-none";

  const resolvedClass = className || (variant === "hero" ? defaultHeroClass : defaultAboutClass);

  const isHero = variant === "hero";

  return (
    <a
      href="/Haripriya_A_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      download="Haripriya_A_Resume.pdf"
      onClick={handleClick}
      className={resolvedClass}
    >
      <style>{`
        /* ── Ripple ── */
        @keyframes ripple-out {
          0%   { transform: translate(-50%, -50%) scale(0); opacity: 0.35; }
          100% { transform: translate(-50%, -50%) scale(4);  opacity: 0; }
        }
        .dl-ripple {
          position: absolute;
          border-radius: 50%;
          width: 140px;
          height: 140px;
          pointer-events: none;
          animation: ripple-out 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        /* ── Progress bar ── */
        @keyframes progress-fill {
          0%   { width: 0%; }
          60%  { width: 85%; }
          100% { width: 100%; }
        }
        .dl-progress {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          background: currentColor;
          opacity: 0.55;
          animation: progress-fill 1.35s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        /* ── Shimmer sweep ── */
        @keyframes shimmer-sweep {
          0%   { left: -60%; }
          100% { left: 130%; }
        }
        .dl-shimmer {
          position: absolute;
          top: 0; bottom: 0;
          width: 50%;
          background: linear-gradient(
            105deg,
            transparent 20%,
            rgba(255,255,255,0.22) 50%,
            transparent 80%
          );
          animation: shimmer-sweep 0.95s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          pointer-events: none;
        }

        /* ── Checkmark draw ── */
        @keyframes check-draw {
          to { stroke-dashoffset: 0; }
        }
        .dl-check {
          stroke-dasharray: 18;
          stroke-dashoffset: 18;
          animation: check-draw 0.38s cubic-bezier(0.4, 0, 0.2, 1) 0.05s forwards;
        }

        /* ── Label fade ── */
        @keyframes fade-in-up {
          0%  { opacity: 0; transform: translateY(4px); }
          100%{ opacity: 1; transform: translateY(0); }
        }
        .dl-done-label {
          animation: fade-in-up 0.3s ease forwards;
        }
      `}</style>

      {/* Ripples */}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="dl-ripple"
          style={{
            left: r.x,
            top: r.y,
            background: isHero ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.18)",
          }}
        />
      ))}

      {/* Progress bar (visible while downloading) */}
      {downloading && <span className="dl-progress" />}

      {/* Shimmer sweep (fires with download) */}
      {downloading && <span className="dl-shimmer" />}

      {/* Label area */}
      {done ? (
        /* ✓ Done state */
        <span className="dl-done-label flex items-center gap-2 pointer-events-none">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            strokeWidth="2"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline className="dl-check" points="2,8 6,12 13,4" />
          </svg>
          Downloaded!
        </span>
      ) : downloading ? (
        /* Arrow-down pulse while in progress */
        <span className="flex items-center gap-2 pointer-events-none opacity-70">
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ animation: "fade-in-up 0.2s ease forwards" }}
          >
            <line x1="6.5" y1="1" x2="6.5" y2="10" />
            <polyline points="2,6.5 6.5,11 11,6.5" />
          </svg>
          {children || (variant === "hero" ? "download resume" : "Download Full Resume")}
        </span>
      ) : (
        /* Default label */
        <span className="pointer-events-none inline-flex items-center gap-2">
          {children || (variant === "hero" ? "download resume" : "Download Full Resume")}
        </span>
      )}
    </a>
  );
}
