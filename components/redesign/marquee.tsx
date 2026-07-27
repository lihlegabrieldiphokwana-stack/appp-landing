import React from "react";
import { SERVICE_CATALOG } from "@/lib/service-catalog";

/* One-liner need-phrases — questions that surface the service as a felt need. */
const NEED_PHRASES: Record<string, string> = {
  accommodation_rental: "Need a place to stay?",
  alarm_installation: "Keep your home safe?",
  auto_repair: "Car trouble?",
  barber_service: "Need a fresh cut?",
  bartending: "Drinks sorted?",
  battery_replacement: "Dead battery?",
  car_wash_detailing: "Make it shine?",
  carpentry: "Woodwork needed?",
  childcare_nanny: "Child minder needed?",
  childcare_service: "Kids covered?",
  chiropractic: "Back pain?",
  content_writing: "Words to go?",
  dental_service: "Toothache?",
  dog_daycare: "Daycare needed?",
  dog_walking: "Walk time?",
  electrical_service: "Power issues?",
  event_venue: "Somewhere to host?",
  eyelash_extensions: "Lash out?",
  garage_door_repair: "Door stuck?",
  garden_maintenance: "Green it up?",
  gift_wrapping: "Wrap it up?",
  graphic_design: "Brand it?",
  hair_styling: "New do?",
  home_nursing: "Care at home?",
  house_cleaning: "Tidy up?",
  hvac_service: "Too hot or cold?",
  interior_design: "Room refresh?",
  lawn_care: "Mow time?",
  life_coaching: "Find your way?",
  locksmith: "Locked out?",
  makeup_artist: "Glam up?",
  massage_therapy: "Melt away?",
  meditation_instruction: "Just breathe?",
  mental_health_counseling: "Talk it out?",
  mobile_mechanic: "Come to me?",
  mystery_shopping: "Check it out?",
  nail_service: "Nail it?",
  nutrition_consulting: "Eat better?",
  optometry: "Eye check?",
  painting_service: "Fresh coat?",
  panel_beating: "Dent fix?",
  personal_shopper: "Shop for me?",
  personal_training: "Get fit?",
  pest_control: "Bug off?",
  pet_grooming: "Pamper your pet?",
  photography_service: "Capture it?",
  physiotherapy: "Move better?",
  pilates_class: "Core work?",
  plumbing: "Leak fix?",
  product_demonstration: "See it work?",
  roadside_assistance: "Stuck on the road?",
  roofing_repair: "Above it?",
  senior_care: "Care needed?",
  skincare_facial: "Glow up?",
  social_media_management: "Post it?",
  speech_therapy: "Speak clearly?",
  telemedicine: "See a doc?",
  threading_service: "Shape up?",
  tiling_service: "Tile it?",
  towing_service: "Tow needed?",
  tree_felling: "Timber!",
  tutoring_service: "Learn better?",
  tyre_service: "Puncture?",
  veterinary_home_visit: "Pet sick?",
  video_editing: "Cut it?",
  voiceover_artist: "Voice it?",
  wait_staff: "Staff up?",
  waterproofing: "Seal it?",
  waxing_service: "Smooth?",
  web_development: "Build it?",
  yoga_class: "Find balance?",
};

/* One pass of the ticker: service name + need-phrase. */
function TickerRun() {
  return (
    <>
      {SERVICE_CATALOG.map((service) => (
        <span key={service.id} className="mx-5 inline-flex items-baseline gap-2">
          <span className="text-sm font-medium text-b-cream">{service.name}</span>
          <span className="font-price text-xs text-b-sun">
            {NEED_PHRASES[service.id] ?? "Let us help?"}
          </span>
        </span>
      ))}
    </>
  );
}

export function ServiceTicker() {
  return (
    <div
      aria-hidden
      className="overflow-hidden border-y border-b-forest-line bg-b-forest py-4"
    >
      <div className="b-marquee flex w-max whitespace-nowrap">
        <TickerRun />
        <TickerRun />
      </div>
    </div>
  );
}
