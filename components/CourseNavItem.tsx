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
      className={`group relative -ml-3 flex items-center justify-between gap-3 px-3 py-1.5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-signal/40 ${
        isActive
          ? "text-white before:absolute before:inset-y-1 before:left-0 before:w-px before:bg-signal"
          : "text-muted hover:text-white"
      }`}
    >
      <span className="min-w-0 text-xs font-medium leading-5">{note.title}</span>
      <span className="shrink-0 scale-90 opacity-85">
        <Badge tone={isFree ? "free" : "locked"}>{isFree ? "Free" : "Locked"}</Badge>
      </span>
    </Link>
  );
}
