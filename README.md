# Transform Digital

Premium digital agency website — React, TypeScript, Tailwind CSS, Framer Motion.

## Quick Start

```bash
npm install
cp .env.example .env   # then fill in your keys
npm run dev
```

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_key_from_web3forms.com
VITE_CALLMEBOT_API_KEY=your_callmebot_key   # optional — for WhatsApp auto-notify
VITE_OWNER_WHATSAPP_PHONE=919702839072
VITE_SITE_URL=https://your-live-domain.com   # set after deploy for SEO
```

**Email (required):** Get a free key at [web3forms.com](https://web3forms.com) using `pawankhot9@gmail.com`.

**WhatsApp (optional):** Message `CallMeBot` on WhatsApp (+34 684 72 96 75) with `I allow callmebot to send me messages` to get your API key.

Add the same variables in Vercel/Netlify → Environment Variables when deploying.

## Build & Deploy

```bash
npm run build
npm run preview
```

Deploy the `dist` folder to **Vercel** or **Netlify**. Both `vercel.json` and `netlify.toml` are included for SPA routing.

After deploy, set `VITE_SITE_URL` to your live URL and rebuild — this updates `sitemap.xml`, `robots.txt`, and social preview tags.

## Customize

- **Content** → `src/data/content.ts`
- **Legal pages** → `src/data/legal.ts`
- **Logo** → `public/images/logo.png`
- **Founder photo** → `public/images/founder.png`
- **Project screenshots** → `public/images/projects/`

## Contact

- Email: pawankhot9@gmail.com
- WhatsApp: +91 9702839072
- GitHub: [TRANSFORM-DIGITAL-web](https://github.com/TRANSFORM-DIGITAL-web)
