---
id: ops-debugging-slow-apis
title: Debugging a slow API in production
slug: debugging-slow-api-production
summary: A production-minded interview structure for debugging latency with logs, metrics, traces, databases, caches, and rollback judgement.
track: Production Engineering
category: Debugging
path: Production Engineering/01 Debugging Slow APIs.md
access: founder
status: published
order: 210
minutes: 16
tags:
  - observability
  - debugging
  - production
  - incidents
updated: "2026-05-18"
---

## Preview

Senior production answers do not start with random guesses. They start by narrowing scope: who is affected, when it started, what changed, which dependency is slow, and whether the system is failing or only degraded.

The founder note turns that into a step-by-step interview answer for API latency incidents, including what to check first and how to communicate under pressure.

## Full note will include

- a complete latency-debugging decision tree
- logs, metrics, and tracing checklist
- database and cache investigation prompts
- rollback vs mitigation trade-offs
- senior communication examples during incidents
