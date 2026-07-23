import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { PROJECTS } from "../data/project";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailPage({ params }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0B0F19] px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#9CA3AF] transition-colors duration-200 hover:text-[#F1F2F6]"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        <h1 className="mt-6 text-3xl font-bold text-[#F1F2F6] sm:text-4xl">
          {project.name}
        </h1>

        <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-2xl border border-[#2A2F42] bg-[#151A28]">
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        {/* Tech stack */}
        <div className="mt-8 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-[#151A28] border border-[#2A2F42] px-4 py-1.5 text-sm font-medium text-[#8B7FF0]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#6C5CE7] px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#8B7FF0]"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#2A2F42] px-6 py-3 text-sm font-semibold text-[#F1F2F6] transition-colors duration-200 hover:border-[#6C5CE7] hover:text-[#8B7FF0]"
          >
            <Github size={16} />
            GitHub Repo
          </a>
        </div>

        {/* Description */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-[#F1F2F6]">Overview</h2>
          <p className="mt-3 text-base leading-relaxed text-[#9CA3AF]">
            {project.description}
          </p>
        </section>

        {/* Challenges */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-[#F1F2F6]">
            Challenges Faced
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#9CA3AF]">
            {project.challenges}
          </p>
        </section>

        {/* Improvements */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-[#F1F2F6]">
            Future Improvements
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#9CA3AF]">
            {project.improvements}
          </p>
        </section>

        <Link
          href="/#projects"
          className="mt-14 inline-flex items-center gap-2 text-sm font-medium text-[#9CA3AF] transition-colors duration-200 hover:text-[#F1F2F6]"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>
      </div>
    </main>
  );
}
