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
          The goal is not to sound like a guru or pretend every interview has one perfect architecture. The goal is to
          practice the judgement senior engineers are expected to show: clarify constraints, compare options, name risks,
          and explain decisions in plain language.
        </p>
        <p>
          MVP 0.1 is intentionally small. It focuses on content, structure, and useful reading paths before adding accounts,
          payments, dashboards, search, or community features.
        </p>
      </div>
    </div>
  );
}
