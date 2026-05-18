"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

type Mode = "consumer" | "vendor" | "employee";

function getMode(pathname: string): Mode {
  if (pathname.startsWith("/vendors")) return "vendor";
  if (pathname.startsWith("/employees")) return "employee";
  return "consumer";
}

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const mode = getMode(pathname);
    document.body.setAttribute("data-mode", mode);
  }, [pathname]);

  return <>{children}</>;
}

export function useMode(): Mode {
  const pathname = usePathname();
  return getMode(pathname);
}
