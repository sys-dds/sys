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
    <article className={`rounded-lg border p-6 ${featured ? "border-signal bg-signal/10" : "border-line bg-panel"}`}>
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl font-bold text-white">{name}</h2>
        {featured ? <Badge tone="free">Best start</Badge> : null}
      </div>
      <p className="mt-4 text-4xl font-bold text-white">{price}</p>
      <p className="mt-3 min-h-12 text-sm leading-6 text-muted">{description}</p>
      <ul className="mt-6 space-y-3 text-sm text-mist">
        {features.map((feature) => (
          <li key={feature} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-signal" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      {disabled ? (
        <button
          type="button"
          disabled
          className="mt-8 inline-flex w-full cursor-not-allowed items-center justify-center rounded-md bg-muted px-4 py-3 text-sm font-bold text-ink"
        >
          {cta}
        </button>
      ) : (
        <Link
          href={href}
          className="mt-8 inline-flex w-full items-center justify-center rounded-md bg-white px-4 py-3 text-sm font-bold text-ink transition hover:bg-mist"
        >
          {cta}
        </Link>
      )}
    </article>
  );
}
