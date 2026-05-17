import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-muted sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>Personal senior-interview study notes, shaped into a practical product.</p>
        <div className="flex gap-4">
          <Link href="/notes" className="hover:text-white">
            Notes
          </Link>
          <Link href="/pricing" className="hover:text-white">
            Pricing
          </Link>
          <Link href="/about" className="hover:text-white">
            About
          </Link>
        </div>
      </div>
    </footer>
  );
}
