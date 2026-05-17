import Link from "next/link";
import { Badge } from "./Badge";

const freeNotes = ["Server vs Client Components", "Frontend State Ownership", "Component API Design"];
const lockedNotes = ["React Rendering Model", "Data Fetching / Caching", "Interview Answer Patterns"];

export function CoursePreviewPanel() {
  return (
    <aside className="relative overflow-hidden bg-gradient-to-b from-panel/70 to-surface/20 px-5 py-4 ring-1 ring-line/60">
      <div className="absolute inset-y-0 left-0 w-px bg-signal/70" />
      <div className="flex items-start justify-between gap-4 border-b border-line/60 pb-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-signal">Active track</p>
          <h2 className="mt-1.5 text-lg font-bold text-white">Frontend System Design</h2>
          <p className="mt-2 max-w-sm text-xs leading-5 text-muted">A compact path from architecture judgement to interview-ready answers.</p>
        </div>
        <Badge tone="free">MVP</Badge>
      </div>
      <div className="grid gap-5 py-5 sm:grid-cols-2 lg:grid-cols-1">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Complete samples</p>
          <ol className="mt-3 space-y-1">
            {freeNotes.map((note, index) => (
              <li key={note} className="flex items-center justify-between gap-3 border-t border-line/50 py-2 first:border-t-0">
                <span className="text-xs leading-5 text-mist"><span className="mr-2 font-mono text-muted">{index + 1}</span>{note}</span>
                <Badge tone="free">Free</Badge>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Early Access previews</p>
          <ol className="mt-3 space-y-1">
            {lockedNotes.map((note, index) => (
              <li key={note} className="flex items-center justify-between gap-3 border-t border-line/50 py-2 first:border-t-0">
                <span className="text-xs leading-5 text-mist"><span className="mr-2 font-mono text-muted">{index + 4}</span>{note}</span>
                <Badge tone="locked">Locked</Badge>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="border-t border-line/60 pt-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Early Access</p>
            <p className="mt-1 text-xl font-bold text-white">£19</p>
          </div>
          <p className="max-w-44 text-right text-xs leading-5 text-ember">Price increases as content grows.</p>
        </div>
        <Link href="/notes" className="mt-3 inline-flex w-full justify-center rounded-md bg-signal px-4 py-2.5 text-sm font-bold text-ink transition hover:bg-signal/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-signal/40">
          Open course notes
        </Link>
      </div>
    </aside>
  );
}
