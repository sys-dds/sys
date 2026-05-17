# System Design Mastery

MVP 0.1 for a content-first senior interview prep notes product.

System Design Mastery helps 3+ year developers prepare for senior interviews by studying system design, frontend architecture, backend architecture, DevOps and production thinking, trade-offs, debugging, code review, and senior-style answers.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- MDX files in `content/notes`
- No database, auth, Stripe, Supabase, or real checkout integration

## Setup

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start a production build:

```bash
npm run start
```

Run linting when supported:

```bash
npm run lint
```

## Environment Variables

Create a local env file from the example:

```bash
cp .env.example .env.local
```

Available placeholders:

```bash
NEXT_PUBLIC_CORE_CHECKOUT_URL=
NEXT_PUBLIC_PRO_CHECKOUT_URL=
```

The pricing page reads these variables for the Core and Pro buttons. Real Lemon Squeezy or Stripe integration is intentionally not included yet.

## Content

Notes live in `content/notes` as MDX files with frontmatter:

```yaml
title: "Server vs Client Components"
slug: "frontend-server-vs-client-components"
track: "Frontend System Design"
summary: "Short note summary"
status: "free"
order: 1
```

Free notes render the full MDX content. Locked notes render a useful preview and then show a paywall CTA. There is no auth gate in MVP 0.1.

## Deployment Notes

This app is deployable to any standard Next.js host such as Vercel. Add the public checkout URL placeholders in the hosting provider once real checkout links exist.

## MVP Scope

Included:

- Landing page
- Roadmap page with five tracks and a 30-day starter plan
- Notes index generated from MDX metadata
- MDX note pages with free and locked behavior
- Pricing page with placeholder checkout URLs
- About and changelog pages

Intentionally not included yet:

- Database
- Authentication
- Payments or subscriptions
- Supabase
- Admin dashboard
- Comments or community
- Search
- Full LMS features

