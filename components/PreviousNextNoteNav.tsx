import Link from "next/link";
import type { NoteMeta } from "@/lib/notes";
import { Badge } from "./Badge";

type PreviousNextNoteNavProps = {
  previous?: NoteMeta;
  next?: NoteMeta;
};

function NoteLink({ note, direction }: { note: NoteMeta; direction: "Previous" | "Next" }) {
  return (
    <Link href={`/notes/${note.slug}`} className="rounded-lg border border-line bg-panel/80 p-4 transition hover:border-mist/50 focus:outline-none focus:ring-2 focus:ring-line">
      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">{direction}</span>
      <span className="mt-2 block text-base font-bold text-white">{note.title}</span>
      <span className="mt-3 block">
        <Badge tone={note.status === "free" ? "free" : "locked"}>{note.status === "free" ? "Free" : "Locked"}</Badge>
      </span>
    </Link>
  );
}

export function PreviousNextNoteNav({ previous, next }: PreviousNextNoteNavProps) {
  return (
    <nav className="mt-12 grid gap-4 border-t border-line pt-8 sm:grid-cols-2" aria-label="Previous and next notes">
      {previous ? <NoteLink note={previous} direction="Previous" /> : <div />}
      {next ? <NoteLink note={next} direction="Next" /> : <div />}
    </nav>
  );
}
