import Image from "next/image";
import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="relative z-10 py-24 md:py-32">
      <div className="section-pad container-max">
        <Reveal>
          <p className="mono text-[0.7rem] uppercase tracking-[0.2em] text-accent">
            About
          </p>
          <h2 className="display mt-3 max-w-[18ch] text-3xl leading-tight text-foreground md:text-5xl">
            Building products end to end
          </h2>
        </Reveal>

        <div className="mt-14 grid items-start gap-12 md:grid-cols-12 md:gap-10">
          <Reveal className="md:col-span-5" delay={0.05}>
            <div className="relative aspect-[4/5] overflow-hidden bg-zinc-200">
              <Image
                src="/images/portrait.png"
                alt={`${site.name} portrait`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/25 to-transparent" />
            </div>
          </Reveal>

          <div className="md:col-span-7 md:pt-4">
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-muted md:text-xl">
                I&apos;m {site.name}, a Software Engineer in {site.location}. I
                work on UIs, APIs, and cloud setup—whatever the product needs to
                ship and stay up.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 text-base leading-relaxed text-muted">
                I studied Computer Science at St Joseph Engineering College. Right
                now I&apos;m a Software Engineer at a stealth fintech. Outside
                work I also build React/Next and Python/Node apps.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <dl className="mt-10 grid gap-6 border-t border-border pt-8 sm:grid-cols-2">
                <div>
                  <dt className="mono text-[0.65rem] uppercase tracking-[0.16em] text-subtle">
                    Focus
                  </dt>
                  <dd className="mt-2 text-sm text-foreground">
                    Product engineering &amp; market tools
                  </dd>
                </div>
                <div>
                  <dt className="mono text-[0.65rem] uppercase tracking-[0.16em] text-subtle">
                    Stack core
                  </dt>
                  <dd className="mt-2 text-sm text-foreground">
                    React · Next.js · Python · Node · AWS
                  </dd>
                </div>
                <div>
                  <dt className="mono text-[0.65rem] uppercase tracking-[0.16em] text-subtle">
                    Email
                  </dt>
                  <dd className="mt-2 text-sm">
                    <a
                      href={`mailto:${site.email}`}
                      className="focus-ring text-foreground underline-offset-4 hover:text-accent hover:underline"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="mono text-[0.65rem] uppercase tracking-[0.16em] text-subtle">
                    Availability
                  </dt>
                  <dd className="mt-2 text-sm text-foreground">
                    Open to software engineering roles
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
