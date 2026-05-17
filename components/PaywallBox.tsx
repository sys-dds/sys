import Link from "next/link";

export function PaywallBox() {
  return (
    <aside className="mt-10 rounded-lg border border-ember/40 bg-ember/10 p-6">
      <h2 className="text-xl font-bold text-white">Continue with the full note</h2>
      <p className="mt-3 text-sm leading-6 text-mist">
        This preview gives you the frame. Core and Pro unlock the full senior answer, trade-offs, practical examples,
        checklist, practice task, and final mental model.
      </p>
      <Link
        href="/pricing"
        className="mt-5 inline-flex rounded-md bg-ember px-4 py-3 text-sm font-bold text-ink transition hover:bg-ember/90"
      >
        See pricing
      </Link>
    </aside>
  );
}
