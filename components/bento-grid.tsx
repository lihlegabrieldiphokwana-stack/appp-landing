import React from "react";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 max-w-7xl mx-auto px-6",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-3xl p-8 border border-mode-border bg-mode-surface motion-transition hover:border-emerald-500/30 hover:-translate-y-0.5 flex flex-col justify-between",
        className
      )}
    >
      {header}
      <div>
        {icon && <div className="mb-4">{icon}</div>}
        {title && (
          <h3 className="text-xl font-semibold text-slate-50 mb-2 tracking-tight">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-slate-400 text-sm leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};
