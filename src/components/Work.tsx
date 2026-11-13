import Image from "next/image";
import Link from "next/link";
import { featuredProjects, projects } from "@/data/projects";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

export function Work() {
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="relative z-10 py-24 md:py-32">
      <div className="section-pad container-max">
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mono text-[0.7rem] uppercase tracking-[0.2em] text-accent">
                Selected work
              </p>
              <h2 className="display mt-3 text-3xl text-foreground md:text-5xl">
                Case studies
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              A few projects I care about—what I built and why.
            </p>
          </div>
        </Reveal>

        <Stagger className="mt-14 space-y-6 md:space-y-8">
          {featuredProjects.map((project, index) => (
            <StaggerItem key={project.slug}>
              <Link
                href={`/work/${project.slug}`}
                className="group focus-ring grid overflow-hidden border border-border bg-elevated transition-colors hover:border-accent/40 md:grid-cols-12"
              >
                <div className="relative aspect-[16/10] bg-zinc-100 md:col-span-7 md:aspect-auto md:min-h-[280px]">
                  <Image
                    src={project.cover}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 60vw"
                    priority={index === 0}
                  />
                </div>
                <div className="flex flex-col justify-between p-6 md:col-span-5 md:p-8">
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="mono text-[0.65rem] uppercase tracking-[0.16em] text-subtle">
                        {String(index + 1).padStart(2, "0")} · {project.year}
                      </span>
                      <span className="mono text-[0.65rem] uppercase tracking-[0.14em] text-accent opacity-0 transition-opacity group-hover:opacity-100">
                        View →
                      </span>
                    </div>
                    <h3 className="display mt-4 text-2xl text-foreground md:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {project.subtitle}
                    </p>
                  </div>
                  <ul className="mt-8 flex flex-wrap gap-2">
                    {project.stack.slice(0, 4).map((tech) => (
                      <li
                        key={tech}
                        className="mono rounded-full border border-border px-3 py-1 text-[0.65rem] uppercase tracking-[0.12em] text-subtle"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        {rest.length > 0 && (
          <div className="mt-16">
            <Reveal>
              <p className="mono text-[0.7rem] uppercase tracking-[0.2em] text-subtle">
                Also built
              </p>
            </Reveal>
            <ul className="mt-6 divide-y divide-border border-y border-border">
              {rest.map((project) => (
                <li key={project.slug}>
                  <Link
                    href={`/work/${project.slug}`}
                    className="focus-ring group flex flex-col gap-2 py-5 transition-colors hover:bg-elevated/60 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-2"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="display text-lg text-foreground group-hover:text-accent">
                        {project.title}
                      </span>
                      <span className="hidden text-sm text-muted sm:inline">
                        {project.subtitle}
                      </span>
                    </div>
                    <span className="mono shrink-0 text-[0.65rem] uppercase tracking-[0.14em] text-subtle">
                      {project.year}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
