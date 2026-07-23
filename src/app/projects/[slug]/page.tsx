import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import ProjectImage from "@/components/ProjectImage";
import { getProjectBySlug, projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found | Tahia Mubin" };
  }

  return {
    title: `${project.name} | Tahia Mubin`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="px-6 py-12 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-accent"
          >
            <span aria-hidden="true">←</span>
            Back to Projects
          </Link>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-background-secondary">
            <div className="relative aspect-video w-full bg-background-elevated">
              <ProjectImage
                src={project.image}
                alt={`${project.name} project screenshot`}
                fill
                priority
                sizes="(max-width: 896px) 100vw, 896px"
                className="object-cover"
              />
            </div>

            <div className="space-y-8 p-6 sm:p-8">
              <div>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {project.name}
                </h1>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-background-elevated px-3 py-1 text-sm text-foreground-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-accent">
                  Description
                </h2>
                <p className="leading-relaxed text-foreground-muted">
                  {project.description}
                </p>
              </section>

              <div className="flex flex-wrap gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-border bg-background-elevated px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent/40 hover:text-accent"
                >
                  GitHub Repo
                </a>
              </div>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-accent">
                  Challenges Faced
                </h2>
                <p className="leading-relaxed text-foreground-muted">
                  {project.challenges}
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-accent">
                  Future Improvements
                </h2>
                <p className="leading-relaxed text-foreground-muted">
                  {project.improvements}
                </p>
              </section>

              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-accent"
              >
                <span aria-hidden="true">←</span>
                Back to Projects
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
