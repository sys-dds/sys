import { RoadmapCard } from "@/components/RoadmapCard";
import { SectionNumber } from "@/components/SectionNumber";

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
  "Week 1: Server/client boundaries, state ownership, and component API judgement.",
  "Week 2: Rendering model, data fetching, caching, loading/error/empty states.",
  "Week 3: Testing, accessibility, performance, debugging, and review checklists.",
  "Week 4: Mock interview answers, bad-vs-good explanations, and proof pack.",
];

export default function RoadmapPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <SectionNumber number="01" label="Roadmap" />
        <h1 className="mt-4 text-4xl font-bold text-white">A practical path from feature builder to senior interview candidate.</h1>
        <p className="mt-5 text-base leading-8 text-muted">
          The first track is active now. The rest stay visible so the product direction is clear without pretending the
          MVP is already a full LMS.
        </p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {tracks.map((track) => (
          <RoadmapCard key={track.title} {...track} />
        ))}
      </div>
      <section className="mt-10 rounded-lg border border-line bg-panel/80 p-5">
        <SectionNumber number="02" label="First 30 days" />
        <h2 className="text-2xl font-bold text-white">First 30 days</h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
          A practical reading path for improving answer structure before adding more tracks.
        </p>
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
