interface PlanFeature {
  name: string;
}

interface PlanCardProps {
  name: string;
  description: string;
  features: PlanFeature[];
}

export default function PlanCard({
  name,
  description,
  features,
}: PlanCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow">
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{name}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg
              className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-gray-700">{feature.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
