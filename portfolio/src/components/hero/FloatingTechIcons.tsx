"use client";

import { motion } from "framer-motion";
import {
    SiJavascript,
    SiNextdotjs,
    SiNodedotjs,
    SiPython,
    SiReact,
    SiTailwindcss,
} from "react-icons/si";

const icons = [
  { Icon: SiReact, color: "#22d3ee", label: "React", x: -20, y: -30, delay: 0 },
  {
    Icon: SiJavascript,
    color: "#facc15",
    label: "JavaScript",
    x: 110,
    y: -45,
    delay: 0.4,
  },
  {
    Icon: SiPython,
    color: "#60a5fa",
    label: "Python",
    x: 240,
    y: -15,
    delay: 0.8,
  },
  {
    Icon: SiNodedotjs,
    color: "#22c55e",
    label: "Node.js",
    x: 260,
    y: 180,
    delay: 1.2,
  },
  {
    Icon: SiTailwindcss,
    color: "#06b6d4",
    label: "Tailwind",
    x: -30,
    y: 190,
    delay: 0.6,
  },
  {
    Icon: SiNextdotjs,
    color: "#e2e8f0",
    label: "Next.js",
    x: 120,
    y: 220,
    delay: 1.0,
  },
];

export default function FloatingTechIcons() {
  return (
    <>
      {icons.map(({ Icon, color, x, y, delay }, i) => (
        <motion.div
          key={i}
          className="absolute z-20"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 1, duration: 0.5, type: "spring" }}
        >
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div
              className="rounded-xl p-2 md:p-2.5 backdrop-blur-sm"
              style={{
                background: "rgba(15,23,42,0.65)",
                border: `1px solid ${color}25`,
                boxShadow: `0 0 18px ${color}15, 0 0 36px ${color}08`,
              }}
            >
              <Icon className="w-5 h-5 md:w-6 md:h-6" style={{ color }} />
            </div>
          </motion.div>
        </motion.div>
      ))}
    </>
  );
}
