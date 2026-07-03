import { Heart, MessageCircle } from "lucide-react";
import { Avatar, Stars } from "./primitives";

export function SocialFeedMock() {
  return (
    <div className="p-3">
      <div className="mb-2 flex items-center gap-2">
        <Avatar label="G" />
        <div className="flex-1">
          <div className="text-xs font-semibold text-bouul-text">Glow Salon</div>
          <div className="text-[10px] text-bouul-text-muted">Following · 2h</div>
        </div>
      </div>
      <div className="mb-2 aspect-square rounded-xl bg-bouul-accent-soft" />
      <div className="mb-1 text-[11px] text-bouul-text-secondary">Fresh balayage this morning.</div>
      <div className="mb-2 flex flex-wrap gap-1">
        {["#balayage", "#hairgoals"].map((h) => (
          <span key={h} className="text-[10px] font-medium text-bouul-accent">{h}</span>
        ))}
      </div>
      <div className="flex items-center gap-4 text-[10px] text-bouul-text-muted">
        <span className="inline-flex items-center gap-1"><Heart className="h-3 w-3" /> 128</span>
        <span className="inline-flex items-center gap-1"><MessageCircle className="h-3 w-3" /> 14</span>
        <Stars rating={5} />
      </div>
    </div>
  );
}
