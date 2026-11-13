import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProject, projects } from "@/data/projects";
import { Reveal } from "@/components/Reveal";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: `${project.subtitle}. ${project.role} · ${project.stack.slice(0, 4).join(", ")}.`,
    openGraph: {
      title: project.title,
      description: project.subtitle,
      type: "article",
    },
  };
}

function CaseStudyFallback() {
  return (
    <article className="relative z-10 pb-24 pt-28 md:pb-32 md:pt-36">
      <div className="section-pad container-max animate-pulse">
        <div className="h-3 w-24 rounded bg-border" />
        <div className="mt-8 h-3 w-40 rounded bg-border" />
        <div className="mt-4 h-12 max-w-md rounded bg-border" />
        <div className="mt-5 h-5 max-w-xl rounded bg-border" />
        <div className="mt-12 aspect-[16/9] rounded border border-border bg-zinc-100 md:aspect-[21/9]" />
      </div>
    </article>
  );
}

async function CaseStudyContent({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="relative z-10 pb-24 pt-28 md:pb-32 md:pt-36">
      <div className="section-pad container-max">
        <Reveal>
          <Link
            href="/#work"
            className="focus-ring mono text-[0.7rem] uppercase tracking-[0.16em] text-muted transition-colors hover:text-accent"
          >
            ← All work
          </Link>
          <p className="mono mt-8 text-[0.7rem] uppercase tracking-[0.2em] text-accent">
            {project.year} · {project.role}
          </p>
          <h1 className="display mt-3 max-w-[16ch] text-4xl leading-[1.05] text-foreground md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">{project.subtitle}</p>
        </Reveal>

        <Reveal className="mt-12" delay={0.08}>
          <div className="relative aspect-[16/9] overflow-hidden border border-border bg-zinc-100 md:aspect-[21/9]">
            <Image
              src={project.cover}
              alt={`${project.title} cover`}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <h2 className="mono text-[0.65rem] uppercase tracking-[0.18em] text-subtle">
              Stack
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-border bg-elevated px-3 py-1.5 text-xs text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring mono text-[0.7rem] uppercase tracking-[0.14em] text-accent"
                >
                  Repository ↗
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring mono text-[0.7rem] uppercase tracking-[0.14em] text-accent"
                >
                  Live ↗
                </a>
              )}
            </div>
          </Reveal>

          <div className="space-y-10 lg:col-span-8">
            <Reveal>
              <h2 className="display text-2xl text-foreground">The brief</h2>
              <p className="mt-3 text-base leading-relaxed text-muted">
                {project.problem}
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display text-2xl text-foreground">What I built</h2>
              <p className="mt-3 text-base leading-relaxed text-muted">
                {project.approach}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="display text-2xl text-foreground">Result</h2>
              <p className="mt-3 text-base leading-relaxed text-muted">
                {project.outcome}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <h2 className="display text-2xl text-foreground">Notes</h2>
              <p className="mt-3 text-base leading-relaxed text-muted">
                {project.tradeoff}
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-20 border-t border-border pt-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted">Want to talk about a project?</p>
            <Link
              href="/#contact"
              className="focus-ring inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-accent"
            >
              Contact me
            </Link>
          </div>
        </Reveal>
      </div>
    </article>
  );
}

export default function CaseStudyPage({ params }: PageProps) {
  return (
    <Suspense fallback={<CaseStudyFallback />}>
      <CaseStudyContent params={params} />
    </Suspense>
  );
}
