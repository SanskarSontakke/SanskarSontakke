
## 2025-04-07 - Add Keyboard Navigation Bypass & Focus Visible Styles
**Learning:** Absolute canvas overlays (`TraceCanvas`, `RippleCanvas`) on a page can obscure visual flow and complicate accessibility unless a top-level keyboard navigation bypass (like a skip-to-main-content link) is used to bypass the overlays entirely. Also, custom components like MUI's `<Box component="a">` strip default browser focus rings; explicitly adding `&:focus-visible` styles matching the `&:hover` state is necessary to maintain keyboard accessibility.
**Action:** When using heavy graphical overlays, always provide a hidden but focusable skip-to-main-content link. For any custom styled interactive elements, ensure `&:focus-visible` states are defined to match `&:hover` aesthetics for keyboard users.
