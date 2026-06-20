"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

interface DraggableBadgeProps {
  label: string;
}

export default function DraggableBadge({ label }: DraggableBadgeProps) {
  const constraintsRef = useRef(null);

  return (
    <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden" ref={constraintsRef}>
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.1}
        className="pointer-events-auto absolute top-4 left-4 bg-black text-white p-2.5 font-roboto text-[14px] font-normal uppercase tracking-widest cursor-grab active:cursor-grabbing shadow-lg"
      >
        {label}
      </motion.div>
    </div>
  );
}
