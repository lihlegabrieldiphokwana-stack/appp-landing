"use client";
import React from "react";
import { motion } from "framer-motion";

const discoverySignals = [
  {
    name: "Rising Stars",
    description: "New services (≤30 days) with bookings already",
    benefit: "Surfaces emerging vendors before they're famous",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    name: "Trending Searches",
    description: "Matches what the platform is searching right now",
    benefit: "Bridges search intent → discovery",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    name: "Search Affinity",
    description: "Your own recent search terms → matching services",
    benefit: "Picks up where you left off",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    name: "Network Discovery",
    description: "Vendors similar to ones you have affinity with",
    benefit: "Social graph without needing a follows table",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    name: "Customers Also Booked",
    description: "Collaborative filtering from booking history",
    benefit: "Classic 'people like you' — purely data-driven",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM3 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 019.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
      </svg>
    ),
  },
  {
    name: "Recently Completed",
    description: "Services just finished at stores near your interests",
    benefit: "Live activity signal",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: "Social Proof",
    description: "High rating AND high weekly bookings combined",
    benefit: "Community validation, not just stars",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
];

const keystoneCards = [
  {
    title: "Multiple Titles",
    description: "Vendors upload 3-5 title variations per service. The system tests which wording resonates with each user.",
    stat: "3-5x",
    statLabel: "more title options per service",
  },
  {
    title: "Creative Combinations",
    description: "Each title pairs with each gallery image automatically. 3 titles × 4 images = 12 combinations tested in parallel.",
    stat: "12+",
    statLabel: "combinations tested per service",
  },
  {
    title: "Funnel Learning",
    description: "Tracks impression → view → intent → purchase. Learns which combination converts each individual user.",
    stat: "4-stage",
    statLabel: "conversion funnel tracking",
  },
];

export const ResonanceEngine = () => {
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
            RESONANCE™ DISCOVERY ENGINE
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-4 max-w-4xl">
            A marketplace that learns{" "}
            <span className="text-neutral-500">what you like.</span>
          </h2>
          <p className="text-neutral-500 text-lg max-w-2xl">
            Resonance is our multi-armed bandit discovery engine. It tests different content strategies
            for each user, learns what converts, and optimizes your feed in real-time. No two homepages are identical.
          </p>
        </motion.div>

        {/* 7 Discovery Signals Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-8">
            7 Social Discovery Signals
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {discoverySignals.map((signal, i) => (
              <motion.div
                key={signal.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 flex flex-col gap-3"
              >
                <div className="text-emerald-400">{signal.icon}</div>
                <div className="text-white font-semibold text-sm">{signal.name}</div>
                <div className="text-neutral-500 text-xs leading-relaxed">{signal.description}</div>
                <div className="text-neutral-400 text-xs font-medium border-t border-neutral-800 pt-2">
                  {signal.benefit}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How it works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
                  EPSILON-GREEDY ALGORITHM
                </div>
                <h3 className="text-3xl font-semibold text-white mb-6">
                  80% exploit.<br />
                  <span className="text-neutral-500">20% explore.</span>
                </h3>
                <p className="text-neutral-500 text-base leading-relaxed mb-6">
                  Every session, Resonance samples from the full pool of discovery strategies.
                  80% of the time it shows you what's worked before (exploitation).
                  20% of the time it tests something new (exploration).
                </p>
                <p className="text-neutral-500 text-base leading-relaxed">
                  This means every strategy gets tested over time, and your feed self-optimizes
                  without manual curation. The system learns what resonates with you — then shows you more of it.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 bg-black border border-neutral-800 rounded-xl p-5">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-400 font-bold text-sm">80%</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Exploitation</div>
                    <div className="text-neutral-500 text-xs">Show highest-CTR strategies for this user</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-black border border-neutral-800 rounded-xl p-5">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400 font-bold text-sm">20%</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Exploration</div>
                    <div className="text-neutral-500 text-xs">Random pick to test new strategies</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-black border border-neutral-800 rounded-xl p-5">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Continuous Learning</div>
                    <div className="text-neutral-500 text-xs">Impressions + engagements update CTR scores</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Keystone Discovery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-8">
            KEYSTONE DISCOVERY™
          </div>
          <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4 max-w-3xl">
            Vendors upload. The system tests.<br />
            <span className="text-neutral-500">No A/B setup required.</span>
          </h3>
          <p className="text-neutral-500 text-lg mb-12 max-w-2xl">
            Every service can have multiple titles and images. Resonance automatically cycles through
            all combinations, learning which title + image pairing converts each individual user.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {keystoneCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 flex flex-col gap-4"
              >
                <div className="text-4xl font-bold text-emerald-400">{card.stat}</div>
                <div className="text-white font-semibold text-lg">{card.title}</div>
                <p className="text-neutral-500 text-sm leading-relaxed flex-1">
                  {card.description}
                </p>
                <div className="text-neutral-600 text-xs font-medium border-t border-neutral-800 pt-3">
                  {card.statLabel}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
