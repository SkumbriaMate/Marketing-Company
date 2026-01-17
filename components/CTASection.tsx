import Link from "next/link";

interface CTASectionProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function CTASection({
  title = "Ready to get started?",
  description = "Book a consultation to discuss how we can help your brand be found, trusted, and chosen.",
  ctaText = "Book a Consultation",
  ctaHref = "/book",
}: CTASectionProps) {
  return (
    <section className="bg-gray-900 text-white py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <Link
          href={ctaHref}
          className="inline-block bg-white text-gray-900 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          {ctaText}
        </Link>
      </div>
    </section>
  );
}
