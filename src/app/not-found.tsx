import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative z-10 flex min-h-[70vh] flex-col items-start justify-center px-[clamp(1.25rem,4vw,3.5rem)] py-32">
      <div className="container-max w-full">
        <p className="mono text-[0.7rem] uppercase tracking-[0.2em] text-accent">
          404
        </p>
        <h1 className="display mt-4 text-4xl text-foreground md:text-6xl">
          This route does not exist
        </h1>
        <p className="mt-4 max-w-md text-muted">
          The page may have moved, or the URL is off by a character. Head home
          and continue from there.
        </p>
        <Link
          href="/"
          className="focus-ring mt-8 inline-flex rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-accent"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
