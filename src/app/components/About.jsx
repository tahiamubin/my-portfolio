"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-[#0B0F19] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-[#6C5CE7]">
            About Me
          </span>
          <h2 className="mt-3 text-3xl font-bold text-[#F1F2F6] sm:text-4xl">
            Get to know me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-5">
        

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="space-y-5 md:col-span-3"
          >
            <p className="text-base leading-relaxed text-[#9CA3AF] sm:text-lg">
              Hi, I&apos;m Tahia! I&apos;m a Computer Science student who
              genuinely enjoys the process of building things for the web.
              What started as curiosity about how websites work has grown
              into a real passion for full-stack web development — I love
              bringing ideas to life using{" "}
              <span className="text-[#F1F2F6]">React</span>,{" "}
              <span className="text-[#F1F2F6]">Next.js</span>, and{" "}
              <span className="text-[#F1F2F6]">Node.js</span>, turning
              static designs into fast, interactive experiences that people
              actually enjoy using.
            </p>

            <p className="text-base leading-relaxed text-[#9CA3AF] sm:text-lg">
              I care deeply about writing clean, scalable code — the kind
              that&apos;s not just functional, but easy to read, maintain,
              and build on. Learning never really stops in this field, and
              honestly, that&apos;s what keeps me hooked. There&apos;s
              always a new tool, framework, or best practice to explore, and
              I try to stay curious about all of it.
            </p>

            <p className="text-base leading-relaxed text-[#9CA3AF] sm:text-lg">
              I genuinely enjoy solving problems — whether it&apos;s
              debugging a tricky piece of code or figuring out the cleanest
              way to structure a feature — and I find that the best
              solutions almost always come from thinking things through
              carefully and collaborating with others rather than working
              in isolation.
            </p>

            <p className="text-base leading-relaxed text-[#9CA3AF] sm:text-lg">
              When I&apos;m not coding, you&apos;ll usually find me
              exploring new ideas or just learning something new — because
              for me, building things well is what makes the work feel
              worthwhile.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}