---
name: Bouul Landing
description: Product-grade, dual-mode landing website for a hyper-local services marketplace
colors:
  bg: "#FFFFFF"
  surface: "#FAFAFA"
  surface-raised: "#F4F4F5"
  border: "#ECECEC"
  text: "#0A0A0A"
  text-secondary: "#525252"
  text-muted: "#737373"
  accent: "#10B981"
  accent-bright: "#34D399"
  accent-soft: "rgba(16,185,129,0.10)"
  accent-contrast: "#022C22"
  dark-bg: "#0A0A0A"
  dark-surface: "#0F0F0F"
  dark-surface-raised: "#171717"
  dark-border: "#262626"
  dark-text: "#FFFFFF"
  dark-text-secondary: "#A3A3A3"
typography:
  display:
    fontFamily: "system-ui, Inter, sans-serif"
    fontWeight: "tight"
  body:
    fontFamily: "system-ui, Inter, sans-serif"
    fontWeight: "relaxed"
rounded:
  default: "8px"
spacing:
  generous: "24px"
components:
  section:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text}"
---

# Design System: Bouul Landing

## 1. Overview

**Creative North Star: "Official, Trustworthy, Dual-Mode"**

The landing website is designed to read as official and trustworthy (similar to the Airbnb / Stripe / Linear family). It features clean white or near-black canvases, a restrained emerald accent, neo-grotesk typography, generous editorial spacing, faithful product mockups rendered in React/CSS (not images), and SVG iconography only. It targets both customers and professionals (a two-sided marketplace) with a confident, fast, and local tone.

**Key Characteristics:**
- **Dual-Mode System**: Light is the default mode, with an opt-in dark mode using Tailwind v4 `.dark` class toggling. Both modes share the same emerald accent, type, and spacing.
- **Strict Token Usage**: Components are built **exclusively** from `--bouul-*` semantic tokens. Hard-coded colors are strictly forbidden.
- **Neo-Grotesk Typography**: system-ui/Inter fallback with tight display weights for headlines and a relaxed neutral body.
- **Product-Grade Mockups**: UI mockups are rendered faithfully in React/CSS (not static images), mirroring the actual product.

---

## 2. Colors & Tokens

The application employs a dual-mode semantic token system. All components must use these CSS variables.

### Base Colors (Light / Dark)
- **Background (`--bouul-bg`)**: `#ffffff` / `#0a0a0a`
- **Surface (`--bouul-surface`)**: `#fafafa` / `#0f0f0f`
- **Surface Raised (`--bouul-surface-raised`)**: `#f4f4f5` / `#171717`
- **Border (`--bouul-border`)**: `#ececec` / `#262626`

### Text Colors (Light / Dark)
- **Primary Text (`--bouul-text`)**: `#0a0a0a` / `#ffffff`
- **Secondary Text (`--bouul-text-secondary`)**: `#525252` / `#a3a3a3`
- **Muted Text (`--bouul-text-muted`)**: `#737373` / `#737373`

### Accent Colors (Shared across modes)
- **Primary Accent (`--bouul-accent`)**: `#10b981` (Emerald)
- **Bright Accent (`--bouul-accent-bright`)**: `#34d399`
- **Soft Accent (`--bouul-accent-soft`)**: `rgba(16,185,129,0.10)`
- **Contrast Accent (`--bouul-accent-contrast`)**: `#022c22`

**The Emerald Accent Rule:** The `#10b981` emerald is defined once in `:root` and never overridden in `.dark`.

---

## 3. Typography

**Display Font:** `system-ui`, `Inter` fallback
**Body Font:** `system-ui`, `Inter` fallback

- **Headlines**: Tight display weights.
- **Body**: Relaxed, neutral text.
- **Spacing**: A fixed spacing and radius rhythm is strictly maintained so every section breathes identically.

---

## 4. Iconography

**NO EMOJIS (HARD RULE)**
There must be absolutely no emoji characters anywhere on the site (not in copy, buttons, badges, feature blocks, the footer, etc.).
All iconography uses **SVG icons** via `lucide-react`.

---

## 5. Components & Sections

The homepage is composed of a restricted vocabulary of section templates:
- `Navbar`
- `Hero`
- `TrustStrip`
- `HowItWorks`
- `FeatureSplit` (alternating)
- `BentoGrid`
- `ProTeaser`
- `Testimonials`
- `DownloadCTA`
- `Footer`

**Product Mockup Kit**:
Found under `components/mockups/` with shared primitives (`MockCard`, `Chip`, `Avatar`, `Stars`, `TabBar`, `ResultRow`). Includes components like `SearchResultsMock`, `ZolaChatMock`, `LiveTrackingMock`, `DiscoveryFeedMock`, `SocialFeedMock`, and `TrustBadges`.

---

## 6. Do's and Don'ts

### Do:
- **Do** build only from `--bouul-*` semantic tokens.
- **Do** use `lucide-react` for all icons.
- **Do** toggle dark mode via `.dark` on `<html>`.

### Don't:
- **Don't** hard-code hex colors in any components.
- **Don't** use emojis or Unicode symbol characters anywhere.
- **Don't** modify existing dark-only pages or their legacy components.
