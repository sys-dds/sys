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
    <header className="sticky top-0 z-40 border-b border-line/80 bg-[#0b0f12]/92 backdrop-blur">
      <div className="mx-auto flex min-h-14 max-w-6xl flex-col gap-3 px-4 py-2.5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link href="/" className="text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:text-signal">
          System Design Mastery
        </Link>
        <nav className="flex flex-wrap gap-1 text-sm text-muted">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href} className="rounded-md px-2.5 py-1.5 transition hover:bg-surface hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-signal/40">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
