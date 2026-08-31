# Website operations

## Ownership and localization

`lib/site-policy.ts` is the executable source for the default locale, supported locales, content owners, screenshot fingerprints, and performance budgets. English is currently the only published locale; all global UI copy remains in typed content modules so a new locale can be added without changing routing or product data. Product maintainers own technical documentation, release engineering owns artifact facts, and security-sensitive copy requires security/privacy review.

## Release gate and observability

Run `npm run check`. It tests content and accessibility invariants, lints, creates the production build, checks internal links and required routes, detects unreviewed screenshot changes, enforces byte budgets, verifies installer provenance, and writes `dist/audit-report.json`. Preserve that report with the immutable build artifact as its local audit record. A release is rejected on any non-zero exit.

Before publishing, serve the exact build with `npm start` and exercise Home → product → Docs → Downloads with a keyboard at narrow and wide viewport sizes. Confirm the response includes the CSP, referrer, content-type, and permissions headers from `public/_headers`.

## Atomic rollout and rollback

Archive the complete `dist` directory and its `audit-report.json` under the Git revision that produced it. Deploy by switching the host from the prior immutable artifact to the new one atomically; never modify files in a live artifact. Observe HTTP error rate, route availability, and asset failures after the switch.

Rollback is a pointer change to the immediately previous verified `dist` artifact. After switching back, request `/`, `/docs`, `/downloads`, and one hashed JavaScript asset, then compare its stored audit report and checksum. Do not rebuild during rollback: rebuilding would produce a different artifact and erase the evidence needed to diagnose the failed release.
