import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type VaultAccess = "free" | "founder";
export type VaultStatus = "draft" | "published" | "archived";

export type VaultMeta = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  track: string;
  category: string;
  path: string;
  access: VaultAccess;
  status: VaultStatus;
  order: number;
  minutes: number;
  tags: string[];
  updated: string;
};

export type VaultNote = VaultMeta & {
  content: string;
  sourcePath: string;
};

export type VaultIndex = {
  all: VaultMeta[];
  free: VaultMeta[];
  founder: VaultMeta[];
  byTrack: Record<string, VaultMeta[]>;
};

// Paid-content safety:
// - Do not enable static export for this app. Founder notes require server-side access checks.
// - Do not move content-vault/ into public/. It must remain server-side only.
const vaultDirectory = path.join(process.cwd(), "content-vault");
const markdownExtensions = new Set([".md", ".mdx"]);
const maxFrontmatterBytes = 64 * 1024;

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function isVaultAccess(value: unknown): value is VaultAccess {
  return value === "free" || value === "founder";
}

function isVaultStatus(value: unknown): value is VaultStatus {
  return value === "draft" || value === "published" || value === "archived";
}

function validateVaultMeta(data: Record<string, unknown>, filePath: string): VaultMeta {
  const requiredStringFields = ["id", "title", "slug", "summary", "track", "category", "path", "updated"] as const;

  for (const field of requiredStringFields) {
    if (typeof data[field] !== "string" || data[field].trim().length === 0) {
      throw new Error(`Invalid vault frontmatter in ${filePath}: "${field}" is required`);
    }
  }

  if (!isVaultAccess(data.access)) {
    throw new Error(`Invalid vault frontmatter in ${filePath}: "access" must be free or founder`);
  }

  if (!isVaultStatus(data.status)) {
    throw new Error(`Invalid vault frontmatter in ${filePath}: "status" must be draft, published, or archived`);
  }

  if (typeof data.order !== "number") {
    throw new Error(`Invalid vault frontmatter in ${filePath}: "order" must be a number`);
  }

  if (typeof data.minutes !== "number") {
    throw new Error(`Invalid vault frontmatter in ${filePath}: "minutes" must be a number`);
  }

  if (!isStringArray(data.tags)) {
    throw new Error(`Invalid vault frontmatter in ${filePath}: "tags" must be a string array`);
  }

  return {
    id: data.id as string,
    title: data.title as string,
    slug: data.slug as string,
    summary: data.summary as string,
    track: data.track as string,
    category: data.category as string,
    path: data.path as string,
    access: data.access,
    status: data.status,
    order: data.order as number,
    minutes: data.minutes as number,
    tags: data.tags,
    updated: data.updated as string,
  };
}

function getMarkdownFiles(directory: string): string[] {
  if (!fs.existsSync(directory)) {
    return [];
  }

  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      return getMarkdownFiles(fullPath);
    }

    if (entry.isFile() && markdownExtensions.has(path.extname(entry.name))) {
      return [fullPath];
    }

    return [];
  });
}

function sortVaultNotes<T extends VaultMeta>(notes: T[]): T[] {
  return [...notes].sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}

function findFrontmatterEnd(source: string): number {
  const match = source.match(/^---\r?\n[\s\S]*?\r?\n---/);
  return match ? match[0].length : -1;
}

function readFrontmatterOnly(filePath: string): string {
  const fd = fs.openSync(filePath, "r");
  const buffer = Buffer.alloc(1024);
  let frontmatter = "";
  let bytesReadTotal = 0;

  try {
    while (bytesReadTotal < maxFrontmatterBytes) {
      const bytesRead = fs.readSync(fd, buffer, 0, buffer.length, bytesReadTotal);

      if (bytesRead === 0) {
        break;
      }

      bytesReadTotal += bytesRead;
      frontmatter += buffer.subarray(0, bytesRead).toString("utf8");

      const end = findFrontmatterEnd(frontmatter);

      if (end !== -1) {
        return frontmatter.slice(0, end);
      }
    }
  } finally {
    fs.closeSync(fd);
  }

  throw new Error(`Missing or oversized YAML frontmatter in ${path.relative(vaultDirectory, filePath)}`);
}

function parseVaultMetaFile(filePath: string): VaultMeta {
  const relativePath = path.relative(vaultDirectory, filePath);
  const frontmatter = readFrontmatterOnly(filePath);
  const { data } = matter(frontmatter);

  return validateVaultMeta(data, relativePath);
}

function parseFullVaultFile(filePath: string): VaultNote {
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const relativePath = path.relative(vaultDirectory, filePath);
  const meta = validateVaultMeta(data, relativePath);

  return {
    ...meta,
    content,
    sourcePath: relativePath,
  };
}

function getPublishedVaultMeta(): VaultMeta[] {
  return sortVaultNotes(getMarkdownFiles(vaultDirectory).map(parseVaultMetaFile).filter((note) => note.status === "published"));
}

function getVaultFilePathBySlug(slug: string): string | undefined {
  return getMarkdownFiles(vaultDirectory).find((filePath) => parseVaultMetaFile(filePath).slug === slug);
}

export function getContentIndex(): VaultIndex {
  const all = getPublishedVaultMeta();
  const byTrack = all.reduce<Record<string, VaultMeta[]>>((tracks, note) => {
    tracks[note.track] = [...(tracks[note.track] ?? []), note];
    return tracks;
  }, {});

  for (const track of Object.keys(byTrack)) {
    byTrack[track] = sortVaultNotes(byTrack[track]);
  }

  return {
    all,
    free: all.filter((note) => note.access === "free"),
    founder: all.filter((note) => note.access === "founder"),
    byTrack,
  };
}

export function getNoteMetaBySlug(slug: string): VaultMeta | undefined {
  return getPublishedVaultMeta().find((note) => note.slug === slug);
}

export function getFullNoteBySlug(slug: string, options: { founderAccessConfirmed?: boolean } = {}): VaultNote | undefined {
  const meta = getNoteMetaBySlug(slug);

  if (!meta) {
    return undefined;
  }

  if (meta.access === "founder" && !options.founderAccessConfirmed) {
    throw new Error(`Refusing to load founder Markdown before access is confirmed: ${slug}`);
  }

  const filePath = getVaultFilePathBySlug(slug);

  if (!filePath) {
    return undefined;
  }

  const note = parseFullVaultFile(filePath);

  if (note.status !== "published") {
    return undefined;
  }

  return note;
}

export function getFreeVaultSlugs() {
  return getContentIndex().free.map((note) => note.slug);
}

export const getVaultIndex = getContentIndex;
export const getVaultMetaBySlug = getNoteMetaBySlug;
