# Styling rules

- Keep light-mode refinements scoped to `.light` and semantic CSS tokens so dark mode retains its existing visual identity.
- Load portfolio fonts through the existing document head links, never through remote CSS imports, so stylesheet compilation stays reliable.