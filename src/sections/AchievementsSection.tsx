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
    title: "1st Rank in Fourth Year BE – SGPA 10.0",
    description: [
      "Secured 1st Rank in Fourth Year BE with an outstanding SGPA of 10.0, demonstrating strong academic consistency and technical excellence throughout the program.",
    ],
    icon: FaTrophy,
    iconColor: "bg-amber-500/20 text-amber-500",
  },
  {
    title: "Hack To Crack 2.0 – ViMEET (National-Level Hackathon)",
    description: [
      "Participated in Hack To Crack 2.0 – ViMEET, a National-Level Hackathon, where I designed and prototyped an innovative Telemedicine Platform aimed at improving healthcare accessibility for rural communities.",
      "The platform enables online consultation and digital healthcare services, addressing real-world healthcare challenges with practical technology solutions.",
    ],
    icon: FaTrophy,
    iconColor: "bg-blue-500/20 text-blue-500",
    certificate: "https://drive.google.com/file/d/1oA0B2LgaAYRHTCBB-DxBFgdCqqbWyPuC/view",
  },
  {
    title: "Tech Aspira 2025 – Project Competition",
    description: [
      "Presented the Telemedicine Platform Project at Tech Aspira 2025, a project competition organized by the Department of Electronics & Computer Science, PHCET.",
      "Showcased practical problem-solving skills and real-world application development capabilities in front of industry professionals and academic experts.",
    ],
    icon: FaTrophy,
    iconColor: "bg-green-500/20 text-green-500",
    certificate: "https://drive.google.com/file/d/1WLUPGvqqLAlpYsmF94QSIE9_jIwff52B/view",
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
