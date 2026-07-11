import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Calculator,
  Calendar,
  CheckCircle2,
  Compass,
  FileText,
  GraduationCap,
  HeartHandshake,
  Home,
  Key,
  MapPin,
  PiggyBank,
  Search,
  Shield,
  Sparkles,
  TrendingUp,
  Users,
  Video,
  Wallet,
} from "lucide-react";
import mattLifestyle from "@/assets/matt-lifestyle.jpg";
import stockCouple from "@/assets/stock-couple-deal.jpg";
import stockAgent from "@/assets/stock-agent-home.jpg";
import stockHandshake from "@/assets/stock-handshake.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mortgage Rockstar™ — Know What You Can Afford Before You Shop." },
      {
        name: "description",
        content:
          "Run the numbers, choose your path, and get a personalized mortgage strategy. Premium lending guidance across MO, IL, and FL.",
      },
      { property: "og:title", content: "Mortgage Rockstar™ — Strategy First Lending" },
      {
        property: "og:description",
        content:
          "Affordability calculator, personalized paths, and a complete mortgage roadmap. Built for buyers, investors, and the self-employed.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const currency = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

function HomePage() {
  return (
    <div>
      <StrategyHero />
      <ChoosePath />
      <WhyMortgageRockstar />
      <Roadmap />
      <Metrics />
      <Scenarios />
      <LoanPrograms />
      <EducationCenter />
      <BeforeAfter />
      <MeetMatt />
      <ClosingCTA />
    </div>
  );
}

/* ---------------- Section 1: Strategy Hero with Calculator ---------------- */
function StrategyHero() {
  const [income, setIncome] = useState(120000);
  const [down, setDown] = useState(60000);
  const [debts, setDebts] = useState(600);
  const [term, setTerm] = useState(30);

  const { maxHome, monthly, loanAmount } = useMemo(() => {
    const monthlyIncome = income / 12;
    // ~43% DTI target including new housing payment & existing debts
    const maxHousing = Math.max(0, monthlyIncome * 0.43 - debts);
    // Internal financing assumption used only to estimate loan sizing.
    // Indicative only — never shown to the user.
    const r = 0.065 / 12;
    const n = term * 12;
    // assume ~25% of payment goes to taxes/insurance/PMI
    const pAndI = maxHousing * 0.75;
    const loan = r > 0 ? (pAndI * (1 - Math.pow(1 + r, -n))) / r : pAndI * n;
    const home = Math.max(0, loan + down);
    const monthlyPayment = pAndI > 0 ? Math.round(maxHousing) : 0;
    return {
      maxHome: Math.round(home / 1000) * 1000,
      monthly: monthlyPayment,
      loanAmount: Math.round(loan / 1000) * 1000,
    };
  }, [income, down, debts, term]);

  return (
    <section className="relative isolate overflow-hidden pt-28 lg:pt-32">
      {/* ambient backdrop */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_70%_0%,oklch(0.62_0.22_255/0.22),transparent_60%),radial-gradient(60%_50%_at_10%_20%,oklch(0.72_0.21_45/0.18),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl gap-14 px-4 pb-20 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:pb-28">
        <div className="lg:col-span-6 lg:pt-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-muted-foreground backdrop-blur">
            <Sparkles className="h-3 w-3 text-[var(--brand-orange)]" />
            Mortgage clarity before commitment
          </span>
          <h1 className="mt-6 font-display text-5xl uppercase leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-[76px]">
            Your Mortgage.
            <br />
            Your Future.
            <br />
            Your <span className="text-[var(--brand-orange)]">Strategy</span>.
          </h1>
          <p className="mt-7 max-w-xl text-balance text-lg leading-relaxed text-muted-foreground">
            Before you fall in love with the house, understand the payment, the
            cash to close, and the mortgage strategy behind it. Human strategy.
            Clear numbers. Rockstar follow-through.
          </p>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
            {[
              { k: "60s", v: "Affordability check" },
              { k: "0$", v: "No credit pull" },
              { k: "24h", v: "Personal strategy reply" },
            ].map((s) => (
              <div key={s.v} className="rounded-sm border border-border bg-background/40 p-4 backdrop-blur">
                <p className="font-display text-2xl text-foreground">{s.k}</p>
                <p className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Calculator card */}
        <div className="lg:col-span-6">
          <div className="relative">
            <div className="absolute -inset-2 -z-10 rounded-md bg-gradient-to-br from-[var(--brand-blue)]/30 via-transparent to-[var(--brand-orange)]/30 blur-2xl" />
            <div className="overflow-hidden rounded-md border border-border bg-[var(--surface)]/95 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] backdrop-blur">
              <div className="flex items-center justify-between border-b border-border px-6 py-4">
                <div className="flex items-center gap-2">
                  <Calculator className="h-4 w-4 text-[var(--brand-orange)]" />
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    Affordability Engine
                  </p>
                </div>
                <span className="rounded-full border border-border px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                  Live
                </span>
              </div>

              <div className="grid gap-5 p-6 sm:p-7">
                <SliderField
                  label="Household income"
                  value={income}
                  min={40000}
                  max={750000}
                  step={5000}
                  format={currency}
                  onChange={setIncome}
                />
                <SliderField
                  label="Down payment"
                  value={down}
                  min={0}
                  max={500000}
                  step={5000}
                  format={currency}
                  onChange={setDown}
                />
                <SliderField
                  label="Monthly debts"
                  value={debts}
                  min={0}
                  max={5000}
                  step={50}
                  format={(n) => `${currency(n)} / mo`}
                  onChange={setDebts}
                />
                <div>
                    <label className="text-[11px] uppercase tracking-wider text-muted-foreground">
                      Term
                    </label>
                    <div className="mt-2 grid grid-cols-3 gap-1 rounded-sm border border-border p-1">
                      {[15, 20, 30].map((t) => (
                        <button
                          key={t}
                          onClick={() => setTerm(t)}
                          className={`rounded-sm py-2 text-xs font-semibold transition-colors ${
                            term === t
                              ? "bg-[var(--brand-orange)] text-background"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {t}y
                        </button>
                      ))}
                    </div>
                  </div>
              </div>

              <div className="grid grid-cols-3 gap-px border-t border-border bg-border">
                <Stat label="Max home price" value={currency(maxHome)} accent />
                <Stat label="Est. monthly" value={currency(monthly)} />
                <Stat label="Loan amount" value={currency(loanAmount)} />
              </div>

              <div className="flex flex-col gap-3 border-t border-border p-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs leading-relaxed text-muted-foreground">
                  Indicative only. Get a real pre-approval letter in under 24h.
                </p>
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-sm bg-[var(--brand-orange)] px-5 py-3 text-xs font-bold uppercase tracking-wider text-background transition-transform hover:-translate-y-0.5"
                >
                  Lock in my number
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SliderField({
  label,
  value,
  min,
  max,
  step,
  format,
  onChange,
  compact = false,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  format: (n: number) => string;
  onChange: (n: number) => void;
  compact?: boolean;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</label>
        <span className={`font-display ${compact ? "text-lg" : "text-xl"} text-foreground`}>{format(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 h-1 w-full cursor-pointer appearance-none rounded-full bg-border accent-[var(--brand-orange)]"
      />
    </div>
  );
}

function Stat({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className={`bg-[var(--surface)] p-5 ${accent ? "ring-1 ring-[var(--brand-orange)]/40" : ""}`}>
      <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
      <p className={`mt-2 font-display text-xl ${accent ? "text-[var(--brand-orange)]" : "text-foreground"} sm:text-2xl`}>
        {value}
      </p>
    </div>
  );
}

/* ---------------- Section 2: Choose Your Path ---------------- */
const paths = [
  {
    icon: Key,
    tag: "Path 01",
    title: "First-Time Buyer",
    body: "From down-payment strategy to closing day — a step-by-step plan so nothing surprises you.",
    bullets: ["Down payment as low as 3%", "Credit guidance included", "Side-by-side program comparison"],
  },
  {
    icon: TrendingUp,
    tag: "Path 02",
    title: "Refinance",
    body: "Lower the payment, shorten the term, or pull equity for the next move with a clear breakeven plan.",
    bullets: ["Payment & term analysis", "Cash-out strategy", "True breakeven, not marketing math"],
  },
  {
    icon: PiggyBank,
    tag: "Path 03",
    title: "Investor",
    body: "DSCR, portfolio loans, and conventional financing structured to actually scale.",
    bullets: ["No tax-return DSCR", "Portfolio leverage modeling", "1–10 unit specialists"],
  },
  {
    icon: Wallet,
    tag: "Path 04",
    title: "Self-Employed",
    body: "1099, K-1, bank-statement, P&L — we structure the income most lenders walk away from.",
    bullets: ["Bank-statement loans", "K-1 add-backs done right", "Complex income specialists"],
  },
  {
    icon: MapPin,
    tag: "Path 05",
    title: "Relocating",
    body: "Moving to MO, IL, or FL for a new job? You need a lender who understands employer timelines and unfamiliar local markets.",
    bullets: ["Employer-timeline coordination", "Remote-friendly, fast process", "Local market orientation included"],
  },
  {
    icon: HeartHandshake,
    tag: "Path 06",
    title: "Family-Assisted",
    body: "Using gift funds from family to help fund your down payment? We structure it cleanly so donors and buyers both know what to expect.",
    bullets: ["Gift fund documentation done right", "Guidance for donors, not just buyers", "No surprises at closing"],
  },
];

function ChoosePath() {
  const [active, setActive] = useState(0);
  const A = paths[active];

  return (
    <section className="border-y border-border bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-10 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="accent-rule text-xs uppercase tracking-[0.22em] text-[var(--brand-orange)]">
              Choose your path
            </p>
            <h2 className="mt-5 font-display text-4xl uppercase leading-[1.05] text-foreground sm:text-5xl">
              You are not caller number 39.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Real conversations, real judgment, and real follow-through. Pick the
            path closest to where you are — every track unlocks a tailored
            playbook built around your situation.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {paths.map((p, i) => {
            const Icon = p.icon;
            return (
              <button
                key={p.title}
                onClick={() => setActive(i)}
                className="group relative flex flex-col items-start gap-6 overflow-hidden rounded-md border border-[var(--brand-orange)] bg-background p-7 text-left shadow-[0_30px_60px_-25px_var(--brand-orange)] transition-all duration-300 -translate-y-1 hover:-translate-y-1"
              >
                <div className="flex w-full items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{p.tag}</span>
                  <ArrowUpRight className="h-4 w-4 text-[var(--brand-orange)] transition-colors" />
                </div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-sm border border-[var(--brand-orange)] text-[var(--brand-orange)]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-2xl uppercase leading-tight text-foreground">{p.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-10 rounded-md border border-border bg-background p-8 lg:grid-cols-12 lg:p-12">
          <div className="lg:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--brand-orange)]">
              {A.tag} · Customized journey
            </p>
            <h3 className="mt-3 font-display text-3xl uppercase leading-tight text-foreground sm:text-4xl">
              {A.title} playbook
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">{A.body}</p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {A.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-[var(--brand-orange)]" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-between gap-6 lg:col-span-5">
            <Link
              to="/services"
              className="group inline-flex items-center justify-between gap-2 rounded-sm border border-border bg-[var(--surface)] px-5 py-4 text-sm font-semibold text-foreground hover:border-[var(--brand-orange)]"
            >
              Explore {A.title} programs
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-between gap-2 rounded-sm bg-[var(--brand-orange)] px-5 py-4 text-sm font-bold uppercase tracking-wider text-background hover:-translate-y-0.5 transition-transform"
            >
              Start your {A.title.split(" ")[0]} plan
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section 3: Why Mortgage Rockstar ---------------- */
const whyCards = [
  {
    icon: Compass,
    title: "Personalized Strategy",
    body: "Every recommendation begins with understanding your goals, timeline, and financial picture.",
  },
  {
    icon: GraduationCap,
    title: "Education First",
    body: "Complex mortgage topics become simple through clear explanations that empower confident decision-making.",
  },
  {
    icon: Shield,
    title: "Trusted Guidance",
    body: "Every question receives honest answers, thoughtful recommendations, and personalized support.",
  },
  {
    icon: HeartHandshake,
    title: "Relationship Driven",
    body: "Mortgage Rockstar believes the strongest client relationships continue well beyond closing day.",
  },
];

function WhyMortgageRockstar() {
  return (
    <section className="border-y border-border bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-10 lg:py-28">
        <p className="accent-rule text-xs uppercase tracking-[0.22em] text-[var(--brand-orange)]">
          Why Mortgage Rockstar
        </p>
        <h2 className="mt-5 font-display text-4xl uppercase leading-[1.05] text-foreground sm:text-5xl">
          More Than Mortgage Financing
        </h2>
        <p className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground">
          Working with Mortgage Rockstar means gaining a trusted advisor who helps you make confident financial
          decisions before, during, and long after closing.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyCards.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="rounded-md border border-border bg-background p-7"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-sm border border-[var(--brand-orange)] text-[var(--brand-orange)]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-xl uppercase leading-tight text-foreground">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {c.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section 4: Roadmap ---------------- */

const roadmap = [
  { icon: Compass, label: "Discovery", body: "Goals, timeline, comfort zone — we listen first." },
  { icon: Sparkles, label: "Strategy", body: "Custom plan, real numbers, side-by-side options." },
  { icon: Shield, label: "Pre-Approval", body: "Underwriter-reviewed letter that sellers respect." },
  { icon: Search, label: "Home Search", body: "Shop with confidence — your agent has a partner on the financing side." },
  { icon: Key, label: "Closing", body: "Smooth, predictable, and on the day we promised." },
];

function Roadmap() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
      <div className="max-w-2xl">
        <p className="accent-rule text-xs uppercase tracking-[0.22em] text-[var(--brand-orange)]">
          The mortgage roadmap
        </p>
        <h2 className="mt-5 font-display text-4xl uppercase leading-[1.05] text-foreground sm:text-5xl">
          Five steps. Zero surprises.
        </h2>
        <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
          Most buyers learn the process by stumbling through it. We map it for you up front so every milestone has a date and a deliverable.
        </p>
      </div>

      <div className="relative mt-16">
        <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />
        <ol className="grid gap-6 lg:grid-cols-5">
          {roadmap.map((s, i) => {
            const Icon = s.icon;
            return (
              <li key={s.label} className="relative">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-foreground">
                  <Icon className="h-5 w-5 text-[var(--brand-orange)]" />
                </div>
                <p className="mt-5 font-display text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  Step 0{i + 1}
                </p>
                <p className="mt-2 font-display text-xl uppercase text-foreground">{s.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- Section 4: Metrics ---------------- */
const metrics = [
  { k: "2,400+", v: "Families helped" },
  { k: "$1.1B", v: "Loans closed" },
  { k: "25", v: "Years experience" },
  { k: "21 days", v: "Avg. closing time" },
];

function Metrics() {
  return (
    <section className="border-y border-border bg-[var(--surface)]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden border-x border-border bg-border lg:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.v} className="group relative bg-[var(--surface)] p-8 transition-colors hover:bg-background sm:p-10">
            <p className="font-display text-5xl uppercase text-foreground sm:text-6xl">{m.k}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">{m.v}</p>
            <div className="absolute inset-x-8 bottom-6 h-px scale-x-0 bg-[var(--brand-orange)] transition-transform duration-500 group-hover:scale-x-100" />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Section 5: Interactive Scenarios ---------------- */
const scenarios = [
  {
    id: "se",
    label: "I am self-employed",
    headline: "We speak 1099, K-1, and bank-statement fluently.",
    body: "Most lenders flatten your income onto a 1040 line and call it a day. We structure 24 months of bank statements, add-backs, and depreciation correctly so you qualify for the loan your business actually supports.",
    solutions: ["Bank-statement loans", "P&L-only programs", "Asset-depletion qualifying"],
  },
  {
    id: "jumbo",
    label: "I need a jumbo loan",
    headline: "Jumbo without the institutional distance.",
    body: "From $1M to $5M+, we run a private-banking process without a private-banking minimum. Multiple jumbo investors, structured exceptions, and white-glove communication from list price to keys.",
    solutions: ["10% down up to $3M", "Flexible payment structures", "Asset-based qualifying"],
  },
  {
    id: "first",
    label: "I am buying my first home",
    headline: "Confidence on day one, not by the closing table.",
    body: "We rebuild the process around education first — you'll understand every number, every disclosure, and every option before you spend a dollar. Down-payment assistance, credit coaching, and program comparison included.",
    solutions: ["3% conventional", "FHA & VA", "Down-payment assistance"],
  },
  {
    id: "inv",
    label: "I own investment properties",
    headline: "Leverage that actually compounds.",
    body: "Whether it's door #2 or door #20, we model the deal on cash-flow, refinance ladder, and tax strategy together — not a one-size-fits-all pitch.",
    solutions: ["DSCR no-doc", "Portfolio loans", "BRRRR-ready refis"],
  },
  {
    id: "life",
    label: "I'm navigating a divorce or major life change",
    headline: "Calm, strategic guidance when the details matter most.",
    body: "Buyout refinances and post-decree purchases handled with steady coordination alongside your attorney and financial advisors. We stay in our lane — mortgage structure and timing — and never offer legal advice or take sides.",
    solutions: ["Buyout refinance structuring", "Post-decree purchase support", "Coordination with your attorney/CPA"],
  },
];

function Scenarios() {
  const [active, setActive] = useState("se");
  const S = scenarios.find((s) => s.id === active)!;

  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <p className="accent-rule text-xs uppercase tracking-[0.22em] text-[var(--brand-orange)]">
            Scenario builder
          </p>
          <h2 className="mt-5 font-display text-4xl uppercase leading-[1.05] text-foreground sm:text-5xl">
            Tell us where you stand.
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
            Pick the scenario closest to your reality. We'll show the solutions other lenders said no to.
          </p>
          <div className="mt-8 flex flex-col gap-2">
            {scenarios.map((s) => {
              const isActive = active === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setActive(s.id)}
                  className={`group flex items-center justify-between gap-4 rounded-sm border px-5 py-4 text-left transition-all ${
                    isActive
                      ? "border-[var(--brand-orange)] bg-[var(--surface)]"
                      : "border-border bg-transparent hover:border-foreground/40"
                  }`}
                >
                  <span className={`text-sm font-semibold ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                    {s.label}
                  </span>
                  <ArrowRight
                    className={`h-4 w-4 transition-all ${
                      isActive
                        ? "text-[var(--brand-orange)] translate-x-0"
                        : "text-muted-foreground -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="relative h-full overflow-hidden rounded-md border border-border bg-gradient-to-br from-[var(--surface)] to-background p-8 lg:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--brand-orange)]/10 blur-3xl"
            />
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--brand-orange)]">
              Custom solution
            </p>
            <h3 className="mt-4 font-display text-3xl uppercase leading-[1.05] text-foreground sm:text-4xl">
              {S.headline}
            </h3>
            <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">{S.body}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {S.solutions.map((sol) => (
                <div
                  key={sol}
                  className="rounded-sm border border-border bg-background/60 p-4 text-sm font-medium text-foreground"
                >
                  {sol}
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-sm bg-[var(--brand-orange)] px-5 py-3 text-xs font-bold uppercase tracking-wider text-background hover:-translate-y-0.5 transition-transform"
              >
                Get your custom structure
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 text-xs font-bold uppercase tracking-wider text-foreground hover:border-foreground"
              >
                See related programs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section 6: Loan Programs Comparison ---------------- */
const programs = [
  {
    name: "Conventional",
    tag: "Most flexible",
    down: "3% down",
    best: "W-2 buyers, primary or second home",
    features: ["No PMI options >20% down", "Loan amounts to $766k", "Gift funds allowed"],
    featured: false,
  },
  {
    name: "Jumbo & Luxury",
    tag: "Premium",
    down: "10% down",
    best: "Buyers from $1M to $5M+",
    features: ["Up to $5M financing", "Flexible payment options", "Asset-based qualifying"],
    featured: true,
  },
  {
    name: "DSCR / Investor",
    tag: "No tax returns",
    down: "20% down",
    best: "Rental income covers the payment",
    features: ["No personal income docs", "LLC vesting OK", "Short-term rentals allowed"],
    featured: false,
  },
  {
    name: "Bank Statement",
    tag: "Self-employed",
    down: "10% down",
    best: "1099, business owners, gig economy",
    features: ["12 or 24 mo statements", "P&L only available", "Up to $3M loans"],
    featured: false,
  },
];

function LoanPrograms() {
  return (
    <section className="border-y border-border bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="accent-rule text-xs uppercase tracking-[0.22em] text-[var(--brand-orange)]">
              Loan programs
            </p>
            <h2 className="mt-5 font-display text-4xl uppercase leading-[1.05] text-foreground sm:text-5xl">
              Financing Solutions Built Around Your Goals
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--brand-orange)]"
          >
            All Loan Programs <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-4">
          {programs.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-md border p-7 transition-transform hover:-translate-y-1 ${
                p.featured
                  ? "border-[var(--brand-orange)] bg-background shadow-[0_30px_60px_-25px_var(--brand-orange)]"
                  : "border-border bg-background/40"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-7 rounded-full bg-[var(--brand-orange)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-background">
                  Signature
                </span>
              )}
              <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{p.tag}</p>
              <h3 className="mt-3 font-display text-2xl uppercase text-foreground">{p.name}</h3>
              <p className="mt-6 font-display text-3xl text-foreground">{p.down}</p>
              <p className="mt-5 text-sm text-muted-foreground">{p.best}</p>
              <ul className="mt-6 space-y-2.5 border-t border-border pt-5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-[var(--brand-orange)]" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-7 inline-flex items-center justify-center gap-2 rounded-sm px-4 py-3 text-xs font-bold uppercase tracking-wider transition-transform hover:-translate-y-0.5 ${
                  p.featured
                    ? "bg-[var(--brand-orange)] text-background"
                    : "border border-border text-foreground hover:border-foreground"
                }`}
              >
                Get your quote
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section 7: Education Center ---------------- */
const resources = [
  { icon: FileText, kind: "Guide", title: "The 2026 First-Time Buyer Playbook", meta: "12 min read" },
  { icon: Calculator, kind: "Calculator", title: "Rent vs. Buy true breakeven", meta: "Interactive" },
  { icon: Video, kind: "Video", title: "Self-employed income, decoded", meta: "8 min" },
  { icon: GraduationCap, kind: "Course", title: "Mortgage 101 — six-part series", meta: "Free" },
];

function EducationCenter() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <p className="accent-rule text-xs uppercase tracking-[0.22em] text-[var(--brand-orange)]">
            Education center
          </p>
          <h2 className="mt-5 font-display text-4xl uppercase leading-[1.05] text-foreground sm:text-5xl">
            Begin Your Journey with Knowledge
          </h2>
        </div>
        <Link
          to="/education"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--brand-orange)]"
        >
          Visit the Education Center <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {resources.map((r) => {
          const Icon = r.icon;
          return (
            <Link
              key={r.title}
              to="/education"
              className="group flex flex-col gap-6 rounded-md border border-border bg-[var(--surface)] p-7 transition-all hover:-translate-y-1 hover:border-[var(--brand-orange)]"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-[var(--brand-orange)]">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{r.kind}</span>
              </div>
              <h3 className="font-display text-lg uppercase leading-tight text-foreground">{r.title}</h3>
              <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
                <span className="text-xs text-muted-foreground">{r.meta}</span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-[var(--brand-orange)]" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

/* ---------------- Section 8: Before/After Case Studies ---------------- */
const cases = [
  {
    image: stockCouple,
    name: "Daniel & Priya R.",
    detail: "Self-employed jumbo · St. Louis",
    before: { label: "Denied by 3 lenders", sub: "Tax returns flagged income" },
    after: { label: "Closed in 19 days", sub: "$1.4M jumbo, 10% down" },
    quote: "Three other lenders saw a wall. Matt saw the structure.",
  },
  {
    image: stockAgent,
    name: "Sgt. Marcus T.",
    detail: "VA buyer · Chicago",
    before: { label: "$0 saved for closing", sub: "Couldn't time the market" },
    after: { label: "$0 out of pocket", sub: "Full VA, seller-paid costs" },
    quote: "He gave us a strategy, not a sales pitch.",
  },
  {
    image: stockHandshake,
    name: "Elena V.",
    detail: "1099 investor · Tampa",
    before: { label: "Stuck at 2 doors", sub: "Personal DTI maxed out" },
    after: { label: "5 doors in 11 months", sub: "DSCR portfolio refi ladder" },
    quote: "He's the only call I make on the lending side now.",
  },
];

function BeforeAfter() {
  return (
    <section className="border-y border-border bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="accent-rule text-xs uppercase tracking-[0.22em] text-[var(--brand-orange)]">
              Client wins
            </p>
            <h2 className="mt-5 font-display text-4xl uppercase leading-[1.05] text-foreground sm:text-5xl">
              Real People. Real Goals. Real Results.
            </h2>
          </div>
          <Link
            to="/success-stories"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--brand-orange)]"
          >
            Read Client Success Stories <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {cases.map((c) => (
            <article
              key={c.name}
              className="group overflow-hidden rounded-md border border-border bg-background transition-transform hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>
              <div className="grid grid-cols-2 gap-px bg-border">
                <div className="bg-background p-5">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Before</p>
                  <p className="mt-2 font-display text-base uppercase text-foreground">{c.before.label}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{c.before.sub}</p>
                </div>
                <div className="bg-background p-5">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--brand-orange)]">After</p>
                  <p className="mt-2 font-display text-base uppercase text-foreground">{c.after.label}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{c.after.sub}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm italic leading-relaxed text-foreground">"{c.quote}"</p>
                <p className="mt-5 font-display text-sm uppercase tracking-wider text-foreground">{c.name}</p>
                <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{c.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section 9: Meet The Team ---------------- */
function MeetMatt() {
  return (
    <section className="section-light">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-32">
        <div className="lg:col-span-5">
          <div className="overflow-hidden rounded-md bg-neutral-100">
            <img
              src={mattLifestyle}
              alt="Matt Arana, The Mortgage Rockstar"
              loading="lazy"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
        <div className="lg:col-span-7 lg:pt-6">
          <p className="accent-rule text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-orange)]">
            Meet Matt
          </p>
          <h2 className="mt-5 font-display text-4xl uppercase leading-[1.05] sm:text-5xl">
            The road was not straight. That is why the advice is sharper.
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-neutral-700">
            Mortgage Rockstar™ is Matt Arana's education-first mortgage
            guidance platform, powered by Cornerstone First Mortgage. The
            personal brand is the front door. Cornerstone First is the engine.
            The result is real human mortgage guidance with institutional
            capability.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6 border-t border-neutral-200 pt-8">
            {[
              { k: "25+", v: "Years experience" },
              { k: "1,200+", v: "Families served" },
              { k: "3", v: "States Matt is licensed in" },
            ].map((s) => (
              <div key={s.v}>
                <p className="font-display text-3xl text-neutral-900">{s.k}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-neutral-500">{s.v}</p>
              </div>
            ))}
          </div>
          <Link
            to="/about"
            className="mt-10 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-neutral-900 underline-offset-8 hover:underline"
          >
            Read Matt's story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section 10: Closing CTA ---------------- */
function ClosingCTA() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", goal: "First-Time Buyer" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,oklch(0.62_0.22_255/0.18),transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
        <div className="grid gap-12 rounded-lg border border-border bg-gradient-to-br from-[var(--surface)] to-background p-8 lg:grid-cols-12 lg:gap-16 lg:p-14">
          <div className="lg:col-span-6">
            <p className="accent-rule text-xs uppercase tracking-[0.22em] text-[var(--brand-orange)]">
              Book your strategy call
            </p>
            <h2 className="mt-5 font-display text-4xl uppercase leading-[1.02] text-foreground sm:text-5xl lg:text-6xl">
              You do not need to guess your way through this.
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
              Bring the question. We'll help you understand what it actually
              means for you. Clarity first — strategy second — commitment only
              when the numbers are right.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                { icon: Calendar, t: "30 minutes, scheduled around you" },
                { icon: Home, t: "Custom affordability + program comparison" },
                { icon: Users, t: "Available evenings + weekends" },
              ].map((b) => {
                const Icon = b.icon;
                return (
                  <li key={b.t} className="flex items-center gap-3 text-sm text-foreground">
                    <Icon className="h-4 w-4 text-[var(--brand-orange)]" />
                    {b.t}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:col-span-6">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="rounded-md border border-border bg-background/70 p-6 backdrop-blur sm:p-8"
            >
              {submitted ? (
                <div className="flex flex-col items-start gap-4 py-8">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-orange)]/15 text-[var(--brand-orange)]">
                    <CheckCircle2 className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-2xl uppercase text-foreground">You're on the calendar.</h3>
                  <p className="text-sm text-muted-foreground">
                    Matt will reach out within 24 hours to confirm a time. Welcome to the strategy side of lending.
                  </p>
                </div>
              ) : (
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Field label="Full name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                    <Field label="Phone" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
                  </div>
                  <Field label="Email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} type="email" />
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-muted-foreground">Primary goal</label>
                    <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
                      {["First-Time Buyer", "Refinance", "Investor", "Self-Employed"].map((g) => (
                        <button
                          key={g}
                          type="button"
                          onClick={() => setForm({ ...form, goal: g })}
                          className={`rounded-sm border px-2 py-2 text-[11px] font-semibold uppercase tracking-wider transition-colors ${
                            form.goal === g
                              ? "border-[var(--brand-orange)] bg-[var(--brand-orange)]/10 text-foreground"
                              : "border-border text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {g}
                        </button>
                      ))}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="group mt-2 inline-flex items-center justify-center gap-2 rounded-sm bg-[var(--brand-orange)] px-6 py-4 text-sm font-bold uppercase tracking-wider text-background transition-transform hover:-translate-y-0.5"
                  >
                    Start your mortgage conversation
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <p className="text-center text-[11px] text-muted-foreground">
                    Licensed in MO · IL · FL · Powered by Cornerstone First
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <div>
      <label className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-sm border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none focus:border-[var(--brand-orange)]"
      />
    </div>
  );
}
