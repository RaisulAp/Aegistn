# Aegis — seeded image assets (MANIFEST)

Source client material: `_source/logo.jpeg` and `_extract/media/…`.
Produced for: **PT Aegis Teknologi Nusantara** — brand navy `#002454`, teal `#00788F`.
Staging folder for the seed script that imports these into the CMS media library.

Tooling: **Python 3.14.3**, **Pillow 12.3.0**.
No ImageMagick used. All PNGs saved with `optimize=True`; all JPEGs with
`progressive=True, optimize=True, subsampling=1`.

---

## Files produced

| # | File | Dimensions | Size | Format | What it is |
|---|------|-----------|------|--------|------------|
| 1 | `logo-transparent.png` | 1200 × 795 | 370.63 KB | PNG-32 (RGBA) | Full logo lockup — shield + wordmark + tagline — white background removed to real alpha. Primary logo for light backgrounds. |
| 2 | `logo-mark.png` | 512 × 512 | 146.63 KB | PNG-32 (RGBA) | Shield emblem only, on a square transparent canvas with balanced padding. For the compact/mobile header, social cards. |
| 3 | `favicon.png` | 256 × 256 | 57.43 KB | PNG-32 (RGBA) | Shield emblem only, transparent, tightly cropped with a 4 px safety margin. Favicon / PWA icon source. |
| 4 | `logo-dark.png` | 1200 × 795 | 334.97 KB | PNG-32 (RGBA) | Full lockup recoloured for **dark** backgrounds: navy parts → near-white, teal parts preserved and lifted. |
| 5 | `hero-bg.jpg` | 1920 × 1440 | 96.28 KB | JPEG (progressive, q82) | Optimised dark-navy abstract background from `image10.png`. Hero section background. |
| 6 | `photo-marine-vessel.jpg` | 210 × 218 | 11.71 KB | JPEG (progressive, q82) | Naval vessel at sea. Crop from `image1.png`, box `(26, 484, 236, 702)`. |
| 7 | `photo-port-logistics.jpg` | 232 × 148 | 8.30 KB | JPEG (progressive, q82) | Night port — cranes, container ship, water reflections. Crop from `image1.png`, box `(40, 766, 272, 914)`. |
| 8 | `photo-turbine-service.jpg` | 275 × 256 | 21.07 KB | JPEG (progressive, q82) | Technician servicing a turbine/engine assembly. Crop from `image1.png`, box `(525, 506, 800, 762)`. |
| 9 | `photo-cad-workstation.jpg` | 274 × 200 | 10.67 KB | JPEG (progressive, q82) | Engineer at a laptop with a bearing CAD render; AEGIS jacket logo visible. Crop from `image1.png`, box `(778, 292, 1052, 492)`. |
| 10 | `photo-digital-monitoring.jpg` | 190 × 210 | 9.43 KB | JPEG (progressive, q82) | Reliability dashboard on a tablet/screen with a hand pointing at it. Crop from `image1.png`, box `(500, 830, 690, 1040)`. |

Every file above is a **regular RGB or RGBA raster**. All crops are
**native-resolution — nothing was upscaled.**

On baked-in text, precisely:

* The two logo files and `hero-bg.jpg` carry no text other than the logo's own
  wordmark and tagline (`logo-transparent.png`, `logo-dark.png`).
* **No crop includes any of the cover page's headline/display typography** — that was
  an explicit constraint on every box, and it is why several boxes are smaller than
  the photo regions actually are.
* `photo-cad-workstation.jpg` deliberately includes the **AEGIS jacket logo** — it is
  the client's own brand on their own staff, and it is the strongest trust signal in
  the set.
* `photo-digital-monitoring.jpg` includes **small on-screen dashboard UI text** as part
  of the photograph (chart labels, axis ticks). That is the subject matter, not page
  design; it is legible only at very large display sizes and is not meant to be read.

---

## TASK 1 — alpha verification (`logo-transparent.png`)

Re-opened from disk and measured:

| Metric | Value |
|--------|-------|
| Mode | `RGBA` — alpha channel present: **yes** |
| Dimensions | 1200 × 795 (longest side = 1200 px) |
| Fully transparent (`alpha = 0`) | 741 284 px = **77.70 %** |
| Fully opaque (`alpha = 255`) | 139 850 px = **14.66 %** |
| Partial alpha (`0 < a < 255`) | 72 866 px = **7.64 %** — the antialiased rim |
| Mean alpha | 0.1884 |
| Alpha bounding box | (0, 0, 1200, 795) — trimmed, no excess padding |

**The mark is not eroded.** Ink area check at build time: source artwork inside the
trim box = 176 494 alpha-weighted px; after the ×1.0084 resize the expected ink is
179 472 px and the actual is 179 708 px = **+0.13 %** (Lanczos ringing, i.e. the mark
is if anything marginally fuller than the original, never thinner).

**How the white was removed (no naive global key).** The exterior background was
found by an **8-connected flood fill seeded from all four borders** across
near-white pixels (median border colour `rgb(254,254,254)`, tolerance 40 in RGB
distance). Because the fill spreads only through pixels reachable from the border, it
stops at the artwork, so **interior whites are preserved**. A flood-fill re-run on the
finished file confirms this:

* `alpha = 0` total: 741 284 px
* reachable from the border: 739 603 px → the true exterior background
* **enclosed** (`alpha = 0` but not reachable): **1 681 px = 0.176 %** — these are the
  real white gaps *inside* the mark (the shield's inner field between the silver
  chevron and the outer edge, letter counters). Verified visually at 5× against the
  source: the interior of the shield really is white in the original, so it is
  correctly transparent now rather than showing as a white block on a dark page.

The antialiased rim was **alpha-matted** rather than hard-cut: for each boundary pixel
the colour is projected onto the line from the background reference to the nearest
solid artwork colour, recovering a fractional alpha and re-colouring the pixel to that
solid artwork colour. That is what removes the white halo, and it is why 7.64 % of the
pixels carry partial alpha.

**Independent fidelity check.** The finished PNG was flattened onto white, scaled back
to the source's pixel grid and diffed against `logo.jpeg`:

| Metric | Value |
|--------|-------|
| Mean absolute error | **1.694 / 255 (0.66 %)** |
| P50 / P90 / P95 / P99 error | 1 / 3 / 5 / 14 |
| Pixels with error > 40 | 1 664 of 937 720 = 0.18 % |

The >40-error pixels sit almost entirely on the sharp glyph edges (y-band 760–920,
the wordmark/tagline), which is exactly where JPEG ringing and resampling differ. The
shield renders essentially identical to the source — the diff shows antialias outlines
only, no filled holes.

---

## TASK 2 — logo marks

| File | Canvas | Content bbox | Padding (L/T/R/B) | Notes |
|------|--------|--------------|-------------------|-------|
| `logo-mark.png` | 512 × 512 | (66, 31, 446, 480) = 380 × 449 | 66 / 31 / 66 / 32 | Shield scaled to 88 % of the canvas, centred. Horizontally symmetric padding. |
| `favicon.png` | 256 × 256 | (22, 4, 232, 252) = 210 × 248 | 22 / 4 / 24 / 4 | Tight 4 px margin top/bottom; the shield is taller than wide so left/right keep more space. |
| `logo-dark.png` | 1200 × 795 | (0, 0, 1200, 795) | 0 | Same geometry as `logo-transparent.png`, alpha channel byte-identical in coverage. |

**How `logo-dark.png` recolours.** Hue/saturation/value classification per pixel:
the navy family (low hue, dark) is mapped to near-white modulated by the pixel's own
value (`V' = 0.80 + 0.20·clamp(V/0.45)`), so the shield keeps its shading and the
lockup does not go flat. The teal family is hue-preserved but lifted
(`V' = 0.45 + 0.62·V`, chroma eased to 0.80× of original) so the teal reads clearly on
dark. Low-saturation bright pixels — the silver chevron and the white glyph
counters — are left untouched.

Pixel buckets: **navy → white 125 281**, **teal 69 081**, **kept as-is 18 354**.

Legibility check: the darkest surviving teal in the result is `rgb(32,124,159)`;
against the brand navy `#002454` that is a contrast ratio of **3.22 : 1**, which clears
WCAG AA for large text / graphical objects (≥ 3:1). Against `#111` and against white
it is higher still. Verified visually on white, brand navy, near-black and teal.

---

## TASK 3 — hero background (`hero-bg.jpg`)

`_extract/media/image10.png` is **1448 × 1086**. The long side was resized to 1920 px,
which is an **upscale of ×1.326** — there was no larger master available. LANCZOS was
used; the file is a smooth abstract so the upscale is visually clean, but it is a
genuine limitation and worth knowing if a sharper master ever appears.

| Setting | Value |
|---------|-------|
| Output size | 1920 × 1440 |
| JPEG quality | 82 |
| Progressive | yes |
| Chroma subsampling | 4:2:2 (`subsampling=1`) |
| Size | **96.28 KB** — budget was 250 KB |

### Luminance of the headline band

Measured on the **final saved JPEG**, over the region where a headline would sit —
**left 55 % × middle 45 %** = x `0…1056`, y `396…1044` (1056 × 648 px):

| Metric | Relative luminance (WCAG 2.x) |
|--------|------------------------------|
| Mean | **0.0201** |
| Median (P50) | 0.0123 |
| **95th percentile (P95)** | **0.0540** |
| P99 | 0.2392 |
| Max | 0.6484 |

Contrast of **white text** against that background:

| Reference point | Contrast vs white | Verdict |
|-----------------|-------------------|---------|
| Band mean | 1.05 / (0.0201 + 0.05) = **14.97 : 1** | passes AAA |
| Band P95 | 1.05 / (0.0540 + 0.05) = **10.10 : 1** | passes AAA (≥ 7:1) |
| Band P99 | 1.05 / (0.2392 + 0.05) = 3.63 : 1 | below AA |
| Single brightest pixel | 1.50 : 1 | below AA |

**Conclusion: no extra darkening overlay is required.** At the 95th percentile the
band gives 10.10 : 1, comfortably past AA (4.5 : 1) for ≥ 14 px text and past AAA. The
image already is dark navy; adding a scrim would only flatten it.

The one caveat is honest and narrow: **1.86 %** of pixels in the band (12 746 px,
clustered at x 0…415, y 406…1043 — the left 0–21.6 % of the width) are brighter than
4.5 : 1 allows. Those are the cyan accent stripe and the glowing diagonal lines. They
are narrow streaks, not fields, so no single text run sits on them; but if a headline
or a small-text element is placed hard against the left edge, it should carry a local
scrim or text-shadow. Everywhere else the band is 10 : 1 or better.

(For transparency about method: an earlier draft measured this band with a
gamma-encoded weighted average, which reported a misleadingly brighter
mean 0.115 / P95 0.231. The table above uses the correct WCAG 2.x linearised
relative luminance; that is the number to trust.)

---

## TASK 4 — photography crops

`image1.png` (1055 × 1491) is a **designed magazine cover**: photographs are placed
behind composited flat design shapes (a large white triangle top-left, a teal panel
bottom, magenta/navy wedges) and carry baked-in display text. Every crop here is
therefore inherently approximate.

**How the boxes were chosen (not by eye-guessing).** A design-overlay mask was built by
computing the local standard deviation of luminance over a 7 × 7 window: the
composited design shapes are mathematically flat (σ ≈ 0) whereas photographic areas
always retain texture, even in smooth sky or water. Flat-and-light pixels
(σ < 1.6 **and** luminance > 150) were then filtered to 8-connected components of
**≥ 2500 px**, which removes photographic cloud speckle while keeping the real design
shapes (4 components, 9.37 % of the page). The final crops were then required to
contain **zero** design-overlay pixels, and each boundary was additionally confirmed
visually at 3–5× zoom. Every box below was re-validated against the mask after saving.

| File | Source box on `image1.png` | Native crop | Saved size | Upscaled? | Overlay pixels in box |
|------|---------------------------|-------------|------------|-----------|-----------------------|
| `photo-marine-vessel.jpg` | `(26, 484, 236, 702)` | 210 × 218 | 210 × 218 | **no** | 0 |
| `photo-port-logistics.jpg` | `(40, 766, 272, 914)` | 232 × 148 | 232 × 148 | **no** | 0 |
| `photo-turbine-service.jpg` | `(525, 506, 800, 762)` | 275 × 256 | 275 × 256 | **no** | 0 |
| `photo-cad-workstation.jpg` | `(778, 292, 1052, 492)` | 274 × 200 | 274 × 200 | **no** | 0 |
| `photo-digital-monitoring.jpg` | `(500, 830, 690, 1040)` | 190 × 210 | 190 × 210 | **no** | 0 |

**All five were saved at native size, because every one is far below 1200 px on its
long side. Nothing was upscaled.** This is the single most important limitation in
this delivery: these crops are usable as **small cards, thumbnails, list images and
small feature tiles**, but they are **not** suitable for full-width hero/section
backgrounds or any placement wider than roughly 250–300 CSS px, where they would have
to be upscaled and would look soft.

### Crops deliberately NOT produced

| Region | Why not |
|--------|---------|
| **Helicopter in flight** (`image1.png`, around `(386, 392, 530, 456)`) | **Rejected.** The helicopter is small in frame (roughly 134 × 72 px of usable subject) and it is overflown by the white design triangle: the best overlay-free rectangle inside the region needs a minimum side of only 80 px and, even with loosened aspect limits, the largest clean area found was 99 × 83 px. At that size the aircraft is unreadable and the file would be unusable on a live site. Handing back a 99 px thumbnail labelled as a hero photo would be worse than not shipping it. |
| **`image2.png`, `image9.png`** (decorative inner-page templates) | Not usable as-is — they are page layouts, not photographs. |
| **`image3.png`** | A low-resolution duplicate of the logo; `logo-transparent.png` supersedes it. |
| **`image4.png` … `image8.png`** (notary deed, NIB, Menkumham decree, company stamp, NPWP tax card) | **Deliberately untouched.** These are government/legal identity documents. They were never opened, read, copied, processed or published, and they are absent from this folder by design. (Noted for the record and left alone: `image4.png`, `image7.png` and `image8.png` are actually WebP data behind a `.png` extension.) |

---

## Notes / caveats for whoever wires these up

1. **`logo-transparent.png` and `logo-dark.png` include the tagline**
   *"From Research to Real Solutions"* and are 3:2-ish wide lockups. Under ~240 px
   wide the tagline will not be legible — use `logo-mark.png` or a wordmark-only asset
   at small sizes.
2. **The white interior of the shield is genuinely transparent** (1 681 px). On a
   mid-tone background the shield will read as "hollow" between the chevron and the
   outer edge. That matches the source art; if a solid-backed badge is wanted, place
   the mark on a filled circle/rounded rect rather than expecting the PNG to carry one.
3. **`hero-bg.jpg` is an ×1.326 upscale** of a 1448 px source. Fine for a textured
   dark hero, not fine for a 4K/retina full-bleed that gets inspected closely.
4. **The left edge (0–21.6 % of width) of the hero band carries the bright cyan
   accents** (P99 3.63 : 1). Keep small text out of that strip or give it a scrim.
5. **Every crop is low resolution** (long side 148–275 px) and comes from a composed
   cover, so a careful eye can still find the seam of the design shapes just outside
   each box. Re-cuts are easy: the source boxes are in the table above.
6. No EXIF/metadata is present in any output (all freshly encoded by Pillow), so no
   client document metadata can leak through these files.
7. **Intended for `BE/app/static/seed/`** — this folder is staging only. The PNGs are
   all `compress_level=9, optimize=True`; re-saving them without those flags will
   roughly double their size.

---

## Integration status (checked against the existing backend)

`BE/seed_brand_assets.py` already exists and already expects **exactly these five
filenames**. Verified by re-running its own `ASSETS` tuple against the files on
disk (without touching the database):

| File | Role it is wired to | Result |
|------|--------------------|--------|
| `logo-transparent.png` | `branding.logo_media_id` + `company_info.logo_media_id` | imports, alt text 98/125 chars |
| `logo-dark.png` | `branding.logo_dark_media_id` | imports, alt text 54/125 |
| `logo-mark.png` | media library, role `logo_mark` | imports, alt text 55/125 |
| `favicon.png` | `branding.favicon_media_id` | imports, alt text 17/125 |
| `hero-bg.jpg` | `hero_section.background_media_id` | imports, alt text 59/125 |

All five pass the script's `preflight()` (alt text ≤ 125 chars) and its 5 MB size
guard, are readable by Pillow exactly as the script reads them
(`ImageOps.exif_transpose` → `.size`), and resolve to the expected MIME types.
**No changes to the seed script are needed — just run it.**

Two things the wiring implies, worth knowing:

* The seed script is **idempotent and non-destructive**: it matches by `filename`,
  and `_attach` only fills FK columns that are still empty. Re-running it after the
  client has chosen their own logo in the CMS will **not** overwrite them.
* Its own docstring says to **disable or delete the seed scripts before go-live** so
  nobody runs them after real content exists. That still applies.

**The five photo crops are not referenced by any script yet** — they have no consumer
at present. They are staged and ready for whichever content module wants them
(industries, services, highlights). Note that `_extract/media/image1.png` shows the
brand as *"AEGIS ENGINEERING"* on the staff jacket, whereas the client's registered
name is *"PT Aegis Teknologi Nusantara"* — worth a glance before
`photo-cad-workstation.jpg` is used prominently, since second-hand branding in a
stock-style image can read as an inconsistency.

---

## Staging-folder warning

`SEED_DIR` is `app/static/seed/`, and `main.py` mounts `/media` from
`MEDIA_ROOT = app/static/media` — so **`/media` does not serve `/media/seed/`**, and
this folder is not publicly reachable by that route. But `app/static/` sits inside the
application tree, so if any deployment step copies all of `app/static/` to a web root,
these staging files would become fetchable. They contain nothing sensitive (the
brand assets are meant to be public anyway), but this folder should be treated as
**build input, not web output**, and excluded from any static copy.

---

*Generated 2026-09-28 · Pillow 12.3.0 · Python 3.14.3*
