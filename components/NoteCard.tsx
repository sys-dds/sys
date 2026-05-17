import Link from "next/link";
import type { NoteMeta } from "@/lib/notes";
import { Badge } from "./Badge";

export function NoteCard({ note }: { note: NoteMeta }) {
  const isFree = note.status === "free";

  return (
    <article className="rounded-lg border border-line bg-panel p-5 transition hover:border-mist/50">
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone="accent">{note.track}</Badge>
        <Badge tone={isFree ? "free" : "locked"}>{isFree ? "Free" : "Locked"}</Badge>
      </div>
      <h2 className="mt-4 text-xl font-bold text-white">
        <Link href={`/notes/${note.slug}`} className="hover:text-signal">
          {note.title}
        </Link>
      </h2>
      <p className="mt-3 text-sm leading-6 text-muted">{note.summary}</p>
      <Link href={`/notes/${note.slug}`} className="mt-5 inline-flex text-sm font-semibold text-signal hover:text-white">
        Read note
      </Link>
    </article>
  );
}
