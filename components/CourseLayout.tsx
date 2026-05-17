import type { NoteMeta } from "@/lib/notes";
import { CourseSidebar } from "./CourseSidebar";

type CourseLayoutProps = {
  notes: NoteMeta[];
  activeSlug?: string;
  children: React.ReactNode;
};

export function CourseLayout({ notes, activeSlug, children }: CourseLayoutProps) {
  return (
    <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[20rem_minmax(0,1fr)] lg:px-8">
      <div className="lg:hidden">
        <details className="rounded-lg border border-line bg-panel p-4" open>
          <summary className="cursor-pointer text-sm font-bold text-white">Course menu</summary>
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
