import type { NoteMeta } from "@/lib/notes";
import { Badge } from "./Badge";

export function LessonLayout({ note, children }: { note: NoteMeta; children: React.ReactNode }) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="flex flex-wrap gap-2">
        <Badge tone="accent">{note.track}</Badge>
        <Badge tone={note.status === "free" ? "free" : "locked"}>{note.status === "free" ? "Free" : "Locked"}</Badge>
      </div>
      <h1 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-5xl">{note.title}</h1>
      <p className="mt-5 text-lg leading-8 text-muted">{note.summary}</p>
      <div className="lesson-content mt-10">{children}</div>
    </article>
  );
}
