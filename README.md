# Las Chicas Cleaning — Edinburgh

Highly SEO-optimised static website for **Las Chicas Cleaning**, built with [Astro](https://astro.build), React islands, and Tailwind CSS. Deployed to **GitHub Pages** with optional custom domain support.

## Quick start

```bash
npm install
cp .env.example .env   # add your Web3Forms key
npm run dev
```

Open [http://localhost:4321/las-chicas/](http://localhost:4321/las-chicas/) (base path must match your GitHub repo name).

```bash
npm run build    # output in dist/
npm run preview  # preview production build
```

## Placeholder checklist (update before launch)

Edit [`src/config/site.ts`](src/config/site.ts):

| Field | Current placeholder |
|-------|---------------------|
| `phone` / `phoneDisplay` | `+441310000000` |
| `email` | `hello@laschicascleaning.co.uk` |
| `instagram` / `facebook` | Example URLs |
| `companyNumber` | `SC000000` |
| `address.postalCode` | `EH1` |

Replace Unsplash images in `images` with your own photos for better trust and uniqueness.

Update [`public/robots.txt`](public/robots.txt) sitemap URL when your domain is final.

## Contact form (Web3Forms — free)

1. Go to [web3forms.com](https://web3forms.com) and create a free access key with your email.
2. Copy `.env.example` to `.env` and set `PUBLIC_WEB3FORMS_KEY`.
3. For GitHub Actions: **Settings → Secrets → Actions** → add `PUBLIC_WEB3FORMS_KEY`.
4. Test on the [Contact](/contact) page locally and after deploy.

If the key is missing, the form shows a friendly error with phone/email fallback links.

## GitHub Pages deployment

### Same Jekyll error? (`jekyll v3.10.0`, `jekyll-build-pages`)

**Yes — that is the same problem.** GitHub is still trying to build your site with Jekyll instead of using the Astro workflow.

Check which workflow failed in the **Actions** tab:

| Workflow name | What it means |
|---------------|---------------|
| **pages build and deployment** (job: `build`, uses `jekyll-build-pages`) | Wrong Pages setting — GitHub is building a branch with Jekyll |
| **Deploy to GitHub Pages** (jobs: `build` + `deploy`, uses `npm run build`) | Correct Astro workflow |

You want only **Deploy to GitHub Pages** to run.

### One-time Pages configuration (required)

1. Open your repo on GitHub → **Settings** → **Pages**
2. Under **Build and deployment** → **Source**, select **GitHub Actions**
3. Do **not** use "Deploy from a branch" (that triggers Jekyll on `main`)

Also check **Settings** → **Actions** → **General** → **Workflow permissions** → enable **Read and write permissions**.

### Deploy

```bash
git add .
git commit -m "Use GitHub Actions for Pages deployment"
git push origin main
```

Then open **Actions** → **Deploy to GitHub Pages** → both `build` and `deploy` jobs should pass.

Live URL: `https://YOUR_USERNAME.github.io/las-chicas/`

The workflow sets `PUBLIC_SITE_URL` and `PUBLIC_BASE_PATH` automatically from your repo name.

### Optional: contact form secret

**Settings → Secrets and variables → Actions** → add `PUBLIC_WEB3FORMS_KEY`.

## Custom domain setup

### 1. Buy a domain

Recommended: `.co.uk` for UK local trust (e.g. `laschicascleaning.co.uk`). Registrars: Cloudflare, Namecheap.

### 2. DNS records

| Type | Host | Value |
|------|------|-------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `YOUR_USERNAME.github.io` |

### 3. GitHub Pages custom domain

1. **Settings → Pages → Custom domain** → enter `www.yourdomain.co.uk`
2. Enable **Enforce HTTPS**
3. Add `public/CNAME` containing `www.yourdomain.co.uk` (GitHub may create this automatically)

### 4. Update Astro config for custom domain

In `.env` or repository variables:

```
PUBLIC_SITE_URL=https://www.laschicascleaning.co.uk
PUBLIC_BASE_PATH=/
```

Rebuild and redeploy. Update `robots.txt` sitemap URL to match.

### 5. Redirect apex → www (recommended)

**Cloudflare** (free): Redirect Rule — `yourdomain.co.uk/*` → `https://www.yourdomain.co.uk/$1` (301).

## SEO features (built in)

- Static HTML pages per route (homepage, contact, 4 service landing pages, privacy)
- Unique `<title>` and meta description per page
- Open Graph and Twitter Card tags
- JSON-LD: `HousekeepingService`, `Service`, `BreadcrumbList`, `FAQPage`
- Auto-generated `sitemap-index.xml` via `@astrojs/sitemap`
- `robots.txt`, canonical URLs, `lang="en-GB"`
- Semantic headings, skip link, image alt text with location keywords
- Edinburgh-focused service URLs:
  - `/services/domestic-cleaning-edinburgh`
  - `/services/holiday-let-cleaning-edinburgh`
  - `/services/commercial-cleaning-edinburgh`
  - `/services/end-of-tenancy-cleaning-edinburgh`

### Post-launch SEO checklist

1. [Google Search Console](https://search.google.com/search-console) — verify domain, submit sitemap (`/sitemap-index.xml`)
2. **Google Business Profile** — claim listing; NAP must match [`site.ts`](src/config/site.ts) exactly
3. **Bing Places** — same NAP
4. Edinburgh directories (Yell, Thomson Local, etc.)
5. Ask clients for Google reviews
6. Replace stock photos with real work photos

## Editing content

| What | Where |
|------|-------|
| Business details | [`src/config/site.ts`](src/config/site.ts) |
| Services, FAQs, page copy | [`src/content/services.ts`](src/content/services.ts) |
| Homepage hero | [`src/components/Hero.astro`](src/components/Hero.astro) |
| Privacy policy | [`src/pages/privacy.astro`](src/pages/privacy.astro) |

After editing services, rebuild — service pages pull from the shared `services.ts` data.

## Project structure

```
src/
├── config/site.ts       # Brand, contact, SEO defaults
├── content/services.ts  # Service data + FAQs
├── layouts/             # BaseLayout, ServicePageLayout
├── components/          # React islands + Astro sections
├── pages/               # Routes
└── utils/seo.ts         # JSON-LD helpers
```

## Licence

Private — Las Chicas Cleaning.
