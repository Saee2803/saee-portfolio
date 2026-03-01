"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiInstagram, SiMedium, SiVercel } from "react-icons/si";

const socials = [
  {
    icon: FiGithub,
    href: "https://github.com/siddhesh940",
    label: "GitHub",
  },
  {
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/siddhesh-patil-268b96311/",
    label: "LinkedIn",
  },
  {
    icon: FiMail,
    href: "mailto:patilsiddhesh2810@gmail.com",
    label: "Email",
  },
  {
    icon: SiInstagram,
    href: "https://www.instagram.com/siddhu_patil_30",
    label: "Instagram",
  },
  {
    icon: SiMedium,
    href: "https://medium.com/@patilsiddhesh2810",
    label: "Medium",
  },
  {
    icon: SiVercel,
    href: "https://vercel.com/siddhesh-pravin-patil-s-projects",
    label: "Vercel",
  },
];

export default function HeroSocialIcons() {
  return (
    <motion.div
      className="mt-8 flex items-center gap-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9 }}
    >
      {socials.map((social, index) => {
        const Icon = social.icon;
        return (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700
                       flex items-center justify-center
                       text-gray-400 hover:text-white
                       hover:bg-indigo-600 hover:border-indigo-500
                       hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/20
                       transition-all duration-200"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 + index * 0.1, duration: 0.4 }}
          >
            <Icon className="w-[18px] h-[18px]" />
          </motion.a>
        );
      })}
    </motion.div>
  );
}
