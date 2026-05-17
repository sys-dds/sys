import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type NoteStatus = "free" | "locked";

export type NoteMeta = {
  title: string;
  slug: string;
  track: string;
  summary: string;
  status: NoteStatus;
  order: number;
};

export type Note = NoteMeta & {
  content: string;
  preview: string;
};

const notesDirectory = path.join(process.cwd(), "content", "notes");

function isNoteMeta(data: Record<string, unknown>): data is NoteMeta {
  return (
    typeof data.title === "string" &&
    typeof data.slug === "string" &&
    typeof data.track === "string" &&
    typeof data.summary === "string" &&
    (data.status === "free" || data.status === "locked") &&
    typeof data.order === "number"
  );
}

function getNoteFiles() {
  if (!fs.existsSync(notesDirectory)) {
    return [];
  }

  return fs.readdirSync(notesDirectory).filter((file) => file.endsWith(".mdx"));
}

function parseNote(fileName: string): Note {
  const fullPath = path.join(notesDirectory, fileName);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  if (!isNoteMeta(data)) {
    throw new Error(`Invalid frontmatter in ${fileName}`);
  }

  const preview = content.split("\n## Senior answer")[0]?.trim() ?? content;

  return {
    ...data,
    content,
    preview,
  };
}

export function getAllNotes(): NoteMeta[] {
  return getNoteFiles()
    .map(parseNote)
    .map(({ content, preview, ...meta }) => meta)
    .sort((a, b) => a.order - b.order);
}

export function getAllNoteSlugs() {
  return getAllNotes().map((note) => note.slug);
}

export function getNoteBySlug(slug: string): Note | undefined {
  return getNoteFiles()
    .map(parseNote)
    .find((note) => note.slug === slug);
}
