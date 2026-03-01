"use client";

import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";

export default function GitHubActivity() {
  return (
    <section className="section-padding max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-light-text dark:text-white">
            GitHub Activity
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-400 rounded-full mt-3" />
          <p className="text-gray-600 dark:text-gray-400 text-lg mt-4">
            My open source contributions and coding activity.
          </p>
        </div>

        <motion.div
          className="rounded-xl border border-slate-200 dark:border-slate-700/60
                     bg-white dark:bg-slate-800/50 backdrop-blur-sm
                     p-6 md:p-8 overflow-x-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <GitHubCalendar
            username="siddhesh940"
            colorScheme="dark"
            blockSize={13}
            blockMargin={4}
            fontSize={14}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
