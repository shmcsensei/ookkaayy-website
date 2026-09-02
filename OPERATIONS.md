# Website operations

## Ownership and localization

`lib/site-policy.ts` is the executable source for the default locale, supported locales, content owners, screenshot fingerprints, and performance budgets. English is currently the only published locale; all global UI copy remains in typed content modules so a new locale can be added without changing routing or product data. Product maintainers own technical documentation, release engineering owns artifact facts, and security-sensitive copy requires security/privacy review.

## Release gate and observability

Run `npm run check`. It tests content and accessibility invariants, lints, creates the production build, checks internal links and required routes, detects unreviewed screenshot changes, enforces byte budgets, verifies installer provenance, and writes `out/audit-report.json`. Preserve that report with the immutable build artifact as its local audit record. A release is rejected on any non-zero exit.

Before publishing, serve the exact static export with `npm start` and exercise Home → product → Docs → Downloads with a keyboard at narrow and wide viewport sizes. Confirm navigation, images, and interactive documentation work from the repository subpath used by GitHub Pages.

## Atomic rollout and rollback

Archive the complete `out` directory and its `audit-report.json` under the Git revision that produced it. GitHub Pages deploys the uploaded artifact atomically; never modify files in a live artifact. Observe route availability and asset failures after the switch.

Rollback by re-running the last known-good GitHub Actions deployment. After switching back, request `/`, `/docs`, `/downloads`, and one hashed JavaScript asset, then compare its stored audit report and checksum. Do not rebuild during rollback: rebuilding would produce a different artifact and erase the evidence needed to diagnose the failed release.
