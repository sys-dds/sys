import Link from "next/link";
import { CoursePreviewPanel } from "./CoursePreviewPanel";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f6f8fb] text-[#101828]">
      <div className="absolute left-1/2 top-8 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-[#d8f7ef] blur-3xl" />
      <div className="absolute right-8 top-20 hidden h-28 w-28 rounded-full bg-[#ffe6b8] blur-2xl lg:block" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pb-14 pt-16 sm:px-6 lg:grid-cols-[1fr_0.82fr] lg:items-center lg:px-8 lg:pb-20 lg:pt-18">
        <div>
          <div className="inline-flex rounded-full border border-[#d9e2ec] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#287f6c] shadow-sm">
            Senior interview prep for 3+ year developers
          </div>
          <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[0.98] tracking-[-0.02em] text-[#101828] sm:text-6xl lg:text-[4.35rem]">
            Ace senior engineering interviews with practical judgement.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#475467]">
            A polished interview-prep notebook for explaining trade-offs, designing systems, reviewing code, debugging
            production issues, and answering frontend, Java backend, and DevOps questions with senior-level judgement.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/notes"
              className="inline-flex items-center justify-center rounded-full bg-[#101828] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#101828]/15 transition hover:bg-[#1d2939] focus:outline-none focus:ring-2 focus:ring-[#101828]/30"
            >
              Start with free notes
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-full border border-[#d0d5dd] bg-white px-6 py-3 text-sm font-bold text-[#101828] shadow-sm transition hover:border-[#98a2b3] focus:outline-none focus:ring-2 focus:ring-[#101828]/20"
            >
              View £19 Early Access
            </Link>
          </div>
          <div className="mt-8 grid max-w-2xl gap-3 text-sm leading-6 text-[#667085] sm:grid-cols-3">
            <p className="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-[#e4e7ec]"><span className="block font-bold text-[#101828]">Frontend</span>React, Next.js, architecture, performance.</p>
            <p className="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-[#e4e7ec]"><span className="block font-bold text-[#101828]">Java backend</span>Spring Boot, PostgreSQL, APIs, transactions.</p>
            <p className="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-[#e4e7ec]"><span className="block font-bold text-[#101828]">Production</span>Docker, CI/CD, observability, incidents.</p>
          </div>
        </div>
        <CoursePreviewPanel />
      </div>
    </section>
  );
}
