# Styling rules

- Keep light-mode refinements scoped to `.light` and semantic CSS tokens so dark mode retains its existing visual identity.
- Load portfolio fonts through the existing document head links, never through remote CSS imports, so stylesheet compilation stays reliable.
- Keep portrait motion in an isolated CSS-module component using CSS perspective rather than WebGL; photo-depth effects need no 3D engine and must respect reduced-motion preferences.