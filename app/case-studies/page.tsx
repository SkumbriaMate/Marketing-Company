import SectionHeading from "@/components/SectionHeading";
import Card from "@/components/Card";
import TestimonialCard from "@/components/TestimonialCard";
import LeaveReview from "@/components/LeaveReview";
import { caseStudies } from "@/content/caseStudies";

export default function CaseStudies() {
  return (
    <div className="animate-fadeIn">
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Case Studies"
            subtitle="See how we've helped businesses grow their digital presence"
            centered
          />
          <div className="mt-12 space-y-16">
            {caseStudies.map((study, index) => (
              <div key={index} className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {study.title}
                  </h3>
                  <p className="text-gray-600">
                    {study.client} • {study.industry}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Client Challenges
                    </h4>
                    <ul className="space-y-2">
                      {study.challenges.map((challenge, i) => (
                        <li key={i} className="text-gray-600 flex items-start">
                          <span className="mr-2">•</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>

                  <Card>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Strategy Applied
                    </h4>
                    <ul className="space-y-2">
                      {study.strategy.map((item, i) => (
                        <li key={i} className="text-gray-600 flex items-start">
                          <span className="mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>

                  <Card>
                    <h4 className="font-semibold text-gray-900 mb-3">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, i) => (
                        <li key={i} className="text-gray-600 flex items-start">
                          <span className="mr-2">•</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>

                {study.testimonial && (
                  <div className="mt-8">
                    <TestimonialCard testimonial={study.testimonial} />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16">
            <LeaveReview />
          </div>
        </div>
      </section>
    </div>
  );
}
