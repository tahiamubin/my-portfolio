"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, Sparkles, Code } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0F19] px-6 pt-28 pb-16"
    >
      {/* Ambient glow accents */}
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-[#6C5CE7]/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#4F46E5]/10 blur-[100px]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#6C5CE7]/5 blur-[150px]" />

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-[#6C5CE7]/20"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
            }}
            animate={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto w-full max-w-6xl">
        {/* Flex layout: image + text */}
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left"
          >
            {/* Designation eyebrow with sparkle */}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#2A2F42] bg-[#151A28]/80 backdrop-blur-sm px-5 py-2 text-sm font-medium text-[#8B7FF0]"
            >
              <Sparkles size={14} className="text-[#6C5CE7]" />
              MERN Stack Developer
              <span className="h-1.5 w-1.5 rounded-full bg-[#6C5CE7] animate-pulse" />
            </motion.span>

            {/* Name + intro with gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 text-4xl font-bold leading-tight text-[#F1F2F6] sm:text-5xl lg:text-6xl"
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-[#6C5CE7] via-[#8B7FF0] to-[#A29BFE] bg-clip-text text-transparent">
                Tahia Mubin
              </span>
            </motion.h1>

            {/* Animated typing effect subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-4 text-lg text-[#9CA3AF] sm:text-xl"
            >
              <span className="inline-flex items-center gap-2">
                <Code size={18} className="text-[#6C5CE7]" />
                Building the future, one line at a time
                <Code size={18} className="text-[#6C5CE7]" />
              </span>
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-[#9CA3AF] sm:text-lg"
            >
              I build fast, scalable web apps with{" "}
              <span className="text-[#F1F2F6] font-medium">React.js</span>,{" "}
              <span className="text-[#F1F2F6] font-medium">Next.js</span>,{" "}
              <span className="text-[#F1F2F6] font-medium">Node.js</span>, and{" "}
              <span className="text-[#F1F2F6] font-medium">MongoDB</span> —
              turning ideas into clean, user-friendly experiences.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6C5CE7] to-[#8B7FF0] px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-[#6C5CE7]/40"
              >
                <Download
                  size={18}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5"
                />
                Download Resume
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 rounded-full border border-[#2A2F42] px-8 py-3.5 text-sm font-semibold text-[#F1F2F6] transition-all duration-200 hover:border-[#6C5CE7] hover:bg-[#6C5CE7]/10 hover:text-[#8B7FF0]"
              >
                View My Work
                <span className="text-[#6C5CE7]">→</span>
              </motion.a>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-16 flex flex-col items-center gap-2 lg:items-start"
            >
              <span className="text-xs text-[#9CA3AF]">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-6 w-4 rounded-full border-2 border-[#2A2F42] flex items-start justify-center p-0.5"
              >
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="h-1.5 w-1.5 rounded-full bg-[#6C5CE7]"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Profile picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="relative h-56 w-56 shrink-0 sm:h-72 sm:w-72 lg:h-96 lg:w-96"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6C5CE7] to-[#8B7FF0] blur-2xl opacity-50" />
            <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-[#2A2F42] bg-[#151A28]">
              <Image
                src="/picture.png"
                alt="Tahia Mubin"
                fill
                sizes="(max-width: 1024px) 288px, 384px"
                className="object-cover scale-125"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}