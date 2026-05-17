import Link from "next/link";
import { Hero } from "@/components/Hero";

const sections = [
  {
    title: "Who this is for",
    body: "Developers with 3+ years of experience who can build features, but want sharper language, judgement, and architecture instincts for senior interviews.",
  },
  {
    title: "What you get",
    body: "Concise notes with interview questions, weak answers, senior answers, practical examples, checklists, practice tasks, and mental models.",
  },
  {
    title: "Free vs paid",
    body: "Free notes cover the starting concepts. Paid notes go deeper into rendering, data fetching, caching, and senior answer patterns.",
  },
  {
    title: "Why this is different",
    body: "It is not a giant course library. It is a focused study system for learning how senior engineers explain trade-offs under interview pressure.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {sections.map((section) => (
            <article key={section.title} className="rounded-lg border border-line bg-panel p-6">
              <h2 className="text-xl font-bold text-white">{section.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{section.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="border-y border-line bg-panel/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-white">Built as personal senior-interview study notes</h2>
            <p className="mt-5 text-base leading-8 text-mist">
              The product starts from the notes you wish you had before a senior loop: how to frame ambiguity, compare
              options, explain constraints, debug production systems, and review code with judgement. MVP 0.1 keeps that
              shape intentionally simple.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/notes" className="rounded-md bg-white px-5 py-3 text-center text-sm font-bold text-ink">
                Browse notes
              </Link>
              <Link href="/roadmap" className="rounded-md border border-line px-5 py-3 text-center text-sm font-bold text-white">
                View roadmap
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
