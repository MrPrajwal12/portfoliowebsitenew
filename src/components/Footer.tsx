import { site, navLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border bg-elevated">
      <div className="section-pad container-max grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="display text-xl text-foreground">
            {site.name}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            {site.role} in {site.location}. Web apps, market tools, and cloud
            ops.
          </p>
        </div>

        <div>
          <p className="mono text-[0.65rem] uppercase tracking-[0.18em] text-subtle">
            Navigate
          </p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="focus-ring text-sm text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mono text-[0.65rem] uppercase tracking-[0.18em] text-subtle">
            Connect
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="focus-ring text-muted transition-colors hover:text-foreground"
              >
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring text-muted transition-colors hover:text-foreground"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring text-muted transition-colors hover:text-foreground"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="section-pad container-max flex flex-col gap-2 border-t border-border py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="mono text-[0.65rem] uppercase tracking-[0.14em] text-subtle">
          © 2026 {site.name}
        </p>
        <p className="mono text-[0.65rem] uppercase tracking-[0.14em] text-subtle">
          Built with Next.js · TypeScript · Motion
        </p>
      </div>
    </footer>
  );
}
