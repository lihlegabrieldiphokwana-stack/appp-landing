import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, CreditCard, Receipt, CheckCircle2, ArrowLeft, ArrowRight, Sparkles, Scale, RefreshCw } from "lucide-react";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import { Section, Eyebrow, Reveal } from "@/components/redesign/primitives";

export const metadata = {
  title: "Customer Booking Protection & Payments | Bouul",
  description: "Learn how Bouul 100% digital escrow protects customer funds, guarantees money-back safety, and enables cashless service booking.",
};

export default function PaymentsForUsersPage() {
  return (
    <main className="min-h-screen bg-b-paper font-body text-b-ink">
      <RedesignNav />
      <div className="pt-28 pb-20">
        <Section id="payments-users">
          <Reveal>
            <Link
              href="/payments"
              className="inline-flex items-center gap-2 text-xs font-bold text-b-ink-soft hover:text-b-ink mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Escrow & Payouts</span>
            </Link>
            <div className="max-w-3xl">
              <Eyebrow tone="green">For Customers</Eyebrow>
              <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-b-ink sm:text-5xl">
                Pay Safely. Sign Off Work. Never Book Blind.
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-b-ink-soft">
                When you book on Bouul, your money doesn&apos;t go straight into a contractor&apos;s pocket — it rests safely in neutral digital escrow. Funds are released only after you sign off that the job is complete and satisfactory.
              </p>
            </div>
          </Reveal>

          {/* Customer Pillars */}
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <Reveal delay={0.05}>
              <div className="rounded-3xl border border-b-line bg-b-paper-raised p-6 space-y-4 shadow-xs">
                <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 text-b-green-deep flex items-center justify-center">
                  <Lock className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-b-ink text-xl">100% Money-Back Lock</h3>
                <p className="text-xs text-b-ink-soft leading-relaxed">
                  If a contractor fails to show up or work is abandoned, your deposit is instantly refunded to your bank account without hassle.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-b-line bg-b-paper-raised p-6 space-y-4 shadow-xs">
                <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 text-b-green-deep flex items-center justify-center">
                  <CreditCard className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-b-ink text-xl">Cashless & Transparent</h3>
                <p className="text-xs text-b-ink-soft leading-relaxed">
                  No awkward cash hand-offs or surprise price increases mid-job. Pay via Instant EFT, Apple Pay, Capitec Pay, or Credit/Debit Card.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-3xl border border-b-line bg-b-paper-raised p-6 space-y-4 shadow-xs">
                <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 text-b-green-deep flex items-center justify-center">
                  <Receipt className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-b-ink text-xl">Milestone & Invoicing</h3>
                <p className="text-xs text-b-ink-soft leading-relaxed">
                  For large home builds or event staging, split payments into milestones. Get automated PDF tax receipts after every completed stage.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Quick FAQ / Action Box */}
          <Reveal delay={0.2} className="mt-14">
            <div className="rounded-3xl border border-b-line bg-b-paper-deep p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-display text-2xl font-bold text-b-ink">Have questions about a recent booking payment?</h3>
                <p className="mt-1 text-xs text-b-ink-soft">
                  Check our refund guidelines or open a dispute case with photo evidence.
                </p>
              </div>
              <div className="flex shrink-0 gap-3">
                <Link
                  href="/payments/refunds-and-disputes"
                  className="rounded-full bg-b-ink px-5 py-2.5 text-xs font-bold text-b-paper hover:bg-b-forest transition-colors"
                >
                  Refund Policy
                </Link>
                <Link
                  href="/faq"
                  className="rounded-full border border-b-line bg-b-paper px-5 py-2.5 text-xs font-bold text-b-ink hover:bg-b-paper-raised transition-colors"
                >
                  Customer FAQ
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
