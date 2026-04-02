## 2025-02-23 - Focus States on Custom MUI Elements
**Learning:** When using custom elements like MUI's `<Box component="a">` to create links instead of standard `<Link>` or `<Button>` components, the default browser or MUI focus rings are often stripped or obscured, rendering them inaccessible to keyboard users without explicit styles.
**Action:** Always add `&:focus-visible` styles matching `&:hover` states when creating interactive custom components with `<Box>` or generic HTML tags to ensure consistent keyboard accessibility.
