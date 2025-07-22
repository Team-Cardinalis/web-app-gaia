# Web App Gaia – SvelteKit PWA for GitHub Pages

A SvelteKit Progressive Web App, installable and offline-ready, styled with Tailwind CSS, and optimized for GitHub Pages.

## Features

- SvelteKit + Static Adapter
- Service Worker for offline support
- Web Manifest for installability
- Tailwind CSS styling
- Basic routing (Home, About)
- GitHub Actions deployment

## Setup

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Add your icons to `static/` and an empty `.nojekyll` file.**

## Development

```sh
npm run dev
```

## Build

```sh
npm run build
```

## Deploy to GitHub Pages

1. Push your code to GitHub.
2. GitHub Actions will auto-deploy on push to `main`.
3. Or, deploy manually:
   ```sh
   npm run build
   npm run deploy
   ```

## Notes

- If your repo name is not `web-app-gaia`, update the `base` path in `svelte.config.js` and `start_url` in `manifest.webmanifest`.
- The app is installable and works offline after the first load.

## References

- [Deploy a SvelteKit App to GitHub Pages (Captain Codeman)](https://www.captaincodeman.com/deploy-a-sveltekit-app-to-github-pages)
- [Publishing a SvelteKit App to GitHub Pages (DEV)](https://dev.to/scc33/publishing-a-sveltekit-app-to-github-pages-4439)
- [Set up a SvelteKit website in GitHub Pages (Pacifis)](https://www.pacifis.org/posts/set-up-a-sveltekit-website-in-github-pages/)
