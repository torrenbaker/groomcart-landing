# What "AI slop" actually means — and what it looks like on a website

A research document defining the term, identifying the visual characteristics, and applying both to the GroomCart mockups so far.

Compiled May 2026. Sources at the bottom.

---

## Why this document exists

You've been pushing me to make websites that don't feel like AI slop. I've been responding to that by reaching for what *feels* the opposite — print metaphors, weird typography, monospace, footnotes — without actually defining what AI slop *is*. That's a vibes-based response to a vibes-based critique, and we're going in circles.

This document tries to close that loop by going to the source: how the term emerged, what it actually means in the academic and industry literature, and what specific visual properties have come to identify it. Once we have that pinned down, we can score the existing mockups against it honestly and design the next batch with explicit avoidance criteria — not "what feels not-AI" but "what specifically is the property and have we removed it."

---

## Part 1 — Where the term came from

The word **slop** is older than AI. It has meant "soft mud, kitchen waste, food fed to pigs" since the 1700s, and "something of little value" since at least the 1800s (Merriam-Webster). The current usage — *AI slop* as a term for low-quality, mass-produced AI-generated content — emerged on 4chan and Hacker News around 2022, originally to describe AI-generated images that flooded image boards.

The term jumped to the mainstream on **May 8, 2024**, when programmer Simon Willison published a blog post arguing that "slop" should become the standard word for unwanted AI-generated content the way "spam" became the standard word for unwanted email. His framing: "slop is the term for unwanted AI-generated content" — content that has been "mindlessly generated and thrust upon someone who didn't ask for it." Willison's post went viral and the term entered general circulation within weeks.

Adoption was fast. By the end of 2025, **both Merriam-Webster and the American Dialect Society named "slop" their Word of the Year for 2025**. A 2026 academic paper from MINT Lab on the normative status of AI slop identifies three "prototypical properties" that constitute it:

1. **Superficial competence.** It looks fine at first glance. Spelling is correct, layout is conventional, colors are coordinated. The defects are at a deeper level — substance, originality, fit.
2. **Asymmetric effort.** The cost of producing the artifact is dramatically lower than the cost of consuming it. The producer spent two minutes; the consumer is asked to spend much more.
3. **Mass producibility.** It is one of an unlimited supply. The marginal cost of another piece of slop is zero, which means slop tends to displace human-made artifacts in any open distribution channel.

These three properties are doing most of the definitional work. Hold them in mind — they recur in every part of the discussion below.

A second framing worth adding: in a more recent piece, Willison clarifies that **not all AI-generated content is slop**. His test is whether the content was reviewed and meaningfully shaped by a human before being shared. AI output that a human curated, edited, and stood behind is not slop. AI output that was generated and dumped without review is slop. The distinction is *effort*, not *origin*.

This matters for our case because everything I produce for you is technically AI-generated. The question of whether any of it is *slop* depends on the three properties above — particularly whether the effort behind a given mockup is symmetric with the attention a visitor will give it.

---

## Part 2 — What AI slop looks like on a website

The visual characteristics of AI-generated landing pages have converged, and the design and engineering communities have catalogued the convergence in detail. This section pulls together the recurring observations from multiple sources.

### The signature visual vocabulary

Across the published critiques (925 Studios, prg.sh, Conversion Haus, dev.to, the Slopless project, and others), the same eight or nine elements appear in nearly every list. I'll group them rather than repeat them.

**Color and surface treatment:**

- **Purple-to-blue or pink-to-purple gradients**, applied to backgrounds, hero text, CTA buttons, and decorative orbs. This is the single most-named tell. The 925 Studios guide describes it as "the AI color palette: purple-to-blue gradients on everything — buttons, text, backgrounds, orbs."
- **Mesh gradients and abstract floating blobs** behind hero copy. Often combined with a subtle grain or noise texture to suggest depth.
- **Glassmorphism** — frosted-glass cards floating on those gradients. Either edge-lit or with a thin border.
- **Timid color palette overall** — desaturated, low-contrast, "tasteful" in a way that suggests no strong choices were made. Where strong color appears, it is almost always the same purple.

**Typography:**

- **Inter (or a near-clone like Geist Sans)** as the only typeface. The most-cited specific font in the AI-slop critiques.
- **A single very large display weight** (semibold or bold) for the headline, often with a tight letter-spacing that's been the convention since Stripe popularized it ~2017.
- **No typographic system beyond size + weight** — no italics, no serif accents, no monospace, no genuine type pairing.
- **Generic headline construction**: "[Verb] your [noun] with [vague benefit]" or "The [adjective] way to [verb] your [noun]." Often bookended by an "AI-powered" prefix.

**Layout:**

- **Centered hero with a single large headline and one or two CTA buttons.** The 925 Studios guide notes this is "almost always" the structure of AI-generated hero sections.
- **Three- or four-card feature grid below the fold.** Each card has an icon, a title, and a paragraph of body. Equal sizes, equal spacing.
- **Bento grid** as the second-most-used hero or features layout — "modular, asymmetric, but always the same kind of asymmetric." A canonical Apple homepage from 2022, recreated by every AI tool ever since.
- **Identical section order**: hero → social proof / logo wall → features grid → testimonial card → pricing tiers → CTA → footer. Conversion Haus calls this "the median version of the internet."

**Iconography:**

- **Lucide icons** specifically — the icon library that ships with shadcn/ui. shadcn's deep integration with v0 means that nearly every AI-generated React app pulls Lucide by default. The icons are good (consistent, accessible, well-drawn), but their ubiquity has become its own problem: a Lucide icon now reads as "this is from an AI tool."
- **Same handful of icon choices**: ⚡ for "fast," ✨ for "AI," 🔒 for "secure," ✓ for "feature included," and a generic person silhouette for "team."
- **Emoji used as icons** in feature grids when no real icon is selected.

**Imagery:**

- **3D abstract blobs and shapes** floating in the hero or as decorative overlays. Often in the same purple gradient as the rest of the palette.
- **Stock illustrations** of "diverse group of people looking at a laptop" or "abstract person with floating UI elements around them."
- **Mock product screenshots** of fake dashboards with bar charts and metric cards — when no real product exists, AI tools generate placeholder UIs that all look identical.

**Copy:**

- **Perfect grammar with no personality** (Capitol Tech, Originality.AI). Real human writing has rough edges, opinions, and occasional weird turns; AI copy reads as "written by a committee that agreed on everything."
- **Lists of three** as a structural reflex. Every benefit is described as a tricolon.
- **Fancier-than-necessary vocabulary** — "leverage," "streamline," "empower," "transform" — used in place of plainer words.
- **Empty quantitative claims** without source — "10x faster," "90% reduction," "trusted by thousands" — that read as plausible and verify as nothing.
- **"AI-powered" or "Powered by AI"** as a value prop in itself, even when AI isn't the relevant feature.

### The structural critique: distributional convergence

Underneath the specific visual list is a deeper mechanism, articulated most clearly in a Conversion Haus piece on AI landing pages and a dev.to article from late 2025. It is sometimes called **distributional convergence**:

> LLMs are statistical pattern matchers. When you ask Claude or GPT to build a landing page without specific constraints, you're getting the median of every Tailwind CSS tutorial scraped from GitHub between 2019 and 2024. By copying the "average" layout, you lose your unique value proposition.

This is the mechanism that ties everything together. The visible tells — purple gradients, Inter, Lucide, bento grids, three-icon-and-text columns — are not aesthetic choices; they are the statistical mean of the training data. The model is averaging Stripe and Linear and Vercel and the eight thousand startup landing pages those two companies inspired. The result, mathematically, is a page that looks like a slightly blurred composite of them all.

The Conversion Haus piece puts the practical consequence sharply: *"You can't out-generic the generic."* If your site looks like the median, you cannot win on the median's playing field — you can only get pushed further down it.

### A useful mnemonic from the engineering side

Several of the dev-side critiques (prg.sh, Managed Code, 925 Studios) condense the AI slop website tells into one-line descriptions worth quoting:

- "Cargo-cult reenactment of what modern web design looked like in 2020."
- "Purple gradients, Inter font, three boxes with icons, timid color palette."
- "Boxes inside boxes inside more rounded boxes."
- "The default AI homepage layout: same-sized cards with icon + heading + text repeated endlessly."

Read those as instruments. If three of them describe a candidate page, it is on its way to being slop regardless of how well executed the individual elements are.

---

## Part 3 — Why this is a deeper critique than "ugly"

It's tempting to read the AI-slop critique as just "AI sites are bad-looking." But the academic and editorial discourse has been more careful than that. Two layers worth holding:

### The asymmetry critique

Recall the MINT Lab definition: slop is asymmetric in effort. The producer spent two minutes; the consumer is asked to spend much more. The complaint isn't that the artifact is ugly — much of it is "superficially competent." The complaint is that the producer **didn't put in any effort**, and is asking the consumer to act as if they had.

This frames AI slop as a *social* failure, not a *design* failure. Sharing slop is rude. It treats the audience's attention as worthless. Even a well-executed AI artifact, if produced and dumped without curation, is slop because the producer-consumer effort ratio is broken.

Applied to a landing page: the AI-slop critique is partly that the *founder didn't think hard enough about who they're talking to*. The visual tells are downstream of that root failure. A page can be visually perfect and still slop if it was generated by typing "make me a landing page for an inventory tool" into v0 and shipping the result.

This is the cleanest argument I have seen for why the *human-curated* AI-generated artifact is not slop. The output may look identical to the unsupervised version; what changed is whether someone with stakes in the outcome reviewed it, edited it, and stood behind the choices.

### The displacement critique

The mass-producibility property has its own consequence: slop floods the channel, so the median quality of what's available collapses. PPC.land's piece on AI slop and advertisers describes this as the second-order risk — even brands that don't produce slop end up associated with it because their sites appear in the same feeds, search results, and template galleries as the slop sites.

For GroomCart specifically: when grooming-shop owners search for "inventory software for my grooming business," the SERP is increasingly populated by AI-generated landing pages built on top of generic AI-generated tooling. To rise above that visually is a competitive moat, not just an aesthetic preference.

### The "Idea of AI Slop is Slop" counter-critique

One source — Philosophical Salon, January 2026 — argues that *the term itself* has become slop. The argument: "AI slop" is now thrown at any AI output the speaker dislikes, often without a precise definition, and is functioning as a culture-war epithet rather than a useful category. The piece's recommendation: keep the operational definition (asymmetric effort + mass producibility + superficial competence) and stop using the phrase as a vibes-based pejorative.

That recommendation is the correct one for our context. We can use the three-property test to evaluate specific work, including our own. We should not use "slop" as a vibes-judgment.

---

## Part 4 — Scoring the GroomCart mockups against the slop properties

Applying the operational test (three properties + the visual-vocabulary checklist) to the nine mockups we've made so far.

### The three properties

For each mockup, three checks:

1. **Effort symmetry** — Does the artifact reflect more work than a default v0 prompt would produce? Is the design a deliberate choice or the median?
2. **Distinctiveness on the visual-vocabulary checklist** — How many of the eight slop tells (purple gradient, Inter, Lucide, bento, three-icon grid, glassmorphism, generic headline, abstract blobs) does it deploy?
3. **Curation visible** — Has a human's specific point of view shaped the result? Would you recognize this as the work of someone with stakes in the outcome?

### Mockup-by-mockup

**Slate (1).** Avoids most of the visual checklist (no purple, no glassmorphism, no abstract blobs). Uses Inter — one tell. Uses a three-card-style stat grid below — one tell. Effort symmetry: high; the dark-mode discipline and mono-tag treatment are deliberate. Curation visible: yes. **Not slop, but defends against the charge with one foot.**

**Atrium (2).** Uses a non-Inter display (Instrument Serif). Cream palette — explicitly off the AI palette. Asymmetric split layout — off the centered-hero default. Effort: high; the typographic choice signals an actual taste decision. Tells deployed: 1 (the three-card features section). **Not slop. Strongest defense in batch one.**

**Dispatch (3).** Uses no AI-default visual vocabulary. Brutalist mono treatment is the explicit opposite of the timid AI palette. Effort: very high; the all-caps mono CTA conventions and the inverted black-on-white hierarchy are unmistakably deliberate. **Not slop. Highest distinctiveness score in batch one.**

**Bento (4).** This is the most-at-risk mockup in the entire set. Bento grid is explicitly on the visual-vocabulary checklist. Cards-with-icons-and-text. Lucide-style icon choices. Inter font. Effort symmetry: medium — the bento layout *is* the AI default for "show range," so executing it cleanly doesn't escape the genre, it confirms it. Curation visible: somewhat. **Borderline slop by the visual-vocabulary test.** A real designer could ship Bento and not be in slop territory; a v0 prompt would produce something in the same neighborhood.

**Granola (5).** Centered headline, two CTAs, large product screenshot below. Three of the structural tells. But: the typography is clean, the screenshot is the actual product UI, and the conceit ("watch the screen, that's the whole product") is a deliberate copy choice. Effort: medium-high. **Defensible but conventional. The composition is borrowed from Lex/Granola/Notion, which is itself defensible because those companies aren't slop.**

**Workshop (6).** Custom illustrated dog motif (no stock illustration, no abstract blob), warm peach + sage palette (off the AI palette), pill nav and rounded-everything (some AI-defaults). Effort: high; the illustration is bespoke. Tells deployed: 1-2. **Not slop. The illustrated approach is its own defense — you cannot AI-generate a coherent character system without it being obvious.**

**Field Manual (7).** Zero items from the visual-vocabulary checklist. Two-column body, footnotes, fig. callouts, hand-drawn line art. Effort: very high. Curation visible: unmistakable. **Maximally not slop, but per the framework, also at MAYA-2+ — distinctive in a way that costs prototypicality.**

**Order Slip (8).** Same as Field Manual — none of the AI tells, all of the human craft signals. Asymmetric effort *deliberately inverted*: this is a small artifact (a packing slip) that asks the consumer to spend extra attention to read the conceit. **Not slop.**

**Specimen (9).** Same as the above two. Type-specimen format is the explicit opposite of any AI-generated layout. **Not slop.**

### The honest conclusion

By the operational definition, **none of the nine mockups are slop** — all of them reflect more effort than a default AI-tool generation would, and all of them show curation. But **Bento is the closest to the line**, and **Slate and Granola are within reach of it** if you squint. The Atrium / Workshop / Dispatch / Field Manual / Order Slip / Specimen group are the ones that most decisively clear the bar.

That ordering matches your gut response throughout the conversation — you reached for the more idiosyncratic options not because they were "better" by the empirical-aesthetics framework, but because they were further from slop on the operational definition. Those are two different scoring systems and they don't always agree.

---

## Part 5 — Slop-resistance criteria for the next batch

Adding to the framework's existing layers, an explicit set of negative constraints.

A mockup avoids slop if it can answer "no" to all of the following:

1. **Purple-to-blue or pink-to-purple gradient** anywhere on the page?
2. **Glassmorphism / frosted-glass cards on a gradient background?**
3. **Inter as the only typeface,** with no second face for contrast?
4. **Centered hero with a single large headline and two CTA buttons** as the entire above-the-fold composition?
5. **Three- or four-card feature grid** with same-sized icon-title-paragraph cards?
6. **Bento grid** as the hero or features layout?
7. **Lucide icons** in their default treatment (no custom strokes, no custom palette)?
8. **3D abstract blobs, mesh gradients, or stock-illustration "diverse team at laptop"** anywhere?
9. **Headline of the form "[Verb] your [noun] with AI"** or any direct variant?
10. **"AI-powered" / "intelligent" / "smart"** as the value prop in itself?
11. **Empty quantitative claims** ("10x faster," "trusted by thousands") that the team cannot back up?
12. **List-of-three** as the structural reflex for every section?

A "no" on all twelve is a hard prerequisite for shipping. A single "yes" requires explicit defense — either the use is so deliberate and contrarian that it inverts the slop reading, or the overall composition does enough else to swamp the tell.

A "yes" on three or more makes the page slop by the operational definition, regardless of execution quality.

### Applied to the existing framework

The mockup-framework's Layer 4 diversification rule already prevents two mockups from being the same direction in different skins. This slop-resistance checklist is a different axis: it prevents *any single mockup* from collapsing to the AI-default visual vocabulary.

The combined rule for the next batch: every mockup must satisfy the existing framework's Layers 1-5 *and* must score zero on the twelve-item slop checklist. A mockup that scores ≥18 on the rubric but has three slop tells is rejected. A mockup that scores 16 on the rubric but zero slop tells is iterated.

---

## Sources

- Willison, S. (2024, May 8). *Slop is the new name for unwanted AI-generated content.* simonwillison.net (cited via search summaries; original page blocked from fetch in this environment).
- Wikipedia. *AI slop.* ([wikipedia.org](https://en.wikipedia.org/wiki/AI_slop))
- PBS NewsHour. (2025). *Merriam-Webster's word of the year for 2025 is AI 'slop'.* ([pbs.org](https://www.pbs.org/newshour/nation/merriam-websters-word-of-the-year-for-2025-is-ais-slop))
- The Conversation. *What is AI slop? A technologist explains this new and largely unwelcome form of online content.* ([theconversation.com](https://theconversation.com/what-is-ai-slop-a-technologist-explains-this-new-and-largely-unwelcome-form-of-online-content-256554))
- MINT Lab. (2026). *AI Slop: Definitions and Normative Status.* ([mintresearch.org](https://mintresearch.org/reports/ai-slop/))
- 925 Studios. (2026). *AI Slop Web Design: Complete Guide to Spotting and Fixing Generic Websites.* ([925studios.co](https://www.925studios.co/blog/ai-slop-web-design-guide))
- prg.sh. *Why Your AI Keeps Building the Same Purple Gradient Website.* ([prg.sh](https://prg.sh/ramblings/Why-Your-AI-Keeps-Building-the-Same-Purple-Gradient-Website))
- Conversion Haus. *The Problem with AI Landing Pages (and Why Most SaaS Sites Look the Same).* ([conversion-haus.com](https://www.conversion-haus.com/post/the-problem-with-ai-landing-pages-and-why-most-saas-sites-look-the-same))
- AI Productivity. *How to Spot an AI Slop Website (And Avoid Building One Yourself).* ([aiproductivity.ai](https://aiproductivity.ai/news/how-to-spot-ai-slop-websites/))
- DEV Community. *Why Every AI-Generated Landing Page Looks the Same (and How to Fix It).* ([dev.to](https://dev.to/_46ea277e677b888e0cd13/why-every-ai-generated-landing-page-looks-the-same-and-how-to-fix-it-1kmo))
- Originality.AI. *AI Generated Websites — How to Tell if a Site Was Made by AI.* ([originality.ai](https://originality.ai/blog/how-to-identify-ai-generated-websites))
- Capitol Tech. *How to Spot AI-generated Content.* ([captechu.edu](https://www.captechu.edu/blog/how-spot-ai-generated-content-it-fact-or-fiction))
- DesignRevision. *Lovable vs Bolt vs v0: We Tested All 4 AI Builders.* ([designrevision.com](https://designrevision.com/blog/forge-vs-bolt-vs-lovable-vs-v0-comparison))
- Coffee Bytes. *My Bolt vs Lovable vs V0 Vercel Comparison.* ([coffeebytes.dev](https://coffeebytes.dev/en/artificial-intelligence/my-bolt-vs-lovable-vs-v0-vercel-comparison/))
- Managed Code. *AI in UI Design: Avoiding "AI Slop" and Shipping Faster.* ([managed-code.com](https://www.managed-code.com/blog-post/ai-slop-in-design))
- Slopless. *Stop the SLOP!* ([slopless.design](https://slopless.design/))
- Philosophical Salon. (2026). *The Idea of "AI Slop" Is Slop.* ([thephilosophicalsalon.com](https://thephilosophicalsalon.com/the-idea-of-ai-slop-is-slop/))
