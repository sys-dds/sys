import { PricingCard } from "@/components/PricingCard";

export const metadata = {
  title: "Pricing",
};

export default function PricingPage() {
  const coreUrl = process.env.NEXT_PUBLIC_CORE_CHECKOUT_URL ?? "";
  const proUrl = process.env.NEXT_PUBLIC_PRO_CHECKOUT_URL ?? "";

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-signal">Pricing</p>
        <h1 className="mt-4 text-4xl font-bold text-white">Simple tiers for a content-first MVP.</h1>
        <p className="mt-5 text-base leading-8 text-muted">
          No auth, subscriptions, or checkout integration yet. Paid buttons read placeholder environment variables so checkout can be added later.
        </p>
      </div>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        <PricingCard
          name="Free"
          price="£0"
          description="Start with the public notes and roadmap."
          features={["Three complete frontend notes", "Roadmap access", "30-day starter plan"]}
          href="/notes"
          cta="Read free notes"
        />
        <PricingCard
          name="Core"
          price="£39"
          description="Unlock the deeper system design notes when checkout is connected."
          features={["Locked frontend notes", "Senior answer patterns", "Practical checklists"]}
          href={coreUrl}
          cta="Core checkout"
          featured
        />
        <PricingCard
          name="Pro"
          price="£99"
          description="A higher-support tier reserved for future templates, drills, and review assets."
          features={["Everything in Core", "Future advanced drills", "Future review templates"]}
          href={proUrl}
          cta="Pro checkout"
        />
      </div>
    </div>
  );
}
