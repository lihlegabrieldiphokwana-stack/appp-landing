import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ReactNode } from "react";

export function cn(...inputs: Parameters<typeof clsx>) {
  return twMerge(clsx(inputs));
}

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("max-w-7xl mx-auto px-6", className)}>{children}</div>;
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("text-xs font-semibold tracking-widest text-bouul-accent uppercase", className)}>
      {children}
    </div>
  );
}

export function SectionShell({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-24 md:py-32 border-t border-bouul-border bg-bouul-bg", className)}>
      <Container>{children}</Container>
    </section>
  );
}

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "accent";
  className?: string;
};

export function Button({ children, href, variant = "primary", className }: ButtonProps) {
  const base = "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors";
  const variants = {
    primary: "bg-bouul-text text-bouul-bg hover:opacity-90",
    secondary: "border border-bouul-border text-bouul-text hover:border-bouul-text-muted",
    accent: "bg-bouul-accent text-bouul-accent-contrast hover:bg-bouul-accent-bright",
  };
  return (
    <a href={href} className={cn(base, variants[variant], className)}>
      {children}
    </a>
  );
}

export function Pill({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2 rounded-full border border-bouul-border bg-bouul-surface px-3 py-1 text-xs font-medium text-bouul-text-secondary", className)}>
      {children}
    </span>
  );
}
