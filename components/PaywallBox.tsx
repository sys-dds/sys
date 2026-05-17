import Link from "next/link";

export function PaywallBox() {
  return (
    <aside className="mt-10 rounded-lg border border-ember/40 bg-ember/10 p-6">
      <h2 className="text-xl font-bold text-white">Continue with the full note</h2>
      <p className="mt-3 text-sm leading-6 text-mist">
        This locked note is preview-only in MVP 0.1. Early Access will unlock deeper notes, checklists, bad-vs-good
        examples, interview answer patterns, practice tasks, and future MVP updates.
      </p>
      <Link
        href="/pricing"
        className="mt-5 inline-flex rounded-md bg-ember px-4 py-3 text-sm font-bold text-ink transition hover:bg-ember/90"
      >
        Early Access coming soon
      </Link>
    </aside>
  );
}
