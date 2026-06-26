# Personal Website Domain

This context defines the language for positioning and structuring a personal website for career opportunities.

## Language

**Primary Audience**:
The single most important reader group the website is optimized to convert into interviews.
_Avoid_: Everyone, General visitors

**US-Based Hiring Manager**:
A US employer representative responsible for evaluating candidate fit and advancing hiring decisions.
_Avoid_: Recruiter, Talent partner

**Technical Leader**:
An engineering decision-maker (for example, Engineering Manager, Staff+, VP Engineering, CTO) who evaluates technical depth and ownership.
_Avoid_: Team lead (generic), Manager (ambiguous)

**Product Company**:
A company that builds and operates software products, where engineering outcomes are measured by product impact.
_Avoid_: Agency, Consulting shop

**Senior/Lead Engineer Profile**:
A candidate profile emphasizing ownership, architecture, delivery, and mentorship at senior or lead scope.
_Avoid_: Mid-level profile, Individual contributor only

**Frontend-First Expertise**:
A professional focus where frontend and user-facing product quality are the strongest core competency.
_Avoid_: Full backend focus, Infrastructure-first

**Supporting Backend Capability**:
Practical backend contribution ability, primarily with Node.js, that supports end-to-end delivery without claiming backend specialization.
_Avoid_: Backend specialist, Platform engineer

**Modern Web Delivery**:
The ability to ship production-ready web experiences with contemporary frameworks, quality practices, and cloud-aware deployment.
_Avoid_: Legacy web maintenance, Static brochure-only work

**Homepage Promise**:
The primary first-screen message is: "I build mobile-first, high-performance product experiences end-to-end, with frontend excellence and pragmatic Node.js backend delivery."
_Avoid_: Generic intro line, Multi-message hero

**Primary Conversion Action**:
The main call-to-action for v1 is booking a 30-minute intro call.
_Avoid_: Generic contact request, Multiple equal CTAs

**Secondary Conversion Action**:
Resume download supports evaluation but remains secondary to booking an intro call.
_Avoid_: Primary CTA, Portfolio-only action

**Above-the-Fold Proof Set**:
The first-screen trust evidence includes 12+ years of experience, Senior/Lead positioning, core stack focus (React Native, React/Next.js, Node.js), and one recent outcome metric.
_Avoid_: Long bio text, Tool list without signal

**Flagship Proof Metric**:
Use a Tactable project proof statement centered on the Rakuten/Shopify initiative: delivered and evolved Shopify app capabilities that enabled merchants to manage products, inventory, and orders for Rakuten Ichiba through Shopify workflows.
_Avoid_: Unverifiable personal ownership claims, Vague "improved performance" wording

**Company Naming Strategy**:
Show Tactable and mention Rakuten/Shopify in homepage proof text; place Natelly and Briza in below-the-fold case study sections.
_Avoid_: Anonymous company references, Overloading the hero with all employers

**Secondary Audience Outcome**:
If a visitor is not ready to book a call, convert them to resume download and LinkedIn connection as a lightweight save-profile intent.
_Avoid_: No-capture exits, Newsletter-first fallback

**V1 Page Structure**:
Use a single-page scroll with this order: Hero, Proof Strip, Selected Work (3 case studies), Skills Snapshot, About/Leadership, CTA Footer.
_Avoid_: Multi-page navigation for core content, Unstructured long-form timeline

**Case Study Order**:
Feature case studies in this order: Tactable (Rakuten/Shopify), Natelly (mobile-first end-to-end ownership), Briza (component architecture and internal tooling).
_Avoid_: Chronological resume order, Undifferentiated project cards

**Copy Tone**:
Use a confident, outcome-focused, concise, and non-boastful voice that emphasizes ownership and results over hype.
_Avoid_: Superlative-heavy marketing language, Long-form self-description

**Visual Direction**:
Use editorial-tech minimalism with bold typography, structured grid, subtle motion, strong contrast, and a restrained accent color.
_Avoid_: Generic template aesthetics, Over-animated interface

**V1 Tech Stack**:
Use React + Vite + TypeScript + Tailwind CSS + Framer Motion for a static-build-first architecture compatible with GitHub Pages.
_Avoid_: Server-dependent rendering requirements, Platform-locked features

**Deployment Platform**:
Deploy v1 on GitHub Pages using a GitHub Actions workflow that builds and publishes the static site.
_Avoid_: Runtime server hosting assumptions, Manual deploy-only process

**Domain Strategy**:
Use the existing custom domain https://gyrfalcon.me/ on top of GitHub Pages, with the default GitHub Pages domain kept as fallback.
_Avoid_: GitHub-only domain for primary branding, DNS settings without HTTPS enforcement

**Primary Contact Flow**:
Use a Calendly link for booking a 30-minute intro call as the primary CTA, with email as fallback and LinkedIn as a secondary contact path.
_Avoid_: Contact forms as the only path, Hidden direct contact options

**Motion Policy**:
Use moderate motion only: staggered entrances, subtle hero parallax, and hover transitions; disable heavy effects on mobile and respect reduced-motion preferences.
_Avoid_: Continuous heavy animations, Motion without accessibility fallbacks

**Analytics Policy (V1)**:
Do not include analytics on v1; prioritize simplicity and privacy-first launch scope.
_Avoid_: Tracking scripts in initial release, Cookie-banner complexity

**Content Scope (V1)**:
Do not include a blog/articles section in v1; keep the release focused on hiring conversion and speed to ship.
_Avoid_: Expanding MVP scope with editorial workflows, Under-maintained content sections

**Resume Presentation Pattern**:
Show a concise on-page career snapshot and provide a downloadable PDF resume; avoid embedding the full resume body on-page.
_Avoid_: Wall-of-text resume embed, Hidden resume download access

**Leadership Section Policy**:
Include a concise section covering mentorship, cross-functional collaboration, and product ownership, alongside technical achievements.
_Avoid_: Technical-only narrative, Generic soft-skill claims without evidence

**Case Study Depth (V1)**:
Ship brief case study summaries in v1 and expand to fuller narratives in phase 2.
_Avoid_: Over-detailed first release, Empty placeholder case studies

**Language Scope (V1)**:
Use English only in v1 to optimize clarity and speed for US-based hiring audiences; consider multilingual support in phase 2.
_Avoid_: Partial bilingual implementation, Mixed-language UI copy

**Hero Identity Visual**:
Include a professional, clean, high-contrast portrait in the hero while keeping text as the primary information layer.
_Avoid_: Anonymous abstract-only hero, Oversized image dominating message clarity

**Testimonials Policy (V1)**:
Do not include testimonials in v1 unless there are attributable quotes with name, role, and company.
_Avoid_: Anonymous testimonials, Placeholder social-proof blocks

**Mobile Navigation Pattern**:
Use a sticky top navigation with anchor links and a compact menu; show a persistent primary CTA button (Book Intro Call) after first scroll.
_Avoid_: Deep mobile menus, Hidden conversion action on scroll

**Launch Criteria (V1)**:
Launch requires: Lighthouse mobile performance >= 90, no broken links or missing assets, working end-to-end CTA flows (Calendly, email, LinkedIn, resume download), verified responsive behavior on small and large screens, and fully working custom domain with HTTPS on GitHub Pages.
_Avoid_: Soft launch without QA checklist completion, Domain cutover without TLS verification
