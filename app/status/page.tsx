"use client";

import React from "react";
import Link from "next/link";
import { CircleCheck, Clock, LifeBuoy, Mail } from "lucide-react";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import { Section, Eyebrow, Reveal } from "@/components/redesign/primitives";

type SystemState = "operational" | "in-progress";

const systems: Array<{
  name: string;
  state: SystemState;
  detail: string;
}> = [
  {
    name: "Website",
    state: "operational",
    detail: "Landing, services, city, and learn pages are live.",
  },
  {
    name: "Marketplace pages",
    state: "operational",
    detail: "Service, category, and pro profile pages are available.",
  },
  {
    name: "Vendor storefronts",
    state: "operational",
    detail: "Public business profiles and deep links resolve normally.",
  },
  {
    name: "Newsroom",
    state: "operational",
    detail: "Press releases and article pages are online.",
  },
  {
    name: "Mobile app downloads",
    state: "in-progress",
    detail: "App store listings are being finalized. The download page has the latest.",
  },
];

const incidentPolicy = [
  "If a disruption affects bookings, this page is updated first.",
  "If one flow is down but the rest works, the affected area is named clearly.",
  "When there are no incidents, the page still gets a fresh check-in date.",
];

/* Decorative 90-day uptime strip. Deterministic — no randomness, no hydration drift. */
function UptimeStrip({ state }: { state: SystemState }) {
  const days = Array.from({ length: 45 }, (_, i) => i);
  return (
    <div className="flex h-6 items-end gap-[3px]" aria-hidden>
      {days.map((d) => {
        const pending = state === "in-progress" && d > 36;
        return (
          <span
            key={d}
            className={
              pending
                ? "h-4 w-1 rounded-full bg-b-sun"
                : "h-4 w-1 rounded-full bg-b-green/70"
            }
          />
        );
      })}
    </div>
  );
}

function StateBadge({ state }: { state: SystemState }) {
  if (state === "operational") {
    return (
      <span className="flex items-center gap-1.5 rounded-full bg-b-green-soft px-3 py-1 text-xs font-semibold text-b-green-deep">
        <CircleCheck className="h-3.5 w-3.5" /> Operational
      </span>
    );
  }
  return (
    <span className="flex items-center gap-1.5 rounded-full bg-b-sun-soft px-3 py-1 text-xs font-semibold text-b-ink">
      <Clock className="h-3.5 w-3.5" /> In progress
    </span>
  );
}

export default function StatusPage() {
  const operational = systems.filter((s) => s.state === "operational").length;
  const allGood = operational === systems.length;

  return (
    <main className="min-h-screen bg-b-paper font-body text-b-ink">
      <RedesignNav />

      {/* Hero + overall banner */}
      <Section className="pb-10 pt-32 md:pt-40">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">System status</Eyebrow>
          <h1 className="mt-5 font-display text-5xl font-extrabold tracking-tight text-b-ink md:text-6xl">
            {allGood ? "All systems go." : "Mostly sunny."}
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-b-ink-soft">
            A public check-in on what&apos;s running and what&apos;s still being
            finalized before launch.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-10 max-w-3xl">
          <div className="flex flex-col items-center justify-between gap-3 rounded-3xl border border-b-green/30 bg-b-green-soft px-6 py-5 sm:flex-row">
            <p className="flex items-center gap-3 font-semibold text-b-green-deep">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-b-green opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-b-green" />
              </span>
              {operational} of {systems.length} systems operational
            </p>
            <p className="font-price text-xs uppercase tracking-[0.18em] text-b-green-deep/80">
              Updated 24 Jul 2026
            </p>
          </div>
        </Reveal>
      </Section>

      {/* Status board */}
      <Section className="pb-20">
        <Reveal delay={0.15}>
          <div className="mx-auto max-w-3xl divide-y divide-b-line rounded-3xl border border-b-line bg-b-paper-raised">
            {systems.map((system) => (
              <div key={system.name} className="flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <div className="flex items-center gap-3">
                    <h2 className="font-display text-base font-bold text-b-ink">
                      {system.name}
                    </h2>
                    <StateBadge state={system.state} />
                  </div>
                  <p className="mt-1.5 text-sm text-b-ink-soft">{system.detail}</p>
                </div>
                <div className="shrink-0">
                  <UptimeStrip state={system.state} />
                  <p className="mt-1 text-right font-price text-[10px] uppercase tracking-[0.15em] text-b-ink-faint">
                    Past 45 days
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Incident policy + contact */}
      <Section className="pb-24">
        <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-b-line bg-b-paper-raised p-7">
              <Eyebrow>How incidents are handled</Eyebrow>
              <ul className="mt-5 space-y-4">
                {incidentPolicy.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-b-ink-soft">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-b-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-b-forest-line bg-b-forest p-7">
              <Eyebrow tone="sun">Something looks off?</Eyebrow>
              <p className="mt-5 text-sm leading-relaxed text-b-cream/80">
                Tell us and we&apos;ll check it against this board straight away.
              </p>
              <div className="mt-6 space-y-3">
                <a
                  href="mailto:support@bouul.com"
                  className="flex items-center gap-2.5 text-sm font-semibold text-b-cream transition-colors hover:text-b-sun"
                >
                  <Mail className="h-4 w-4" /> support@bouul.com
                </a>
                <Link
                  href="/support"
                  className="flex items-center gap-2.5 text-sm font-semibold text-b-cream transition-colors hover:text-b-sun"
                >
                  <LifeBuoy className="h-4 w-4" /> Open the support page
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <RedesignFooter />
    </main>
  );
}
