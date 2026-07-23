"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const EDUCATION = [
  {
    degree: "B.Sc. in Computer Science and Engineering (CSE)",
    institution: "Leading University, Sylhet",
    status: "Currently Enrolled",
    description:
      "Building a strong foundation in programming, data structures, algorithms, and modern web technologies through coursework and hands-on projects.",
  },
];

export default function Education() {
  return (
    <section id="education" className="bg-[#0B0F19] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-[#6C5CE7]">
            Education
          </span>
          <h2 className="mt-3 text-3xl font-bold text-[#F1F2F6] sm:text-4xl">
            Academic background
          </h2>
        </motion.div>

        <div className="relative border-l border-[#2A2F42] pl-8">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pb-4"
            >
              {/* Timeline dot */}
              <span className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full border border-[#6C5CE7]/40 bg-[#151A28] text-[#8B7FF0]">
                <GraduationCap size={16} />
              </span>

              <div className="rounded-2xl border border-[#2A2F42] bg-[#151A28] p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-[#F1F2F6]">
                    {edu.degree}
                  </h3>
                  <span className="rounded-full bg-[#FBBF24]/15 px-3 py-1 text-xs font-medium text-[#FBBF24]">
                    {edu.status}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-[#8B7FF0]">
                  {edu.institution}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#9CA3AF]">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}