import Link from "next/link";
import type { NoteMeta } from "@/lib/notes";
import { Badge } from "./Badge";

type CourseNavItemProps = {
  note: NoteMeta;
  activeSlug?: string;
};

export function CourseNavItem({ note, activeSlug }: CourseNavItemProps) {
  const isActive = note.slug === activeSlug;
  const isFree = note.status === "free";

  return (
    <Link
      href={`/notes/${note.slug}`}
      aria-current={isActive ? "page" : undefined}
      className={`group flex items-center justify-between gap-3 border-l px-2.5 py-1.5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-signal/40 ${
        isActive
          ? "border-signal bg-signal/10 text-white"
          : "border-transparent text-muted hover:border-line hover:bg-surface/60 hover:text-white"
      }`}
    >
      <span className="min-w-0 text-xs font-medium leading-5">{note.title}</span>
      <span className="shrink-0 scale-90 opacity-85">
        <Badge tone={isFree ? "free" : "locked"}>{isFree ? "Free" : "Locked"}</Badge>
      </span>
    </Link>
  );
}
