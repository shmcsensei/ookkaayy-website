# Security, safety, logic, and product-design review

Reviewed: 2026-08-31

Scope: all application code, components, content models, release metadata, build/audit scripts, tests, operational documentation, and `product_design.md`. Lockfiles and binary screenshots/images were treated as dependency or asset surfaces. This report records the remediation completed after the review; the site was subsequently converted to a static GitHub Pages export.

## Summary

The site is fully static, uses local assets, has no trackers or account/data backend, escapes content through React, includes a reduced-motion rule and skip links, and centralizes core product facts. GitHub Pages controls response headers; the application itself has no request-time server layer. The content tests and Oxlint pass.

All five findings are resolved. Every route has its own canonical URL; Tauri commands match repository layout; release verification checks exact revisions and rejects dirty source trees; downloads provide actionable source links and accurate build guidance; and loopback authentication documentation matches product defaults.

## Findings

### [Medium] Every route inherits the home page as its canonical URL

Evidence: root metadata sets `alternates: { canonical: '/' }` (`app/layout.tsx:5-10`). Route pages define titles/descriptions but do not override canonical metadata. The content test only asserts that the root declaration exists (`tests/content.test.mjs:48-55`).

Impact: `/content`, `/search`, `/version`, `/compare`, `/docs`, `/downloads`, and `/about` tell crawlers that `/` is their canonical page. Search engines may consolidate or suppress those distinct routes.

Design conflict: `product_design.md` requires stable, human-readable, product-scoped canonical URLs and generated crawl metadata.

Recommendation: generate a route-specific canonical for every page and test the built metadata/output, not just source text.

### [Medium] Published first-run/build commands do not match the repository layout

Evidence: the install guide says to build each desktop crate with `cargo tauri build` after cloning and the downloads page emits `cd <repository>\n...\ncargo tauri build` (`lib/docs.ts:13-26`, `app/downloads/page.tsx:99-104`). In all three product repositories, `tauri.conf.json` and the desktop crate live under `desktop/src-tauri`; their READMEs instruct building from that directory (or running the named desktop package).

Impact: a new visitor following the primary installation journey from the repository root is likely to receive a missing-Tauri-configuration/workspace error instead of an application bundle.

Recommendation: publish exact verified commands for each repository (`cd desktop/src-tauri && cargo tauri build ...` or the correct workspace/package invocation) and execute them in a smoke test.

### [Medium] Release provenance verification ignores dirty source trees

Evidence: `verify-local-releases.mjs` compares only `git rev-parse --short HEAD`, artifact size, and artifact hash (`scripts/verify-local-releases.mjs:23-45`). It never checks `git status --porcelain`, records the full commit, or proves the artifact was built from that clean tree.

Impact: an artifact built from uncommitted or untracked source changes passes as originating from the listed revision. The checksum identifies the bytes but not their claimed source provenance.

Design conflict: the downloads design requires authoritative release-pipeline metadata, provenance, and auditable publication records; the page says the files were produced from the listed revisions.

Recommendation: require a clean repository, record the full commit and build recipe/toolchain, and have the build pipeline produce/sign the manifest together with the artifact rather than verifying an independently supplied local file after the fact.

### [Medium] The downloads journey contains no downloadable artifact or public source link

Evidence: artifact `location` values are sibling-repository filesystem paths (`lib/releases.ts:24-115`) rendered as non-link `<code>` text (`app/downloads/page.tsx:69-83`). The page provides no repository URL, release URL, or file response.

Impact: a public visitor can see local development artifact facts but cannot obtain any artifact or reach its source from the Downloads page. Product-page primary calls to action all terminate here.

Design conflict: the primary journeys require a direct path from discovery to installation/source, and important pages should avoid dead ends.

Recommendation: until immutable public artifacts exist, link each product to its actual source repository and label build-from-source as the primary available action. Add real download links only when the release pipeline owns them.

### [Low] Security documentation contradicts the products' default loopback policy

Evidence: the “Serve safely” guide says “Automation endpoints require an explicit bearer token” (`lib/docs.ts:95-104`). All three products intentionally allow unauthenticated loopback API access by default and require a token only for non-loopback binding; the same site accurately says that in adjacent copy and product READMEs.

Impact: users may assume local API calls are authenticated when they are not, or conclude their valid default setup is misconfigured.

Recommendation: state that loopback is unauthenticated by default and that a bearer token is mandatory for non-loopback exposure and optional hardening for loopback, with the implications of each choice.

## Validation and residual risk

- `npm test`: 9 passed, 0 failed.
- `npm run lint`: passed with no reported diagnostics.
- `npm run build`: passed; all 8 expected routes were emitted as static HTML.
- `npm run audit`: passed and verifies project-subpath links, required static files, and compressed asset budgets.
- Local release verification was not used as evidence because it depends on sibling build artifacts; the script and its asserted provenance behavior were reviewed directly.
- No live browser WCAG 2.2 AA or external link crawl was available; accessibility and link checks in this repository are largely source-pattern/build assertions rather than end-to-end audits.
