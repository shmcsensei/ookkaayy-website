# Ookkaayy Website

The static marketing, documentation, and download front door for Ookkaayy Content, Search, and Version. The production build exports plain HTML, CSS, JavaScript, and assets to `out/` for GitHub Pages.

```sh
npm install
npm run dev
npm test
npm run lint
npm run build
npm run audit
npm run verify:releases
npm run check
```

The local preview is served at `http://localhost:3000`. Content follows [`product_design.md`](product_design.md); shared product facts live in `lib/products.ts` so responsibility, port, and availability claims remain consistent.

Pushes to `main` deploy through `.github/workflows/deploy-pages.yml`. In the GitHub repository, set **Settings → Pages → Source** to **GitHub Actions**. The workflow automatically configures `/ookkaayy-website` as the base path for the default project URL. Set the repository variable `SITE_URL` only when using a custom domain.

`npm run verify:releases` checks every listed local installer against its sibling repository revision, exact byte size, and SHA-256 checksum. Rebuild an affected desktop bundle and update the manifest together whenever product code changes.

`npm run check` is the release gate. It also emits the production audit record described in [`OPERATIONS.md`](OPERATIONS.md), which documents content ownership, localization readiness, monitoring, atomic rollout, and rollback.
