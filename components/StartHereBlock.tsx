import Link from "next/link";
import type { NoteMeta } from "@/lib/notes";

type StartHereBlockProps = {
  firstNote?: NoteMeta;
};

export function StartHereBlock({ firstNote }: StartHereBlockProps) {
  return (
    <div className="rounded-lg border border-line bg-panel/80 p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-signal">Start here</p>
      <h2 className="mt-3 text-2xl font-bold text-white">Begin with the first complete sample.</h2>
      <p className="mt-3 text-sm leading-6 text-muted">
        The sequence starts with server/client boundaries because it forces you to explain ownership, data flow, and
        trade-offs before reaching for tools.
      </p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        {firstNote ? (
          <Link href={`/notes/${firstNote.slug}`} className="rounded-md bg-signal px-4 py-3 text-center text-sm font-bold text-ink">
            Start first note
          </Link>
        ) : null}
        <Link href="/pricing" className="rounded-md border border-line px-4 py-3 text-center text-sm font-bold text-white">
          See £19 Early Access
        </Link>
      </div>
    </div>
  );
}
