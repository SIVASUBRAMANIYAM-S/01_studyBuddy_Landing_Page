# Study Buddy — Landing Page Design System

> *We build the path, you build the future.*
> Study Buddy by Vivodha: one AI learning platform for students, parents, teachers and institutes, built for CBSE, state boards, JEE and NEET.

This document is the single source of truth for the landing page's visual and interaction design. Code must follow it, and any deviation needs a written reason.

---

## 1. Audience & context

| | |
|---|---|
| **Who** | School principals, school owners and coaching-academy owners in India |
| **Arriving from** | Instagram, Facebook and YouTube ads |
| **Device** | Mostly mid-range Android phones, 360–412px wide, often on 4G |
| **Mindset** | Evaluating a vendor, not studying. They are skeptical of edtech hype and want to know: *Is this credible? Will it help my results and my teachers? What does a start look like?* |
| **Primary action** | "Book a free institute demo" (form), with "Chat on WhatsApp" as the secondary action. Final copy lives in [CONTENT.md](CONTENT.md). |

**Design implication:** the page has to read as trustworthy within 5 seconds on a small screen. We earn that with calm editorial confidence, real people and honest evidence, not with visual noise.

---

## 2. Design direction — "The editorial school report"

The reference is **Poster 3** (`reference/Poster/…11.38.19 PM.jpeg`). The page should feel like a thoughtfully produced school annual report or a good newspaper education supplement: warm paper, serif headlines, real students, a pen-in-the-margin annotation, and data shown modestly.

**Principles**
1. **Warm, not loud.** One accent colour, used sparingly. *Why: principals buy from people who seem steady and serious.*
2. **Human first.** A real student's face comes before any interface. *Why: a principal's job is students, not dashboards.*
3. **Evidence over hype.** Phrases like "Start with a baseline" and "illustrative preview" beat "98% pass rate!". *Why: unverifiable claims damage trust with experienced educators.*
4. **Editorial hierarchy.** Big serif statements, short paragraphs and generous whitespace. *Why: decision-makers skim, and strong typographic hierarchy makes skimming work.*

### Explicitly forbidden
These are the visual habits of the current app and posters 1–2. **They must not appear on this page.**

| Don't | Why |
|---|---|
| Purple–blue gradients | They're the default "AI startup" look and make us interchangeable with every other edtech app. |
| Glassmorphism, frosted panels | Poor contrast, heavy GPU cost on cheap phones, and no meaning. |
| Glowing or neon cards, coloured outer glows | They read as gaming or crypto, not as a school. |
| Emoji as icons (👋 🧪 💰) | They render inconsistently across Android OEMs and look informal. |
| Rainbow pill tags (JEE / NEET / CBSE in 6 colours) | Colour without meaning, and it competes with the CTA. |
| Generic stat-counter rows ("10K+ Students · 98% Pass Rate · 500+ Tests · 24/7") | Every competitor has them, and the numbers can't be checked. |
| Inter (or system sans) for everything | It's the default of a thousand SaaS sites and has no personality. |
| Fabricated metrics or fake dashboards presented as real | They create ASCI and trust risk. Mockups are always labelled illustrative. |
| Stock photos of models, or AI-generated faces | See §10. |

---

## 3. Colour tokens

Matched to the Study Buddy app (studybuddy.vivodha.com): a light blue-white page, deep navy ink and dark bands like the app sidebar, royal-blue buttons like the app's Sign In, an orange/amber energy accent like "Score Higher" on the login page, and indigo as the quiet support colour. Token names were kept from the first theme so components didn't change (`teal` now holds indigo).

```css
:root {
  /* Surfaces */
  --paper:        #F5F8FF;  /* page background, light blue-white */
  --paper-2:      #EAF0FD;  /* alternate section band */
  --surface:      #FFFFFF;  /* cards, inputs, dashboard frame */

  /* Ink */
  --ink:          #13235B;  /* headings, body, navy dark bands */
  --ink-2:        #4A5677;  /* secondary / muted text */
  --ink-on-dark:  #C8D3F5;  /* body text on --ink bands */

  /* Primary: royal blue (actions) */
  --primary:       #2563EB; /* button fill, logo mark, focus ring */
  --primary-hover: #1D4ED8; /* button hover */

  /* Accent: orange / amber (energy and emphasis, not buttons) */
  --accent:       #EA580C;  /* large highlight words, underline stroke, eyebrow rules, markers */
  --accent-hover: #C2410C;
  --accent-ink:   #C2410C;  /* small orange text on paper (eyebrows, links), numbered markers */
  --accent-on-dark:#FBBF24; /* amber eyebrows/script on --ink bands */
  --accent-tint:  #FFEDD5;  /* audience badge background, highlights */

  /* Support: indigo (data and reassurance). Token still named "teal". */
  --teal:         #4F46E5;  /* chart bars, icons, check marks */
  --teal-ink:     #4338CA;  /* indigo text/labels */
  --teal-tint:    #E0E7FF;  /* soft info backgrounds */

  /* Chart-only third hue (dashboard mockup) */
  --ochre:        #F59E0B;

  /* Lines */
  --line:         #DCE3F3;  /* hairline dividers & card borders (decorative) */
  --line-strong:  #7C88A6;  /* input borders (meets 3:1 non-text) */

  /* Feedback (forms only) */
  --error:        #B42318;
  --success:      #1F7A4D;
  --warning:      #8A5A00;

  /* Focus */
  --focus:        #2563EB;  /* 2px ring + 2px offset in --paper */
}
```

*Why blue and navy:* principals who sign up land in the Study Buddy app, so the page should already feel like the product they'll use. One brand, one first impression.
*Why blue buttons and orange highlights:* blue says "act here" consistently with the app, and orange gives the headline and markers energy without competing with the buttons.
*Why indigo is support only:* it carries data (bars, checks, icons) and stays quieter than both blue and orange.

### Contrast ratios (WCAG 2.1, computed)

| Foreground | Background | Ratio | Use | AA |
|---|---|---|---|---|
| `--ink` #13235B | `--paper` #F5F8FF | **13.92** | Body, headings | ✅ AAA |
| `--ink` #13235B | `--surface` #FFFFFF | **14.80** | Card text | ✅ AAA |
| `--ink-2` #4A5677 | `--paper` | **6.84** | Muted text | ✅ |
| `--ink-2` #4A5677 | `--paper-2` #EAF0FD | **6.36** | Muted text on bands | ✅ |
| #FFFFFF | `--primary` #2563EB | **5.17** | Button label | ✅ |
| #FFFFFF | `--primary-hover` #1D4ED8 | **6.70** | Button hover | ✅ |
| `--accent-ink` #C2410C | `--paper` | **4.87** | Eyebrows, links | ✅ |
| `--accent-ink` #C2410C | `--paper-2` | **4.53** | Eyebrows on bands | ✅ |
| `--accent` #EA580C | `--paper` | **3.35** | **Large display text only** (≥24px, or ≥18.66px bold) | ✅ large / ❌ small |
| `--teal` #4F46E5 | `--paper` | **5.91** | Icons, indigo text | ✅ |
| `--teal-ink` #4338CA | `--teal-tint` #E0E7FF | **6.41** | Info notes | ✅ |
| #FFFFFF | `--ink` #13235B | **14.80** | Headline on navy band | ✅ AAA |
| `--ink-on-dark` #C8D3F5 | `--ink` | **9.93** | Body on navy band | ✅ AAA |
| `--accent-on-dark` #FBBF24 | `--ink` | **8.86** | Eyebrow/script on navy band | ✅ AAA |
| `--ink` | `--accent-tint` #FFEDD5 | **12.91** | Audience badge | ✅ AAA |
| `--line-strong` #7C88A6 | `--surface` | **3.54** | Input borders (non-text, needs 3:1) | ✅ |
| `--error` #B42318 | `--surface` | **6.57** | Error message | ✅ |
| `--success` #1F7A4D | `--surface` | **5.32** | Success message | ✅ |

**Rule:** `--accent` is never used for text under 24px. Use `--accent-ink` instead. White labels on small orange fills (Class 11 node, numbered markers) use `--accent-ink`. `--line` is decorative only and never the sole boundary of an interactive control.

---

## 4. Typography

| Role | Family | Weights | Why |
|---|---|---|---|
| **Display** (h1–h3, quotes) | **Fraunces** (variable; `opsz` 9–144, `SOFT` 0–100) | 500, 600, 500 italic | A warm, slightly "inked" old-style serif. It feels academic and human like poster 3, and its optical sizing keeps it crisp at both 32px and 72px. |
| **Body / UI** | **Source Sans 3** | 400, 600 | Excellent small-size legibility on low-DPI Android, neutral without being Inter, and designed for long reading. |
| **Annotation** | **Caveat** | 500 | A natural pen-in-the-margin hand, like a teacher's note. |
| Fallbacks | `Georgia, 'Times New Roman', serif` / `'Segoe UI', Roboto, 'Noto Sans', sans-serif` | | Metric-close fallbacks reduce layout shift. |

**Future Hindi/regional:** pair with *Noto Serif Devanagari* (display) and *Hind* (body), both designed to sit alongside the Latin faces above.

### Handwritten rule: a maximum of 3 uses on the whole page
1. Hero annotation next to the student photo ("From classroom to confidence ↘")
2. One margin note in the pilot section ("start small ↓")
3. CTA band scribble ("We build the path, you build the future")

Caveat text is always decorative: either `aria-hidden="true"` with the same meaning present in real text, or short enough that a screen reader can read it naturally. It is never used for body text, buttons, or anything under 20px. *Why the cap:* past three uses it stops feeling personal and starts feeling like a gimmick.

**Exception:** student handwriting *inside a product illustration* (e.g. the scanned answer sheet in the answer-sheet evaluation spotlight) may use Caveat. It depicts a real artefact, not a margin note, so it doesn't count toward the 3 annotations. It must sit inside an `aria-hidden` illustration with a text equivalent in the `figcaption`.

### Type scale (fluid, 360px → 1280px)

| Token | Mobile | Desktop | `clamp()` | Line-height | Font / weight |
|---|---|---|---|---|---|
| `--fs-display` | 40px | 72px | `clamp(2.5rem, 1.72rem + 3.48vw, 4.5rem)` | 1.05 | Fraunces 500, `opsz` auto, `SOFT` 50, tracking −0.02em |
| `--fs-h1` | 32px | 56px | `clamp(2rem, 1.41rem + 2.61vw, 3.5rem)` | 1.1 | Fraunces 500 |
| `--fs-h2` | 28px | 40px | `clamp(1.75rem, 1.46rem + 1.3vw, 2.5rem)` | 1.15 | Fraunces 500 |
| `--fs-h3` | 20px | 24px | `clamp(1.25rem, 1.15rem + 0.43vw, 1.5rem)` | 1.25 | Fraunces 600 |
| `--fs-lead` | 18px | 20px | `clamp(1.125rem, 1.08rem + 0.22vw, 1.25rem)` | 1.55 | Source Sans 3 400 |
| `--fs-body` | 16px | 17px | `clamp(1rem, 0.98rem + 0.11vw, 1.0625rem)` | 1.6 | Source Sans 3 400 |
| `--fs-small` | 14px | 14px | `0.875rem` | 1.5 | Source Sans 3 400 |
| `--fs-eyebrow` | 12px | 13px | `clamp(0.75rem, 0.73rem + 0.11vw, 0.8125rem)` | 1.3 | Source Sans 3 600, UPPERCASE, +0.12em |
| `--fs-note` | 20px | 26px | `clamp(1.25rem, 1.1rem + 0.65vw, 1.625rem)` | 1.2 | Caveat 500, rotate −3° to −6° |

**Rules**
- Measure: body copy is 60–70ch maximum, and leads are 52ch.
- Highlight phrase: one phrase per headline at most can be `--accent` (e.g. "*visible progress.*"), optionally with the hand-drawn underline. It only appears in the hero and the final CTA.
- Never use bold Fraunces above 600. Never letter-space body copy. Body copy is never smaller than 16px on mobile.
- Numbers in data use `font-variant-numeric: tabular-nums`.

### Loading
Google Fonts with `display=swap`. Subset to `latin` and `latin-ext`. Preload only Fraunces (display, roman) and Source Sans 3 400, and load Caveat lazily. The font budget is ≤ 120KB. *Why: ad traffic on 4G leaves quickly if the text arrives late.*

---

## 5. Spacing & grid

### Spacing scale (4px base)
`--s-1: 4px · --s-2: 8px · --s-3: 12px · --s-4: 16px · --s-5: 24px · --s-6: 32px · --s-7: 48px · --s-8: 64px · --s-9: 96px · --s-10: 128px`

*Why 4px:* it's fine enough for compact UI, and the larger steps create the generous editorial breathing room the page needs.

| Context | Mobile | Desktop |
|---|---|---|
| Section vertical padding | `--s-8` 64px | 120px (`--s-9` + `--s-5`) |
| Heading → body | `--s-4` | `--s-5` |
| Card padding | `--s-5` | `--s-6` |
| Stack of related items | `--s-3` | `--s-4` |

### Grid

| Breakpoint | Columns | Gutter | Outer margin | Max width |
|---|---|---|---|---|
| < 640px (mobile) | **4** | 16px | 16px | — |
| 640–1023px (tablet) | 8 | 20px | 32px | — |
| ≥ 1024px (desktop) | **12** | 24px | auto | **1200px** content |

- Editorial asymmetry on desktop: copy spans 6–7 columns and media spans 5–6, which is poster 3's layout. Avoid perfectly centred symmetrical layouts except in the final CTA.
- Build mobile-first. Nothing scrolls horizontally except the tab bar (by design).

---

## 6. Radius, shadow, border

| Token | Value | Use |
|---|---|---|
| `--r-sm` | 6px | Buttons, inputs, tabs |
| `--r-md` | 12px | Cards, testimonial, FAQ items |
| `--r-lg` | 20px | Photos, dashboard frame |
| `--r-full` | 999px | Avatars only. **No pill tags.** |

*Why restrained radii:* small corners read as "print" and "institution", and big round corners read as "consumer app".

| Token | Value | Use |
|---|---|---|
| `--shadow-1` | `0 1px 2px rgb(18 48 42 / .06), 0 1px 1px rgb(18 48 42 / .04)` | Cards at rest |
| `--shadow-2` | `0 12px 32px -12px rgb(18 48 42 / .18), 0 2px 6px rgb(18 48 42 / .06)` | Dashboard frame, sticky bar, hovered card |

Shadows are tinted with ink green, never pure black, and **never coloured glows**.

**Borders:** `1px solid var(--line)` does most of the separation work: card edges, section dividers and table rules. Interactive borders (inputs, secondary button) use `--line-strong` or `--ink`. *Why:* hairlines are how print separates content, and they cost nothing to render.

---

## 7. Components

Each component lists its anatomy, states, mobile behaviour, and the thing not to do.

### 7.1 Buttons

| Variant | Style | Use |
|---|---|---|
| **Primary** | `--primary` fill, white Source Sans 3 600 16px, `--r-sm`, padding 14×22, trailing arrow icon (Lucide `arrow-right`, 18px) | One per viewport: "Book a free institute demo" |
| **Secondary** | Transparent, 1.5px `--ink` border, `--ink` text | "Explore the platform" |
| **Text link** | `--accent-ink`, underline offset 3px, thickness 1px → 2px on hover | Inline links |
| **On dark** | Primary unchanged; secondary uses a white border and white text | CTA band |

- **Height:** 48px minimum on mobile and 44px on desktop. Full-width on mobile when stacked.
- **States:** hover → `--primary-hover`, and the arrow shifts right by 3px (150ms). Active → translateY(1px). Focus-visible → 2px `--focus` ring with 2px offset. Disabled → 40% opacity and `cursor: not-allowed`, never only grey.
- **Loading:** label stays, with an inline 16px spinner; width is locked to prevent layout shift.
- **Don't:** use gradients, glows, more than one primary per screen, or all-caps labels.

### 7.2 Section eyebrow label
`--fs-eyebrow`, uppercase, `--accent-ink` (or `--accent-on-dark`), with a 24×2px `--accent` rule before it (8px gap).
Example: `—  A SMARTER WAY TO LEARN`
- An optional audience badge (hero only) uses an `--accent-tint` block with `--r-sm`, a school-building line icon and two-line uppercase text, as in poster 3.
- **Don't:** use pill shapes, background chips on every eyebrow, or emoji.
*Why:* this is the newspaper "kicker" convention. It orients the reader without shouting.

### 7.3 Feature card
- **Anatomy:** a 40px icon tile (`--teal-tint` square, `--r-sm`, Lucide icon 22px in `--teal`, 1.5 stroke), then a Fraunces 600 `--fs-h3` title, then 2–3 lines of `--ink-2` body, then an optional text link.
- **Container:** `--surface`, 1px `--line`, `--r-md`, `--shadow-1`, padding `--s-5`/`--s-6`.
- **Hover (pointer only):** border becomes `--line-strong` and the shadow becomes `--shadow-2`. No lift greater than 2px.
- **Numbered variant** (pilot steps 01/02/03): no card container; a `--accent-ink` Source Sans 600 numeral above, and vertical hairlines between columns on desktop, as in poster 3.
- **Mobile:** single column, or a 2-up grid for 4+ short items.
- **Don't:** use per-card rainbow icon colours, gradients behind icons, or glow on hover.

### 7.4 Tabs (role switcher: Principal · Teacher · Parent · Student)
- **Anatomy:** a row of text tabs with a 1px `--line` baseline. The active tab gets `--ink` text in 600 weight plus a 2px `--accent` indicator under it. Inactive tabs use `--ink-2`.
- **ARIA:** `role="tablist"` / `tab` / `tabpanel`, `aria-selected`, roving tabindex, and arrow-key navigation.
- **Mobile:** the row scrolls horizontally with edge fade masks (in `--paper`) and scroll-snap. The active tab scrolls into view. Each tab is at least 44px tall.
- **Motion:** the indicator slides between tabs (250ms), and the panel content cross-fades (200ms).
- **Don't:** use segmented pill controls with coloured fills.

### 7.5 Testimonial card
- **Anatomy:** quote in Fraunces italic 500 at `--fs-h3`, with a large opening "“" in `--accent` (decorative, `aria-hidden`). Then a hairline, then a 48px round photo, **real name**, role, institution and city (e.g. *Principal, ABC Public School, Coimbatore*).
- **Container:** `--surface`, `--r-md`, 1px `--line`. On desktop one card can be featured at 7 columns and the rest at 5.
- **Rules:** real, consented quotes only. If there aren't any yet, this section is **omitted**. Placeholder testimonials are never shipped.
- **Don't:** use star ratings, carousels that auto-advance, or avatar initials pretending to be people.

### 7.6 FAQ accordion
- Native `<details>` / `<summary>` for zero-JS accessibility.
- **Anatomy:** each item is separated by a 1px `--line` hairline. The question uses Source Sans 600 at 18px in `--ink`, with a right-aligned plus icon (Lucide `plus`) that rotates 45° to become an ×. The answer is `--ink-2` body text, max 65ch.
- **Tap target:** the whole summary row, at least 56px tall.
- **Motion:** content height and opacity, 250ms. The icon rotates in 200ms.
- **Don't:** use boxed cards with shadows for each question, or chevrons that are too small to tap.

### 7.7 Form inputs (pilot enquiry)
- **Fields:** Name, Role (select), Institution name, City, Number of students (select), WhatsApp number (+91). Labels and options are in CONTENT.md §14.
- **Anatomy:** a label above the field (Source Sans 600, 14px, `--ink`), then a 48px-high input with a `--surface` fill, 1px `--line-strong` border and `--r-sm`. Optional helper text sits below in `--ink-2` 14px.
- **States:** focus → 2px `--focus` border and ring. Error → `--error` border, an icon and a message below (not colour alone). Success → a `--success` check.
- **Phone:** a fixed `+91` prefix segment; `inputmode="tel"`, `autocomplete="tel-national"`; validates a 10-digit number starting 6–9.
- **Mobile:** single column, with correct `inputmode` and `autocomplete` on every field, and no placeholder-as-label.
- **Submit:** primary button, full width. The privacy line underneath reads "We'll only use this to contact you about a pilot."
- **Don't:** use floating labels, more than 7 fields, or CAPTCHA before a submit attempt.

### 7.8 Sticky mobile CTA bar (< 640px only)
- **Anatomy:** a fixed bottom bar on `--surface` with a top 1px `--line` and `--shadow-2`. It holds the primary button "Book a free institute demo" (flex 1) and a 48px square secondary icon button for WhatsApp/call (Lucide `message-circle` or `phone`, with an `aria-label`).
- **Padding:** 12px plus `env(safe-area-inset-bottom)`.
- **Behaviour:** hidden while the hero CTA is visible, then slides in once the hero CTA scrolls out of view (IntersectionObserver). It hides again when the enquiry form or footer is in view, so it never covers the form. Adds matching bottom padding to `<body>` so no content is covered.
- **Motion:** translateY 100% → 0 over 250ms.
- **Don't:** use a floating circular WhatsApp bubble that overlaps content, or a pulse animation.

### 7.9 Dashboard mockup frame
- **Purpose:** show *what kind* of signals a principal gets, in the style of poster 3's "Academic overview" card.
- **Frame:** `--surface`, `--r-lg`, 1px `--line`, `--shadow-2`. There's an optional 28px top chrome strip in `--paper-2` with three 8px `--line-strong` dots; no fake browser URL.
- **Content:** title "Academic overview" with a sub-label **"Illustrative preview"**, which is always visible. Then a 3-column header (Participation · Topic progress · Mock trends), then 3 horizontal progress bars (`--accent`, `--teal`, `--ochre`) on `--paper-2` tracks with labels and tabular numbers. Then a teal-tint note: "Use learning signals to guide teacher follow-up…"
- **Build:** real HTML/CSS rather than a screenshot, so it's crisp, translatable and lightweight. Bars may grow once on reveal.
- **Placement:** on desktop it overlaps the hero photo's lower-left edge by about 15% (poster 3). On mobile it sits below the photo, full width, with a −32px overlap.
- **Don't:** use a dark theme, neon charts, invented KPIs ("94.6% pass rate"), or glow. The only 3D allowed is the hero's subtle scroll-linked perspective tilt in §9 (at most 10°, CSS transforms only).

---

## 8. Iconography & decoration
- **Icons:** Lucide only, 1.5px stroke, 20–24px, `currentColor`. *Why: one consistent line style looks considered and matches the serif's fine detail.*
- **Hand-drawn marks:** an underline stroke under the hero highlight and one curved arrow next to the annotation, both in `--accent`, as inline SVG with `stroke-linecap: round`. These are the only decorative graphics.
- **Don't:** use emoji, 3D icons, blobs, or abstract gradient shapes.

---

## 9. Motion

**Principles:** subtle, purposeful, and fast. Motion explains a change of state; it never decorates.

| Token | Value |
|---|---|
| `--dur-fast` | 150ms (hover, press) |
| `--dur-base` | 250ms (tabs, accordion, sticky bar) |
| `--dur-slow` | 400ms (section reveal, underline draw) |
| Hard ceiling | **600ms**. Nothing exceeds it. |
| `--ease-out` | `cubic-bezier(.2, .7, .2, 1)` |

**Allowed**
- Section reveal: opacity 0→1 plus translateY 12px→0, once per element, with a 60ms stagger and at most 4 items.
- Hero headline: words settle in on first paint (CSS only, 450ms each, 55ms stagger). Words start at 35% opacity, never hidden, so the headline is readable and the CTA clickable from the first frame.
- Hero dashboard: tilts to a subtle perspective (≤ 10°) on load, then flattens as the hero scrolls away (scrubbed to scroll position).
- Hand-drawn marks (hero underline and arrow, pilot "start small" arrow) draw in once with `stroke-dashoffset`.
- Student journey: the connecting line fills step to step, tied to scroll position.
- Answer-sheet spotlight: mistakes reveal one at a time (highlight sweep, then cross mark, then feedback row), once.
- Proof figures count up from 0 in 600ms, once per page view, with the final value's width reserved so nothing shifts.
- Dashboard bars grow from 0 to their value once (400ms).
- Tab indicator slide, accordion expand, sticky bar slide, button arrow nudge.
- Hover/tap: buttons gain `--shadow-2` on hover and press to `scale(0.97)`; cards lift 2px with `--shadow-2`. All ≤ 150ms.

**Implementation:** GSAP + ScrollTrigger, loaded as a separate chunk after `load` when the browser is idle, and never downloaded under `prefers-reduced-motion: reduce`. Budget: ≤ 60KB gzipped for all animation JS.

**Forbidden:** parallax backgrounds, auto-playing carousels, looping or pulsing animation, counters that re-run on every scroll, scroll-jacking, WebGL/Three.js, and animating layout properties (only `transform`, `opacity` and SVG stroke properties are animated).

**Reduced motion:**
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
Content must be fully visible without JavaScript or motion. Reveal classes are only added once JS confirms motion is allowed.

---

## 10. Photography

*Why this matters:* a principal recognises a real Indian classroom instantly, and recognises a fake one just as fast.

**Do**
- Real Indian students and teachers in real schools or coaching centres, in uniforms, with notebooks, NCERT books and real desks.
- Natural daylight from windows. A warm, slightly lifted grade (shadows toward `--paper`, no teal-orange cinema grade).
- Candid moments: writing, thinking, explaining, a teacher leaning over a desk. Look for genuine expressions.
- Diversity across region, gender and school type (urban CBSE, state-board, coaching).
- A shallow depth of field with classmates softly visible behind the subject, as in poster 3.
- Signed consent and a parental release for minors, stored with the asset.

**Don't**
- **No AI-generated faces or people, ever.** That includes "enhanced" or composited faces.
- No Western stock-model classrooms, no studio white backgrounds, no laptop-glow-at-night scenes (poster 2), no exaggerated cheering.
- No screens with fake UI glowing in someone's hands.

**Technical**
- Hero crops: **4:5** on mobile (subject's face in the upper third, with room for the annotation) and **16:10** on desktop (subject on the right 55%, copy on the left).
- AVIF with a WebP fallback through `<picture>`, `srcset` widths of 480/768/1200/1600, and a hero under 120KB on mobile.
- Hero image uses `fetchpriority="high"`; all others use `loading="lazy"`. Use `aspect-ratio` boxes and a `--paper-2` placeholder so there's no layout shift.
- Alt text describes the scene meaningfully ("Class 11 student taking notes in a Coimbatore classroom").

---

## 11. Accessibility checklist
- [ ] Every text pair in §3 meets AA. `--accent` is only used at ≥24px.
- [ ] Touch targets are ≥ 48×48px on mobile, with ≥ 8px between them.
- [ ] Visible `:focus-visible` ring on every interactive element.
- [ ] Landmarks: `header`, `nav`, `main`, `section[aria-labelledby]`, `footer`. One `h1`, and no skipped heading levels.
- [ ] `<html lang="en-IN">`; future Hindi blocks use `lang="hi"`.
- [ ] Information is never conveyed by colour alone (errors include icon and text).
- [ ] Decorative handwriting and marks are `aria-hidden`.
- [ ] The page works at 200% zoom and at a 320px width.
- [ ] Reduced motion is respected (§9).
- [ ] Lighthouse mobile: Performance ≥ 90, Accessibility 100, LCP < 2.5s on simulated 4G.

---

## 12. Quick reference — what makes this page *ours*
1. Warm paper, green ink, one orange decision colour.
2. Fraunces headlines with a single orange phrase and a hand-drawn underline.
3. A real student's face, in daylight.
4. At most three pen-in-the-margin notes.
5. Data shown honestly: "illustrative", "start with a baseline", "review the evidence".
