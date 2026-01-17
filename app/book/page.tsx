import SectionHeading from "@/components/SectionHeading";
import LeadForm from "@/components/LeadForm";

export default function Book() {
  return (
    <div className="animate-fadeIn">
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Book a Consultation"
            subtitle="Let's discuss how we can help your brand be found, trusted, and chosen."
            centered
          />
          <div className="mt-12">
            <LeadForm />
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Or schedule directly with Calendly:
            </p>
            <div className="bg-gray-100 rounded-lg p-8 border border-gray-200">
              <p className="text-gray-500 text-sm">
                Calendly embed placeholder - Add your Calendly embed code here
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
