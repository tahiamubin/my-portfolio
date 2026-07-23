import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-3xl font-bold">Project not found</h1>
      <p className="mt-3 text-foreground-muted">
        The project you are looking for does not exist.
      </p>
      <Link
        href="/#projects"
        className="mt-6 inline-flex items-center gap-2 text-accent transition-colors hover:text-accent-hover"
      >
        <span aria-hidden="true">←</span>
        Back to Projects
      </Link>
    </main>
  );
}
