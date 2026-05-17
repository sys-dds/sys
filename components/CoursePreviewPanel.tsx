import Link from "next/link";
import { Badge } from "./Badge";

const freeNotes = ["Server vs Client Components", "Frontend State Ownership", "Component API Design"];
const lockedNotes = ["React Rendering Model", "Data Fetching / Caching", "Interview Answer Patterns"];

export function CoursePreviewPanel() {
  return (
    <aside className="rounded-lg border border-line bg-panel/90 p-5">
      <div className="flex items-start justify-between gap-4 border-b border-line pb-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-signal">Active track</p>
          <h2 className="mt-2 text-xl font-bold text-white">Frontend System Design</h2>
        </div>
        <Badge tone="free">MVP</Badge>
      </div>
      <div className="grid gap-5 py-5 sm:grid-cols-2 lg:grid-cols-1">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Complete samples</p>
          <ol className="mt-3 space-y-2">
            {freeNotes.map((note, index) => (
              <li key={note} className="flex items-center justify-between gap-3 rounded-md border border-line/70 bg-ink/45 px-3 py-2">
                <span className="text-sm text-mist">{index + 1}. {note}</span>
                <Badge tone="free">Free</Badge>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Early Access previews</p>
          <ol className="mt-3 space-y-2">
            {lockedNotes.map((note, index) => (
              <li key={note} className="flex items-center justify-between gap-3 rounded-md border border-line/70 bg-ink/45 px-3 py-2">
                <span className="text-sm text-mist">{index + 4}. {note}</span>
                <Badge tone="locked">Locked</Badge>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="border-t border-line pt-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Early Access</p>
            <p className="mt-1 text-2xl font-bold text-white">£19</p>
          </div>
          <p className="max-w-44 text-right text-xs leading-5 text-ember">Price increases as content grows.</p>
        </div>
        <Link href="/notes" className="mt-4 inline-flex w-full justify-center rounded-md bg-signal px-4 py-3 text-sm font-bold text-ink transition hover:bg-signal/90">
          Open course notes
        </Link>
      </div>
    </aside>
  );
}
