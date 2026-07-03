import { Search, CalendarCheck, MapPin } from "lucide-react";
import { Container, Eyebrow } from "../ui/primitives";

const STEPS = [
  { icon: Search, n: "1", title: "Search anything", body: "Services, vendors, posts and reviews across 7 tabs — semantic search understands intent." },
  { icon: CalendarCheck, n: "2", title: "Book in seconds", body: "See real availability and prices. Confirm instantly, secured in-app." },
  { icon: MapPin, n: "3", title: "Track it live", body: "Watch your pro arrive in real time, with status and ETA updates." },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-bouul-border bg-bouul-bg">
      <Container className="py-24 md:py-32">
        <Eyebrow>How it works</Eyebrow>
        <h2 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight text-bouul-text md:text-5xl">Three steps from need to done.</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="rounded-2xl border border-bouul-border bg-bouul-surface p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-bouul-accent text-sm font-bold text-bouul-accent-contrast">{s.n}</span>
                <s.icon className="h-5 w-5 text-bouul-accent" />
              </div>
              <div className="text-lg font-semibold text-bouul-text">{s.title}</div>
              <p className="mt-1 text-sm text-bouul-text-secondary">{s.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
