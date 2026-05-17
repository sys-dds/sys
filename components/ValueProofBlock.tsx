import Link from "next/link";

export function ValueProofBlock() {
  return (
    <section className="border-y border-line bg-ink/45">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
        <p className="font-mono text-5xl font-semibold text-signal">£19</p>
        <div>
          <h2 className="text-3xl font-bold leading-tight text-white">If one answer helps you sound more senior in an interview, the £19 has already paid for itself.</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-mist">
            Early Access is framed around practical leverage: one better explanation, one checklist that saves hours,
            one mental model that improves more than one interview loop.
          </p>
          <Link href="/pricing" className="mt-6 inline-flex rounded-md border border-signal/50 px-4 py-3 text-sm font-bold text-signal transition hover:bg-signal hover:text-ink">
            Review Early Access
          </Link>
        </div>
      </div>
    </section>
  );
}
