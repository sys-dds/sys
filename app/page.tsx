import Link from "next/link";
import { Hero } from "@/components/Hero";
import { SectionNumber } from "@/components/SectionNumber";

const tracks = [
  {
    label: "Frontend engineering",
    title: "Architecture, ownership, and UI system judgement.",
    body: "React, Next.js, TypeScript, component APIs, state ownership, rendering, performance, testing, and accessibility.",
  },
  {
    label: "Java backend engineering",
    title: "APIs, data consistency, and backend system design.",
    body: "Java 21, Spring Boot, PostgreSQL, validation, transactions, caching, idempotency, testing, and observability.",
  },
  {
    label: "DevOps / production engineering",
    title: "Operate systems when the interview leaves the happy path.",
    body: "Docker, CI/CD, environment config, logs, metrics, tracing, health checks, rollbacks, incidents, and production debugging.",
  },
];

const outcomes = [
  "Explain trade-offs without rambling.",
  "Turn vague prompts into structured answers.",
  "Review code with senior-level risk awareness.",
  "Debug production issues with a clear operating model.",
  "Connect frontend, backend, and infrastructure decisions.",
  "Sound practical, measured, and ready for senior responsibility.",
];

const valueItems = [
  "Senior answer patterns",
  "Bad-vs-good examples",
  "Decision checklists",
  "Practice scenarios",
  "Mental models",
  "Future MVP updates",
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <SectionNumber number="02" label="Positioning" />
            <h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight text-white">
              Not a tutorial library. A senior interview preparation system.
            </h2>
          </div>
          <div className="grid gap-5 text-base leading-8 text-mist">
            <p>
              Most experienced developers do not fail senior interviews because they cannot code. They lose signal when
              the conversation moves into ambiguity: what to optimise, what to defer, what can break, how to review a
              design, and how to explain the trade-off without sounding theoretical.
            </p>
            <p className="border-l border-signal/70 pl-5 font-medium text-white">
              System Design Mastery trains the language of judgement: the answer structure, the risk framing, the
              practical checklist, and the mental model behind the decision.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-line/70 bg-gradient-to-b from-panel/35 to-transparent">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionNumber number="03" label="Tracks" />
              <h2 className="mt-4 text-3xl font-semibold text-white">Built around the work senior engineers actually do.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-muted">
              The first public notes start with frontend system design. The product direction covers frontend, Java
              backend, and production engineering interviews.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {tracks.map((track, index) => (
              <article key={track.label} className="border-t border-line/70 pt-5">
                <p className="font-mono text-xs text-signal">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted">{track.label}</p>
                <h3 className="mt-3 text-xl font-semibold leading-snug text-white">{track.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{track.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionNumber number="04" label="What changes" />
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white">
              The goal is not more facts. It is better interview signal.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              The notes are written around the pattern that matters in senior interviews: question, weak answer, senior
              answer, why it works, practical example, checklist, practice task, and final mental model.
            </p>
          </div>
          <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {outcomes.map((outcome) => (
              <div key={outcome} className="flex gap-3 border-b border-line/60 py-3 text-sm font-medium text-mist">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                <span>{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line/70 bg-[#0f151a]/60">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <SectionNumber number="05" label="£19 Early Access" />
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white">Make the price feel boring.</h2>
          </div>
          <div>
            <p className="max-w-3xl text-base leading-8 text-mist">
              Early Access is for developers who want a sharper preparation system before the full library exists. You
              get the public samples now and help fund the deeper pack: stronger examples, answer banks, checklists, and
              practice tasks across frontend, Java backend, and production engineering.
            </p>
            <p className="mt-5 border-l border-signal/70 pl-5 text-lg font-semibold leading-8 text-white">
              If one answer helps you sound more senior in an interview, the £19 has already paid for itself.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {valueItems.map((item) => (
                <div key={item} className="border-t border-line/70 pt-3 text-sm font-medium text-mist">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <SectionNumber number="06" label="Start" />
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white">Start with the free samples. Judge the method.</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
              The current library is intentionally small and practical. Read the free notes first. If the answer style
              makes you clearer, the Early Access offer is the next step.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link href="/notes" className="rounded-full bg-white px-5 py-3 text-center text-sm font-bold text-ink">
              Browse free notes
            </Link>
            <Link href="/roadmap" className="rounded-full border border-line px-5 py-3 text-center text-sm font-bold text-white hover:bg-white/5">
              View roadmap
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
