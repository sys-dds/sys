import type { NoteMeta } from "@/lib/notes";
import { Badge } from "./Badge";
import { CourseNavItem } from "./CourseNavItem";

const plannedTracks = ["Backend System Design", "DevOps / Production", "Senior Interview Answers", "Code Review Judgement"];

type CourseSidebarProps = {
  notes: NoteMeta[];
  activeSlug?: string;
};

export function CourseSidebar({ notes, activeSlug }: CourseSidebarProps) {
  return (
    <aside className="rounded-lg border border-line bg-ink/80 p-4 lg:sticky lg:top-24">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-signal">Track</p>
        <div className="mt-3 flex items-center justify-between gap-3">
          <h2 className="text-base font-bold text-white">Frontend System Design</h2>
          <Badge tone="free">Active</Badge>
        </div>
      </div>
      <nav className="mt-5 space-y-2" aria-label="Frontend System Design notes">
        {notes.map((note) => (
          <CourseNavItem key={note.slug} note={note} activeSlug={activeSlug} />
        ))}
      </nav>
      <div className="mt-6 border-t border-line pt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Future tracks</p>
        <div className="mt-3 space-y-2">
          {plannedTracks.map((track) => (
            <div key={track} className="flex items-center justify-between gap-3 rounded-md border border-line/70 px-3 py-2">
              <span className="text-sm text-muted">{track}</span>
              <Badge>Planned</Badge>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
