"use client";

import React from "react";
import { useParams } from "next/navigation";
import ServiceUseCasePage from "@/components/redesign/service-use-case";
import PlumbersPage from "@/components/services/plumbers-page";
import ElectriciansPage from "@/components/services/electricians-page";
import CleanersPage from "@/components/services/cleaners-page";
import LocksmithsPage from "@/components/services/locksmiths-page";
import TowingPage from "@/components/services/towing-page";
import AutoRepairPage from "@/components/services/auto-repair-page";
import BeautyPage from "@/components/services/beauty-page";
import TutoringPage from "@/components/services/tutoring-page";
import FitnessPage from "@/components/services/fitness-page";
import CarePage from "@/components/services/care-page";

const CUSTOM_PAGES: Record<string, React.ComponentType> = {
  plumbers: PlumbersPage,
  electricians: ElectriciansPage,
  cleaners: CleanersPage,
  locksmiths: LocksmithsPage,
  "towing-roadside": TowingPage,
  "auto-repair": AutoRepairPage,
  "beauty-hair": BeautyPage,
  "personal-care": BeautyPage,
  tutoring: TutoringPage,
  "fitness-wellness": FitnessPage,
  childcare: CarePage,
  "childcare-seniorcare": CarePage,
};

export default function CategoryPage() {
  const params = useParams();
  const service = params.service as string;

  const CustomPage = CUSTOM_PAGES[service];
  if (CustomPage) {
    return <CustomPage />;
  }

  return <ServiceUseCasePage slug={service} />;
}
