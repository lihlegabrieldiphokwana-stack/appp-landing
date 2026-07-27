"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgeCheck,
  UserCheck,
  Building2,
  FileCheck2,
  CheckCircle2,
  Award,
  Lock,
} from "lucide-react";
import { Section, Eyebrow, Reveal } from "./primitives";

const VERIFICATION_BADGES = [
  {
    title: "SA National ID & Facial Biometrics",
    desc: "Every merchant owner & dispatched employee undergoes real-time SA Home Affairs ID lookup and facial liveness match.",
    icon: UserCheck,
  },
  {
    title: "CIPC Business Registration",
    desc: "Company registration documents, active tax clearance, and physical address proofs are audited before listing.",
    icon: Building2,
  },
  {
    title: "PIRB & Wireman Trade Licenses",
    desc: "Plumbers (PIRB) and electricians (Wireman's License / Department of Labour) submit active license numbers verified with trade boards.",
    icon: Award,
  },
  {
    title: "PSIRA Security Accreditation",
    desc: "Security installers and locksmiths undergo PSIRA criminal record vetting and certificate audits.",
    icon: ShieldCheck,
  },
];

export function VerificationHub() {
  return (
    <div className="relative pt-24 pb-20">
      <Section id="verification-hero">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Eyebrow tone="green" className="mb-3">
              Pro Identity & Safety Audits
            </Eyebrow>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-b-ink mb-4">
              Verified Professionals. <br />
              <span className="text-b-green-deep">Total Peace of Mind.</span>
            </h1>
            <p className="text-lg text-b-ink-soft leading-relaxed">
              Every pro on Bouul is background-checked, trade-licensed, and biometrically verified before stepping into a customer&apos;s home.
            </p>
          </div>
        </Reveal>

        {/* 4 Verification Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {VERIFICATION_BADGES.map((b, idx) => {
            const Icon = b.icon;
            return (
              <Reveal key={b.title} delay={idx * 0.1}>
                <div className="p-8 rounded-3xl bg-b-paper-raised border border-b-line shadow-sm space-y-4">
                  <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 text-b-green-deep flex items-center justify-center font-bold">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-b-ink">{b.title}</h3>
                  <p className="text-xs text-b-ink-soft leading-relaxed">{b.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Public Badge Callout */}
        <Reveal>
          <div className="max-w-4xl mx-auto rounded-3xl border border-b-line bg-b-paper-raised p-8 md:p-12 shadow-xl text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-extrabold text-b-green-deep border border-emerald-500/20">
              <BadgeCheck className="h-4 w-4" />
              <span>Verified Checkmark Guarantee</span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-b-ink">
              What the Green Badge Means for Customers
            </h2>
            <p className="text-xs text-b-ink-soft max-w-xl mx-auto leading-relaxed">
              When you see the green shield icon on a vendor storefront ($handle), it guarantees their identity, licenses, insurance, and bank details have passed Bouul verification.
            </p>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}
