# The unified framework

A synthesis of the empirical-aesthetics research (`website-aesthetics-research.md`) with the AI-slop research (`ai-slop-research.md`) into a single operational protocol for designing landing pages.

This document supersedes `mockup-framework.md`. The earlier framework was complete with respect to one body of research; this one is complete with respect to both.

Compiled May 2026.

---

## Why this synthesis is necessary

The empirical research tells us what makes a website feel beautiful. The slop research tells us what makes a website feel hollow. **These are not the same thing, and the difference matters.** AI slop pages are *engineered to score high on the empirical-aesthetics measures* — that's the entire point of training models on Stripe and Linear and Vercel. The slop site has Inter at the right size, a moderate complexity score, the prototypicality of its category, and proper contrast. By Lindgaard / Reinecke / Tuch / Tractinsky, it should be perceived as beautiful. And in many narrow lab tests, it is.

But it doesn't *land* as beautiful in 2025-2026 to anyone with internet exposure, and the operational definition of slop tells us why. The empirical research was developed when websites were curated by humans; it measured the dimensions that distinguished good human-made sites from bad human-made sites. It did not measure the dimension of *whether the page was made by anyone in particular* — because in 2006-2014, when most of the cited studies were run, that wasn't a question. Now it is.

So we need both lenses, and we need to know how they interact. That is what this document is.

---

## Part 1 — The two scoring systems

### The positive system (empirical aesthetics)

Pulled from the original research doc:

1. Category recognition (Tuch)
2. MAYA position (Loewy)
3. Hierarchy (Refactoring UI)
4. Density on inverted-U (Reinecke)
5. Color discipline (Wildbit, Refactoring UI)
6. Type discipline (Bringhurst)
7. Alignment (Gestalt)
8. Trust (Fogg)

Each scored 0-3, total /24. Threshold to ship: ≥18.

### The negative system (slop signals)

Pulled from the slop doc, organized into the operational checklist:

1. Purple-to-blue or pink-to-purple gradient anywhere?
2. Glassmorphism / frosted-glass cards on a gradient background?
3. Inter as the only typeface, no second face for contrast?
4. Centered hero with a single large headline and two CTA buttons as the entire above-the-fold composition?
5. Three- or four-card feature grid with same-sized icon-title-paragraph cards?
6. Bento grid as the hero or features layout?
7. Default Lucide icons with no custom strokes or palette?
8. 3D abstract blobs, mesh gradients, or stock-illustration "diverse team at laptop"?
9. Headline of the form "[Verb] your [noun] with AI" or any direct variant?
10. "AI-powered" / "intelligent" / "smart" as the value prop in itself?
11. Empty quantitative claims ("10x faster," "trusted by thousands") not backed by the team?
12. List-of-three as the structural reflex for every section?

Each scored 0 or 1 (yes the tell is present, no it isn't). Threshold to ship: total = 0. Three or more "yes" answers makes it slop by the operational definition regardless of execution quality.

### These two systems are partially orthogonal

The empirical positive system measures **whether the composition is well-formed**. The slop negative system measures **whether the composition has been individually authored**. A composition can be well-formed and unauthored (the slop case). It can also be authored and badly-formed (the design-school over-fit case). The goal is well-formed and authored.

This is the diagnostic 2x2:

|                    | Low slop signals      | High slop signals                |
|--------------------|-----------------------|----------------------------------|
| **High empirical beauty** | Goal — well-formed, individually authored | Polished AI default — most v0 output |
| **Low empirical beauty**  | Idiosyncratic but ugly — design-school over-fit | Bad AI default executed poorly |

Most of the SaaS landing pages a 2025-2026 visitor sees sit in the upper-right quadrant. The framework's job is to keep us in the upper-left.

---

## Part 2 — Where the two bodies of research agree

The agreements are easy and worth listing because they form the foundation that does not change.

**Effort visible in the artifact.** The Stanford Web Credibility Project (Fogg) found that 46.1% of users assess credibility based on visual design. The MINT Lab definition of slop (asymmetric effort) names the inverse. Both sides agree: visitors can detect whether a page reflects work, and they make trust judgments accordingly. The empirical research framed this as "polish"; the slop research framed it as "curation." They are the same signal.

**Typographic discipline is non-negotiable.** Bringhurst on the empirical side; the slop critique of "Inter font as the only typeface" on the negative side. The former says use a modular scale and ≤2 weights; the latter says don't reach for the AI-default font without a second face for contrast. They prescribe the same discipline.

**Color discipline is non-negotiable.** Refactoring UI / Wildbit on the empirical side; the slop critique of "purple-to-blue gradient on everything" on the negative side. Both penalize lazy palette construction. Both reward small palettes with proper saturation handling.

**Hierarchy must be findable in <1s.** Refactoring UI on the empirical side; the slop critique of "centered hero + 2 CTA + grid below" on the negative side. The empirical side prescribes weight-and-color-based hierarchy as the discipline. The slop side notes that the AI-default *executes* this discipline correctly and is still slop because the layout is the median. So hierarchy clarity is necessary but not sufficient — the discipline must be applied to a non-median composition.

**Distinctiveness within a category is rewarded.** MAYA on the empirical side; the displacement and asymmetric-effort critiques on the negative side. Both reward sites that have a single clear authorial point of view that differentiates them inside their category. The empirical side bounds the distinctiveness ceiling; the slop side raises the distinctiveness floor.

**Trust comes from looking like a competent operator.** Fogg explicit on the empirical side; the slop critique of "empty quantitative claims" and "AI-powered as the value prop" on the negative side. The empirical side says trust is conferred by visual quality. The slop side says trust is *withdrawn* when the claims are obviously generic or unsupported. Two halves of the same coin.

The agreements form the base layer. The next part is where the two lenses pull apart.

---

## Part 3 — Where the two bodies of research conflict

This is the substantive contribution of the synthesis. The conflicts are not contradictions — they are tensions that resolve in specific, prescriptive ways once you see them clearly.

### Conflict 1 — The prototype-colonization paradox

Tuch's strongest finding (2012) is that high-prototypicality sites are rated more beautiful. The prescription: figure out which category your site belongs to and execute the conventions of that category cleanly.

The slop research observes that the prototypical "modern SaaS landing page" of 2024-2026 *is the AI default*. v0, Lovable, and Bolt have been trained on the canonical SaaS reference set (Stripe, Linear, Vercel, Notion, etc.) and now produce a composite of it. The category prototype has been **colonized** by AI generation.

The synthesis: **be prototypical for a category whose prototype has not been colonized by AI tools.** Operationally, this means asking before you draw: when I think of the canonical reference set for this category, do I picture a v0-generated page or a human-made one? If v0, pick a different category. The categories that haven't been heavily colonized as of mid-2026:

- Trade-services-software (Jobber, Housecall Pro, MoeGo) — older codebases, less template-able
- Local-business-marketing (high-end Squarespace / Format / Cargo) — hand-curated by individual designers
- Editorial publishing (NYT-school, Pudding-school, Are.na) — explicitly distinct typographic systems
- Financial-operations at the high end (Mercury, Brex) — distinct enough that imitations are recognizable as imitations
- Magazine / catalog / industrial print pastiche — outside the SaaS reference set entirely

The colonized categories that should now be approached only with explicit defenses:

- Generic "modern SaaS" with bento grids and Lucide icons
- Linear-school dark-mode developer-tools sites
- Stripe-influenced gradient-and-glassmorphism marketing pages
- Notion-school "centered headline + product screenshot" composition

This is a strong update to the original framework's Input 2. **Choosing a prototypicality category now requires a colonization check.** A category that scores high on Tuch's beauty axis but is colonized by AI defaults will produce slop even when executed well, because the executed result lands in the same visual neighborhood as the AI generation.

### Conflict 2 — The complexity-peak collision

Reinecke's 2013 inverted-U for visual complexity peaks at moderate density. The prescription: aim for the middle of the curve — neither blank nor cluttered.

The slop research notes that AI-generated landing pages also sit at moderate density. The bento grid, the three-icon-and-text feature row, the centered hero with two CTAs — all of these are explicitly engineered to land in the middle of Reinecke's curve. They were not chosen by the model on aesthetic grounds; they were averaged from the training data, and the training data clusters in the middle of the curve because the human-made canonical sites cluster there.

The synthesis: **moderate density is necessary but not characterizing.** Hitting the middle of Reinecke's curve doesn't escape slop because the slop sits at the middle of Reinecke's curve. The escape isn't to deviate from Reinecke (which would lower beauty); it's to occupy the moderate-density region with a *non-default composition*. Same density, different shape. A page with the same complexity score as a v0 default, but composed of editorial column grids instead of bento boxes, is not slop.

### Conflict 3 — The aesthetic-usability halo problem

Tractinsky (2000) and the NN/g follow-up establish the aesthetic-usability effect: beautiful sites are perceived as more usable, and visitors are more patient with broken flows on beautiful sites. The prescription: invest in beauty because it raises the entire experience.

The slop research observes that AI-default sites *trigger this effect* — they look beautiful by Tractinsky's measures, and visitors initially perceive them as competent. The trust collapse comes later, when the visitor notices the genericness, the "AI-powered" claim, the empty quantitative numbers, the stock illustration. By then they have given the page their attention but withdrawn their belief.

The synthesis: **the aesthetic-usability halo is a one-shot resource.** The first 50ms gives you the benefit of the doubt; the next 5 seconds either confirms the visitor's instinct or breaks it. Slop wins the 50ms verdict and loses the 5-second verdict, and the disappointment makes the long-run trust position *worse than if the page had been visually weaker but more obviously authored*. The framework should reward designs that maintain the aesthetic-usability bargain on a longer timescale — which means resisting the slop signals even when individual signals are visually appealing.

### Conflict 4 — The MAYA bind

Loewy's MAYA principle says: stay inside the audience's frame of reference. The prescription: don't depart from category convention more than the audience can absorb.

The slop research observes that the audience's "frame of reference" for B2B SaaS *now includes the AI default*. Visitors who use the internet have seen hundreds of v0-output landing pages. The frame has been stretched to include the slop aesthetic, which means MAYA-conformant designs are now slop-conformant by default.

The synthesis: **MAYA's "acceptable" zone has been bifurcated.** The center of the zone is now occupied by the AI default. Designs that sit at the center of MAYA-acceptable are slop. The viable positions are either (a) MAYA-1 to MAYA-2 in a non-colonized category, or (b) MAYA-2 to MAYA-3 in a colonized category, where the additional novelty is what overrides the default association. The framework's Layer 1 / Input 3 (MAYA distance) needs to be calibrated to the colonization status of the chosen category — colonized categories require more novelty to clear the slop floor.

---

## Part 4 — The unified framework v2

The framework now has seven layers, with two new ones (Layer 0 for meta-context and Layer 6 for slop avoidance) and an updated Input 2 in Layer 1.

### Layer 0 — Meta-context (set once)

Before any inputs, declare:

- **The colonization map.** List the prototypicality categories and mark each as colonized (AI tools produce competitive output) or non-colonized (AI tools cannot replicate the genre because their training data underweights it). Re-evaluate quarterly as the colonization map changes.
- **The slop tolerance setting.** For most B2B SaaS audiences in 2026, the answer is zero — any visible slop signal disqualifies. For audiences that are not internet-saturated (older shop owners, niche trade audiences), slop signals matter less because the audience hasn't seen enough v0 outputs to recognize them. GroomCart's audience is between these — moderate signal sensitivity, so target zero with one allowance for deliberate use.

### Layer 1 — Inputs (per batch)

- **Input 1: Audience demographic coordinates** [Reinecke 2014]. Same as before — age, education, gender skew, B2B SaaS familiarity.
- **Input 2: Prototypicality category WITH COLONIZATION CHECK** [Tuch 2012 + slop research]. Same as before, plus: each candidate category is marked colonized or not. Each mockup in a batch should not all share the same colonization status — at least one non-colonized category per batch.
- **Input 3: MAYA distance, calibrated to colonization** [Loewy + slop research]. For non-colonized categories: MAYA-1 is sufficient. For colonized categories: minimum MAYA-2, target MAYA-3. The added novelty in colonized categories is what creates separation from the AI default.

### Layer 2 — Constraints (locked for every mockup)

Unchanged from v1: typography (modular scale, ≤6 sizes, 2 weights), color (≤3 hue families, OKLCH or saturation-corrected HSL, 8-10 stops, WCAG 4.5:1 / 3:1), spacing and alignment (single base unit, proximity rule, alignment grid ≤12), density targets per audience, performance (LCP < 2.5s).

### Layer 3 — Tests (per mockup, before claiming finished)

- **The 50ms test** [Lindgaard]. Category recognition + hierarchy legibility + trust judgment at literal half-second exposure. Unchanged.
- **The aesthetic-usability calibration** [Tractinsky]. The visual quality of the LP must not exceed the visual quality of the actual product. Unchanged.
- **NEW: The 5-second test.** Look at the page for five seconds. Does the visitor notice the genericness, the AI-default tells, the empty claims? If the 50ms verdict survives the 5-second look, the page passes. If the 50ms verdict collapses on closer inspection, the page is in the polished-AI-default quadrant and must be rejected even if it scored well on the rubric.

### Layer 4 — Diversification (per batch)

Unchanged from v1: each mockup must vary from every other on at least 2 of 4 axes (category, complexity coordinate, colorfulness coordinate, dominant typographic mode).

### Layer 5 — Positive rubric (per mockup)

Unchanged from v1: 8 dimensions × 0-3 = total /24. Threshold to ship: ≥18.

### Layer 6 — NEW: Negative checklist (per mockup)

The 12-item slop checklist from the slop research doc. Threshold to ship: total = 0. One "yes" requires explicit defense (the use is so deliberate and contrarian that it inverts the slop reading). Three or more "yes" disqualifies regardless of any other score.

### Combined gate

A mockup ships only when **all** of the following are true:
- Layer 3 tests all pass (50ms verdict + aesthetic-usability calibration + 5-second test)
- Layer 5 rubric ≥18/24
- Layer 6 checklist = 0 (or = 1 with explicit defense)

A mockup that scores 22/24 on the rubric but has 3 slop tells is *rejected*. A mockup that scores 16/24 on the rubric and has 0 slop tells is *iterated, not rejected* — the underlying direction is right, the execution needs work.

---

## Part 5 — A taxonomy of slop signals organized by what they trigger

The 12-item checklist is operational but flat. This taxonomy explains *why* each signal triggers slop, so we can recognize new signals as they emerge and we can defend deliberate uses of any signal we choose to keep.

### Visual-vocabulary slop (the look)

Triggered by: the eye recognizing the AI-default palette, surface treatment, or typography.

- Purple-to-blue / pink-to-purple gradients
- Glassmorphism on gradient
- Inter as only face
- Lucide icons in default treatment
- 3D abstract blobs / mesh gradients

These are the most easily spotted because they are visual. They also have the cleanest defense: replace each one with a deliberate choice (a different palette, a second face, hand-drawn icons, custom illustration). The cost of defense is low.

### Structural slop (the shape)

Triggered by: the eye recognizing the AI-default composition.

- Centered hero with single headline and two CTAs
- Three- or four-card feature grid with same-sized cards
- Bento grid hero or features
- Identical SaaS section order (hero → logos → features → testimonial → pricing → CTA → footer)

Harder to defend because the alternatives are less obvious. The defense: pick a layout from a *non-colonized category* (editorial split, magazine column, packing-slip line items, type-specimen single-column with marginalia) instead of inventing a new one.

### Typographic slop (the voice)

Triggered by: the reader recognizing the AI-default copy patterns.

- Headlines of the form "[Verb] your [noun] with AI"
- "AI-powered" / "intelligent" / "smart" as the value prop
- Empty quantitative claims ("10x," "trusted by thousands")
- List-of-three as structural reflex
- Fancier-than-necessary verbs ("leverage," "streamline," "empower")
- Perfect-grammar-zero-personality copy

Defense: write the copy after talking to a customer, not before. Use direct quotes. Allow sentence-level personality (humor, specificity, unfinished thoughts). The slop research is clear that this is the hardest signal to fake — real human writing has rough edges, and AI defaults always smooth them out.

### Iconographic slop (the small marks)

Triggered by: the eye recognizing the AI-default icon set and choices.

- Lucide icons (the library)
- Same handful of icon choices: ⚡ for fast, ✨ for AI, 🔒 for secure, ✓ for feature
- Emoji used in place of icons

Defense: commission or hand-draw a small custom icon set in your own stroke style. Even if it's only 6-10 icons, the consistency of an in-house set is recognizable. Or: use no icons at all — many of the strongest landing pages of the last five years have zero iconography.

### Imagery slop (the photos and illustrations)

Triggered by: the eye recognizing AI-default imagery treatments.

- 3D abstract blobs floating in hero
- "Diverse team at laptop" stock photo
- Mock product screenshots of fake dashboards
- Floating phone mockups with abstract UI

Defense: use a real product screenshot of the actual product, or commission custom illustration in a deliberate style, or use real photography of a real person in a real place. Each of these is more expensive than the default, which is precisely why the default is slop.

### Effort-asymmetry slop (the deepest layer)

Triggered by: the visitor sensing that the page took less effort to make than it asks them to invest.

- No specific named customer or use case
- No specific person standing behind the work
- No real opinion, only consensus positioning
- No detail that only a category-fluent person would include

This is the hardest signal to spot in the abstract and the easiest to feel in the concrete. The MINT Lab definition centers on this. Defense: every mockup should include at least three details that a generic AI generation could not produce — a specific customer name, a specific SKU, a specific scenario, a specific founder voice. The current GroomCart hero (Andis #10 Blade, Bio-Groom Ear Cleaner, "PetEdge is cheapest, Ryan's ships faster") clears this bar because the details are real and specific. A v0 generation would write "Premium Brand Item A, Vendor X" instead.

---

## Part 6 — Re-applying the unified framework to the existing nine mockups

Each mockup scored on Layer 5 (positive rubric, /24) and Layer 6 (slop checklist, /12 of "no" answers — higher is better, 12/12 means zero slop tells).

| # | Name | Category | Colonized? | Layer 5 (beauty) | Layer 6 (clean of slop tells) | Combined |
|---|---|---|---|---|---|---|
| 1 | Slate | Linear-school dark | Yes | 21/24 | 11/12 (uses Inter, no second face) | Iterate |
| 2 | Atrium | Editorial cream | No | 22/24 | 12/12 | **Ship** |
| 3 | Dispatch | Brutalist mono | No | 18/24 | 12/12 | **Ship** |
| 4 | Bento | Multi-card SaaS | Yes | 19/24 | 9/12 (bento, three-card grid, Inter, default Lucide-style icons) | **Reject** — slop tells > 1 with no defense |
| 5 | Granola | Centered + screenshot | Partly | 20/24 | 11/12 (centered hero + 2 CTAs, but otherwise clean) | Iterate |
| 6 | Workshop | Handcrafted local | No | 21/24 | 12/12 | **Ship** |
| 7 | Field Manual | Print pastiche | No | 17/24 | 12/12 | Iterate |
| 8 | Order Slip | Packing slip | No | 18/24 | 12/12 | **Ship** |
| 9 | Specimen | Type specimen | No | 22/24 | 12/12 | **Ship** |
| A | Jobber-school | Trade-services | Partly | 23/24 | 11/12 (three-card features below; defensible) | **Ship** |
| B | Squarespace local | Local-business | No | 22/24 | 12/12 | **Ship** |
| C | Mercury-school | Financial ops | Partly | 22/24 | 11/12 (centered hero + 2 CTAs; defensible) | **Ship** |

### What changes from the previous scoring

Bento moves from "iterate" to "reject." Under the v1 framework I scored it 19/24 and recommended iteration. Under the unified framework, the four slop tells (bento layout + three-card grid + Inter + Lucide-style icons) push it past the disqualification threshold. The composition is too close to a v0 default to escape, no matter how cleanly it's executed.

Slate and Granola move from "ship" / "iterate" to "iterate" with explicit defense required. Both have one defensible slop tell each. Either could ship if the tell is intentionally inverted (Slate: pair Inter with a second face like a serif accent; Granola: replace the centered hero with an asymmetric one).

The Atrium / Workshop / Order Slip / Specimen / B (Squarespace) group all clear both gates cleanly. These are the strongest unified-framework candidates.

---

## Part 7 — The three-question protocol for any future mockup

The framework is large. For day-to-day use, three questions are enough to catch the most common failures. Apply them in order.

**Q1 — Is the prototypicality category colonized by AI tools?** If yes, the mockup must be MAYA-2 or higher and must defend any slop tells explicitly. If no, MAYA-1 is sufficient and slop tells should still be minimized but the colonization risk is lower.

**Q2 — Does the page survive the 5-second test?** Beyond the 50ms gestalt, does closer inspection reveal generic patterns, default icon choices, AI-style copy, or empty claims? If the second look weakens the first, the page is in the polished-default quadrant.

**Q3 — Does the page contain three or more details that only a category-fluent human would include?** The MINT Lab effort-asymmetry test. Specific SKUs, specific customer names, specific scenarios, founder-voice idiosyncrasies. If the page reads as anonymous, it is slop regardless of how it scores on the visual rubric.

A mockup that passes all three questions can move into the full Layer 1-6 evaluation. A mockup that fails any of the three should be redirected before any further work, because the underlying direction is the problem.

---

## What this synthesis explicitly does not include

By the same instruction that shaped the empirical framework, no rules below derive from sources outside the cited research:

- "Add testimonials" / "include social proof" — no source backing
- "Pricing should be on the page" — no source
- Specific color schemes ("warm always wins," "dark mode for B2B") — no source
- Brand-personality language ("be bold," "feel premium") — no source
- Conversion-rate optimization tactics ("above the fold," "limit form fields") — adjacent literature, deliberately excluded here

These may be useful. They are not in this framework.
