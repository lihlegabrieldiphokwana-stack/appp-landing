"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Star,
  Award,
  TrendingUp,
  Sparkles,
  Lock,
  Unlock,
  CheckCircle2,
  Zap,
  ChevronRight,
  ShieldCheck,
  Flame,
  Crown,
} from "lucide-react";
import { Section, Eyebrow, Reveal } from "./primitives";

/* ─── Static Pillars ───────────────────────────────────────────────────────── */
const masteryPillars = [
  {
    icon: Trophy,
    title: "Booking milestones",
    body: "5, 25, 100 bookings — every milestone unlocks a badge on your profile. A track record that builds trust instantly.",
  },
  {
    icon: Star,
    title: "Reliability rewards",
    body: "Maintain a high reliability score to unlock badges that signal to pros: this customer values time & commitments.",
  },
  {
    icon: Award,
    title: "Vendor excellence",
    body: "Pros earn trophies for quality streaks, 5★ ratings, and rapid response times. Badges that prove true craft.",
  },
  {
    icon: TrendingUp,
    title: "Community status",
    body: "Review pros, post Glimpses, and invite friends. Watch your tier upgrade from Bronze to Platinum as you contribute.",
  },
];

/* ─── Trophy Data from Specification ───────────────────────────────────────── */
interface TrophyItem {
  id: string;
  title: string;
  categoryGroup: "all" | "beauty" | "home" | "fitness" | "specialty" | "vendor";
  categoryName: string;
  howToEarn: string;
  reward: string;
  tier: "Bronze" | "Silver" | "Gold" | "Platinum";
  ladder?: string[];
  maxProgress: number;
  initialProgress: number;
  iconBg: string;
}

const TROPHY_DATA: TrophyItem[] = [
  {
    id: "explorer-1",
    title: "Explorer I",
    categoryGroup: "specialty",
    categoryName: "Discovery",
    howToEarn: "Complete bookings in 2 different service categories",
    reward: "🖼️ Profile Frame",
    tier: "Bronze",
    ladder: ["Explorer I", "Explorer", "Adventurer", "Authority"],
    maxProgress: 2,
    initialProgress: 2,
    iconBg: "bg-amber-500/10 text-amber-500",
  },
  {
    id: "trusted-voice",
    title: "Trusted Voice",
    categoryGroup: "specialty",
    categoryName: "Community",
    howToEarn: "Submit 5 verified reviews",
    reward: "💬 Verified Reviewer Badge & 5% Discount",
    tier: "Silver",
    maxProgress: 5,
    initialProgress: 4,
    iconBg: "bg-emerald-500/10 text-emerald-500",
  },
  {
    id: "beauty-ladder",
    title: "Glamour",
    categoryGroup: "beauty",
    categoryName: "Makeup & Hair Styling",
    howToEarn: "Reach 10 bookings with Makeup & Hair pros",
    reward: "✨ 10% Checkout Boost + Priority Slot",
    tier: "Silver",
    ladder: ["Fresh Face (3)", "Glamour (10)", "Muse (25)"],
    maxProgress: 10,
    initialProgress: 8,
    iconBg: "bg-pink-500/10 text-pink-500",
  },
  {
    id: "cleaning-ladder",
    title: "Kept",
    categoryGroup: "home",
    categoryName: "House Cleaning",
    howToEarn: "Reach 12 bookings with verified cleaners",
    reward: "🧹 Free Eco-Cleaning Upgrade",
    tier: "Silver",
    ladder: ["Tidy (4)", "Kept (12)", "Immaculate (30)"],
    maxProgress: 12,
    initialProgress: 12,
    iconBg: "bg-sky-500/10 text-sky-500",
  },
  {
    id: "trade-ladder",
    title: "Secured",
    categoryGroup: "home",
    categoryName: "Plumbing & Electrical",
    howToEarn: "Reach 10 bookings with licensed trade pros",
    reward: "⚡ 1-Hour Emergency Priority",
    tier: "Silver",
    ladder: ["Sorted (3)", "Secured (10)", "Trusted Hand (25)"],
    maxProgress: 10,
    initialProgress: 7,
    iconBg: "bg-orange-500/10 text-orange-500",
  },
  {
    id: "fitness-ladder",
    title: "In Rhythm",
    categoryGroup: "fitness",
    categoryName: "Personal Training",
    howToEarn: "Reach 10 sessions booked",
    reward: "💪 Custom Workout Log Badge",
    tier: "Silver",
    ladder: ["First Step (3)", "In Rhythm (10)", "Transformed (25)"],
    maxProgress: 10,
    initialProgress: 6,
    iconBg: "bg-purple-500/10 text-purple-500",
  },
  {
    id: "nails-ladder",
    title: "Polished",
    categoryGroup: "beauty",
    categoryName: "Nail Technology",
    howToEarn: "Reach 10 nail bookings",
    reward: "💅 VIP Nail Salon Slot",
    tier: "Gold",
    ladder: ["Fresh Set (4)", "Polished (10)", "Connoisseur (25)"],
    maxProgress: 10,
    initialProgress: 3,
    iconBg: "bg-fuchsia-500/10 text-fuchsia-500",
  },
  {
    id: "vendor-ai",
    title: "AI Inner Circle",
    categoryGroup: "vendor",
    categoryName: "AI Assistant Booking",
    howToEarn: "Complete 10 AI services bookings with 1 vendor",
    reward: "🤖 Exclusive Vendor AI Concierge Badge",
    tier: "Gold",
    maxProgress: 10,
    initialProgress: 9,
    iconBg: "bg-cyan-500/10 text-cyan-500",
  },
  {
    id: "emergency-contact",
    title: "Emergency Contact",
    categoryGroup: "specialty",
    categoryName: "Plumbing Starter",
    howToEarn: "Book 3 plumbing emergency visits",
    reward: "🚨 Rapid Dispatch Badge",
    tier: "Bronze",
    maxProgress: 3,
    initialProgress: 3,
    iconBg: "bg-red-500/10 text-red-500",
  },
  {
    id: "clay-lens",
    title: "Clay Lens Circle",
    categoryGroup: "vendor",
    categoryName: "Clay Creations",
    howToEarn: "10 photography bookings with Clay Creations",
    reward: "📸 VIP Studio Rate & Lifetime Frame",
    tier: "Platinum",
    maxProgress: 10,
    initialProgress: 10,
    iconBg: "bg-yellow-500/10 text-yellow-500",
  },
];

const CATEGORY_TABS = [
  { id: "all", label: "All Trophies" },
  { id: "beauty", label: "Beauty & Style" },
  { id: "home", label: "Home & Trades" },
  { id: "fitness", label: "Fitness & Wellness" },
  { id: "specialty", label: "Specialty & Starter" },
  { id: "vendor", label: "Vendor Circles" },
];

export function MasteryFeature() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedTrophyId, setSelectedTrophyId] = useState<string>("beauty-ladder");
  const [progressState, setProgressState] = useState<Record<string, number>>(() => {
    const init: Record<string, number> = {};
    TROPHY_DATA.forEach((t) => {
      init[t.id] = t.initialProgress;
    });
    return init;
  });
  const [justUnlocked, setJustUnlocked] = useState<string | null>(null);

  const filteredTrophies = TROPHY_DATA.filter((t) =>
    activeTab === "all" ? true : t.categoryGroup === activeTab
  );

  const currentTrophy =
    TROPHY_DATA.find((t) => t.id === selectedTrophyId) || TROPHY_DATA[0];
  const currentProgress = progressState[currentTrophy.id] ?? currentTrophy.initialProgress;
  const isUnlocked = currentProgress >= currentTrophy.maxProgress;

  const handleSimulateProgress = () => {
    if (currentProgress < currentTrophy.maxProgress) {
      const next = currentProgress + 1;
      setProgressState((prev) => ({ ...prev, [currentTrophy.id]: next }));
      if (next >= currentTrophy.maxProgress) {
        setJustUnlocked(currentTrophy.title);
        setTimeout(() => setJustUnlocked(null), 3500);
      }
    }
  };

  const handleResetProgress = () => {
    setProgressState((prev) => ({
      ...prev,
      [currentTrophy.id]: Math.max(0, currentTrophy.initialProgress - 1),
    }));
  };

  return (
    <Section className="bg-b-paper py-20 md:py-32">
      {/* ── Header ── */}
      <Reveal className="max-w-3xl">
        <Eyebrow>Mastery & trophies</Eyebrow>
        <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-b-ink md:text-6xl leading-[1.08]">
          Good service earns its shine.
        </h2>
        <p className="mt-5 text-lg md:text-xl leading-relaxed text-b-ink-soft">
          Bouul turns service relationships into a gamified journey. Customers earn
          unique category badges, profile frames, and checkout discounts for booking
          consistently and rating verified pros.
        </p>
      </Reveal>

      {/* ── 4 Pillar Cards ── */}
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {masteryPillars.map((pillar, i) => (
          <Reveal key={pillar.title} delay={i * 0.08}>
            <div className="flex h-full flex-col gap-4 rounded-3xl border border-b-line bg-b-paper-raised p-6 transition-all duration-300 hover:shadow-[0_16px_40px_rgba(24,39,32,0.08)] hover:-translate-y-1">
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

      {/* ── Expanded Interactive Trophy Showcase ── */}
      <Reveal delay={0.2} className="mt-16">
        <div className="overflow-hidden rounded-[2.5rem] border border-b-line bg-b-paper-deep p-6 md:p-12 shadow-2xl">

          {/* Section Header Inside Showcase */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-b-line">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-b-green-deep">
                <Flame className="h-4 w-4" /> Live Interactive Trophy Simulator
              </div>
              <h3 className="mt-2 font-display text-3xl font-extrabold text-b-ink md:text-4xl">
                Explore Category Ladders & Unlock Perks
              </h3>
              <p className="mt-2 text-b-ink-soft text-base max-w-2xl">
                Tap any trophy below to simulate booking progress, view unlock criteria, and test real-time reward triggers.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {CATEGORY_TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-b-ink text-b-paper shadow-md"
                      : "bg-b-paper border border-b-line text-b-ink-soft hover:text-b-ink hover:border-b-ink/30"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Unlock Notification Toast Banner */}
          <AnimatePresence>
            {justUnlocked && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className="mt-6 flex items-center justify-between rounded-2xl bg-gradient-to-r from-amber-500 to-emerald-500 p-4 text-white shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-md">
                    <Crown className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-display font-extrabold text-base">
                      Trophy Unlocked: {justUnlocked}! 🏆
                    </div>
                    <div className="text-xs text-white/90">
                      Reward unlocked and added to your profile!
                    </div>
                  </div>
                </div>
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  Unlocked
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Grid: Interactive Trophy Grid + Detail Inspector */}
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_1fr]">

            {/* Left: Trophy Cards Grid */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {filteredTrophies.map((trophy) => {
                  const prog = progressState[trophy.id] ?? trophy.initialProgress;
                  const unlocked = prog >= trophy.maxProgress;
                  const isSelected = trophy.id === selectedTrophyId;

                  return (
                    <motion.div
                      key={trophy.id}
                      onClick={() => setSelectedTrophyId(trophy.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`relative flex flex-col justify-between rounded-2xl border p-5 cursor-pointer transition-all ${
                        isSelected
                          ? "border-b-green-deep bg-b-paper ring-2 ring-b-green/30 shadow-lg"
                          : "border-b-line bg-b-paper/60 hover:bg-b-paper hover:border-b-ink/20"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-bold ${trophy.iconBg}`}
                          >
                            {unlocked ? (
                              <Trophy className="h-5 w-5" />
                            ) : (
                              <Lock className="h-4 w-4 opacity-70" />
                            )}
                          </span>
                          <div>
                            <div className="font-display font-bold text-b-ink text-base">
                              {trophy.title}
                            </div>
                            <div className="text-[11px] font-semibold text-b-ink-faint">
                              {trophy.categoryName}
                            </div>
                          </div>
                        </div>

                        {/* Tier Pill */}
                        <span
                          className={`rounded-full px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider ${
                            trophy.tier === "Platinum"
                              ? "bg-purple-500/15 text-purple-600"
                              : trophy.tier === "Gold"
                              ? "bg-amber-500/15 text-amber-600"
                              : trophy.tier === "Silver"
                              ? "bg-slate-500/15 text-slate-700"
                              : "bg-amber-800/15 text-amber-800"
                          }`}
                        >
                          {trophy.tier}
                        </span>
                      </div>

                      {/* Mini Progress Line */}
                      <div className="mt-4">
                        <div className="flex items-center justify-between text-[11px] text-b-ink-faint font-mono mb-1.5">
                          <span>Progress</span>
                          <span className="font-semibold text-b-ink">
                            {prog} / {trophy.maxProgress}
                          </span>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-b-line">
                          <motion.div
                            className={`h-full rounded-full ${
                              unlocked ? "bg-b-green-deep" : "bg-amber-500"
                            }`}
                            initial={{ width: 0 }}
                            animate={{ width: `${(prog / trophy.maxProgress) * 100}%` }}
                            transition={{ duration: 0.5 }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right: Selected Trophy Inspector & Simulation Controls */}
            <div className="flex flex-col justify-between rounded-3xl border border-b-line bg-b-paper p-6 md:p-8 shadow-md">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${currentTrophy.iconBg}`}>
                      <Trophy className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-b-green-deep">
                        Trophy Detail
                      </div>
                      <h4 className="font-display text-2xl font-extrabold text-b-ink">
                        {currentTrophy.title}
                      </h4>
                    </div>
                  </div>
                  {isUnlocked ? (
                    <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
                      <CheckCircle2 className="h-4 w-4" /> Unlocked
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200">
                      <Lock className="h-3.5 w-3.5" /> Locked
                    </span>
                  )}
                </div>

                {/* Criteria Box */}
                <div className="rounded-2xl border border-b-line bg-b-paper-raised p-4 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-b-ink-faint">
                    How to Earn
                  </div>
                  <p className="text-sm font-medium text-b-ink leading-relaxed">
                    {currentTrophy.howToEarn}
                  </p>
                </div>

                {/* Reward Box */}
                <div className="rounded-2xl border border-b-line bg-b-paper-raised p-4 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-b-ink-faint">
                    Unlock Reward
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-b-green-deep">
                    <Sparkles className="h-4 w-4 shrink-0" />
                    {currentTrophy.reward}
                  </div>
                </div>

                {/* Category Progression Ladder (If present) */}
                {currentTrophy.ladder && (
                  <div className="space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-b-ink-faint">
                      Category Ladder
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      {currentTrophy.ladder.map((step, idx) => (
                        <React.Fragment key={step}>
                          <span
                            className={`rounded-xl px-3 py-1.5 text-xs font-bold ${
                              idx === 1
                                ? "bg-b-ink text-b-paper shadow-sm"
                                : "bg-b-paper-raised border border-b-line text-b-ink-soft"
                            }`}
                          >
                            {step}
                          </span>
                          {idx < currentTrophy.ladder!.length - 1 && (
                            <ChevronRight className="h-3.5 w-3.5 text-b-ink-faint" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}

                {/* Dynamic Unlock Progress Bar */}
                <div className="space-y-2 pt-2 border-t border-b-line">
                  <div className="flex items-center justify-between text-xs font-bold text-b-ink">
                    <span>Unlock Progression</span>
                    <span>
                      {currentProgress} / {currentTrophy.maxProgress} Bookings
                    </span>
                  </div>
                  <div className="h-3 w-full overflow-hidden rounded-full bg-b-line">
                    <motion.div
                      className={`h-full rounded-full ${
                        isUnlocked ? "bg-b-green-deep" : "bg-amber-500"
                      }`}
                      animate={{
                        width: `${(currentProgress / currentTrophy.maxProgress) * 100}%`,
                      }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </div>
              </div>

              {/* Simulation Action Controls */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleSimulateProgress}
                  disabled={isUnlocked}
                  className={`flex-1 flex items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-xs font-bold transition-all cursor-pointer ${
                    isUnlocked
                      ? "bg-emerald-100 text-emerald-700 cursor-not-allowed opacity-80"
                      : "bg-b-ink text-b-paper hover:bg-b-forest shadow-md active:scale-95"
                  }`}
                >
                  <Zap className="h-4 w-4" />
                  {isUnlocked ? "Trophy Fully Unlocked!" : "+1 Simulate Booking"}
                </button>
                {isUnlocked && (
                  <button
                    onClick={handleResetProgress}
                    className="rounded-2xl border border-b-line bg-b-paper-raised px-4 py-3.5 text-xs font-semibold text-b-ink-soft hover:text-b-ink hover:bg-b-paper cursor-pointer"
                  >
                    Reset
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Hero SVG Showcase Container */}
          <div className="mt-12 rounded-3xl border border-dashed border-b-sun/40 bg-b-sun-soft/40 p-6 md:p-10">
            <div className="grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-b-green-deep" />
                  <span className="font-display text-lg font-bold text-b-ink">
                    Trophies are earned, not bought
                  </span>
                </div>
                <p className="b-body-sm leading-relaxed text-b-ink-soft max-w-xl">
                  Every trophy is tied to verifiable actions — completed bookings, verified
                  reviews, and maintained reliability scores. They can&apos;t be gamed or bought.
                  What you see on a Bouul profile is authentic proof of craft.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-b-ink">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4 text-b-green-deep" /> Verifiable on-chain logs
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4 text-b-green-deep" /> Tiered discount rewards
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/frame-124409-trophies.svg"
                  alt="Trophies mastered showcase mockup"
                  className="w-full max-w-[340px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

        </div>
      </Reveal>
    </Section>
  );
}

