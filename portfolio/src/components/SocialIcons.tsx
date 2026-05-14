"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface SocialIcon {
  name: string;
  src: string;
  href: string;
  alt: string;
}

const socialIcons: SocialIcon[] = [
  {
    name: "GitHub",
    src: "/icons_Svg_Png/github.png",
    href: "https://github.com/Saee2803",
    alt: "GitHub",
  },
  {
    name: "LinkedIn",
    src: "/icons_Svg_Png/linkedin.svg",
    href: "https://www.linkedin.com/in/saee-bhanuskar-8a80ba314/",
    alt: "LinkedIn",
  },
  {
    name: "Email",
    src: "/icons_Svg_Png/email.svg",
    href: "mailto:saeebhanuskar@gmail.com",
    alt: "Email",
  },
  
  {
    name: "Instagram",
    src: "/icons_Svg_Png/instagram.svg",
    href: "https://www.instagram.com/_.aboli._28/",
    alt: "Instagram",
  },
  {
    name: "Vercel",
    src: "/icons_Svg_Png/vercel.svg",
    href: "https://vercel.com/saee-bhanuskar",
    alt: "Vercel",
  },
];

export default function SocialIcons() {
  return (
    <div className="flex items-center gap-3 mt-8">
      {socialIcons.map((icon, index) => (
        <motion.a
          key={icon.name}
          href={icon.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full bg-light-surface dark:bg-dark-card 
                     flex items-center justify-center
                     shadow-md hover:shadow-lg 
                     border border-gray-200 dark:border-gray-700
                     transition-all duration-300 hover:scale-110
                     hover:border-primary-400 dark:hover:border-primary-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
          aria-label={icon.alt}
        >
          <Image
            src={icon.src}
            alt={icon.alt}
            width={22}
            height={22}
            className="dark:invert dark:brightness-200 opacity-80 hover:opacity-100 transition-opacity"
          />
        </motion.a>
      ))}
    </div>
  );
}
