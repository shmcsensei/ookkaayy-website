# Ookkaayy Website

The static-first marketing, documentation, and download front door for Ookkaayy Wiki, Search, and Version.

```sh
npm install
npm run dev
npm test
npm run lint
npm run build
npm run verify:releases
```

The local preview is served at `http://localhost:3000`. Content follows [`product_design.md`](product_design.md); shared product facts live in `lib/products.ts` so responsibility, port, and availability claims remain consistent.

`npm run verify:releases` checks every listed local installer against its sibling repository revision, exact byte size, and SHA-256 checksum. Rebuild an affected desktop bundle and update the manifest together whenever product code changes.
