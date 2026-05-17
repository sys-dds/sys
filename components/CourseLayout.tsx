import type { NoteMeta } from "@/lib/notes";
import { CourseSidebar } from "./CourseSidebar";

type CourseLayoutProps = {
  notes: NoteMeta[];
  activeSlug?: string;
  children: React.ReactNode;
};

export function CourseLayout({ notes, activeSlug, children }: CourseLayoutProps) {
  return (
    <div className="mx-auto grid max-w-[84rem] gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[15.75rem_minmax(0,52rem)] lg:gap-14 lg:px-8 lg:py-10">
      <div className="lg:hidden">
        <details className="border-y border-line/70 bg-surface/35 py-3" open>
          <summary className="cursor-pointer text-sm font-semibold text-white focus:outline-none focus-visible:text-signal">
            Course menu
          </summary>
          <div className="mt-4">
            <CourseSidebar notes={notes} activeSlug={activeSlug} />
          </div>
        </details>
      </div>
      <div className="hidden lg:block">
        <CourseSidebar notes={notes} activeSlug={activeSlug} />
      </div>
      <div className="min-w-0">{children}</div>
    </div>
  );
}
