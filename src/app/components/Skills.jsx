"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiHtml5,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiCplusplus,
  SiGit,
  SiMongodb,
} from "react-icons/si";
import { Users, Lightbulb, Award } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    skills: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React.js", icon: SiReact },
      { name: "HTML5 & CSS3", icon: SiHtml5 },
      { name: "JavaScript (ES6+)", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend & Tools",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "C / C++", icon: SiCplusplus },
      { name: "Git & GitHub", icon: SiGit },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Teamwork & Communication", icon: Users },
      { name: "Problem Solving", icon: Lightbulb },
      { name: "Leadership & Event Management", icon: Award },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#0B0F19] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-[#6C5CE7]">
            Skills
          </span>
          <h2 className="mt-3 text-3xl font-bold text-[#F1F2F6] sm:text-4xl">
            What I work with
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {SKILL_CATEGORIES.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="rounded-2xl border border-[#2A2F42] bg-[#151A28] p-6"
            >
              <h3 className="mb-5 text-lg font-semibold text-[#F1F2F6]">
                {category.title}
              </h3>

              <div className="flex flex-col gap-3">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 rounded-xl border border-[#2A2F42] bg-[#1E2436] px-4 py-3 transition-colors duration-200 hover:border-[#6C5CE7]/50"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#6C5CE7]/15 text-[#8B7FF0]">
                        <Icon size={18} />
                      </span>
                      <span className="text-sm font-medium text-[#F1F2F6]">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
