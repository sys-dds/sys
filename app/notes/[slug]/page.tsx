import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { CourseLayout } from "@/components/CourseLayout";
import { LessonLayout } from "@/components/LessonLayout";
import { PaywallBox } from "@/components/PaywallBox";
import { PreviousNextNoteNav } from "@/components/PreviousNextNoteNav";
import { getAdjacentNotes, getAllNotes, getAllNoteSlugs, getNoteBySlug } from "@/lib/notes";

type NotePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllNoteSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: NotePageProps) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    return {};
  }

  return {
    title: note.title,
    description: note.summary,
  };
}

export default async function NotePage({ params }: NotePageProps) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    notFound();
  }

  const notes = getAllNotes();
  const { previous, next } = getAdjacentNotes(slug);

  return (
    <CourseLayout notes={notes} activeSlug={note.slug}>
      <LessonLayout note={note}>
        <MDXRemote source={note.content} />
        {note.status === "locked" ? <PaywallBox /> : null}
        <PreviousNextNoteNav previous={previous} next={next} />
      </LessonLayout>
    </CourseLayout>
  );
}
