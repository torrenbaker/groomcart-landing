# What I actually saw on the five reference sites

Notes from studying dominicfike.com, skylrk.com/products/rest-slide, apple.com, openroll.com, and helix-db.com — all visited live in Chrome via Claude in Chrome on May 6, 2026.

This document is structured as: what each site does specifically, then what they share, then what was wrong with my prior mockups, then what I'd actually build for GroomCart from this.

---

## Site by site

### 1. Dominic Fike — the page is a desktop, not a document

The site does not have sections. It is a blank canvas with elements arranged spatially across it like a 1998 Mac desktop. Specific things on the page:

- A row of four colored rectangles at the top center reading "COMEDY" rotated vertically, then yellow + blue stripes, then a black square with a yellow circle that says "FEEL" — these are stylized album covers floating freely.
- A pixel-art fish icon in the upper-left corner (just sitting on the empty canvas, not in a nav).
- A "visitor #826327" counter that updates on every refresh — an explicit GeoCities-era callback.
- A draggable window in the center labeled "tour" with chrome-bar controls (close, minimize, drag handle on top right). Inside the window: a list of tour dates with "tickets" / "join waitlist" buttons. The window is literally draggable like a Mac OS 8 window.
- The word "rocket" in red, floating on the right side of the page in nothing — no container, no caption, just the word.
- A tiny "cart" link in the corner.

There is no headline. No value prop. No CTA hierarchy. The page IS the artist — it feels like you're poking around in his personal computer.

**What this site does that mine don't:** treats the page as a SPATIAL workspace, not a vertical document. Elements have positions in space, not relationships in a stack. The interaction metaphor (windows, desktop, cursor) is the brand.

### 2. SKYLRK Rest Slide — the product floats in a single atmospheric world

One viewport. The entire page is one moody dark-purple gradient with film grain. The product (a slipper) floats unsupported in the middle of the frame, slightly left of center. There is no card, no frame, no container around it. Layered on this single canvas:

- Top-left: SKYLRK wordmark in a glassmorphic pill, with a "0 +" cart icon next to it.
- Top-right: bracketed `[ $USD ]` currency selector.
- Right-center: a glassmorphic floating panel with the product info — `REST SLIDE` headline, two-line description, color swatches under `COLOR [ DREAM ]` label, shoe size grid under `SHOE SIZE [ M 4 / W 5 ]`, all in monospace caps with bracket-decorated labels.
- Bottom-left: a tray of variant thumbnails (six small slipper images in a glassmorphic strip), like a video-editor scrubber.
- Bottom-right: a cookie banner with `REJECT ALL` / `ACCEPT ALL` in matching mono caps.

The vibe is "futuristic boutique." Letter-spaced caps everywhere. Brackets as decorative elements. The brand is the *world* the product sits in, not a logo on top of it.

**What this site does that mine don't:** commits to a single visual environment from edge to edge. The page does not have a top, middle, and bottom — it has one composition, one mood, one atmosphere.

### 3. Apple — sectioned, but each section is a product moment

This is the case where blocks are okay, and it's worth understanding why. Each "tile" on the homepage is a discrete product moment:

- Mother's Day promo — soft gray bg, decorative apple-shaped illustration, Shop button.
- iPhone tile — three iPhone 17 backs in dark blue / white / pink against light gray, no headline above the products (the products ARE the message), small "iPhone" label beneath.
- Apple Watch Series 11 — two Apple-watch images side by side, headline `WATCH SERIES 11` with the apple glyph integrated as a letter, sub `The ultimate way to watch your health.`, two CTAs (`Learn more` blue + `Buy` outline).
- Then a 2-up grid: Business + iPad air, each with a product image and the same Learn more / Buy pair.

What's the same in every tile:
- **Two CTAs in a locked pattern.** Always Learn more (blue solid pill) + Buy (outline pill). Never a third button. Never a "see how it works" or "watch demo." Just those two.
- **Headline is small.** Never bigger than ~48px. The product photo carries the visual weight.
- **The background is white or near-white.** Color comes from the product, not from a brand-colored container.
- **Each tile is its own product moment with massive vertical breathing room.** They aren't packed.

Nav is tiny — a small horizontal index of product names (Store, Mac, iPad, iPhone, Watch, Vision, AirPods, TV & Home, Entertainment, Accessories, Support) with no big logo or hero buttons.

**What this site does that mine don't:** makes the section content a product photograph, not a value-prop pitch. A "block" with a product photo in it does not feel like slop. A "block" with a 3-icon-and-text feature row in it does.

### 4. OpenRoll — the closest reference for our use case

This is a B2B SaaS landing page that does what I have repeatedly failed to do. Specifics:

- **Top bar:** thin black announcement bar across the top: "Now Live: Introducing Fully Auditable AI Agents" with a close X. Then the main nav: Openroll wordmark left, then Application / Customers / Platform / Security / Resources, then Log in (text link), then Book a demo (solid black pill).
- **Hero (very tall):** the entire hero takes a full viewport. The headline `Your People and Finance teams' AI workforce` sits in the LEFT column at maybe 64-72px clean sans-serif. The RIGHT column is COMPLETELY EMPTY — no image, no illustration, no visual element at all. A small eyebrow tag reads `BACKED BY Y COMBINATOR` above the headline. Sub copy + a single Book a demo pill sit anchored to the bottom-left of the hero.
- **Below the hero:** a real customer logo wall — SBAB!, Marshall, Hebbia, planhat, truecaller, OMG (Omnicom Media Group), viaplay. These are actual companies. The logos are in their actual brand marks, not abstracted into uniform gray.
- **Then a section with one large statement:** "Openroll brings compensation, headcount, and budgeting into one place — so teams spend less time in spreadsheets and more time making decisions." Just text, anchored left, no header. No display headline.
- **Then four product UI screenshots in a row** — each one a different shape, different background color. Salary Bands chart, Headcount Plan table, Variance alert (49 misalignments detected), Budget waterfall analysis. They are not template-identical cards. Each is its own visual composition.
- **Then a customer testimonial with REAL PHOTOGRAPHY** — Sandra Strindeborn, Head of HR, Wallenstam, in a real office in real lighting. Not stock. Not a circular avatar with initials. An actual portrait the company commissioned.
- **Then a pagination dot row to scroll between testimonials.**
- **Then "Your daily partner for faster, more enjoyable work."** with motion-blurred photography of people walking through a city.

**What this site does that mine don't:**
- Hero is asymmetric and the empty side is *purposefully empty* (huge negative space).
- Single CTA (Book a demo). No competing buttons.
- Real customer logo wall, not a fake "trusted by" placeholder.
- Real customer photography, not initials in a circle.
- Product UI shown in different shapes, not template-identical cards.
- No display-italic-serif moments — typography is restrained, clean, geometric sans throughout.
- Plenty of vertical white space between content moments.

### 5. HelixDB — terminal aesthetic, dark canvas, monospace everywhere

Pure developer-tool aesthetic. Specifics:

- Dark warm-black background throughout. Subtle orange accent.
- Hero: monospace Helix-DB logotype + Docs / Blog / Demo nav items + GitHub star count (4.1k) + an orange `Get Started` button.
- The hero headline `The Infinitely Scalable Graph Database` is set in a chunky monospace at maybe 60-72px, white type. It's interleaved with literal rows of digits (1111111111... 2222222222... etc.) cascading behind/around it like background data — it's a typographic field that the headline emerges from.
- Below: ASCII-style architecture diagrams using dashed borders to draw the box-and-line graphic of "Your App → Helix Lite → SSD". This is rendered in CSS, not as an image — it looks like a terminal/code drawing.
- Bullet points use small orange `▸` markers, not Lucide icons.
- Footer-ish section: "Join Our Growing Community" with two CTA chips (`Join Discord` + `Star on GitHub`) on the left, and four social cards (GitHub, X, LinkedIn, Discord) on the right with dashed-border framing matching the architecture diagrams.

The whole site reads as something a senior infrastructure engineer made. There is no purple gradient. There is no Inter font. There is no Lucide icon. It's mono everything, dark warm-black, orange-on-black links. Distinctive within the dev-tool category and clearly authored by humans.

**What this site does that mine don't:** picks one typographic system (monospace) and one color palette (warm-black + orange) and commits to it for every element on the page. No visual code-switching.

---

## What all five share

Reading across them, what's common is *not* a layout pattern — they range from spatial-desktop (Fike) to single-viewport (SKYLRK) to sectioned-product-moments (Apple) to long-scroll-asymmetric-SaaS (OpenRoll) to terminal-dev-tool (HelixDB). The common pattern is at a different level:

1. **Each one commits to a single visual world that is unmistakably its own.** Not "warm cream with serif italic accents" (which is generic editorial slop). Each site has *one* voice — Fike's nostalgic-desktop voice, SKYLRK's atmospheric-product voice, Apple's pristine-product voice, OpenRoll's confident-empty-space voice, HelixDB's terminal-engineer voice. None of them feel like they're trying to be multiple things at once.

2. **None of them deploy the v0/AI-default visual vocabulary.** No purple-blue gradients. No glassmorphism on mesh backgrounds. No three-card icon-title-text feature grids (Apple's tiles are product photos, not feature pitches). No Lucide icons. No "AI-powered" copy. No big italic serif headline + small clean sans body.

3. **Each one trusts its central asset to do the work.** The product photo (Apple, SKYLRK), the artist (Fike), the headline-and-empty-space (OpenRoll), the typography-as-architecture (HelixDB). They don't pile up multiple visual elements competing for attention.

4. **Asymmetry and confident negative space are everywhere.** OpenRoll's right half empty. SKYLRK's product floating with no support. Fike's elements scattered with whole zones blank. Apple's tiles separated by huge whitespace. The pages know how to be empty.

5. **Real or hand-made imagery, not stock or AI.** Real album art, real product photography, real customer logos, real customer portraits, real architecture diagrams that look like they were drawn in a text editor. Nothing stock. Nothing template. Nothing v0.

6. **Typography is purpose-chosen.** Apple uses San Francisco. SKYLRK has its own custom rounded sci-fi mono. HelixDB is monospace everywhere. Fike uses an old-OS chrome look. OpenRoll uses a clean geometric workhorse sans. None of them defaulted to "Instrument Serif because it's free and looks editorial." Each picked typography that *belongs* to their brand world.

---

## Where my prior mockups fail against these references

I have to be honest about this. None of the twelve mockups I built clear the bar set by these references. The pattern of failure across most of them:

- **I committed to "magazine editorial" as a generic visual world.** Cream + Newsreader serif + drop cap + pull quote. That's not a *brand world* — it's a *category default*. None of the references picked a category default.
- **I treated negative space as a feature instead of a tool.** OpenRoll uses empty space deliberately, structurally. I used cream backgrounds as polite filler.
- **I built around typography moves (italic, drop caps, pull quotes) instead of around a central asset.** None of these references rely on typographic moves to carry the page. The product, the photo, the artist, the empty space carry it.
- **I never committed to a single visual world.** Most of my mockups have section color changes (cream → white → green → cream → dark). None of the references do this — they have ONE color world, all the way through.

---

## What I would actually build for GroomCart from this

Given what these sites actually do, the candidate directions for GroomCart are not "editorial flow vs. block grid vs. canvas." The candidate directions are:

**Direction A — The OpenRoll move (most directly applicable):**
- Massive asymmetric hero — headline anchored left in clean sans-serif at 64-72px, RIGHT HALF COMPLETELY EMPTY
- One eyebrow tag (`BACKED BY YC` or `IN PILOT WITH GROOMING SHOPS`)
- Single CTA (`Book a demo` solid pill)
- Below: real customer logos (when we have them) — for now, omit this section rather than fake it
- Then one statement of what the product does — long sentence, anchored left, no display headline
- Then 4 product UI screenshots in a row, each a different shape and treatment
- Then a real customer testimonial with REAL PHOTOGRAPHY of an actual pilot-shop owner (not initials, not avatar)
- Footer minimal

**Direction B — The SKYLRK move (more atmospheric, riskier):**
- The door video plays as the entire viewport background, looped silently
- All UI elements (logo, nav, headline, CTA) float over the video with subtle backdrop-blur
- Bracketed mono labels (`[ INVENTORY · GROOMING ]`, `[ M-F 9-6 ]`) for nav/labels
- The page is essentially one viewport — minimal scroll, the video is the world
- Best fit if our hero video is genuinely the strongest asset (it is)

**Direction C — The Apple move (sectioned but image-led):**
- Each section is a product moment dominated by an actual screenshot or image
- Headlines are restrained (~36-48px max)
- Two CTAs per section, locked pattern (Learn more / Get a demo)
- White or near-white background throughout
- Color comes from the product, not from arbitrary brand-block backgrounds

**Direction D — The HelixDB move (most distinctive but wrong audience):**
- Mono everywhere, warm-black + orange-or-green accent
- ASCII-style architecture diagrams in CSS
- Terminal-feeling dev-tool aesthetic
- Risk: completely wrong vibe for grooming-shop owners

**Direction E — The Fike move (highest distinctiveness, hardest to convert):**
- Spatial canvas where elements are arranged like things on a counter, not stacked
- Maybe the page IS the back room — the door video is one window, the product UI is another, the team are three little pictures pinned to a corkboard
- Visitor counter, hand-drawn touches
- Risk: completely breaks the "B2B software" frame; could read as art project

---

## Recommendation, finally based on actual study

For GroomCart specifically, the synthesis points at **Direction A (OpenRoll move) as the homepage**, with **a single Direction B (SKYLRK move) hero moment** layered into it. Specifically:

- Hero: massive empty asymmetric layout. Headline anchored left in clean geometric sans (NOT Newsreader serif — drop the editorial conceit entirely). The right half of the hero IS the door video, looped, contained within the viewport. One CTA (Book a demo, solid pill).
- Below: one long sentence about what the product does, anchored left.
- Below that: 3-4 product UI screenshots in different shapes and sizes (not identical cards).
- Below that: a real testimonial with real photography of a real pilot-shop owner (when we have one — until then, omit, don't fake).
- Footer minimal.

That's it. No "How it works" three-step. No "money triptych" with green block. No "team" section with three circles. No editorial drop-cap moment. The page does ONE thing, and the one thing is "show that GroomCart is a real piece of software made by real people for real grooming shops."

Which means the work isn't more mockups — it's a structural rewrite of the existing page to remove the middle four sections entirely and make the hero do the heavy lifting OpenRoll's hero does.

If you want, I can do that next. But the framework debate is over: the references prove that the right answer is "less, asymmetric, image-led, one CTA, real customers" — not "different kind of section blocks."
