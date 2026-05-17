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
      className={`block rounded-md border px-3 py-2.5 transition focus:outline-none focus:ring-2 focus:ring-line ${
        isActive
          ? "border-signal bg-signal/10 text-white"
          : "border-transparent text-muted hover:border-line hover:bg-ink/50 hover:text-white"
      }`}
    >
      <span className="block text-sm font-semibold leading-5">{note.title}</span>
      <span className="mt-2 block">
        <Badge tone={isFree ? "free" : "locked"}>{isFree ? "Free" : "Locked"}</Badge>
      </span>
    </Link>
  );
}
