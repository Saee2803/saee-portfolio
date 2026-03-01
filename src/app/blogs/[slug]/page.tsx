"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
    FiArrowLeft,
    FiCalendar,
    FiCheck,
    FiClock,
    FiCopy,
    FiLinkedin,
    FiList,
    FiTwitter,
    FiUser,
} from "react-icons/fi";
import { getBlogBySlug } from "../../../lib/blogData";

interface BlogSlugPageProps {
  params: { slug: string };
}

export default function BlogSlugPage({ params }: BlogSlugPageProps) {
  const blog = getBlogBySlug(params.slug);
  const [readProgress, setReadProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [tocOpen, setTocOpen] = useState(false);

  // Extract headings for Table of Contents
  const headings = useMemo(() => {
    if (!blog) return [];
    const lines = blog.content.split("\n");
    return lines
      .filter(
        (line) =>
          line.trim().startsWith("## ") || line.trim().startsWith("### "),
      )
      .map((line) => {
        const trimmed = line.trim();
        const level = trimmed.startsWith("### ") ? 3 : 2;
        const text = trimmed.replace(/^#{2,3}\s/, "");
        const id = text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");
        return { level, text, id };
      });
  }, [blog]);

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

  const pageUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`,
      "_blank",
    );
  };

  const handleShareTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(pageUrl)}`,
      "_blank",
    );
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

            {/* Share buttons */}
            <div className="ml-auto flex items-center gap-2">
              <button
                onClick={handleShareLinkedIn}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800
                           text-gray-600 dark:text-gray-400
                           hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600
                           transition-colors"
                title="Share on LinkedIn"
              >
                <FiLinkedin className="w-4 h-4" />
              </button>
              <button
                onClick={handleShareTwitter}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800
                           text-gray-600 dark:text-gray-400
                           hover:bg-sky-100 dark:hover:bg-sky-900/30 hover:text-sky-500
                           transition-colors"
                title="Share on Twitter"
              >
                <FiTwitter className="w-4 h-4" />
              </button>
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg
                           bg-slate-100 dark:bg-slate-800
                           text-gray-600 dark:text-gray-400 text-sm
                           hover:bg-slate-200 dark:hover:bg-slate-700
                           transition-colors"
                title="Copy link"
              >
                {copied ? (
                  <>
                    <FiCheck className="w-4 h-4 text-green-500" />
                    <span className="text-green-500">Copied!</span>
                  </>
                ) : (
                  <>
                    <FiCopy className="w-4 h-4" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Table of Contents */}
          {headings.length > 0 && (
            <motion.div
              className="mb-10 rounded-xl border border-slate-200 dark:border-slate-700
                         bg-white dark:bg-slate-900/60 backdrop-blur overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <button
                onClick={() => setTocOpen(!tocOpen)}
                className="w-full flex items-center gap-3 px-6 py-4 text-left
                           hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <FiList className="w-5 h-5 text-primary-500" />
                <span className="font-semibold text-gray-900 dark:text-white">
                  Table of Contents
                </span>
                <motion.span
                  className="ml-auto text-gray-400"
                  animate={{ rotate: tocOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  ▼
                </motion.span>
              </button>
              {tocOpen && (
                <motion.nav
                  className="px-6 pb-4 space-y-1"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  {headings.map((h, i) => (
                    <a
                      key={i}
                      href={`#${h.id}`}
                      className={`block py-1.5 text-sm transition-colors hover:text-primary-500
                                 ${h.level === 3 ? "pl-6" : "pl-2"}
                                 text-gray-600 dark:text-gray-400`}
                    >
                      {h.text}
                    </a>
                  ))}
                </motion.nav>
              )}
            </motion.div>
          )}

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
                  const text = trimmed.replace("## ", "");
                  const id = text
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "");
                  elements.push(
                    <h2
                      key={i}
                      id={id}
                      className="text-2xl font-bold mt-10 mb-4 scroll-mt-20"
                    >
                      {text}
                    </h2>,
                  );
                  return;
                }
                if (trimmed.startsWith("### ")) {
                  flushList();
                  const text = trimmed.replace("### ", "");
                  const id = text
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "");
                  elements.push(
                    <h3
                      key={i}
                      id={id}
                      className="text-xl font-semibold mt-8 mb-3 scroll-mt-20"
                    >
                      {text}
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
