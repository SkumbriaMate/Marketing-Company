import { notFound } from "next/navigation";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { serviceDetails } from "@/content/serviceDetails";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = serviceDetails.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="animate-fadeIn">
      {/* Back Button */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
        </div>
      </div>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              {service.title}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600">
              {service.tagline}
            </p>
          </div>

          {/* Why Needed Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 items-start">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                {service.whyNeeded.title}
              </h2>
              <div className="space-y-4">
                {service.whyNeeded.content.map((paragraph, index) => (
                  <p key={index} className="text-gray-600 leading-relaxed text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 flex items-center justify-center lg:justify-end">
              <Image
                src={`/assets/${service.imageNumber}.png`}
                alt={service.title}
                width={service.imageNumber === 8 ? 800 : 600}
                height={service.imageNumber === 8 ? 800 : 600}
                className={`object-contain w-full h-auto ${
                  service.imageNumber === 8 
                    ? "max-w-[400px] sm:max-w-[550px] lg:max-w-[700px]" 
                    : "max-w-[300px] sm:max-w-[400px] lg:max-w-[500px]"
                }`}
                priority
              />
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {service.benefits.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.benefits.items.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors"
                >
                  <div className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1 flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {service.howItWorks.title}
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {service.howItWorks.steps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Who It's For */}
          <div className="bg-gray-50 rounded-lg p-8 sm:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Who This Is For
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {service.whoItsFor.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white rounded-lg p-4 border border-gray-200"
                >
                  <span className="text-gray-900 mr-3">→</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}

export async function generateStaticParams() {
  return serviceDetails.map((service) => ({
    slug: service.slug,
  }));
}
