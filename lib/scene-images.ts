/**
 * Scene image registry.
 *
 * Maps Bouul's service categories (and popular services) to the curated
 * "pros at work" photographs in /public/scenes. All paths are relative to
 * the web root. Keeping the mapping here means pages never hard-code image
 * paths next to the copy that references them.
 */

export type SceneImage = {
  /** Web-root-relative path under /public. */
  src: string;
  /** Human label used for alt text + floating overlays. */
  label: string;
};

const s = (file: string): string => `/scenes/${file}.png`;

/** One representative scene per service category (the 12 real ones). */
export const CATEGORY_SCENES: Record<string, SceneImage> = {
  "Home Services": { src: s("carpentry"), label: "Home services" },
  "Cleaning Services": { src: s("house_cleaning"), label: "Cleaning" },
  "Beauty & Wellness": { src: s("makeup_artist"), label: "Beauty & wellness" },
  Automotive: { src: s("auto_repair"), label: "Automotive" },
  "Education & Tuition": { src: s("tutoring_service"), label: "Education" },
  "Health & Medical": { src: s("physiotherapy"), label: "Health" },
  "Events & Photography": { src: s("photography_service"), label: "Events" },
  "Professional Services": { src: s("graphic_design"), label: "Professional" },
  Pets: { src: s("pet_grooming"), label: "Pets" },
  "Logistics & Moving": { src: s("roadside_assistance"), label: "Logistics" },
  "Tech & IT": { src: s("web_development"), label: "Tech & IT" },
  "Legal & Financial": { src: s("life_coaching"), label: "Legal & financial" },
};

/** A scene for the most-searched services (matches the popular-services list). */
export const POPULAR_SCENES: Record<string, SceneImage> = {
  plumbers: { src: s("plumbing"), label: "Plumbers" },
  electricians: { src: s("electrical_service"), label: "Electricians" },
  "house-cleaning": { src: s("house_cleaning"), label: "House cleaning" },
  hairdressers: { src: s("hair_styling_20260706T184004"), label: "Hairdressers" },
  mechanics: { src: s("auto_repair"), label: "Mechanics" },
  "math-tutors": { src: s("tutoring_service"), label: "Math tutors" },
  photographers: { src: s("photography_service"), label: "Photographers" },
  "massage-therapists": { src: s("massage_therapy"), label: "Massage" },
  optometry: { src: s("optometry_20260706T195747"), label: "Optometry" },
  chiropractic: { src: s("chiropractic_20260706T195747"), label: "Chiropractic" },
  "personal-training": { src: s("personal_training_20260708T100401"), label: "Personal Training" },
  "makeup-artist": { src: s("makeup_artist_20260708T100401"), label: "Makeup & Beauty" },
  "dental-service": { src: s("dental_service_20260708T100401"), label: "Dental Service" },
  "roadside-assistance": { src: s("roadside_assistance_20260708T100401"), label: "Roadside & Towing" },
  "interior-design": { src: s("interior_design_20260708T100401"), label: "Interior Design" },
};

/** Curated hero/featured picks for bento sections — the most photogenic scenes. */
export const FEATURED_SCENES: Array<SceneImage & { tag: string; blurb: string }> = [
  {
    src: s("barber_service"),
    label: "Barber service",
    tag: "Personal care",
    blurb: "Fresh fades, lined up and photographed for the next booking.",
  },
  {
    src: s("house_cleaning"),
    label: "Deep cleaning",
    tag: "Home",
    blurb: "Spotless results you can scroll before you book.",
  },
  {
    src: s("auto_repair"),
    label: "Auto repair",
    tag: "Automotive",
    blurb: "See the bay before-and-after, then book the same hand.",
  },
  {
    src: s("nail_service"),
    label: "Nail service",
    tag: "Beauty",
    blurb: "Manicures straight off the chair, tagged and bookable.",
  },
  {
    src: s("plumbing"),
    label: "Plumbing",
    tag: "Repairs",
    blurb: "Leaks found and fixed — documented, not just described.",
  },
  {
    src: s("personal_training"),
    label: "Personal training",
    tag: "Wellness",
    blurb: "Sessions in motion, so progress is visible up front.",
  },
];

/** Safe lookup that always returns something. */
export function sceneForCategory(name: string): SceneImage {
  return (
    CATEGORY_SCENES[name] ?? { src: s("interior_design"), label: name }
  );
}

export function sceneForPopular(slug: string): SceneImage {
  return (
    POPULAR_SCENES[slug] ?? { src: s("personal_shopper"), label: slug }
  );
}
