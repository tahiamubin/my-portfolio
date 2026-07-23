"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 bg-background-secondary px-6 py-20 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Skills" subtitle="Technologies and strengths I work with" />

        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="rounded-2xl border border-border bg-background p-6 transition-colors hover:border-accent/40 hover:bg-background-elevated"
            >
              <h3 className="mb-4 text-lg font-semibold text-accent">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-foreground-muted"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
