import Link from "next/link";
const readinessRows = [
  ["Frontend", "React, Next.js, TypeScript, state, rendering, accessibility", "bg-[#e9fbf6] text-[#08735f]"],
  ["Java backend", "Java 21, Spring Boot, PostgreSQL, APIs, transactions", "bg-[#eef4ff] text-[#175cd3]"],
  ["Production", "Docker, CI/CD, config, logs, metrics, tracing, rollback", "bg-[#fff4e5] text-[#b54708]"],
];

const proofPoints = ["Senior answer patterns", "Bad-vs-good examples", "Checklists and practice tasks"];

export function CoursePreviewPanel() {
  return (
    <aside className="relative overflow-hidden rounded-[2rem] bg-white p-5 shadow-2xl shadow-[#344054]/15 ring-1 ring-[#e4e7ec]">
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#d8f7ef]" />
      <div className="relative flex items-start justify-between gap-4 border-b border-[#eaecf0] pb-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#287f6c]">Early Access</p>
          <h2 className="mt-1.5 text-xl font-bold text-[#101828]">Interview readiness system</h2>
          <p className="mt-2 max-w-sm text-xs leading-5 text-[#667085]">
            Built for engineers who need stronger answers, not more beginner tutorials.
          </p>
        </div>
        <div className="text-right">
          <p className="font-mono text-3xl font-bold text-[#101828]">£19</p>
          <p className="mt-1 text-[0.65rem] uppercase tracking-[0.16em] text-[#b54708]">Early price</p>
        </div>
      </div>
      <div className="relative py-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#667085]">Engineering tracks</p>
        <ol className="mt-3 space-y-3">
          {readinessRows.map(([label, body, tone], index) => (
            <li key={label} className="grid grid-cols-[2.25rem_1fr] gap-3 rounded-2xl bg-[#f9fafb] p-3">
              <span className={`flex h-9 w-9 items-center justify-center rounded-xl text-xs font-bold ${tone}`}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>
                <span className="block text-sm font-bold text-[#101828]">{label}</span>
                <span className="mt-1 block text-xs leading-5 text-[#667085]">{body}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
      <div className="relative border-t border-[#eaecf0] pt-4">
        <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-1">
          {proofPoints.map((point) => (
            <div key={point} className="flex items-center gap-2 text-xs font-medium text-[#475467]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#12b76a]" />
              <span>{point}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs leading-5 text-[#b54708]">Price increases as more notes, examples, and practice tasks are added.</p>
        <Link href="/notes" className="mt-4 inline-flex w-full justify-center rounded-full bg-[#101828] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#1d2939] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#101828]/30">
          Open the free sample notes
        </Link>
      </div>
    </aside>
  );
}
