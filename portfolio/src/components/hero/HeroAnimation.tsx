"use client";

import { motion } from "framer-motion";
import CodeWindow from "./CodeWindow";
import DeveloperScene from "./DeveloperScene";
import FloatingTechIcons from "./FloatingTechIcons";

export default function HeroAnimation() {
  return (
    <div className="relative w-full max-w-[540px] mx-auto">
      {/* ── Ambient glow ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-indigo-500/15 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-purple-500/10 blur-2xl"
          animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ── Floating tech icons around the scene ── */}
      <FloatingTechIcons />

      {/* ── Two-layer layout: scene + code window ── */}
      <div className="relative z-10">
        {/* Developer scene (person + desk + laptop + coffee + plant + cat) */}
        <DeveloperScene />

        {/* Code window overlaid at bottom-right */}
        <motion.div
          className="absolute -bottom-4 -right-4 md:right-0 w-[240px] md:w-[280px] z-20"
          initial={{ opacity: 0, x: 30, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <CodeWindow />
        </motion.div>
      </div>

      {/* ── Corner accent lines ── */}
      <motion.div
        className="absolute top-4 right-4 w-14 h-14 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-indigo-400 to-transparent" />
        <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-indigo-400 to-transparent" />
      </motion.div>
      <motion.div
        className="absolute bottom-4 left-4 w-14 h-14 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ delay: 1.7, duration: 1 }}
      >
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-purple-400 to-transparent" />
        <div className="absolute bottom-0 left-0 h-full w-[1px] bg-gradient-to-t from-purple-400 to-transparent" />
      </motion.div>
    </div>
  );
}
