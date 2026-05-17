import Link from "next/link";
import { Hero } from "@/components/Hero";
import { SectionNumber } from "@/components/SectionNumber";

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
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <SectionNumber number="02" label="Positioning" />
        <div className="mt-6 grid gap-x-8 gap-y-6 md:grid-cols-2">
          {sections.map((section, index) => (
            <article key={section.title} className="border-t border-line/70 pt-4">
              <p className="font-mono text-xs text-signal">{String(index + 1).padStart(2, "0")}</p>
              <h2 className="mt-3 text-lg font-semibold text-white">{section.title}</h2>
              <p className="mt-2 text-sm leading-7 text-muted">{section.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="border-y border-line/70 bg-gradient-to-b from-panel/30 to-transparent">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionNumber number="03" label="The problem" />
            <h2 className="mt-4 text-2xl font-semibold leading-tight text-white">
              You can be good at building software and still sound mid-level in interviews.
            </h2>
            <p className="mt-4 text-base leading-7 text-mist">
              Senior interviews are not only testing whether you know React, Next.js, APIs, or infrastructure terms. They
              test whether you can reason clearly when the problem is incomplete and the trade-offs are real.
            </p>
          </div>
          <div className="grid gap-x-7 gap-y-3 sm:grid-cols-2">
            {interviewSignals.map((signal) => (
              <div key={signal} className="flex items-center gap-3 border-b border-line/60 py-3 text-sm font-medium text-mist">
                <span className="h-1.5 w-1.5 rounded-full bg-signal/80" />
                <span>{signal}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-b border-line/70">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <SectionNumber number="04" label="Early Access" />
            <h2 className="mt-4 text-2xl font-semibold leading-tight text-white">What £19 is buying.</h2>
          </div>
          <div className="max-w-3xl text-base leading-7 text-mist">
            <p>
              Early Access is not just more notes. It is senior answer patterns, bad-vs-good examples, code review and
              frontend system design checklists, practice tasks, mental models, and future MVP updates.
            </p>
            <p className="mt-5 border-l border-signal/70 pl-5 font-semibold text-white">
              One better interview answer can justify it. One checklist can save hours. One mental model can improve
              multiple interviews. Price increases as more notes, examples, checklists, and practice tasks are added.
            </p>
          </div>
        </div>
      </section>
      <section className="border-b border-line/70 bg-gradient-to-b from-transparent to-surface/40">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionNumber number="05" label="Start the frontend track" />
            <h2 className="text-2xl font-semibold text-white">Built as personal senior-interview study notes</h2>
            <p className="mt-4 text-base leading-7 text-mist">
              The product starts from the notes you wish you had before a senior loop: how to frame ambiguity, compare
              options, explain constraints, debug production systems, and review code with judgement. MVP 0.1 keeps that
              shape intentionally simple.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/notes" className="rounded-full bg-white px-5 py-2.5 text-center text-sm font-bold text-ink">
                Browse notes
              </Link>
              <Link href="/roadmap" className="rounded-full border border-line px-5 py-2.5 text-center text-sm font-bold text-white">
                View roadmap
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
