import Link from "next/link";
import { SectionNumber } from "./SectionNumber";
import { CoursePreviewPanel } from "./CoursePreviewPanel";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line/70">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/50 to-transparent" />
      <div className="absolute left-1/2 top-0 h-64 w-[44rem] -translate-x-1/2 rounded-full bg-signal/5 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_0.82fr] lg:items-center lg:px-8 lg:py-16">
        <div>
          <SectionNumber number="01" label="Senior interview prep for practical engineers" />
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.03] text-white sm:text-5xl lg:text-[3.65rem]">
            Answer senior engineering interviews with better judgement.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-mist">
            System Design Mastery helps 3+ year developers practise the answers senior loops actually reward:
            trade-offs, architecture decisions, code review, production debugging, and clear reasoning across frontend,
            Java backend, and DevOps engineering.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/notes"
              className="inline-flex items-center justify-center rounded-full bg-signal px-5 py-3 text-sm font-bold text-ink transition hover:bg-signal/90 focus:outline-none focus:ring-2 focus:ring-signal/50"
            >
              Start with free notes
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-full border border-line/80 px-5 py-3 text-sm font-bold text-white transition hover:border-mist/60 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-line"
            >
              View £19 Early Access
            </Link>
          </div>
          <div className="mt-7 grid max-w-2xl gap-3 border-l border-signal/60 pl-5 text-sm leading-6 text-muted sm:grid-cols-3">
            <p><span className="block font-semibold text-white">Frontend</span>React, Next.js, architecture, performance.</p>
            <p><span className="block font-semibold text-white">Java backend</span>Spring Boot, PostgreSQL, APIs, transactions.</p>
            <p><span className="block font-semibold text-white">Production</span>Docker, CI/CD, observability, incidents.</p>
          </div>
        </div>
        <CoursePreviewPanel />
      </div>
    </section>
  );
}
