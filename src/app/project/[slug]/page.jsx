"use client";

import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { PROJECTS } from "@/app/data/project";

import {
  GiThunderBlade,
  GiBackwardTime,
  GiLightBulb,
  GiSkills,
  GiCheckMark,
  GiCalendarHalfYear,
  GiPerson,
} from "react-icons/gi";
import {
  FaCode,
  FaRocket,
  FaArrowLeft,
  FaExternalLinkAlt,
  FaExclamationTriangle,
  FaTools,
} from "react-icons/fa";
import { MdOutlineArrowUpward } from "react-icons/md";

export default function ProjectDetail() {
  const params = useParams();
  const slug = params.slug;

  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0B0F19] pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-6">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-[#9CA3AF] transition-colors duration-200 hover:text-[#6C5CE7] group"
          >
            <FaArrowLeft
              size={14}
              className="transition-transform duration-200 group-hover:-translate-x-1"
            />
            Back to Projects
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8"
        >
          <div className="flex items-center gap-3 text-sm text-[#6C5CE7] mb-3">
            <FaCode size={16} />
            <span>Project</span>
          </div>
          <h1 className="text-4xl font-bold text-[#F1F2F6] sm:text-5xl">
            {project.name}
          </h1>
          <p className="mt-4 text-lg text-[#9CA3AF]">{project.description}</p>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative mt-8 aspect-video w-full overflow-hidden rounded-2xl border border-[#2A2F42] bg-[#151A28] group"
        >
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-2 rounded-full border border-[#2A2F42] bg-[#151A28] px-4 py-2 text-sm font-medium text-[#8B7FF0] transition-all duration-200 hover:border-[#6C5CE7] hover:bg-[#6C5CE7]/10 hover:scale-105"
            >
              <GiSkills size={14} />
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          {project.liveLink && (
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6C5CE7] to-[#8B7FF0] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-[#6C5CE7]/30"
            >
              <FaExternalLinkAlt size={16} />
              Live Demo
            </motion.a>
          )}
          {project.githubLink && (
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#2A2F42] px-6 py-3 text-sm font-semibold text-[#F1F2F6] transition-all duration-200 hover:border-[#6C5CE7] hover:bg-[#6C5CE7]/10 hover:text-[#8B7FF0]"
            >
              <GiThunderBlade size={18} />
              View Code
            </motion.a>
          )}
        </motion.div>

        {/* Challenges & Improvements */}
        <div className="mt-12 space-y-6">
          {/* Challenges */}
          {project.challenges &&
            project.challenges !==
              "Placeholder — add specific challenges faced during development." && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-[#2A2F42] bg-[#151A28]/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#FD79A8]/30 hover:shadow-lg hover:shadow-[#FD79A8]/5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FD79A8]/10 text-[#FD79A8]">
                    <FaExclamationTriangle size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#F1F2F6]">
                    Challenges Faced
                  </h3>
                </div>
                <p className="text-[#9CA3AF] leading-relaxed">
                  {project.challenges}
                </p>
              </motion.div>
            )}

          {/* Improvements */}
          {project.improvements &&
            project.improvements !==
              "Placeholder — add potential future improvements." && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-[#2A2F42] bg-[#151A28]/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#FDCB6E]/30 hover:shadow-lg hover:shadow-[#FDCB6E]/5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FDCB6E]/10 text-[#FDCB6E]">
                    <GiLightBulb size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#F1F2F6]">
                    Future Improvements
                  </h3>
                </div>
                <p className="text-[#9CA3AF] leading-relaxed">
                  {project.improvements}
                </p>
              </motion.div>
            )}
        </div>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -4 }}
            className="rounded-xl border border-[#2A2F42] bg-[#151A28]/30 p-4 text-center transition-all duration-200 hover:border-[#6C5CE7]/50 hover:shadow-lg hover:shadow-[#6C5CE7]/10"
          >
            <FaCode className="mx-auto h-5 w-5 text-[#6C5CE7]" />
            <div className="mt-2 text-sm font-semibold text-[#F1F2F6]">
              {project.techStack.length}
            </div>
            <div className="text-xs text-[#9CA3AF]">Technologies</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -4 }}
            className="rounded-xl border border-[#2A2F42] bg-[#151A28]/30 p-4 text-center transition-all duration-200 hover:border-[#6C5CE7]/50 hover:shadow-lg hover:shadow-[#6C5CE7]/10"
          >
            <FaRocket className="mx-auto h-5 w-5 text-[#6C5CE7]" />
            <div className="mt-2 text-sm font-semibold text-[#F1F2F6]">
              {project.liveLink ? (
                <GiCheckMark className="mx-auto text-green-400" size={20} />
              ) : (
                "🚧"
              )}
            </div>
            <div className="text-xs text-[#9CA3AF]">Status</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -4 }}
            className="rounded-xl border border-[#2A2F42] bg-[#151A28]/30 p-4 text-center transition-all duration-200 hover:border-[#6C5CE7]/50 hover:shadow-lg hover:shadow-[#6C5CE7]/10"
          >
            <GiCalendarHalfYear className="mx-auto h-5 w-5 text-[#6C5CE7]" />
            <div className="mt-2 text-sm font-semibold text-[#F1F2F6]">
              2024
            </div>
            <div className="text-xs text-[#9CA3AF]">Year</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -4 }}
            className="rounded-xl border border-[#2A2F42] bg-[#151A28]/30 p-4 text-center transition-all duration-200 hover:border-[#6C5CE7]/50 hover:shadow-lg hover:shadow-[#6C5CE7]/10"
          >
            <GiPerson className="mx-auto h-5 w-5 text-[#6C5CE7]" />
            <div className="mt-2 text-sm font-semibold text-[#F1F2F6]">
              Solo
            </div>
            <div className="text-xs text-[#9CA3AF]">Developer</div>
          </motion.div>
        </motion.div>

        {/* Back to top */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <Link
            href="#top"
            className="inline-flex items-center gap-2 text-sm text-[#9CA3AF] transition-colors duration-200 hover:text-[#6C5CE7] group"
          >
            <MdOutlineArrowUpward
              size={16}
              className="transition-transform duration-200 group-hover:-translate-y-1"
            />
            Back to Top
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
