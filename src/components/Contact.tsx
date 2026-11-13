"use client";

import { FormEvent, useState } from "react";
import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = (await res.json()) as { success?: boolean; message?: string };
      if (!res.ok || !json.success) {
        throw new Error(json.message || "Something went wrong");
      }
      setStatus("success");
      setMessage("Message sent. I will get back to you shortly.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Could not send right now. Email me directly instead.");
    }
  }

  return (
    <section id="contact" className="relative z-10 py-24 md:py-32">
      <div className="section-pad container-max">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="mono text-[0.7rem] uppercase tracking-[0.2em] text-accent">
              Contact
            </p>
            <h2 className="display mt-3 text-3xl text-foreground md:text-5xl">
              Get in touch
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
              Hiring, a project, or a quick question—email works best, or use
              the form.
            </p>

            <ul className="mt-10 space-y-4 text-sm">
              <li>
                <span className="mono block text-[0.65rem] uppercase tracking-[0.14em] text-subtle">
                  Email
                </span>
                <a
                  href={`mailto:${site.email}`}
                  className="focus-ring mt-1 inline-block text-foreground hover:text-accent"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <span className="mono block text-[0.65rem] uppercase tracking-[0.14em] text-subtle">
                  Phone
                </span>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="focus-ring mt-1 inline-block text-foreground hover:text-accent"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <span className="mono block text-[0.65rem] uppercase tracking-[0.14em] text-subtle">
                  Social
                </span>
                <div className="mt-2 flex flex-wrap gap-4">
                  <a
                    href={site.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring text-foreground hover:text-accent"
                  >
                    GitHub
                  </a>
                  <a
                    href={site.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring text-foreground hover:text-accent"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={site.social.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring text-foreground hover:text-accent"
                  >
                    Telegram
                  </a>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.08}>
            <form
              onSubmit={onSubmit}
              className="border border-border bg-elevated p-6 md:p-8"
              noValidate
            >
              <input type="hidden" name="access_key" value={site.web3formsKey} />
              <input
                type="hidden"
                name="subject"
                value={`Portfolio inquiry from ${site.name}`}
              />
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} aria-hidden />

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block sm:col-span-1">
                  <span className="mono text-[0.65rem] uppercase tracking-[0.14em] text-subtle">
                    Name
                  </span>
                  <input
                    required
                    name="name"
                    autoComplete="name"
                    className="focus-ring mt-2 w-full border-b border-border bg-transparent py-3 text-sm text-foreground outline-none transition-colors placeholder:text-subtle focus:border-accent"
                    placeholder="Your name"
                  />
                </label>
                <label className="block sm:col-span-1">
                  <span className="mono text-[0.65rem] uppercase tracking-[0.14em] text-subtle">
                    Email
                  </span>
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    className="focus-ring mt-2 w-full border-b border-border bg-transparent py-3 text-sm text-foreground outline-none transition-colors placeholder:text-subtle focus:border-accent"
                    placeholder="you@company.com"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mono text-[0.65rem] uppercase tracking-[0.14em] text-subtle">
                    Phone
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    className="focus-ring mt-2 w-full border-b border-border bg-transparent py-3 text-sm text-foreground outline-none transition-colors placeholder:text-subtle focus:border-accent"
                    placeholder="Optional"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mono text-[0.65rem] uppercase tracking-[0.14em] text-subtle">
                    Message
                  </span>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    className="focus-ring mt-2 w-full resize-y border-b border-border bg-transparent py-3 text-sm text-foreground outline-none transition-colors placeholder:text-subtle focus:border-accent"
                    placeholder="What should we talk about?"
                  />
                </label>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="focus-ring inline-flex items-center justify-center rounded-full bg-foreground px-7 py-3 text-sm font-medium text-background transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "loading" ? "Sending…" : "Send message"}
                </button>
                <p
                  role="status"
                  aria-live="polite"
                  className={`text-sm ${
                    status === "error"
                      ? "text-red-600"
                      : status === "success"
                        ? "text-accent"
                        : "text-muted"
                  }`}
                >
                  {message}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
