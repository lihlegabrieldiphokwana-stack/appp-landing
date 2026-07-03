import { Search } from "lucide-react";
import { TabBar, ResultRow } from "./primitives";

const TABS = ["All", "Services", "Vendors", "Posts", "Glimpses", "Reviews", "Users"];

const RESULTS = [
  { title: "Women's Haircut & Style", sub: "Glow Salon · 1.2 km", meta: "R250" },
  { title: "Root Touch-Up", sub: "Clay Creations · 2.0 km", meta: "R320" },
  { title: "Glow Salon", sub: "Vendor · Verified · 4.9", meta: "R250" },
  { title: "#balayage", sub: "Posts · 128 results", meta: "—" },
];

export function SearchResultsMock() {
  return (
    <div className="p-3">
      <div className="mb-3 flex items-center gap-2 rounded-full border border-bouul-border bg-bouul-surface px-3 py-2 text-xs text-bouul-text-muted">
        <Search className="h-3.5 w-3.5" /> hair, plumbers, salons near you
      </div>
      <TabBar tabs={TABS} active={0} />
      <div>
        {RESULTS.map((r) => (
          <ResultRow key={r.title} {...r} />
        ))}
      </div>
    </div>
  );
}
