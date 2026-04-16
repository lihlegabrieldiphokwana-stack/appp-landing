"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Live activity feed ───────────────────────────────────────────────────────
const ACTIVITIES = [
  { avatar: "T", name: "Themba B.", action: "booked a DJ in Sandton", time: "just now", color: "bg-blue-500" },
  { avatar: "L", name: "Lerato P.", action: "left 5★ for Marco T.", time: "1m ago", color: "bg-pink-500" },
  { avatar: "Z", name: "Zinhle's Studio", action: "posted a new reel — 847 views", time: "2m ago", color: "bg-purple-500" },
  { avatar: "A", name: "Amara N.", action: "referred 3 friends this week", time: "4m ago", color: "bg-emerald-500" },
  { avatar: "S", name: "Sipho M.", action: "completed his 500th booking", time: "5m ago", color: "bg-yellow-500" },
  { avatar: "K", name: "Kagiso T.", action: "is live — 4km from you", time: "live", color: "bg-red-500" },
  { avatar: "N", name: "Naledi C.", action: "followed Reza Hair Studio", time: "7m ago", color: "bg-teal-500" },
  { avatar: "D", name: "Dineo M.", action: "booked a cleaner in Rosebank", time: "9m ago", color: "bg-orange-500" },
];

const VISIBLE = 4; // how many notifications show at once

const ActivityFeed = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setOffset((o) => (o + 1) % ACTIVITIES.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  const visible = Array.from({ length: VISIBLE }, (_, i) =>
    ACTIVITIES[(offset + i) % ACTIVITIES.length]
  );

  return (
    <div className="flex flex-col gap-2.5 w-full max-w-sm">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
        <span className="text-neutral-500 text-xs uppercase tracking-widest">Live in your city</span>
      </div>
      <AnimatePresence mode="popLayout">
        {visible.map((item, i) => (
          <motion.div
            key={item.name + item.action}
            layout
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: i === 0 ? 1 : 0.6 + i * 0.05, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex items-center gap-3 bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3"
          >
            <div className={`w-8 h-8 rounded-full ${item.color} flex items-center justify-center flex-shrink-0`}>
              <span className="text-white text-xs font-bold">{item.avatar}</span>
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-white text-xs font-medium">{item.name} </span>
              <span className="text-neutral-500 text-xs">{item.action}</span>
            </div>
            <span className={`text-xs flex-shrink-0 ${item.time === "live" ? "text-red-400 font-medium" : "text-neutral-600"}`}>
              {item.time}
            </span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

// ─── Social pillar cards ──────────────────────────────────────────────────────
const pillars = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: "FOLLOW & DISCOVER",
    headline: "See the work. Follow the pro.",
    body: "Browse short-form video from professionals in your city. Follow the ones whose craft speaks to you. Get notified when they're available near you.",
    stat: "Growing",
    statLabel: "video feeds from professionals",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    label: "VERIFIED REVIEWS",
    headline: "Reviews only bookers can leave.",
    body: "Every review on Bouul is tied to a completed booking. That keeps the feedback grounded in real service experiences.",
    stat: "Tied",
    statLabel: "to completed bookings",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    label: "REFER & EARN",
    headline: "Your network. Your rewards.",
    body: "Refer friends to Bouul and earn credits when they complete a booking. The more your circle uses Bouul, the more everyone can save.",
    stat: "Credits",
    statLabel: "for successful referrals",
  },
];

// ─── Main export ──────────────────────────────────────────────────────────────
export const SocialMechanics = () => {
  return (
    <section className="py-24 md:py-32 bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
            COMMUNITY
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-4 max-w-3xl">
            The city is booking.{" "}
            <span className="text-neutral-500">The signals move with it.</span>
          </h2>
          <p className="text-neutral-500 text-lg max-w-xl">
            Bouul is more than a marketplace. It uses follows, reviews, and referrals as discovery signals so the experience gets more useful over time.
          </p>
        </motion.div>

        {/* Live feed + pillars row */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start mb-20">

          {/* Left — live feed */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="flex-shrink-0 w-full lg:w-auto"
          >
            <ActivityFeed />
          </motion.div>

          {/* Right — three pillars */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-5">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 flex flex-col gap-4"
              >
                <div className="text-emerald-400">{pillar.icon}</div>
                <div className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
                  {pillar.label}
                </div>
                <h3 className="text-white font-semibold text-lg leading-snug">
                  {pillar.headline}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed flex-1">
                  {pillar.body}
                </p>
                <div className="pt-3 border-t border-neutral-800">
                  <div className="text-2xl font-bold text-white">{pillar.stat}</div>
                  <div className="text-neutral-600 text-xs mt-0.5">{pillar.statLabel}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Social proof ticker strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="border border-neutral-800 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex -space-x-2">
            {["bg-blue-500","bg-pink-500","bg-purple-500","bg-emerald-500","bg-yellow-500"].map((c, i) => (
              <div key={i} className={`w-9 h-9 rounded-full ${c} border-2 border-black flex items-center justify-center`}>
                <span className="text-white text-xs font-bold">{["T","L","Z","A","S"][i]}</span>
              </div>
            ))}
          </div>
          <p className="text-neutral-300 text-sm text-center sm:text-left">
            <span className="text-white font-semibold">5,000+ professionals</span> are active on Bouul.
            Followed, reviewed, and re-booked by real customers over time.
          </p>
          <a
            href="/download"
            className="flex-shrink-0 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-full text-sm transition-colors"
          >
            Join them
          </a>
        </motion.div>
      </div>
    </section>
  );
};
