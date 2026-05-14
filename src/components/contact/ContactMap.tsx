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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121047.11859830693!2d73.0988!3d18.9677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d3e7e7e7e7e7%3A0x5f5f5f5f5f5f5f5f!2sPen%2C%20Raigad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000"
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
