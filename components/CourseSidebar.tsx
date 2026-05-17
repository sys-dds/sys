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
    <aside className="border-line lg:sticky lg:top-20 lg:border-r lg:pr-5">
      <div>
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-signal">Track</p>
        <div className="mt-2 flex items-center justify-between gap-3">
          <h2 className="text-sm font-semibold text-white">Frontend System Design</h2>
          <Badge tone="free">Active</Badge>
        </div>
      </div>
      <nav className="mt-4 space-y-0.5" aria-label="Frontend System Design notes">
        {notes.map((note) => (
          <CourseNavItem key={note.slug} note={note} activeSlug={activeSlug} />
        ))}
      </nav>
      <div className="mt-6 border-t border-line/80 pt-5">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted">Future tracks</p>
        <div className="mt-3 space-y-1">
          {plannedTracks.map((track) => (
            <div key={track} className="flex items-center justify-between gap-3 px-2 py-1.5">
              <span className="text-xs leading-5 text-muted">{track}</span>
              <Badge>Planned</Badge>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
