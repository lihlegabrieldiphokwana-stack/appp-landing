import React from "react";
import Link from "next/link";
import { Zap, Lock, Percent, Calculator, FileText, CheckCircle2, ArrowLeft, ArrowRight, Sparkles, Building2 } from "lucide-react";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import { Section, Eyebrow, Reveal } from "@/components/redesign/primitives";

export const metadata = {
  title: "Vendor Payouts, Fees & Business Earnings | Bouul",
  description: "Learn how Bouul offers instant SA bank payouts, guarantees 0% unpaid contractor invoices, flat 8% fees, and automated tax reporting.",
};

export default function PaymentsForVendorsPage() {
  return (
    <main className="min-h-screen bg-b-paper font-body text-b-ink">
      <RedesignNav />
      <div className="pt-28 pb-20">
        <Section id="payments-vendors">
          <Reveal>
            <Link
              href="/payments"
              className="inline-flex items-center gap-2 text-xs font-bold text-b-ink-soft hover:text-b-ink mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Escrow & Payouts</span>
            </Link>
            <div className="max-w-3xl">
              <Eyebrow tone="green">For Professionals & Pros</Eyebrow>
              <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-b-ink sm:text-5xl">
                Guaranteed Payouts. Instant Settlement. Flat 8% Fee.
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-b-ink-soft">
                Never chase an unpaid invoice or waste money buying lead credits again. Bouul locks customer funds in neutral escrow upon booking and transfers your earnings directly to your SA bank account the moment work is signed off.
              </p>
            </div>
          </Reveal>

          {/* Vendor Pillars */}
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <Reveal delay={0.05}>
              <div className="rounded-3xl border border-b-line bg-b-paper-raised p-6 space-y-4 shadow-xs">
                <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 text-b-green-deep flex items-center justify-center">
                  <Lock className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-b-ink text-xl">Zero Unpaid Invoices</h3>
                <p className="text-xs text-b-ink-soft leading-relaxed">
                  100% deposit locked upfront before you dispatch team members or purchase job materials. Complete financial certainty.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-b-line bg-b-paper-raised p-6 space-y-4 shadow-xs">
                <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 text-b-green-deep flex items-center justify-center">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-b-ink text-xl">Instant Bank Settlement</h3>
                <p className="text-xs text-b-ink-soft leading-relaxed">
                  Funds settle via Real-Time Clearing (RTC) into FNB, Standard Bank, Capitec, Nedbank, Absa, TymeBank, Discovery, or Investec.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-3xl border border-b-line bg-b-paper-raised p-6 space-y-4 shadow-xs">
                <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 text-b-green-deep flex items-center justify-center">
                  <Percent className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-b-ink text-xl">Flat 8% Commission</h3>
                <p className="text-xs text-b-ink-soft leading-relaxed">
                  No pay-per-lead charges or credit pack subscriptions. Keep 92% of your hard-earned revenue on every completed job.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Business Tools Links */}
          <Reveal delay={0.2} className="mt-14">
            <div className="rounded-3xl border border-b-line bg-b-paper-deep p-8 md:p-10">
              <h2 className="font-display text-2xl font-bold text-b-ink mb-4">Merchant Accounting & Tax OS</h2>
              <p className="text-xs text-b-ink-soft mb-6 max-w-2xl">
                Bouul automatically compiles all gross revenues, commission fees, and VAT line items for annual tax reporting and accounting sync.
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                <Link
                  href="/payments/taxes-and-1099"
                  className="p-4 rounded-2xl bg-b-paper border border-b-line hover:border-b-green-deep/40 transition-colors"
                >
                  <p className="font-bold text-b-ink text-sm">Tax & 1099 / SARS</p>
                  <p className="mt-1 text-[11px] text-b-ink-soft">One-click annual tax exports for eFiling.</p>
                </Link>

                <Link
                  href="/payments/billing-and-invoices"
                  className="p-4 rounded-2xl bg-b-paper border border-b-line hover:border-b-green-deep/40 transition-colors"
                >
                  <p className="font-bold text-b-ink text-sm">PDF Tax Invoicing</p>
                  <p className="mt-1 text-[11px] text-b-ink-soft">Custom CIPC & VAT registration receipts.</p>
                </Link>

                <Link
                  href="/payments/connect-and-integrations"
                  className="p-4 rounded-2xl bg-b-paper border border-b-line hover:border-b-green-deep/40 transition-colors"
                >
                  <p className="font-bold text-b-ink text-sm">Xero & Sage Sync</p>
                  <p className="mt-1 text-[11px] text-b-ink-soft">Direct ledger sync & REST webhooks.</p>
                </Link>
              </div>
            </div>
          </Reveal>
        </Section>
      </div>
      <RedesignFooter />
    </main>
  );
}
