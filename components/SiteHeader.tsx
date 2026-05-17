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
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link href="/" className="text-base font-bold text-white">
          System Design Mastery
        </Link>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href} className="transition hover:text-white">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
