import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Compass, BarChart3, TrendingUp, HeartHandshake, Users } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education — The Mortgage Rockstar™" },
      {
        name: "description",
        content:
          "Mortgage 101, buyer guidance, market insight, and wealth-building strategies — built to make you a smarter borrower.",
      },
      { property: "og:title", content: "Education — Mortgage Rockstar" },
      {
        property: "og:description",
        content: "Education first. Strategy always. Clarity creates confidence.",
      },
      { property: "og:url", content: "/education" },
    ],
    links: [{ rel: "canonical", href: "/education" }],
  }),
  component: EducationPage,
});

const pillars = [
  { icon: BookOpen, tag: "Mortgage 101", title: "Loan types explained without the jargon", read: "6 min read" },
  { icon: Compass, tag: "Buyer Guidance", title: "What to do before you fall in love with a house", read: "5 min read" },
  { icon: BarChart3, tag: "Market Insight", title: "Reading the housing market (and what it actually means)", read: "8 min read" },
  { icon: TrendingUp, tag: "Wealth Building", title: "Why homeownership is still the cleanest path to wealth", read: "9 min read" },
  { icon: BookOpen, tag: "Mortgage 101", title: "Pre-approval vs. pre-qualification: get the right one", read: "4 min read" },
  { icon: Compass, tag: "Buyer Guidance", title: "The 5 most expensive mistakes first-time buyers make", read: "7 min read" },
  { icon: TrendingUp, tag: "Wealth Building", title: "The long-term math: renting vs. owning", read: "10 min read" },
  { icon: BarChart3, tag: "Market Insight", title: "Local opportunity windows: MO, IL, FL", read: "6 min read" },
  { icon: BookOpen, tag: "Mortgage 101", title: "Credit insights every buyer should know", read: "5 min read" },
  { icon: HeartHandshake, tag: "Life-Transition Clarity", title: "Buyout refinances, explained simply", read: "6 min read" },
  { icon: HeartHandshake, tag: "Life-Transition Clarity", title: "What to expect: post-decree home purchases", read: "7 min read" },
  { icon: Users, tag: "Family-Assisted Homeownership", title: "How gift funds actually work", read: "5 min read" },
  { icon: Users, tag: "Family-Assisted Homeownership", title: "What families should know before the money moves", read: "6 min read" },
];

const categories = ["All", "Mortgage 101", "Buyer Guidance", "Market Insight", "Wealth Building", "Life-Transition Clarity", "Family-Assisted Homeownership"];

function EducationPage() {
  return (
    <div>
      <PageHero
        eyebrow="Education"
        title={
          <>
            Clarity creates
            <br />
            <span className="text-[var(--brand-orange)]">confidence.</span>
          </>
        }
        intro="Knowledge puts you in control. Browse short, sharp lessons designed to make the mortgage process make sense — before you need it to."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((c, i) => (
            <button
              key={c}
              type="button"
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                i === 0
                  ? "border-[var(--brand-orange)] bg-[var(--brand-orange)] text-background"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map(({ icon: Icon, ...p }, i) => (
            <article
              key={i}
              className="group flex flex-col rounded-sm border border-border bg-[var(--surface)] p-7 transition-all hover:-translate-y-1 hover:border-[var(--brand-orange)]"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-orange)]">
                  <Icon className="h-3.5 w-3.5" />
                  {p.tag}
                </span>
                <span className="text-[11px] uppercase tracking-wider text-muted-foreground">{p.read}</span>
              </div>
              <h3 className="mt-8 font-display text-xl uppercase leading-tight text-foreground">
                {p.title}
              </h3>
              <span className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground transition-colors group-hover:text-[var(--brand-orange)]">
                Read lesson <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-[var(--surface)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:items-center lg:px-10 lg:py-28">
          <div className="lg:col-span-7">
            <p className="accent-rule text-xs uppercase tracking-[0.22em] text-[var(--brand-orange)]">
              Weekly drop
            </p>
            <h2 className="mt-5 font-display text-4xl uppercase leading-[1.05] text-foreground sm:text-5xl">
              Strategy in your inbox.
              <br />
              No spam. No fluff.
            </h2>
            <p className="mt-6 max-w-xl text-muted-foreground">
              One short, useful lesson per week — written to actually help you
              make a better decision the next time it matters.
            </p>
          </div>
          <form
            className="flex flex-col gap-3 lg:col-span-5"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks — you're on the list.");
            }}
          >
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@example.com"
              className="h-14 rounded-sm border border-border bg-background px-4 text-foreground placeholder:text-muted-foreground focus:border-[var(--brand-orange)] focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-sm bg-[var(--brand-orange)] text-sm font-bold uppercase tracking-wider text-background"
            >
              Subscribe <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-10 lg:py-28">
        <h2 className="font-display text-3xl uppercase leading-tight text-foreground sm:text-4xl">
          Have a specific question? Skip the article.
        </h2>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--brand-orange)]"
        >
          Ask Matt directly <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  );
}