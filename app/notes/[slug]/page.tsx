import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { LessonLayout } from "@/components/LessonLayout";
import { PaywallBox } from "@/components/PaywallBox";
import { getAllNoteSlugs, getNoteBySlug } from "@/lib/notes";

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

  return (
    <LessonLayout note={note}>
      <MDXRemote source={note.content} />
      {note.status === "locked" ? <PaywallBox /> : null}
    </LessonLayout>
  );
}
