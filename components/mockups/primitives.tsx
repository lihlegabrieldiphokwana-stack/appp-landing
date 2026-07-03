import type { ReactNode } from "react";
import { Star } from "lucide-react";
import { cn } from "@/components/bouul/ui/primitives";

export function MockCard({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("rounded-xl border border-bouul-border bg-bouul-surface-raised p-3", className)}>{children}</div>;
}

export function Chip({ children, active }: { children: ReactNode; active?: boolean }) {
  return (
    <span className={cn("rounded-full px-2.5 py-1 text-[10px] font-medium", active ? "bg-bouul-accent text-bouul-accent-contrast" : "bg-bouul-surface text-bouul-text-secondary border border-bouul-border")}>
      {children}
    </span>
  );
}

export function Avatar({ label, className }: { label: string; className?: string }) {
  return (
    <div className={cn("flex h-8 w-8 items-center justify-center rounded-full bg-bouul-accent-soft text-xs font-bold text-bouul-accent", className)}>
      {label.charAt(0).toUpperCase()}
    </div>
  );
}

export function Stars({ rating }: { rating: number }) {
  return (
    <span className="inline-flex items-center gap-0.5 text-bouul-accent">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-3 w-3" fill={i < Math.round(rating) ? "currentColor" : "none"} strokeWidth={2} />
      ))}
    </span>
  );
}

export function TabBar({ tabs, active }: { tabs: string[]; active: number }) {
  return (
    <div className="flex gap-1.5 overflow-x-auto pb-2">
      {tabs.map((t, i) => (
        <Chip key={t} active={i === active}>{t}</Chip>
      ))}
    </div>
  );
}

export function ResultRow({ title, sub, meta }: { title: string; sub: string; meta: string }) {
  return (
    <div className="flex items-center gap-3 border-t border-bouul-border py-2.5 first:border-t-0">
      <Avatar label={title} />
      <div className="min-w-0 flex-1">
        <div className="truncate text-xs font-semibold text-bouul-text">{title}</div>
        <div className="truncate text-[10px] text-bouul-text-muted">{sub}</div>
      </div>
      <div className="text-[10px] font-medium text-bouul-accent">{meta}</div>
    </div>
  );
}
