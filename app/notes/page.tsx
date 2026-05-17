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
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="max-w-3xl">
          <SectionNumber number="01" label="Course entry" />
          <h1 className="mt-4 text-3xl font-bold leading-tight text-white">Frontend System Design course notes.</h1>
          <p className="mt-4 text-base leading-7 text-muted">
            A structured interview-prep notebook, not a loose blog archive. Start with server/client boundaries, then move
            through state ownership, component APIs, rendering, data fetching, and answer patterns.
          </p>
          <p className="mt-4 text-sm leading-6 text-mist">
            Free notes are complete samples. Locked notes are previews for the future Early Access pack.
          </p>
          <div className="mt-6">
            <StartHereBlock firstNote={firstNote} />
          </div>
        </div>
        <aside className="bg-gradient-to-b from-panel/55 to-transparent px-5 py-4 ring-1 ring-line/50">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-signal">Active track</p>
          <h2 className="mt-2 text-xl font-bold text-white">Frontend System Design</h2>
          <ol className="mt-4 space-y-1 text-sm text-mist">
            {notes.map((note) => (
              <li key={note.slug} className="flex items-start justify-between gap-3 border-t border-line/60 py-2 first:border-t-0">
                <span>
                  <span className="block text-sm font-semibold text-white"><span className="mr-2 font-mono text-muted">{note.order}</span>{note.title}</span>
                  <span className="mt-1.5 block">
                    <Badge tone={note.status === "free" ? "free" : "locked"}>{note.status === "free" ? "Free" : "Locked"}</Badge>
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </aside>
      </div>
      <section className="mt-10 border-t border-line/70 pt-7">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionNumber number="02" label="Complete samples" />
            <h2 className="mt-2 text-2xl font-semibold text-white">Read these complete free samples first.</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted">
            They show the teaching pattern: question, weak answer, senior answer, checklist, practice task, mental model.
          </p>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {freeNotes.map((note) => (
            <NoteCard key={note.slug} note={note} emphasis />
          ))}
        </div>
      </section>
      <section className="mt-10 border-t border-line/70 pt-7">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionNumber number="03" label="Early Access previews" />
            <h2 className="mt-2 text-2xl font-semibold text-white">See what Early Access will expand.</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted">
            Useful previews, not empty teasers. Full paid content is not included yet.
          </p>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {lockedNotes.map((note) => (
            <NoteCard key={note.slug} note={note} />
          ))}
        </div>
      </section>
    </div>
  );
}
