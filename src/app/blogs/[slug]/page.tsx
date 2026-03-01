"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import {
    FiArrowLeft,
    FiCalendar,
    FiClock,
    FiShare2,
    FiUser,
} from "react-icons/fi";
import { getBlogBySlug } from "../../../lib/blogData";

interface BlogSlugPageProps {
  params: { slug: string };
}

export default function BlogSlugPage({ params }: BlogSlugPageProps) {
  const blog = getBlogBySlug(params.slug);
  const [readProgress, setReadProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setReadProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!blog) {
    notFound();
  }

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: blog.title,
        url: window.location.href,
      });
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <>
      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-transparent">
        <motion.div
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
          style={{ width: `${readProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <div className="min-h-screen bg-light-bg dark:bg-dark-bg">
        {/* Hero */}
        <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

          {/* Back button */}
          <div className="absolute top-6 left-6 z-10">
            <Link
              href="/blogs"
              className="flex items-center gap-2 px-4 py-2 rounded-lg
                         bg-black/30 backdrop-blur-sm text-white text-sm
                         hover:bg-black/50 transition-colors"
            >
              <FiArrowLeft className="w-4 h-4" />
              Back to Blogs
            </Link>
          </div>

          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-4xl mx-auto">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 mb-4">
                {blog.platform}
              </span>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {blog.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Meta & Content */}
        <div className="max-w-4xl mx-auto px-6 py-10">
          {/* Meta bar */}
          <motion.div
            className="flex flex-wrap items-center gap-4 md:gap-6 pb-8 mb-8 border-b border-slate-200 dark:border-slate-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <FiUser className="w-4 h-4" />
              {blog.author}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <FiCalendar className="w-4 h-4" />
              {new Date(blog.publishDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <FiClock className="w-4 h-4" />
              {blog.readTime}
            </div>
            <button
              onClick={handleShare}
              className="ml-auto flex items-center gap-2 px-4 py-2 text-sm rounded-lg
                         bg-slate-100 dark:bg-slate-800
                         text-gray-600 dark:text-gray-400
                         hover:bg-slate-200 dark:hover:bg-slate-700
                         transition-colors"
            >
              <FiShare2 className="w-4 h-4" />
              Share
            </button>
          </motion.div>

          {/* Article content */}
          <motion.article
            className="prose prose-lg dark:prose-invert max-w-none
                       prose-headings:text-gray-900 dark:prose-headings:text-white
                       prose-p:text-gray-600 dark:prose-p:text-gray-300
                       prose-strong:text-gray-900 dark:prose-strong:text-white
                       prose-a:text-indigo-500 hover:prose-a:text-indigo-400
                       prose-code:bg-slate-100 dark:prose-code:bg-slate-800
                       prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                       prose-li:text-gray-600 dark:prose-li:text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {(() => {
              const elements: React.ReactNode[] = [];
              const lines = blog.content.split("\n");
              let listItems: React.ReactNode[] = [];

              const flushList = () => {
                if (listItems.length > 0) {
                  elements.push(
                    <ul
                      key={`list-${elements.length}`}
                      className="list-disc pl-6 mb-4 space-y-2"
                    >
                      {listItems}
                    </ul>,
                  );
                  listItems = [];
                }
              };

              lines.forEach((line, i) => {
                const trimmed = line.trim();
                if (!trimmed) {
                  flushList();
                  elements.push(<br key={i} />);
                  return;
                }
                if (trimmed.startsWith("## ")) {
                  flushList();
                  elements.push(
                    <h2 key={i} className="text-2xl font-bold mt-10 mb-4">
                      {trimmed.replace("## ", "")}
                    </h2>,
                  );
                  return;
                }
                if (trimmed.startsWith("### ")) {
                  flushList();
                  elements.push(
                    <h3 key={i} className="text-xl font-semibold mt-8 mb-3">
                      {trimmed.replace("### ", "")}
                    </h3>,
                  );
                  return;
                }
                if (trimmed.startsWith("- ")) {
                  const content = trimmed.replace("- ", "");
                  listItems.push(
                    <li
                      key={i}
                      className="mb-1"
                      dangerouslySetInnerHTML={{
                        __html: content.replace(
                          /\*\*(.*?)\*\*/g,
                          "<strong>$1</strong>",
                        ),
                      }}
                    />,
                  );
                  return;
                }
                flushList();
                elements.push(
                  <p key={i} className="mb-4 leading-relaxed">
                    {trimmed}
                  </p>,
                );
              });
              flushList();
              return elements;
            })()}
          </motion.article>

          {/* Read Full Article CTA */}
          <motion.div
            className="mt-12 p-6 rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10
                       border border-indigo-500/20 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Read the full article on {blog.platform}
            </p>
            <a
              href={blog.articleLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg
                         bg-indigo-500 text-white font-medium
                         hover:bg-indigo-600 transition-colors"
            >
              Read on {blog.platform}
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
}
