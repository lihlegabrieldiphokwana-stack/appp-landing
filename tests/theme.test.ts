import { describe, it, expect } from "vitest";
import { resolveTheme, THEME_STORAGE_KEY } from "@/lib/theme";

describe("resolveTheme", () => {
  it("returns stored theme when present", () => {
    expect(resolveTheme("dark", false)).toBe("dark");
    expect(resolveTheme("light", true)).toBe("light");
  });
  it("falls back to system preference when no stored value", () => {
    expect(resolveTheme(null, true)).toBe("dark");
    expect(resolveTheme(null, false)).toBe("light");
  });
  it("treats invalid stored values as absent", () => {
    expect(resolveTheme("garbage" as string, true)).toBe("dark");
    expect(resolveTheme(undefined, false)).toBe("light");
  });
  it("exposes the storage key", () => {
    expect(THEME_STORAGE_KEY).toBe("bouul-theme");
  });
});
