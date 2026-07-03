import { Container } from "../ui/primitives";

// Use only verifiable/qualitative facts — do not fabricate precise metrics.
const FACTS = [
  "Verified identity for every professional",
  "Secure, in-app payments",
  "Live booking tracking",
  "Real reviews from completed jobs",
];

export function TrustStrip() {
  return (
    <section className="border-b border-bouul-border bg-bouul-bg">
      <Container className="grid grid-cols-2 gap-4 py-8 md:grid-cols-4">
        {FACTS.map((f) => (
          <div key={f} className="flex items-center gap-2 text-sm text-bouul-text-secondary">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-bouul-accent" /> {f}
          </div>
        ))}
      </Container>
    </section>
  );
}
