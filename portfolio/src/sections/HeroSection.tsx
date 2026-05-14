"use client";

import { motion } from "framer-motion";
import HeroAnimation from "../components/hero/HeroAnimation";
import HeroButtons from "../components/hero/HeroButtons";
import HeroSocialIcons from "../components/hero/HeroSocialIcons";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background blurred shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="order-2 lg:order-1">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-white">Hi all, I&apos;m </span>
              <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Saee
              </span>{" "}
              <motion.span
                className="inline-block"
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "easeInOut",
                }}
              >
                👋
              </motion.span>
            </motion.h1>

            <motion.div
              className="mt-6 space-y-4 text-slate-300 text-lg leading-relaxed text-justify max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p>
                Welcome to my portfolio! I am a passionate Full-Stack Developer
                specializing in Python and Flask, with expertise in building
                dynamic, intuitive, and scalable web applications with clean
                design and efficient functionality.
              </p>
              <p>
                I enjoy transforming innovative ideas into practical digital
                solutions through hands-on project experience. With a strong
                foundation in Python, JavaScript, and modern web technologies, I
                aim to leverage technology to solve real-world problems and
                contribute to impactful, technology-driven projects.
              </p>
              <p>
                Alongside developing personal projects, I actively explore
                opportunities to collaborate with developers and contribute to
                open-source initiatives. I am continuously seeking opportunities
                to learn, improve, and expand my technical expertise through
                challenging projects, workshops, and advanced learning
                experiences.
              </p>
              <p>
                If you are interested in collaborating or discussing ideas
                related to web development and technology, feel free to connect
                with me.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <HeroButtons />

            {/* Social Icons */}
            <HeroSocialIcons />
          </div>

          {/* Right Side - Animation */}
          <div className="order-1 lg:order-2 flex items-center justify-center">
            <HeroAnimation />
          </div>
        </div>
      </div>
    </section>
  );
}
