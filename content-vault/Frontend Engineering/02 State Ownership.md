---
id: fe-state-ownership
title: State ownership in React applications
slug: state-ownership
summary: A senior answer pattern for deciding whether state belongs locally, in the URL, in a form, in a cache, or in shared application state.
track: Frontend Engineering
category: Architecture
path: Frontend Engineering/02 State Ownership.md
access: free
status: published
order: 20
minutes: 11
tags:
  - react
  - state
  - frontend
updated: "2026-05-18"
---

## Interview question

Where should state live in a React or Next.js application?

## Weak answer

I would put it in Context so every component can access it.

## Strong answer

I would classify the state first. Local UI state should stay close to the component. URL state should live in the route when it affects navigation or shareability. Form state should usually stay with the form. Server state should be owned by the data layer or cache. App-wide state is only needed when multiple distant parts of the interface need the same value.

Context is useful, but it is not the default. It can create broad re-renders and unclear ownership if it becomes a dumping ground.

## Practical example

For a searchable interview-note library:

- selected tab can be local state
- search query can be URL state
- draft form fields can be form state
- notes loaded from the server are server/cache state
- user theme can be app-level state

## Interview checklist

- Who creates this state?
- Who needs to read it?
- Who is allowed to update it?
- Should it survive refresh?
- Should it be shareable in a URL?
- Is it server data pretending to be client state?

## Final mental model

State should live with its owner. Senior frontend engineers avoid global state by default and only widen ownership when the product behaviour genuinely requires it.
