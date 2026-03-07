# VINT.AI Website (SvelteKit + Vercel)

Modernized VINT.AI site migrated from Wix to SvelteKit, with a dark tech-focused design, animated hero graphics, service pages, and contact flow.

## Stack

- SvelteKit 2 + TypeScript
- Tailwind CSS 4 (via Vite plugin)
- Three.js hero animation
- Vercel adapter (`@sveltejs/adapter-vercel`)
- Optional Tawk.to chat widget

## Local development

```sh
npm install
npm run dev
```

## Environment variables

Create `.env` with:

```sh
# Optional: forwards contact form submissions to Formspree endpoint URL
FORMSPREE_ENDPOINT=https://formspree.io/f/<your-form-id>

# Optional: enables embedded Tawk.to widget
PUBLIC_TAWK_PROPERTY_ID=<tawk-property-id>
PUBLIC_TAWK_WIDGET_ID=<tawk-widget-id>
```

## Production build

```sh
npm run check
npm run build
```

## Deploy to Vercel (free tier)

1. Push this project to GitHub.
2. Import the repo in Vercel.
3. Add the environment variables above in Vercel project settings.
4. Add custom domain `vint.ai` in Vercel.
5. Update DNS from Wix to Vercel (`cname.vercel-dns.com` or Vercel A records).
