import { ShieldCheck, Lock, BadgeCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Badge = { icon: LucideIcon; title: string; sub: string };

const BADGES: Badge[] = [
  { icon: BadgeCheck, title: "Verified identity", sub: "Every pro is identity-checked" },
  { icon: Lock, title: "Secure payments", sub: "Protected, in-app transactions" },
  { icon: ShieldCheck, title: "Real reviews", sub: "Only from completed bookings" },
];

export function TrustBadges() {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {BADGES.map((b) => (
        <div key={b.title} className="rounded-2xl border border-bouul-border bg-bouul-surface p-4">
          <b.icon className="mb-2 h-5 w-5 text-bouul-accent" />
          <div className="text-sm font-semibold text-bouul-text">{b.title}</div>
          <div className="text-xs text-bouul-text-muted">{b.sub}</div>
        </div>
      ))}
    </div>
  );
}
