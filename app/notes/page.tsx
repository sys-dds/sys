import { NoteCard } from "@/components/NoteCard";
import { getAllNotes } from "@/lib/notes";

export const metadata = {
  title: "Notes",
};

export default function NotesPage() {
  const notes = getAllNotes();
  const freeNotes = notes.filter((note) => note.status === "free");
  const lockedNotes = notes.filter((note) => note.status === "locked");

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-signal">Notes</p>
        <h1 className="mt-4 text-4xl font-bold text-white">Interview notes that teach answer quality.</h1>
        <p className="mt-5 text-base leading-8 text-muted">
          Free notes are complete samples. Locked notes are previews for the future Early Access pack.
        </p>
      </div>
      <section className="mt-10">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-signal">Start here</p>
            <h2 className="mt-2 text-2xl font-bold text-white">Read these complete free samples first.</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted">
            They show the teaching pattern: question, weak answer, senior answer, checklist, practice task, mental model.
          </p>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {freeNotes.map((note) => (
            <NoteCard key={note.slug} note={note} emphasis />
          ))}
        </div>
      </section>
      <section className="mt-14">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ember">Locked previews</p>
            <h2 className="mt-2 text-2xl font-bold text-white">See what Early Access will expand.</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted">
            Useful previews, not empty teasers. Full paid content is not included yet.
          </p>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {lockedNotes.map((note) => (
          <NoteCard key={note.slug} note={note} />
          ))}
        </div>
      </section>
    </div>
  );
}
