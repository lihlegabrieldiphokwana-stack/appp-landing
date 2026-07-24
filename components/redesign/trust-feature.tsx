import React from "react";
import { ShieldCheck, BadgeCheck, MessagesSquare, MapPinned } from "lucide-react";
import { Section, Eyebrow, Reveal } from "./primitives";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Money held in escrow",
    body: "Your payment sits safely with Bouul while the work happens. It only reaches the pro when you say the job is done.",
  },
  {
    icon: BadgeCheck,
    title: "Every pro is verified",
    body: "ID checks and FICA compliance before anyone can take a booking. Certifications shown right on the profile.",
  },
  {
    icon: MessagesSquare,
    title: "Reviews from real jobs",
    body: "Only customers who actually booked can review — no bought stars, no anonymous spam.",
  },
  {
    icon: MapPinned,
    title: "Live tracking",
    body: "Watch your pro on the way, get updates at every step, and keep the whole conversation in one chat.",
  },
];

export function TrustFeature() {
  return (
    <Section className="bg-b-paper py-20 md:py-28">
      <Reveal className="max-w-2xl">
        <Eyebrow>Built on trust</Eyebrow>
        <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">
          Strangers do your best work, safely.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-b-ink-soft">
          A marketplace only works if both sides can relax. Bouul is engineered
          so the money, the identity, and the reputation are all guaranteed.
        </p>
      </Reveal>
      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {pillars.map((pillar, i) => (
          <Reveal key={pillar.title} delay={i * 0.08}>
            <div className="flex h-full gap-5 rounded-3xl border border-b-line bg-b-paper-raised p-6 transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(24,39,32,0.08)]">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-b-green-soft">
                <pillar.icon className="h-6 w-6 text-b-green-deep" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-b-ink">{pillar.title}</h3>
                <p className="mt-2 b-body-sm leading-relaxed text-b-ink-soft">{pillar.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
