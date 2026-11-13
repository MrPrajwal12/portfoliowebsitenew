import {
  certifications,
  education,
  experience,
  skillGroups,
} from "@/data/experience";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

export function Experience() {
  return (
    <section id="experience" className="relative z-10 py-24 md:py-32">
      <div className="section-pad container-max">
        <Reveal>
          <p className="mono text-[0.7rem] uppercase tracking-[0.2em] text-accent">
            Experience
          </p>
          <h2 className="display mt-3 text-3xl text-foreground md:text-5xl">
            Where I&apos;ve worked
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <h3 className="mono text-[0.65rem] uppercase tracking-[0.18em] text-subtle">
                Roles
              </h3>
            </Reveal>
            <Stagger className="mt-6 space-y-0">
              {experience.map((item) => (
                <StaggerItem key={item.org}>
                  <article className="border-t border-border py-6 first:border-t-0 first:pt-0">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <h4 className="display text-xl text-foreground">
                        {item.org}
                      </h4>
                      <span className="mono text-[0.65rem] uppercase tracking-[0.12em] text-subtle">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-accent">
                      {item.role}
                    </p>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
                      {item.summary}
                    </p>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal className="mt-12">
              <h3 className="mono text-[0.65rem] uppercase tracking-[0.18em] text-subtle">
                Education
              </h3>
              <ul className="mt-6 space-y-5">
                {education.map((ed) => (
                  <li
                    key={ed.degree}
                    className="flex flex-col gap-1 border-l-2 border-accent/30 pl-4 sm:flex-row sm:items-baseline sm:justify-between"
                  >
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {ed.degree}
                      </p>
                      <p className="text-sm text-muted">{ed.school}</p>
                    </div>
                    <span className="mono text-[0.65rem] uppercase tracking-[0.12em] text-subtle">
                      {ed.period}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal>
              <h3 className="mono text-[0.65rem] uppercase tracking-[0.18em] text-subtle">
                Capabilities
              </h3>
              <div className="mt-6 space-y-8">
                {skillGroups.map((group) => (
                  <div key={group.label}>
                    <p className="text-sm font-medium text-foreground">
                      {group.label}
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-full border border-border bg-elevated px-3 py-1.5 text-xs text-muted"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-12" delay={0.1}>
              <h3 className="mono text-[0.65rem] uppercase tracking-[0.18em] text-subtle">
                Recognition
              </h3>
              <ul className="mt-6 space-y-4">
                {certifications.map((cert) => (
                  <li key={cert.title} className="border-t border-border pt-4">
                    <p className="text-sm font-medium text-foreground">
                      {cert.title}
                    </p>
                    <p className="mt-1 mono text-[0.65rem] uppercase tracking-[0.12em] text-subtle">
                      {cert.issuer} · {cert.period}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
