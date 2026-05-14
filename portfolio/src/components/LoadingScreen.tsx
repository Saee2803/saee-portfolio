"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center
                 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Logo */}
      <motion.div
        className="text-2xl md:text-3xl font-bold mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-white">&lt;</span>
        <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent font-extrabold italic">
          {" "}
          Saee Bhanuskar{" "}
        </span>
        <span className="text-white">/&gt;</span>
      </motion.div>

      {/* Spinner */}
      <div className="relative w-12 h-12 mb-6">
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-transparent border-t-indigo-500 border-r-purple-500"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-1 rounded-full border-2 border-transparent border-b-indigo-400 border-l-purple-400"
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Message */}
      <motion.p
        className="text-sm text-slate-400 tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.5, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Loading experience...
      </motion.p>
    </motion.div>
  );
}
