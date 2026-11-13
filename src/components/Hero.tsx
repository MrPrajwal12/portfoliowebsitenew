"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { site } from "@/data/site";

gsap.registerPlugin(useGSAP);

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (!root.current) return;
      if (reduced) {
        gsap.set("[data-hero-line]", { yPercent: 0 });
        gsap.set("[data-hero-meta]", { opacity: 1, y: 0 });
        return;
      }
      const ctx = gsap.context(() => {
        gsap.fromTo(
          "[data-hero-line]",
          { yPercent: 110 },
          {
            yPercent: 0,
            duration: 1.05,
            stagger: 0.12,
            ease: "power3.out",
            delay: 0.15,
          },
        );
        gsap.fromTo(
          "[data-hero-meta]",
          { opacity: 0, y: 12 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            delay: 0.85,
          },
        );
      }, root);
      return () => ctx.revert();
    },
    { scope: root, dependencies: [reduced] },
  );

  return (
    <section
      ref={root}
      id="home"
      className="relative z-10 flex min-h-[100svh] flex-col justify-end pb-16 pt-28 md:pb-24 md:pt-32"
    >
      <div className="section-pad container-max">
        <p
          data-hero-meta
          className="mono mb-6 text-[0.7rem] uppercase tracking-[0.2em] text-accent opacity-0"
        >
          {site.role} · {site.location}
        </p>

        <h1 className="display max-w-[14ch] text-[clamp(2.75rem,9vw,6.5rem)] leading-[0.95] text-foreground">
          <span className="block overflow-hidden">
            <span data-hero-line className="block">
              {site.name.split(" ")[0]}
            </span>
          </span>
          <span className="block overflow-hidden">
            <span data-hero-line className="block text-muted">
              {site.name.split(" ").slice(1).join(" ")}
            </span>
          </span>
        </h1>

        <div
          data-hero-meta
          className="mt-8 flex max-w-xl flex-col gap-8 opacity-0 md:mt-10 md:flex-row md:items-end md:justify-between md:max-w-none"
        >
          <p className="max-w-md text-base leading-relaxed text-muted md:text-lg">
            {site.tagline} I build web apps, market tools, and the AWS and DNS
            work that keeps them online.
          </p>

          <div className="flex flex-wrap gap-3">
            <motion.a
              href="#work"
              className="focus-ring inline-flex items-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-accent"
              whileHover={reduced ? undefined : { y: -2 }}
              whileTap={reduced ? undefined : { scale: 0.98 }}
            >
              View work
            </motion.a>
            <motion.a
              href="#contact"
              className="focus-ring inline-flex items-center rounded-full border border-border-strong bg-elevated px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              whileHover={reduced ? undefined : { y: -2 }}
              whileTap={reduced ? undefined : { scale: 0.98 }}
            >
              Contact
            </motion.a>
          </div>
        </div>
      </div>

      <div className="section-pad container-max mt-16 md:mt-24">
        <div className="hairline w-full" />
        <div className="mt-4 flex items-center justify-between">
          <span className="mono text-[0.65rem] uppercase tracking-[0.16em] text-subtle">
            Scroll
          </span>
          <motion.span
            className="mono text-[0.65rem] uppercase tracking-[0.16em] text-subtle"
            animate={reduced ? undefined : { opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            ↓
          </motion.span>
        </div>
      </div>
    </section>
  );
}
