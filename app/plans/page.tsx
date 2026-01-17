import SectionHeading from "@/components/SectionHeading";
import PlanCard from "@/components/PlanCard";
import CTASection from "@/components/CTASection";
import { plans } from "@/content/plans";

export default function Plans() {
  return (
    <div className="animate-fadeIn">
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Plans"
            subtitle="Choose the plan that fits your business needs"
            centered
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <PlanCard
                key={index}
                name={plan.name}
                description={plan.description}
                features={plan.features}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
