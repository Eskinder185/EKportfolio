# Live Background Not Displaying — Debug Report

## Per-page analysis

### All pages (Home, About, Experience, Projects, Case Studies, Books, Contact)

| Question | Answer |
|----------|--------|
| **Is the live background being loaded?** | Yes. `AnimatedBackground` is mounted once in `App.tsx` (line 70) and renders for every page. It is a **global** component, not per-page. |
| **What is preventing it from appearing?** | **Stacking context**: the root wrapper div in `App.tsx` has `background: var(--background)` (opaque) and does **not** create a stacking context. So in the ancestor stacking context, the root div (and its background) is painted **on top of** the `AnimatedBackground` (z-index -10). Result: you only see the root’s dull/static background. |
| **Exact file causing the issue** | `src/App.tsx` |
| **Exact code problem** | Line 69: `<div className="min-h-screen" style={{ background: 'var(--background)' }}>`. This div (1) has an opaque background and (2) has no `position`/`z-index`, so it does not create a stacking context. Its children (including `AnimatedBackground` with `z-index: -10`) are therefore stacked in the **parent** stacking context (e.g. `#root`/body). There, elements with `z-index: -10` are painted first, then elements with `z-index: auto` (0). So the root div (with its background) is painted **after** and **above** the fixed background. |
| **Fix needed** | Make the root div create a stacking context so that **inside** it the order is: root background → `AnimatedBackground` (-10) → rest of content (0). Do this by giving the root div `position: relative` and `z-index: 0` (e.g. Tailwind `relative z-0`). |

---

## Summary: main root cause

**Cause:** The animated background is in the DOM and renders correctly, but it is **hidden behind** the app’s root wrapper because of **stacking order**, not because of overflow, opacity, size, or missing assets.

- **Where the background lives:** Rendered once in `App.tsx` as the first child of the root div. It is **global**; no page mounts it separately.
- **Why it’s hidden:** The root div has `background: var(--background)` and no stacking context. So in the same (parent) stacking context, the root div (with that background) is painted above the fixed `AnimatedBackground` (z-index -10). The visible “background” is therefore the root’s solid/gradient layer, not the animated one.
- **What is not the problem:**  
  - AnimatedBackground is mounted and has correct `fixed inset-0`, `overflow-hidden`, keyframes in CSS (`mesh-shift`, `blob-float-a/b`).  
  - No missing imports or wrong paths; no conditional that unmounts it.  
  - No page-level wrapper or Framer `motion.div` is explicitly covering it; the only “cover” is the root div’s own background paint.

---

## Recommended fix

Create a stacking context on the **root wrapper** so that:

1. The root’s background is painted first (bottom layer inside that context).
2. `AnimatedBackground` (z-index -10) is painted next, on top of the root background.
3. Navigation, main, footer (z-index auto) are painted on top of the animated layer.

Then the animated mesh and blobs are visible on all pages, with content correctly above them.

---

## Code change

**File:** `src/App.tsx`  

**Change:** On the root div, add Tailwind classes `relative z-0` so it creates a stacking context and the internal order is as above.

**Before:**
```jsx
<div className="min-h-screen" style={{ background: 'var(--background)' }}>
```

**After:**
```jsx
<div className="relative z-0 min-h-screen" style={{ background: 'var(--background)' }}>
```

Optional (for consistency): you can set the root’s background to `transparent` so only the animated layer provides the base look; the doc fix above is the minimal change that restores the live background without changing theme behavior.
