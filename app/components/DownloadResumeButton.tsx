"use client";

import React, { useState } from "react";

interface Particle {
  id: number;
  emoji: string;
  tx: string;
  ty: string;
  r: string;
  scaleStart: number;
  scaleEnd: number;
  duration: number;
  delay: number;
  left: string;
  top: string;
}

interface DownloadResumeButtonProps {
  variant?: "hero" | "about";
  className?: string;
  children?: React.ReactNode;
}

export default function DownloadResumeButton({ variant = "hero", className, children }: DownloadResumeButtonProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  const triggerConfetti = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const emojis = ["🌸", "🦋", "🌺", "🍀", "🌼", "🌿"];
    const count = 18; // Staggered count of elements floating out
    const newParticles: Particle[] = [];

    for (let i = 0; i < count; i++) {
      const emoji = emojis[Math.floor(Math.random() * emojis.length)];

      // Generate random translation angle around the button (360 degrees)
      const angle = Math.random() * 2 * Math.PI;
      const distance = 40 + Math.random() * 60; // short range drift: 40px to 100px
      const tx = `${Math.cos(angle) * distance}px`;
      const ty = `${Math.sin(angle) * distance - 10}px`; // drift slightly upward
      const r = `${-120 + Math.random() * 240}deg`; // rotate

      const scaleStart = 0.3 + Math.random() * 0.3;
      const scaleEnd = 0.9 + Math.random() * 0.4;
      const duration = 1.0 + Math.random() * 0.8; // short, fast drift: 1s to 1.8s
      const delay = Math.random() * 0.1; // tiny delay to stagger

      // Spawn from near the middle/edges of the button
      const left = `${25 + Math.random() * 50}%`;
      const top = `${25 + Math.random() * 50}%`;

      newParticles.push({
        id: Date.now() + i + Math.random(),
        emoji,
        tx,
        ty,
        r,
        scaleStart,
        scaleEnd,
        duration,
        delay,
        left,
        top,
      });
    }

    setParticles((prev) => [...prev, ...newParticles]);

    // Cleanup particles once animation transitions complete
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newParticles.find((np) => np.id === p.id)));
    }, 2500);
  };

  const defaultHeroClass =
    "font-plus-jakarta font-[600] text-[14px] tracking-[0.05em] uppercase flex items-center justify-center w-[220px] h-[54px] bg-transparent text-black border-[1.5px] border-[#D1D1D1] hover:border-black transition-colors cursor-pointer relative overflow-visible isolate";

  const defaultAboutClass =
    "bg-black text-white px-15 py-2.5 font-plus-jakarta text-[14px] font-semibold uppercase tracking-widest flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer relative overflow-visible isolate";

  const resolvedClass = className || (variant === "hero" ? defaultHeroClass : defaultAboutClass);

  return (
    <a
      href="/Haripriya_A_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      download="Haripriya_A_Resume.pdf"
      onClick={triggerConfetti}
      className={resolvedClass}
    >
      <style>{`
        @keyframes floatAndFade {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) translate(0, 0) scale(var(--scale-start)) rotate(0deg);
          }
          15% {
            opacity: 1;
          }
          75% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) translate(var(--tx), var(--ty)) scale(var(--scale-end)) rotate(var(--r));
          }
        }
        .nature-particle {
          position: absolute;
          pointer-events: none;
          user-select: none;
          z-index: -1; /* Render behind the text content but above page backgrounds */
          font-size: 22px;
          animation: floatAndFade var(--duration) cubic-bezier(0.16, 1, 0.3, 1) var(--delay) forwards;
        }
      `}</style>

      {particles.map((p) => (
        <span
          key={p.id}
          className="nature-particle"
          style={
            {
              left: p.left,
              top: p.top,
              "--tx": p.tx,
              "--ty": p.ty,
              "--r": p.r,
              "--scale-start": p.scaleStart,
              "--scale-end": p.scaleEnd,
              "--duration": `${p.duration}s`,
              "--delay": `${p.delay}s`,
            } as React.CSSProperties
          }
        >
          {p.emoji}
        </span>
      ))}

      {children || (variant === "hero" ? "download resume" : "Download Full Resume")}
    </a>
  );
}
