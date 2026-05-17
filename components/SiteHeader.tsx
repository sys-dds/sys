import Link from "next/link";

const navItems = [
  ["Home", "/"],
  ["Roadmap", "/roadmap"],
  ["Notes", "/notes"],
  ["Pricing", "/pricing"],
  ["About", "/about"],
  ["Changelog", "/changelog"],
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link href="/" className="text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:text-signal">
          System Design Mastery
        </Link>
        <nav className="flex flex-wrap gap-1 text-sm text-muted">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href} className="rounded-md px-3 py-1.5 transition hover:bg-panel hover:text-white focus:outline-none focus:ring-2 focus:ring-line">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
