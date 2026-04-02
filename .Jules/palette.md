## 2024-05-18 - Skip-to-content links with overlay elements
**Learning:** In projects with absolute/fixed canvas overlays (like TraceCanvas and RippleCanvas) or heavy app bars, standard keyboard navigation can be cumbersome before reaching the main content.
**Action:** Always implement a skip-to-content link as the very first focusable element. Ensure it brings itself into view seamlessly when focused, keeping the focus state visible and high-contrast while eliminating the default `main:focus` outline for aesthetics.
