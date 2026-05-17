import { RoadmapCard } from "@/components/RoadmapCard";

const tracks = [
  {
    title: "Frontend System Design",
    status: "Active / In Progress" as const,
    summary: "Design resilient client experiences, component boundaries, state ownership, rendering strategy, and API contracts.",
    bullets: ["State placement", "Component APIs", "Rendering and caching"],
  },
  {
    title: "Backend System Design",
    status: "Planned" as const,
    summary: "Reason about APIs, data models, scaling constraints, reliability, queues, consistency, and failure modes.",
    bullets: ["Data flow", "API shape", "Reliability trade-offs"],
  },
  {
    title: "DevOps / Production",
    status: "Planned" as const,
    summary: "Build the vocabulary for deployment, observability, incident thinking, capacity, and operational readiness.",
    bullets: ["Monitoring", "Rollback plans", "Production debugging"],
  },
  {
    title: "Senior Interview Answers",
    status: "Planned" as const,
    summary: "Turn rough instincts into structured answers that show trade-offs, constraints, ownership, and judgement.",
    bullets: ["Clarifying questions", "Option framing", "Decision narratives"],
  },
  {
    title: "Code Review Judgement",
    status: "Planned" as const,
    summary: "Learn how seniors review for behavior, maintainability, performance, risk, and team context.",
    bullets: ["Risk spotting", "API review", "Maintainability language"],
  },
];

const starterPlan = [
  "Week 1: Frontend architecture and server/client boundaries",
  "Week 2: State ownership, rendering, and data fetching",
  "Week 3: Component API design, testing, accessibility, and performance",
  "Week 4: Senior interview answers, code review, trade-offs, and proof pack",
];

export default function RoadmapPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-signal">Roadmap</p>
        <h1 className="mt-4 text-4xl font-bold text-white">A focused path from feature builder to senior interview candidate.</h1>
        <p className="mt-5 text-base leading-8 text-muted">
          Use these tracks to study architecture judgement without pretending every topic needs a full course.
        </p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {tracks.map((track) => (
          <RoadmapCard key={track.title} {...track} />
        ))}
      </div>
      <section className="mt-14 rounded-lg border border-line bg-panel p-6">
        <h2 className="text-2xl font-bold text-white">30-day starter plan</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {starterPlan.map((item) => (
            <div key={item} className="rounded-md border border-line bg-ink/40 p-4 text-sm leading-6 text-mist">
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
