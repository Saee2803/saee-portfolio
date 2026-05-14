"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { ProjectData } from "../components/projects/ProjectCard";
import ProjectsGrid from "../components/projects/ProjectsGrid";

/* ═══════════════════════════════════════════
   PROJECT DATA (parsed from Projects.md)
   ═══════════════════════════════════════════ */

const projects: ProjectData[] = [
  {
    title: "JeevanRakshak",
    slug: "jeevanrakshak",
    description:
      'JeevanRakshak (जीवनरक्षक — "Life Saver") is a production-grade, offline-first Progressive Web App designed to provide instant, expert-verified emergency guidance when every second counts.',
    image: "/Projects/JeevanRakshak.png",
    techStack: ["Next.js", "TypeScript", "PWA", "AI"],
    github: "https://github.com/Saee2803/JeevanRakshak-.git",
    website: "https://jeevan-rakshak-neon.vercel.app/",
  },


  {
    title: "CyberRakshak AI",
    slug: "cyberrakshak-ai",
    description:
      "Personal Protection System against Social Media Scams and Digital Fraud. Detects and prevents cyber threats using AI-driven analysis.",
    image: "/Projects/CyberRakshak AI.png",
    techStack: ["React", "AI/ML", "TypeScript", "Tailwind"],
    github: "https://github.com/Saee2803/CyberRakshak-AI-.git",
    website: "https://cyber-rakshak-ai.vercel.app/",
  },

  {
    title: "CampusAI",
    slug: "campus-ai",
    description:
      "Transforms the traditional student onboarding process into a seamless, AI-driven digital ecosystem delivering structured, personalized, and real-time guidance from admission to integration.",
    image: "/Projects/Campus AI.png",
    techStack: ["React", "AI", "TypeScript", "Node.js"],
    github: "https://github.com/Saee2803/CampusAI.git",
    website: "https://campus-ai-alpha.vercel.app/",
  },
  {
    title: "SkillAutofill",
    slug: "skill-autofill",
    description:
      "An intelligent system that analyzes job descriptions and user profiles to provide skill gap analysis, personalized learning roadmaps, resume improvements, and more.",
    image: "/Projects/SkillAutofill.png",
    techStack: ["React", "AI/ML", "TypeScript", "Tailwind"],
    github: "https://github.com/Saee2803/skill-autofill.git",
    website: "https://skill-autofill.vercel.app/",
  },
  {
    title: "ResumeIQ",
    slug: "resume-iq",
    description:
      "Create ATS-friendly resumes with intelligent JD Analysis. Simplifies the process of building professional, optimized resumes in minutes.",
    image: "/Projects/ResumeIQ.png",
    techStack: ["React", "TypeScript", "AI", "Tailwind"],
    github: "https://github.com/Saee2803/RESUMEIQQ",
    website: "https://resumeiqq.vercel.app/",
  },
  {
    title: "GitVio",
    slug: "gitvio",
    description:
      "Create beautiful portfolio websites directly from your GitHub profile. Instantly generate a polished developer portfolio.",
    image: "/Projects/GitVio.png",
    techStack: ["Next.js", "TypeScript", "GitHub API", "Tailwind"],
    github: "https://github.com/Saee2803/GitVio",
    website: "https://gitvio.vercel.app/",
  },
  {
    title: "Star Weather Performance",
    slug: "star-weather",
    description:
      "Advanced weather website where users can view current conditions, forecasts, air quality, weather maps, and more — built for a seamless, responsive experience.",
    image: "/Projects/Star Weather Performance.png",
    techStack: ["React", "TypeScript", "API", "Tailwind"],
    github: "https://github.com/Saee2803/Star_WeatherPerformance",
    website: "https://starweatherperformance.vercel.app",
  },
  {
    title: "HealthFraud MLChain",
    slug: "health-fraud-mlchain",
    description:
      "ML-powered fraud detection system for healthcare. Uses machine learning to identify fraudulent claims and suspicious patterns in healthcare data.",
    image: "/Projects/HealthMLChain.png",
    techStack: ["Python", "Machine Learning", "Flask", "React"],
    github: "https://github.com/Saee2803/HealthFraudMLChain.git",
    website: "https://healthfraudmlchain.onrender.com",
  },
  {
    title: "NLP Smart Assistant",
    slug: "nlp-smart-assistant",
    description:
      "Intelligent conversational assistant powered by Natural Language Processing. Understands and responds to user queries with contextual intelligence.",
    image: "/Projects/NLP_assistant.png",
    techStack: ["Python", "NLP", "Flask", "React"],
    github: "https://github.com/Saee2803/NLP_Smart_Assistant.git",
    website: "https://nlp-backend-a9w9.onrender.com",
  },
  {
    title: "ConnectMe",
    slug: "connectme",
    description:
      "Social networking platform for meaningful connections. Built for users to find, connect, and collaborate with like-minded individuals.",
    image: "/Projects/Connent_me.png",
    techStack: ["React", "Node.js", "MongoDB", "WebSockets"],
    github: "https://github.com/Saee2803/ConnectMe",
    website: "https://connectme-mu.vercel.app/",
  },
];

/* ═══════════════════════════════════════════
   SECTION COMPONENT
   ═══════════════════════════════════════════ */

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects" title="My Projects">
      {/* Subtitle */}
      <motion.p
        className="text-gray-600 dark:text-gray-400 text-lg md:text-xl -mt-6 mb-12 max-w-3xl"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        A collection of real-world AI and web development projects I&apos;ve
        built.
      </motion.p>

      {/* Projects Grid */}
      <ProjectsGrid projects={projects} />
    </SectionWrapper>
  );
}
