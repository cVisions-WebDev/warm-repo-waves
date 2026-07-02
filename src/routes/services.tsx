import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Home,
  Gem,
  Shield,
  TrendingUp,
  Sparkles,
  Briefcase,
  MapPin,
  HeartHandshake,
  Users,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Loan Programs — The Mortgage Rockstar™" },
      {
        name: "description",
        content:
          "Conventional, Jumbo & Luxury, VA, Investor/DSCR, First-Time Buyer, and Complex Income solutions — structured to win long term.",
      },
      { property: "og:title", content: "Loan Programs — Mortgage Rockstar" },
      {
        property: "og:description",
        content: "Mortgage strategies built around your goals — not a call-center script.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const programs = [
  {
    icon: Home,
    name: "Conventional",
    tag: "The fundamentals, done right.",
    body: "Smart structure for the long game. Fixed and adjustable terms designed around your real timeline — not just the flashiest offer.",
    points: ["Fixed & ARM options", "Down payments from 3%", "Strategic refi positioning"],
  },
  {
    icon: Gem,
    name: "Jumbo & Luxury",
    tag: "$1M+ financing without the institutional distance.",
    body: "Sophisticated structures for high-net-worth borrowers, second-home buyers, and luxury properties. Boutique attention, institutional power.",
    points: ["Up to $5M+ loan amounts", "Second-home & luxury", "Bank statement & asset-based"],
  },
  {
    icon: Shield,
    name: "VA Loans",
    tag: "Earned. Honored. Maximized.",
    body: "Expert guidance for veterans and active-duty buyers who deserve a lender that actually knows the entitlement rules and the eligibility nuances.",
    points: ["0% down options", "No PMI", "VA jumbo expertise"],
  },
  {
    icon: TrendingUp,
    name: "Investor / DSCR",
    tag: "Leverage and scale for serious investors.",
    body: "Qualify based on the property's cash flow, not your tax returns. Built for portfolio builders, BRRRR strategies, and 1031 timing.",
    points: ["DSCR & no-doc options", "Portfolio scaling", "Short-term rental friendly"],
  },
  {
    icon: Sparkles,
    name: "First-Time Buyer",
    tag: "Step-by-step clarity for your first move.",
    body: "The average first-time buyer is now 40. We sit down and explain how homeownership fits into the long-term, wealth-building picture — then we structure it right.",
    points: ["Down-payment strategy", "Credit positioning", "Long-term equity planning"],
  },
  {
    icon: Briefcase,
    name: "Complex Income",
    tag: "Self-employed, 1099, or non-traditional? Good.",
    body: "Where other lenders see a wall, we see the file. Bank statement loans, asset depletion, P&L-only, and creative structures done compliantly.",
    points: ["12 & 24 mo bank statement", "Asset depletion", "P&L only options"],
  },
  {
    icon: MapPin,
    name: "Relocation Purchase",
    tag: "For professionals moving to a new market.",
    body: "New job, employer-driven move, or a fresh start in an unfamiliar city — relocations come with compressed timelines and unfamiliar terrain. We coordinate with your employer's schedule, keep underwriting moving on tight windows, and orient you to a market you're still learning.",
    points: [
      "Employer-timeline coordination",
      "Remote/rush underwriting",
      "Local market orientation",
    ],
  },
  {
    icon: HeartHandshake,
    name: "Divorce & Life-Transition",
    tag: "Calm guidance through a complex moment.",
    body: "Buyout refinances, post-decree purchases, and title restructuring — worked shoulder-to-shoulder with your attorney and financial advisor. Steady, private, and strictly focused on the mortgage side of the transition. Not legal advice.",
    points: [
      "Buyout refinance structuring",
      "Post-decree purchases",
      "Coordination with your attorney/CPA",
    ],
  },
  {
    icon: Users,
    name: "Family-Assisted Purchase",
    tag: "Gift funds, done right.",
    body: "When family helps with the down payment, the paperwork matters as much as the intent. We structure multi-generational contributions correctly, document gift funds to lender standards, and set expectations upfront so nothing gets flagged at closing.",
    points: [
      "Gift fund documentation",
      "Multi-generational structuring",
      "Lender requirements explained upfront",
    ],
  },
];

function ServicesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Loan Programs"
        title={
          <>
            Built for buyers
            <br />
            who want to get
            <br />
            it <span className="text-[var(--brand-orange)]">right</span>.
          </>
        }
        intro="The cheapest option and the best option are rarely the same thing — especially when the decision is this significant. Here's how we structure the win."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="grid gap-6 md:grid-cols-2">
          {programs.map(({ icon: Icon, ...p }, i) => (
            <article
              key={p.name}
              className="group flex flex-col rounded-sm border border-border bg-[var(--surface)] p-8 transition-all hover:-translate-y-1 hover:border-[var(--brand-orange)]"
            >
              <div className="flex items-start justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-sm border border-border bg-background text-[var(--brand-orange)]">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-display text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  0{i + 1}
                </span>
              </div>
              <h2 className="mt-8 font-display text-3xl uppercase leading-tight text-foreground">
                {p.name}
              </h2>
              <p className="mt-2 text-sm uppercase tracking-wider text-[var(--brand-orange)]">{p.tag}</p>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              <ul className="mt-6 space-y-2 border-t border-border pt-6 text-sm text-foreground">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-3">
                    <span className="h-1 w-4 bg-[var(--brand-orange)]" />
                    {pt}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground hover:text-[var(--brand-orange)]"
              >
                Discuss this program <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-[var(--surface)]">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-10 lg:py-28">
          <h2 className="font-display text-4xl uppercase leading-[1.05] text-foreground sm:text-5xl">
            Don't see your situation?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            That usually means it's exactly the kind of file we close. Let's
            talk through it — no application, no pressure, just clarity.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-sm bg-[var(--brand-orange)] px-7 py-4 text-sm font-bold uppercase tracking-wider text-background"
          >
            Get Your Strategy Call <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}