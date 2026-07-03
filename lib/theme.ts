export type Theme = "light" | "dark";
export const THEME_STORAGE_KEY = "bouul-theme";

export function resolveTheme(
  stored: string | null | undefined,
  systemPrefersDark: boolean,
): Theme {
  if (stored === "light" || stored === "dark") return stored;
  return systemPrefersDark ? "dark" : "light";
}
