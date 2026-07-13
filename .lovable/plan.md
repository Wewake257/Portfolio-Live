
# Complete UI/UX Redesign — Vivek Kumar Portfolio

A full visual reset. Same content (already synced with your latest CV and GitHub), rebuilt around a luxury, futuristic aesthetic with a 3D centerpiece, refined typography, and a proper dark/light system.

## Design Direction (committed defaults)

Since you skipped the visual questions, I'm locking in a considered direction rather than guessing per section:

- **Palette — "Obsidian & Violet"**
  - Dark mode: near-black `#08080B` base, `#12121A` surface, electric violet `#7C5CFF` primary, iced cyan `#67E8F9` accent, warm ivory `#F5F3EE` text.
  - Light mode: ivory `#F7F5F0` base, ink `#0B0B10` text, same violet primary at slightly muted saturation, subtle graphite surfaces.
- **Typography** — `Instrument Serif` for display headlines (editorial, high-end) paired with `Space Grotesk` for UI/body (sharp, technical). Tabular numerals for stats.
- **Materials** — soft glass panels, faint noise/grain texture, hairline 1px borders at 8–12% opacity, layered shadow (ambient + accent glow), no heavy neumorphism.
- **Motion** — Framer Motion. One hero animation carries the wow (3D scene + reveal). Elsewhere: subtle fade/slide-in on scroll, magnetic buttons, cursor-follow highlights on cards. No bounce, no confetti.

## Layout & Sections

```text
┌─────────────────────────────────────────────────┐
│ Sticky glass nav · logo · links · theme toggle  │
├─────────────────────────────────────────────────┤
│ HERO — asymmetric 60/40                         │
│  Left: name / role / intro / CTAs / socials     │
│  Right: 3D centerpiece (R3F)                    │
├─────────────────────────────────────────────────┤
│ MARQUEE — tech stack ticker                     │
├─────────────────────────────────────────────────┤
│ ABOUT — editorial two-column w/ pull quote      │
├─────────────────────────────────────────────────┤
│ SKILLS — bento grid (mixed tile sizes)          │
├─────────────────────────────────────────────────┤
│ PROJECTS — filterable premium cards + hover     │
├─────────────────────────────────────────────────┤
│ EXPERIENCE — vertical timeline w/ glass nodes   │
├─────────────────────────────────────────────────┤
│ EDUCATION & CERTIFICATIONS — split grid         │
├─────────────────────────────────────────────────┤
│ HIGHLIGHTS — metric strip (projects, tools, …)  │
├─────────────────────────────────────────────────┤
│ CONTACT — split: form + direct links            │
├─────────────────────────────────────────────────┤
│ FOOTER — minimal, signature mark                │
└─────────────────────────────────────────────────┘
```

## Hero 3D Centerpiece

Built with `@react-three/fiber@^8.18` + `@react-three/drei@^9.122`. A slowly rotating faceted crystal / distorted icosahedron in violet-to-cyan gradient with a soft chromatic aberration and floating particles. It parallaxes gently with the cursor and fades in behind the headline — embedded, not pasted on. Falls back to a static gradient orb on mobile / reduced-motion.

## Component Overhaul

- **Nav** — glass pill nav on desktop, full-screen sheet on mobile, animated underline on the active section (scroll-spy).
- **Buttons** — two variants: `primary` (violet gradient with soft glow) and `ghost` (hairline border with fill on hover). Magnetic hover on desktop.
- **Project cards** — image-forward, tech chips on hover reveal, subtle 3D tilt on pointer, corner accent line that draws in.
- **Timeline** — glass nodes on a hairline rail, expandable bullets, monospace date labels.
- **Bento skills** — one tall "primary skills" tile + smaller category tiles + a quote tile.
- **Theme toggle** — animated sun ↔ crescent morph, persists to localStorage (already exists — refined visually).

## Responsiveness

- Desktop ≥1280px: asymmetric hero, 3-col project grid, full bento.
- Tablet: 2-col grids, hero stacks with 3D above headline.
- Mobile: single column, 3D replaced with animated gradient orb, sticky nav collapses to sheet.

## Technical Details

- **Files to rewrite**: `src/index.css` (tokens + fonts), `tailwind.config.ts` (extend palette, fontFamily, animation), `src/components/Navbar.tsx`, `Hero.tsx`, `About.tsx`, `Skills.tsx`, `Projects.tsx` (visual only — data intact), `Experience.tsx`, `Contact.tsx`, `Footer.tsx`.
- **New files**: `src/components/HeroScene.tsx` (R3F canvas), `src/components/Marquee.tsx`, `src/components/MetricsStrip.tsx`, `src/components/SectionHeader.tsx`, `src/components/MagneticButton.tsx`.
- **Deps to add**: `framer-motion`, `three@^0.160`, `@react-three/fiber@^8.18`, `@react-three/drei@^9.122`.
- **Fonts**: load `Instrument Serif` + `Space Grotesk` via Google Fonts in `index.html`.
- **Preserved**: all resume content, EmailJS integration, Zod validation, honeypot, theme persistence, GitHub links, resume PDF, project screenshots.
- **Accessibility**: honors `prefers-reduced-motion` (kills 3D rotation + scroll motion), maintains WCAG AA contrast in both themes, keyboard focus rings on all interactive elements.

## Out of Scope

- No content changes (already in sync with CV + GitHub).
- No backend/auth work.
- No new pages/routes — remains a single-page portfolio.

Approve to build, or tell me what to adjust (palette, typography, whether to keep the 3D scene, etc.).
