"use client";
import React from "react";
import { Trophy, Star, Award, TrendingUp, Sparkles } from "lucide-react";
import { Section, Eyebrow, Reveal } from "./primitives";
import { MediaPlaceholder } from "./media-placeholder";

const masteryPillars = [
  {
    icon: Trophy,
    title: "Booking milestones",
    body: "5 bookings, 25 bookings, 100 bookings — every milestone earns a trophy that sits on your profile. A track record you can show off.",
  },
  {
    icon: Star,
    title: "Reliability rewards",
    body: "Maintain a high customer reliability score and earn trophies that signal to vendors: this customer shows up. Trust is a two-way street.",
  },
  {
    icon: Award,
    title: "Vendor excellence",
    body: "Vendors earn trophies for quality streaks, top ratings, fast response times, and customer satisfaction. Badges of honour that help them stand out.",
  },
  {
    icon: TrendingUp,
    title: "Community engagement",
    body: "Write helpful reviews, share glimpses, and engage with your network. The more you contribute, the more your profile reflects your community standing.",
  },
];

export function MasteryFeature() {
  return (
    <Section className="bg-b-paper py-20 md:py-28">
      <Reveal className="max-w-2xl">
        <Eyebrow>Mastery & trophies</Eyebrow>
        <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">
          Good service earns its shine.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-b-ink-soft">
          Bouul turns service relationships into a game. Customers earn trophies
          for booking consistently and writing great reviews. Vendors earn them
          for quality work and happy customers. Your profile tells the story of
          your reputation.
        </p>
      </Reveal>
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {masteryPillars.map((pillar, i) => (
          <Reveal key={pillar.title} delay={i * 0.08}>
            <div className="flex h-full flex-col gap-4 rounded-3xl border border-b-line bg-b-paper-raised p-6 transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(24,39,32,0.08)]">
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
      <Reveal delay={0.35} className="mt-10">
        <div className="rounded-3xl border border-dashed border-b-sun/40 bg-b-sun-soft/50 p-6 md:p-8">
          <div className="grid items-center gap-6 md:grid-cols-[1.4fr_0.6fr]">
            <div className="flex items-start gap-4">
              <Sparkles className="mt-1 h-5 w-5 shrink-0 text-b-sun" />
              <div>
                <p className="font-semibold text-b-ink">
                  Trophies are earned, not bought
                </p>
                <p className="mt-1 b-body-sm leading-relaxed text-b-ink-soft">
                  Every trophy is tied to verifiable actions — completed bookings,
                  written reviews, maintained ratings. They can&apos;t be gamed.
                  What you see on a profile is earned.
                </p>
              </div>
            </div>
            <MediaPlaceholder
              kind="image"
              src="/mockups/trophy-profile.jpg"
              alt="Trophy showcase on a profile"
              label="Profile"
              ratio="9/16"
              rounded="rounded-2xl"
            />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
