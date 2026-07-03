import type { ReactNode } from "react";
import { cn } from "./primitives";

export function PhoneShell({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("relative mx-auto w-[300px] rounded-[2.75rem] border border-bouul-border bg-bouul-surface p-3 shadow-2xl", className)}>
      <div className="absolute left-1/2 top-3 h-1.5 w-16 -translate-x-1/2 rounded-full bg-bouul-border" />
      <div className="mt-6 overflow-hidden rounded-[2.1rem] bg-bouul-surface-raised">{children}</div>
      <div className="mx-auto my-2 h-1 w-24 rounded-full bg-bouul-border" />
    </div>
  );
}
