import React from "react";
import Link from "next/link";
import { ShieldCheck, RefreshCw, AlertTriangle, CheckCircle2, ArrowLeft, ArrowRight, FileText, Scale } from "lucide-react";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import { Section, Eyebrow, Reveal } from "@/components/redesign/primitives";

export const metadata = {
  title: "Refunds & Disputes Policy | Bouul Payments",
  description: "Learn how Bouul handles digital escrow refunds, dispute resolution, milestone sign-offs, and fair mediation for customers and vendors.",
};

export default function RefundsAndDisputesPage() {
  return (
    <main className="min-h-screen bg-b-paper font-body text-b-ink">
      <RedesignNav />
      <div className="pt-28 pb-20">
        <Section id="refunds-disputes">
          <Reveal>
            <Link
              href="/payments"
              className="inline-flex items-center gap-2 text-xs font-bold text-b-ink-soft hover:text-b-ink mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Escrow & Payouts</span>
            </Link>
            <div className="max-w-3xl">
              <Eyebrow tone="green">Dispute & Refund Architecture</Eyebrow>
              <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-b-ink sm:text-5xl">
                Refunds & Dispute Protection
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-b-ink-soft">
                Bouul holds booking deposits safely in neutral digital escrow until work is signed off. If issues arise, our automated resolution and fair mediation rules protect both customers and service pros.
              </p>
            </div>
          </Reveal>

          {/* 4 Step Resolution Framework */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Reveal delay={0.05}>
              <div className="flex h-full flex-col justify-between rounded-3xl border border-b-line bg-b-paper-raised p-6 shadow-xs">
                <div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-b-sun-soft font-price font-bold text-b-ink text-sm">01</span>
                  <h3 className="mt-4 font-display font-bold text-b-ink text-lg">Escrow Hold</h3>
                  <p className="mt-2 text-xs text-b-ink-soft leading-relaxed">
                    Funds are deposited by the customer upfront and locked safely. Neither party can unilaterally drain the escrow without job sign-off.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex h-full flex-col justify-between rounded-3xl border border-b-line bg-b-paper-raised p-6 shadow-xs">
                <div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-b-sun-soft font-price font-bold text-b-ink text-sm">02</span>
                  <h3 className="mt-4 font-display font-bold text-b-ink text-lg">Direct Chat Fix</h3>
                  <p className="mt-2 text-xs text-b-ink-soft leading-relaxed">
                    95% of minor issues are resolved directly between customer and vendor in Zola AI chat with photo evidence and extra slot adjustments.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex h-full flex-col justify-between rounded-3xl border border-b-line bg-b-paper-raised p-6 shadow-xs">
                <div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-b-sun-soft font-price font-bold text-b-ink text-sm">03</span>
                  <h3 className="mt-4 font-display font-bold text-b-ink text-lg">Formal Dispute Case</h3>
                  <p className="mt-2 text-xs text-b-ink-soft leading-relaxed">
                    If work isn&apos;t completed to scope, either party opens a formal dispute ticket with photo proofs, timestamps, and job brief.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex h-full flex-col justify-between rounded-3xl border border-b-line bg-b-paper-raised p-6 shadow-xs">
                <div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-b-sun-soft font-price font-bold text-b-ink text-sm">04</span>
                  <h3 className="mt-4 font-display font-bold text-b-ink text-lg">Fair Settlement</h3>
                  <p className="mt-2 text-xs text-b-ink-soft leading-relaxed">
                    Bouul&apos;s mediation team reviews the job trail and authorizes full refund, partial payout, or remedial visit sign-off.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Refund Rules Matrix */}
          <Reveal delay={0.25} className="mt-14">
            <div className="rounded-3xl border border-b-line bg-b-paper-deep p-8 md:p-10">
              <h2 className="font-display text-2xl font-bold text-b-ink mb-6">
                Refund Guidelines & Timelines
              </h2>
              <div className="space-y-4 text-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-b-paper border border-b-line">
                  <div>
                    <p className="font-bold text-b-ink text-sm">Cancellation prior to 24 hours of job</p>
                    <p className="text-b-ink-soft">100% full refund returned automatically to original payment method.</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-emerald-500/10 px-3 py-1 font-bold text-b-green-deep">Instant Refund</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-b-paper border border-b-line">
                  <div>
                    <p className="font-bold text-b-ink text-sm">Vendor No-Show or Incomplete Service</p>
                    <p className="text-b-ink-soft">100% escrow refund guaranteed + priority rebooking voucher.</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-emerald-500/10 px-3 py-1 font-bold text-b-green-deep">Full Protection</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-b-paper border border-b-line">
                  <div>
                    <p className="font-bold text-b-ink text-sm">Scope Alteration / Partial Completion</p>
                    <p className="text-b-ink-soft">Milestone-proportioned partial refund based on agreed delivered tasks.</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-b-sun-soft px-3 py-1 font-bold text-b-ink">Pro-Rata Settlement</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 items-center justify-between pt-6 border-t border-b-line/60">
                <p className="text-xs text-b-ink-soft">
                  Need to open a dispute case for an active booking?
                </p>
                <Link
                  href="/disputes"
                  className="inline-flex items-center gap-2 rounded-full bg-b-ink px-5 py-2.5 text-xs font-bold text-b-paper transition-colors hover:bg-b-forest"
                >
                  <span>Open Dispute Portal</span>
                  <ArrowRight className="h-3.5 w-3.5" />
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
