import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { userHasFounderAccess } from "@/lib/access";
import { getContentIndex, getFreeVaultSlugs, getFullNoteBySlug, getNoteMetaBySlug } from "@/lib/vault";

type VaultNotePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";
export const dynamicParams = true;

export function generateStaticParams() {
  return getFreeVaultSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: VaultNotePageProps) {
  const { slug } = await params;
  const note = getNoteMetaBySlug(slug);

  if (!note) {
    return {};
  }

  return {
    title: note.title,
    description: note.summary,
  };
}

export default async function VaultNotePage({ params }: VaultNotePageProps) {
  const { slug } = await params;
  const meta = getNoteMetaBySlug(slug);

  if (!meta) {
    notFound();
  }

  const founderAccess = await userHasFounderAccess();
  const canRenderFullNote = meta.access === "free" || founderAccess.hasAccess;
  const fullNote = canRenderFullNote ? getFullNoteBySlug(slug, { founderAccessConfirmed: founderAccess.hasAccess }) : undefined;
  const index = getContentIndex();
  const relatedTrackNotes = index.byTrack[meta.track] ?? [];

  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[260px_minmax(0,760px)] lg:px-8">
      <aside className="lg:sticky lg:top-20 lg:self-start">
        <div className="border border-line/70 bg-panel/45 p-4">
          <Link href="/vault" className="text-xs font-semibold uppercase tracking-[0.16em] text-signal">
            Vault index
          </Link>
          <h2 className="mt-3 text-sm font-semibold text-white">{meta.track}</h2>
          <nav className="mt-3 space-y-1" aria-label={`${meta.track} notes`}>
            {relatedTrackNotes.map((note) => (
              <Link
                key={note.id}
                href={`/vault/${note.slug}`}
                className={`block border-l px-3 py-2 text-sm transition ${
                  note.slug === meta.slug
                    ? "border-signal bg-signal/10 text-white"
                    : "border-line/70 text-muted hover:border-signal/45 hover:bg-white/[0.03] hover:text-mist"
                }`}
              >
                <span className="block font-medium">{note.title}</span>
                <span className={note.access === "free" ? "text-xs text-signal" : "text-xs text-ember"}>
                  {note.access === "free" ? "Free" : "Founder"}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      <article className="min-w-0">
        <div className="border-b border-line/70 pb-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-line/70 px-2.5 py-1 text-xs text-muted">{meta.track}</span>
            <span
              className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${
                meta.access === "free" ? "border-signal/30 bg-signal/10 text-signal" : "border-ember/30 bg-ember/10 text-ember"
              }`}
            >
              {meta.access === "free" ? "Free" : founderAccess.hasAccess ? "Founder" : "Founder locked"}
            </span>
            <span className="text-xs text-muted">Updated {meta.updated}</span>
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{meta.title}</h1>
          <p className="mt-4 text-base leading-7 text-muted">{meta.summary}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {meta.tags.map((tag) => (
              <span key={tag} className="font-mono text-xs text-mist">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {fullNote ? (
          <div className="prose prose-invert mt-8 max-w-none prose-headings:tracking-tight prose-p:text-mist prose-li:text-mist prose-strong:text-white prose-blockquote:border-signal prose-blockquote:text-mist">
            <MDXRemote source={fullNote.content} />
          </div>
        ) : (
          <section className="mt-8 border-y border-ember/40 bg-ember/10 py-6">
            <h2 className="text-2xl font-semibold text-white">Founder note locked</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-mist">
              This page intentionally renders metadata only. The full Markdown body stays server-side until real founder access exists.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="border border-ember/25 bg-black/10 p-4">
                <p className="text-sm font-semibold text-ember">What you can see now</p>
                <p className="mt-2 text-sm leading-6 text-muted">Title, summary, tags, track, reading time, and locked state.</p>
              </div>
              <div className="border border-ember/25 bg-black/10 p-4">
                <p className="text-sm font-semibold text-ember">What is protected</p>
                <p className="mt-2 text-sm leading-6 text-muted">The raw founder Markdown content is not passed into this rendered page.</p>
              </div>
            </div>
            <Link
              href="/pricing"
              className="mt-5 inline-flex rounded-md bg-ember px-4 py-2.5 text-sm font-bold text-ink transition hover:bg-ember/90"
            >
              View founder access
            </Link>
          </section>
        )}
      </article>
    </div>
  );
}
