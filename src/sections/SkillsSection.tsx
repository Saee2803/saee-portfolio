"use client";

import { motion } from "framer-motion";

// ── React Icons imports ──
import {
    FaBrain,
    FaChartBar,
    FaComments,
    FaFileImage,
    FaFilePowerpoint,
    FaNetworkWired,
} from "react-icons/fa";
import {
    HiChip,
    HiCode,
    HiCog,
    HiDatabase,
    HiLightningBolt,
    HiPresentationChartBar,
    HiUserGroup,
} from "react-icons/hi";
import {
    SiCss3,
    SiGit,
    SiHtml5,
    SiJavascript,
    SiLinux,
    SiMongodb,
    SiMysql,
    SiNumpy,
    SiPandas,
    SiPython,
    SiReact,
    SiScikitlearn,
    
    SiTableau,
} from "react-icons/si";
import { TbChartDonutFilled } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

import SectionWrapper from "../components/SectionWrapper";
import SkillCard from "../components/skills/SkillCard";
import SkillCategory, {
    type SkillItem,
} from "../components/skills/SkillCategory";

/* ═══════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════ */

const programmingSkills: SkillItem[] = [
  { icon: SiPython, name: "Python", color: "#3776AB" },
  { icon: SiHtml5, name: "HTML", color: "#E34F26" },
  { icon: SiCss3, name: "CSS", color: "#1572B6" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiReact, name: "React", color: "#61DAFB" },
];

const databaseSkills: SkillItem[] = [
  { icon: SiMysql, name: "MySQL", color: "#4479A1" },
  { icon: SiMongodb, name: "MongoDB", color: "#13AA52" },
];

const mlSkills: SkillItem[] = [
  { icon: SiPandas, name: "Pandas", color: "#150458" },
  { icon: SiNumpy, name: "NumPy", color: "#013243" },
  { icon: FaChartBar, name: "Matplotlib", color: "#11557C" },
  { icon: FaChartBar, name: "Seaborn", color: "#444876" },
  { icon: SiScikitlearn, name: "Scikit-learn", color: "#F7931E" },
];

const mlTags = [
  "Regression",
  "Decision Tree",
  "Random Forest",
  "Naive Bayes",
  "SVM",
  "KNN",
  "K-Means",
  "PCA",
  "Clustering",
  "Dimensionality Reduction",
];

const dlSkills: SkillItem[] = [
  { icon: FaBrain, name: "Neural Networks", color: "#FF6F61" },
  { icon: FaFileImage, name: "CNN", color: "#8B5CF6" },
  { icon: FaNetworkWired, name: "MLP", color: "#06B6D4" },
  { icon: FaComments, name: "NLP", color: "#10B981" },
];

const dlTags = [
  "Image Classification",
  "Sentiment Analysis",
  "Speech-to-Text",
  "Text-to-Speech",
  "Chatbots",
  "Generative AI",
];

const biSkills: SkillItem[] = [
  { icon: TbChartDonutFilled, name: "Power BI", color: "#F2C811" },
  { icon: SiTableau, name: "Tableau", color: "#E97627" },
  { icon: FaFilePowerpoint, name: "PowerPoint", color: "#D24726" },
];

const toolSkills: SkillItem[] = [
  { icon: SiGit, name: "Git", color: "#F05032" },
  { icon: VscVscode, name: "VS Code", color: "#007ACC" },
  { icon: SiLinux, name: "Linux", color: "#FCC624" },
];

const softSkills = ["Problem Solving", "Communication", "Teamwork"];

/* ═══════════════════════════════════════════
   CATEGORIES CONFIG
   ═══════════════════════════════════════════ */

interface CategoryConfig {
  title: string;
  headerIcon: React.ReactNode;
  skills: SkillItem[];
  tags?: string[];
}

const categories: CategoryConfig[] = [
  {
    title: "Programming & Web Development",
    headerIcon: <HiCode />,
    skills: programmingSkills,
  },
  {
    title: "Databases",
    headerIcon: <HiDatabase />,
    skills: databaseSkills,
  },
  {
    title: "Machine Learning & Data Science",
    headerIcon: <HiChip />,
    skills: mlSkills,
    tags: mlTags,
  },
  {
    title: "Deep Learning & AI",
    headerIcon: <HiLightningBolt />,
    skills: dlSkills,
    tags: dlTags,
  },
  {
    title: "Data Visualization & BI",
    headerIcon: <HiPresentationChartBar />,
    skills: biSkills,
  },
  {
    title: "Tools & Platforms",
    headerIcon: <HiCog />,
    skills: toolSkills,
  },
];

/* ═══════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════ */

export default function SkillsSection() {
  /* ── Category lookup helpers ── */
  const cat = (title: string) => categories.find((c) => c.title === title)!;

  return (
    <SectionWrapper id="skills" title="Skills">
      <div className="max-w-6xl mx-auto space-y-5">
        {/* ── Row 1 — 3 equal cards (no tags, similar height) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            "Programming & Web Development",
            "Databases",
            "Tools & Platforms",
          ].map((t, i) => {
            const c = cat(t);
            return (
              <SkillCard key={t} title={c.title} icon={c.headerIcon} index={i}>
                <SkillCategory skills={c.skills} tags={c.tags} />
              </SkillCard>
            );
          })}
        </div>

        {/* ── Row 2 — 2 wider cards with tags (balanced height) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {["Machine Learning & Data Science", "Deep Learning & AI"].map(
            (t, i) => {
              const c = cat(t);
              return (
                <SkillCard
                  key={t}
                  title={c.title}
                  icon={c.headerIcon}
                  index={i + 3}
                >
                  <SkillCategory skills={c.skills} tags={c.tags} />
                </SkillCard>
              );
            },
          )}
        </div>

        {/* ── Row 3 — 2 balanced cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {(() => {
            const viz = cat("Data Visualization & BI");
            return (
              <SkillCard title={viz.title} icon={viz.headerIcon} index={5}>
                <SkillCategory skills={viz.skills} tags={viz.tags} />
              </SkillCard>
            );
          })()}

          <SkillCard title="Soft Skills" icon={<HiUserGroup />} index={6}>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 text-xs font-medium rounded-full
                             bg-indigo-500/10
                             text-indigo-300
                             border border-indigo-600/30
                             hover:border-indigo-500
                             transition-colors duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </SkillCard>
        </div>
      </div>
    </SectionWrapper>
  );
}
