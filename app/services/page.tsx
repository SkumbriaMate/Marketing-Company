import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import { 
  ArrowRight,
  Search,
  Palette,
  MapPin,
  Share2,
  Monitor,
  TrendingUp,
  MessageSquare,
  Code
} from "lucide-react";
import { services } from "@/content/services";
import { serviceDetails } from "@/content/serviceDetails";

export default function Services() {
  const serviceIcons = [Search, Palette, MapPin, Share2, Monitor, TrendingUp, MessageSquare, Code];

  return (
    <div className="animate-fadeIn">
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive digital visibility and brand management solutions"
            centered
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const detail = serviceDetails.find((d) => 
                d.title === service.title
              );
              const Icon = serviceIcons[index];
              
              return (
                <Link
                  key={index}
                  href={`/services/${detail?.slug || ''}`}
                  className="group bg-white border border-gray-200 rounded-lg p-8 md:hover:border-gray-900 md:hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center md:group-hover:bg-gray-900 transition-colors">
                        <Icon className="w-7 h-7 text-gray-600 md:group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex items-center text-gray-900 font-semibold md:group-hover:translate-x-2 transition-transform">
                        Learn more
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
