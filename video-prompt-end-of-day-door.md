# Video prompt — the end-of-day door

A production-grade prompt for an AI video tool (Runway Gen-4.5 / Veo 3.1 / Kling 3.0). Built for a continuously-looping landing-page background that sits behind white text overlay and has to land emotionally on grooming-shop owners on a 5-second-per-glance attention budget.

---

## The shot in one line

A 12-pound mini Goldendoodle named Pippa walks out the front door of a small grooming shop into late-afternoon light, tail wagging hard enough to wiggle her whole back end, where her owner is crouched on the sidewalk with arms open — captured one-handed on the groomer's iPhone from inside the shop, slightly back-lit, slightly shaky, looped on the moment of approach so the embrace never quite resolves.

That sentence is the soul. Everything below is how we make a model produce it.

---

## Layer 1 — Who is filming, why, and what that decides

This is the most important question and it cascades to every other decision.

**Filmed by the groomer herself.** One-handed iPhone capture. She just finished a long appointment, walked Pippa to the door on a leash, saw the customer crouch down with her arms out before the door even opened, and pulled out her phone because the moment was sweet and she wanted to remember it. Maybe she'll text it to the customer later. She is not making a video for a website — she is capturing a moment in her own life that she happens to be the architect of.

This single decision rules out:
- Tripod or gimbal (no — she's holding the phone in her right hand)
- Drone or crane (no — her phone is her phone, at eye level, hand-held)
- Multiple cameras or cuts (no — single take, one phone)
- Cinematic framing (no — she's not a cinematographer, she's a groomer with twenty seconds before her next appointment walks in)
- A second person filming her (no — she's the one filming, she's the one whose POV we're inside)

This single decision *also* prescribes:
- Slight breathing-induced shake
- Slight imperfect framing — the dog is not centered
- The groomer's other hand or arm sometimes intrudes into the bottom-left corner of the frame (she's still holding the leash she's about to release)
- Phone autofocus behavior — locks on the dog, may briefly hunt when the customer enters the frame from the side
- Vertical-rotated-to-horizontal aspect, or 16:9 if she remembered to rotate before recording

**The audience identifies through the camera.** Because the camera POV is the groomer's, every grooming-shop owner watching this video is *inside the shot*. They are not watching a story — they are remembering one. This is the emotional engine of the entire piece. Every other decision protects it.

---

## Layer 2 — The format

**iPhone 14 Pro or 15 Pro, rear main camera (1x lens), 4K 30fps.**

Why these specific specs:

- **iPhone (not Android, not a "professional camera").** Real groomers in 2026 capture moments on their iPhones. The phone itself is part of the truth of the shot. Android phones are equally common but iPhone is the median, and the iPhone color science (warm, slightly contrasty, slightly punchy reds) has become its own visual signature that registers as "real personal video" to a 2026 viewer.

- **Rear main camera, 1x lens.** Not the wide (would distort the door frame and read as fisheye-fake), not the telephoto (would compress the space unnaturally). The 1x lens is what's already up when you swipe to camera in a hurry.

- **4K 30fps, not 60fps and not 24fps.** 60fps reads as "trying to look professional" or like an Instagram action clip. 24fps reads as "trying to look cinematic." 30fps is what an iPhone defaults to and what real candid phone footage looks like. **The user said worse quality might be more real — and they're right that 24fps cinematic would be worse, but 4K30 is still the right "real-iPhone-footage" target.** The realism comes from how it's *held*, not from the resolution being low.

- **No filters, no Live Photos, no Cinematic Mode.** Cinematic Mode artificially blurs the background and reads as fake; the real backlight contrast already separates the subjects.

- **HEVC or H.264, sRGB color, default iPhone color science.** Do not request "log" or "ProRes" — that's pro-camera language that signals composed footage.

---

## Layer 3 — Where, when, and what the place looks like

**A small independent grooming shop in a strip of older two-story storefronts in suburban Atlanta or somewhere similar.** Late afternoon, around 5:15pm, mid-May. The kind of place where the front door is glass with a small bell on top and the address is hand-painted on the window in white script.

Specifics that the model needs to commit to:

- **Glass front door, partly open.** Wood frame around the glass, painted dark green or black. A small brass bell hangs from a leather strap on the inside top of the door — visible in the upper part of the frame.
- **Hand-painted shop hours visible on the inside of the glass** (the lettering reads correctly to the customer outside, which means it appears reversed from our interior camera angle — important detail; the model will probably get the text wrong, that's fine, just specify "reversed lettering visible on glass").
- **Wooden counter to the right of the door**, with a clipboard sitting on top. A leash hook on the wall above. Maybe a small dish of dog treats.
- **The corner of a metal grooming table visible at the bottom-left edge of the frame**, slightly out of focus.
- **Tile floor**, beige or terracotta — old-shop tile, not modern polished concrete.
- **A worn welcome mat just inside the door** that says something like "WIPE PAWS" or just "WELCOME" — partly visible, slightly faded.

Outside the door:
- **Sidewalk** with a few visible cracks, late spring weeds growing in one of them.
- **Street parking visible across the sidewalk** — a partial view of an older car (Subaru Outback, Honda CR-V, or a Ford Bronco — something a dog-mom would actually drive).
- **Late-afternoon light slanting in** at maybe 30-40 degrees off the door, warm but diffuse, not the obvious direct golden-hour rim.
- **Some out-of-focus greenery** in the background — a tree or planter.
- **Other foot traffic absent** — empty sidewalk except for the customer.

The shop should feel *small, slightly worn, real, loved*. Not new. Not corporate. Not Instagrammable. The aesthetic of a place where someone has been grooming dogs for fifteen years and this is just the room she works in.

---

## Layer 4 — The dog

**Pippa is a 12-pound mini Goldendoodle, around 3 years old, fresh from a haircut.** Specifics:

- **Coat:** Apricot/cream colored, freshly clipped to about 1.5 inches over the body, slightly longer on the head and ears. Slightly puffy from a recent blow-dry — the kind of puff that says "she just got groomed," not "she's a show dog."
- **Bandana:** A fresh small bandana tied around her neck, in a faded gingham pattern (red-and-white check or blue-and-white). This is the groomer's signature touch — every dog leaves with one. *This detail does emotional work* — it's the visible mark of "she has just been cared for."
- **Movement:** Walking, not running. Confident, calm. Her body language says she's been here many times. Tail held high and wagging vigorously — the wag rate is fast, maybe 2 cycles per second, big enough that her whole hindquarters move with each wag.
- **Eyes and face:** Looking forward at her owner, not at the camera. A slight open-mouth pant, tongue tip visible, what reads as a smile.
- **What she is NOT doing:** Not jumping, not barking, not turning to look at the groomer behind her. The shot is about her quiet excitement, not her hyperactivity.

**Why a Goldendoodle and not, say, a poodle:** Doodles are the median grooming-shop client in 2026. Most ICP groomers see at least three doodles a day. A poodle reads more "show," a shih tzu reads more "elderly client," a doodle reads "the customer who comes in monthly for a regular." This is the dog the ICP has the most muscle memory of.

---

## Layer 5 — The customer

**Female, mid-40s.** Crouched on the sidewalk just outside the open door, knees bent, weight on the balls of her feet, hands extended palms-up at chest height waiting for Pippa to come to her. She is *partially silhouetted* by the back-light — we can see her shape, the smile in her face, but not photo-clear features.

Specifics:

- Wearing **dark wash jeans and a heather gray crew-neck sweater**, sleeves slightly pushed up. Comfortable shoes — sneakers or simple slip-ons, not heels.
- Hair in a low casual ponytail, light brown.
- Possibly wearing glasses (50% chance — gives her a slightly more recognizable silhouette).
- Mouth slightly open, mid-greeting — she's saying something to Pippa, but we can't hear what (and audio is muted anyway).

The customer is **not the focus of the shot** — Pippa is. The customer is the *destination*. She matters because Pippa is moving toward her.

What she is NOT:
- Holding a phone (no — phones in the shot kill the moment)
- Standing (no — she's at dog-eye level, which is the universal pet-mom greeting posture)
- Wearing anything aspirational or styled (no — she's a real person who came to pick up her dog after work)

---

## Layer 6 — The groomer (implied, partially visible)

The groomer is the camera. She's not in the frame. But two specific things from her body should appear:

- **Her left hand** appears at the bottom edge of the frame, holding the looped end of a leash. The leash extends into the frame, attached to Pippa's bandana — and partway through the clip, her hand opens and the leash slides off-screen, as Pippa starts walking toward the door. This is the *hand-off moment* — the literal handing back of the dog. Not narrated, not emphasized, just visible in the corner.
- **The cuff of her smock or apron** — navy blue or dark green canvas, sleeve rolled to the elbow, slightly damp from the workday — visible at the bottom-left edge of the frame, behind her hand.

Her face is not visible. Her body is not visible. The viewer *is* her.

---

## Layer 7 — Light

**Backlit, by a wide margin.** This is the visual signature of the shot.

- The interior of the shop is **2-3 stops underexposed** relative to the doorway — dark, warm, almost amber from the shop's interior incandescent or warm-LED lighting (not fluorescent — fluorescent would read as a vet's office, not a small shop).
- The **doorway is a bright rectangle** of late-afternoon outdoor light, pushing into the dark interior. The dog is partially silhouetted as she crosses the threshold — face still readable but her edges are rim-lit by the outdoor light hitting the back of her head and shoulders.
- The **outdoor light is warm but diffuse** — late afternoon, maybe 5:15pm in May, sun at a low angle but not direct through the door (that would blow out the highlights and look fake). Probably the sun is just to the right of the door frame, hitting the sidewalk at an angle.
- **Slight lens flare may appear** if the model adds it — a single soft warm glow on the right edge of the door frame is acceptable; multi-element anamorphic flares are not. Real iPhone glass flares are messy and asymmetric, not stylized.

This contrast between dark-interior and bright-doorway is the *entire emotional architecture* of the shot. The dog is leaving the place where she was cared for and walking into the world. The viewer (who is the groomer) is staying behind in the dark room and watching her go. That is the feeling. The light does that work.

---

## Layer 8 — Color science

**Default iPhone HEVC color, slightly warm.** Specifically:

- **Skin tones (the customer's hands):** natural warm, not over-saturated.
- **Pippa's coat:** the apricot reads as buttery warm against the gray sidewalk — let it be a bit punchy, the iPhone defaults push warm-yellows.
- **Interior shadows:** slightly green-amber, the natural cast of a warm interior bulb.
- **Sidewalk concrete:** cool blue-gray, contrasting with the warm interior. This warm-cool split across the door threshold is the second visual signature.
- **No teal-and-orange Hollywood grade.** No cinematic LUT. No Instagram filter. The viewer should think "this is a real video on someone's phone," not "this is a graded brand asset."

Reference: **default iPhone 14/15 Pro color in HEVC mode**, no editing, no filters applied.

---

## Layer 9 — Motion and the loop

This shot is **continuously looping behind text on a website**. That changes the design constraints.

**The shot is 10-12 seconds long.** Long enough to establish the moment, short enough that the loop point isn't obvious.

**The loop point is invisible because the moment never resolves.** Specifically:

- Frame 1 starts with **Pippa already mid-stride toward the door**, the leash visible in the groomer's hand, the customer already crouched outside.
- The dog walks **steadily toward the door, through the threshold, onto the sidewalk**, tail wagging the whole time.
- The customer's hands stay extended, palms open.
- The clip ends **just before Pippa reaches the customer** — her front paws are an inch from the customer's hands, but contact never happens in-frame.
- The video then crossfades over **0.5 seconds back to frame 1** (Pippa mid-stride inside the shop again).

Because the viewer never sees the moment of contact, and never sees Pippa actually *reach* her destination, the loop is invisible. The eye reads the wag and the steady forward motion as continuous. The brain registers "she is walking out, she is excited, she is about to be greeted" — and then the moment resets without the viewer noticing.

This is the **same loop trick** Apple uses on the iPhone 16 page when they show you a phone rotating: the rotation never quite completes, so the loop is hidden in a moment of suspended motion.

**No slow motion.** Real time. The wag is fast, the walk is steady, the customer's reach is patient. Slow motion would make the moment feel staged. Real time keeps it honest.

---

## Layer 10 — Sound (what to do with it)

If your model generates audio, request the following ambient mix:

- **Distant HVAC or shop fan hum** in the background — the steady mechanical sound of a working back room.
- **The bell on the door dings softly** as the door opens (one ding, near the start of the loop).
- **Pippa's nails on the tile floor** — a soft click-click-click pattern as she walks. This is the sound the groomer hears every day and it's deeply familiar.
- **Slight outdoor ambient** as the door opens — distant car, faint breeze, a bird.
- **No music.** No voiceover. No dialogue. The customer's mouth moves as if she's saying something, but we don't hear it.

**For the website itself: mute the final video.** A web background should be silent by default. The audio brief is for completeness if you ever cut a hero video for social media or a sales deck.

---

## The full prompt to paste

For Runway Gen-4.5 / Veo 3.1 / Kling 3.0:

> Handheld iPhone 15 Pro footage, 4K 30fps, rear main 1x lens, no filters, default iPhone color science, slight one-handed micro-shake throughout. The camera is held in the right hand of a grooming-shop owner standing inside her small independent grooming shop in late-afternoon light, around 5:15pm in mid-May.
>
> The camera is pointed forward toward the partially-open glass front door of the shop. The interior of the shop is 2-3 stops underexposed relative to the bright outdoor doorway — warm amber light from interior incandescent bulbs, with a clear backlit silhouette where the door opens onto the sidewalk. A small brass bell hangs from a leather strap on the inside top of the door. The corner of a metal grooming table is slightly out of focus in the bottom-left edge of the frame. A worn welcome mat is just inside the door. Tile floor in faded terracotta. The shop feels small, lived-in, and real — not corporate, not new.
>
> A 12-pound mini Goldendoodle named Pippa, fresh from a haircut, apricot/cream colored coat clipped to about 1.5 inches and slightly puffy from a recent blow-dry, wearing a small faded red-and-white gingham bandana around her neck, walks calmly forward through the open door. She has been to this shop many times. Her tail is wagging vigorously — about two full cycles per second — with enough force that her whole hindquarters wiggle visibly with each wag. Her mouth is slightly open in a relaxed pant, tongue tip visible. She is looking forward, not at the camera.
>
> Just outside the door, on the sidewalk, a woman in her mid-40s is crouched at dog-eye level — dark wash jeans, heather gray crew-neck sweater with sleeves pushed up, casual sneakers, light brown hair in a low ponytail. She is partially silhouetted by the bright outdoor light, hands extended at chest height with palms open, waiting for Pippa. Her mouth is slightly open mid-greeting. She is the destination, not the subject.
>
> At the bottom-left edge of the frame: the groomer's left hand visible holding the looped end of a leash, sleeve of a navy blue canvas smock rolled to the elbow, slightly damp from the workday. Partway through the clip her hand opens and the leash slides out of frame as Pippa walks toward the door.
>
> Outdoor light is warm but diffuse late-afternoon May sunlight, sun positioned just to the right of the door frame at a low angle, warm-cool color split between the amber interior and cool blue-gray sidewalk. Slight asymmetric iPhone lens flare acceptable. NO cinematic golden-hour rim light, NO teal-and-orange grade, NO Instagram filter, NO Cinematic Mode background blur.
>
> Across the sidewalk, an older Subaru Outback or Honda CR-V is partially visible at the curb. Out-of-focus greenery — a small tree or planter — fills the right background. Empty sidewalk otherwise.
>
> Duration: 10 seconds, real-time playback, no slow motion, no cuts. The clip starts with Pippa already mid-stride toward the door. She walks steadily through the threshold and onto the sidewalk. The clip ends just before her front paws reach the customer's open hands — the contact never happens in-frame, the moment is left suspended. Designed for seamless 0.5-second crossfade loop back to the opening frame.
>
> Color: default iPhone HEVC, warm and slightly punchy reds, natural skin tones, no editing applied. Phone audio: distant HVAC hum, soft door bell ding near start, click-click-click of Pippa's nails on tile, faint outdoor ambient. No music, no dialogue audible. Final web version will be muted.

---

## Negative prompt

For Kling, Stable Video, or any model with a separate negative-prompt field:

> slow motion, slo-mo, cinematic, hollywood grade, teal and orange, anamorphic lens flare, drone shot, gimbal smoothness, dolly track, perfect framing, centered subject, golden hour rim light, oversaturated, instagram filter, vsco filter, cinematic mode blur, professional camera, ARRI, RED, ProRes, log color, music, voiceover, narrator, dramatic, epic, hyperreal, dreamlike, fantasy lighting, plastic skin, doll eyes, double pupils, six legs, extra ears, morphing background, melting tile, AI watermark, logo overlay, text on screen, slow zoom, push in, pull out, multiple cuts, jump cut, transition

---

## Loop mechanics — exactly how to make it loop in production

After the AI generates the 10-12 second clip, take it into a video editor (Premiere, DaVinci Resolve, CapCut, even iMovie) and:

1. **Trim to exactly 10 seconds.** Cut the first half-second and last half-second if either has artifacts.
2. **Add a 0.5-second crossfade** from the end of the clip back to the beginning.
3. **Export as a webm with VP9 codec OR an mp4 with H.265,** target file size under 2MB.
4. **Set a poster image** — pick the single frame where Pippa is mid-stride and the customer's silhouette is most readable. This is what shows in the 50ms first-impression window before the video loads.
5. **Implement on the page with autoplay, muted, loop, playsinline:**

```html
<video autoplay muted loop playsinline poster="poster.jpg">
  <source src="end-of-day-loop.webm" type="video/webm">
  <source src="end-of-day-loop.mp4" type="video/mp4">
</video>
```

The `playsinline` attribute is critical for mobile Safari — without it, iOS will try to fullscreen the video on autoplay.

---

## The two failure modes to watch for

When you generate this prompt, two specific things will likely go wrong on early takes:

**Failure 1 — the dog turns to look at the camera.** AI models are trained on dog videos and dog videos almost always have the dog looking at the photographer. This breaks the moment because a dog looking at the camera reminds the viewer there *is* a camera. If this happens, regenerate with the explicit clause "Pippa never turns her head toward the camera" added at the top of the prompt.

**Failure 2 — the customer is too clearly lit.** The model will try to "fix" the silhouette and bring detail to the customer's face. Resist this. The silhouette is the point. If the customer's face is too readable, regenerate with "the customer is fully silhouetted by the outdoor light, only her shape and posture are visible, her face is in shadow."

Three takes from the model is normal. Five is not unusual. Pick the one where the dog's tail is wagging hardest and the silhouette is most readable. Everything else is recoverable in the grade.

---

## Why this shot will land harder than the window shot

The window shot worked emotionally for *consumers* — pet owners projecting joy onto their own dog. This shot works emotionally for *operators* — grooming-shop owners remembering the moment that justifies their entire day.

The window shot's emotional engine was projection. This shot's emotional engine is *recognition*. Recognition is stronger because it skips a translation step — the viewer doesn't have to imagine themselves into the moment, they already lived it last Tuesday.

The other reason this shot is stronger: the technical lift on the AI tool is lower. There is no extreme physics (no wind in fur, no high-speed motion). There is no specific setting that can morph mid-clip (no road bumps, no passing scenery). The shot is a single confined space, two characters, one direction of motion. AI models handle this much better than they handle anything that involves environmental motion.

Generate it, get a take you like, and the same prompt will produce 80% as good a take next time you need a variation. That isn't true of the window shot.
