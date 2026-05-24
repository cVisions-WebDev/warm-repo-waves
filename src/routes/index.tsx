import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Star,
  Crown,
  GraduationCap,
  Wrench,
  ArrowRight,
  Quote,
  PlayCircle,
} from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import mattHero from "@/assets/matt-hero.jpg";
import bgHero from "@/assets/bg-hero.jpg";
import mattLifestyle from "@/assets/matt-lifestyle.jpg";
import stockCouple from "@/assets/stock-couple-deal.jpg";
import stockHandshake from "@/assets/stock-handshake.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Mortgage Rockstar™ — Clarity. Strategy. Results." },
      {
        name: "description",
        content:
          "Mortgage guidance with Rockstar confidence. Education-first advising for serious buyers, investors, and real estate partners across MO, IL, FL.",
      },
      { property: "og:title", content: "The Mortgage Rockstar™" },
      {
        property: "og:description",
        content: "Clarity. Strategy. Results. Mortgage advising at a higher level.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const pillars = [
  {
    icon: Star,
    title: "Rockstar Expertise",
    body: "Products, underwriting, the nuances most lenders never bother to learn. Clients feel the depth in the first conversation.",
  },
  {
    icon: Crown,
    title: "VIP Client Experience",
    body: "Personal attention, proactive communication, and a level of service that reflects how significant the decision actually is.",
  },
  {
    icon: GraduationCap,
    title: "Education Before Transaction",
    body: "Understand first, then act. Complex concepts simplified — so you move forward knowing exactly what you're building and why.",
  },
  {
    icon: Wrench,
    title: "Solutions Others Miss",
    body: "Complex income, unconventional scenarios, deals other lenders walk away from. We turn over every stone until it works.",
  },
];

const services = [
  { name: "Conventional", desc: "Smart structure for the long game." },
  { name: "Jumbo & Luxury", desc: "$1M+ financing without the institutional distance." },
  { name: "VA Loans", desc: "Expert guidance for veterans and active-duty buyers." },
  { name: "Investor / DSCR", desc: "Leverage and scale for serious investors." },
  { name: "First-Time Buyer", desc: "Step-by-step clarity for your first move." },
  { name: "Complex Income", desc: "Self-employed, 1099, or non-traditional? We find the way." },
];

const testimonials = [
  {
    quote:
      "Matt looked at our situation and saw a deal where three other lenders saw a wall. We closed in 19 days.",
    name: "Daniel & Priya R.",
    detail: "Self-employed jumbo buyers · St. Louis",
  },
  {
    quote:
      "He educated us through every step. We didn't just get a mortgage — we got a strategy for the next ten years.",
    name: "Marcus T.",
    detail: "First-time buyer · Chicago",
  },
  {
    quote:
      "Two other lenders told me my income was too complicated. Matt structured it, closed it, and made it look easy.",
    name: "Alicia V.",
    detail: "1099 contractor · Tampa",
  },
  {
    quote:
      "DSCR financing on three doors in under a month. Matt is the only call I make on the lending side now.",
    name: "Jordan K.",
    detail: "Real estate investor · St. Charles",
  },
];

function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section
        className="relative isolate overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(10,11,14,0.65), rgba(10,11,14,0.9) 60%, var(--background)), url(${bgHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-24 pt-16 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:pb-32 lg:pt-24">
          <div className="fade-up lg:col-span-7 lg:pt-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-orange)]" />
              Powered by Cornerstone First
            </span>
            <h1 className="mt-6 font-display text-5xl uppercase leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-[88px]">
              Mortgage advising
              <br />
              with <span className="text-[var(--brand-orange)]">Rockstar</span>
              <br />
              confidence.
            </h1>
            <p className="mt-7 max-w-xl text-balance text-lg leading-relaxed text-muted-foreground">
              Talk to your lender before you fall in love with a house. Fall in
              love with the numbers first. The smartest buyers always do.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-sm bg-[var(--brand-orange)] px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-background transition-transform hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-15px_var(--brand-orange)]"
              >
                Get Your Strategy Call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/education"
                className="inline-flex items-center gap-2 rounded-sm border border-border bg-background/40 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-foreground backdrop-blur transition-colors hover:border-foreground"
              >
                <PlayCircle className="h-4 w-4" />
                Start Learning
              </Link>
            </div>

            <dl className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                { k: "25+", v: "Years figuring it out" },
                { k: "3", v: "States licensed" },
                { k: "Top 5", v: "GE Capital producer" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-3xl text-foreground sm:text-4xl">{s.k}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative lg:col-span-5">
            <div className="absolute -inset-4 -z-10 rounded-sm bg-gradient-to-br from-[var(--brand-blue)]/30 via-transparent to-[var(--brand-orange)]/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-sm border border-border">
              <img
                src={mattHero}
                alt="Matt Arana, The Mortgage Rockstar"
                width={1080}
                height={1920}
                className="aspect-[3/4] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-background via-background/70 to-transparent p-5">
                <div>
                  <p className="font-display text-lg uppercase tracking-wide text-foreground">Matt Arana</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand-orange)]">
                    The Mortgage Rockstar™
                  </p>
                </div>
                <span className="rounded-sm border border-border bg-background/70 px-2 py-1 text-[10px] uppercase tracking-wider text-muted-foreground backdrop-blur">
                  MO · IL · FL
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE-STYLE STATEMENT */}
      <section className="border-y border-border bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10">
          <p className="font-display text-2xl uppercase tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            <span className="text-[var(--brand-orange)]">New town,</span>{" "}
            <span className="text-muted-foreground">old vibe.</span>{" "}
            Institutional expertise without the institutional distance.
          </p>
        </div>
      </section>

      {/* PILLARS */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="accent-rule text-xs uppercase tracking-[0.22em] text-[var(--brand-orange)]">
              What we stand on
            </p>
            <h2 className="mt-5 font-display text-4xl uppercase leading-[1.05] text-foreground sm:text-5xl">
              Built on four
              <br />
              non-negotiables.
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
              Most lenders lead with rates. We lead with something harder to
              replicate — a way of working that has defined Matt's career long
              before it defined the brand.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:col-span-8">
            {pillars.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="group flex flex-col gap-5 bg-background p-7 transition-colors hover:bg-[var(--surface)]"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-border bg-[var(--surface)] text-[var(--brand-orange)] transition-colors group-hover:border-[var(--brand-orange)]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-xl uppercase tracking-tight text-foreground">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER — light section for clarity contrast */}
      <section className="section-light">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-32">
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-sm bg-neutral-100">
              <img
                src={mattLifestyle}
                alt="Matt Arana, The Mortgage Rockstar"
                loading="lazy"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
          <div className="lg:col-span-6 lg:pt-6">
            <p className="accent-rule text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-orange)]">
              About Matt
            </p>
            <h2 className="mt-5 font-display text-4xl uppercase leading-[1.05] sm:text-5xl">
              The musician
              <br />
              who learned
              <br />
              to solve.
            </h2>
            <p className="mt-6 leading-relaxed text-neutral-700">
              Touring musician with a record deal. Top-5 producer at GE Capital.
              Mortgage educator who came to believe the most important financial
              transaction in most people's lives deserves more than a call
              center and a chatbot.
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Show up",
                "Tell the truth",
                "Outwork expectations",
                "Never stop learning",
              ].map((v) => (
                <li
                  key={v}
                  className="flex items-center gap-3 border-l-2 border-[var(--brand-orange)] bg-neutral-100 px-4 py-3 text-sm font-medium text-neutral-900"
                >
                  {v}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-9 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-neutral-900 underline-offset-8 hover:underline"
            >
              Read the full story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES SNAPSHOT */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="accent-rule text-xs uppercase tracking-[0.22em] text-[var(--brand-orange)]">
              Loan Programs
            </p>
            <h2 className="mt-5 font-display text-4xl uppercase leading-[1.05] text-foreground sm:text-5xl">
              You have more options than you think.
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--brand-orange)]"
          >
            See all programs <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Link
              key={s.name}
              to="/services"
              className="group relative flex flex-col justify-between overflow-hidden rounded-sm border border-border bg-[var(--surface)] p-7 transition-all hover:-translate-y-1 hover:border-[var(--brand-orange)]"
            >
              <span className="font-display text-xs uppercase tracking-[0.22em] text-muted-foreground">
                0{i + 1}
              </span>
              <div className="mt-12">
                <h3 className="font-display text-2xl uppercase leading-tight text-foreground">
                  {s.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--brand-orange)] opacity-0 transition-opacity group-hover:opacity-100">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section
        className="relative overflow-hidden border-y border-border bg-[var(--surface)]"
      >
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-20"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(10,11,14,0.92), rgba(10,11,14,0.6)), url(${stockHandshake})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
          <Quote className="h-10 w-10 text-[var(--brand-orange)]" />
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 6000, stopOnInteraction: true })]}
            className="mt-6"
          >
            <CarouselContent>
              {testimonials.map((t) => (
                <CarouselItem key={t.name}>
                  <blockquote className="font-display text-3xl uppercase leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                    “{t.quote}”
                  </blockquote>
                  <div className="mt-10 flex items-center gap-4 border-t border-border pt-6">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-orange)]" />
                    <div>
                      <p className="font-display text-sm uppercase tracking-wider text-foreground">
                        {t.name}
                      </p>
                      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        {t.detail}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-10 flex items-center justify-end gap-3">
              <CarouselPrevious className="static h-10 w-10 translate-y-0 rounded-sm border-border bg-background/60 text-foreground hover:bg-[var(--brand-orange)] hover:text-background" />
              <CarouselNext className="static h-10 w-10 translate-y-0 rounded-sm border-border bg-background/60 text-foreground hover:bg-[var(--brand-orange)] hover:text-background" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
        <div className="grid gap-10 rounded-sm border border-border bg-[var(--surface)] p-10 lg:grid-cols-12 lg:p-16">
          <div className="lg:col-span-8">
            <p className="accent-rule text-xs uppercase tracking-[0.22em] text-[var(--brand-orange)]">
              Let's position you to win
            </p>
            <h2 className="mt-5 font-display text-4xl uppercase leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
              You're closer than you think. Let's take the next step together.
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-4 lg:col-span-4">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-sm bg-[var(--brand-orange)] px-6 py-4 text-sm font-bold uppercase tracking-wider text-background transition-transform hover:-translate-y-0.5"
            >
              Book a Strategy Call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/education"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-border px-6 py-4 text-sm font-semibold uppercase tracking-wider text-foreground hover:border-foreground"
            >
              Browse Education
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}