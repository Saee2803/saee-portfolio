"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamic import to avoid SSR issues with react-github-calendar
const GitHubCalendar = dynamic(
  () =>
    import("react-github-calendar").then((mod) => ({
      default: mod.GitHubCalendar,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="h-40 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800" />
    ),
  },
);

export default function GithubActivity() {
  return (
    <section id="github" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-light-text dark:text-white">
            GitHub Activity
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-400 rounded-full mt-3" />
          <p className="text-gray-600 dark:text-gray-400 text-lg mt-4">
            My open source and coding activity.
          </p>
        </motion.div>

        {/* Calendar card */}
        <motion.div
          className="relative rounded-2xl overflow-hidden
                     border border-slate-200 dark:border-slate-700/60
                     bg-white/70 dark:bg-slate-800/50 backdrop-blur-md
                     p-6 md:p-10 text-center
                     shadow-sm hover:shadow-xl dark:hover:shadow-primary-500/5
                     transition-shadow duration-500"
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          {/* Subtle glow behind card */}
          <div
            className="pointer-events-none absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100
                        bg-gradient-to-r from-primary-500/10 via-purple-500/10 to-pink-500/10
                        blur-xl transition-opacity duration-700 -z-10"
          />

          <div className="overflow-x-auto flex justify-center">
            <GitHubCalendar
              username="siddhesh940"
              colorScheme="dark"
              blockSize={14}
              blockMargin={4}
              fontSize={14}
            />
          </div>

          {/* Activity stats bar */}
          <motion.div
            className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700/60
                       flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <a
              href="https://github.com/siddhesh940"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                         border border-slate-200 dark:border-slate-700
                         bg-white dark:bg-slate-800/60
                         hover:border-primary-500/50 hover:text-primary-500
                         transition-all duration-300 text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View GitHub Profile
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
