"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { PROJECTS } from "../data/project";

import { 
  FaExternalLinkAlt, 
  FaGithub, 
  FaArrowRight,
  FaCode,
  FaRocket
} from "react-icons/fa";
import { MdOutlineArrowForward } from "react-icons/md";
import { GiSkills } from "react-icons/gi";

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#0B0F19] px-6 py-24 overflow-hidden">
      {/* Background effects */}
      <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-[#6C5CE7]/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#A29BFE]/5 blur-[120px]" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%236C5CE7%22%20fill-opacity=%220.03%22%3E%3Cpath%20d=%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <motion.span
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-[#2A2F42] bg-[#151A28]/50 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-[#6C5CE7] backdrop-blur-sm"
          >
            <FaCode size={14} />
            Portfolio
          </motion.span>
          <h2 className="mt-4 text-3xl font-bold text-[#F1F2F6] sm:text-5xl">
            Things I&apos;ve{" "}
            <span className="bg-gradient-to-r from-[#6C5CE7] to-[#A29BFE] bg-clip-text text-transparent">
              built
            </span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto mt-3 h-1 rounded-full bg-gradient-to-r from-[#6C5CE7] to-[#A29BFE]"
          />
          <p className="mt-4 text-[#9CA3AF] max-w-2xl mx-auto">
            Each project is a unique challenge that helped me grow as a developer
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-2xl border border-[#2A2F42] bg-gradient-to-b from-[#151A28] to-[#0B0F19] transition-all duration-300 hover:border-[#6C5CE7]/50 hover:shadow-2xl hover:shadow-[#6C5CE7]/10"
            >
              {/* Image with overlay */}
              <div className="relative aspect-video w-full overflow-hidden bg-[#1E2436]">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                
                {/* Quick action buttons on hover */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.liveLink && (
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="rounded-full bg-[#6C5CE7] p-3 text-white transition-all duration-200 hover:shadow-lg hover:shadow-[#6C5CE7]/40"
                    >
                      <FaExternalLinkAlt size={20} />
                    </motion.a>
                  )}
                  {project.githubLink && (
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="rounded-full bg-[#1E2436] p-3 text-[#F1F2F6] transition-all duration-200 hover:bg-[#2A2F42] hover:shadow-lg hover:shadow-[#2A2F42]/40"
                    >
                      <FaGithub size={20} />
                    </motion.a>
                  )}
                </div>

                {/* Project number badge */}
                <div className="absolute top-3 right-3 rounded-full bg-[#0B0F19]/80 backdrop-blur-sm px-3 py-1 text-xs font-medium text-[#9CA3AF] border border-[#2A2F42]">
                  #{index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#F1F2F6] group-hover:text-[#6C5CE7] transition-colors duration-200">
                  {project.name}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#9CA3AF]">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#1E2436] px-3 py-1 text-xs font-medium text-[#8B7FF0] transition-all duration-200 group-hover:bg-[#6C5CE7]/10"
                    >
                      <GiSkills size={10} />
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="rounded-full bg-[#1E2436] px-3 py-1 text-xs font-medium text-[#9CA3AF]">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

                <Link
                  href={`/project/${project.slug}`}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#6C5CE7] transition-all duration-200 hover:text-[#8B7FF0] group/link"
                >
                  View Details
                  <MdOutlineArrowForward
                    size={16}
                    className="transition-all duration-200 group-hover/link:translate-x-1 group-hover/link:scale-110"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-2 rounded-full border border-[#2A2F42] bg-[#151A28]/50 px-8 py-3 text-sm font-semibold text-[#F1F2F6] backdrop-blur-sm transition-all duration-200 hover:border-[#6C5CE7] hover:bg-[#6C5CE7]/10 hover:text-[#8B7FF0] hover:shadow-lg hover:shadow-[#6C5CE7]/20"
          >
            <FaRocket size={16} />
            Let&apos;s Build Something Together
            <FaArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}