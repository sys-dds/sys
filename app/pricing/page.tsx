import { PricingCard } from "@/components/PricingCard";
import { SectionNumber } from "@/components/SectionNumber";

export const metadata = {
  title: "Pricing",
};

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <SectionNumber number="01" label="Pricing" />
        <h1 className="mt-4 text-4xl font-bold text-white">Start free. Join Early Access when the deeper pack is ready.</h1>
        <p className="mt-5 text-base leading-8 text-muted">
          The £19 offer is designed to be low-risk: if one answer helps you sound more senior in an interview, the £19
          has already paid for itself.
        </p>
      </div>
      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <PricingCard
          name="Free"
          price="£0"
          description="Start with the public notes and roadmap preview."
          features={["Public notes", "Roadmap preview", "Sample senior answers", "Locked preview pages"]}
          href="/notes"
          cta="Read free notes"
        />
        <PricingCard
          name="Early Access"
          price="£19"
          description="The planned paid tier for turning interview prompts into structured senior answers."
          features={[
            "Deeper notes",
            "Senior answer bank",
            "Bad-vs-good answer examples",
            "Code review checklists",
            "Frontend system design checklists",
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
      <section className="mt-10 rounded-lg border border-line bg-panel p-6">
        <SectionNumber number="02" label="Value proof" />
        <h2 className="text-2xl font-bold text-white">Why £19?</h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-mist">
          Senior interviews can turn on one clear explanation: where state belongs, why a cache can be stale, how you
          would debug a production issue, or what trade-off you would choose. If one answer helps you sound more senior
          in an interview, the £19 has already paid for itself.
        </p>
      </section>
    </div>
  );
}
