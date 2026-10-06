# Opeyemi Precious — AI Video Creator Portfolio

Single-page portfolio for **Adewoye Opeyemi Precious, AI Video Creator**.
React + TypeScript + Tailwind CSS (v4) + Vite.

## Run & build

```powershell
npm install
npm run dev      # local preview at http://localhost:5173
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
```

No deployment is configured. Upload `dist/` to any static host when ready.

## Add your portrait

| Placement | File | Size hint |
|---|---|---|
| Hero (large, organic frame) | `public/portrait.jpg` | 880×1100 JPG, sRGB |
| About (smaller) | `public/portrait-about.jpg` | 720×900 JPG |
| Hero video card thumb | `public/showreel-poster.jpg` | 640×360 JPG |
| Hero showreel (optional) | `public/showreel.mp4` | H.264, no audio autoplay |

If a file is missing, a clearly labelled placeholder is shown automatically — no broken images.

> Do not commit someone else's photo. Only use your own portrait.

## Replace the hero video

1. Export a 15–30s silent-friendly showreel (`showreel.mp4`, under ~15 MB).
2. Put it at `public/showreel.mp4` + poster at `public/showreel-poster.jpg`.
3. The hero card currently scrolls to Selected Work. To play the showreel directly in the modal, point the first entry in `src/data/projects.ts` at `/showreel.mp4`.

## Add videos, thumbnails & descriptions

All projects live in **`src/data/projects.ts`** — one easy-to-edit file.

1. Put videos in `public/videos/` and posters in `public/thumbnails/`.
2. Copy an entry and fill in: `title`, `category`, `videoSrc`, `poster`, `description`, `goal`, `role`, `label`, `aspect`.
3. `videoSrc` accepts a local path (`/videos/my-ad.mp4`) or a YouTube / Vimeo / Google-Drive link (auto-converted to embed).
4. `aspect` must match the real video: `"16:9"` (landscape), `"9:16"` (vertical), `"1:1"` (square). Thumbnails keep that ratio; the modal plays the full ratio without stretching.
5. `label` stays honest: `"Personal project"`, `"Concept demo"`, or a real client name (with permission).

Videos load lazily — full files are only requested when a visitor opens the viewer.

## Add genuine testimonials

Edit **`src/data/testimonials.ts`** — paste the exact quote, name, and optional role/photo (with permission). The Testimonials section stays **hidden** while the list is empty. Never invent quotes.

## Contact & domain

- Contact details: **`src/data/site.ts`** (phone, email, WhatsApp, location).
- Service WhatsApp links: **`src/data/services.ts`** (prefilled per service, URL-encoded).
- Final domain: set `domain` in `src/data/site.ts`, then fill `og:url` in `index.html`.
- Sharing image: add `public/og-cover.jpg` (1200×630).

## Design notes

- Palette: white `#FFFFFF`, soft green `#F3F9EF`, mint `#B9DDA8`, gold `#B28A3E`, ink `#18221B`, muted `#59635B`.
- Headings: Sora; body: Inter; one handwritten accent (Caveat) for decoration only.
- Reduced-motion, keyboard (Esc / ← / →), focus states, and modal focus management are built in.
