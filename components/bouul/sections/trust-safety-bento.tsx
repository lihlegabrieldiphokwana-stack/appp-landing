import { ShieldCheck, FileCheck, Activity } from "lucide-react";
import { Container, Eyebrow } from "../ui/primitives";
import { TrustBadges } from "@/components/mockups";

export function TrustSafetyBento() {
  return (
    <section className="border-t border-bouul-border bg-bouul-surface">
      <Container className="py-24 md:py-32">
        <Eyebrow>Trust & safety</Eyebrow>
        <h2 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight text-bouul-text md:text-5xl">Built to be trusted.</h2>
        <div className="mt-10"><TrustBadges /></div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {[
            { icon: FileCheck, t: "Clear policies", b: "Transparent cancellation, refund and dispute policies." },
            { icon: ShieldCheck, t: "Safety first", b: "Community guidelines and proactive safety tooling." },
            { icon: Activity, t: "Live status", b: "A public status board for platform health." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-bouul-border bg-bouul-bg p-5">
              <c.icon className="mb-2 h-5 w-5 text-bouul-accent" />
              <div className="text-sm font-semibold text-bouul-text">{c.t}</div>
              <div className="text-xs text-bouul-text-muted">{c.b}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
