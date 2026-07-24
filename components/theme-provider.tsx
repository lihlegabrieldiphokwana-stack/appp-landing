"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { THEME_STORAGE_KEY, type Theme } from "@/lib/theme";

const ThemeContext = createContext<{ theme: Theme; toggleTheme: () => void }>({
  theme: "light",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  // Sunlit Neighbourhood redesign is single-mode: always light, clear stale prefs.
  useEffect(() => {
    setTheme("light");
    document.documentElement.classList.remove("dark");
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", next === "dark");
      window.localStorage.setItem(THEME_STORAGE_KEY, next);
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

/** Inline script — runs before paint to set .dark and avoid FOUC. String only. */
export const themeInitScript = `(function(){try{document.documentElement.classList.remove('dark');localStorage.removeItem('${THEME_STORAGE_KEY}');}catch(e){}})();`;
