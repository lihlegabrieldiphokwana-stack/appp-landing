import { ArrowRight, LayoutDashboard, CalendarClock, Wallet } from "lucide-react";
import { Container, Button } from "../ui/primitives";

const TOOLS = [
  { icon: LayoutDashboard, t: "Dashboards", b: "Bookings, revenue and customers at a glance." },
  { icon: CalendarClock, t: "Rostering", b: "Assign staff, manage shifts and availability." },
  { icon: Wallet, t: "Payouts & pricing", b: "Dynamic pricing and fast, tracked payouts." },
];

export function ProTeaser() {
  return (
    <section className="border-t border-bouul-border bg-bouul-accent-contrast">
      <Container className="grid items-center gap-10 py-24 md:grid-cols-2 md:py-32">
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-bouul-accent-bright">For professionals</div>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">Grow your business with Bouul.</h2>
          <p className="mt-4 max-w-md text-lg text-white/70">Everything to run and grow — bookings, staff, pricing and payouts — in one place.</p>
          <div className="mt-6">
            <Button href="/vendors" variant="accent">Grow with Bouul <ArrowRight className="h-4 w-4" /></Button>
          </div>
        </div>
        <div className="grid gap-3">
          {TOOLS.map((t) => (
            <div key={t.t} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <t.icon className="h-5 w-5 text-bouul-accent-bright" />
              <div>
                <div className="text-sm font-semibold text-white">{t.t}</div>
                <div className="text-xs text-white/60">{t.b}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
