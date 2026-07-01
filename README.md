# Docter-web

Production landing page for **Amrutam** — built section-by-section from Figma.

## Stack

- **Next.js 15.5** (App Router) · **React 19** · **TypeScript** (strict)
- **Tailwind CSS v4** — CSS-first config via `@theme`
- `next/font` · `next/image`
- Prettier (with `prettier-plugin-tailwindcss`) for formatting

Statically generated (SSG) — every route is prerendered to HTML at build time.

## Getting started

```bash
npm install
npm run dev          # local dev server
```

## Scripts

```bash
npm run dev          # start the dev server
npm run build        # production build
npm run start        # serve the production build
npm run lint         # eslint
npm run type-check   # tsc --noEmit
npm run format       # prettier --write .
npm run format:check # verify formatting
```

## Project structure

```
src/
├── app/                  # layout.tsx, page.tsx, globals.css (@theme tokens)
├── components/
│   ├── ui/               # primitives (Button, …)
│   ├── layout/           # Container, Header, TopBar, Footer
│   └── sections/         # one folder per page section
├── lib/                  # fonts.ts, utils.ts (cn)
└── types/                # shared domain types
public/images/            # next/image assets per section
```

## Conventions

- **Design tokens** live in `globals.css` `@theme` — never hardcode a recurring hex/size.
- **Server Components by default**; add `"use client"` only for interactivity.
- **`Container`** caps content at 1440px with fluid gutters (`px-5 sm:px-8 lg:px-[100px]`).
- **Pixel-perfect at 1440px**, responsive down to 320px with no horizontal scroll.
- **a11y**: semantic HTML, single `<h1>` per page, visible focus rings, alt text on every image.
