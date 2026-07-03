# Bouul Landing Site Design Language

This document describes the visual and interaction language of the `appp-landing` website (the official, dual-mode system introduced in M1). It is intended for an LLM, designer, or developer to reproduce safely and consistently.

## One-Shot LLM Brief

Build a product-grade, **dual-mode** (light default, dark opt-in) landing website for a hyper-local services marketplace. The design reads as official and trustworthy (Airbnb / Stripe / Linear family): clean white or near-black canvases, restrained emerald accent, neo-grotesk typography, generous editorial spacing, faithful product mockups rendered in React/CSS (not images), and SVG iconography only. Compose the page from a small vocabulary of section templates that consume semantic tokens. Tone: confident, fast, trustworthy, local, two-sided (customers and professionals).

## Modes

- **Light is the default mode.**
- **Dark** is opt-in via a toggle in the Navbar, persisted in `localStorage` under the key `bouul-theme`, with `prefers-color-scheme` as the first-visit default.
- Theme is applied by toggling a `.dark` class on `<html>` (Tailwind v4 class-based dark mode). A no-flash inline script (`themeInitScript`) sets the class before paint.
- Both modes share the same emerald accent, type, and spacing — only surfaces invert.

## Token system (dual-mode, semantic)

Components are built **exclusively** from `--bouul-*` semantic tokens (never hard-coded colors). Old dark-only pages do not reference these tokens and are unaffected.

| Token | Light | Dark |
|-------|-------|------|
| `--bouul-bg` | `#ffffff` | `#0a0a0a` |
| `--bouul-surface` | `#fafafa` | `#0f0f0f` |
| `--bouul-surface-raised` | `#f4f4f5` | `#171717` |
| `--bouul-border` | `#ececec` | `#262626` |
| `--bouul-text` | `#0a0a0a` | `#ffffff` |
| `--bouul-text-secondary` | `#525252` | `#a3a3a3` |
| `--bouul-text-muted` | `#737373` | `#737373` |
| `--bouul-accent` | `#10b981` | `#10b981` (unchanged) |
| `--bouul-accent-bright` | `#34d399` | `#34d399` |
| `--bouul-accent-soft` | `rgba(16,185,129,0.10)` | same |
| `--bouul-accent-contrast` | `#022c22` | `#022c22` |

**Emerald accent:** `#10b981`, defined once in `:root` and never overridden in `.dark`.

## Typography & spacing

Neo-grotesk system stack (`system-ui`, Inter fallback). Tight display weights for headlines; relaxed neutral body. A fixed spacing/radius rhythm so every section breathes identically.

## Iconography — NO EMOJIS (hard rule)

**No emoji characters anywhere on the site** — not in copy, buttons, badges, feature blocks, the footer, or anywhere else. All iconography uses **SVG icons** via `lucide-react`. This is a non-negotiable project rule, enforced by `tests/no-emoji.test.ts` across `app/`, `components/`, `lib/`, and `tests/`.

## Tailwind utility recipes

New components use only `--bouul-*` tokens via these utilities:
- Backgrounds: `bg-bouul-bg`, `bg-bouul-surface`, `bg-bouul-surface-raised`
- Borders: `border-bouul-border`
- Text: `text-bouul-text`, `text-bouul-text-secondary`, `text-bouul-text-muted`
- Accent: `bg-bouul-accent`, `text-bouul-accent`, `bg-bouul-accent-soft`, `text-bouul-accent-contrast`

## Section templates

The homepage (and future pages) compose from this vocabulary:
`Navbar`, `Hero`, `TrustStrip`, `HowItWorks`, `FeatureSplit` (alternating), `BentoGrid`, `ProTeaser`, `Testimonials`, `DownloadCTA`, `Footer`.

## Product mockup kit

Faithful UI mockups rendered in React/CSS (not images), modeled on the real app so they are credible and swappable for real screenshots later. All live under `components/mockups/` with shared primitives (`MockCard`, `Chip`, `Avatar`, `Stars`, `TabBar`, `ResultRow`).

Consumer set (M1): `SearchResultsMock`, `ZolaChatMock`, `LiveTrackingMock`, `DiscoveryFeedMock`, `SocialFeedMock`, `TrustBadges`.

## Component namespaces

- `components/bouul/` — chrome (`navbar`, `footer`) and `sections/`, plus `ui/` primitives (`primitives.tsx`, `phone-shell.tsx`).
- `components/mockups/` — the product mockup kit.
- Old components (`components/navbar.tsx`, `components/footer.tsx`, `bouul-hero.tsx`, etc.) are **intentionally left in place** and still serve their existing routes; they will be pruned in M2–M4 as those pages migrate.

## Safe Reproduction Checklist

- Build only from `--bouul-*` semantic tokens; never hard-code hex in components.
- Light is the default; dark flips via `.dark` on `<html>`.
- Emerald accent is `#10b981`, defined once in `:root`.
- Zero emojis / Unicode symbol characters — use `lucide-react` SVG icons.
- Compose pages from the section-template vocabulary; mockups live in `components/mockups/`.
- `npm run build`, `npm run lint`, and `npm test` must pass in `appp-landing/`.
- Do not modify existing dark-only pages or their components.
