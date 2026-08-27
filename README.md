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

**The production domain is currently parked, not pointed at this app.**
`https://planocommercialroofing.com/` redirects to a GoDaddy "domain for
sale" landing page — confirmed by hand, not assumed. A `.vercel/repo.json`
here does link a real Vercel project (`prj_pcrVwKcH0x9aNBLJAuEqIxUhdJYi`),
but nothing was pushed or deployed as part of this pass; DNS/domain
ownership is outside what this session touched. Verify domain status before
assuming a push to `main` would go live.

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

### Legal-claims cleanup

Per explicit instruction not to make "crazy legal claims," several
pre-existing claims were removed or softened. These were already in the
codebase before this pass (not introduced by it) — flagging clearly since
this is a judgment call worth the business owner's review, not a fact this
session could verify either way:

- **Removed all "GAF Master Elite®" certification claims** (homepage,
  about, services, contact, and root `layout.tsx` metadata/OG/Twitter tags).
  This is a real, specific, trademarked manufacturer certification program —
  claiming it without confirming the business actually holds it is the
  highest-risk claim on the site. Replaced with generic, defensible language
  ("Manufacturer-Trained Crews").
- **Removed the "BBB Accredited A+", "NRCA Member", and "OSHA Certified"**
  specific third-party affiliation claims on `/about` — same reasoning,
  replaced with a generic "What Sets Us Apart" section (written estimates,
  safety-first job sites, manufacturer-trained crews, local response).
- **Removed fabricated named testimonials** (specific invented people +
  company names, e.g. "Michael Thompson, Thompson Property Management").
  Replaced with role-and-area-attributed quotes ("— Property Manager, Plano
  office park") that keep the trust signal without inventing a specific
  identifiable person or business.
- **Removed the fabricated "Leadership Team"** (four invented named
  individuals with specific fabricated tenure, e.g. "John Matthews,
  President & Founder, 25+ years") and the fabricated "Founded in 2004"
  origin story. Replaced with a role-based team description (Estimating,
  Field Supervision, Installation Crews, Client Communication) that
  describes what each function does without inventing people.
- **Removed the fabricated "Recent Projects"** case-study list (specific
  invented building names and square footages, e.g. "Plano Office Complex,
  TPO Installation, 45,000 sq ft"). Replaced with a "Property Types We
  Serve" section using generic categories (office/retail/warehouse/
  medical/distribution/shopping-plaza), each with a real photo — this is
  what actually generated most of the homepage's new imagery.
- **Added `/privacy`.** The contact form now genuinely collects and
  transmits name/company/email/phone/message, and there was no privacy
  policy anywhere on the site. Added one covering what's collected, what
  it's used for, and how to request deletion — same pattern as the privacy
  pages on the static leadgen sites in this fleet.
- Left in place as ordinary, low-risk marketing puffery: "Top Commercial
  Roofing Contractor," "Premier," 24/7 emergency service claims (an
  operational commitment, not a historical fact), and general "licensed,
  bonded, and insured" language.

**Not verified, and not something this session could verify:** whether the
business is actually licensed/bonded/insured, actually offers 24/7
emergency response, actually has any given number of years in business.
Those claims were already on the site and were left in a generic,
non-specific form rather than removed outright — worth confirming against
the real business before this is indexed further.

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
- [ ] Confirm the domain situation. `planocommercialroofing.com` currently
      redirects to a GoDaddy parked-domain sale page. This needs to be
      resolved (renewal, ownership transfer, DNS repoint to Vercel —
      whatever the real story is) before any of this work is visible to a
      real visitor.
- [ ] Push to `main` and deploy, once the domain situation above is
      resolved and someone has reviewed the legal-claims changes above.
      Nothing was pushed as part of this pass.
- [ ] Confirm the claims left in generic form (licensed/bonded/insured,
      24/7 emergency service) are actually true for this business.
- [ ] Real address/phone were already on the site (2929 Custer Rd, Plano TX
      75075 / (940) 305-2372) and were not changed by this pass — confirm
      these are accurate before launch if they weren't already verified.
