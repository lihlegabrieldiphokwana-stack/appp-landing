import React from "react";
import Link from "next/link";
import { FileText, Download, CheckCircle2, ArrowLeft, ArrowRight, ShieldCheck, Percent, Calculator } from "lucide-react";
import { RedesignNav } from "@/components/redesign/nav";
import { RedesignFooter } from "@/components/redesign/footer";
import { Section, Eyebrow, Reveal } from "@/components/redesign/primitives";

export const metadata = {
  title: "Tax & 1099 / SARS Compliance | Bouul Payments",
  description: "Automated tax export, 1099 statements, and SARS eFiling revenue reports for independent contractors and service businesses on Bouul.",
};

export default function TaxesAnd1099Page() {
  return (
    <main className="min-h-screen bg-b-paper font-body text-b-ink">
      <RedesignNav />
      <div className="pt-28 pb-20">
        <Section id="taxes-1099">
          <Reveal>
            <Link
              href="/payments"
              className="inline-flex items-center gap-2 text-xs font-bold text-b-ink-soft hover:text-b-ink mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Escrow & Payouts</span>
            </Link>
            <div className="max-w-3xl">
              <Eyebrow tone="green">Tax & Regulatory Readiness</Eyebrow>
              <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-b-ink sm:text-5xl">
                Tax Reporting & 1099 / SARS Compliance
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-b-ink-soft">
                Stop stressing over shoebox receipts. Bouul automatically records all completed gross earnings, platform commission fees, and VAT line items for effortless annual tax filings.
              </p>
            </div>
          </Reveal>

          {/* Key Features */}
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <Reveal delay={0.05}>
              <div className="rounded-3xl border border-b-line bg-b-paper-raised p-6 space-y-3">
                <div className="h-10 w-10 rounded-xl bg-b-sun-soft flex items-center justify-center text-b-ink font-bold">
                  <FileText className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold text-b-ink text-lg">Automated Tax Summaries</h3>
                <p className="text-xs text-b-ink-soft leading-relaxed">
                  Download annual gross earnings, fee deductions, and net payouts in CSV, PDF, or SARS eFiling compatible formats.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-b-line bg-b-paper-raised p-6 space-y-3">
                <div className="h-10 w-10 rounded-xl bg-b-sun-soft flex items-center justify-center text-b-ink font-bold">
                  <Percent className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold text-b-ink text-lg">VAT Itemization</h3>
                <p className="text-xs text-b-ink-soft leading-relaxed">
                  For VAT-registered vendors, automatically split tax components on invoice receipts for input VAT claims.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-3xl border border-b-line bg-b-paper-raised p-6 space-y-3">
                <div className="h-10 w-10 rounded-xl bg-b-sun-soft flex items-center justify-center text-b-ink font-bold">
                  <Calculator className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold text-b-ink text-lg">1099 & Income Statements</h3>
                <p className="text-xs text-b-ink-soft leading-relaxed">
                  Instant annual 1099-K / IT3(a) style earning summaries generated automatically at financial year end.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="mt-12">
            <div className="rounded-3xl border border-b-line bg-b-paper-deep p-8 text-center max-w-2xl mx-auto">
              <h3 className="font-display text-xl font-bold text-b-ink">Ready to export your tax reports?</h3>
              <p className="mt-2 text-xs text-b-ink-soft">
                Log into your merchant dashboard or download the app to export your tax documentation in seconds.
              </p>
              <Link
                href="/download"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-b-ink px-6 py-3 text-xs font-bold text-b-paper hover:bg-b-forest transition-colors"
              >
                <span>Export Earnings Data</span>
                <Download className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </Section>
      </div>
      <RedesignFooter />
    </main>
  );
}
