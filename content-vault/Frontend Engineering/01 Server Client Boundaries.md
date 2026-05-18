---
id: fe-server-client-boundaries
title: Server/client boundaries in Next.js
slug: server-client-boundaries
summary: A practical way to decide what belongs on the server, what belongs in the browser, and how to explain the trade-off in interviews.
track: Frontend Engineering
category: Architecture
path: Frontend Engineering/01 Server Client Boundaries.md
access: free
status: published
order: 10
minutes: 9
tags:
  - nextjs
  - react
  - architecture
updated: "2026-05-18"
---

## Interview question

Where would you draw the line between Server Components and Client Components in a Next.js application?

## Strong answer shape

I would start by making the default server-rendered. Anything that reads trusted data, talks to private services, or does not need browser interactivity can stay on the server.

I would move a boundary into the client when the component needs stateful interaction, browser APIs, event handlers, animation, or optimistic UI. The important part is not “server good, client bad”. The important part is keeping the client bundle intentional.

## Practical judgement

A product detail page can fetch the product, pricing, inventory, and recommendations on the server. The image gallery, quantity selector, cart button, and local comparison widget can be client components.

That gives you:

- smaller client JavaScript
- safer server-only data access
- better first render
- clear ownership of interactive state
- fewer accidental API calls from the browser

## Interview checklist

- Start with data ownership.
- Identify which parts require browser interaction.
- Keep secrets, credentials, and private services on the server.
- Push the client boundary as low as practical.
- Explain the trade-off: interactivity costs bundle size and hydration.

## Final mental model

Server Components are for trusted rendering and data access. Client Components are for browser-owned interaction. Senior judgement is knowing where that boundary should be thin, explicit, and boring.
