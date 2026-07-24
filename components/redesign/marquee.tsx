import React from "react";
import { SERVICE_CATALOG, formatRand } from "@/lib/service-catalog";

/* One pass of the ticker: every real service with its real base price. */
function TickerRun() {
  return (
    <>
      {SERVICE_CATALOG.map((service) => (
        <span key={service.id} className="mx-5 inline-flex items-baseline gap-2">
          <span className="text-sm font-medium text-b-cream">{service.name}</span>
          <span className="font-price text-xs text-b-sun">
            {formatRand(service.price)}
          </span>
        </span>
      ))}
    </>
  );
}

export function ServiceTicker() {
  return (
    <div
      aria-hidden
      className="overflow-hidden border-y border-b-forest-line bg-b-forest py-4"
    >
      <div className="b-marquee flex w-max whitespace-nowrap">
        <TickerRun />
        <TickerRun />
      </div>
    </div>
  );
}
