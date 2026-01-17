interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-8">
      <div className="mb-4">
        <svg
          className="w-8 h-8 text-gray-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10z" />
        </svg>
      </div>
      <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
      <div>
        <p className="font-semibold text-gray-900">{testimonial.name}</p>
        <p className="text-sm text-gray-600">
          {testimonial.role}, {testimonial.company}
        </p>
      </div>
    </div>
  );
}
