"use client";

import { motion } from "framer-motion";
import { FaFilePdf } from "react-icons/fa";
import { FiDownload, FiEye } from "react-icons/fi";

interface ResumeCardProps {
  fileName: string;
  filePath: string;
  description: string;
}

export default function ResumeCard({
  fileName,
  filePath,
  description,
}: ResumeCardProps) {
  return (
    <motion.div
      className="group relative flex flex-col items-center text-center
                 rounded-xl overflow-hidden
                 border border-slate-200 dark:border-slate-700
                 bg-white dark:bg-slate-900/60
                 backdrop-blur p-8 md:p-10
                 shadow-sm dark:shadow-none
                 hover:shadow-xl dark:hover:shadow-primary-500/5
                 hover:border-primary-500/30
                 hover:scale-[1.02]
                 transition-all duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
    >
      {/* Gradient glow on hover */}
      <div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                    bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20
                    blur-sm -z-10"
      />

      {/* File Icon */}
      <div
        className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6
                      bg-indigo-50 dark:bg-indigo-900/30
                      text-indigo-600 dark:text-indigo-400
                      group-hover:scale-110 transition-transform duration-300"
      >
        <FaFilePdf className="w-10 h-10" />
      </div>

      {/* File Name */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-snug">
        {fileName}
      </h3>

      {/* Description */}
      <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">
        {description}
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          href={filePath}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg
                     bg-indigo-600 hover:bg-indigo-700
                     text-white
                     shadow-lg shadow-indigo-500/25
                     hover:shadow-indigo-500/40
                     transition-all duration-200"
        >
          <FiEye className="w-4 h-4" />
          View Resume
        </a>

        <a
          href={filePath}
          download
          className="flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg
                     border border-indigo-500/30
                     text-indigo-600 dark:text-indigo-400
                     hover:bg-indigo-50 dark:hover:bg-indigo-900/20
                     transition-all duration-200"
        >
          <FiDownload className="w-4 h-4" />
          Download Resume
        </a>
      </div>
    </motion.div>
  );
}
