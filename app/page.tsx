import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServicesAccordion from "@/components/ServicesAccordion";
import ReviewCarousel from "@/components/ReviewCarousel";
import CTASection from "@/components/CTASection";
import { homeContent } from "@/content/mission";
import { 
  Store, 
  Building2, 
  Briefcase, 
  Award,
  Target,
  Users,
  Zap
} from "lucide-react";

export default function Home() {
  const whoItsForIcons = [Store, Building2, Briefcase, Award];
  const howDifferentIcons = [Target, Users, Zap];

  return (
    <div className="animate-fadeIn">
      <Hero
        headline={homeContent.hero.headline}
        subheadline={homeContent.hero.subheadline}
        cta={homeContent.hero.cta}
      />

      <section className="py-12 sm:py-16 bg-gray-50 animate-slideDown">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What We Do"
            subtitle="Comprehensive services to manage your digital presence"
            centered
          />
          <div className="mt-8">
            <ServicesAccordion />
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Who It's For"
            centered
          />
          <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3">
            {homeContent.whoItsFor.items.map((item, index) => {
              const Icon = whoItsForIcons[index];
              return (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center hover:border-gray-300 transition-colors"
                >
                  <Icon className="w-5 h-5 text-gray-600 mx-auto mb-2" />
                  <h3 className="text-sm font-semibold text-gray-900">{item}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="How We're Different"
            centered
          />
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {homeContent.howWereDifferent.items.map((item, index) => {
              const Icon = howDifferentIcons[index];
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-5 text-center hover:border-gray-300 transition-colors"
                >
                  <Icon className="w-6 h-6 text-gray-600 mx-auto mb-2" />
                  <h3 className="text-base font-semibold text-gray-900">{item}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Trusted by businesses across industries"
            centered
          />
          <div className="mt-8">
            <ReviewCarousel />
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
