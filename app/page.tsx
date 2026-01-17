import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ReviewCarousel from "@/components/ReviewCarousel";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import { homeContent } from "@/content/mission";
import { services } from "@/content/services";
import { serviceDetails } from "@/content/serviceDetails";
import { 
  Store, 
  Building2, 
  Briefcase, 
  Award,
  Target,
  Users,
  Zap,
  Search,
  Palette,
  MapPin,
  Share2,
  Monitor,
  TrendingUp,
  MessageSquare,
  Code,
  ArrowRight
} from "lucide-react";

export default function Home() {
  const whoItsForIcons = [Store, Building2, Briefcase, Award];
  const howDifferentIcons = [Target, Users, Zap];
  const serviceIcons = [Search, Palette, MapPin, Share2, Monitor, TrendingUp, MessageSquare, Code];

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
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const detail = serviceDetails.find((d) => d.title === service.title);
              const Icon = serviceIcons[index];
              
              return (
                <Link
                  key={index}
                  href={`/services/${detail?.slug || ''}`}
                  className="group bg-white border border-gray-200 rounded-lg p-6 md:hover:border-gray-900 md:hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center md:group-hover:bg-gray-900 transition-colors">
                        <Icon className="w-6 h-6 text-gray-600 md:group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {service.description}
                      </p>
                      <div className="flex items-center text-gray-900 font-semibold text-sm md:group-hover:translate-x-2 transition-transform">
                        Learn more
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
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
