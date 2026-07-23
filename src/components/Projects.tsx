"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getProjectTeaser, projects } from "@/data/projects";
import ProjectImage from "./ProjectImage";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Projects"
          subtitle="Selected work and things I've built"
        />

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group overflow-hidden rounded-2xl border border-border bg-background-secondary shadow-lg transition-shadow hover:border-accent/40 hover:shadow-[0_20px_40px_rgba(108,92,231,0.15)]"
            >
              <div className="relative aspect-video overflow-hidden bg-background-elevated">
                <ProjectImage
                  src={project.image}
                  alt={`${project.name} project screenshot`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col gap-4 p-5">
                <div>
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-foreground-muted">
                    {getProjectTeaser(project.description)}
                  </p>
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex w-fit items-center justify-center rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
                >
                  View Details
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
