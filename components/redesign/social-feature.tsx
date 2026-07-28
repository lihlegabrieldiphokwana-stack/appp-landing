"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  UserPlus,
  Eye,
  Sparkles,
  Compass,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Star,
  Clock,
  ArrowRight,
  Bookmark,
  Share2,
} from "lucide-react";
import { Section, Eyebrow, Reveal, PriceTag } from "./primitives";

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

type FeedTab = "dual" | "discovery" | "following";

export function SocialFeature() {
  const [activeTab, setActiveTab] = useState<FeedTab>("dual");

  return (
    <Section className="bg-b-paper-raised py-20 md:py-28">
      {/* Header */}
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

      {/* 3 Social Pillars */}
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

      {/* Enhanced Interactive "Two Feeds, One Homepage" Section */}
      <Reveal delay={0.25} className="mt-12">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-b-line bg-b-paper-deep p-6 md:p-10 shadow-sm">
          {/* Subtle decorative background gradient accent */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-b-sun-soft/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-b-green-deep/5 blur-3xl" />

          {/* Section Eyebrow & Headline */}
          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-b-green-deep/20 bg-b-paper/80 px-3.5 py-1 text-xs font-semibold text-b-green-deep backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-b-green-deep" />
                <span>Dual-Engine Homepage</span>
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-b-ink md:text-3xl">
                Two feeds, one homepage. Zero booking blind.
              </h3>
              <p className="mt-2.5 text-base leading-relaxed text-b-ink-soft">
                Your <strong className="font-semibold text-b-ink">Discovery feed</strong> surfaces what&apos;s popular and relevant across your city. Your <strong className="font-semibold text-b-ink">Following feed</strong> shows what your trusted network books and loves. Together, they eliminate guesswork.
              </p>
            </div>

            {/* Interactive Feed Switcher Tabs */}
            <div className="flex shrink-0 items-center gap-1.5 rounded-2xl border border-b-line bg-b-paper p-1.5 shadow-inner">
              <button
                type="button"
                onClick={() => setActiveTab("dual")}
                className={`relative flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold transition-all ${
                  activeTab === "dual"
                    ? "bg-b-ink text-b-paper shadow-sm"
                    : "text-b-ink-soft hover:text-b-ink"
                }`}
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>Dual View</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("discovery")}
                className={`relative flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold transition-all ${
                  activeTab === "discovery"
                    ? "bg-b-ink text-b-paper shadow-sm"
                    : "text-b-ink-soft hover:text-b-ink"
                }`}
              >
                <Compass className="h-3.5 w-3.5" />
                <span>Discovery Feed</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("following")}
                className={`relative flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold transition-all ${
                  activeTab === "following"
                    ? "bg-b-ink text-b-paper shadow-sm"
                    : "text-b-ink-soft hover:text-b-ink"
                }`}
              >
                <Users className="h-3.5 w-3.5" />
                <span>Following Feed</span>
              </button>
            </div>
          </div>

          {/* Interactive Content Grid */}
          <div className="relative z-10 mt-8 grid items-center gap-8 lg:grid-cols-[1.3fr_0.9fr]">
            {/* Left: Interactive Feed Preview Cards */}
            <div className="space-y-4">
              <AnimatePresence mode="wait">
                {activeTab === "dual" && (
                  <motion.div
                    key="tab-dual"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="grid gap-4 sm:grid-cols-2"
                  >
                    {/* Discovery Mini Card */}
                    <div className="flex flex-col justify-between rounded-2xl border border-b-line bg-b-paper p-5 shadow-sm transition-transform hover:-translate-y-0.5">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-b-green-deep">
                            <Compass className="h-3.5 w-3.5" /> Discovery Feed
                          </span>
                          <span className="rounded-full bg-b-sun-soft px-2 py-0.5 text-[10px] font-bold text-b-ink">
                            AI Match 98%
                          </span>
                        </div>
                        <h4 className="mt-3 font-display font-bold text-b-ink">
                          Knotless Braids & Styling
                        </h4>
                        <p className="mt-1 text-xs text-b-ink-soft">
                          Studio Luxe • Sandton
                        </p>
                        <div className="mt-3 flex items-center gap-2 text-xs">
                          <span className="flex items-center gap-1 font-semibold text-b-ink">
                            <Star className="h-3.5 w-3.5 fill-b-sun text-b-sun" /> 4.9
                          </span>
                          <span className="text-b-ink-faint">(142 reviews)</span>
                          <PriceTag tilt={false} className="ml-auto text-[11px]">
                            From R480
                          </PriceTag>
                        </div>
                      </div>
                      <div className="mt-4 border-t border-b-line/60 pt-3 text-[11px] text-b-ink-soft">
                        <span className="font-semibold text-b-ink">Why it&apos;s surfaced:</span> Trending near you + matches your style search history.
                      </div>
                    </div>

                    {/* Following Mini Card */}
                    <div className="flex flex-col justify-between rounded-2xl border border-b-line bg-b-paper p-5 shadow-sm transition-transform hover:-translate-y-0.5">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-b-ink">
                            <Users className="h-3.5 w-3.5 text-b-green-deep" /> Following Feed
                          </span>
                          <span className="inline-flex items-center gap-1 rounded-full bg-b-green-deep/10 px-2 py-0.5 text-[10px] font-bold text-b-green-deep">
                            <CheckCircle2 className="h-3 w-3" /> Friend Booked
                          </span>
                        </div>
                        <div className="mt-3 flex items-center gap-2">
                          <div className="flex -space-x-2">
                            <div className="h-7 w-7 rounded-full border-2 border-b-paper bg-b-sun flex items-center justify-center text-[10px] font-extrabold text-b-ink">SM</div>
                            <div className="h-7 w-7 rounded-full border-2 border-b-paper bg-b-green-deep flex items-center justify-center text-[10px] font-extrabold text-b-paper">DK</div>
                          </div>
                          <div>
                            <p className="text-xs font-bold text-b-ink">Sarah M. booked 2h ago</p>
                            <p className="text-[11px] text-b-ink-soft">Fade & Blade Barber Shop</p>
                          </div>
                        </div>
                        <p className="mt-3 rounded-xl bg-b-paper-deep p-2.5 text-xs italic text-b-ink-soft">
                          &quot;Sipho is hands down the best barber in Rosebank. Clean work & zero wait.&quot;
                        </p>
                      </div>
                      <div className="mt-4 flex items-center justify-between border-t border-b-line/60 pt-3 text-[11px] text-b-ink-soft">
                        <span>Followed by 3 mutuals</span>
                        <span className="font-semibold text-b-green-deep">Verified Booking</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "discovery" && (
                  <motion.div
                    key="tab-discovery"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="rounded-2xl border border-b-line bg-b-paper p-6 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-b-sun-soft text-b-ink">
                          <Compass className="h-4 w-4" />
                        </span>
                        <div>
                          <h4 className="font-display font-bold text-b-ink">The Discovery Engine</h4>
                          <p className="text-xs text-b-ink-soft">AI intent matching + local popularity signals</p>
                        </div>
                      </div>
                      <span className="rounded-full bg-b-green-deep/10 px-3 py-1 text-xs font-bold text-b-green-deep">
                        Explore City-Wide
                      </span>
                    </div>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-xl border border-b-line bg-b-paper-deep p-3.5">
                        <div className="flex items-center gap-2 text-xs font-semibold text-b-ink">
                          <TrendingUp className="h-3.5 w-3.5 text-b-green-deep" />
                          <span>Trending Services</span>
                        </div>
                        <p className="mt-1 text-xs text-b-ink-soft">
                          Popular Glimpses, hot deals, and top-rated providers in your area.
                        </p>
                      </div>
                      <div className="rounded-xl border border-b-line bg-b-paper-deep p-3.5">
                        <div className="flex items-center gap-2 text-xs font-semibold text-b-ink">
                          <Clock className="h-3.5 w-3.5 text-b-green-deep" />
                          <span>Instant Slot Match</span>
                        </div>
                        <p className="mt-1 text-xs text-b-ink-soft">
                          Find open booking slots available today near your location.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "following" && (
                  <motion.div
                    key="tab-following"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="rounded-2xl border border-b-line bg-b-paper p-6 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-b-sun-soft text-b-ink">
                          <Users className="h-4 w-4" />
                        </span>
                        <div>
                          <h4 className="font-display font-bold text-b-ink">Your Network Stream</h4>
                          <p className="text-xs text-b-ink-soft">Activity from people and creators you follow</p>
                        </div>
                      </div>
                      <span className="rounded-full bg-b-sun-soft px-3 py-1 text-xs font-bold text-b-ink">
                        100% Social Proof
                      </span>
                    </div>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-xl border border-b-line bg-b-paper-deep p-3.5">
                        <div className="flex items-center gap-2 text-xs font-semibold text-b-ink">
                          <ShieldCheck className="h-3.5 w-3.5 text-b-green-deep" />
                          <span>Verified Receipts</span>
                        </div>
                        <p className="mt-1 text-xs text-b-ink-soft">
                          Every activity feed item comes from completed, paid transactions.
                        </p>
                      </div>
                      <div className="rounded-xl border border-b-line bg-b-paper-deep p-3.5">
                        <div className="flex items-center gap-2 text-xs font-semibold text-b-ink">
                          <UserPlus className="h-3.5 w-3.5 text-b-green-deep" />
                          <span>Word-of-Mouth Digitised</span>
                        </div>
                        <p className="mt-1 text-xs text-b-ink-soft">
                          Discover pros through people whose taste and standards you trust.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Feature Pill Highlights */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-b-line bg-b-paper px-3 py-1 text-[11px] font-semibold text-b-ink">
                  <Compass className="h-3 w-3 text-b-green-deep" />
                  <span>Discovery: Popular & Relevant</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-b-line bg-b-paper px-3 py-1 text-[11px] font-semibold text-b-ink">
                  <Users className="h-3 w-3 text-b-green-deep" />
                  <span>Following: Network Trusted</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-b-line bg-b-paper px-3 py-1 text-[11px] font-semibold text-b-ink">
                  <ShieldCheck className="h-3 w-3 text-b-green-deep" />
                  <span>Zero Fake Reviews</span>
                </span>
              </div>
            </div>

            {/* Right: iPhone 17 Pro Mockup Frame */}
            <div className="relative flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {/* Glow behind phone frame */}
                <div className="absolute inset-0 rounded-full bg-b-sun-soft/60 blur-2xl transform scale-90" />
                <img
                  src="/iphone-17-pro-feeds.svg"
                  alt="Discovery and Following feeds on iPhone 17 Pro"
                  className="relative z-10 w-full max-w-[220px] object-contain drop-shadow-2xl md:max-w-[240px]"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

