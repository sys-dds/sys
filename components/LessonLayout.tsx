import type { NoteMeta } from "@/lib/notes";
import { Badge } from "./Badge";

export function LessonLayout({ note, children }: { note: NoteMeta; children: React.ReactNode }) {
  return (
    <article className="max-w-[50rem]">
      <div className="flex flex-wrap gap-2">
        <Badge tone="accent">{note.track}</Badge>
        <Badge tone={note.status === "free" ? "free" : "locked"}>{note.status === "free" ? "Free" : "Locked"}</Badge>
      </div>
      <h1 className="mt-5 text-4xl font-bold leading-tight text-white md:text-[2.75rem]">{note.title}</h1>
      <p className="mt-4 max-w-3xl text-base leading-8 text-muted md:text-lg">{note.summary}</p>
      <div className="mt-8 border-t border-line" />
      <div className="lesson-content mt-8">{children}</div>
    </article>
  );
}
