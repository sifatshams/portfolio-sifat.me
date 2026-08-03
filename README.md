# Sifat Bin Anwar — Portfolio

Personal portfolio for Sifat Bin Anwar, Full Stack Web Developer, rebuilt from scratch on modern production-ready architecture.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React icons
- ESLint + Prettier

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — lint the project

## Structure

```
app/                 routes, layout, metadata (sitemap, robots, manifest)
components/          navbar, footer, ui primitives
components/sections/ hero, about, skills, projects, experience, certificates, github, contact
hooks/               scroll progress, active section, mouse position
lib/                 site content (lib/data.ts) and utils
types/               shared TypeScript types
public/              profile photo, resume.pdf, favicon, og-image
```

## Content

All site copy and links live in `lib/data.ts` — update name, role, links, skills,
projects, experience and certificates there. The résumé served at `/resume.pdf`
and the GitHub section fetches live stats from the public GitHub API for
`sifatshams`.

## Notes

- Cursor follower and custom cursor effects are disabled automatically on
  touch devices.
- Reduced-motion is respected site-wide via `prefers-reduced-motion`.
- Update `siteUrl` in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts`
  once the site has a production domain.
