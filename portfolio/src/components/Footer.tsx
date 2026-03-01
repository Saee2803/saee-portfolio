"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    FiGithub,
    FiHeart,
    FiLinkedin,
    FiMail,
    FiMapPin,
} from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const footerLinks = [
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Blogs", href: "/blogs" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: FiGithub, href: "https://github.com/siddhesh940", label: "GitHub" },
  {
    icon: FiLinkedin,
    href: "https://linkedin.com/in/siddhesh-patil-it",
    label: "LinkedIn",
  },
  {
    icon: SiLeetcode,
    href: "https://leetcode.com/u/Siddhesh_Patil_/",
    label: "LeetCode",
  },
  {
    icon: FiMail,
    href: "mailto:patilsiddhesh2810@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/">
              <span className="text-xl font-bold tracking-tight">
                <span className="text-light-text dark:text-white">&lt;</span>
                <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent font-extrabold italic">
                  {" "}
                  Siddhesh Patil{" "}
                </span>
                <span className="text-light-text dark:text-white">/&gt;</span>
              </span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs">
              Full-stack developer passionate about building modern web
              applications with AI integration.
            </p>
            <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
              <FiMapPin className="w-3.5 h-3.5" />
              <span>India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center
                             bg-slate-100 dark:bg-slate-800
                             text-gray-600 dark:text-gray-400
                             hover:bg-primary-500/10 hover:text-primary-500
                             dark:hover:bg-primary-500/10 dark:hover:text-primary-400
                             border border-slate-200 dark:border-slate-700
                             transition-colors duration-200"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
              patilsiddhesh2810@gmail.com
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
            © {new Date().getFullYear()} Siddhesh Patil. Built with{" "}
            <FiHeart className="w-3.5 h-3.5 text-red-500" /> using Next.js &
            Tailwind CSS.
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500">
            Designed & Developed by Siddhesh Patil
          </p>
        </div>
      </div>
    </footer>
  );
}
