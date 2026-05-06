# GroomCart mockup framework

A protocol for designing landing-page mockups. Every rule below is derived from a finding in `website-aesthetics-research.md` — nothing is added from taste, intuition, or convention. Each prescription cites its source.

The framework has four layers: **Inputs** (decisions made once per batch), **Constraints** (mechanical rules every mockup must obey), **Tests** (checks each mockup must pass to ship), and **Diversification** (the rule that prevents two mockups from being the same direction in different skins).

---

## Layer 1 — Inputs (set once per batch)

### Input 1: Audience demographic coordinates [Reinecke 2014]

Reinecke's 2.4M-rating cross-population study found that the inverted-U peaks for visual complexity and colorfulness shift systematically by demographic. We declare these before drawing, not after.

For each batch, fix:

- **Age band of target visitor.** Younger raters tolerate higher complexity; older raters prefer lower.
- **Education level of target visitor.** Higher education lowers preferred colorfulness.
- **Gender skew of target visitor.** Female raters preferred more colorfulness than male raters in Reinecke's data.
- **Familiarity with B2B SaaS landing pages.** High familiarity raises the prototypicality threshold (Tuch); low familiarity lowers it.

These four numbers are coordinates on the complexity and colorfulness curves. They are not "personality" — they are the location of the peaks our mockups must aim for.

### Input 2: Prototypicality category [Tuch 2012]

Tuch's strongest finding: low-complexity + high-prototypicality sites are rated most beautiful, and prototypicality registers within 50ms of exposure. People find a site beautiful largely because it looks like *what they expected a site of this kind to look like*.

Each mockup must commit to **one** prototypicality category before it is drawn. The category is named with reference to a publicly-visible set of three or more sites that establish the visual conventions. A mockup that does not belong to a category — or that belongs to two — fails this input.

A mockup's category is its anchor. Every type, color, layout, and copy decision is in service of "executing this category cleanly."

### Input 3: MAYA distance [Loewy]

Loewy's principle: the winning design is the most novel one that still sits inside the audience's frame of reference. Within the chosen category, declare how far from category center the mockup will sit:

- **MAYA-0:** textbook execution of the category. No surprise. Maximum prototypicality.
- **MAYA-1:** one departure from category convention. Typographic, chromatic, or layout — pick one move that's surprising but still legible as belonging to the category.
- **MAYA-2:** two-to-three departures. The upper bound of acceptable novelty.

Anything past MAYA-2 puts us into low-prototypicality territory, which Tuch shows is rated less beautiful. The Field Manual / Order Slip / Specimen mockups in batch three all sat at MAYA-2 or beyond. That is the structural reason they read as "risky" rather than "appealing."

---

## Layer 2 — Constraints (locked for every mockup)

These are not choices. They apply to every mockup regardless of inputs.

### Typography [Bringhurst, Baymard, Refactoring UI]

- **Modular scale.** Pick one ratio per batch — 1.125, 1.25, 1.333, or 1.5 — generate the full type scale, and use only values from that scale. Bringhurst's principle: every type size on the page must be a member of the same mathematical series.
- **Type-size cap.** Maximum 6 sizes from the scale used on a single page. More than 6 reads as arbitrary.
- **Weight cap.** Maximum 2 weights per page. Use 400 and 500, or 400 and 600. Never use a weight below 400 (Refactoring UI rule: thinner weights break legibility of hierarchy).
- **Body line length.** 50-75 characters per line, target 66 (Bringhurst, Baymard). Above 80 CPL is skipped 41% more often than 60-70 CPL (Baymard).
- **Body line height.** 150% of font-size.
- **Display line height.** 100-115% of font-size.
- **Hierarchy via weight and color first, size second** (Refactoring UI). Secondary text is the same size as primary text but lighter in weight or color. Reserve size jumps for genuine hierarchy moments (display headline, section title).

### Color [Wildbit, Refactoring UI, WCAG 2.1]

- **Hue cap.** Maximum 3 hue families per page: one neutral (grays), one brand, one accent. Semantic colors (red for danger, amber for warning, green for success) do not count toward the cap and are reserved for state communication.
- **Color space.** Generate every ramp in OKLCH or another perceptually uniform space. HSL is permitted only with manual saturation correction at the dark and light ends. Reason: HSL is perceptually nonuniform — yellow at L=50% looks brighter than blue at L=50%, so naively-generated palettes look gray and washed out at their extremes (Wildbit).
- **Stops per ramp.** 8-10 stops per hue family, not 3. Three stops do not provide enough range for hover, pressed, focus, and disabled states (Refactoring UI).
- **Saturation correction.** As lightness moves away from 50%, increase saturation. Without this, dark and light shades read as gray (Refactoring UI, Wildbit).
- **Body text contrast.** ≥4.5:1 against background (WCAG 2.1 AA).
- **Large text contrast (18pt+).** ≥3:1 against background (WCAG 2.1 AA).

### Spacing and alignment [Gestalt, Refactoring UI]

- **Spacing scale.** Pick a base unit (4px or 8px). Every margin, padding, and gap value on the page must be an integer multiple of that base.
- **Proximity rule.** The gap *between* groups must be visibly larger than the gap *within* a group — minimum 2× (Gestalt: proximity). Violating this destroys the visual structure even when individual elements are correct.
- **Alignment grid.** Every horizontal edge on the page must align to one of a small number of vertical lines. Maximum 12. Most pages need 6-8 (Gestalt: alignment + similarity, Refactoring UI).
- **Common region** (Gestalt). Use containers (cards, bordered regions, background-color zones) to communicate grouping. Within a container, every element belongs to that group; between containers, no relationship is asserted.

### Density targets [Reinecke 2013]

After the mockup is drawn, self-rate on two 1-7 scales:

- **Visual complexity.** Target the complexity peak for the audience declared in Input 1. For a B2B professional audience the peak typically sits at 3-5. Below 3 reads as empty; above 5 reads as cluttered.
- **Colorfulness.** Target the colorfulness peak for the audience declared in Input 1. For a higher-education professional audience this peak typically sits at 2-4 (Reinecke 2014).

If a mockup falls outside the target range on either axis, the response is to adjust until it lands inside — not to declare the mockup "bold."

### Performance [Google Core Web Vitals]

- **LCP < 2.5s on slow 3G.** Beauty correlates with perceived speed; a beautiful design that renders slowly is read as a slow, unattractive design.
- **No render-blocking JS for above-the-fold content.** The 50ms verdict (Lindgaard) requires the visual to exist within 50ms.

---

## Layer 3 — Tests (every mockup must pass)

### The 50ms test [Lindgaard 2006]

Lindgaard showed that aesthetic verdicts are formed in 50ms — shorter than the time required to read a single word. Therefore the page must work as a *visual gestalt*, not as a sequence of read-then-react.

Before declaring a mockup finished, run three glance-tests at literally a half-second of exposure:

1. **Category recognition.** At 50ms, can a category-aware visitor identify what kind of site this is? (Tuch — prototypicality must register.)
2. **Hierarchy legibility.** At 50ms, can the visitor locate *where the headline sits* and *where the primary action sits*, even if they cannot read either? (Refactoring UI — hierarchy must be findable below the level of conscious reading.)
3. **Trust judgment.** At 50ms, what is the visitor's gut answer to "does this company have its act together?" If the answer is no, the trust ceiling for the rest of the page is set there. (Fogg 2002 — 46.1% of credibility judgments cited visual design as the primary signal.)

If any of these three fail, polish will not save the mockup. The underlying composition is the problem.

### The aesthetic-usability calibration [Tractinsky 2000, NN/g]

The aesthetic-usability effect (Tractinsky) means a beautiful landing page raises the visitor's expected baseline for how the actual product will feel. Beauty is therefore not just a sales surface; it sets the bar for the product itself.

The calibration test: does the visual quality of the mockup match or exceed the visual quality of the actual product UI? If the LP is more polished than the app, conversion will rise but post-signup satisfaction will drop. If the LP is less polished than the app, conversion will be lower than it should be. Aim for parity, then improve both together.

---

## Layer 4 — Diversification rule (no more three-of-the-same)

Field Manual, Order Slip, and Specimen failed because they varied only on *conceit* (the metaphor: manual vs. slip vs. catalog) while sharing the same prototypicality category, the same complexity-colorfulness coordinates, and the same dominant typographic mode. Per Tuch, three mockups at the same coordinates produce one design idea, not three.

Therefore: **each mockup in a batch must differ from every other mockup in the same batch on at least 2 of these 4 axes:**

1. **Prototypicality category** (Input 2). Cannot reuse a category within a batch.
2. **Complexity coordinate** (Input 1 / Reinecke). Significant separation on the complexity inverted-U — at least 1 step on the 1-7 scale.
3. **Colorfulness coordinate** (Input 1 / Reinecke). Significant separation on the colorfulness inverted-U — at least 1 step on the 1-7 scale.
4. **Dominant typographic mode.** Display serif / display sans / display mono / display geometric. Cannot reuse a mode within a batch.

A mockup that varies from another only on axis 2 or only on axis 3 is the same direction with different settings, not a different direction. Two mockups that vary on category but share complexity, colorfulness, and typographic mode are also the same direction (this was the third-batch failure mode).

---

## Layer 5 — Evaluation rubric

After a mockup is built, score 0-3 on each of eight dimensions. Total possible: 24.

| # | Dimension | Source | What 3/3 looks like |
|---|---|---|---|
| 1 | Category recognition | Tuch 2012 | At 50ms, the category is unmistakable |
| 2 | MAYA position | Loewy | The intended novelty registers without breaking category recognition |
| 3 | Hierarchy | Refactoring UI | Headline, sub, and primary CTA findable in <1s |
| 4 | Density on inverted-U | Reinecke 2013 | Visual complexity self-rated inside the audience peak band |
| 5 | Color discipline | Wildbit + Refactoring UI | ≤3 hue families, perceptually-uniform ramps, saturation-corrected |
| 6 | Type discipline | Bringhurst | All sizes from one modular scale, ≤6 sizes used, 2 weights |
| 7 | Alignment | Gestalt | Every horizontal edge aligns to one of ≤12 vertical lines |
| 8 | Trust | Fogg 2002 | Reads as a company that handles money/data competently |

**Score interpretation:**

- **≥18:** Build out. The fundamentals are correct.
- **14-17:** Iterate. The direction is sound but at least one dimension is failing.
- **<14:** Redirect. Polish will not save it. Re-pick Inputs 1-3 and start over.

---

## How a batch is produced

The framework prescribes the following sequence for any future batch.

1. **Set Input 1** (audience coordinates) for the batch. This is shared across all mockups in the batch.
2. **Choose N distinct prototypicality categories** (Input 2) — one per planned mockup, never repeating within the batch.
3. **For each category, choose a MAYA distance** (Input 3). A batch should not be all MAYA-0 (no variation) or all MAYA-2 (all risky).
4. **Verify diversification** — across the planned mockups, confirm Layer 4's two-axis rule is satisfied for every pair.
5. **Apply Layer 2 constraints** to every mockup.
6. **Run Layer 3 tests** before declaring any mockup complete.
7. **Score with Layer 5 rubric.** Promote ≥18s, iterate 14-17s, redirect <14s.

This is the protocol. The framework will not produce taste — that's not what research can do — but it will prevent the kinds of structural failures we've already produced and re-produced.

---

## What this framework explicitly does not include

By the user's instruction, no rules in this framework are derived from sources outside the cited research. The following common design-advice categories are deliberately excluded because they are not grounded in the empirical findings reviewed:

- "Use a hero image" / "show real photography" — no cited source.
- "Add social proof" / "include logos of customers" — no cited source.
- "Pricing should be on the page" — no cited source.
- Specific copywriting patterns ("benefits not features," "agitate-solve") — no cited source.
- Specific section orders ("hero, social proof, features, testimonials, CTA") — no cited source.
- Brand-personality language ("be bold," "feel premium") — no cited source.

These may all be useful. They are not in this framework.
