import React from "react";
import Link from "next/link";

const columns: Array<{ title: string; links: Array<{ href: string; label: string }> }> = [
  {
    title: "Product",
    links: [
      { href: "/services", label: "Find services" },
      { href: "/vendors", label: "For professionals" },
      { href: "/employees", label: "For teams" },
      { href: "/download", label: "Download the app" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/careers", label: "Careers" },
      { href: "/newsroom", label: "Newsroom" },
      { href: "/investors", label: "Investors" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/faq", label: "Help centre" },
      { href: "/contact", label: "Contact us" },
      { href: "/safety", label: "Safety" },
      { href: "/status", label: "Status" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/terms", label: "Terms of service" },
      { href: "/privacy", label: "Privacy policy" },
      { href: "/policies", label: "Policies" },
      { href: "/community-guidelines", label: "Community guidelines" },
    ],
  },
];

export function RedesignFooter() {
  return (
    <footer className="border-t border-b-line bg-b-paper-deep px-5 pb-10 pt-16 md:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <p className="font-display text-3xl font-extrabold tracking-tight text-b-ink">
              bouul<span className="text-b-green">.</span>
            </p>
            <p className="mt-3 b-body-sm leading-relaxed text-b-ink-soft">
              Every pro in your neighbourhood, one app. Verified professionals,
              escrow-protected payments, made in South Africa.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="font-price text-[11px] font-semibold uppercase tracking-[0.2em] text-b-ink-faint">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-b-ink-soft transition-colors hover:text-b-green-deep"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-b-line pt-6 text-xs text-b-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>Bouul (Pty) Ltd. All rights reserved.</p>
          <p className="font-price">Johannesburg, South Africa</p>
        </div>
      </div>
    </footer>
  );
}
