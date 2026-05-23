import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-2 ${className}`} aria-label="Mortgage Rockstar home">
      <span className="relative flex h-9 w-9 items-center justify-center rounded-sm bg-[var(--brand-orange)] text-background transition-transform group-hover:rotate-12">
        {/* Star mark */}
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
          <path d="M12 2l2.9 6.6L22 9.7l-5.2 4.7L18.2 22 12 18.5 5.8 22l1.4-7.6L2 9.7l7.1-1.1L12 2z" />
        </svg>
      </span>
      <span className="leading-none">
        <span className="block font-display text-[15px] uppercase tracking-[0.18em] text-foreground">
          Mortgage
        </span>
        <span className="block font-display text-[15px] uppercase tracking-[0.18em] text-[var(--brand-orange)]">
          Rockstar<sup className="text-[8px] tracking-normal">™</sup>
        </span>
      </span>
    </Link>
  );
}