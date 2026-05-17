import Link from "next/link";
import { Badge } from "./Badge";

type PricingCardProps = {
  name: string;
  price: string;
  description: string;
  features: string[];
  href: string;
  cta: string;
  featured?: boolean;
  disabled?: boolean;
};

export function PricingCard({ name, price, description, features, href, cta, featured, disabled }: PricingCardProps) {
  return (
    <article className={`relative px-5 py-5 ${featured ? "bg-gradient-to-b from-signal/12 to-transparent ring-1 ring-signal/45" : "bg-gradient-to-b from-panel/45 to-transparent ring-1 ring-line/45"}`}>
      {featured ? <div className="absolute inset-x-0 top-0 h-px bg-signal/80" /> : null}
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-white">{name}</h2>
        {featured ? <Badge tone="free">Best start</Badge> : null}
      </div>
      <p className="mt-4 font-mono text-3xl font-semibold text-white">{price}</p>
      <p className="mt-3 min-h-12 text-sm leading-6 text-muted">{description}</p>
      <ul className="mt-5 space-y-2.5 text-sm text-mist">
        {features.map((feature) => (
          <li key={feature} className="flex gap-3">
            <span className="mt-2 h-1 w-1 rounded-full bg-signal" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      {disabled ? (
        <button
          type="button"
          disabled
          className="mt-6 inline-flex w-full cursor-not-allowed items-center justify-center rounded-full border border-ember/40 bg-ember/10 px-4 py-2.5 text-sm font-bold text-ember"
        >
          {cta}
        </button>
      ) : (
        <Link
          href={href}
          className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-2.5 text-sm font-bold text-ink transition hover:bg-mist focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
        >
          {cta}
        </Link>
      )}
    </article>
  );
}
