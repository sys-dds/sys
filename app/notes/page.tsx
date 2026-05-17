import { NoteCard } from "@/components/NoteCard";
import { getAllNotes } from "@/lib/notes";

export const metadata = {
  title: "Notes",
};

export default function NotesPage() {
  const notes = getAllNotes();

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-signal">Notes</p>
        <h1 className="mt-4 text-4xl font-bold text-white">Interview notes that teach answer quality.</h1>
        <p className="mt-5 text-base leading-8 text-muted">
          Browse the MVP library. Free notes are fully available; locked notes show a useful preview and a simple upgrade CTA.
        </p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {notes.map((note) => (
          <NoteCard key={note.slug} note={note} />
        ))}
      </div>
    </div>
  );
}
