import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { Container, Eyebrow, cn } from "../ui/primitives";
import { PhoneShell } from "../ui/phone-shell";

export function FeatureSplit({
  id, eyebrow, title, body, bullets, reverse, children,
}: {
  id?: string; eyebrow: string; title: string; body: string;
  bullets: string[]; reverse?: boolean; children: ReactNode;
}) {
  return (
    <section id={id} className="border-t border-bouul-border bg-bouul-bg">
      <Container className={cn("grid items-center gap-12 py-24 md:grid-cols-2 md:py-32", reverse && "md:[&>div:first-child]:order-2")}>
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-bouul-text md:text-5xl">{title}</h2>
          <p className="mt-4 max-w-md text-lg text-bouul-text-secondary">{body}</p>
          <ul className="mt-6 space-y-2">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-bouul-text-secondary">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-bouul-accent" /> {b}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center"><PhoneShell>{children}</PhoneShell></div>
      </Container>
    </section>
  );
}
