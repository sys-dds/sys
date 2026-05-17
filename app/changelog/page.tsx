export const metadata = {
  title: "Changelog",
};

export default function ChangelogPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-signal">Changelog</p>
      <h1 className="mt-4 text-4xl font-bold text-white">Launch notes</h1>
      <section className="mt-10 rounded-lg border border-line bg-panel p-6">
        <p className="text-sm font-semibold text-signal">MVP 0.1</p>
        <h2 className="mt-3 text-2xl font-bold text-white">Initial content-first launch</h2>
        <ul className="mt-5 space-y-3 text-sm leading-6 text-mist">
          <li>MVP 0.1 created.</li>
          <li>Frontend track started.</li>
          <li>Static free/locked notes added.</li>
          <li>£19 early access pricing placeholder added.</li>
        </ul>
      </section>
      <section className="mt-6 rounded-lg border border-line bg-panel p-6">
        <p className="text-sm font-semibold text-signal">SDM-002</p>
        <h2 className="mt-3 text-2xl font-bold text-white">Course layout and conversion polish</h2>
        <ul className="mt-5 space-y-3 text-sm leading-6 text-mist">
          <li>SDM-002 sidebar/course layout added.</li>
          <li>SDM-002 conversion copy improved.</li>
          <li>Homepage copy sharpened around the senior interview gap and £19 value.</li>
          <li>Pricing copy improved with a clearer Early Access value frame.</li>
          <li>Free notes strengthened as complete product samples.</li>
          <li>Locked previews improved with clearer future unlocks.</li>
          <li>No auth, database, payments, or deployment added.</li>
        </ul>
      </section>
    </div>
  );
}
