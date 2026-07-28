"use client";
import React from "react";
import { Users, UserPlus, Eye, Sparkles } from "lucide-react";
import { Section, Eyebrow, Reveal } from "./primitives";

const socialPillars = [
  {
    icon: UserPlus,
    title: "Follow who you trust",
    body: "Follow customers whose taste you rate and vendors whose work you admire. Their activity lands in your Following feed — real bookings, real reviews, real results.",
  },
  {
    icon: Eye,
    title: "See what friends book",
    body: "When someone you follow books a service, it surfaces in your feed. Discover great plumbers, barbers, and cleaners through people you already trust — word-of-mouth, digitised.",
  },
  {
    icon: Users,
    title: "Grow your network",
    body: "Find new people through shared service interests. See mutual follows, discover community favourites, and build a trusted circle that helps you decide faster.",
  },
];

export function SocialFeature() {
  return (
    <Section className="bg-b-paper-raised py-20 md:py-28">
      <Reveal className="max-w-2xl">
        <Eyebrow>Follow & discover</Eyebrow>
        <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-5xl">
          Your network knows good work. Let them show you.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-b-ink-soft">
          Bouul is built on social proof, not strangers&apos; reviews. Follow the
          people you trust, see what they book, and discover the pros your
          friends already vouch for.
        </p>
      </Reveal>
      <div className="mt-14 grid gap-5 sm:grid-cols-3">
        {socialPillars.map((pillar, i) => (
          <Reveal key={pillar.title} delay={i * 0.08}>
            <div className="flex h-full flex-col gap-4 rounded-3xl border border-b-line bg-b-paper p-6 transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(24,39,32,0.08)]">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-b-sun-soft">
                <pillar.icon className="h-6 w-6 text-b-ink" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-b-ink">{pillar.title}</h3>
                <p className="mt-2 b-body-sm leading-relaxed text-b-ink-soft">{pillar.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.25} className="mt-10">
        <div className="rounded-3xl border border-b-line bg-b-paper-deep p-6 md:p-8">
          <div className="grid items-center gap-6 md:grid-cols-[1.4fr_0.6fr]">
            <div className="flex items-start gap-4">
              <Sparkles className="mt-1 h-5 w-5 shrink-0 text-b-green-deep" />
              <div>
                <p className="font-semibold text-b-ink">
                  Two feeds, one homepage
                </p>
                <p className="mt-1 b-body-sm leading-relaxed text-b-ink-soft">
                  Your Discovery feed shows what&apos;s popular and relevant. Your
                  Following feed shows what your network trusts. Together, they
                  mean you never book blind.
                </p>
              </div>
            </div>
            {/* iPhone 17 Pro mockup */}
            <div className="flex items-center justify-center">
              <img
                src="/iphone-17-pro-feeds.svg"
                alt="Discovery and Following feeds on iPhone 17 Pro"
                className="w-full max-w-[200px] object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
