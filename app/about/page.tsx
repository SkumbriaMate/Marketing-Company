import SectionHeading from "@/components/SectionHeading";
import { about, mission } from "@/content/mission";

export default function About() {
  return (
    <div className="animate-fadeIn">
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="About Us" centered />
          <div className="mt-12 space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {mission.statement}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {about.philosophy.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {about.philosophy.description}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {about.whoWeWorkWith.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {about.whoWeWorkWith.description}
                </p>
              </div>
            </div>

            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {about.partnership.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {about.partnership.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
