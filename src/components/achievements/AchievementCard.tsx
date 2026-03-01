"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { FiAward, FiExternalLink, FiGithub } from "react-icons/fi";

export interface AchievementData {
  title: string;
  description: string[];
  icon: IconType;
  iconColor: string;
  deployment?: string;
  github?: string;
  certificate?: string;
}

interface AchievementCardProps {
  achievement: AchievementData;
  index: number;
}

export default function AchievementCard({
  achievement,
  index,
}: AchievementCardProps) {
  const Icon = achievement.icon;

  return (
    <motion.div
      className="group relative flex flex-col h-full
                 rounded-xl overflow-hidden
                 border border-slate-200 dark:border-slate-700
                 bg-white dark:bg-slate-900/60
                 backdrop-blur p-6
                 shadow-sm dark:shadow-none
                 hover:shadow-xl dark:hover:shadow-primary-500/5
                 hover:border-primary-500/30
                 hover:scale-[1.02]
                 transition-all duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      {/* Gradient glow on hover */}
      <div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                    bg-gradient-to-r from-amber-500/20 via-yellow-500/20 to-orange-500/20
                    blur-sm -z-10"
      />

      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${achievement.iconColor}`}
      >
        <Icon className="w-6 h-6" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug">
        {achievement.title}
      </h3>

      {/* Description */}
      <ul className="mt-3 space-y-2 flex-1">
        {achievement.description.map((point, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
            {point}
          </li>
        ))}
      </ul>

      {/* Buttons */}
      <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-3">
        {achievement.deployment && (
          <a
            href={achievement.deployment}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg
                       border border-primary-500/30
                       text-primary-600 dark:text-primary-400
                       hover:bg-primary-50 dark:hover:bg-primary-900/20
                       transition-colors duration-200"
          >
            <FiExternalLink className="w-3.5 h-3.5" />
            View Project
          </a>
        )}
        {achievement.github && (
          <a
            href={achievement.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg
                       border border-slate-200 dark:border-slate-700
                       text-gray-700 dark:text-gray-300
                       hover:bg-slate-50 dark:hover:bg-slate-800
                       transition-colors duration-200"
          >
            <FiGithub className="w-3.5 h-3.5" />
            GitHub
          </a>
        )}
        {achievement.certificate && (
          <a
            href={achievement.certificate}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg
                       border border-amber-500/30
                       text-amber-600 dark:text-amber-400
                       hover:bg-amber-50 dark:hover:bg-amber-900/20
                       transition-colors duration-200"
          >
            <FiAward className="w-3.5 h-3.5" />
            Certificate
          </a>
        )}
      </div>
    </motion.div>
  );
}
