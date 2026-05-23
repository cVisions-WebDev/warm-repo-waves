import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — The Mortgage Rockstar™" },
      {
        name: "description",
        content:
          "Book a strategy call with Matt Arana — The Mortgage Rockstar. Licensed in MO, IL, FL. Education first. Strategy always.",
      },
      { property: "og:title", content: "Contact The Mortgage Rockstar™" },
      {
        property: "og:description",
        content: "The first conversation is free, focused, and built around your goals.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <PageHero
        eyebrow="Start with Clarity"
        title={
          <>
            Let's position
            <br />
            you to <span className="text-[var(--brand-orange)]">win</span>.
          </>
        }
        intro="The first conversation is free, focused, and built around your goals — no application, no pressure."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="flex flex-col items-start gap-5 rounded-sm border border-[var(--brand-orange)] bg-[var(--surface)] p-10">
                <CheckCircle2 className="h-10 w-10 text-[var(--brand-orange)]" />
                <h2 className="font-display text-3xl uppercase text-foreground">
                  Thanks — we'll be in touch.
                </h2>
                <p className="text-muted-foreground">
                  Matt personally reviews every inquiry. Expect a response
                  within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-5 rounded-sm border border-border bg-[var(--surface)] p-8 lg:p-10"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="First Name" name="firstName" required />
                  <Field label="Last Name" name="lastName" required />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    I'm interested in
                  </label>
                  <select
                    name="topic"
                    className="h-12 w-full rounded-sm border border-border bg-background px-4 text-foreground focus:border-[var(--brand-orange)] focus:outline-none"
                  >
                    <option>Buying my first home</option>
                    <option>Buying my next home</option>
                    <option>Jumbo / luxury financing</option>
                    <option>VA loan</option>
                    <option>Investor / DSCR strategy</option>
                    <option>Refinance strategy</option>
                    <option>Just exploring</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Tell me about your goals
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Where are you in the process? What's the situation?"
                    className="w-full rounded-sm border border-border bg-background p-4 text-foreground placeholder:text-muted-foreground focus:border-[var(--brand-orange)] focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[var(--brand-orange)] px-7 py-4 text-sm font-bold uppercase tracking-wider text-background transition-transform hover:-translate-y-0.5 sm:w-auto"
                >
                  Book a Strategy Call <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>

          <aside className="space-y-6 lg:col-span-5">
            <div className="rounded-sm border border-border bg-[var(--surface)] p-8">
              <p className="font-display text-xs uppercase tracking-[0.22em] text-[var(--brand-orange)]">
                Direct
              </p>
              <h3 className="mt-4 font-display text-2xl uppercase text-foreground">
                Reach Matt
              </h3>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-4 w-4 text-[var(--brand-orange)]" />
                  <span>(555) 555-0140</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-4 w-4 text-[var(--brand-orange)]" />
                  <span>matt@mortgagerockstar.com</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-[var(--brand-orange)]" />
                  <span>Licensed in MO · IL · FL</span>
                </li>
              </ul>
            </div>

            <div className="rounded-sm border border-border p-8">
              <p className="font-display text-xs uppercase tracking-[0.22em] text-[var(--brand-orange)]">
                Hours
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                <li className="flex justify-between">
                  <span>Mon – Fri</span>
                  <span className="text-foreground">8a – 7p CT</span>
                </li>
                <li className="flex justify-between">
                  <span>Sat</span>
                  <span className="text-foreground">By appointment</span>
                </li>
                <li className="flex justify-between">
                  <span>Sun</span>
                  <span className="text-foreground">Family time</span>
                </li>
              </ul>
            </div>

            <p className="rounded-sm border border-border bg-[var(--surface)] p-6 text-sm leading-relaxed text-muted-foreground">
              <span className="block font-display text-xs uppercase tracking-[0.22em] text-[var(--brand-orange)]">
                A note from Matt
              </span>
              <span className="mt-3 block">
                "Every inquiry comes to me directly. You won't get a call
                center, a chatbot, or caller #39. Let's break this down simply
                and figure out the right move together."
              </span>
            </p>
          </aside>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground"
      >
        {label}
        {required && <span className="ml-1 text-[var(--brand-orange)]">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="h-12 w-full rounded-sm border border-border bg-background px-4 text-foreground placeholder:text-muted-foreground focus:border-[var(--brand-orange)] focus:outline-none"
      />
    </div>
  );
}