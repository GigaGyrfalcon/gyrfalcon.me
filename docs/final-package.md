# Personal Website V1 Final Package

## Session Status

Grilling session is closed. Decisions are locked for V1 and ready for implementation.

## Product Direction

- Goal: Convert US-based hiring managers and technical leaders into interview conversations.
- Primary CTA: Book a 30-minute intro call.
- Secondary CTA: Resume download and LinkedIn connection.
- Core positioning: Frontend-first Senior/Lead engineer with pragmatic Node.js backend capability.

## Canonical Homepage Message

I build mobile-first, high-performance product experiences end-to-end, with frontend excellence and pragmatic Node.js backend delivery.

## Information Architecture (Single Page)

1. Hero
2. Proof Strip
3. Selected Work (3 case studies)
4. Skills Snapshot
5. About and Leadership
6. CTA Footer

## Case Study Strategy

- Order:
  1. Tactable (Rakuten and Shopify related work)
  2. Natelly
  3. Briza
- V1 depth: brief summaries only.
- Format for each card: Context, Ownership, Tech, Outcome.
- Naming strategy: Tactable and Rakuten/Shopify can appear in hero proof; Natelly and Briza appear below the fold.

## UX and Content Policies

- Tone: confident, outcome-focused, concise, non-boastful.
- Visual direction: editorial-tech minimalism, bold typography, strong grid, restrained accent color.
- Motion: moderate and purposeful only; reduced-motion and mobile-safe behavior required.
- Language: English only in V1.
- Testimonials: excluded from V1 unless fully attributable.
- Resume: concise on-page snapshot plus downloadable PDF.
- Hero: include a professional portrait with text-first hierarchy.

## Platform and Delivery

- Stack: React + Vite + TypeScript + Tailwind CSS + Framer Motion.
- Hosting: GitHub Pages using GitHub Actions deployment.
- Domain: https://gyrfalcon.me/ as primary custom domain, GitHub Pages domain as fallback.
- Contact flow: Calendly primary, email fallback, LinkedIn secondary.
- Analytics: none in V1.
- Blog: excluded in V1.

## Implementation Plan

### Phase 1: Scaffold and Deploy Pipeline

1. Initialize Vite React TypeScript project.
2. Install Tailwind and Framer Motion.
3. Configure base path for GitHub Pages repository path if needed.
4. Add GitHub Actions workflow for build and deploy to Pages.
5. Configure Pages source to GitHub Actions in repository settings.

### Phase 2: Build Core Sections

1. Build sticky navigation with anchor links and compact mobile menu.
2. Build hero with message, portrait, proof strip, and primary CTA.
3. Build selected work cards for Tactable, Natelly, and Briza.
4. Build skills snapshot and concise leadership section.
5. Build footer CTA block with Calendly, email, LinkedIn, and resume link.

### Phase 3: Quality and Launch Hardening

1. Verify all links and assets.
2. Validate CTA end-to-end flows.
3. Verify responsive behavior on small and large screens.
4. Run Lighthouse mobile and reach score >= 90.
5. Finalize custom domain DNS and verify HTTPS.

## Launch Gate Checklist

- Lighthouse mobile performance >= 90
- No broken links or missing assets
- Calendly, email, LinkedIn, and resume links all working
- Responsive behavior validated on mobile and desktop
- Custom domain and HTTPS verified on GitHub Pages

## Phase 2 Backlog

- Expand each case study from summary to full narrative.
- Add multilingual support (English and Georgian).
- Add privacy-friendly analytics if needed.
- Add blog/articles section.
