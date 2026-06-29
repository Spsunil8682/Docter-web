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

See [ARCHITECTURE.md](ARCHITECTURE.md) for folder structure and conventions.
