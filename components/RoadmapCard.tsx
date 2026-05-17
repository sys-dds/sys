import { Badge } from "./Badge";

type RoadmapCardProps = {
  title: string;
  status: "Active / In Progress" | "Planned";
  summary: string;
  bullets: string[];
};

export function RoadmapCard({ title, status, summary, bullets }: RoadmapCardProps) {
  return (
    <article className="rounded-lg border border-line bg-panel p-5">
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone="accent">Track</Badge>
        <Badge tone={status === "Active / In Progress" ? "free" : "default"}>{status}</Badge>
      </div>
      <h2 className="mt-4 text-xl font-bold text-white">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-muted">{summary}</p>
      <ul className="mt-5 space-y-2 text-sm text-mist">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-signal" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
