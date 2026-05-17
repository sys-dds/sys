import Link from "next/link";
import type { NoteMeta } from "@/lib/notes";

type StartHereBlockProps = {
  firstNote?: NoteMeta;
};

export function StartHereBlock({ firstNote }: StartHereBlockProps) {
  return (
    <div className="border border-line bg-surface/55 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-signal">Start here</p>
      <h2 className="mt-2 text-xl font-bold text-white">Begin with the first complete sample.</h2>
      <p className="mt-3 text-sm leading-6 text-muted">
        The sequence starts with server/client boundaries because it forces you to explain ownership, data flow, and
        trade-offs before reaching for tools.
      </p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        {firstNote ? (
          <Link href={`/notes/${firstNote.slug}`} className="rounded-md bg-signal px-4 py-2.5 text-center text-sm font-bold text-ink transition hover:bg-signal/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-signal/40">
            Start first note
          </Link>
        ) : null}
        <Link href="/pricing" className="rounded-md border border-line px-4 py-2.5 text-center text-sm font-bold text-white transition hover:bg-ink/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-signal/40">
          See £19 Early Access
        </Link>
      </div>
    </div>
  );
}
