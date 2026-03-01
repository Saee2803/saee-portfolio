"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface SkillCardProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
  index?: number;
}

export default function SkillCard({
  title,
  icon,
  children,
  index = 0,
}: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
      className="group relative h-full"
    >
      {/* Gradient border glow on hover */}
      <div
        className="absolute -inset-[1px] rounded-xl opacity-0 group-hover:opacity-100
                    bg-gradient-to-br from-indigo-400 via-purple-500/50 to-indigo-600/30
                    blur-[2px] transition-opacity duration-500 pointer-events-none"
      />

      <div
        className="relative rounded-xl h-full
                    border border-slate-700/60
                    bg-slate-800/50 backdrop-blur-sm
                    p-5
                    group-hover:border-indigo-500/30
                    group-hover:bg-slate-800/70
                    transition-all duration-300"
      >
        {/* Card header */}
        <div className="flex items-center gap-2.5 mb-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center
                        bg-gradient-to-br from-indigo-500/20 to-purple-600/10
                        text-indigo-400 text-lg
                        group-hover:from-indigo-500/30 group-hover:to-purple-600/20
                        transition-all duration-300"
          >
            {icon}
          </div>
          <h3 className="text-sm font-semibold text-gray-100">{title}</h3>
        </div>

        {/* Card body */}
        <div>{children}</div>
      </div>
    </motion.div>
  );
}
