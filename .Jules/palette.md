## 2024-04-08 - Keyboard Navigation with Heavy Overlays
**Learning:** When using full-screen absolute/fixed canvas overlays (like `TraceCanvas` and `RippleCanvas`), a "skip-to-main-content" bypass is critical. Also, MUI `Box` components customized as `<a>` links often strip default focus rings, requiring explicit `:focus-visible` styles to maintain keyboard accessibility.
**Action:** Always verify keyboard focus states on custom link components and ensure heavy background overlays do not block standard skip-link mechanisms.
