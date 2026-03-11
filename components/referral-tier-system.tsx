"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ReferralTier {
  level: number;
  name: string;
  referrals: number;
  creditPerReferral: number;
  bonusCredit: number;
  benefits: string[];
  color: string;
  icon: string;
}

const referralTiers: ReferralTier[] = [
  {
    level: 1,
    name: "Starter",
    referrals: 0,
    creditPerReferral: 50,
    bonusCredit: 0,
    benefits: [
      "R50 credit per referral",
      "Standard support",
      "Basic analytics",
    ],
    color: "neutral",
    icon: "🌱",
  },
  {
    level: 2,
    name: "Bronze",
    referrals: 3,
    creditPerReferral: 60,
    bonusCredit: 100,
    benefits: [
      "R60 credit per referral",
      "R100 bonus at tier start",
      "Priority support",
      "Advanced analytics",
    ],
    color: "orange",
    icon: "🥉",
  },
  {
    level: 3,
    name: "Silver",
    referrals: 10,
    creditPerReferral: 75,
    bonusCredit: 300,
    benefits: [
      "R75 credit per referral",
      "R300 bonus at tier start",
      "Priority support",
      "Premium analytics",
      "Exclusive promotions",
    ],
    color: "gray",
    icon: "🥈",
  },
  {
    level: 4,
    name: "Gold",
    referrals: 25,
    creditPerReferral: 100,
    bonusCredit: 750,
    benefits: [
      "R100 credit per referral",
      "R750 bonus at tier start",
      "24/7 VIP support",
      "Full analytics suite",
      "Early access to features",
      "Exclusive events",
    ],
    color: "yellow",
    icon: "🥇",
  },
  {
    level: 5,
    name: "Platinum",
    referrals: 50,
    creditPerReferral: 150,
    bonusCredit: 2000,
    benefits: [
      "R150 credit per referral",
      "R2000 bonus at tier start",
      "Dedicated account manager",
      "Custom analytics",
      "Beta features access",
      "VIP events & networking",
      "Revenue sharing opportunities",
    ],
    color: "cyan",
    icon: "💎",
  },
];

interface ReferralTierSystemProps {
  currentReferrals?: number;
  compact?: boolean;
}

export const ReferralTierSystem: React.FC<ReferralTierSystemProps> = ({
  currentReferrals = 0,
  compact = false,
}) => {
  const [selectedTier, setSelectedTier] = useState<ReferralTier | null>(null);

  const currentTier = referralTiers.reduce((acc, tier) => {
    if (currentReferrals >= tier.referrals) return tier;
    return acc;
  }, referralTiers[0]);

  const nextTier = referralTiers.find(t => t.referrals > currentReferrals);
  const progressToNext = nextTier
    ? ((currentReferrals - currentTier.referrals) / (nextTier.referrals - currentTier.referrals)) * 100
    : 100;

  const totalEarned = referralTiers.reduce((acc, tier) => {
    if (currentReferrals >= tier.referrals) {
      return acc + tier.bonusCredit;
    }
    return acc;
  }, 0) + (currentReferrals * currentTier.creditPerReferral);

  if (compact) {
    return (
      <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-neutral-400 text-xs mb-1">Your Tier</div>
            <div className="text-white font-semibold flex items-center gap-2">
              <span className="text-2xl">{currentTier.icon}</span>
              {currentTier.name}
            </div>
          </div>
          <div className="text-right">
            <div className="text-neutral-400 text-xs mb-1">Total Earned</div>
            <div className="text-emerald-400 font-bold text-xl">R{totalEarned}</div>
          </div>
        </div>
        
        {nextTier && (
          <div>
            <div className="flex justify-between text-xs mb-2">
              <span className="text-neutral-400">
                {currentReferrals} / {nextTier.referrals} referrals
              </span>
              <span className="text-emerald-400">
                {Math.round(progressToNext)}% to {nextTier.name}
              </span>
            </div>
            <div className="h-2 bg-neutral-900 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progressToNext}%` }}
                className="h-full bg-emerald-500 rounded-full"
              />
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-neutral-950 border border-neutral-800 rounded-3xl p-8">
      <div className="mb-8">
        <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-2">
          REFERRAL PROGRAM
        </div>
        <h2 className="text-3xl font-semibold text-white mb-2">
          Earn up to R150 per referral
        </h2>
        <p className="text-neutral-500 text-lg">
          The more you refer, the more you earn. Unlock higher tiers and bigger rewards.
        </p>
      </div>

      {/* Current Status */}
      <div className="bg-neutral-900 rounded-2xl p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="text-5xl">{currentTier.icon}</div>
            <div>
              <div className="text-neutral-400 text-sm mb-1">Current Tier</div>
              <div className="text-white font-semibold text-2xl">{currentTier.name}</div>
              <div className="text-emerald-400 font-medium">
                R{currentTier.creditPerReferral} per referral
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-neutral-400 text-sm mb-1">Total Earned</div>
            <div className="text-emerald-400 font-bold text-4xl">R{totalEarned}</div>
            <div className="text-neutral-500 text-xs mt-1">
              {currentReferrals} referrals
            </div>
          </div>
        </div>

        {nextTier && (
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-neutral-400">
                {nextTier.referrals - currentReferrals} more referrals to {nextTier.name}
              </span>
              <span className="text-emerald-400">
                {Math.round(progressToNext)}% complete
              </span>
            </div>
            <div className="h-3 bg-neutral-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progressToNext}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full"
              />
            </div>
          </div>
        )}
      </div>

      {/* Tier Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {referralTiers.map((tier, i) => {
          const isUnlocked = currentReferrals >= tier.referrals;
          const isCurrent = tier.level === currentTier.level;
          const isNext = tier.referrals === nextTier?.referrals;

          return (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedTier(tier)}
              className={cn(
                "bg-neutral-900 border rounded-2xl p-5 cursor-pointer transition-all hover:scale-105",
                isCurrent && "border-emerald-500 bg-emerald-500/5",
                isNext && "border-emerald-500/50",
                !isUnlocked && "opacity-60"
              )}
            >
              <div className="text-3xl mb-3">{tier.icon}</div>
              <div className={cn(
                "font-semibold mb-2",
                isUnlocked ? "text-white" : "text-neutral-500"
              )}>
                {tier.name}
              </div>
              <div className="text-emerald-400 font-bold text-lg mb-2">
                R{tier.creditPerReferral}
              </div>
              <div className="text-neutral-500 text-xs mb-3">
                per referral
              </div>
              <div className="text-neutral-600 text-xs">
                {tier.referrals === 0 ? "Start here" : `${tier.referrals}+ referrals`}
              </div>
              {isUnlocked && (
                <div className="mt-3 pt-3 border-t border-neutral-800">
                  <div className="text-emerald-400 text-xs font-medium">
                    ✓ Unlocked
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Benefits Comparison */}
      <div className="bg-neutral-900 rounded-2xl p-6">
        <h3 className="text-white font-semibold mb-4">Tier Benefits</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-800">
                <th className="text-left p-3 text-neutral-400 font-medium text-sm">Benefit</th>
                {referralTiers.map(tier => (
                  <th key={tier.name} className="p-3 text-center min-w-[100px]">
                    <div className="text-lg mb-1">{tier.icon}</div>
                    <div className={cn(
                      "text-sm font-medium",
                      currentReferrals >= tier.referrals ? "text-white" : "text-neutral-600"
                    )}>
                      {tier.name}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {["Credit per Referral", "Bonus Credit", "Support Level", "Analytics", "Exclusive Benefits"].map((benefit, i) => (
                <tr key={benefit} className={cn(
                  "border-b border-neutral-800",
                  i % 2 === 0 && "bg-neutral-800/30"
                )}>
                  <td className="p-3 text-neutral-400 text-sm">{benefit}</td>
                  {referralTiers.map(tier => (
                    <td key={tier.name} className="p-3 text-center">
                      <span className={cn(
                        "text-sm",
                        currentReferrals >= tier.referrals ? "text-white" : "text-neutral-600"
                      )}>
                        {tier.creditPerReferral === tier.creditPerReferral && benefit === "Credit per Referral" && `R${tier.creditPerReferral}`}
                        {benefit === "Bonus Credit" && tier.bonusCredit > 0 && `R${tier.bonusCredit}`}
                        {benefit === "Bonus Credit" && tier.bonusCredit === 0 && "-"}
                        {benefit === "Support Level" && tier.level === 1 && "Standard"}
                        {benefit === "Support Level" && tier.level === 2 && "Priority"}
                        {benefit === "Support Level" && tier.level === 3 && "Priority"}
                        {benefit === "Support Level" && tier.level === 4 && "24/7 VIP"}
                        {benefit === "Support Level" && tier.level === 5 && "Dedicated"}
                        {benefit === "Analytics" && tier.level === 1 && "Basic"}
                        {benefit === "Analytics" && tier.level === 2 && "Advanced"}
                        {benefit === "Analytics" && tier.level >= 3 && "Premium"}
                        {benefit === "Exclusive Benefits" && tier.level < 3 && "-"}
                        {benefit === "Exclusive Benefits" && tier.level >= 3 && "✓"}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-8 text-center">
        <button className="px-10 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-full transition-colors">
          Start Referring Now
        </button>
        <p className="text-neutral-500 text-sm mt-4">
          Share your unique referral link and start earning credits today
        </p>
      </div>
    </div>
  );
};
