import Link from "next/link";
import { Badge } from "./Badge";

const readinessRows = [
  ["Frontend", "React, Next.js, TypeScript, state, rendering, accessibility"],
  ["Java backend", "Java 21, Spring Boot, PostgreSQL, APIs, transactions"],
  ["Production", "Docker, CI/CD, config, logs, metrics, tracing, rollback"],
];

const proofPoints = ["Senior answer patterns", "Bad-vs-good examples", "Checklists and practice tasks"];

export function CoursePreviewPanel() {
  return (
    <aside className="relative overflow-hidden bg-[#0f151a]/85 px-5 py-5 ring-1 ring-line/60">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-signal/80 via-ember/40 to-transparent" />
      <div className="flex items-start justify-between gap-4 border-b border-line/60 pb-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-signal">Early Access</p>
          <h2 className="mt-1.5 text-xl font-semibold text-white">Interview readiness system</h2>
          <p className="mt-2 max-w-sm text-xs leading-5 text-muted">
            Built for engineers who need stronger answers, not more beginner tutorials.
          </p>
        </div>
        <div className="text-right">
          <p className="font-mono text-2xl font-semibold text-white">£19</p>
          <p className="mt-1 text-[0.65rem] uppercase tracking-[0.16em] text-ember">Early price</p>
        </div>
      </div>
      <div className="py-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Engineering tracks</p>
        <ol className="mt-3 space-y-3">
          {readinessRows.map(([label, body], index) => (
            <li key={label} className="grid grid-cols-[2rem_1fr] gap-3 border-t border-line/50 pt-3 first:border-t-0 first:pt-0">
              <span className="font-mono text-xs text-signal">{String(index + 1).padStart(2, "0")}</span>
              <span>
                <span className="block text-sm font-semibold text-white">{label}</span>
                <span className="mt-1 block text-xs leading-5 text-muted">{body}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
      <div className="border-t border-line/60 pt-4">
        <div className="grid gap-2">
          {proofPoints.map((point) => (
            <div key={point} className="flex items-center gap-2 text-xs text-mist">
              <span className="h-1 w-1 rounded-full bg-signal" />
              <span>{point}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs leading-5 text-ember">Price increases as more notes, examples, and practice tasks are added.</p>
        <Link href="/notes" className="mt-4 inline-flex w-full justify-center rounded-full bg-signal px-4 py-2.5 text-sm font-bold text-ink transition hover:bg-signal/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-signal/40">
          Open the free sample notes
        </Link>
      </div>
    </aside>
  );
}
