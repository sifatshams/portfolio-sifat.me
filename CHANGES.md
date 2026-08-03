# Audit & upgrade notes

## Environment limitation (read this first)

This pass was done in a sandbox with **no network access**, so `npm install`,
`npm run build`, and `npm run lint` could not actually be executed against
this project. Every change below was written and reviewed by hand, and
cross-checked with the TypeScript compiler in "syntax mode" (no installed
`node_modules`, so real type-checking against React/Next's types wasn't
possible — only parse-level and structural checks). **Please run the
following locally before deploying:**

```bash
npm install
npm run lint
npm run build
```

If anything surfaces, it'll almost certainly be small — the codebase was
already clean and well-typed going in.

## Real bug fixed

- **`components/ui/particle-field.tsx`** generated particle positions with
  `Math.random()` inside `useMemo` during render. That runs on both the
  server and the client, and produces different values each time — a
  genuine hydration mismatch. Fixed by generating particles only after
  mount (`useEffect`), so the server and first client render both produce
  an empty, matching tree.

## Additions

- **`components/ui/spotlight-card.tsx`** — reusable card with a
  mouse-tracked radial spotlight, a matching glow along the border, and an
  optional subtle 3D tilt. Position is written to a CSS custom property +
  Framer Motion values instead of React state, so hovering never triggers
  a re-render. Respects `prefers-reduced-motion` (disables tilt/hover
  motion for users who've asked for it — the existing global CSS rule only
  catches CSS transitions, not Framer Motion's JS-driven springs). Now used
  across About, Skills, Certificates, Services, Experience, Projects and
  the GitHub stats cards.
- **`components/ui/marquee.tsx`** — infinite auto-scrolling row built on
  the `marquee` keyframe that already existed in `tailwind.config.ts` but
  was unused. Pure CSS transform animation (no per-frame JS), pauses on
  hover/touch, and the row is still natively drag/scrollable. Used for a
  two-row tech-stack carousel in the Skills section.
- **`components/ui/site-background.tsx`** — global animated grid + slow
  drifting gradient glows + static noise texture, mounted once in the
  layout instead of being redrawn per-section.
- **`components/ui/cursor-follower.tsx`** — rebuilt as a two-part cursor
  (fast dot + spring-lagged ring). Expands and shows an optional text
  label (`data-cursor-text` / `MagneticButton`'s new `cursorText` prop)
  over interactive elements, shrinks on click, uses `mix-blend-difference`.
  Native cursor is hidden via `html[data-custom-cursor="true"]` in
  globals.css — that attribute is only set once the component confirms JS
  is running on a fine pointer, so a script failure never leaves the page
  without a visible cursor.
- **`lib/motion.ts`** — shared easing/spring constants and variants so new
  components don't hand-roll slightly different numbers.
- GitHub stats section was moved from a client-side `useEffect` fetch to
  an **async Server Component** (`components/sections/github-stats.tsx`)
  with `fetch(..., { next: { revalidate: 3600 } })`. The numbers now ship
  in the initial HTML instead of a loading-spinner flash, and each visitor
  no longer makes their own unauthenticated call against GitHub's
  per-IP rate limit. Presentation logic moved to
  `components/sections/github-stats-view.tsx` (client component, receives
  already-fetched data as props).

## Smaller fixes

- `SITE.url` added to `lib/data.ts` and reused in `layout.tsx`,
  `robots.ts`, and `sitemap.ts` instead of three separately hardcoded
  copies of the same URL.
- Removed a dead `"Clash Display"` font name from `globals.css` — it was
  never actually loaded; `next/font`'s `Sora` is what fills
  `--font-display`.
- `next.config.ts`: added `experimental.optimizePackageImports` for
  `lucide-react` and `framer-motion` to reduce client bundle size.
- Dropped unnecessary `"use client"` directives from `about.tsx`,
  `skills.tsx`, `certificates.tsx`, `experience.tsx`, and `projects.tsx` —
  none of them use hooks or handlers directly (they only compose
  already-client child components), so they can render as Server
  Components and ship less JS.

## Deliberately left alone

Files like `navbar.tsx`, `footer.tsx`, `contact.tsx`, `hero.tsx`'s core
structure, `reveal.tsx`, `loading-screen.tsx`, `scroll-progress.tsx`,
`use-active-section.ts`, and the data/type files were already solid —
correct hook usage, proper cleanup functions, sensible types, working
accessibility attributes (`aria-label`, `aria-expanded`, focus-visible
styles, reduced-motion CSS block). I didn't rewrite things that weren't
broken; I wired the new SpotlightCard into their card-shaped children
where it made sense instead.

## On "Next.js 16"

The project is pinned to Next.js 15.1.0 / React 19.0.0. I did not bump the
major version — without network access I can't install and actually build
against a newer Next.js, and guessing at a major-version bump you can't
verify is worse than leaving a known-working pin in place. If you want to
move to Next 16, I'd recommend doing that as its own step (`npx
@next/codemod@canary upgrade latest`) so any breaking changes surface
through the actual Next.js upgrade tooling rather than a blind version
number edit.
