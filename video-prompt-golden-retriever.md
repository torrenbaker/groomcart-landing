# Video prompt — golden retriever, head out the window

A production-grade prompt for an AI video tool (Sora 2, Veo 3, Runway Gen-4, Kling 2.0). Built specifically to avoid the visual tells that signal AI-generated footage and to land emotionally on the audience (grooming-shop owners) without reading as a "stock dog video."

---

## The shot in one line

Late-afternoon handheld iPhone shot, passenger seat of a 2010 Subaru Outback, golden retriever's head out the cracked-open back window on a quiet rural road outside Atlanta, ears blown back in the wind, eyes half-shut in pleasure, a hand-held shot that holds the moment for 8-10 seconds without cutting.

That sentence is the soul. Everything below is the spec to make a model produce it.

---

## Why most AI-video dog shots look fake (the negative target)

Before the positive prompt, the things to design *against*. Current generation models (as of mid-2026) produce dogs that read as AI for predictable reasons:

1. **Too smooth.** Real handheld footage has micro-jitter from the camera-holder's breathing, road bumps, and autofocus hunt. AI default smooths all of this away — the result floats.
2. **Wrong color science.** AI defaults to teal-and-orange Hollywood grade, or to over-saturated Instagram-app grade. Real iPhone footage in late-afternoon light is warmer, less saturated, and has a slight greenish cast in the shadows from the foliage.
3. **Cinematic light.** AI defaults to "golden hour with a backlit rim." Real Tuesday-afternoon-after-work light is more diffuse, lower contrast, and the sun is often behind clouds.
4. **Perfect framing.** AI centers the dog. Real handheld puts the dog slightly off-axis with the window frame intruding into the bottom-third of the shot.
5. **Plastic fur.** AI dogs have skin/fur that looks rendered. The fix is to specify a film-stock reference and to call out specific fur details that force the model to commit (slight matting around the collar, a single feather of hair sticking up, a wet patch under the chin from drool).
6. **Slo-mo bias.** AI defaults to slow-motion for "emotional" shots. Real dog-out-the-window footage runs at real speed — that's part of what makes it feel real.
7. **Wrong dog.** AI defaults to a show-quality dog with a perfect coat. Real dogs have a slightly graying muzzle, asymmetric ear set, a chipped tooth, a faded collar.
8. **No environmental specificity.** AI defaults to a generic "country road." A real shot has a specific road in a specific state, with specific power lines or specific fencing.

The prompt below is engineered to push the model away from each of these defaults.

---

## The full prompt to paste

This is the version optimized for Sora 2 / Veo 3 / Runway Gen-4. Modular adjustments below if you're using a different model.

> Late-afternoon handheld smartphone footage, shot on an iPhone 15 Pro at 4K 30fps with the standard 24mm equivalent lens, no stabilization, slight breathing-induced micro-shake throughout. The camera is held in the passenger seat of a 2010 Subaru Outback (Bayside Pearl, lightly dirty, faded gray cloth interior, a few yellow dog hairs on the dashboard, an iced coffee from a local shop in the cup holder), pointed back and slightly upward toward the rear passenger window which is rolled down about two-thirds of the way.
>
> A six-year-old golden retriever — medium-large female, slightly graying muzzle, classic golden coat that's a bit longer than show-clip length, faded red nylon collar with a small brass tag — has her head fully out the open window. Her ears are blown straight back by the wind, her eyes are squinted half-shut against the air, her mouth is slightly open with the tip of her tongue catching the breeze. There is a small wet spot under her chin from drool. The wind ruffles the longer feathering on her chest and the back of her neck. She is calm, content, in the moment — not performing for the camera.
>
> The car is moving at about 40 miles per hour on a two-lane rural road outside Atlanta, Georgia. The road has small texture irregularities so there are gentle, irregular bumps that show up as subtle camera movement and as slight up-down jostle in the dog's body. Outside the window, in the background: blurry late-spring trees in motion, occasional power lines, an old wooden fence, and at one point a green directional road sign passes (out of focus). The light is late afternoon, around 5:30pm in May, soft and warm but not the obvious "golden hour" rim-light look — diffuse and natural, with the sun somewhere over the camera's right shoulder, partly filtered by passing tree cover so the light on the dog flickers gently as the car moves.
>
> Color science: Kodak Portra 400 reference — warm but not orange, slightly green-yellow in the shadows, low contrast, mid-saturation. NOT teal-and-orange Hollywood grade. NOT high-saturation Instagram. Slight chromatic aberration on the high-contrast edges (window frame, dog's profile against bright sky) consistent with iPhone glass.
>
> Framing: dog's head in the right-center of the frame, the rear window frame and door panel visible in the bottom-left third of the shot, anchoring the composition in the car interior. The shot is NOT a portrait; it is a handheld documentary capture from inside the vehicle. Slight autofocus hunt at the start as the camera adjusts (one or two frames slightly soft, then locks).
>
> Duration: 8-10 seconds, no cuts, no slow motion, real-time playback. The dog does not turn to look at the camera. She glances forward once (changing the angle of her ear feathering for two beats) and then returns to her neutral wind-feeling pose. The shot ends without resolution — the moment simply continues past the cut.

---

## Negative prompt (paste into models that support it)

For Kling, Stable Video, or any model with a separate negative-prompt field:

> slow motion, slo-mo, cinematic, hollywood grade, teal and orange, lens flare, anamorphic, drone shot, gimbal smoothness, perfect framing, centered subject, golden hour rim light, oversaturated, instagram filter, perfect coat, show dog, glossy fur, plastic skin, doll eyes, double pupils, six legs, extra ears, morphing background, melting trees, AI watermark, hyperreal, surreal, dreamlike, fantasy lighting, music video aesthetic

---

## Variations to try if the first generation doesn't land

Run the prompt three times. AI video models are stochastic and the first output is rarely the best. If the first one feels off, try one of these surgical adjustments:

**Variation A — older format.** Replace "iPhone 15 Pro at 4K 30fps" with "Super 8 home movie footage from the late 1990s, 4:3 aspect ratio, slight film grain and gate weave, color slightly faded toward magenta." This pushes harder on the nostalgia-of-the-old-family-vacation feeling. Risk: feels period-piece if pushed too far.

**Variation B — closer to the dog.** Add "shallow depth of field, dog's head sharp, background dramatically blurred from the speed of the car." This trades documentary-feel for portrait-feel. Use only if the documentary version reads as too plain.

**Variation C — driver POV instead of passenger.** Replace passenger-seat framing with "shot from the driver's seat, glancing right toward the back passenger window, the side mirror visible at the top of the frame." This adds the implied human relationship — someone is driving, the dog is *theirs*. Stronger emotional hook but more complex composition.

**Variation D — second dog.** Add "a second smaller dog — a fluffy mixed-breed about 15 pounds, gray and white — sleeping on the back seat behind the golden, head on her paws, indifferent to the wind." This adds a second emotional beat: one dog living the moment, one dog ignoring it. Closer to the texture of an actual grooming-shop owner's life with multiple pets.

---

## Audio implications (if your model generates with audio)

Sora 2, Veo 3, and a few others now generate audio. If you're using one of these:

> Ambient sound only. Wind through the open window (medium intensity, not gusty). Faint road-noise hum from the tires on rural asphalt. Occasional rumble as the car passes over a small bump. No music. No speech. The car's old-school manual radio is off. At one point, halfway through, the sound of a turn signal click-click-click for two beats.

If your model doesn't generate audio, write the audio brief into your editor's notes — it'll guide you when adding sound design later.

---

## What to AVOID asking for, even if you think you want it

- **A title card or text overlay.** Generate the bare moment; add the white-text overlay in After Effects or Premiere afterward. AI models that try to render text in-frame produce gibberish.
- **The dog smiling at the camera.** Forces an unnatural beat that reads as commercial.
- **Multiple cuts within the 10 seconds.** A single uncut take is more honest. AI cuts are awkward.
- **A "GroomCart" branded element in-frame.** Same reason — branding goes on top in post.
- **A specific "story arc" within the clip.** The shot is a moment, not a narrative. Asking for "the dog turns and looks at the owner" introduces complexity the model will fumble.
- **Hyper-specific dog markings.** "White star on the chest, brown spot over left eye" — the model will get one or two of these wrong on each generation, and the inconsistency between takes will be obvious if you ever cut multiple shots together.

---

## Model-specific guidance

**Sora 2 (OpenAI).** Best for the documentary-realism target. Handles handheld micro-shake well. Tends to over-grade — paste the "Kodak Portra 400 reference" line twice in the prompt for emphasis.

**Veo 3 (Google).** Best for narrative coherence and audio. Strong handling of dogs specifically (Google's training set has a lot of pets). Tends toward cinematic framing — emphasize "documentary, not cinematic" twice.

**Runway Gen-4.** Most controllable via reference images. If you have an actual photo of a real golden retriever you'd like to use as the visual reference, Runway lets you upload it as a style anchor — this is the strongest defense against the "generic AI dog" tell.

**Kling 2.0.** Best for fluid animal motion. The wind-in-the-fur physics is the most realistic of the four. Weak on color science — apply your own grade after.

---

## What to do with the final clip

You'll want a 6-12 second loop that lives full-bleed under the white-text overlay we mocked in design J. To make it loop cleanly:

1. Generate at 10-12 seconds, then trim to 6-8.
2. Add a 0.5-1 second crossfade from the end back to the start in your editor. Most people won't notice the loop point if the dog's pose is similar at start and end.
3. Mute it. The page should be silent. Wind sound is for if-you-want, not default.
4. Compress to a small webm or mp4 (under 1.5MB) with a poster image (a single frame) for the first paint. The poster is what shows in the 50ms first-impression window — pick the frame where the dog's expression is calmest.

---

## A note on legality and authenticity

Using AI-generated video of a "real" dog is legal, but if the dog ever needs to look like a specific real dog (e.g., a pilot customer's actual pet), do not use AI — film the actual dog instead. AI-generated likenesses of identifiable individuals (human or animal) raise consent issues even when the individual doesn't yet exist in the model's training data, because the moment a real owner sees a near-match they will want the rights conversation.

For GroomCart's purposes, a generic golden retriever is fine. The moment you want to show "Sarah's dog Henley" in a video, that's a real-camera moment — and it's also a stronger trust signal than any AI generation could be.
