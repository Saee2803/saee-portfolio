"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
    FiAlertTriangle,
    FiArrowLeft,
    FiExternalLink,
    FiGithub,
    FiLayers,
    FiTarget,
    FiTool,
    FiZap,
} from "react-icons/fi";
import { getProjectBySlug } from "../../../lib/projectsData";

interface ProjectSlugPageProps {
  params: { slug: string };
}

const sectionFade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" as const },
  transition: { duration: 0.5 },
};

export default function ProjectSlugPage({ params }: ProjectSlugPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) notFound();

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg">
      {/* Hero */}
      <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/20" />

        {/* Back button */}
        <div className="absolute top-6 left-6 z-10">
          <Link
            href="/projects"
            className="flex items-center gap-2 px-4 py-2 rounded-lg
                       bg-black/30 backdrop-blur-sm text-white text-sm
                       hover:bg-black/50 transition-colors"
          >
            <FiArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech: string) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium rounded-full
                             bg-primary-500/20 text-primary-300 border border-primary-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              {project.title}
            </h1>
            <p className="mt-4 text-gray-300 text-lg max-w-3xl">
              {project.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">
        {/* Action buttons */}
        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl
                       bg-gradient-to-r from-primary-500 to-purple-500 text-white
                       font-medium shadow-lg shadow-primary-500/20
                       hover:shadow-xl hover:shadow-primary-500/30
                       transition-shadow"
          >
            <FiExternalLink className="w-4 h-4" />
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl
                       border border-slate-200 dark:border-slate-700
                       text-gray-700 dark:text-gray-300
                       bg-white dark:bg-slate-800/50
                       hover:bg-slate-50 dark:hover:bg-slate-800
                       font-medium transition-colors"
          >
            <FiGithub className="w-4 h-4" />
            View Source
          </a>
        </motion.div>

        {/* Problem Statement */}
        <motion.section {...sectionFade}>
          <CaseStudyCard
            icon={<FiTarget className="w-5 h-5" />}
            title="Problem Statement"
          >
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.problemStatement}
            </p>
          </CaseStudyCard>
        </motion.section>

        {/* Architecture */}
        <motion.section
          {...sectionFade}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <CaseStudyCard
            icon={<FiLayers className="w-5 h-5" />}
            title="Architecture"
          >
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.architecture}
            </p>
          </CaseStudyCard>
        </motion.section>

        {/* Tech Stack */}
        <motion.section
          {...sectionFade}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <CaseStudyCard
            icon={<FiTool className="w-5 h-5" />}
            title="Tech Stack"
          >
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech: string) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm font-medium rounded-lg
                             bg-slate-100 dark:bg-slate-800
                             text-slate-700 dark:text-slate-300
                             border border-slate-200 dark:border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </CaseStudyCard>
        </motion.section>

        {/* Key Features */}
        <motion.section
          {...sectionFade}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <CaseStudyCard
            icon={<FiZap className="w-5 h-5" />}
            title="Key Features"
          >
            <ul className="space-y-3">
              {project.keyFeatures.map((feature: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-primary-500 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </CaseStudyCard>
        </motion.section>

        {/* Challenges */}
        <motion.section
          {...sectionFade}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <CaseStudyCard
            icon={<FiAlertTriangle className="w-5 h-5" />}
            title="Challenges & Solutions"
          >
            <ul className="space-y-3">
              {project.challenges.map((challenge: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">
                    {challenge}
                  </span>
                </li>
              ))}
            </ul>
          </CaseStudyCard>
        </motion.section>

        {/* Screenshot */}
        <motion.section
          {...sectionFade}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <CaseStudyCard
            icon={<FiExternalLink className="w-5 h-5" />}
            title="Screenshots"
          >
            <div
              className="relative aspect-video rounded-lg overflow-hidden
                            bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-[2px]"
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden bg-slate-950">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            </div>
          </CaseStudyCard>
        </motion.section>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-primary-500/10 to-purple-500/10
                     border border-primary-500/20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            Interested in this project?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Check out the live demo or view the source code on GitHub.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                         bg-primary-500 text-white font-medium
                         hover:bg-primary-600 transition-colors"
            >
              <FiExternalLink className="w-4 h-4" />
              Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                         border border-slate-200 dark:border-slate-700
                         text-gray-700 dark:text-gray-300
                         hover:bg-slate-50 dark:hover:bg-slate-800
                         font-medium transition-colors"
            >
              <FiGithub className="w-4 h-4" />
              View Source
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* Reusable case study card wrapper */
function CaseStudyCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="rounded-xl border border-slate-200 dark:border-slate-700
                 bg-white dark:bg-slate-900/60 backdrop-blur p-6 md:p-8"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-lg bg-primary-500/10 text-primary-500 flex items-center justify-center">
          {icon}
        </div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
}
