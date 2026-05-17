import Link from "next/link";

export function PaywallBox() {
  return (
    <aside className="mt-10 rounded-lg border border-ember/40 bg-ember/10 p-5">
      <h2 className="text-xl font-bold text-white">Continue with the full note</h2>
      <p className="mt-3 text-sm leading-6 text-mist">
        This preview is useful by design, but the full Early Access pack will go deeper with decision trees,
        bad-vs-good answer examples, checklists, practice tasks, and interview-ready templates.
      </p>
      <Link
        href="/pricing"
        className="mt-5 inline-flex rounded-md bg-ember px-4 py-3 text-sm font-bold text-ink transition hover:bg-ember/90 focus:outline-none focus:ring-2 focus:ring-ember/40"
      >
        Early Access coming soon
      </Link>
    </aside>
  );
}
