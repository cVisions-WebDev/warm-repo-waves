import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Youtube, Facebook } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Mortgage Rockstar™ is Matt Arana's education-first mortgage
              guidance platform, powered by Cornerstone First Mortgage. Human
              strategy. Clear numbers. Rockstar follow-through.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Powered by Cornerstone First
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                { Icon: Youtube, href: "#", label: "YouTube" },
                { Icon: Facebook, href: "#", label: "Facebook" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-[var(--brand-orange)] hover:text-[var(--brand-orange)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-7 lg:grid-cols-3">
            <div>
              <h4 className="font-display text-xs uppercase tracking-[0.2em] text-foreground">Explore</h4>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-foreground">About The Team</Link></li>
                <li><Link to="/services" className="hover:text-foreground">Loan Programs</Link></li>
                <li><Link to="/education" className="hover:text-foreground">Education</Link></li>
                <li><Link to="/success-stories" className="hover:text-foreground">Success Stories</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-xs uppercase tracking-[0.2em] text-foreground">Licensed In</h4>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                <li>Missouri</li>
                <li>Illinois</li>
                <li>Florida</li>
                <li>+ Expanding</li>
              </ul>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <h4 className="font-display text-xs uppercase tracking-[0.2em] text-foreground">Get Started</h4>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Ready to talk strategy? The first conversation is free, focused,
                and built around your goals.
              </p>
              <Link
                to="/contact"
                className="mt-5 inline-flex items-center gap-2 rounded-sm bg-[var(--brand-orange)] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-background"
              >
                Book a Strategy Call
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} The Mortgage Rockstar™. All rights reserved.</p>
          <p className="max-w-2xl">
            Equal Housing Lender. NMLS information available on request. This
            site is a personal-brand presence powered by Cornerstone First.
          </p>
        </div>
      </div>
    </footer>
  );
}