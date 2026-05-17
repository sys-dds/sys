import { SectionNumber } from "@/components/SectionNumber";

export const metadata = {
  title: "Changelog",
};

export default function ChangelogPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionNumber number="01" label="Changelog" />
      <h1 className="mt-4 text-4xl font-bold text-white">Launch notes</h1>
      <section className="mt-10 border-y border-line py-6">
        <SectionNumber number="01" label="MVP 0.1" />
        <h2 className="mt-3 text-2xl font-bold text-white">Initial content-first launch</h2>
        <ul className="mt-5 space-y-3 text-sm leading-6 text-mist">
          <li>MVP 0.1 created.</li>
          <li>Frontend track started.</li>
          <li>Static free/locked notes added.</li>
          <li>£19 early access pricing placeholder added.</li>
        </ul>
      </section>
      <section className="mt-6 border-b border-line py-6">
        <SectionNumber number="02" label="SDM-002" />
        <h2 className="mt-3 text-2xl font-bold text-white">Impeccable-inspired dark docs/course redesign</h2>
        <ul className="mt-5 space-y-3 text-sm leading-6 text-mist">
          <li>SDM-002 impeccable-inspired dark docs/course redesign added.</li>
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
