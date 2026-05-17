import Link from "next/link";
import type { NoteMeta } from "@/lib/notes";
import { Badge } from "./Badge";

type PreviousNextNoteNavProps = {
  previous?: NoteMeta;
  next?: NoteMeta;
};

function NoteLink({ note, direction }: { note: NoteMeta; direction: "Previous" | "Next" }) {
  return (
    <Link
      href={`/notes/${note.slug}`}
      className="block border-t border-line py-4 transition hover:border-mist/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-signal/40"
    >
      <span className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted">{direction}</span>
      <span className="mt-1 block text-sm font-semibold text-white">{note.title}</span>
      <span className="mt-2 block">
        <Badge tone={note.status === "free" ? "free" : "locked"}>{note.status === "free" ? "Free" : "Locked"}</Badge>
      </span>
    </Link>
  );
}

export function PreviousNextNoteNav({ previous, next }: PreviousNextNoteNavProps) {
  return (
    <nav className="mt-10 grid gap-5 sm:grid-cols-2" aria-label="Previous and next notes">
      {previous ? <NoteLink note={previous} direction="Previous" /> : <div />}
      {next ? <NoteLink note={next} direction="Next" /> : <div />}
    </nav>
  );
}
