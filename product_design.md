# Ookkaayy Website

**A clear, trustworthy front door to the Ookkaayy product family.**

The Ookkaayy Website is the public marketing, learning, and download surface for Ookkaayy Wiki, Search, and Version. It explains the shared local-first vision, helps visitors identify the product or combination that fits their work, and gives them a direct path from discovery to installation and useful documentation.

The website is a static-first public site. It does not store a user's Markdown, run the product engines in the browser, or become a required cloud control plane. Every Ookkaayy product remains independently installable and fully useful offline.

## Product promise

> Understand Ookkaayy, choose what you need, and get started with confidence.

The site should make the portfolio legible within a minute: Wiki writes and organizes Markdown, Search retrieves it, and Version protects its history. Visitors should never have to reverse-engineer the distinction from feature lists or repository names.

## Portfolio story and boundaries

The website presents one product family built around ordinary Markdown files and their referenced attachments:

- **Ookkaayy Wiki owns current-content authoring:** pages, metadata, links, attachments, optional device sync, and publishing.
- **Ookkaayy Search owns retrieval:** read-only parsing, indexing, ranking, and retrieval of the current Markdown working tree.
- **Ookkaayy Version owns history:** Git-backed versions, comparison, restoration, conflict resolution, and optional Git-remote synchronization.

The website explains these boundaries consistently and demonstrates how the products compose without implying that users must install the whole suite. Each product gets its own focused page, documentation path, download path, and statement of what it deliberately does not do.

The website is not a fourth product engine or the integration layer between the other products. Product integrations happen locally through their public, versioned contracts and the filesystem. The site may link to hosted services, releases, and documentation, but it never becomes necessary for opening, searching, or versioning a local collection.

## Primary audiences

The first audience is a person with Markdown knowledge who wants a calmer alternative to proprietary notes tools, opaque search systems, or developer-oriented Git workflows. They care about ownership, offline use, portability, and a small understandable product.

Secondary audiences include:

- Existing Markdown users evaluating one product for a specific problem
- AI-tool users who want durable, permissioned access to local knowledge
- Technical evaluators looking for architecture, security, packaging, and API details
- Contributors looking for source repositories, product direction, and contribution guidance

The public copy leads with user outcomes. Implementation details remain available, but do not crowd out the simple story.

## Core visitor journeys

The website is designed around a few short paths:

1. **Discover:** understand the local-first Markdown premise and the three product responsibilities.
2. **Choose:** compare Wiki, Search, and Version by job, not by an undifferentiated feature matrix.
3. **Evaluate:** inspect screenshots, workflows, privacy expectations, platform support, architecture, and limitations.
4. **Install:** select a supported platform and obtain a verified release with concise first-run instructions.
5. **Learn:** reach task-oriented documentation, product concepts, API references, MCP setup, and troubleshooting.
6. **Contribute:** find the appropriate repository, roadmap context, issue guidance, and license information.

Every important page has one primary next action. Marketing pages avoid dead ends and documentation pages preserve a clear route back to the relevant product and release.

## Information architecture

The initial site uses a deliberately small hierarchy:

- **Home** — portfolio promise, product overview, shared principles, and primary calls to action
- **Wiki** — authoring and organization workflows, screenshots, integrations, and download
- **Search** — retrieval workflows, Markdown-aware hybrid search, integrations, and download
- **Version** — plain-language history workflows, restoration, synchronization, and download
- **Compare** — which product owns which job, standalone use, and suite combinations
- **Docs** — shared getting-started material plus product-specific guides and references
- **Downloads** — current stable releases, supported platforms, checksums, signatures, and release notes
- **About** — philosophy, privacy posture, source links, licenses, and contact or contribution routes

Documentation URLs are stable, human-readable, and product-scoped. Versioned API documentation may live beneath product and API-version paths, while evergreen guides keep durable canonical URLs.

## Home page

The home page opens with the shared outcome—owning useful knowledge as normal Markdown—followed immediately by the three-product responsibility model. It shows how the products work alone and together without presenting a complicated architecture diagram before the visitor understands the jobs.

The recommended sequence is:

- A concise hero with one primary action and one secondary learning action
- Three product cards expressed as Write, Find, and Protect
- A simple workflow showing normal Markdown at the center
- Proof of local-first behavior, offline usefulness, and format ownership
- Focused examples for personal knowledge, documentation, research, and AI workflows
- Download and documentation calls to action

Claims are concrete and verifiable. The site avoids vague AI language, invented testimonials, fake usage numbers, and privacy promises that the products cannot technically guarantee.

## Product pages

Each product page uses the same narrative frame so visitors can compare without relearning the site:

- The problem and product promise
- A representative workflow
- Core capabilities and intentionally narrow scope
- Screenshots or short demonstrations using realistic Markdown content
- Local-first, privacy, and data-ownership behavior
- Relationship to the other products
- Supported platforms and current release status
- Primary download action and links to documentation and source

Product pages may share reusable layout components, but retain distinct examples and visual accents. The goal is a coherent family, not three pages with interchangeable copy.

## Visual design system

The visual language should feel calm, precise, durable, and quietly technical. It takes cues from Markdown itself: strong typography, visible hierarchy, restrained surfaces, and content that remains understandable without decoration.

The initial system should define:

- A highly readable text family and a complementary monospaced face for Markdown, paths, and commands
- A neutral foundation with one accessible portfolio accent and a restrained accent for each product
- A compact spacing scale, consistent content widths, and generous reading rhythm
- Reusable buttons, cards, callouts, tabs, code blocks, navigation, and download selectors
- Light and dark themes that meet the same contrast and hierarchy standards
- Product illustrations made from real interface states and Markdown structures rather than generic stock imagery

Motion is brief and functional: it clarifies relationships, navigation, or state changes. It respects reduced-motion preferences and never gates comprehension.

## Content and voice

The voice is plainspoken, specific, and confident without being grandiose. Pages explain unfamiliar concepts at the point they become relevant and use Git, vector-search, or MCP terminology only when it helps a visitor make a decision.

Portfolio language stays canonical across the site:

- Wiki writes and organizes Markdown.
- Search indexes and retrieves current Markdown.
- Version preserves Markdown history.

Content lives in version-controlled Markdown or another text-based format close to the code that renders it. Shared facts such as supported platforms, current versions, download URLs, and product responsibility statements have one structured source so pages cannot silently drift apart.

## Documentation experience

Documentation is task-oriented and searchable. A new user can move from installation to a useful first result without reading architecture material. Each product begins with installation, first run, core concepts, common workflows, configuration, integrations, troubleshooting, and reference material.

Code and command examples are copyable, tested where practical, and labeled with platform assumptions. Screenshots are updated alongside interface changes. Pages display the applicable product and version when instructions differ across releases.

The docs clearly separate local-only defaults from actions that enable networking, accounts, remote providers, publishing, or synchronization. Security-sensitive instructions state the effect of the setting rather than merely listing configuration syntax.

## Downloads and release trust

The downloads experience detects a likely platform only to make a recommendation; it always allows the visitor to choose another supported package. A release entry includes version, publication date, platform and architecture, minimum requirements, file size, checksum, signature or provenance information where available, and release notes.

Download metadata should be generated from the authoritative release pipeline rather than copied into pages by hand. The site distinguishes stable, preview, and development builds and never silently moves a visitor between channels.

If automatic updates are supported by a product, the site documents how authenticity is verified and how to opt out. Historical releases remain discoverable for recovery, but unsupported builds are labeled clearly.

## Privacy, security, and accessibility

The public site collects as little data as practical. It works without an account, avoids third-party trackers by default, does not fingerprint visitors, and documents any essential telemetry or external resource. Cookie banners are not used as cover for unnecessary collection.

All externally loaded scripts, fonts, media, forms, and analytics require an explicit purpose and a documented owner. The static site deploys with a restrictive content security policy, secure transport, dependency and link checks, and no secrets embedded in client assets.

Accessibility is a release requirement. Navigation, menus, dialogs, tabs, code samples, forms, and download controls work with keyboards and assistive technology. Pages use semantic structure, visible focus, descriptive links, sufficient contrast, scalable text, useful alternative text, reduced-motion support, and clear validation errors. The target is WCAG 2.2 AA.

## Technical architecture

The website is statically generated by default and progressively enhanced only where interaction materially improves the experience. Marketing and documentation content renders to complete HTML during the build so it remains fast, crawlable, resilient, and readable without client-side JavaScript.

The implementation should provide:

- A typed content schema for pages, navigation, products, releases, and shared claims
- Markdown or MDX authoring with controlled, accessible components
- Reusable layouts and design tokens shared across marketing and documentation
- Responsive images, optimized local fonts, and explicit performance budgets
- Build-time validation for internal links, headings, metadata, image alternatives, and release records
- Generated sitemaps, canonical metadata, social cards, feeds where useful, and structured product/software data
- Preview deployments for changes and an atomic production deployment with simple rollback

The initial implementation should prefer the smallest framework that satisfies content, component, and build requirements. A static-site framework such as Astro is a good default because it supports content collections and component islands without requiring a client-rendered application. The choice should be validated against the deployment target and contributor workflow before scaffolding.

## Repository and delivery model

The website lives in its own private repository with an independent release and deployment history. It does not import private implementation modules from Wiki, Search, or Version. Product facts and release metadata cross repository boundaries through explicit, versioned data or release artifacts rather than source-level coupling.

The repository should begin with:

- `product_design.md` as the product and experience contract
- A concise `README.md` once implementation starts
- Application source, content, public assets, tests, and deployment configuration in conventional locations
- Automated formatting, type checks, tests, static builds, accessibility checks, and link validation
- Protected production configuration and least-privilege deployment credentials

Changes are previewed before deployment. Production publishing should be automated from a protected branch or signed release, produce an auditable deployment record, and support rollback without rebuilding unrelated product repositories.

## Success measures

Early measurement should answer whether the site helps people understand and begin using the products without compromising its privacy posture:

- Visitors can correctly identify which product writes, finds, or protects Markdown
- Product and platform selection leads reliably to a valid download
- Documentation users reach a successful first-run outcome
- Support requests reveal fewer portfolio-boundary and installation misunderstandings over time
- Core pages meet accessibility and performance budgets on mobile and desktop
- Release facts and links remain current through automated validation

Privacy-preserving aggregate measurement is preferred. Essential product decisions should not depend on tracking individual visitors across sessions or sites.

## Phased build

### Phase 1: foundation

Establish the content model, information architecture, design tokens, global navigation, responsive shell, accessibility baseline, and automated quality checks. Ship Home, the three product pages, Compare, About, and a simple documentation landing page with honest availability language.

### Phase 2: installation and documentation

Add authoritative release metadata, platform-aware downloads, getting-started guides, product documentation navigation, search, release notes, checksums, and source/contribution paths. Connect release automation only after provenance and failure behavior are defined.

### Phase 3: richer proof

Add polished product screenshots, short lightweight demonstrations, deeper workflow pages, API and MCP references, privacy and security detail, and carefully chosen examples. Introduce interactive elements only when static content cannot explain the concept as clearly.

### Phase 4: operational maturity

Add localization readiness, documented content ownership, automated screenshot freshness where practical, expanded browser and accessibility coverage, performance regression checks, deployment observability, and a tested rollback process.

## Intentionally out of scope

The initial website is not a browser-based edition of Wiki, Search, or Version; an account dashboard; a hosted knowledge database; a community social network; a support ticketing system; an e-commerce platform; or the synchronization authority for product data.

It should not grow a custom CMS, client-rendered application shell, or backend service merely to reproduce capabilities already handled by static content, Git-based review, the release host, or a focused external service.

Its responsibility remains simple:

> Explain the products honestly, help people choose, and get them safely to a useful first experience.
