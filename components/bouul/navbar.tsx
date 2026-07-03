"use client";

import { useState } from "react";
import Link from "next/link";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Container, Button, cn } from "./ui/primitives";

const LINKS = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/safety", label: "Safety" },
  { href: "/cities", label: "Discover" },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-bouul-border bg-bouul-bg/80 backdrop-blur">
      <Container className="flex h-16 items-center gap-6">
        <Link href="/" className="text-lg font-extrabold tracking-tight text-bouul-text">Bouul</Link>
        <nav className="hidden items-center gap-6 md:flex">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-bouul-text-secondary hover:text-bouul-text">{l.label}</Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <Link href="/vendors" className="hidden text-sm font-semibold text-bouul-accent hover:text-bouul-accent-bright sm:inline">For Professionals</Link>
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="rounded-full border border-bouul-border p-2 text-bouul-text-secondary hover:text-bouul-text"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Button href="/download" variant="primary" className="hidden sm:inline-flex">Get the app</Button>
          <button type="button" aria-label="Menu" className="md:hidden rounded-full border border-bouul-border p-2 text-bouul-text" onClick={() => setOpen((v) => !v)}>
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </Container>
      {open && (
        <div className="border-t border-bouul-border bg-bouul-bg md:hidden">
          <Container className="flex flex-col gap-3 py-4">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm text-bouul-text-secondary" onClick={() => setOpen(false)}>{l.label}</Link>
            ))}
            <Link href="/vendors" className="text-sm font-semibold text-bouul-accent">For Professionals</Link>
            <Button href="/download" variant="primary">Get the app</Button>
          </Container>
        </div>
      )}
    </header>
  );
}
