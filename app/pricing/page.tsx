import { PricingCard } from "@/components/PricingCard";

export const metadata = {
  title: "Pricing",
};

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-signal">Pricing</p>
        <h1 className="mt-4 text-4xl font-bold text-white">Simple tiers for a content-first MVP.</h1>
        <p className="mt-5 text-base leading-8 text-muted">
          No payment integration yet. Early Access is shown as a local placeholder while the notes library is built out.
        </p>
      </div>
      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <PricingCard
          name="Free"
          price="£0"
          description="Start with the public notes and roadmap preview."
          features={["Public notes", "Roadmap preview", "Sample senior answers"]}
          href="/notes"
          cta="Read free notes"
        />
        <PricingCard
          name="Early Access"
          price="£19"
          description="The planned paid tier for deeper frontend system design interview preparation."
          features={[
            "Deeper notes",
            "Checklists",
            "Bad-vs-good examples",
            "Interview answer patterns",
            "Practice tasks",
            "Future MVP updates",
          ]}
          href="#"
          cta="Early Access coming soon"
          featured
          disabled
        />
      </div>
      <p className="mt-8 max-w-3xl text-sm leading-6 text-ember">
        Price increases as more notes, examples, checklists, and practice tasks are added.
      </p>
    </div>
  );
}
