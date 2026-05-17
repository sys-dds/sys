import { NoteCard } from "@/components/NoteCard";
import { Badge } from "@/components/Badge";
import { SectionNumber } from "@/components/SectionNumber";
import { StartHereBlock } from "@/components/StartHereBlock";
import { getAllNotes } from "@/lib/notes";

export const metadata = {
  title: "Notes",
};

export default function NotesPage() {
  const notes = getAllNotes();
  const freeNotes = notes.filter((note) => note.status === "free");
  const lockedNotes = notes.filter((note) => note.status === "locked");
  const firstNote = notes[0];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="max-w-3xl">
          <SectionNumber number="01" label="Course entry" />
          <h1 className="mt-4 text-4xl font-bold leading-tight text-white">Frontend System Design course notes.</h1>
          <p className="mt-5 text-base leading-8 text-muted">
            A structured interview-prep notebook, not a loose blog archive. Start with server/client boundaries, then move
            through state ownership, component APIs, rendering, data fetching, and answer patterns.
          </p>
          <p className="mt-4 text-sm leading-6 text-mist">
            Free notes are complete samples. Locked notes are previews for the future Early Access pack.
          </p>
          <div className="mt-7">
            <StartHereBlock firstNote={firstNote} />
          </div>
        </div>
        <aside className="rounded-lg border border-line bg-panel/80 p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-signal">Active track</p>
          <h2 className="mt-3 text-2xl font-bold text-white">Frontend System Design</h2>
          <ol className="mt-5 space-y-3 text-sm text-mist">
            {notes.map((note) => (
              <li key={note.slug} className="flex items-start justify-between gap-3 rounded-md border border-line/70 bg-ink/35 p-3">
                <span>
                  <span className="block font-semibold text-white">{note.order}. {note.title}</span>
                  <span className="mt-2 block">
                    <Badge tone={note.status === "free" ? "free" : "locked"}>{note.status === "free" ? "Free" : "Locked"}</Badge>
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </aside>
      </div>
      <section className="mt-10 border-t border-line pt-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionNumber number="02" label="Complete samples" />
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
      <section className="mt-10 border-t border-line pt-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionNumber number="03" label="Early Access previews" />
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
