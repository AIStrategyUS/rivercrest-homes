# TN Home Cash Offer

Marketing site for TN Home Cash Offer, a Rivercrest Homes LLC company that buys distressed and
urgent-sale houses directly from homeowners across Middle Tennessee. Built with
[Astro](https://astro.build) and shipped as static output — every page is a plain HTML file at
deploy time. 20 pages: home, how it works, compare, a situations hub + 10 detail pages (9 named +
a catch-all, all generated from one data file + one dynamic route), FAQ, about, contact, the two
legal pages, and 404. There is no dedicated service-areas page (cut per Nic); the six counties
served are named in the footer and the FAQ instead.

## Requirements

- Node.js `^18.17.1`, `^20.3.0`, or `>=21.0.0` (matches Astro 4.16's supported range)
- npm `>=9.6.5`

## Install & run

```bash
npm install
npm run dev      # http://localhost:4321, hot reload
npm run build    # outputs dist/
npm run preview  # serve the build locally to sanity-check before deploying
```

## Deploying (Cloudflare Pages)

- **Build command:** `npm run build`
- **Output directory:** `dist`
- No environment variables needed — the Turnstile site key and Worker URL are hardcoded
  client-side (see `src/components/LeadForm.astro`), not build-time secrets.
- Add the custom domain `tnhomecashoffer.com` via Cloudflare's own dashboard/DNS. The site
  previously lived on raw GitHub Pages (a `CNAME` file); that has no effect on Cloudflare Pages
  and can be left out.

## Fixed integration contract — do not change without checking with Nic

`src/components/LeadForm.astro` is the single reusable form used on Home, Contact, and every
situation page. It is wired to **live infrastructure that predates this rebuild**:

- POSTs (`mode: 'no-cors'`) to `https://rivercrest-property-lead-form.aistrategyus.workers.dev`
- Payload: `{ submitted_at, full_name, phone, email, property_address, my_situation, cf_token }`
- Cloudflare Turnstile site key: `0x4AAAAAADPq_rIY9oa9jRcC`
- The situation dropdown has exactly 7 option strings (see the component) — situation pages with
  no matching option pre-select the closest existing one via the `presetSituation` prop rather
  than inventing a new option.
- The Meta (Facebook) Pixel snippet (id `1471340857812582`) is injected unconditionally into
  every page via `src/layouts/Layout.astro`.
- Site chrome (header/footer/Contact page) shows exactly one phone number: **629-343-0888**
  (call or text, monitored). A different number, 629-288-6593, is used solely inside the Terms of
  Service's SMS opt-out text — see below.

Changing any of the above breaks live lead capture or an existing integration. If a real change
is needed, confirm with Nic first.

## Legal pages

`src/pages/privacy-policy/` and `src/pages/terms-of-service/` preserve the previous site's legal
wording **verbatim** — see the comment at the top of each file. The **one** authorized exception:
the Terms of Service's SMS opt-out number was updated from `(208) 441-4004` to `629-288-6593`
(both the STOP and HELP mentions in Section 6) at Nic's explicit request — a factual correction,
not a rewording. No other sentence in either legal page has been changed. If you need to touch
either file again, diff against the source HTML at
`website/GitHub Backup/extracted/rivercrest-homes-main/{privacy-policy,terms-of-service}/index.html`
in the parent repo before publishing.

## Content collections — how to add real content later

See `src/data/README.md`. `testimonials/`, `projects/`, and `guides/` are empty on purpose (no
real reviews, closed deals, or long-form guides exist yet — see each collection's notes for
policy on how/when to add real entries). `situations.js` and `faq.js` are plain data modules
(not collections) since they're fully authored already.

## SEO

- `public/robots.txt` allows full crawling and points at the sitemap `@astrojs/sitemap` generates
  automatically (`sitemap-index.xml`).
- Every page carries a `LocalBusiness` JSON-LD block (`src/layouts/Layout.astro`) with the business
  name, phone, service-area counties, and the Nashville, TN locality already stated elsewhere on
  the site. No street address is included since none is public anywhere else, on purpose.
- `/faq/` and every situation page also carry `FAQPage` JSON-LD generated directly from the same
  data that renders the visible accordion/mini-FAQ, so it can't drift out of sync with what a
  visitor actually sees (a Google requirement for FAQ rich results).
- `/situations/` and every situation detail page carry `BreadcrumbList` JSON-LD.
- Heading hierarchy is one `h1` per page followed by `h2`s (no orphaned `h3`s skipping a level).
- Titles/descriptions across Home, the Situations hub, and the major-repairs situation page
  explicitly use "distressed" alongside the existing "any condition" / "sell fast" language, to
  target that specific search intent without keyword-stuffing.

## Logo and brand assets

The TN Home Cash Offer logo (supplied by Nic) is used in the header, the footer, the favicon set,
the link-preview (Open Graph / Twitter) image, and the `LocalBusiness` structured data. It is
navy + green on white, so the header is white (it would disappear on the old dark header) and the
footer, which stays dark, shows it on a white tile.

All files live in `public/images/` (plus `public/favicon.ico`), generated from Nic's original
artwork with the circular border removed (artwork only, nothing redrawn):

- `logo.png` (512px) — structured data and general use
- `logo-192.png` — header and footer (small file, loads fast)
- `og-image.png` (1200x630, logo centered on white) — what shows when a link is shared
- `favicon.ico`, `favicon-32.png`, `favicon-192.png`, `apple-touch-icon.png`

The original file is kept locally (not in this public repo) at
`website/Brand/tn-home-cash-offer-logo-original.webp` in the parent workspace. If the logo ever
changes, regenerate these from the new original; the ring-removal step clips at radius 600px of
the 1254px original (artwork ends at ~594px, the ring starts at ~605px).

Social networks cache link previews, so a link that was already shared before the logo went up
may keep showing the old preview until the platform re-scrapes it (Facebook's Sharing Debugger
forces this).

## Known simplifications versus the original redesign plan

- The 6 individual county pages, and the combined `/service-areas/` page that replaced them, were
  both cut per Nic. The 6 counties are named as plain text in the footer and in one FAQ answer,
  not as a dedicated page.
- Any Tennessee-specific legal/timeline claim (foreclosure, tax sale) was deliberately written
  generically so nothing needs attorney/title-company sign-off before launch, per Nic.
- The process on `/how-it-works/` and the situation pages deliberately avoids "Day N" style
  timelines, per Nic, since we don't want to promise a specific speed for any individual step.
