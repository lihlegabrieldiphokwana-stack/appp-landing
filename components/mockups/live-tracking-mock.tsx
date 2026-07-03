import { MapPin, CheckCircle2, Clock } from "lucide-react";
import { MockCard } from "./primitives";

const STEPS = [
  { icon: CheckCircle2, label: "Booked", time: "9:00", done: true },
  { icon: CheckCircle2, label: "Pro on the way", time: "9:40", done: true },
  { icon: Clock, label: "In progress", time: "10:05", done: false, active: true },
  { icon: CheckCircle2, label: "Complete", time: "—", done: false },
];

export function LiveTrackingMock() {
  return (
    <div className="p-3">
      <div className="mb-3 flex items-center gap-2 rounded-xl border border-bouul-border bg-bouul-surface p-2">
        <MapPin className="h-4 w-4 text-bouul-accent" />
        <div className="text-xs">
          <div className="font-semibold text-bouul-text">Thabo is 6 min away</div>
          <div className="text-[10px] text-bouul-text-muted">Plumbing · Root touch-up ETA 10:25</div>
        </div>
      </div>
      <MockCard className="space-y-3">
        {STEPS.map((s) => (
          <div key={s.label} className="flex items-center gap-3">
            <s.icon className={s.active ? "h-4 w-4 text-bouul-accent" : s.done ? "h-4 w-4 text-bouul-accent" : "h-4 w-4 text-bouul-text-muted"} />
            <div className={`flex-1 text-xs ${s.done || s.active ? "text-bouul-text" : "text-bouul-text-muted"}`}>{s.label}</div>
            <div className="text-[10px] text-bouul-text-muted">{s.time}</div>
          </div>
        ))}
      </MockCard>
    </div>
  );
}
