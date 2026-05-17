export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-signal">About</p>
      <h1 className="mt-4 text-4xl font-bold text-white">A personal study system turned into a practical product.</h1>
      <div className="mt-8 space-y-5 text-base leading-8 text-mist">
        <p>
          System Design Mastery is built from the kind of notes a developer makes when preparing for senior interviews:
          direct prompts, weak answers, stronger answers, trade-offs, examples, and checklists.
        </p>
        <p>
          It is for experienced developers who can already build software and want to communicate with more senior-level
          judgement in frontend architecture, system design, code review, debugging, and production conversations.
        </p>
        <p>
          The goal is not to sound like a guru or pretend every interview has one perfect architecture. The goal is to
          practice the judgement senior engineers are expected to show: clarify constraints, compare options, name risks,
          and explain decisions in plain language.
        </p>
        <p>
          It is not a beginner course, and it is not fake expert content. The first track is Frontend System Design for
          Senior Interviews, with other system design tracks planned later.
        </p>
        <p>
          MVP 0.1 is intentionally small. The free notes prove the style before paid access exists. Early Access will fund
          deeper examples, checklists, practice tasks, and answer patterns while keeping the product focused on judgement,
          not memorisation.
        </p>
      </div>
    </div>
  );
}
