import { describe, it, expect } from "vitest";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = join(__dirname, "..");
const SCAN_DIRS = ["app", "components", "lib", "tests"];
// Emoji/pictograph ranges (covers most symbol & emoji blocks). ASCII arrows "->" are fine.
const EMOJI_RE = /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2190}-\u{21FF}\u{2B00}-\u{2BFF}\u{1F1E6}-\u{1F1FF}\u{FE0F}\u{2300}-\u{23FF}]/u;

// Pre-existing old-codebase offenders (M3/M4 follow-up to clean). Never weaken the
// regex or remove the test — only ever add a documented path here. As each legacy
// page is ported to the new system, remove its entry from this list.
const ALLOW: string[] = [
  join(ROOT, "app/category/[service]/page.tsx"),
  join(ROOT, "app/cities/page.tsx"),
  join(ROOT, "app/city/[city]/page.tsx"),
  join(ROOT, "app/contact/page.tsx"),
  join(ROOT, "app/employees/page.tsx"),
  join(ROOT, "app/faq/page.tsx"),
  join(ROOT, "app/investors/deck/page.tsx"),
  join(ROOT, "app/learn/page.tsx"),
  join(ROOT, "app/pro/[username]/page.tsx"),
  join(ROOT, "app/safety/page.tsx"),
  join(ROOT, "app/services/page.tsx"),
  join(ROOT, "app/vendors/[category]/page.tsx"),
  join(ROOT, "components/comparison-tool.tsx"),
  join(ROOT, "components/discovery-preview.tsx"),
  join(ROOT, "components/feature-visuals.tsx"),
  join(ROOT, "components/mechanic-card-visuals.tsx"),
  join(ROOT, "components/navbar.tsx"),
  join(ROOT, "components/pricing-calculator.tsx"),
  join(ROOT, "components/product-showcase.tsx"),
  join(ROOT, "components/referral-tier-system.tsx"),
  join(ROOT, "components/resonance-engine.tsx"),
  join(ROOT, "components/social-mechanics.tsx"),
  join(ROOT, "components/social-preview.tsx"),
  join(ROOT, "components/subscription-section.tsx"),
  join(ROOT, "components/trust-preview.tsx"),
  join(ROOT, "components/vendor-category-value-prop.tsx"),
  join(ROOT, "components/vendor-ops-preview.tsx"),
  join(ROOT, "components/vendor-pricing-comparison.tsx"),
  join(ROOT, "lib/meta.ts"),
  join(ROOT, "lib/vendor-categories-data.ts"),
];

function walk(dir: string, out: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (/\.(ts|tsx|js|jsx|css)$/.test(entry)) out.push(full);
  }
  return out;
}

describe("no emojis in source", () => {
  it("contains zero emoji codepoints across scanned dirs", () => {
    const offenders: string[] = [];
    for (const d of SCAN_DIRS) {
      const dir = join(ROOT, d);
      for (const file of walk(dir)) {
        if (ALLOW.includes(file)) continue;
        const text = readFileSync(file, "utf8");
        if (EMOJI_RE.test(text)) offenders.push(file);
      }
    }
    expect(offenders, `emoji found in: ${offenders.join(", ")}`).toEqual([]);
  });
});
