# Docter Web — Architecture

Production landing page built section-by-section from Figma.

## Stack

- **Next.js 15.5** (App Router) · **React 19** · **TypeScript** (strict)
- **Tailwind CSS v4** — CSS-first config via `@theme` in `globals.css`
- `next/font` (DM Sans) · `next/image`
- Helpers only: `clsx` + `tailwind-merge` (the `cn()` utility). No heavy UI libs.

## Folder structure

```
src/
├── app/
│   ├── layout.tsx        # html shell, fonts, metadata, skip-link
│   ├── page.tsx          # composes sections in Figma order
│   └── globals.css       # @theme design tokens + base styles
├── components/
│   ├── ui/               # primitives: Button, (Heading, Badge, Card… as needed)
│   ├── layout/           # Container, SectionWrapper, (Header, Footer)
│   └── sections/         # one folder per Figma section
│       ├── Hero/  Features/  Onboarding/  Testimonials/
│       ├── FAQ/   CTA/        Articles/
├── lib/                  # fonts.ts, utils.ts (cn)
├── hooks/                # shared client hooks (added when needed)
└── types/                # shared domain types
public/
├── images/               # next/image assets per section
└── icons/                # SVG icons
```

## Conventions

- **Design tokens** live in `globals.css` `@theme`. Extend per section — never
  hardcode a hex/size that recurs. Tokens are auto-exposed as CSS variables.
- **Server Components by default.** Add `"use client"` only for interactivity.
- **Every section** = `SectionWrapper` (full-bleed band + bg) → `Container`
  (max 1440px, fluid gutters) → content. Keeps vertical rhythm DRY.
- **Reuse `cn()`** for any component exposing an overridable `className`.
- **Pixel-perfect at 1440px**; responsive behavior designed down to 320px
  (mobile-first), no horizontal scroll at any breakpoint.
- **a11y**: semantic HTML, single `<h1>` per page, visible focus rings,
  alt text on every image, `prefers-reduced-motion` honored.

## Section → Figma node map (`Doctor Website` canvas)

| Order | Section      | Figma node | Status  |
| ----- | ------------ | ---------- | ------- |
| 1     | Hero/Header  | `#9:33672` | pending |
| 2     | Features     | `#9:33797` | pending |
| 3     | Onboarding   | `#9:34101` | pending |
| 4     | Testimonials | `#9:34111` | pending |
| 5     | FAQ          | `#9:34152` | pending |
| 6     | CTA          | `#9:34165` | pending |
| 7     | Articles     | `#9:34250` | pending |
| 8     | Footer       | `#9:34281` | pending |

> Section names/nodes are provisional and confirmed per the link you send.

## Commands

```bash
npm run dev          # local dev
npm run build        # production build
npm run type-check   # tsc --noEmit
npm run lint         # eslint
```
