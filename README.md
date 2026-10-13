# Sales Copilot Website — Frontend Only

This project is the public Sales Copilot marketing website only.

It intentionally contains **no custom backend**:

- No Supabase
- No authentication
- No database
- No Paddle/Stripe
- No Edge Functions
- No Cloudflare R2
- No customer dashboard
- No secure installer delivery

The only hosted-service feature is optional **Netlify Forms** for early-access and support submissions. No backend code is required for that.

## Pages

- `/` — Homepage
- `/pricing` — Planned pricing
- `/support` — Support/contact form
- `/privacy` — Website privacy notice
- `/terms` — Pre-launch terms
- custom 404

## Requirements

Install Node.js 22. Vite currently requires Node 20.19+ or 22.12+.

Check:

```bash
node --version
npm --version
```

## Install

Open a terminal in this folder and run:

```bash
npm install
```

## Start locally

```bash
npm run dev
```

Open the local URL Vite prints, normally:

```text
http://localhost:5173
```

## Production build

```bash
npm run build
```

The finished static website is generated in:

```text
dist/
```

Preview it locally with:

```bash
npm run preview
```

## Deploy to Netlify

### Git deployment

1. Push this folder to GitHub.
2. Create a new Netlify site from the GitHub repository.
3. Netlify will use `netlify.toml`.
4. Build command: `npm run build`.
5. Publish directory: `dist`.
6. Deploy.

The included SPA redirect lets direct URLs such as `/pricing` and `/support` work correctly.

### Netlify Forms

The site contains two forms:

- `early-access`
- `support`

The matching hidden HTML forms in `index.html` allow Netlify to detect them during deployment.

When you run the site locally, form submission is simulated so you can preview the success state. Real form submissions begin after deployment to Netlify.

## Customize branding

Edit:

```text
src/config/brand.ts
```

You can change:

- product name
- tagline
- product description
- planned monthly price
- planned included minutes

## Main website files

```text
src/
├── app/
│   └── router.tsx
├── components/
│   ├── BrandMark.tsx
│   ├── EarlyAccessForm.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── PageMeta.tsx
│   ├── ProductMockup.tsx
│   ├── ScrollManager.tsx
│   └── SupportForm.tsx
├── config/
│   └── brand.ts
├── layouts/
│   └── MarketingLayout.tsx
├── pages/
│   ├── HomePage.tsx
│   ├── NotFoundPage.tsx
│   ├── PricingPage.tsx
│   ├── PrivacyPage.tsx
│   ├── SupportPage.tsx
│   └── TermsPage.tsx
├── App.tsx
├── index.css
└── main.tsx
```
