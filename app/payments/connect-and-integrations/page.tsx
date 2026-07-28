import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Zap, Code, ShieldCheck, Database, Layers, CheckCircle2 } from "lucide-react";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import { Section, Eyebrow, Reveal } from "@/components/redesign/primitives";

export const metadata = {
  title: "Bouul Connect & Third-Party Integrations | Payments Architecture",
  description: "Connect Bouul escrow payment rails with accounting software like Xero, Sage, and QuickBooks, plus custom REST webhooks.",
};

export default function ConnectAndIntegrationsPage() {
  return (
    <main className="min-h-screen bg-b-paper font-body text-b-ink">
      <RedesignNav />
      <div className="pt-28 pb-20">
        <Section id="connect-integrations">
          <Reveal>
            <Link
              href="/payments"
              className="inline-flex items-center gap-2 text-xs font-bold text-b-ink-soft hover:text-b-ink mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Escrow & Payouts</span>
            </Link>
            <div className="max-w-3xl">
              <Eyebrow tone="green">Merchant API & Rails</Eyebrow>
              <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-b-ink sm:text-5xl">
                Bouul Connect & Third-Party Integrations
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-b-ink-soft">
                Integrate Bouul&apos;s digital escrow payment infrastructure directly into your existing bookkeeping stack, POS terminals, and accounting software.
              </p>
            </div>
          </Reveal>

          {/* Integrations Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <Reveal delay={0.05}>
              <div className="rounded-3xl border border-b-line bg-b-paper-raised p-6 space-y-3">
                <div className="h-10 w-10 rounded-xl bg-b-sun-soft flex items-center justify-center text-b-ink font-bold">
                  <Database className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold text-b-ink text-lg">Accounting Sync</h3>
                <p className="text-xs text-b-ink-soft leading-relaxed">
                  Automatic two-way sync with Xero, Sage accounting, and QuickBooks Online for seamless ledger reconciliation.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-b-line bg-b-paper-raised p-6 space-y-3">
                <div className="h-10 w-10 rounded-xl bg-b-sun-soft flex items-center justify-center text-b-ink font-bold">
                  <Code className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold text-b-ink text-lg">REST Webhooks API</h3>
                <p className="text-xs text-b-ink-soft leading-relaxed">
                  Receive real-time webhooks on event triggers: `escrow.locked`, `job.signed_off`, `payout.settled`.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-3xl border border-b-line bg-b-paper-raised p-6 space-y-3">
                <div className="h-10 w-10 rounded-xl bg-b-sun-soft flex items-center justify-center text-b-ink font-bold">
                  <Layers className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold text-b-ink text-lg">Bouul Connect Rails</h3>
                <p className="text-xs text-b-ink-soft leading-relaxed">
                  For multi-location service franchises and teams, route payouts dynamically across multiple partner bank sub-accounts.
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
