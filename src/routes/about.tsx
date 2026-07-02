import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import mattHero from "@/assets/matt-hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Matt Arana — The Mortgage Rockstar™" },
      {
        name: "description",
        content:
          "From touring musician to top-5 GE Capital producer to mortgage educator. Meet Matt Arana — The Mortgage Rockstar.",
      },
      { property: "og:title", content: "About Matt Arana" },
      {
        property: "og:description",
        content:
          "The musician who learned to sell, the producer who learned to solve, the mortgage educator who shows up.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: mattHero },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const philosophy = [
  { k: "Show up", v: "Be in the room. Be on the phone. Be present when it counts." },
  { k: "Be prepared", v: "Know the file, know the products, know the way through." },
  { k: "Tell the truth", v: "Even when it's the harder answer. Especially then." },
  { k: "Go above and beyond", v: "Baseline, not bonus. Every client. Every time." },
  { k: "Never stop learning", v: "The market changes. Products change. Stay sharp." },
  { k: "Solve the hard problems", v: "The complicated deals are where reputations are built." },
];

function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="The Story"
        title={
          <>
            The long road
            <br />
            into mortgage
            <br />
            lending.
          </>
        }
        intro="Matt Arana did not take the traditional road into mortgage lending. He took a longer one — and it made all the difference."
      />

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="sticky top-28 overflow-hidden rounded-sm border border-border">
              <img
                src={mattHero}
                alt="Matt Arana"
                width={1080}
                height={1920}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-6 leading-relaxed text-muted-foreground lg:col-span-7 lg:text-lg">
            <p>
              Before he was helping clients navigate complex financing
              decisions, Matt was a full-time musician with a record deal,
              touring nationally and learning firsthand what it means to show
              up for an audience night after night and make it count.
            </p>
            <p>
              Then 9/11 happened, the music industry changed, and life required
              a different kind of pivot. What followed was a career built
              entirely on the willingness to walk into rooms that were new to
              him — insurance, finance, and eventually GE Capital, one of the
              most competitive financial sales environments in the country.
            </p>
            <p className="text-foreground">
              In his own words: <em>"I didn't know much, so I learned fast,
              connected with smart people, and challenged myself to master
              every new environment I entered."</em>
            </p>
            <p>
              By the time he left GE, he was one of the company's top-five
              referral producers. The instinct that drove him then — understand
              first, then act — is how Matt operates to this day. When a
              situation is complicated, he doesn't reach for a quick answer.
              He digs in, turns over every stone, and comes back with clarity.
            </p>
            <p>
              Mortgage lending was the field where relationships and
              problem-solving actually mattered, and he took to it the way he
              had taken to everything else. He built teams, scaled
              organizations, and along the way became known as something more
              than a lender — an educator, an advisor, and the person clients
              called when the deal seemed impossible.
            </p>
            <p className="border-l-2 border-[var(--brand-orange)] pl-6 text-foreground">
              The Mortgage Rockstar™ is where all of it lands. The musician who
              learned to sell, the producer who learned to solve, and the
              mortgage educator who came to believe that the most important
              financial transaction in most people's lives deserves more than a
              call center and a chatbot.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
          <div className="max-w-2xl">
            <p className="accent-rule text-xs uppercase tracking-[0.22em] text-[var(--brand-orange)]">
              The Philosophy
            </p>
            <h2 className="mt-5 font-display text-4xl uppercase leading-[1.05] text-foreground sm:text-5xl">
              Hasn't changed since
              <br />
              the load-in days.
            </h2>
          </div>
          <ul className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {philosophy.map((p, i) => (
              <li key={p.k} className="bg-background p-7">
                <span className="font-display text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  0{i + 1}
                </span>
                <h3 className="mt-6 font-display text-xl uppercase leading-tight text-foreground">
                  {p.k}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.v}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2">
          {[
            {
              t: "Mission",
              b: "To empower individuals, families, and investors to navigate the mortgage process and make smarter financial decisions with clarity, confidence, and honest, strategic guidance.",
            },
            {
              t: "Vision",
              b: "To become a nationally recognized authority in the mortgage space where serious buyers, investors, and real estate professionals turn first — known for education-driven content, strong client relationships, and a reputation built one relationship at a time.",
            },
          ].map((m) => (
            <div key={m.t} className="rounded-sm border border-border bg-[var(--surface)] p-10">
              <p className="font-display text-xs uppercase tracking-[0.22em] text-[var(--brand-orange)]">
                {m.t}
              </p>
              <p className="mt-6 font-display text-2xl uppercase leading-snug text-foreground lg:text-3xl">
                {m.b}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 rounded-sm border border-border p-8">
          <p className="max-w-xl text-foreground">
            <span className="font-display uppercase tracking-wider text-[var(--brand-orange)]">
              Mortgage Rockstar™
            </span>{" "}
            is Matt Arana's personal brand — his voice, his relationships, his
            way of working — powered by the lending strength, compliance
            infrastructure, and operational depth of{" "}
            <strong className="text-foreground">Cornerstone First</strong>.
          </p>
          <p className="w-full text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-orange)]">
            New town, old vibe.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-sm bg-[var(--brand-orange)] px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-background"
          >
            Start the Conversation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}