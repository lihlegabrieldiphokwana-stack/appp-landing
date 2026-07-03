import { Avatar } from "./primitives";

export function ZolaChatMock() {
  return (
    <div className="flex h-full flex-col p-3">
      <div className="mb-3 flex items-center gap-2 border-b border-bouul-border pb-2">
        <Avatar label="Z" />
        <div>
          <div className="text-xs font-semibold text-bouul-text">Zola</div>
          <div className="flex items-center gap-1 text-[10px] text-bouul-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-bouul-accent" /> online
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-bouul-surface px-3 py-2 text-[11px] text-bouul-text-secondary">
          Find the best-rated hair colourists near you with an open slot today?
        </div>
        <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-bouul-accent px-3 py-2 text-[11px] font-medium text-bouul-accent-contrast">
          Yes, root touch-up under R400
        </div>
        <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-bouul-surface px-3 py-2 text-[11px] text-bouul-text-secondary">
          Clay Creations — 4.9, R320, next slot 2:30 PM. Want me to book it?
        </div>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {["Book it", "Show similar", "Cheaper options"].map((c) => (
            <span key={c} className="rounded-full border border-bouul-border bg-bouul-surface px-2.5 py-1 text-[10px] font-medium text-bouul-accent">{c}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
