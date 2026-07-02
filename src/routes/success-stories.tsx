import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import homeLuxury from "@/assets/home-luxury.jpg";
import stockCouple from "@/assets/stock-couple-deal.jpg";
import stockAgent from "@/assets/stock-agent-home.jpg";
import stockHandshake from "@/assets/stock-handshake.jpg";
import stockRelocation from "@/assets/stock-relocation.jpg";

export const Route = createFileRoute("/success-stories")({
  head: () => ({
    meta: [
      { title: "Success Stories — The Mortgage Rockstar™" },
      {
        name: "description",
        content:
          "Real client wins. Complex files closed. See how Matt structures deals other lenders walk away from.",
      },
      { property: "og:title", content: "Success Stories — Mortgage Rockstar" },
      {
        property: "og:description",
        content: "When the deal seemed impossible, this is who they called.",
      },
      { property: "og:url", content: "/success-stories" },
    ],
    links: [{ rel: "canonical", href: "/success-stories" }],
  }),
  component: SuccessPage,
});

const cases = [
  {
    headline: "Self-employed jumbo — closed in 19 days.",
    who: "Daniel & Priya R. · St. Louis, MO",
    detail:
      "Three lenders said no. We structured a 24-month bank statement jumbo with a 20% down strategy that protected liquidity for their business.",
    image: stockCouple,
    stats: [
      { k: "$1.4M", v: "Loan amount" },
      { k: "19 days", v: "Close-to-clear" },
      { k: "3", v: "Prior declines" },
    ],
  },
  {
    headline: "VA buyer, complex entitlement.",
    who: "Sgt. Marcus T. · Tampa, FL",
    detail:
      "Active-duty borrower with restored entitlement and a prior short sale. We rebuilt the file and closed with 0% down at competitive terms.",
    image: stockAgent,
    stats: [
      { k: "$685K", v: "Purchase price" },
      { k: "0%", v: "Down" },
      { k: "100%", v: "Entitlement restored" },
    ],
  },
  {
    headline: "Investor portfolio scale, 4 doors in 90 days.",
    who: "Elena V. · Chicago, IL",
    detail:
      "DSCR strategy structured around cash-flow ratios. Closed four properties in a single quarter without touching personal DTI.",
    image: stockHandshake,
    stats: [
      { k: "4", v: "Properties" },
      { k: "1.38", v: "Avg DSCR" },
      { k: "90 days", v: "Total" },
    ],
  },
  {
    headline: "Relocation hire — closed before the moving truck.",
    who: "Dr. Alex M. · Relocating to St. Louis, MO",
    detail:
      "Wash U medical hire moving from out of state on a tight employer timeline. We coordinated remote underwriting, walked them through the local market, and closed in time for their start date.",
    image: stockRelocation,
    stats: [
      { k: "$780K", v: "Purchase price" },
      { k: "22 days", v: "Contract-to-close" },
      { k: "100%", v: "Remote process" },
    ],
  },
];

const quickQuotes = [
  {
    q: "He simplified five months of stress into one phone call. I knew what I was doing and why.",
    who: "First-time buyer · Missouri",
  },
  {
    q: "I've worked with three lenders. Matt's the only one who treated my file like it mattered.",
    who: "Realtor partner · Florida",
  },
  {
    q: "We were ready to walk away. Matt found the structure that made it work.",
    who: "Move-up buyer · Illinois",
  },
];

function SuccessPage() {
  return (
    <div>
      <PageHero
        eyebrow="Success Stories"
        title={
          <>
            When the deal
            <br />
            seemed impossible,
            <br />
            this is who they <span className="text-[var(--brand-orange)]">called</span>.
          </>
        }
        intro="Reputations are built on the hard files. Here are a few that made it across the table."
      />

      <section className="mx-auto max-w-7xl space-y-6 px-4 py-20 sm:px-6 lg:space-y-10 lg:px-10 lg:py-28">
        {cases.map((c, i) => (
          <article
            key={c.headline}
            className="grid gap-8 overflow-hidden rounded-sm border border-border bg-[var(--surface)] lg:grid-cols-12"
          >
            <div className="lg:col-span-4">
              <img
                src={c.image}
                alt={c.headline}
                loading="lazy"
                className="h-56 w-full object-cover lg:h-full"
              />
            </div>
            <div className="px-8 pt-2 lg:col-span-5 lg:py-12">
              <span className="font-display text-3xl text-[var(--brand-orange)]">0{i + 1}</span>
              <h2 className="mt-3 font-display text-3xl uppercase leading-tight text-foreground sm:text-4xl">
                {c.headline}
              </h2>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.who}</p>
              <p className="mt-6 leading-relaxed text-muted-foreground">{c.detail}</p>
            </div>
            <dl className="grid grid-cols-3 gap-4 border-t border-border px-8 py-6 lg:col-span-3 lg:grid-cols-1 lg:border-l lg:border-t-0 lg:py-12 lg:pl-8">
              {c.stats.map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-2xl text-foreground">{s.k}</dt>
                  <dd className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </section>

      <section className="relative border-y border-border bg-[var(--surface)]">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(10,11,14,0.95), rgba(10,11,14,0.95)), url(${homeLuxury})`,
            backgroundSize: "cover",
          }}
        />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
          <p className="accent-rule text-xs uppercase tracking-[0.22em] text-[var(--brand-orange)]">
            In their words
          </p>
          <h2 className="mt-5 font-display text-4xl uppercase leading-[1.05] text-foreground sm:text-5xl">
            Relationships, one file at a time.
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {quickQuotes.map((q) => (
              <figure
                key={q.who}
                className="flex flex-col gap-6 rounded-sm border border-border bg-background p-7"
              >
                <Quote className="h-6 w-6 text-[var(--brand-orange)]" />
                <blockquote className="text-lg leading-snug text-foreground">"{q.q}"</blockquote>
                <figcaption className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {q.who}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-24 text-center sm:px-6 lg:px-10 lg:py-28">
        <h2 className="font-display text-4xl uppercase leading-tight text-foreground sm:text-5xl">
          Your story could be next.
        </h2>
        <Link
          to="/contact"
          className="mt-10 inline-flex items-center gap-2 rounded-sm bg-[var(--brand-orange)] px-7 py-4 text-sm font-bold uppercase tracking-wider text-background"
        >
          Start the Conversation <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  );
}