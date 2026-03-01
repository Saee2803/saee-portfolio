"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";

export interface BlogData {
  slug?: string;
  title: string;
  description: string;
  image: string;
  platform: string;
  articleLink: string;
}

interface BlogCardProps {
  blog: BlogData;
  index: number;
}

export default function BlogCard({ blog, index }: BlogCardProps) {
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
              src={blog.image}
              alt={blog.title}
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
          {blog.title}
        </h3>

        {/* Platform badge */}
        <div className="mt-3 flex flex-wrap gap-2">
          <span
            className="inline-block px-2.5 py-1 text-xs font-medium rounded-md
                       bg-slate-100 dark:bg-slate-800
                       text-slate-700 dark:text-slate-300
                       border border-slate-200 dark:border-slate-700
                       transition-colors duration-200"
          >
            {blog.platform}
          </span>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
          {blog.description}
        </p>

        {/* Buttons */}
        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
          {blog.slug && (
            <Link
              href={`/blogs/${blog.slug}`}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg
                         border border-primary-500/30
                         text-primary-600 dark:text-primary-400
                         bg-primary-50 dark:bg-primary-900/20
                         hover:bg-primary-100 dark:hover:bg-primary-900/40
                         transition-colors duration-200"
            >
              <FiArrowRight className="w-4 h-4" />
              Read More
            </Link>
          )}
          <a
            href={blog.articleLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg
                       border border-slate-200 dark:border-slate-700
                       text-gray-700 dark:text-gray-300
                       bg-white dark:bg-slate-800/50
                       hover:bg-slate-50 dark:hover:bg-slate-800
                       transition-colors duration-200"
          >
            <FiExternalLink className="w-4 h-4" />
            {blog.platform}
          </a>
        </div>
      </div>
    </motion.div>
  );
}
