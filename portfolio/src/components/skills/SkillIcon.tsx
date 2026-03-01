"use client";

import { motion } from "framer-motion";
import { type IconType } from "react-icons";

interface SkillIconProps {
  icon: IconType;
  name: string;
  color?: string;
}

export default function SkillIcon({ icon: Icon, name, color }: SkillIconProps) {
  return (
    <motion.div
      className="flex flex-col items-center gap-1.5 group/icon"
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <div
        className="relative w-10 h-10 flex items-center justify-center rounded-lg
                    bg-slate-700/50
                    group-hover/icon:bg-slate-700/80
                    transition-all duration-300"
      >
        <Icon
          className="text-lg transition-transform duration-300 group-hover/icon:scale-110"
          style={{ color: color || "currentColor" }}
        />
        <div
          className="absolute inset-0 rounded-lg opacity-0 group-hover/icon:opacity-100
                      transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${color || "#6366f1"}22 0%, transparent 70%)`,
          }}
        />
      </div>
      <span className="text-[10px] font-medium text-gray-400 text-center leading-tight">
        {name}
      </span>
    </motion.div>
  );
}
