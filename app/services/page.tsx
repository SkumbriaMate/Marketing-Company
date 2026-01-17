import SectionHeading from "@/components/SectionHeading";
import ServicesAccordion from "@/components/ServicesAccordion";
import CTASection from "@/components/CTASection";

export default function Services() {
  return (
    <div className="animate-fadeIn">
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive digital visibility and brand management solutions"
            centered
          />
          <div className="mt-12">
            <ServicesAccordion />
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
