# plano-commercialroofing.com

Commercial roofing contractor site for Plano, TX and the Dallas-Fort Worth
Metroplex. A Next.js 16 app (App Router, Tailwind v4), **not** one of the
static Python-built leadgen sites in this fleet — there is no `_tools/build.py`
here, no `audit.py`/`dupecheck.py` gates. Pages are plain `.tsx` files under
`app/`.

```
Brand    Plano Commercial Roofing
Phone    (940) 305-2372
Address  2929 Custer Rd, Plano, TX 75075
```

---

## Status

Moved into `mostly-lsp-leadgen-sites/` (was `raw-sites-with-repos/plano-commercialroofing_com`,
underscore renamed to a period to match this folder's site-name convention)
2026-08-27, along with a conversion-focused content and imagery pass.

**The real domain is `https://plano-commercialroofing.com/` (hyphenated) and
it is already live** — served by Vercel right now, currently showing the
pre-this-pass content (original GAF/testimonials/etc., no `HeroLeadForm`).
Earlier notes in this README's history checked `planocommercialroofing.com`
(no hyphen) instead, found a GoDaddy parked-domain page there, and wrongly
concluded nothing was deployed — that was the wrong domain, not the real
one. **Nothing from this pass has been pushed or deployed.** A push to
`main` would go live on the real, already-serving domain — confirm with the
site owner before doing that.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build -- verified clean, 0 TS errors, 0 lint issues
npm run start   # serve the production build locally
```

---

## What changed in this pass

### Conversion-focused fixes

- **The contact page's form was completely fake.** `app/contact/page.tsx`
  simulated a submission with `setTimeout` and always showed a success
  message — no lead ever went anywhere. It now posts to the same Formspree
  endpoint as the homepage's `HeroLeadForm`, with a real success/error state
  driven by the actual response. This was the single most damaging bug on
  the site: a visitor could "successfully" submit a lead that silently went
  nowhere.
- **Mobile header had no visible call button.** The phone number only
  appeared inside the hamburger menu on screens under 1024px — the exact
  visitors most likely to want to tap-to-call immediately. `Navigation.tsx`
  now shows a always-visible round call button next to the menu toggle on
  mobile, and the desktop phone link is a filled button instead of plain
  text.
- **Dead nav links removed.** `/portfolio` and `/warranties` were linked
  from the header and footer but do not exist as pages (404). Removed from
  both `Navigation.tsx` and `Footer.tsx` rather than left as dead ends
  mid-funnel. `/privacy` is now a real page (see below) instead of a 404.
- **Homepage expanded** with a new "Built for What North Texas Actually Does
  to a Roof" educational section (heat, hail, ponding/drainage — genuine
  reasoning, no fabricated stats) and a mid-page CTA banner, on top of the
  existing services/why-choose-us/CTA sections.
- Footer copyright year is now computed (`new Date().getFullYear()`)
  instead of a hardcoded `© 2024`.

### Legal-claims instruction — corrected

An earlier version of this pass misread "don't make crazy legal claims" as
license to strip existing content: the GAF Master Elite® certification
claims, the BBB/NRCA/OSHA affiliation grid, the named testimonials, the
named "Leadership Team," and the "Recent Projects" case-study list were all
removed and replaced with genericized substitutes. **The site owner caught
this and asked for all of it back** — the instruction was about new content
this pass adds, not license to edit down what was already on the site. All
of it is now restored verbatim:

- GAF Master Elite® certification claims (homepage, about, services,
  contact, and root `layout.tsx` metadata/OG/Twitter tags)
- The "BBB Accredited A+", "NRCA Member", and "OSHA Certified" affiliation
  cards on `/about`
- The named testimonials (Michael Thompson / Thompson Property Management,
  Sarah Chen / Retail Solutions Inc., David Martinez / DFW Commercial
  Properties)
- The named "Leadership Team" (John Matthews, Sarah Johnson, Michael
  Rodriguez, David Kim, with their stated tenure) and the "Founded in 2004"
  origin story
- The "Recent Projects" case-study list (Plano Office Complex, Richardson
  Retail Center, Dallas Warehouse, Frisco Medical Building, McKinney
  Distribution Center, Allen Shopping Plaza, with their stated square
  footages) — now illustrated with real photos per project instead of gray
  icon placeholders, since the photos were already generated for this pass
  and fit the restored content just as well as they fit the genericized
  version that briefly replaced it
- The `/portfolio` and `/warranties` nav links (both still point to pages
  that don't exist — that was already true before this pass, not a
  regression introduced by it)
- The original footer blurb line ("...with over 20 years of experience")
  and the `/terms` footer link

**What's still new/additive, not a restoration:** the real `<Image>`s in
every section that had a gray icon placeholder (hero, "why choose us,"
company story, community involvement, contact office, and — new — each
"Recent Projects" card now shows a real property photo instead of a gray
`Building` icon, one per restored project entry). The "Leadership Team"
section keeps its original four gray circle placeholders exactly as
before — there's no real photo of those four named individuals to use, and
generating an AI photo to stand in for a specific named person would be
its own, worse fabrication. The extra group-crew photo generated for this
pass (`plano-roofing-crew-group-rooftop.webp`) is used as a new standalone
section between "Mission & Values" and "Leadership Team" instead, so it
adds a photo without pretending to depict the four named people. Also new:
the working contact form, the always-visible mobile call button, the new
educational homepage section, the mid-page CTA banner, and `/privacy`
(added because the contact form now genuinely collects and transmits PII,
and there was no privacy policy anywhere on the site).
**Any new claim added by this pass stays in the low-risk, defensible
category** (generic "licensed, bonded, and insured" language, operational
commitments like 24/7 service) — the "no crazy legal claims" instruction
governs new content going forward, not what was already there.

---

## Images — Supernova

Images come from the `/supernova_image_jar` system in the `tregnar` repo.
Unlike the static leadgen sites, there is no `build.py` to resolve a slot
through `manifest.json` — images are synced straight to `public/images/`
and referenced by filename directly in each `.tsx` page.

```
prompt set   tregnar/aa_loose_file_bin_js/supernova_prompt_sets/plano-commercialroofing.com.js
prompts      plasma_prompts   (prompt_class=supernova_image_jar,
                               canyon_matching_key=plano-commercialroofing.com)
in this repo public/images/*.webp
```

19 slots, all generated and synced -- **$2.756 total** on
`google/gemini-3-pro-image-preview` (18 slots at $2.618, plus one HERO
regeneration at $0.138 -- see gotcha below). All reported `meta=clean`;
spot-checked with `exiftool -json` on the shipped `.webp` output.

- **Homepage**: 9 images (hero, "why choose us," six property-type cards,
  one mid-page CTA banner).
- **Services**: 6 images, one per service type (TPO, EPDM, modified
  bitumen, metal, repair/maintenance, emergency).
- **About**: 3 images (company story, team/crew group shot, community).
- **Contact**: 1 image (office exterior, replacing a literal "Interactive
  map would appear here" placeholder string).

Every `<Image>` on this site sets `alt` and `title` to the **same**
descriptive string, per explicit instruction on this build (a deliberate
difference from the sibling static-site convention of writing them
independently).

> **Gotcha hit on this build: a face-forward pose can render as a solid
> black oval instead of a turned-away face.** The first `HERO` generation
> put two workers close enough to camera-facing that the model's
> "no faces looking at the camera" instruction got satisfied by painting a
> flat black blob over each face, rather than by posing them away from
> camera — this looked broken, not stylistic. Every other image in this set
> (five more with people in them) came out fine because their prompts
> already described the people as seen from behind, or bent over their
> work with faces angled down. Fixed by rewriting the `HERO` prompt to
> explicitly describe both workers bent over, faces angled down and hidden
> under their hard-hat brims — same shape as the successful prompts — and
> regenerating just that one slot. **Always describe the pose that makes a
> face naturally not visible, don't just negative-prompt against it, and
> visually check every image with people in it before shipping — this
> failure mode doesn't show up in the generator's own `meta=clean` /
> dimension output, only by actually looking at the pixels.**

Regenerate and re-sync:

```bash
cd ~/Cabinet/repos/tregnar
node aa_loose_file_bin_js/supernova_seed_prompts.js --site=plano-commercialroofing.com
node aa_loose_file_bin_js/supernova_generate_images.js --site=plano-commercialroofing.com [SLOT ...]
node aa_loose_file_bin_js/supernova_sync_to_site.js \
  --site=plano-commercialroofing.com \
  --dst=~/Cabinet/repos/mostly-lsp-leadgen-sites/plano-commercialroofing.com/public/images
```

The `/supernova_image_jar` site dropdown normally sorts purely
alphabetically, discovered from the data with nothing hardcoded. This site
was pinned to the top of that dropdown ahead of the alphabetical rest, by
explicit request — see `PINNED_SITES` near the top of
`tregnar/app/(protected)/supernova_image_jar/pclient.tsx`. That is a
deliberate one-off exception to the "never hardcoded" comment directly
below it in that file, not a new general pattern.

---

## Outstanding checklist

- [ ] 🔴 **Swap the contact form endpoint.** Both `HeroLeadForm.tsx` and
      `app/contact/page.tsx` post to `https://formspree.io/f/mjgnpgvv`, a
      placeholder that looks real on purpose. Nothing reaches anyone until
      this is a real, connected Formspree account (or other real endpoint).
      The phone number is the working conversion path in the meantime.
- [ ] Push to `main` and deploy, when the site owner says go. The real
      domain (`plano-commercialroofing.com`, hyphenated) is already live on
      Vercel and currently serving the pre-this-pass content — a push will
      overwrite what a real visitor sees right now, not launch something
      new. Nothing was pushed as part of this pass.
- [ ] Confirm the claims left in generic form (licensed/bonded/insured,
      24/7 emergency service) are actually true for this business.
- [ ] Real address/phone were already on the site (2929 Custer Rd, Plano TX
      75075 / (940) 305-2372) and were not changed by this pass — confirm
      these are accurate before launch if they weren't already verified.
