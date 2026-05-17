# System Design Mastery

MVP 0.1 for a local static senior interview prep notes site.

## 1. Product Purpose

System Design Mastery helps experienced developers prepare for senior interviews by learning how to explain trade-offs, design systems, review code, debug production issues, and answer with senior-level judgement.

Main positioning:

Senior interview prep for experienced developers who want to land senior roles, not by memorising answers, but by learning how senior engineers think.

The first track is Frontend System Design for Senior Interviews.

## 2. Audience

Developers with 3+ years of experience who can already build software and want to prepare for senior frontend, full-stack, or architecture-heavy interview loops.

This is not a beginner course and does not use fake guru claims.

## 3. MVP Scope

Included in MVP 0.1:

- Landing page
- Roadmap page
- Notes index
- MDX note detail pages
- Free and locked preview logic
- Pricing page with £19 Early Access placeholder
- About page
- Changelog page
- Source-controlled MDX notes in `content/notes`

## 4. Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- MDX content files
- npm
- Static/content-first architecture

## 5. Setup Commands

Install dependencies:

```bash
npm install
```

## 6. Local Dev Command

Run the local development server:

```bash
npm run dev
```

The app runs at:

```text
http://localhost:3000
```

## 7. Build Command

Create a production build:

```bash
npm run build
```

Run linting:

```bash
npm run lint
```

## 8. Local Testing Checklist

Check these pages locally:

- `/`
- `/roadmap`
- `/notes`
- `/notes/frontend-server-vs-client-components`
- `/notes/frontend-react-rendering-model`
- `/pricing`
- `/about`
- `/changelog`

Expected behavior:

- Notes index reads metadata from MDX frontmatter.
- Free notes render full MDX content.
- Locked notes render preview-only MDX content and show the Early Access CTA.
- Pricing shows Free at £0 and Early Access at £19.
- Early Access button says `Early Access coming soon` and does not connect to payment.
- Layout is readable on mobile and desktop.

## 9. What Is Intentionally Not Included Yet

- Auth
- Database
- Real payments
- Stripe
- Supabase
- Lemon Squeezy
- Subscriptions
- Admin panel
- Comments
- Community features
- AI features
- Analytics
- Search
- Full LMS features
- Cloudflare, Vercel, Netlify, DNS, or domain configuration

## 10. Future Roadmap

- SDM-002 content hardening and landing-page polish
- SDM-003 paid download pack
- SDM-004 real checkout link setup
- SDM-005 deploy to Cloudflare Pages later
- SDM-006 auth/gated dashboard later
- SDM-007 backend/devops/system design tracks later
