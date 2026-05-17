import Link from "next/link";

export function Hero() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-signal">
            Senior interview prep notes
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Learn to answer system design like a senior engineer.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-mist">
            System Design Mastery helps 3+ year developers build judgement across frontend architecture, backend architecture,
            production thinking, trade-offs, debugging, review, and senior-style communication.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/roadmap"
              className="inline-flex items-center justify-center rounded-md bg-signal px-5 py-3 text-sm font-bold text-ink transition hover:bg-signal/90"
            >
              Start with the roadmap
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-md border border-line px-5 py-3 text-sm font-bold text-white transition hover:border-mist/60"
            >
              View pricing
            </Link>
          </div>
        </div>
        <div className="rounded-lg border border-line bg-panel p-6 shadow-soft">
          <p className="text-sm font-semibold text-muted">MVP 0.1 focus</p>
          <div className="mt-5 space-y-4">
            {[
              "Architecture trade-offs, not memorized diagrams",
              "Senior answer patterns for ambiguous prompts",
              "Frontend and backend system design notes",
              "Production, debugging, and code review judgement",
            ].map((item) => (
              <div key={item} className="flex gap-3 border-b border-line/70 pb-4 last:border-0 last:pb-0">
                <span className="mt-1 h-2 w-2 rounded-full bg-signal" />
                <p className="text-sm leading-6 text-mist">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
