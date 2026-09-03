# DJ Mika Private Events

Site vitrine React/Vite pour DJ Mika Private Events (mariages, soirées privées, entreprise, Provence / PACA).

## Développement

```bash
npm install
npx playwright install chromium
npm run dev
```

## Build & déploiement FTP

```bash
npm run build
```

`npm run build` :

1. Génère le bundle Vite dans `dist/`
2. Pré-rend les routes publiques (Playwright) en HTML statique :
   - `dist/index.html`
   - `dist/mariage/index.html`
   - `dist/anniversaire/index.html`
   - etc.

Déployer tout le contenu de `dist/` sur l’hébergement Apache (FTP). Le fichier `.htaccess` est copié depuis `public/`.

### Pré-rendu + fallback SPA

- Les dossiers pré-rendus (`mariage/`, `prestations/`, …) sont servis directement par Apache (`DirectoryIndex index.html`). Les crawlers reçoivent H1, contenu et metas sans exécuter JavaScript.
- Les routes inconnues (ou non pré-rendues) tombent sur le fallback SPA `.htaccess` → `index.html`, puis React Router.
- Le JS client reste actif : après chargement, React reprend la navigation comme une SPA classique.

Sans Chromium Playwright installé, le build Vite seul reste possible via `npm run build:only`, puis `npm run prerender` une fois le navigateur prêt.
