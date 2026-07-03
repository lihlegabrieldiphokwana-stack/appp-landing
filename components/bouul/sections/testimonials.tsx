import { Container, Eyebrow } from "../ui/primitives";
import { Avatar, Stars } from "@/components/mockups/primitives";

const ITEMS = [
  { who: "Lerato M.", role: "Customer · Johannesburg", text: "Found a plumber in minutes and watched him arrive live. Game changer.", rating: 5 },
  { who: "Clay Creations", role: "Vendor · Hair studio", text: "Zola manages my bookings and rostering. I just focus on the chair.", rating: 5 },
  { who: "Sipho T.", role: "Customer · Cape Town", text: "Reviews are only from real jobs, so I actually trust them.", rating: 5 },
];

export function Testimonials() {
  return (
    <section className="border-t border-bouul-border bg-bouul-bg">
      <Container className="py-24 md:py-32">
        <Eyebrow>Loved by customers & pros</Eyebrow>
        <h2 className="mt-3 text-4xl font-bold tracking-tight text-bouul-text md:text-5xl">Real people. Real results.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {ITEMS.map((i) => (
            <figure key={i.who} className="rounded-2xl border border-bouul-border bg-bouul-surface p-6">
              <Stars rating={i.rating} />
              <blockquote className="mt-3 text-sm text-bouul-text-secondary">&ldquo;{i.text}&rdquo;</blockquote>
              <figcaption className="mt-4 flex items-center gap-2">
                <Avatar label={i.who} />
                <div>
                  <div className="text-xs font-semibold text-bouul-text">{i.who}</div>
                  <div className="text-[10px] text-bouul-text-muted">{i.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
