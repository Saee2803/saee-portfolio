"use client";

import { motion } from "framer-motion";

export default function ContactMap() {
  return (
    <motion.div
      className="rounded-xl overflow-hidden border border-white/10 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <iframe
        title="Pen, Raigad, India"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120693.28854824498!2d73.0071!3d19.0330!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c24cce39472f%3A0x82b9cf1e3095da27!2sNavi%20Mumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000"
        width="100%"
        height="200"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full grayscale hover:grayscale-0 transition-all duration-500"
      />
    </motion.div>
  );
}
