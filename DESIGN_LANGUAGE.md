# Bouul Landing Site Design Language

This document describes the visual and interaction language of the `appp-landing` website for an LLM or designer/developer to reproduce safely. It intentionally avoids private operational details, credentials, internal contact information, and sensitive business data.

## One-Shot LLM Brief

Build a cinematic, premium, dark-mode landing website for a hyper-local services marketplace. The design should feel like a modern consumer app launch page: black background, restrained typography, emerald green accent, high-contrast white headlines, soft neutral body copy, app-phone mockups, bordered dark panels, subtle grid/spotlight backgrounds, and polished motion. Use large editorial sections with generous vertical spacing, tiny uppercase eyebrow labels, horizontally scrolling feature cards, bento grids, and dashboard/chat/map-style product previews. The overall tone is confident, fast, trustworthy, local, and technology-forward without feeling cluttered or overly playful.

## Core Personality

The site should feel:

- Premium and cinematic, with a black stage-like canvas.
- Trustworthy and operational, using structured panels, status signals, verification motifs, and clear flows.
- Consumer-friendly, with large simple claims, rounded app mockups, and direct calls to action.
- Technology-forward, using AI/search/tracking/dashboard visuals, but expressed through practical product UI rather than abstract sci-fi decoration.
- Local and human, showing the connection between customers, professionals, bookings, reviews, and city-level discovery.

Avoid:

- Bright white page backgrounds.
- Busy gradients as the main identity.
- Playful cartoon styling.
- Heavy skeuomorphism.
- Overly colorful interfaces outside controlled feature accents.
- Long marketing walls of text.

## Color System

Use a mostly black and neutral palette with emerald as the primary accent.

Recommended tokens:

```css
--background: #000000;
--foreground: #ededed;
--surface-950: #0a0a0a;
--surface-900: #171717;
--surface-800: #262626;
--border-900: #171717;
--border-800: #262626;
--text-primary: #ffffff;
--text-secondary: #a3a3a3;
--text-muted: #737373;
--text-faint: #525252;
--accent: #10b981;
--accent-bright: #34d399;
--accent-soft: rgba(16, 185, 129, 0.10);
```

Usage:

- Black is the main canvas.
- White is reserved for primary headlines and primary buttons.
- Neutral gray text carries most paragraph, nav, and metadata content.
- Emerald is used for active states, section labels, status dots, icons, selected pills, and occasional headline emphasis.
- Secondary category colors may appear in isolated service/category contexts, but they should not overpower the black/emerald brand system.

## Typography

Use a clean neo-grotesk sans-serif similar to Helvetica Neue, Arial, or a modern system sans stack.

Hierarchy:

- Hero H1: very large, tight, confident, usually `text-6xl` to `text-9xl`, semibold.
- Section H2: large editorial scale, usually `text-4xl` to `text-6xl`, semibold.
- Feature titles: `text-lg` to `text-2xl`, semibold.
- Body copy: `text-base` to `text-xl`, relaxed line height, neutral gray.
- Eyebrows: tiny uppercase labels, `text-xs`, semibold/bold, wide tracking, emerald.
- Metadata and helper text: `text-xs` to `text-sm`, muted neutral.

Style notes:

- Keep letter spacing tight or default for big headings.
- Use wide tracking only for small uppercase labels.
- Prefer short, declarative headings.
- Body copy should be clear and product-led, not ornate.

## Layout System

The site uses a section-based rhythm:

- Full-width black sections.
- `max-w-7xl` content containers.
- Horizontal padding around `px-6`.
- Large vertical spacing: `py-24`, `py-32`, and larger for cinematic strips.
- Thin top borders between major sections using dark neutral borders.
- Responsive layouts that collapse from two columns to stacked mobile sections.

Common section patterns:

- Hero: centered content, huge title, supporting line, two CTAs, product mockup below.
- Feature sections: text on one side, phone preview on the other, alternating left/right alignment.
- Card rows: horizontal scroll with snap alignment.
- Bento grids: 1 column on mobile, 3 columns on desktop, dark gradient panels.
- Editorial pages: hero plus repeated problem/value/pillar sections with neutral cards.

## Surfaces and Cards

Surfaces should feel layered but restrained.

Use:

- `bg-black` for page and major sections.
- `bg-neutral-950` for cards and app mockup shells.
- `bg-neutral-900` or `bg-neutral-800` for nested UI controls, chat bubbles, and preview details.
- Borders such as `border-neutral-800` or `border-neutral-900`.
- Soft shadows, mostly black shadows or faint emerald glows.

Border radius:

- Buttons and pills: fully rounded.
- Small cards: rounded-xl to rounded-2xl.
- Large panels and phone shells: rounded-3xl or custom large radius.
- Phone mockups: very large radius, around `3rem`.

Avoid deeply nesting cards inside other cards unless representing an actual product UI screen.

## Buttons and Calls to Action

Primary CTA:

- White background.
- Black text.
- Rounded full pill.
- Medium weight.
- Subtle hover to neutral-100.

Secondary CTA:

- Transparent or black background.
- Neutral border.
- White or neutral text.
- Rounded full pill.
- Hover by increasing border/text contrast.

Accent CTA:

- Emerald background.
- Black text.
- Used sparingly, especially in nav or selected/action states.

Buttons should be compact, calm, and direct. Avoid loud gradients.

## Navigation

The navbar is fixed at the top and becomes more material after scrolling.

Pattern:

- Transparent over the top of the page.
- On scroll: black with opacity, backdrop blur, bottom neutral border.
- Logo on the left.
- Compact desktop nav links centered.
- Utility/detection element and download CTA on the right.
- Mobile: icon button opens a black blurred dropdown panel.

Nav text should be small, neutral, and understated. Hover states turn white.

## Imagery and Product Visuals

The site depends on product-first visuals:

- Phone mockups are a central motif.
- Product previews show discovery, trust, tracking, chat, dashboards, maps, reviews, payments, and AI assistance.
- Real screenshots or screenshot-like compositions should sit inside device frames.
- Abstract backgrounds are secondary and should never replace the product.

Visual containers:

- Use dark phone shells with neutral borders.
- Maintain stable aspect ratios.
- Add a small home indicator when showing mobile app previews.
- Use faint emerald glows behind key hero/product moments.

## Motion Language

Motion should feel smooth and premium, not distracting.

Use:

- Fade + slight upward movement on section entry.
- Slight horizontal entrance for split sections.
- Staggered card reveals.
- Gentle scale on hero/CTA elements.
- Infinite horizontal scrolling only for testimonial or visual strips.
- Typing indicators and chat message reveals for AI/chat demos.
- Hover states that adjust border color, text color, or scale subtly.

Typical timing:

- Entry transitions: 0.5s to 0.8s.
- Stagger delay: 0.06s to 0.12s per item.
- Long ambient animations: 30s to 60s linear.

Do not use aggressive parallax, bouncy easing, or excessive rotation.

## Component Patterns

### Hero

- Full viewport black section.
- Subtle spotlight and grid texture in the background.
- Centered logo mark.
- Giant brand/product name headline.
- One short dynamic subhead or rotating word phrase.
- One muted supporting line.
- Two pill CTAs.
- Large phone preview rising from below.
- Emerald glow behind the phone.

### Cinematic Statement Strip

- Very large stacked statements.
- Minimal content.
- Black background.
- Final line may use emerald emphasis.
- Plenty of vertical breathing room.

### Feature Section

- Eyebrow label in emerald uppercase.
- Large headline.
- Short primary body line.
- Optional secondary paragraph in muted gray.
- Optional supporting cards.
- Phone mockup or product preview opposite the copy.
- Below: horizontal mechanic cards explaining specific features.

### Mechanic Cards

- Fixed-width horizontal cards.
- Dark neutral surface.
- Thin border.
- 4:3 visual area at top.
- Title and description below.
- Hover border or title shifts to emerald.
- Snap scrolling on mobile/overflow.

### Bento Grid

- Dark gradient panels from gray-900 to gray-800.
- Neutral borders.
- Product-like visual header.
- Small emerald line icons.
- Bold short title.
- Muted concise description.
- Some cards can span multiple columns.

### AI/Chat Preview

- Use a dark chat container.
- Header with avatar, online dot, and status text.
- User messages align right with emerald bubbles.
- Assistant/system messages align left with neutral bubbles.
- Typing indicator uses small animated dots.
- Keep messages short and action-oriented.

### Trust/Safety Previews

- Use verification badges, identity/check icons, review stars, secure payment motifs, and status chips.
- Keep the design calm and structured.
- Use emerald for positive/verified states.

### Footer

- Black background with top neutral border.
- Four-column desktop grid.
- Logo and short description.
- Muted link lists.
- Bottom legal row separated by another neutral border.

## Content Voice

The writing style should be crisp, declarative, and product-centered.

Good patterns:

- "Find anything. In seconds."
- "Book with total confidence."
- "Watch it happen. Live."
- "Every tool. One platform."
- "Your city. Your services."

Rules:

- Use short headings.
- Lead with the outcome, then explain the mechanism.
- Prefer concrete product language: search, book, track, verify, pay, chat, review.
- Avoid generic SaaS filler.
- Avoid exposing internal numbers, private roadmap details, support contacts, or operational claims unless explicitly approved.

## Accessibility and Responsiveness

Required behavior:

- Preserve strong contrast between text and background.
- Keep body copy readable on black.
- Ensure cards and buttons have stable dimensions.
- Do not let large text overflow on mobile.
- Stack split sections on mobile.
- Keep horizontal scroll rows usable with snap alignment.
- Make interactive elements reachable by keyboard.
- Provide meaningful alt text for product or brand images.

## Tailwind Implementation Notes

The existing site is built with Tailwind-style utility classes and Framer Motion. Reuse these patterns:

```tsx
<section className="py-24 md:py-32 bg-black border-t border-neutral-900">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
      SECTION LABEL
    </div>
    <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
      Short, confident headline.
    </h2>
    <p className="text-neutral-500 text-lg leading-relaxed max-w-2xl">
      Explain the user benefit in plain language.
    </p>
  </div>
</section>
```

Common utility recipes:

- Page: `min-h-screen bg-black overflow-x-clip`
- Section: `py-24 md:py-32 bg-black border-t border-neutral-900`
- Container: `max-w-7xl mx-auto px-6`
- Eyebrow: `text-xs font-semibold tracking-widest text-emerald-400 uppercase`
- H1/H2: `font-semibold text-white tracking-tight`
- Body: `text-neutral-500 leading-relaxed`
- Card: `rounded-2xl border border-neutral-800 bg-neutral-950`
- Primary button: `rounded-full bg-white text-black hover:bg-neutral-100`
- Accent status: `bg-emerald-500 text-black` or `text-emerald-400`

## Safe Reproduction Checklist

When recreating or extending the design:

- Keep the black/neutral/emerald system intact.
- Use product UI previews instead of generic decoration.
- Use large editorial spacing.
- Use tiny uppercase emerald labels to orient sections.
- Use bordered dark panels for trust, data, and workflow content.
- Keep motion subtle and scroll-triggered.
- Avoid private phone numbers, emails, API keys, analytics data, exact internal conversion metrics, or unpublished roadmap claims.
- Replace sensitive examples with generic placeholders.
