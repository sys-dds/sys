import Link from "next/link";
import { Hero } from "@/components/Hero";

const sections = [
  {
    title: "Who this is for",
    body: "Developers with 3+ years of experience, mid-level engineers trying to land senior roles, and builders who need sharper language under interview pressure.",
  },
  {
    title: "What you get",
    body: "Interview questions, weak answers, senior answers, why the senior answer works, practical examples, checklists, practice tasks, and mental models.",
  },
  {
    title: "Free vs paid",
    body: "Free notes prove the style. Early Access is the £19 path for deeper notes, senior answer patterns, bad-vs-good examples, checklists, practice tasks, and future MVP updates.",
  },
  {
    title: "Why this is different",
    body: "This is not a tutorial dump. It is a practical senior-interview notebook for learning how to structure decisions, trade-offs, reviews, and debugging stories.",
  },
];

const interviewSignals = [
  "Trade-off thinking",
  "Architecture judgement",
  "Debugging approach",
  "Code review judgement",
  "Production awareness",
  "Communication under ambiguity",
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
      <section className="border-y border-line bg-panel/30">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ember">The interview gap</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white">
              You can be good at building software and still sound mid-level in interviews.
            </h2>
            <p className="mt-5 text-base leading-8 text-mist">
              Senior interviews are not only testing whether you know React, Next.js, APIs, or infrastructure terms. They
              test whether you can reason clearly when the problem is incomplete and the trade-offs are real.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {interviewSignals.map((signal) => (
              <div key={signal} className="rounded-md border border-line bg-ink/40 p-4 text-sm font-semibold text-mist">
                {signal}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-b border-line bg-panel/40">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-signal">Early Access</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white">What £19 is buying.</h2>
          </div>
          <div className="text-base leading-8 text-mist">
            <p>
              Early Access is not just more notes. It is senior answer patterns, bad-vs-good examples, code review and
              frontend system design checklists, practice tasks, mental models, and future MVP updates.
            </p>
            <p className="mt-4 font-semibold text-white">
              One better interview answer can justify it. One checklist can save hours. One mental model can improve
              multiple interviews. Price increases as more notes, examples, checklists, and practice tasks are added.
            </p>
          </div>
        </div>
      </section>
      <section className="border-b border-line bg-panel/20">
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
