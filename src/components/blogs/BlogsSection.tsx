"use client";

import { motion } from "framer-motion";
import { blogs } from "../../lib/blogData";
import SectionWrapper from "../SectionWrapper";
import BlogCard from "./BlogCard";

export default function BlogsSection() {
  return (
    <SectionWrapper id="blogs" title="Blogs">
      {/* Subtitle */}
      <motion.p
        className="text-center text-gray-500 dark:text-gray-400 text-base md:text-lg mb-10 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        Technical articles and insights from my development journey.
      </motion.p>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
