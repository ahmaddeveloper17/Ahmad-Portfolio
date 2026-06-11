"use client";

import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";

export type SimpleDockItem = {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
};

type SimpleDockProps = {
  items: SimpleDockItem[];
  className?: string;
};

export default function SimpleDock({ items, className = "" }: SimpleDockProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={`flex gap-6 px-6 py-4 rounded-2xl border border-neutral-700 bg-[#060010] ${className}`}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className="relative flex flex-col items-center"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={item.onClick}
        >
          {/* Icon Button */}
          <motion.div
            whileHover={{ scale: 1.2, y: -8 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-neutral-700 bg-[#0c001a] shadow-md cursor-pointer"
          >
            {item.icon}
          </motion.div>

          {/* Tooltip */}
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: -10 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute -top-8 text-xs px-2 py-1 rounded-md border border-neutral-700 bg-[#060010] text-white whitespace-nowrap"
              >
                {item.label}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
