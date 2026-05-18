import Link from "next/link";
import { getContentIndex } from "@/lib/vault";

export const metadata = {
  title: "Vault",
  description: "Browse the System Design Mastery Markdown vault by track, access level, and topic.",
};

export default function VaultPage() {
  const index = getContentIndex();
  const tracks = Object.entries(index.byTrack);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-signal">Markdown vault</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Senior-interview notes from files.</h1>
        <p className="mt-4 text-base leading-7 text-muted">
          This vault is sourced from Obsidian-compatible Markdown files in <span className="font-mono text-mist">content-vault/</span>. Free notes
          render in full. Founder notes stay server-side and show locked metadata until real access control exists.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="border border-line/70 bg-panel/50 p-5">
          <p className="text-sm text-muted">Published notes</p>
          <p className="mt-2 text-3xl font-semibold text-white">{index.all.length}</p>
        </div>
        <div className="border border-line/70 bg-panel/50 p-5">
          <p className="text-sm text-muted">Free notes</p>
          <p className="mt-2 text-3xl font-semibold text-signal">{index.free.length}</p>
        </div>
        <div className="border border-line/70 bg-panel/50 p-5">
          <p className="text-sm text-muted">Founder previews</p>
          <p className="mt-2 text-3xl font-semibold text-ember">{index.founder.length}</p>
        </div>
      </div>

      <div className="mt-10 space-y-8">
        {tracks.map(([track, notes]) => (
          <section key={track} className="border-t border-line/70 pt-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Track</p>
                <h2 className="mt-1 text-2xl font-semibold text-white">{track}</h2>
              </div>
              <p className="text-sm text-muted">{notes.length} notes</p>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {notes.map((note) => (
                <Link
                  key={note.id}
                  href={`/vault/${note.slug}`}
                  className="group border border-line/70 bg-panel/45 p-5 transition hover:border-signal/35 hover:bg-panel/70"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${
                        note.access === "free"
                          ? "border-signal/30 bg-signal/10 text-signal"
                          : "border-ember/30 bg-ember/10 text-ember"
                      }`}
                    >
                      {note.access === "free" ? "Free" : "Founder locked"}
                    </span>
                    <span className="rounded-full border border-line/70 px-2.5 py-1 text-xs text-muted">{note.category}</span>
                    <span className="text-xs text-muted">{note.minutes} min</span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white transition group-hover:text-signal">{note.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{note.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {note.tags.map((tag) => (
                      <span key={tag} className="font-mono text-xs text-mist">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
