# PT Aegis Teknologi Nusantara — Company Profile (Mockup)

> **Technology-Enabled MRO, Reliability, and Asset Monitoring**
> *From Research to Real Solutions*

An interactive, presentation-ready company profile built as a **zero-dependency
static site**: open `index.html` in a browser and everything works. No build
step, no framework, no runtime Node.

---

## Running it

**Directly**
```bash
# just open the file
start index.html          # Windows
open  index.html          # macOS
```

**Via a local web server** (recommended — avoids any `file://` restrictions)
```bash
python -m http.server 8000
# then http://127.0.0.1:8000
```

**Deploying to Vercel / Netlify / any static host**
Framework preset **Other**, root directory `.`, no build command, output `.`.

---

## File layout

| File | Role | Size |
|:--|:--|--:|
| `index.html` | All markup, all 9 views | ~186 KB |
| `styles.css` | Design tokens, base type, primitives, header, footer, **utility shim** | ~66 KB |
| `styles-app.css` | Page sections (hero → contact), sub-pages | ~42 KB |
| `styles-lab.css` | The interactive `/lab` view | ~25 KB |
| `enhance.js` | Carousel, scroll reveal, service figure | ~13 KB |
| `app.js` | Application logic — **unchanged from the previous build** | ~88 KB |
| `assets/` | Brand assets and photography | ~1.3 MB |

### Why three stylesheets

They load in cascade order and are deliberately layered:

1. **`styles.css`** owns the token contract. Every colour, space, radius,
   duration and type step is declared here once.
2. **`styles-app.css`** composes those tokens into sections.
3. **`styles-lab.css`** is scoped to one route. The ship blueprint, the
   simulator trace and the calculator bars are intricate, known-good code;
   keeping them in their own layer means editing a marketing section can never
   disturb them.

### The utility shim

The previous build loaded the **Tailwind Play CDN**, which compiled CSS in the
browser at runtime — roughly 380 KB of parser shipped to every visitor, with a
render-blocking compile on each load.

`app.js` injects markup carrying Tailwind class names and toggles a few of them
at runtime, so those names are a real contract. Section 13 of `styles.css`
restates every class the page and `app.js` actually use as ordinary static CSS.
The CDN is gone; the contract is intact.

---

## Architecture notes

### The router contract

`app.js` is an SPA with hash routing. It shows and hides views by writing
**inline `display`** on every element carrying the `page-view` class:

```js
document.querySelectorAll(".page-view").forEach(el => { el.style.display = "none"; });
document.getElementById(targetViewId).style.display = "block";
```

Three consequences, all load-bearing:

- Every top-level view **must** keep `class="page-view"`, and its `id`.
- Display is forced to `block`, never `flex` or `grid`. Any view needing a flex
  layout gets it from an inner wrapper.
- `#header-drawer` detects its open state by reading
  `drawer.style.display === "block"`, so that element must start as
  `style="display: none;"` and must never express state via a class.

### Three constraints `app.js` imposes on the CSS

These are not stylistic choices; violating them breaks behaviour.

1. **Views are toggled by inline `display`.** `app.js` sets
   `el.style.display = "block"` on the active `.page-view`. Inline styles
   outrank class rules, so a view whose layout depends on `display: grid` or
   `flex` must get that from an inner wrapper.

2. **Any element whose spacing `app.js` might reset must not rely on a `gap`
   inside the switched element.** The hero instrument panel is the live
   example: `app.js` writes `display: block` on it when switching tabs, which
   discards a `grid` + `gap` layout and collapses the rows together *after the
   first click*. The row spacing therefore lives on the children's own margins,
   which survive any `display` value. If you add rows there, keep using margins.

3. **Tab state must be expressed as classes, never inline styles.** `app.js`
   switches the hero tabs by adding and removing four literal class names. The
   initial state is carried by those same classes in the markup. Pinning it in
   a `style` attribute would freeze the tabs permanently, because the inline
   declaration would outrank every class toggle.

### `enhance.js`

Adds what the original build lacked, without touching `app.js`:

- **Scroll reveal.** In the previous build all eight `.reveal` elements were
  hardcoded `is-visible`, so nothing ever animated. Real `IntersectionObserver`
  now reveals them, with anything above the fold shown immediately on load.
- **Portfolio carousel.** Five slides with prev/next, dots, thumbnails, a live
  counter, keyboard arrows, touch swipe, and autoplay that pauses on hover,
  focus, tab-hidden and off-screen. Under `prefers-reduced-motion` it never
  autoplays. Every control is a real `<button>` with an `aria-label`.
- **Service figure.** `app.js` swaps the service panel's text; `enhance.js`
  mirrors that onto the panel photograph with a caption per service.

### Design system

Tokens live in `:root` in `styles.css`. Highlights:

```css
--navy-700: #002454;   /* brand primary, from the client's own logo */
--teal-600: #00788f;   /* brand accent */
--cyan-400: #29a0b5;   /* accent on dark */
--r: 4px;              /* near-square: technical, not friendly */
--fs-mega … --fs-2xs;  /* one type scale, fluid via clamp() */
```

Type is **Fraunces** for display and **IBM Plex Sans / Mono** for body and
figures. The mono face is used where the content is genuinely data — ISO codes,
asset counts, measurements — not as decoration.

Every colour role is theme-aware. The dark theme overrides the same variables,
so no component needs a dark-specific rule.

---

## Content integrity

This is a mockup for a real company, so the content rules were strict:

- **Nothing invented.** Every company fact comes from the client's own
  company-profile document. Where the source had no data — testimonials,
  project references, client logos — the section either omits it or carries a
  visible placeholder notice.
- **Standard statuses are stated honestly.** The standards register
  distinguishes *metodologi*, *kompetensi personel* and *target pengembangan*.
  It does not imply certification the company does not hold.
- **Statistics are counts of real things** (5 service lines, 7 values, 10
  standards, 13 KBLI codes), not performance claims.
- **The calculator is labelled an estimate.** Its own disclaimer says the
  figures are engineering benchmarks, not a guarantee.
- **Photography is the client's own.** All plates are cut from the
  `COMPANY PROFILE` cover in `_source/`. No stock imagery was introduced. See
  `assets/MANIFEST.md` for the provenance and resolution limits of each image —
  several are low-resolution crops and are used at small sizes for that reason.

---

## Measured results

Every number below was produced by running the page in Chrome and reading
computed styles, geometry or pixels — not by inspecting the source.

| Check | Result | How |
|:--|:--|:--|
| Console errors | **0** | 9 routes × 4 viewports, plus 5 routes × 2 more |
| Failed requests | **0** | 9 routes × 4 viewports |
| Horizontal overflow | **0** | all 6 widths, 390 → 1920 |
| Tap targets under 32 px | **0** | 390 px viewport |
| Functional assertions | **73/73** | `_ops/shot/redesign-functional.mjs` |
| Fix-regression guards | **15/15** | `_ops/shot/verify-fix-guards.mjs` |
| Accessibility assertions | **15/15** | `_ops/shot/redesign-a11y.mjs` |
| Contrast, light + dark | **54/54 AA** | computed `color` vs resolved background |
| Blueprint hotspots grow in place | **0.0 px drift, 1.30×** | `_ops/shot/verify-hotspot.mjs` |
| Hull renders visible + graded | **+28 / +14 lum** | `_ops/redesign/verify_hull2.py` |
| Opens from `file://` as documented | **identical to http://** | `_ops/shot/verify-file-protocol.mjs` |

Widths covered: **390, 768, 1024, 1280, 1440, 1920**. The 9-route sweep runs at
390/768/1280/1440; 1024 and 1920 are covered by a separate 5-route sweep
(`redesign-review.mjs` and case F of `verify-fix-guards.mjs` respectively).

Performance on the home route: `DOMContentLoaded` 367 ms, `load` 782 ms,
~1.37 MB transferred, one long task of 61 ms.

### Tests carry controls where a false pass was plausible

Two guards include a deliberately-broken control, because a test that cannot
fail is not evidence:

- **Hotspot geometry.** Neutralising the fix with the original
  `transform-box: view-box` reproduces a **48.3 px** displacement, confirming
  the measurement can detect the defect it is guarding against.
- **Hull gradient.** Forcing a flat fill makes the same sampling report
  **0.0 lum** difference, confirming it distinguishes a gradient from a block.

Keyboard support: the skip link is the first tab stop, every control has a
visible focus ring, the service tablist implements roving `tabindex` with
arrow-key navigation, and the carousel responds to arrow keys.

---

## Known limitations

0. **`assets/motif-map.png` has changed colour twice.** Two different
   generation passes authored its ink differently — one pale ice `(205,230,242)`,
   one navy `(0,36,84)`. Only the *alpha channel* has been consistent, and it is
   the good part of the asset. `styles.css` therefore renders it with
   `mask-image` and takes the colour from CSS, so it is correct either way. **Do
   not convert that rule back to `background-image`** — a plain background
   paints the PNG's own RGB, and navy ink on the navy `.section--navy` band is
   invisible (measured: 0.00% of pixels differed from the panel). Guard G in
   `_ops/shot/verify-fix-guards.mjs` fails if this is reverted.

1. **Photography is low-resolution.** The source cover is 1055 × 1491 px. Six
   plates come from it; five have a native long side under 458 px and sit at the
   1.4× upscale cap (407→570, 335→469, 347→486, 308→431, 410→574), so they
   cannot reach 640 px without exceeding that cap. `photo-vessel.jpg` also
   carries roughly 42% translucent design haze from the source composite — a
   smaller 220×190 alternative exists if the haze is unacceptable. Replace with
   real facility photography before launch.
2. **The design is a mockup, not a deployment.** There is no `robots.txt`, no
   sitemap generator and no analytics.
3. **The contact form simulates submission** (`app.js` fakes it after 900 ms).
   Wire it to the backend before launch.
4. **Social links in the footer point at placeholder URLs.** Replace with the
   company's real accounts, or remove them.
5. **Testimonials are placeholders**, flagged as such on the page itself.
6. **`assets/favicon.svg` is intentionally unreferenced** — it is a generic
   shield placeholder for the CMS template, superseded here by the real brand
   mark at `assets/favicon.png`. Do not delete it; the backend seed script and
   the CMS template still use it.
7. **The blueprint panel stays dark in both themes** because the ship SVG
   carries literal `rgba()` strokes. It is a deliberate "instrument" treatment,
   not a theming bug.

---

## Verified routes

| Hash | View |
|:--|:--|
| `#/` | Home |
| `#/profil` | Company profile, identity, board, values, missions |
| `#/layanan` | All five service lines with their full scope lists |
| `#/lab` | Interactive lab: ship anatomy, failure simulator, savings calculator |
| `#/artikel` | Article index with search and category filters |
| `#/artikel/:slug` | Article detail |
| `#/legal/:slug` | Privacy policy / terms |
| `#/panel-aegis-7f3c` | Demo sign-in (no authentication) |
| anything else | 404 |

Anchors work in every documented form: `#contact`, `#/contact`, `#/#contact`.

<p align="center">
  <b>PT Aegis Teknologi Nusantara</b><br>
  <i>From Research to Real Solutions</i><br>
  © 2026 PT Aegis Teknologi Nusantara. Seluruh hak dilindungi undang-undang.
</p>
