"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiGithub, FiGlobe } from "react-icons/fi";
import ProjectBadge from "./ProjectBadge";

export interface ProjectData {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  github: string;
  website: string;
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      className="group relative flex flex-col h-full
                 rounded-xl overflow-hidden
                 border border-slate-200 dark:border-slate-700
                 bg-white dark:bg-slate-900/60
                 backdrop-blur
                 shadow-sm dark:shadow-none
                 hover:shadow-xl dark:hover:shadow-primary-500/5
                 transition-all duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      {/* Gradient glow on hover */}
      <div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                    bg-gradient-to-r from-primary-500/20 via-purple-500/20 to-pink-500/20
                    blur-sm -z-10"
      />

      {/* Image with gradient border */}
      <div className="p-2">
        <div
          className="relative aspect-video rounded-lg overflow-hidden
                      bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-[2px]"
        >
          <div className="relative w-full h-full rounded-lg overflow-hidden bg-slate-950">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug">
          {project.title}
        </h3>

        {/* Tech badges */}
        <div className="mt-3 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <ProjectBadge key={tech} label={tech} />
          ))}
        </div>

        {/* Description */}
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Buttons */}
        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg
                       border border-slate-200 dark:border-slate-700
                       text-gray-700 dark:text-gray-300
                       bg-white dark:bg-slate-800/50
                       hover:bg-slate-50 dark:hover:bg-slate-800
                       transition-colors duration-200"
          >
            <FiGithub className="w-4 h-4" />
            Source
          </a>
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg
                       border border-primary-500/30 dark:border-primary-500/30
                       text-primary-600 dark:text-primary-400
                       bg-primary-50 dark:bg-primary-900/20
                       hover:bg-primary-100 dark:hover:bg-primary-900/40
                       transition-colors duration-200"
          >
            <FiGlobe className="w-4 h-4" />
            Website
          </a>
        </div>
      </div>
    </motion.div>
  );
}
