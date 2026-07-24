import React from "react";
import { Search, CalendarCheck, Armchair } from "lucide-react";
import { Section, Eyebrow, Reveal } from "./primitives";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Say what you need",
    body: "Type it the way you'd say it — \"my geyser is leaking\" works. Search understands plain language in 11 South African languages.",
  },
  {
    number: "02",
    icon: CalendarCheck,
    title: "Pick your pro",
    body: "Compare verified professionals near you: real reviews, upfront rand prices, response times, and portfolios of actual work.",
  },
  {
    number: "03",
    icon: Armchair,
    title: "Relax",
    body: "Pay into escrow, track your pro live on the way, and release the money only when the job is done right.",
  },
];

export function HowItWorks() {
  return (
    <Section className="bg-b-paper py-20 md:py-28">
      <Reveal>
        <Eyebrow>How Bouul works</Eyebrow>
        <h2 className="mt-4 max-w-xl font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">
          Three steps between you and a done job.
        </h2>
      </Reveal>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {steps.map((step, i) => (
          <Reveal key={step.number} delay={i * 0.12}>
            <div className="group relative h-full rounded-3xl border border-b-line bg-b-paper-raised p-7 transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(24,39,32,0.08)]">
              <span className="font-price text-sm font-semibold text-b-ink-faint">
                {step.number}
              </span>
              <span className="mt-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-b-sun-soft transition-colors duration-300 group-hover:bg-b-sun">
                <step.icon className="h-6 w-6 text-b-ink" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-b-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-b-ink-soft">{step.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
