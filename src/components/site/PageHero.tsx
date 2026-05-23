import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(60% 50% at 20% 20%, color-mix(in oklab, var(--brand-blue) 28%, transparent), transparent 70%), radial-gradient(40% 40% at 90% 10%, color-mix(in oklab, var(--brand-orange) 22%, transparent), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-10 lg:pb-28 lg:pt-24">
        <p className="accent-rule text-xs uppercase tracking-[0.22em] text-[var(--brand-orange)]">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl uppercase leading-[0.95] text-foreground sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-7 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
            {intro}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}