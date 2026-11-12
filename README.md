# Sahil Kumbhar — Portfolio

Source code for my personal developer portfolio website, showcasing my work as a Java Full Stack Developer, distributed microservices architectures, projects, achievements, and background.

Built with [Astro](https://astro.build) as a lightning-fast static site. Featuring glassmorphism aesthetics, interactive physics (tilt & magnetic buttons), dark/light mode toggle with View Transitions, and dynamic social cards.

## Running Locally

Requires Node.js 22 or newer (Node 24 recommended).

```bash
npm install
npm run dev       # Starts dev server at http://localhost:4321
npm run build     # Checks types and builds production static site to dist/
npm run preview   # Previews the production build
```

## Updating Content

- **Site Data**: Edit [`src/data/profile.ts`](src/data/profile.ts) to update your bio, skills, projects, achievements, education, and links.
- **GitHub Stats**: Run `npm run sync:github` to refresh GitHub stars and metadata in [`src/data/github.json`](src/data/github.json).
- **Profile Photo**: Replace [`src/assets/sahil.jpg`](src/assets/sahil.jpg) with your preferred photo.

## Deploying to Cloudflare Pages / Vercel / GitHub Pages

### Cloudflare Pages (Recommended)
1. Push this repository to GitHub.
2. In Cloudflare Dashboard, go to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select your repository.
4. Set Build Settings:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Environment Variable**: `NODE_VERSION` = `24`

### Vercel
Connect your repo on [Vercel](https://vercel.com), select Astro preset, and deploy.
