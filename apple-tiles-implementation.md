# Apple Tiles direction — implementation breakdown

A step-by-step build plan for shipping the AI mockup as the actual GroomCart homepage. Written for the existing Vite + React + Tailwind codebase already in `/Users/torrenbaker/Desktop/groomcart-landing/`.

The whole thing is roughly two days of focused work *if you have the photography*. Without real photography it's roughly two hours of code and two weeks of waiting for a real photo shoot to actually make it land.

---

## 1 — The shape of the page

The page is a vertical stack of discrete tiles, each tile its own breathing room. There is no `Hero / Features / Testimonial / CTA` section ladder. Apple's homepage is just *tile, tile, tile, tile* — each one a self-contained product moment.

For GroomCart, the tile sequence is roughly:

1. **Hero tile** (full-width, ~520px tall on desktop) — light gray bg (`#f5f5f7`), centered "Inventory for the back room. Built for the working grooming shop." headline, two text-link CTAs, and a big real photo of a dog mid-groom.
2. **Monday list tile** (half-width, dark) — `#1d1d1f` bg, "The Monday list / Already written before you've finished your coffee." headline, the actual GroomCart UI screenshot embedded inside.
3. **Invoice intake tile** (half-width, light) — `#f5f5f7` bg, floating PDF + parsing animation card, "Drop the PDF / We read every line."
4. **Vendors tile** (half-width, warm cream) — `#fff8e7` bg, comparison cards (PetEdge / Ryan's), "PetEdge cheaper. Ryan's faster. Pick."
5. **In-your-shop tile** (half-width, sage) — `#e8f1ec` bg, founder initials avatars, "Twenty minutes. Bring your invoices."
6. **Footer strip** (single line) — center-aligned, micro type, YC badge, contact.

Tiles 2-3 sit side-by-side on desktop, as do tiles 4-5. On mobile everything stacks single-column. The tile gap is **12px** (Apple's exact value).

---

## 2 — The reusable `Tile` component

This is the single most important component to get right. Everything else is composition over this.

```tsx
// src/components/Tile.tsx
import { ReactNode } from 'react'

type TileTheme = 'light' | 'dark' | 'cream' | 'sage' | 'amber'

interface TileProps {
  theme?: TileTheme
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  children?: ReactNode  // the visual element below the copy
  align?: 'center' | 'left'
  minHeight?: string  // tailwind class like 'min-h-[520px]'
}

const themes: Record<TileTheme, { bg: string; text: string; sub: string; cta: string }> = {
  light: {
    bg: 'bg-[#f5f5f7]',
    text: 'text-[#1d1d1f]',
    sub: 'text-[#6e6e73]',
    cta: 'text-[#0066cc]',
  },
  dark: {
    bg: 'bg-[#1d1d1f]',
    text: 'text-[#f5f5f7]',
    sub: 'text-[#a1a1a6]',
    cta: 'text-[#2997ff]',
  },
  cream: {
    bg: 'bg-[#fff8e7]',
    text: 'text-[#1d1d1f]',
    sub: 'text-[#6e6e73]',
    cta: 'text-[#0066cc]',
  },
  sage: {
    bg: 'bg-[#e8f1ec]',
    text: 'text-[#1f3027]',
    sub: 'text-[#5a7a68]',
    cta: 'text-[#2d5a3a]',
  },
  amber: {
    bg: 'bg-[#fef3da]',
    text: 'text-[#3a2a08]',
    sub: 'text-[#8a6320]',
    cta: 'text-[#b07a13]',
  },
}

export default function Tile({
  theme = 'light',
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  children,
  align = 'center',
  minHeight = 'min-h-[480px] md:min-h-[520px]',
}: TileProps) {
  const t = themes[theme]
  return (
    <section
      className={`${t.bg} ${minHeight} rounded-[18px] overflow-hidden flex flex-col ${
        align === 'center' ? 'items-center text-center' : 'items-start text-left'
      } px-6 sm:px-10 pt-12 sm:pt-16 pb-0 relative`}
    >
      {eyebrow && (
        <p className={`${t.sub} text-xs sm:text-sm font-medium tracking-wide mb-2`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`${t.text} font-display-tile text-3xl sm:text-4xl md:text-5xl leading-[1.08] tracking-tight max-w-[20ch]`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`${t.sub} text-base sm:text-lg mt-3 max-w-[26ch]`}>
          {subtitle}
        </p>
      )}
      {(primaryCta || secondaryCta) && (
        <div className="flex gap-5 mt-4">
          {primaryCta && (
            <a href={primaryCta.href} className={`${t.cta} text-sm sm:text-base hover:underline`}>
              {primaryCta.label} <span className="text-xs">›</span>
            </a>
          )}
          {secondaryCta && (
            <a href={secondaryCta.href} className={`${t.cta} text-sm sm:text-base hover:underline`}>
              {secondaryCta.label} <span className="text-xs">›</span>
            </a>
          )}
        </div>
      )}
      {children && <div className="w-full flex-1 flex items-end justify-center mt-6">{children}</div>}
    </section>
  )
}
```

This single component handles all five tile variants. The page is then literally:

```tsx
<Tile theme="light" title="Inventory for the back room." subtitle="Built for the working grooming shop." primaryCta={{ label: 'Learn more', href: '/product' }} secondaryCta={{ label: 'Book a demo', href: '/demo' }}>
  <HeroPhoto />
</Tile>

<div className="grid md:grid-cols-2 gap-3">
  <Tile theme="dark" title={<>The Monday list<br/>Already written before<br/>you've finished your coffee.</>} primaryCta={{ label: 'Learn more', href: '/monday' }}>
    <ProductUIScreenshot />
  </Tile>
  <Tile theme="light" title={<>Invoice intake.<br/>Drop the PDF. We read every line.</>} primaryCta={{ label: 'Learn more', href: '/invoices' }}>
    <FloatingInvoiceCards />
  </Tile>
</div>
```

The grid wrapper handles the side-by-side pairing. `gap-3` = 12px = Apple's exact tile gap.

---

## 3 — Apple's actual typography system

Apple uses **San Francisco**, but they ship it as the system font. You don't need to load anything — just use the system font stack and let Mac/iOS visitors see SF natively. PC visitors get Segoe UI / Helvetica fallback.

Update `tailwind.config.js`:

```js
extend: {
  fontFamily: {
    'display-tile': [
      '-apple-system',
      'BlinkMacSystemFont',
      '"SF Pro Display"',
      'Inter',
      'system-ui',
      'sans-serif',
    ],
    body: ['"DM Sans"', 'system-ui', 'sans-serif'],
  },
}
```

The `font-display-tile` class is what the Tile uses for headlines. Body copy stays DM Sans for now (or we drop DM Sans entirely and use the system stack everywhere — Apple uses one font across the whole site).

**Type scale to lock:**

- Hero tile headline: `text-4xl sm:text-5xl md:text-6xl` (~36px → 48px → 56px)
- Sub-tile headline: `text-3xl sm:text-4xl md:text-5xl` (~28px → 36px → 44px)
- Subtitle: `text-base sm:text-lg` (~16-18px)
- Eyebrow: `text-xs sm:text-sm`
- CTA: `text-sm sm:text-base`

Apple's headline weight is **600 (semibold)**, not bold or regular. Letter-spacing is **-0.022em** (tight but not extreme). Line-height is **1.05-1.08** for display sizes.

```css
/* src/index.css — add this */
.font-display-tile {
  font-weight: 600;
  letter-spacing: -0.022em;
}
```

---

## 4 — The locked CTA pattern

This is the single most-Apple thing about the design. **Don't deviate from it.**

```tsx
// Every CTA on the page is one of these two:
<a className="text-[#0066cc] hover:underline">
  Learn more <span className="text-xs">›</span>
</a>

<a className="text-[#0066cc] hover:underline">
  Book a demo <span className="text-xs">›</span>
</a>
```

That's it. **No solid pill buttons. No gradient buttons. No outlined-vs-filled secondary pattern.** Apple's homepage uses *only* text links with a chevron — even the most important CTAs. The visual weight comes from being repeated everywhere, not from button styling.

The **chevron is `›`** (single right-pointing chevron, U+203A), not `→` (arrow). Smaller than the text. This is the detail that signals "Apple-lineage" instantly to anyone with internet exposure.

Color: `#0066cc` on light backgrounds, `#2997ff` on dark backgrounds. Both come from the actual Apple system blue.

---

## 5 — Color and palette

Apple's homepage has **almost no brand color**. The page is grayscale (`#f5f5f7` / `#1d1d1f` / `#fff`) and the products provide all the color.

Adapted for GroomCart:

- **Light tile bg:** `#f5f5f7` (Apple's exact gray)
- **Dark tile bg:** `#1d1d1f` (Apple's exact near-black)
- **Cream tile bg:** `#fff8e7` (warm sandstone — for the vendors tile)
- **Sage tile bg:** `#e8f1ec` (very pale green — for the in-your-shop tile)
- **Amber tile bg:** `#fef3da` (only if you need a "warning" tile)

Use sparingly. If you have 5 tiles, **at least 3 should be `#f5f5f7` or `#1d1d1f`**. Don't paint every tile a different color — that breaks the Apple discipline.

The brand sage green (`#2d5a3a`) lives **inside** tiles — as the founder avatars, as a small status dot, as the focused-link color on the sage tile. It does not become a section background.

---

## 6 — Spacing and rhythm

Apple's spacing rhythm is mathematically tight:

- **Page max-width:** none. Tiles go to viewport edge with `mx-3` (12px) margins.
- **Tile inner padding:** `pt-12 sm:pt-16` top, `px-6 sm:px-10` sides, `pb-0` bottom (the visual element fills the bottom).
- **Tile-to-tile gap:** `gap-3` in the grid (12px).
- **Headline → subtitle:** `mt-3` (12px).
- **Subtitle → CTAs:** `mt-4` (16px).
- **Eyebrow → headline:** `mb-2` (8px).
- **Tile minimum height:** `min-h-[480px] md:min-h-[520px]`. Apple uses fixed-ish heights so tiles align cleanly side-by-side.

The whole page is essentially:

```tsx
<main className="px-3 py-3 space-y-3">
  <Tile />              {/* full-width hero */}
  <div className="grid md:grid-cols-2 gap-3">
    <Tile /><Tile />   {/* half-width pair */}
  </div>
  <div className="grid md:grid-cols-2 gap-3">
    <Tile /><Tile />   {/* half-width pair */}
  </div>
  <Footer />
</main>
```

That's the whole page architecture in 11 lines.

---

## 7 — Photography requirements

This is the part that decides whether the page lands. **All five tile photos need to be either real photography or hi-fi product UI mocks.** SVG illustrations will not carry an Apple page — Apple's tiles work because the photography is genuinely premium.

Photo brief, in priority order:

1. **Hero tile (most important)** — a real photo of a real dog mid-groom on a real grooming table, shot in soft natural window light. The dog should be small-to-medium, calm, looking forward. Background: a real shop interior, slightly out of focus. Aspect ratio: roughly 1.3:1 horizontal. Resolution: 2400×1850 minimum. Treatment: warm but not over-graded. Reference: any of Bark.co's product photography.
2. **Invoice intake tile** — top-down photo of a real PDF invoice on a wooden counter, slightly angled, with a phone next to it showing the GroomCart UI parsing the invoice. Aspect ratio: square-ish. Treatment: natural overhead light.
3. **Vendors tile** — flat-lay of two boxes (PetEdge brown / Ryan's gray) side-by-side on a clean surface, with a small comparison card overlay. Or: simple clean product packaging from both vendors arranged compositionally.
4. **In-your-shop tile** — three founders shot together in the back room of a real grooming shop, casual, mid-conversation. Or: hands-on workspace photo of the team setting up GroomCart on a tablet inside a real shop.
5. **Monday list tile** — this one is **product UI, not photo**. The actual GroomCart dashboard rendered at high quality (a Figma export at 2x is fine), shown on a dark background.

**If you can't get all five photos right now**, ship the Hero tile + Monday list tile + In-your-shop tile first. Skip Invoice intake and Vendors until you have the photography. Three real tiles + a clean footer is better than five tiles where two are obviously placeholder.

**Photography that does NOT work for this design:**
- Stock photography of generic dogs at generic groomers
- AI-generated images (the Apple format makes AI images look more obviously AI, not less)
- Phone-quality photography lit by overhead fluorescents
- Photos with faces/branding from people who haven't signed releases

Production-cost estimate for a half-day shoot in one real shop: roughly $800-1500 if you hire a local photographer. Worth it.

---

## 8 — The nav

Apple's nav is one of the most-restrained pieces of the page:

```tsx
<nav className="bg-white/80 backdrop-blur-xl border-b border-gray-100/60 sticky top-0 z-50">
  <div className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-between">
    <Logo size="sm" />
    <div className="hidden sm:flex items-center gap-6">
      <a className="text-xs text-gray-700 hover:text-black">Product</a>
      <a className="text-xs text-gray-700 hover:text-black">Pricing</a>
      <a className="text-xs text-gray-700 hover:text-black">About</a>
      <a className="text-xs text-gray-700 hover:text-black">Support</a>
      <a className="text-xs text-gray-700 hover:text-black">Search</a>
      <a className="text-xs text-gray-700 hover:text-black">Sign in</a>
    </div>
  </div>
</nav>
```

Notes:
- **Height: 48px** (`h-12`) — Apple's exact value, very compact.
- **Type size: 12px** (`text-xs`) — small, restrained.
- **No CTA in the nav.** Don't put "Book a demo" up here. The CTAs live inside the tiles. The nav is for navigation only.
- **Backdrop blur** is required for the Apple feel (`backdrop-blur-xl bg-white/80`).
- **Sticky** so it stays present as you scroll.

---

## 9 — Animation and motion

Apple uses very subtle motion. Two specific moves to copy:

1. **Tile hover scale** — on hover, each tile scales by `0.99` (yes, *down* a hair) with `transition: transform 0.4s ease-out`. Reads as "the tile responds to your cursor." Add `hover:scale-[0.99]` to the Tile component's outer `<section>`.

2. **Image scroll-fade-in** — as a tile enters the viewport, its inner photograph fades in over 600ms with a slight `translate-y-2`. Use the existing `useScrollReveal` hook in `App.tsx`.

**Don't add:** parallax, sticky video, scroll-jacking, mouse-follow effects, particle fields. Apple's homepage is restrained on motion. The product photography is the wow.

---

## 10 — Implementation order

Here's the sequence I'd ship in:

**Day 1 — code skeleton (4-6 hours, no photography needed)**
- [ ] Create `/src/components/Tile.tsx` with the component above
- [ ] Update `tailwind.config.js` with the `font-display-tile` family
- [ ] Add `.font-display-tile` CSS to `index.css`
- [ ] Replace `App.tsx` with the tile composition (use placeholder colored rectangles where photos go)
- [ ] Update Nav to the Apple-style 48px sticky nav
- [ ] Wire the existing `useScrollReveal` to the Tile inner `<div>`
- [ ] Test the page renders with placeholder rectangles — make sure spacing/typography land

**Day 2 — UI mocks (3-4 hours)**
- [ ] Build the GroomCart dashboard screenshot for the Monday list tile (use the existing UI from your app, exported at 2x)
- [ ] Build the floating PDF + parsing card composition for Invoice tile
- [ ] Build the vendor comparison cards for Vendors tile
- [ ] Drop these into the appropriate tiles

**Week 2 — photography (mostly waiting)**
- [ ] Book a half-day shoot in one of your pilot shops
- [ ] Brief the photographer with the four photo specs above
- [ ] Get raws within a week, edit yourself or pay the photographer to grade
- [ ] Drop the photos into the hero, invoice, vendors, and team tiles

**Day after photos arrive — final polish (2 hours)**
- [ ] Color-grade the photos to match the tile palette (warm slightly toward `#f5f5f7`)
- [ ] Ensure each photo is exported at 2x resolution for retina displays
- [ ] Test the page on a real iPhone — Apple's design assumes mobile is the primary surface
- [ ] Lighthouse score check — should hit 95+ on all metrics with these light assets

---

## 11 — Apple-specific details that elevate it

Small things that make the difference between "Apple-knockoff" and "Apple-lineage":

- **Headlines wrap at meaningful breaks.** Use `<br/>` deliberately to control line breaks, not just to fit the column. Apple's headlines are *typeset*.
- **The chevron is always smaller than the text.** Use `text-xs` on the `›` even when the link text is `text-base`.
- **CTAs sit on a single line below the subtitle, gap-5.** Don't stack them, don't center them in their own row.
- **Product UI inside tiles always has rounded corners.** `rounded-2xl` minimum, `rounded-3xl` for the largest UI screenshots.
- **Tile photos bleed to the bottom edge.** They don't sit centered with padding below — they fill the lower half of the tile. The headline is in the top half, the photo in the bottom half. This is the signature compositional move.
- **The dark tile uses `text-white`, not `text-gray-100`.** Apple uses pure white on dark. Don't be precious about it.

---

## 12 — What to avoid

The five most common Apple-knockoff mistakes:

1. **Adding a primary solid-button CTA** ("Get started" as a blue pill). Apple doesn't do this on the homepage. Resist.
2. **Letting the brand color leak into tile backgrounds.** Sage green should appear *inside* tiles (avatars, status dots), not as a tile background.
3. **Three columns of tiles.** Apple uses 1-up and 2-up layouts. Three tiles in a row breaks the rhythm.
4. **Using a serif font for headlines.** Apple is sans-serif throughout. The Newsreader serif we considered earlier is wrong for this direction — it would read as confused.
5. **Animation past the subtle scale-on-hover.** Parallax, sticky video, scroll-jack — all of these undermine the Apple discipline.

---

## 13 — The single highest-leverage decision

If you only have time to get one thing right, **get the hero photo right.** That photo is doing 70% of the work on the entire page. A mediocre hero photo with everything else perfect lands as "okay." A genuinely great hero photo with everything else mediocre lands as "this company has its act together."

Hire the best local photographer you can afford for one half-day in one real shop with one real groomer and one real dog. Get five candidate hero photos. Pick the one where the dog's expression is most genuine and the light is most natural. Use it.

Everything else in this document supports that one photograph.
