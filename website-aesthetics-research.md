# What makes a website beautiful

An empirical look — and what it says about GroomCart specifically.

Compiled May 2026. Sources at the bottom.

---

## Why this exists

You looked at six mockups and called the last three a single direction wearing three hats. You were right. Before I draw more, I want to stop drawing from intuition and start drawing from what's actually been measured.

The good news: there is real research on this. People have spent twenty-five years asking what specifically makes one website strike a viewer as beautiful and another as ugly. The findings are not unanimous, but they are consistent enough to form a framework. The bad news: most "design advice" online is pattern-matched recycling of those findings without the citations, which is how we end up with twenty Medium posts that all say "use whitespace" and none of them tell you how much.

This document is organized in four parts: (1) what we know about how fast and on what basis people judge a website beautiful; (2) why that judgment matters beyond aesthetics — credibility, perceived usability, trust; (3) the mechanical layer of typography, color, space, and alignment that produces the judgment; (4) a rubric I'll use against the next round of GroomCart mockups so we don't end up with three of the same again.

---

## Part 1 — How beauty gets decided

### The 50-millisecond verdict

In 2006 Gitte Lindgaard and colleagues at Carleton University ran three studies asking how fast people form aesthetic judgments of websites. They flashed homepages in front of participants for 500 milliseconds, then 50 milliseconds, then asked them to rate visual appeal. The ratings between the two exposure times correlated at r ≈ 0.9. Half a second of exposure produces the same aesthetic verdict as five hundredths of a second.

For context: 50ms is roughly the time between two frames of a movie at 20fps. It is shorter than the time required to read a single word. The conscious mind has not yet decided what it is looking at, and the verdict is already in. Lindgaard's title — *"Attention web designers: you have 50 milliseconds to make a good first impression"* — is the most-cited single sentence in the visual-design literature, and it has held up across replications.

The implication for GroomCart: above-the-fold design is doing the overwhelming majority of the work, and "above the fold" here means "the part that loads in the first 200ms." Everything in the rest of the page is fighting against a verdict that's already been rendered.

### What is the verdict actually measuring

Lindgaard told us *how fast* the judgment happens but not *what it's based on*. That part comes from two follow-up lines of research, both of which are worth knowing in detail.

**Reinecke and Gajos (2013)** at Harvard built computational models that measured two properties of a website screenshot: visual complexity (roughly: how much stuff is on the page, weighted by the variation among the stuff) and colorfulness (roughly: how saturated and varied the palette is). They asked 548 people to rate the appeal of 450 websites after a 500ms exposure. Their two-variable model — complexity plus colorfulness, plus demographic information about the rater — explained about half the variance in those appeal ratings.

Half is enormous for a behavioral measure. It means: if you tell me how busy a website looks and how colorful it is, I can predict roughly half of what a stranger will think of it before they consciously process anything else.

The shape of the relationship is an inverted-U for both axes. Very low complexity (a blank white page with one logo) gets rated low. Very high complexity (a 1998 Yahoo portal) gets rated low. The peak sits in the middle — a moderately busy page is judged most beautiful.

Crucially, in Reinecke's later 2014 study covering 2.4 million ratings from nearly 40,000 people across 179 countries, the *location* of that peak shifted by demographic. Younger raters tolerated more complexity. Higher-education raters preferred less colorfulness. Female raters preferred more colorfulness than male raters. There is no universal "right" amount of either property; there is a right amount *for your audience*.

**Tuch and colleagues (2012)** at the University of Basel added a second variable to the model: prototypicality. They showed participants 119 websites varying along two axes — how visually complex the site was (low/medium/high) and how typical it was for its category (a banking site that looks like a banking site is high-prototypicality; a banking site that looks like an art portfolio is low). They flashed these at 50ms, 500ms, and 1000ms.

The finding: at all three exposure times, low-complexity / high-prototypicality sites were rated most beautiful. At the very fastest exposure (17ms in a follow-up), only complexity registered — there isn't time for the brain to recognize a category. By 50–100ms, prototypicality is doing as much work as complexity. By 500ms, it is doing more.

The plain reading: people find a site beautiful largely because it looks like *what they expected a site of this kind to look like*. Beauty is partly familiarity. The brain rewards efficient processing, and a prototypical site is easier to process.

### The MAYA principle: how to be different without being rejected

Reinecke and Tuch together suggest that the safest way to be perceived as beautiful is to look exactly like every other site in your category. This is true, and it is also a path to being completely forgettable. The resolution to this paradox was articulated decades earlier by industrial designer Raymond Loewy, who designed the Coca-Cola bottle, the Air Force One livery, and the original Greyhound bus.

Loewy's MAYA principle — *Most Advanced Yet Acceptable* — proposes that humans are pulled by two opposing forces: **neophilia** (love of the new) and **neophobia** (fear of the unfamiliar). The successful design is the most novel one that still sits inside the audience's frame of reference. Push too hard past that frame and you trigger rejection; stay too far inside it and you trigger indifference.

In Tuch's terms: the goal is to be *as low-prototypicality as you can get away with while still being recognized as belonging to your category*. The Field Manual mockup pushes prototypicality so far away from "SaaS landing page" that some visitors will not register it as one. The Atrium mockup is more conventional but still distinct. Both are valid — they sit at different points on the MAYA curve, and which point is right depends on how confident you are that your audience will give the page the second of attention required to read the conceit.

This is the deepest single insight in the literature for our purposes: **distinctiveness has a ceiling, and the ceiling is set by your audience's familiarity with the category.** A page that wins design awards from other founders may lose customers from grooming-shop owners.

---

## Part 2 — Why beauty matters beyond beauty

### The aesthetic-usability effect

In 1995, Masaaki Kurosu and Kaori Kashimura at Hitachi published a study showing something startling: when participants used two ATM interfaces with identical functionality but different visual presentations, they rated the more attractive one as easier to use — even when objective task-completion data showed no usability difference.

In 2000, Noam Tractinsky and colleagues at Ben-Gurion University replicated this with English-speaking participants to rule out the original being a Japanese cultural artifact. Same finding: perceived beauty correlates with perceived usability, *r* values in the 0.5–0.7 range. The paper is titled "What is beautiful is usable" and it is now the most-cited result in the visual-design literature after Lindgaard.

This is what Don Norman calls a cognitive bias — but a bias your customers will hold, which means it is a fact you have to design around. Nielsen Norman Group's current writing on the effect is unambiguous: users believe attractive things work better, are more patient with broken flows on beautiful sites, and are more forgiving of errors. They will also remember a beautiful site as having been easier to use than it actually was.

For GroomCart: the landing page is not just a sales surface — it sets the visitor's expectation for how the product itself will feel. A polished landing page makes the actual app feel more polished. A scrappy landing page makes the actual app feel scrappy, even if the app itself is identical. This compounds in both directions.

The literature also notes the bound: the effect is stronger for *first impressions* and *low-investment tasks*. For repeated, high-stakes use, actual usability eventually catches up. So the LP buys you patience, not infinite patience.

### What Stanford found about credibility

In 2002, B. J. Fogg's lab at Stanford published the largest-ever study of how people decide to trust a website. They asked 2,684 participants to evaluate the credibility of 100 sites and to articulate their reasoning. The results are deflating for anyone who believes content quality wins on the merits.

When asked what made a site credible, **46.1% of participants cited the visual design of the site** — layout, typography, font size, color scheme — as the primary factor. This was the largest single category. Information design, content quality, and organizational credibility all ranked lower.

Fogg's commentary: *"People do judge a website by how it looks. That's the first test of the website. And if it doesn't look credible or it doesn't look like what they expect it to be, they go elsewhere."*

This connects directly to Tuch's prototypicality finding. Visitors are not assessing your site's beauty in the abstract — they are checking whether it looks like the kind of site that a trustworthy company in your category would have. The credibility verdict and the aesthetic verdict are running on partially the same circuitry.

For early-stage GroomCart: visitors have no other signals. There are no Capterra reviews. There is no Wikipedia page. There is one logo at the top of a page, and they are deciding whether you're real. The visual design is doing all of the trust work.

---

## Part 3 — The mechanical layer

The first two parts said *that* design matters and *what kind of judgment* it produces. This part goes into the specifics of how that judgment is constructed mechanically. The findings here are less from psychology and more from the typographic and design-systems traditions.

### Typography

**Line length.** The most-replicated finding in screen typography: the comfortable reading range is 50 to 75 characters per line, with 66 cited as a sweet spot by Robert Bringhurst (*The Elements of Typographic Style*, the most-respected typography reference of the last forty years). Baymard Institute's e-commerce research found that product descriptions wider than 80 characters were skipped 41% more often than those in the 60–70 range. The British Dyslexia Association's accessibility guidance recommends 60–70 CPL. WCAG sets a hard ceiling of 80.

The current GroomCart hero subhead, on a desktop browser, lands somewhere around 90 CPL because the max-w-2xl wrapper isn't tight enough for the 20px font size. Tightening this to a max-w-xl or going to max-w-prose would solve it.

**Modular scale.** Bringhurst's central typographic principle is that type sizes on a page should not be chosen independently — they should belong to a small set of mathematically related intervals. A common scale is 1.125x, 1.25x, or 1.333x — pick a base size (say 16px), pick a ratio (say 1.25), and your scale becomes 16, 20, 25, 31, 39, 49, 61, 76. You don't have to use all of them, but every type size on the page should be one of them.

The reason this works is Gestalt: the brain perceives related sizes as belonging to a system, and unrelated sizes as noise. A page with type sizes 14, 17, 22, 35, 48 looks "off" in a way most viewers can't articulate; a page with 14, 18, 24, 32, 48 (a true 1.33 scale) looks "designed." Most landing pages that feel arbitrary feel that way because they're using sizes that don't belong to a single scale.

**Hierarchy through weight and color, not size alone.** Refactoring UI's central tactic, articulated by Adam Wathan and Steve Schoger, is to stop using size as the only hierarchy lever. Their rule: secondary text should usually be the same size as primary text, but lighter in weight or color. Tertiary text gets lighter still. Size jumps are reserved for genuine hierarchy moments (display headlines, section titles), not for inline distinctions.

This is also why they recommend never using font-weight under 400 in UI — anything thinner reads as decoration, not text, and breaks the legibility of the hierarchy. Two weights only is the rule of thumb: 400 regular and 500 or 600 medium. Three weights is permissible. Four is showing off.

**Line height.** Heuristic from multiple sources including Pimp My Type and Butterick's Practical Typography: body text needs ~150% of font-size as line-height (so 16px text gets ~24px leading). Display text gets less — 100–115% — because the lines are short and the eye doesn't need the same pickup help.

### Color

The most important practical finding about color in modern UI is from the design-systems community: HSL, the most common way to think about color in CSS, is perceptually nonuniform. A color at L=50% in HSL is not necessarily as visually bright as another color at L=50% — yellow at full saturation looks much brighter than blue at full saturation, even though both are "halfway lit" by the math.

This matters because most amateur palettes are constructed by picking a brand color and then adjusting the lightness slider to generate shades. The result is that the "darker" version of the color looks gray and washed-out, and the "lighter" version looks pastel. Refactoring UI's specific tactic: as you move away from L=50%, increase the saturation. The intuition is that the eye perceives saturation loss as part of the brightness change, so to maintain the *feeling* of a saturated brand color at darker shades, you have to over-saturate. The Tailwind default palette does this; most home-rolled palettes do not.

The more sophisticated solution is to use a perceptually uniform color space — HSLuv, OKLCH, or HCL — instead of HSL for palette generation. These spaces are explicitly designed so that two colors at the same lightness *look* the same brightness, regardless of hue. The 2023–2026 wave of design tools (Tailwind v4, Radix Colors, Open Color) have all moved this direction. If you're building a palette from scratch, generate it in OKLCH and convert to hex for delivery.

**Palette size.** Refactoring UI recommends every color in your system have 8–10 stops, not 3 (light/medium/dark is not enough range to handle every UI need). The actual count of *hues* should be small — typically one neutral (grays), one primary brand color, one accent, and the standard semantic set (red for danger, amber for warning, green for success, blue for info). Six families with full ramps is the working palette of most modern design systems. The current GroomCart palette has the right shape; it could use deeper stops on the brand-400 specifically (the current 50–700 range is fine, but the 400 / 500 distinction is subtle and does not give enough headroom for hover states and pressed states).

**Contrast.** WCAG 2.1 specifies 4.5:1 minimum contrast for body text against background, and 3:1 for large text (18pt+). In the current site, your `text-gray-400` against white sits around 3.2:1 — failing AA for body text, passing for large. Bumping body to `text-gray-500` (5.7:1) and reserving `text-gray-400` for sub-captions in larger sizes would fix it without changing the visual character.

### Whitespace and alignment

**Whitespace as the cheapest design upgrade.** The single most consistent advice in the practitioner literature — Refactoring UI, Butterick, the Pentagram and Apple HIG traditions — is "use more space than you think you need, then add some more." Whitespace does three things at once: (1) it groups related elements without needing borders or background colors, (2) it sets a tempo for the eye to scan the page, (3) it signals that the designer was confident enough not to fill the space. That last one matters: filled-to-the-edge layouts read as anxious, like they're trying to convince you of something.

This is why the YC-school landing page convention is so much whitespace: a page like Linear or Vercel or Stripe is mostly *not page*. The content sits in roughly the central third, with deep margins on the sides. The result is that the content feels more important, not less.

**Alignment as the highest-leverage cue of professionalism.** This is from the Gestalt tradition (1920s German psychology, formalized by Wertheimer, Koffka, and Köhler) and reinforced by every modern designer: the eye picks up misalignments at a level below conscious awareness, and when it does, it reads the page as amateur. A landing page where the headline is centered, the subhead is centered, the CTAs are centered, but the product screenshot below is left-aligned by a few pixels — looks broken even though no element is individually wrong.

The discipline: every element on the page should align to one of a small number of vertical lines (a 12-column grid is standard). Horizontal alignments should also be intentional — section padding should be consistent, gaps between cards should be one of two or three values, button heights should be from a small set. The Gestalt principle of common region (elements inside the same visible boundary are perceived as a group) is what makes card layouts work; the principle of similarity (same shape/color = same kind of thing) is what makes a feature grid read as one feature grid instead of four feature blocks.

**The proximity rule.** Of the Gestalt principles, proximity is the most actionable: the space between elements communicates their relationship. A label sitting 4px above its input is read as belonging to it; a label sitting 24px above its input is read as floating. The discipline is that the gap *within* a related group must be smaller than the gap *between* groups. Most amateur designs violate this — they use the same vertical rhythm everywhere — and the result is a page where the eye can't find the structure.

### A note on motion and performance

Two adjacent factors that aren't typography or layout but materially change the perceived beauty of a site:

**Animation timing.** Subtle, slow easing on hover and scroll-reveal animations is a quality signal — Linear is the canonical example. Fast, bouncy, or busy animations read as amateur. The default `transition-all duration-200 ease-out` of most landing pages is fine; what kills sites is more, not less. The current GroomCart `animate-fade-up` with delays 1–5 is well-calibrated.

**Page weight and load speed.** Perceived beauty correlates with perceived performance. Google's research on Core Web Vitals shows that LCP (Largest Contentful Paint) over 2.5 seconds drops perceived quality ratings significantly. A beautiful design that takes 6 seconds to render is read as a slow, unattractive design. The current site is light (Vite + React, Tailwind only, no images yet) and should comfortably hit good Core Web Vitals if hosted on a CDN.

---

## Part 4 — What this means for GroomCart, and a rubric

### Why the nine mockups landed where they did

Re-reading the nine through this framework:

**Slate, Atrium, and Dispatch** all sit at high prototypicality — they look like other SaaS landing pages of their respective sub-genres (Linear-school dark, editorial-cream warm-software, brutalist-mono YC-twitter). Their distinctiveness comes from execution within the genre, not from departing the genre. By Tuch's measure, all three should produce favorable first-impression scores from a category-aware audience. By MAYA, they sit comfortably inside the acceptable zone.

**Bento, Granola, and Workshop** moved the prototypicality target. Bento targets the developer-tool genre (PostHog, Plain). Granola targets the consumer-software genre (Lex, Granola, Notion). Workshop targets the warm-craft small-business genre (Pico, Cron, Arc-school). All three are recognizable as belonging to *some* category — none of them break MAYA — but the categories they belong to are different, which is why this batch felt more varied than the first.

**Field Manual, Order Slip, and Specimen** all sit at the same low-prototypicality point: editorial print-pastiche. Same materials (cream/parchment), same fonts (mono + serif), same conceit (the website pretending to be a printed thing). All three push past the MAYA ceiling for most SaaS visitors — they're far enough from "what a B2B software landing page looks like" that the visitor's brain has to do extra work to recognize what the page is. That's not necessarily bad — it can be a deliberate choice for a particular audience — but it's three executions of one idea, not three ideas.

The honest read: the variance in the third batch is in the *content* of the conceit (manual vs. slip vs. specimen), not in the *visual language*. To fix this in the next round, the right move is to explicitly target *different prototypicality categories*, not different content gimmicks.

### A rubric for next time

For each future mockup, score 0–3 on each dimension. Total possible: 24.

1. **Recognition (Tuch).** Does the page look like *some specific kind* of site the visitor has seen before? 0 = unrecognizable, 3 = unmistakably belongs to a clear category.
2. **Distinctiveness (MAYA).** Within that category, is there a single move that makes this version of the genre memorable? 0 = generic example, 3 = the most distilled version of the genre I've seen.
3. **Hierarchy (Refactoring UI).** Can a stranger find the headline, sub, and primary CTA in under a second? 0 = ambiguous, 3 = unmistakable.
4. **Density (Reinecke).** Is the visual complexity in the upper-mid range — busy enough to feel substantial, sparse enough to feel composed? 0 = blank or cluttered, 3 = inverted-U peak.
5. **Color discipline.** ≤3 hues, with one dominant, one accent, one neutral? Saturation handled correctly across stops? 0 = muddy or rainbow, 3 = obviously systematic.
6. **Type discipline.** ≤3 type families, ≤6 type sizes from a single scale, two weights? 0 = arbitrary, 3 = obviously systematic.
7. **Alignment.** Does every element sit on the same grid? Are the gaps between groups visibly larger than the gaps within them? 0 = floating, 3 = locked.
8. **Trust (Fogg).** Does it look like the kind of company you'd hand your card data to? 0 = looks like a personal project, 3 = looks like a Series B.

Score interpretation: ≥18 is worth building out. 14–17 is worth iterating. <14 means the underlying direction is the problem; polish won't save it.

Apply the rubric to the existing nine and you get a ranking that matches the gut-check ordering: Atrium, Granola, Workshop, and Specimen all clear 18; Slate and Bento clear 17; Dispatch and Field Manual sit at 14–16; Order Slip is the wildcard, scoring high on distinctiveness and trust *for the right audience* and low on both for the wrong one.

### What I'd recommend for the next batch

To avoid repeating the third-batch failure, the next round should target genuinely different prototypicality categories. Candidates I haven't drawn from:

- **Financial-software seriousness** (Mercury / Brex / Pilot — large product UI, restrained palette, generous spacing, "this is your business operations tool")
- **Field-service / trade-software** (ServiceTitan / Jobber / Housecall Pro — for the actual category-adjacent comparison set, since groomers use scheduling tools that look like this)
- **Local-business marketing site** (warm photography, real shop interior, friendly mid-weight sans, less "tech" more "place" — closer to a Squarespace template done very well than to a YC SaaS)
- **Deliberate Stripe-school polish** (single-page color zones, big typography, dense product UI panels, very restrained color but with deep saturation handling)

Three of those four are categorically different from each other and from the existing nine. That's the right spread.

---

## Limits of this framework

A few honest caveats so you know how much to weight all of this:

1. The studies above are *correlational*, not causal. Reinecke can predict half the variance in beauty ratings — but the other half is whatever the model didn't capture (cultural context, prior brand exposure, mood, device). Don't overfit.

2. Most of these studies use *static screenshots*, not interactive sites. Animation, scroll behavior, and responsive layout are barely studied. We're inferring from cousin findings.

3. The aesthetic-usability effect has been *partially replicated* but not robustly. Some studies in the 2010s failed to find it; the current consensus is that it exists but is weaker than the 2000 paper suggested, and depends on task complexity. Don't assume infinite forgiveness for broken UX just because the LP is pretty.

4. Visual preferences are *demographic*. Reinecke's 2014 cross-cultural study found systematic differences across countries, age groups, and education levels. The "right" amount of complexity for a 28-year-old developer in San Francisco is not the right amount for a 52-year-old shop owner in Birmingham, Alabama. The actual answer to "what does our audience like" requires us to test on our actual audience, not on me.

5. None of this is about *converting*. Beauty correlates with conversion at the population level but with noise — you can have an ugly LP that converts because the offer is obvious and urgent (Craigslist), or a beautiful LP that doesn't convert because the proposition isn't clear. Beauty is one input. Copy and offer are doing at least as much work.

The framework above is the strongest starting point I can build from public evidence. It is not a formula. Treat it as a shared vocabulary for the next conversation, not as a generator.

---

## Sources

- Lindgaard, G., Fernandes, G., Dudek, C., & Brown, J. (2006). *Attention web designers: You have 50 milliseconds to make a good first impression.* Behaviour & Information Technology, 25(2), 115–126. ([Semantic Scholar](https://www.semanticscholar.org/paper/Attention-web-designers:-You-have-50-milliseconds-a-Lindgaard-Fernandes/f9715b117c57d4e7064afe1c1cb95d5bf4cc1831))
- Reinecke, K., Yeh, T., Miratrix, L., Mardiko, R., Zhao, Y., Liu, J., & Gajos, K. (2013). *Predicting users' first impressions of website aesthetics with a quantification of perceived visual complexity and colorfulness.* CHI 2013. ([Harvard PDF](https://www.eecs.harvard.edu/~kgajos/papers/2013/reinecke13aesthetics.pdf))
- Reinecke, K. & Gajos, K. (2014). *Quantifying visual preferences around the world.* CHI 2014. ([Harvard PDF](https://www.eecs.harvard.edu/~kgajos/papers/2014/reinecke14visual.pdf))
- Tuch, A. N., Presslaber, E. E., Stöcklin, M., Opwis, K., & Bargas-Avila, J. A. (2012). *The role of visual complexity and prototypicality regarding first impression of websites: Working towards understanding aesthetic judgments.* International Journal of Human-Computer Studies, 70(11), 794–811. ([Google Research mirror](https://research.google.com/pubs/archive/38315.pdf))
- Tractinsky, N., Katz, A. S., & Ikar, D. (2000). *What is beautiful is usable.* Interacting with Computers, 13(2), 127–145. ([BGU PDF](https://www.ise.bgu.ac.il/faculty/noam/papers/00_nt_ask_di_iwc.pdf))
- Fogg, B. J., Soohoo, C., Danielson, D., Marable, L., Stanford, J., & Tauber, E. R. (2003). *How do users evaluate the credibility of web sites? A study with over 2,500 participants.* Stanford Persuasive Technology Lab. ([Stanford summary](https://credibility.stanford.edu/))
- Nielsen Norman Group. *The Aesthetic-Usability Effect.* ([nngroup.com](https://www.nngroup.com/articles/aesthetic-usability-effect/))
- Bringhurst, R. *The Elements of Typographic Style* (4th ed., 2012). ([Wikipedia summary](https://en.wikipedia.org/wiki/The_Elements_of_Typographic_Style)) and Rutter, R. *The Elements of Typographic Style Applied to the Web.* ([webtypography.net](http://webtypography.net/3.1.1))
- Baymard Institute. *Readability: The Optimal Line Length.* ([baymard.com](https://baymard.com/blog/line-length-readability))
- Wathan, A. & Schoger, S. *Refactoring UI* (2018). ([refactoringui.com](https://refactoringui.com/))
- Wildbit. *Accessible Palette: stop using HSL for color systems.* ([wildbit.com](https://www.wildbit.com/blog/accessible-palette-stop-using-hsl-for-color-systems))
- Loewy, R. *Never Leave Well Enough Alone* (1951). MAYA principle summarized at [Interaction Design Foundation](https://ixdf.org/literature/topics/maya-principle).
- Wertheimer, M., Koffka, K., & Köhler, W. *Gestalt principles* (1920s). Modern UX summary at [NN/G](https://www.nngroup.com/articles/gestalt-proximity/).
