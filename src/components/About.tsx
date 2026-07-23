"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const aboutParagraphs = [
  "Hi, I'm Tahia! I'm a Computer Science student who genuinely enjoys the process of building things for the web. What started as curiosity about how websites work has grown into a real passion for full-stack web development — I love bringing ideas to life using React, Next.js, and Node.js, turning static designs into fast, interactive experiences that people actually enjoy using.",
  "I care deeply about writing clean, scalable code — the kind that's not just functional, but easy to read, maintain, and build on. Learning never really stops in this field, and honestly, that's what keeps me hooked. There's always a new tool, framework, or best practice to explore, and I try to stay curious about all of it.",
  "I genuinely enjoy solving problems — whether it's debugging a tricky piece of code or figuring out the cleanest way to structure a feature — and I find that the best solutions almost always come from thinking things through carefully and collaborating with others rather than working in isolation.",
  "When I'm not coding, you'll usually find me exploring new ideas or just learning something new — because for me, building things well is what makes the work feel worthwhile.",
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="About Me" />

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="space-y-5 text-foreground-muted leading-relaxed"
          >
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center"
          >
            <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-background-secondary shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-accent-gradient/10 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-8 text-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-border bg-background-elevated">
                  <svg
                    aria-hidden="true"
                    className="h-12 w-12 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </div>
                <p className="text-sm text-foreground-muted">
                  Illustration placeholder
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
