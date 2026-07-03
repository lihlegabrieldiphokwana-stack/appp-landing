import { MockCard, Chip } from "./primitives";

const ITEMS = [
  { t: "Full Highlights", s: "Because you viewed Root Touch-Up", tag: "For you" },
  { t: "Gel Manicure", s: "Trending in your area", tag: "Trending" },
  { t: "Women's Haircut & Style", s: "Similar to your bookings", tag: "For you" },
];

export function DiscoveryFeedMock() {
  return (
    <div className="space-y-2 p-3">
      {ITEMS.map((i) => (
        <MockCard key={i.t} className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-bouul-accent-soft" />
          <div className="min-w-0 flex-1">
            <div className="truncate text-xs font-semibold text-bouul-text">{i.t}</div>
            <div className="truncate text-[10px] text-bouul-text-muted">{i.s}</div>
          </div>
          <Chip>{i.tag}</Chip>
        </MockCard>
      ))}
    </div>
  );
}
