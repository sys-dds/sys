---
id: sd-design-chat-system
title: Design a chat system
slug: design-chat-system
summary: A structured system-design prompt covering requirements, APIs, realtime delivery, storage, fanout, offline messaging, and trade-offs.
track: System Design
category: Architecture
path: System Design/01 Design Chat System.md
access: founder
status: published
order: 310
minutes: 25
tags:
  - system-design
  - realtime
  - architecture
updated: "2026-05-18"
---

## Preview

Chat-system interviews look simple until the interviewer starts asking about delivery guarantees, offline users, fanout, unread counts, ordering, presence, and abuse.

The founder note will focus on a practical senior flow: clarify requirements, draw the first architecture, explain the data model, then go deep on the trade-offs that usually decide the level of the answer.

## Full note will include

- requirements and non-goals checklist
- API and event model
- WebSocket and fanout trade-offs
- offline delivery and ordering discussion
- common senior-level follow-up questions
