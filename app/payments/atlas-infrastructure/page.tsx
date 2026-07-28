import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, ArrowLeft, ArrowRight, Server, Key, EyeOff } from "lucide-react";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import { Section, Eyebrow, Reveal } from "@/components/redesign/primitives";

export const metadata = {
  title: "Atlas Financial Security Infrastructure | Bouul Payments",
  description: "Learn about Bouul's Atlas infrastructure — PCI-DSS Level 1 compliance, bank-grade AES-256 vaulting, and POPIA privacy safeguards.",
};

export default function AtlasInfrastructurePage() {
  return (
    <main className="min-h-screen bg-b-paper font-body text-b-ink">
      <RedesignNav />
      <div className="pt-28 pb-20">
        <Section id="atlas-security">
          <Reveal>
            <Link
              href="/payments"
              className="inline-flex items-center gap-2 text-xs font-bold text-b-ink-soft hover:text-b-ink mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Escrow & Payouts</span>
            </Link>
            <div className="max-w-3xl">
              <Eyebrow tone="green">Security Architecture</Eyebrow>
              <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-b-ink sm:text-5xl">
                Atlas Financial Security & Privacy
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-b-ink-soft">
                Atlas is Bouul&apos;s isolated banking vault. All customer card tokens, bank account details, and escrow ledger balances are stored inside hardened, PCI-DSS compliant hardware security modules.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <Reveal delay={0.05}>
              <div className="rounded-3xl border border-b-line bg-b-paper-raised p-6 space-y-3">
                <div className="h-10 w-10 rounded-xl bg-b-sun-soft flex items-center justify-center text-b-ink font-bold">
                  <Lock className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold text-b-ink text-lg">AES-256 Vaulting</h3>
                <p className="text-xs text-b-ink-soft leading-relaxed">
                  Banking details and identity documents are encrypted both in transit and at rest using bank-standard encryption keys.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-b-line bg-b-paper-raised p-6 space-y-3">
                <div className="h-10 w-10 rounded-xl bg-b-sun-soft flex items-center justify-center text-b-ink font-bold">
                  <Server className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold text-b-ink text-lg">PCI-DSS Level 1</h3>
                <p className="text-xs text-b-ink-soft leading-relaxed">
                  Highest level of payment card industry data security standard compliance, monitored 24/7.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-3xl border border-b-line bg-b-paper-raised p-6 space-y-3">
                <div className="h-10 w-10 rounded-xl bg-b-sun-soft flex items-center justify-center text-b-ink font-bold">
                  <EyeOff className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold text-b-ink text-lg">POPIA Privacy Safeguards</h3>
                <p className="text-xs text-b-ink-soft leading-relaxed">
                  Strict access control compliance under the Protection of Personal Information Act. Your banking data is never shared with third-party advertisers.
                </p>
              </div>
            </Reveal>
          </div>
        </Section>
      </div>
      <RedesignFooter />
    </main>
  );
}
