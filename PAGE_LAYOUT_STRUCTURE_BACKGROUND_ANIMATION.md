# Layout, Structure, Background & Animation — Page-by-Page Detail

A detailed description of **layout**, **structure**, **background**, and **animation** for every page of the portfolio site.

---

## Shared Across All Pages

### Global background (behind every page)
- **AnimatedBackground** is a **fixed** layer (`position: fixed; inset: 0`) that sits behind all content.
- It uses **z-index: -10** and **pointer-events: none**, so it never intercepts clicks or scroll; the page scrolls normally over it.
- **Layers (bottom to top):**
  1. **Solid base** — `#0b0b12` (dark blue-black) so the viewport is never too bright.
  2. **Gradient mesh** — Four radial gradients (violet, cyan, deep blue, and a subtle center wash) with `background-size: 220% 220%` and a **24-second** `mesh-shift` animation that moves the background position for a slow, subtle drift.
  3. **Six glowing blobs** — Soft circles (violet, cyan, indigo) at different positions (e.g. 12% 18%, 78% 22%, 48% 72%), each with **blur-[80px]**, sizes from 160px to 320px. Each blob uses either `blob-float-a` or `blob-float-b` keyframes (22–32s duration, staggered delay) so they drift and scale slightly in an organic way. Only **transform** is animated for GPU performance.
- **Theme:** The root `<div>` also has `background: var(--background)`, so when a theme is applied (e.g. Ocean, Forest), the CSS variable can change; the AnimatedBackground component itself does not switch with theme — it always shows the violet/cyan/deep blue mesh and blobs.

### Global page transition (when switching pages)
- When the user clicks a nav link, the current page **exits** and the new page **enters**.
- **AnimatePresence** with `mode="wait"` ensures the old page fully exits before the new one appears.
- **pageTransition** variants:
  - **initial:** opacity 0, y: 12px (slightly below).
  - **animate:** opacity 1, y: 0 over 0.35s with custom easing.
  - **exit:** opacity 0, y: -8px over 0.25s (slight upward drift).
- The app also runs `window.scrollTo({ top: 0, behavior: 'smooth' })` on navigation so the user starts at the top of the new page.

---

## 1. Home Page

### Layout
- **Full-width, vertical stack.** No sidebars; content is a single column from top to bottom.
- **Hero** occupies the **full viewport height** (`min-h-screen`) and is **centered** both vertically and horizontally. Content is constrained to `max-w-4xl` with horizontal padding `px-6` / `sm:px-8`.
- **All sections below the hero** use a consistent horizontal band: `py-20 px-6`, content inside `max-w-6xl mx-auto` (except CTA, which uses `max-w-4xl`). So the page has a clear “full-bleed hero” then “contained content strip” pattern.
- **Grid usage:** Stats = 2 columns on small screens, 4 on medium+; Features = 3 columns on medium+; DemoRail = 3 columns on medium+; Approach = 2 columns on medium, 4 on large; CTA = 2 columns on large. Testimonials and ProductsMarquee are horizontal scrolling strips, not grids.

### Structure
- **Hierarchy (top to bottom):**
  1. **HeroSection** — Single full-viewport block.
  2. **StatsRow** — One section: heading-less row of 4 stat cards.
  3. **FeaturesSection** — Section title (“What I Offer”) + subtitle, then 3 feature cards in a row.
  4. **DemoRail** — Section title (“See It in Action”) + subtitle, then 3 demo cards (video + caption + CTA).
  5. **TestimonialsSlider** — Section title (“What People Say”) + subtitle, then one horizontal strip of testimonial cards (infinite marquee).
  6. **ApproachSection** — Section title (“My Approach”) + subtitle, then 4 step cards in a row (with optional connecting line on large screens).
  7. **ProductsMarquee** — Section title (“Projects I’ve Built”) + subtitle + “Show More” toggle, then two horizontal marquee rows of project pills.
  8. **CTASection** — Section title (“Ready to Build…”) + subtitle, then two side-by-side cards: contact form and “Prefer a Quick Chat?” with bullets and buttons.
- **Component nesting:** HomePage renders each section in order; every section after the hero is wrapped in a **ScrollReveal** component so it animates in when it enters the viewport.
- **Cards:** Sections use a shared card pattern: `rounded-2xl`, `bg-white/5`, `border border-white/10`, `backdrop-blur-sm`, with hover states (lift, border/glow). Feature cards are clickable and call `onNavigate` to jump to Experience, Projects, or Case Studies.

### Background
- **No page-specific background.** The Home page does not add its own background layer; it relies entirely on the **global AnimatedBackground** and the root `var(--background)`.
- **Hero only:** The hero has **decorative elements** drawn on top of the global background: four absolute-positioned shapes (e.g. a rotated square, circles) with violet/cyan borders and low opacity, using CSS `animate-pulse`, `animate-bounce`, and `animate-ping` with staggered delays. These sit in an `absolute inset-0 pointer-events-none` div so they don’t affect interaction.
- **Sections:** All section containers are transparent. Cards and panels use the glass style (`bg-white/5`, `border-white/10`, `backdrop-blur-sm`), so the animated gradient and blobs show through subtly behind the content.

### Animation
- **Hero**
  - **Entrance:** Framer Motion `fadeInUp` on four blocks: welcome pill, headline, typewriter area, and CTA buttons. Each uses a `custom` value (0–3) so the **visible** variant gets a staggered delay (0.08s apart). Motion: start at opacity 0 and y 24px, animate to opacity 1 and y 0 with 0.4s duration and custom easing.
  - **Typewriter:** JavaScript-driven. One of two strings is typed at 50ms per character, then a 2s pause, then deleted at 30ms per character, then switch to the other string and repeat. A small blinking cursor (violet bar with `animate-pulse`) sits after the text.
  - **Decorative shapes:** CSS only — pulse, bounce, ping with different delays so they feel slightly offset.
- **StatsRow**
  - No entrance animation (the section itself is wrapped in ScrollReveal, so the whole block fades in and moves up when it enters view). On **hover**, each stat card: translates up 8px (`-translate-y-2`), scales the number slightly (`scale-110`), and reveals a gradient overlay. Transitions are 300ms.
- **FeaturesSection**
  - Section fades/slides in via ScrollReveal. Each **card** on hover: lifts 8px, border and shadow shift to violet, icon in the gradient box scales up, and a small arrow circle appears in the corner. Click navigates to the corresponding page.
- **DemoRail**
  - Section ScrollReveal; **video** has `group-hover:scale-105` with a 500ms transition; **card** has the same lift/glow hover as other cards.
- **TestimonialsSlider**
  - Section ScrollReveal. The testimonial list is **duplicated** and placed in a flex row; the row uses the class that applies `animate-marquee` (translateX from 0% to -100% over 20s, linear, infinite) so it scrolls horizontally. A “pause on hover” is intended via `.hover\:pause` but is implemented with `<style jsx>` in the component, which is **not supported in Vite** — so the pause may not work unless converted to a plain `<style>` tag like ProductsMarquee.
- **ApproachSection**
  - Section ScrollReveal. Each **card** has a **3D tilt on mouse move:** `onMouseEnter` / `onMouseLeave` and `onMouseMove` compute the cursor position relative to the card center and set `transform: perspective(1000px) rotateX(...) rotateY(...)` so the card tilts toward the cursor. On hover, the card also lifts and gets the standard glow. A thin gradient line connects each step to the next on large screens.
- **ProductsMarquee**
  - Section ScrollReveal. **First row:** same marquee animation as testimonials (20s), with a plain `<style>` block for `.hover\:pause` so hovering pauses the scroll. **Second row:** same items in reverse order and the animation runs in **reverse** (25s). “Show More” toggles between a short and long list of project pills; pills have hover state and a subtle glow animation.
- **CTASection**
  - Section ScrollReveal. **Form:** submit triggers a loading state (spinner + “Sending…”), then a success state (checkmark + message), then reset after 3s. **Buttons:** scale up slightly on hover; “Schedule a Call” calls `onNavigate('contact')`.
- **ScrollReveal (all sections after hero):** Each wrapped section uses Framer Motion’s `whileInView` with variants: **hidden** = opacity 0, y 32px; **visible** = opacity 1, y 0, 0.5s duration, custom easing. Viewport options: `once: true`, margin and amount set so the animation triggers when the section is slightly in view. So as the user scrolls, each section animates in **once** when it enters the viewport.

---

## 2. About Page

### Layout
- **Single column, contained.** The whole page is `min-h-screen pt-24 pb-20 px-6` with content inside `max-w-6xl mx-auto`. The top padding (`pt-24`) clears the fixed nav.
- **Hero block** is a **two-column grid** on large screens (`lg:grid-cols-2`), with a 12-unit gap. On smaller screens the columns stack. Left column: photo and “Available” badge. Right column: name, subtitle, location/remote/experience meta, then tabs + tab content.
- **Below the hero:** Two full-width subsections — Toolstack Heatmap, then Education & Certifications — each with its own heading and internal grid. Vertical spacing: `mb-20` after the hero, `mb-20` between the two subsections; EduCerts uses `mb-16` between its own “Education” and “Certifications” blocks.

### Structure
- **Hero**
  - **Left:** A wrapper for the photo: `max-w-md mx-auto`, aspect-square, rounded-2xl, gradient border and tint (`from-violet-500/20 to-cyan-500/20`). Image is `ImageWithFallback`. A small “Available for projects” pill with green dot and pulse sits at `-bottom-4 -right-4`.
  - **Right:** Title (`h1` with gradient text on the name), subtitle (`h2`), then a row of meta items (MapPin, Globe, Calendar) with text. Then **Radix Tabs:** TabsList with three triggers (Vision, Expertise, Innovation), TabsContent with the active tab’s description and a “Key Technologies” list of badges.
- **ToolstackHeatmap**
  - Section heading (“Education & Certifications” is in EduCerts; Toolstack has its own heading pattern). Four **groups** (e.g. AWS, Web, DevOps, Security), each with an icon, label, and a list of **chips** (tool names). Chips are styled by “heat” (core / regular / learning) — brighter for core, dimmer for learning.
- **EduCerts**
  - Main heading “Education & Certifications”, then “Education” with a grid of 4 cards, then “Certifications” with a grid of 3 cards. Each card: icon in a gradient box, title, org, optional “In Progress” badge, and hover glow.

### Background
- **No About-specific background.** The page uses only the **global AnimatedBackground** and root background. All cards and panels use the same glass style (`bg-white/5`, `border-white/10`, `backdrop-blur-sm`). The photo container has a gradient tint and border but no separate background layer for the whole page.

### Animation
- **About page does not use Framer Motion or ScrollReveal.** There are no scroll-triggered entrance animations; content is static on load.
- **Tabs:** Radix handles focus and keyboard; the active tab gets a violet background and white text. No custom transition between tab panels.
- **ToolstackHeatmap:** Chips have hover styles (scale, brighter border/background) via Tailwind; no keyframe or Framer animation.
- **EduCerts:** Cards have hover: lift (`-translate-y-2`), icon scale, gradient glow overlay, and optional “In Progress” badge with `animate-pulse`. Transitions are 300–500ms. No entrance animation when the section scrolls into view.

---

## 3. Experience Page

### Layout
- **Single column, narrow.** Content is `max-w-4xl mx-auto` with `pt-24 pb-20 px-6`. A centered **header** (title + subtitle) sits at the top with `mb-20`.
- **Timeline:** A **vertical spine** runs down the middle on medium+ screens (absolute left 50%, 0.5px width, gradient line). On small screens the spine is on the left (left: 2rem). Each **timeline item** is a row: on the left, a small gradient circle (the “node”); on the right, a content card. On medium+ screens, items **alternate** left/right: even-index items have the card on the right (`md:flex-row`), odd-index on the left (`md:flex-row-reverse`). Card width is `md:w-5/12` with appropriate margin so cards don’t overlap the spine. Vertical spacing between items is `space-y-16`.

### Structure
- **Header:** One `h1` with “Professional” and gradient “Journey,” then a paragraph subtitle. Both centered, max-width on the subtitle.
- **Timeline**
  - **Spine:** Single `div` with `absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5` and `bg-gradient-to-b from-violet-500 via-cyan-500 to-violet-500`, with a small transform for pixel alignment on desktop.
  - **Items:** Each experience is a wrapper `div` with class `timeline-item` (used by IntersectionObserver). Inside: (1) **Node** — absolute positioned, gradient circle with `animate-pulse-glow`. (2) **Card** — period badge at top, role title, company (link if URL) + type, location with icon, description paragraph, “Key Achievements” list, “Technologies” tags, and optional “View related work” link. Cards use the same glass style and hover lift/glow as elsewhere.

### Background
- **No Experience-specific background.** Only the **global AnimatedBackground** and root background. The **spine** is the only extra visual: a thin vertical gradient line. Cards are glass; no additional panels or full-width bands.

### Animation
- **Scroll-triggered entrance:** A custom **IntersectionObserver** runs once on mount. It watches all elements with class `timeline-item` (they start with `opacity-0`). When an item crosses the threshold (0.1) with a small bottom rootMargin (-50px), the class `animate-fade-in-up` is added. That class (from globals.css) runs a keyframe that goes from opacity 0 and translateY(20px) to opacity 1 and translateY(0) over 0.6s ease-out. So timeline cards **fade in and move up** as you scroll.
- **Hover:** Cards use the standard hover lift, border/glow, and text color transitions. The timeline node has `animate-pulse-glow` (box-shadow pulse). Company link shows an external-link icon on hover. “View related work” has a small translate on hover.
- **No Framer Motion** on this page; all motion is CSS and one JS observer.

---

## 4. Projects Page

### Layout
- **Single column, wide.** Content is `max-w-7xl mx-auto` with `pt-24 pb-20 px-6`. **Header** is centered with `mb-16`.
- **Featured block:** One row of 3 cards (`grid lg:grid-cols-3 gap-8`) with `mb-16`.
- **Filters:** A row of pill buttons (All, Frontend, Backend, Cloud, AI/ML) with `mb-12`.
- **All projects grid:** Responsive grid — 1 column on small, 2 on medium, 3 on large (`grid md:grid-cols-2 lg:grid-cols-3 gap-8`). Cards are uniform in structure: image on top, then title, description, and tech badges.

### Structure
- **Header:** “Featured” + gradient “Projects” and a subtitle paragraph.
- **Featured section:** Title “Featured Projects” with a small violet dot and pulse, then three **project cards.** Each card: image container (ProjectCover, 16:9 or fixed height), “Featured” badge overlay, and on hover a dark overlay with “Code” and “Live Demo” buttons; below, title, description, and up to 3 tech badges plus “+N” if more.
- **Filters:** Icon + “All Projects” heading, then a flex wrap of filter pills. Active pill: gradient background and white text; inactive: glass style with hover.
- **All projects:** Same card pattern for every project. Image area has ProjectCover, optional “Featured” badge, and top-right icon buttons (GitHub, external link) that are always visible (no hover overlay). Body: title, description, tech badges. Each card has the shared hover lift and gradient glow.

### Background
- **No Projects-specific background.** Only the **global AnimatedBackground** and root background. All cards use the glass style. No full-width bands or extra background layers.

### Animation
- **No scroll-triggered or Framer entrance animations.** Content is static on load.
- **Hover:** Featured cards: image scales on hover (`group-hover:scale-110`), overlay fades in to show buttons. All cards: lift 8px, border and shadow shift to violet, gradient glow overlay. Filter pills: color and background transition on click/hover. Transitions are 200–300ms. **style={{ animationDelay }}** is set on some cards but is not used by any keyframe in the component — so those delays have no effect unless a parent or global animation targets them.

---

## 5. Case Studies Page

### Layout
- **Single column, contained.** Content is `max-w-6xl mx-auto` with `pt-24 pb-20 px-6`. **Header** is centered with `mb-16`.
- **Case study list:** A **vertical stack** (`space-y-8`) of large cards. Each card is a **two-column grid** on large screens (`lg:grid-cols-2 gap-0`): left = image, right = summary. When expanded, a **full-width details panel** appears below the grid (spanning both columns), then a “Back to Top” button at the bottom.

### Structure
- **Header:** “Case” + gradient “Studies” and a subtitle.
- **Per case study:**
  - **Top block (grid):** Left column: image (full height on lg), category badge, GitHub button overlay. Right column: title, subtitle, row of meta (duration, team, client) with icons, technology badges, and “Read Case Study” / “Hide Details” button.
  - **Expandable details:** Rendered only when that study is selected. It’s a full-width panel with `border-t border-white/10 bg-white/5 p-8` and class `animate-fade-in-up`. Inside: **two-column grid** (md). Left: “The Problem,” “The Solution,” “Architecture (Diagram),” “Key Features.” Right: “Success Metrics,” “Key Decisions,” “Security,” “Results,” “Technical Highlights,” and action buttons (View Repository, Live Demo). Subsection headings use semantic colors (red, green, blue, teal, orange, pink, violet, indigo) for scanning.
- **Back to Top:** Centered button below the last card.

### Background
- **No Case Studies–specific background.** Only the **global AnimatedBackground** and root background. Cards and the details panel use glass and bordered panels. The details panel is slightly elevated visually with the border-top and extra background.

### Animation
- **No ScrollReveal or Framer on this page.** No scroll-triggered entrance.
- **Expand/collapse:** Clicking “Read Case Study” toggles `selectedStudy`. The details block mounts/unmounts; when it mounts it has `animate-fade-in-up` (opacity and translateY over 0.6s). The button label and arrow (rotate 90° when expanded) transition with CSS.
- **Hover:** Main card: border/glow; image has `group-hover:scale-105`. Standard 300ms transitions.

---

## 6. Books Page

### Layout
- **Single column, wide.** Content is `max-w-7xl mx-auto` with `pt-24 pb-20 px-6`. **Header** is centered with `mb-16`.
- **Filters:** “Browse by Category” with a flex wrap of category pills and `mb-12`.
- **Books grid:** Responsive — 2 columns on small, 3 on large, 4 on xl (`grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8`). Each cell is a **book card** that opens a **modal** (Radix Dialog) on click.
- **Stats strip:** Below the grid, one horizontal band (`mt-20`) with a 4-column grid of stats (books count, categories, reading time, avg rating).

### Structure
- **Header:** “My Reading” + gradient “Library” and subtitle.
- **Category filters:** Pills for “All” plus unique categories from the books data. Active pill: gradient; inactive: glass with hover.
- **Book card (trigger):** Wrapped in `Dialog` and `DialogTrigger`. Card layout: **Image block** (aspect 3:4) with BookCover component, category badge, reading-time badge, and hover overlay “View Details”; **Text block** (title, author + year, star rating, tag badges). Card has hover lift and gradient glow.
- **Dialog (modal):** `DialogContent` with `max-w-4xl max-h-[90vh] overflow-y-auto`. **Two-column grid:** Left — book cover (aspect 3:4), title, author, year, stars, tags, reading time; Right — Summary, Key Insights (list), Why It Matters, optional Related Work (buttons), Buy Book button. Modal uses `bg-gray-900/95 border-white/20`.
- **Stats:** One card with heading “Reading Stats” and four stat cells (number + label).

### Background
- **No Books-specific background.** Only the **global AnimatedBackground** and root background. Cards and the stats strip use the glass style. The modal has a semi-opaque dark background so the page behind is slightly visible.

### Animation
- **No ScrollReveal or Framer on this page.** No scroll-triggered entrance.
- **Hover:** Card lift, image scale, overlay fade, gradient glow — all standard 300ms. Modal open/close is handled by Radix (no custom motion specified in the snippets).
- **BookCover:** May use a hook (e.g. Open Library) to load cover by ISBN; no animation specified for load.

---

## 7. Contact Page

### Layout
- **Single column, contained.** Content is `max-w-6xl mx-auto` with `pt-24 pb-20 px-6`. **Header** is centered with `mb-16`.
- **Main block:** **Two-column grid** on large screens (`lg:grid-cols-2 gap-16`). Left: intro text, contact method cards, social links, and “Currently Available” card. Right: “Send a Message” form card.
- **Bottom:** One centered “Prefer a Quick Call?” card with `mt-20`.

### Structure
- **Header:** “Get In” + gradient “Touch” and subtitle.
- **Left column:** Heading “Let’s Start a Conversation,” paragraph, then **three contact cards** (icon in gradient circle + title + value) for Email, Location, Response Time. Then “Connect on Social” with three icon buttons (GitHub, LinkedIn, Mail). Then **availability card:** green tint, pulse dot, “Currently Available,” and short text.
- **Right column:** One **form card** (glass). If submitted successfully: checkmark, “Message Sent Successfully!,” short message, and “Back to Top” button. Otherwise: form with name, email, project type (Select), message (Textarea), honeypot (hidden), validation errors, optional rate-limit message, and submit button. Submit uses Formspree if configured, else mailto fallback.
- **Bottom card:** Heading “Prefer a Quick Call?,” text, and “Schedule a Call” button (mailto).

### Background
- **No Contact-specific background.** Only the **global AnimatedBackground** and root background. Contact method cards and form card use glass; the availability block has a green gradient tint (`from-green-500/10 to-emerald-500/10`). No full-width bands.

### Animation
- **No ScrollReveal or Framer on this page.** No scroll-triggered entrance.
- **Hover:** Contact cards and social buttons get background/border transition. Form card has the standard gradient hover glow. Buttons: scale and border on hover. Submit button shows a spinner and “Sending…” during submit, then success or error state. No custom page-level motion.

---

## Quick Reference Table

| Page        | Layout summary                    | Structure highlight                          | Background                    | Animation summary                                                                 |
|------------|------------------------------------|----------------------------------------------|------------------------------|-----------------------------------------------------------------------------------|
| Home       | Full-bleed hero, then contained    | 8 sections, ScrollReveal on 7                | Global only; hero decor      | Hero fadeInUp + typewriter; section scroll-in; hover lift/glow; Approach 3D tilt  |
| About      | 2-col hero, then stacked sections  | Photo + tabs; Toolstack; EduCerts grids       | Global only                  | Tab switch; card hover only                                                       |
| Experience | Centered narrow; vertical timeline | Spine + alternating left/right cards         | Global + spine gradient      | IntersectionObserver fade-in; card hover                                          |
| Projects   | Wide; featured row + filter + grid | 3 featured, pills, then project cards        | Global only                  | Card hover only                                                                   |
| Case Studies | Contained; stacked big cards    | 2-col card + expandable details panel        | Global only                  | Expand/collapse + fade-in-up; card hover                                           |
| Books      | Wide; filters + grid + stats       | Cards open modal; 4-col stats                | Global only                  | Card hover; modal (Radix)                                                          |
| Contact    | 2-col: info + form                | Contact cards, social, form, bottom CTA      | Global only                  | Form states; hover on cards/buttons                                                |

This document gives a single place to look up how each page is laid out, how it’s structured, what background it uses, and what animations run where.
