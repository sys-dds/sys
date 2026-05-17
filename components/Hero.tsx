import Link from "next/link";
import { SectionNumber } from "./SectionNumber";
import { CoursePreviewPanel } from "./CoursePreviewPanel";

export function Hero() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.92fr_0.82fr] lg:items-start lg:px-8 lg:py-12">
        <div>
          <SectionNumber number="01" label="Frontend System Design for Senior Interviews" />
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-[3rem]">
            Senior interview prep for experienced developers.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-mist">
            Learn how to explain trade-offs, design systems, review code, debug production issues, and answer with
            senior-level judgement.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/notes"
              className="inline-flex items-center justify-center rounded-md bg-signal px-5 py-3 text-sm font-bold text-ink transition hover:bg-signal/90 focus:outline-none focus:ring-2 focus:ring-signal/50"
            >
              Start the track
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-md border border-line px-5 py-3 text-sm font-bold text-white transition hover:border-mist/60 hover:bg-panel focus:outline-none focus:ring-2 focus:ring-line"
            >
              See £19 Early Access
            </Link>
          </div>
          <p className="mt-4 max-w-xl text-sm leading-6 text-muted">
            If one answer helps you sound more senior in an interview, the £19 has already paid for itself.
          </p>
        </div>
        <CoursePreviewPanel />
      </div>
    </section>
  );
}
