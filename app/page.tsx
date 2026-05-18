import Link from "next/link";
import { Hero } from "@/components/Hero";

const tracks = [
  {
    label: "Frontend Engineering",
    title: "Design UI systems with senior-level trade-offs.",
    body: "React, Next.js, TypeScript, component APIs, state ownership, rendering, performance, testing, and accessibility.",
    accent: "bg-emerald-50 text-emerald-700 ring-emerald-100",
  },
  {
    label: "Java Backend Engineering",
    title: "Explain APIs, data, transactions, and backend design.",
    body: "Java 21, Spring Boot, PostgreSQL, validation, transactions, caching, idempotency, testing, and observability.",
    accent: "bg-blue-50 text-blue-700 ring-blue-100",
  },
  {
    label: "DevOps / Production",
    title: "Reason through incidents, deployments, and operations.",
    body: "Docker, CI/CD, environment config, logs, metrics, tracing, health checks, rollback strategy, and production debugging.",
    accent: "bg-amber-50 text-amber-700 ring-amber-100",
  },
];

const modules = [
  "Interview question",
  "Weak answer",
  "Senior answer",
  "Why it works",
  "Practical checklist",
  "Practice task",
];

const outcomes = [
  "Frame ambiguous prompts without panic.",
  "Name trade-offs clearly and practically.",
  "Review code through risk, ownership, and maintainability.",
  "Debug production issues with logs, metrics, traces, and rollback thinking.",
  "Connect frontend, backend, and infrastructure decisions.",
  "Answer like someone trusted with senior responsibility.",
];

const paidValue = [
  "Deeper senior answer patterns",
  "Bad-vs-good answer examples",
  "Frontend and backend design checklists",
  "Production debugging scenarios",
  "Practice tasks for interview rehearsal",
  "Future MVP updates as the library grows",
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">{children}</p>;
}

export default function HomePage() {
  return (
    <div className="bg-[#f6f8fb] text-[#101828]">
      <Hero />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200/80 lg:grid-cols-[0.85fr_1.15fr] lg:p-8">
          <div>
            <Eyebrow>Why it exists</Eyebrow>
            <h2 className="mt-4 max-w-md text-3xl font-bold leading-tight tracking-[-0.02em] text-slate-950">
              Senior interviews are not asking for tutorial memory.
            </h2>
          </div>
          <div className="grid gap-5 text-base leading-8 text-slate-600">
            <p>
              Experienced developers often know the tools already. The hard part is explaining the decision: what matters,
              what can fail, what you would defer, and how you would debug it when the system is live.
            </p>
            <p className="rounded-2xl bg-slate-950 px-5 py-4 font-medium text-white">
              System Design Mastery trains the practical judgement behind senior answers: trade-offs, constraints,
              ownership, production awareness, and communication under ambiguity.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>Interview tracks</Eyebrow>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight tracking-[-0.02em] text-slate-950">
              Built around the engineering conversations senior loops actually test.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-600">
            The first public notes start with frontend system design. The paid roadmap expands across Java backend and
            production engineering.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {tracks.map((track, index) => (
            <article key={track.label} className="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-slate-200/80">
              <div className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ring-1 ${track.accent}`}>
                {String(index + 1).padStart(2, "0")} / {track.label}
              </div>
              <h3 className="mt-5 text-xl font-bold leading-snug tracking-[-0.01em] text-slate-950">{track.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{track.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Eyebrow>Learning format</Eyebrow>
            <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight tracking-[-0.02em] text-slate-950">
              Every note is built to improve how you answer, not just what you know.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              The method is deliberately repeatable: see the prompt, compare a weak answer with a senior answer, learn
              why the better answer works, then practise the same judgement yourself.
            </p>
          </div>
          <div className="rounded-[2rem] bg-slate-950 p-6 text-white shadow-xl shadow-slate-950/10">
            <div className="grid gap-3 sm:grid-cols-2">
              {modules.map((module, index) => (
                <div key={module} className="rounded-2xl bg-white/7 p-4 ring-1 ring-white/10">
                  <p className="font-mono text-xs text-emerald-300">{String(index + 1).padStart(2, "0")}</p>
                  <p className="mt-2 text-sm font-semibold">{module}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <Eyebrow>What changes</Eyebrow>
            <h2 className="mt-4 max-w-md text-3xl font-bold leading-tight tracking-[-0.02em] text-slate-950">
              Better signal in the moments that decide the interview.
            </h2>
          </div>
          <div className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
            {outcomes.map((outcome) => (
              <div key={outcome} className="flex gap-3 border-b border-slate-200 py-4 text-sm font-medium leading-6 text-slate-700">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                <span>{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-[#10251f] p-6 text-white shadow-2xl shadow-slate-950/20 lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">£19 Early Access</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.02em]">
                Low-risk prep for a high-leverage interview loop.
              </h2>
            </div>
            <div>
              <p className="text-base leading-8 text-slate-200">
                Early Access is for developers who want the sharper preparation system before the full library exists:
                stronger examples, answer banks, checklists, and practice tasks across frontend, Java backend, and
                production engineering.
              </p>
              <p className="mt-5 rounded-2xl bg-white px-5 py-4 text-lg font-bold leading-8 text-slate-950">
                If one answer helps you sound more senior in an interview, the £19 has already paid for itself.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {paidValue.map((item) => (
                  <div key={item} className="rounded-2xl bg-white/8 p-4 text-sm font-medium text-slate-100 ring-1 ring-white/10">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14 pt-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200/80 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:p-8">
          <div>
            <Eyebrow>Start here</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.02em] text-slate-950">
              Read the free samples. Judge the answer style.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              The current public library is intentionally small and practical. Start there, then use the roadmap and
              pricing page to decide whether the Early Access pack is worth joining.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link href="/notes" className="rounded-full bg-slate-950 px-5 py-3 text-center text-sm font-bold text-white hover:bg-slate-800">
              Browse free notes
            </Link>
            <Link href="/roadmap" className="rounded-full border border-slate-300 bg-white px-5 py-3 text-center text-sm font-bold text-slate-950 hover:border-slate-400">
              View roadmap
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
