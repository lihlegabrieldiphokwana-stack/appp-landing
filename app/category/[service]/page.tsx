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
import TradesPage from "@/components/services/trades-page";
import EventsPage from "@/components/services/events-page";
import PetsPage from "@/components/services/pets-page";
import LogisticsPage from "@/components/services/logistics-page";
import TechPage from "@/components/services/tech-page";
import ProServicesPage from "@/components/services/pro-services-page";

const CUSTOM_PAGES: Record<string, React.ComponentType> = {
  // Plumbing
  plumbers: PlumbersPage,
  plumbing: PlumbersPage,

  // Electrical
  electricians: ElectriciansPage,
  electrical: ElectriciansPage,
  "auto-electricians": ElectriciansPage,

  // Cleaning
  cleaners: CleanersPage,
  "house-cleaning": CleanersPage,
  "carpet-cleaning": CleanersPage,
  "office-cleaning": CleanersPage,
  "deep-cleaning": CleanersPage,
  "move-cleaning": CleanersPage,
  "window-cleaning": CleanersPage,
  "upholstery-cleaning": CleanersPage,
  "pressure-washing": CleanersPage,

  // Locksmith
  locksmiths: LocksmithsPage,
  locksmith: LocksmithsPage,

  // Towing & Roadside
  "towing-roadside": TowingPage,
  "towing-services": TowingPage,
  towing: TowingPage,

  // Automotive & Mechanics
  "auto-repair": AutoRepairPage,
  mechanics: AutoRepairPage,
  "car-detailing": AutoRepairPage,
  "panel-beaters": AutoRepairPage,
  "car-wash": AutoRepairPage,
  "windscreen-repair": AutoRepairPage,

  // Beauty & Hair
  "beauty-hair": BeautyPage,
  "personal-care": BeautyPage,
  hairdressers: BeautyPage,
  barbers: BeautyPage,
  "nail-technicians": BeautyPage,
  "massage-therapists": BeautyPage,
  "facial-treatments": BeautyPage,
  "makeup-artists": BeautyPage,
  "eyelash-brows": BeautyPage,
  spas: BeautyPage,

  // Tutoring & Education
  tutoring: TutoringPage,
  "math-tutors": TutoringPage,
  "english-tutors": TutoringPage,
  "science-tutors": TutoringPage,
  "language-lessons": TutoringPage,
  "music-lessons": TutoringPage,
  "computer-lessons": TutoringPage,
  "homework-help": TutoringPage,
  "exam-prep": TutoringPage,

  // Fitness & Wellness
  "fitness-wellness": FitnessPage,
  "personal-trainers": FitnessPage,
  "yoga-instructors": FitnessPage,

  // Childcare, Eldercare & Health
  childcare: CarePage,
  "childcare-seniorcare": CarePage,
  "elderly-care": CarePage,
  "baby-nurses": CarePage,
  nurses: CarePage,
  "first-aid-training": CarePage,
  physiotherapists: CarePage,
  dietitians: CarePage,
  counselors: CarePage,

  // Trades, Construction & Gardening
  carpenters: TradesPage,
  painters: TradesPage,
  builders: TradesPage,
  gardeners: TradesPage,
  "pool-cleaners": TradesPage,
  "pest-control": TradesPage,
  "ac-repair": TradesPage,
  "appliance-repair": TradesPage,
  handyman: TradesPage,
  roofers: TradesPage,
  tilers: TradesPage,
  welders: TradesPage,
  "aluminum-glass": TradesPage,

  // Events, Photography & Catering
  photographers: EventsPage,
  videographers: EventsPage,
  "event-planners": EventsPage,
  caterers: EventsPage,
  djs: EventsPage,
  "live-bands": EventsPage,
  decorators: EventsPage,
  mcs: EventsPage,

  // Pets & Animals
  "pet-groomers": PetsPage,
  "dog-walkers": PetsPage,
  "pet-sitters": PetsPage,
  veterinarians: PetsPage,
  "pet-training": PetsPage,

  // Logistics, Removals & Skip Hire
  "removal-companies": LogisticsPage,
  "courier-services": LogisticsPage,
  "furniture-delivery": LogisticsPage,
  "storage-services": LogisticsPage,
  "skip-hire": LogisticsPage,

  // Tech, Security & IT
  "it-support": TechPage,
  "computer-repair": TechPage,
  "network-installation": TechPage,
  "security-systems": TechPage,
  "cctv-installation": TechPage,
  "data-recovery": TechPage,

  // Professional, Legal & Finance
  accountants: ProServicesPage,
  bookkeepers: ProServicesPage,
  "tax-consultants": ProServicesPage,
  "legal-services": ProServicesPage,
  "business-consultants": ProServicesPage,
  "marketing-agencies": ProServicesPage,
  "web-designers": ProServicesPage,
  "graphic-designers": ProServicesPage,
  attorneys: ProServicesPage,
  notaries: ProServicesPage,
  "financial-advisors": ProServicesPage,
  "insurance-agents": ProServicesPage,
  "real-estate-agents": ProServicesPage,
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
