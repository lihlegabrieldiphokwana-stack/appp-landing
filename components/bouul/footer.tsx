import Link from "next/link";
import { Container } from "./ui/primitives";

const COLS = [
  { title: "Customers", links: [["How it works", "/#how-it-works"], ["Safety", "/safety"], ["Cities", "/cities"], ["Support", "/support"]] },
  { title: "Professionals", links: [["Grow with Bouul", "/vendors"], ["Pricing", "/vendors#pricing"], ["Apply", "/vendors#apply"]] },
  { title: "Company", links: [["About", "/about"], ["Careers", "/careers"], ["Press", "/press"], ["Contact", "/contact"]] },
  { title: "Legal", links: [["Privacy", "/privacy"], ["Terms", "/terms"], ["Community guidelines", "/community-guidelines"]] },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-bouul-border bg-bouul-bg">
      <Container className="grid grid-cols-2 gap-8 py-16 md:grid-cols-5">
        <div className="col-span-2">
          <div className="text-lg font-extrabold text-bouul-text">Bouul</div>
          <p className="mt-2 max-w-xs text-sm text-bouul-text-muted">Your city&apos;s marketplace. Find, book, and track trusted local services.</p>
        </div>
        {COLS.map((c) => (
          <div key={c.title}>
            <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-bouul-text-muted">{c.title}</div>
            <ul className="space-y-2">
              {c.links.map(([label, href]) => (
                <li key={href}><Link href={href} className="text-sm text-bouul-text-secondary hover:text-bouul-text">{label}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      <div className="border-t border-bouul-border">
        <Container className="py-6 text-xs text-bouul-text-muted">&copy; {new Date().getFullYear()} Bouul. All rights reserved.</Container>
      </div>
    </footer>
  );
}
