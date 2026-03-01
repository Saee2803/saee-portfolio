"use client";

import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa";
import SectionWrapper from "../components/SectionWrapper";
import AchievementCard, {
    AchievementData,
} from "../components/achievements/AchievementCard";

/* ═══════════════════════════════════════════
   ACHIEVEMENT DATA (parsed from ACHIEVEMENTS.md)
   ═══════════════════════════════════════════ */

const achievements: AchievementData[] = [
  {
    title: "Finalist – InnovGenius Ideathon 2026 (ACM TCET x TCS)",
    description: [
      "Selected among 700+ registrations and competed in the Final Round; built and deployed CampusAI, an industry-style onboarding automation system with secure role-based access and scalable SaaS architecture.",
      "CampusAI transforms the traditionally fragmented student onboarding process into a seamless, AI-driven digital ecosystem delivering structured, personalized, and real-time guidance from admission to campus integration.",
    ],
    icon: FaTrophy,
    iconColor: "bg-amber-500/20 text-amber-500",
    deployment: "https://campusai-livid.vercel.app/",
    github: "https://github.com/siddhesh940/CampusAI.git",
    certificate:
      "https://drive.google.com/file/d/19_aXe846bxuTD6QBeuL6ude6sPX7PO02/view?usp=sharing",
  },
];

/* ═══════════════════════════════════════════
   SECTION COMPONENT
   ═══════════════════════════════════════════ */

export default function AchievementsSection() {
  return (
    <SectionWrapper id="achievements" title="Achievements">
      {/* Subtitle */}
      <motion.p
        className="text-gray-600 dark:text-gray-400 text-lg md:text-xl -mt-6 mb-12 max-w-3xl"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Milestones and recognitions from my journey in technology and
        innovation.
      </motion.p>

      {/* Achievements Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-6">
          {achievements.map((achievement, i) => (
            <AchievementCard
              key={achievement.title}
              achievement={achievement}
              index={i}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
