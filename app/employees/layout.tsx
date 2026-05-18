import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Employees — Bouul",
  description: "Manage your workboard, schedule, and assignments. Join your team on Bouul and stay on top of every job.",
  openGraph: {
    title: "Bouul for Employees",
    description: "Your workday, organized. Track assignments, manage your schedule, and communicate with your team.",
  },
};

export default function EmployeesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
