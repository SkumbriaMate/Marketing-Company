export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
}

export interface CaseStudy {
  title: string;
  client: string;
  industry: string;
  challenges: string[];
  strategy: string[];
  results: string[];
  testimonial?: Testimonial;
}

export const caseStudies: CaseStudy[] = [
  {
    title: "Local Law Firm Digital Transformation",
    client: "Premier Legal Services",
    industry: "Legal Services",
    challenges: [
      "Low visibility in local search results",
      "Inconsistent brand messaging across platforms",
      "Outdated website with poor user experience",
    ],
    strategy: [
      "Comprehensive SEO audit and optimization",
      "Brand identity refresh and consistency guidelines",
      "Complete website redesign focused on UX and conversions",
      "Google Business Profile optimization",
    ],
    results: [
      "150% increase in organic search traffic",
      "Top 3 rankings for 8 primary keywords",
      "40% increase in consultation bookings",
      "Consistent brand presence across all channels",
    ],
    testimonial: {
      name: "Sarah Johnson",
      role: "Managing Partner",
      company: "Premier Legal Services",
      quote:
        "Working with this team transformed our online presence. We're now consistently found by the right clients, and our brand feels professional and trustworthy.",
    },
  },
  {
    title: "Professional Services Brand Elevation",
    client: "Elite Consulting Group",
    industry: "Professional Services",
    challenges: [
      "Brand perception didn't match service quality",
      "Limited digital visibility for premium services",
      "No cohesive strategy across digital channels",
    ],
    strategy: [
      "Brand identity strategy and visual refresh",
      "Content strategy aligned with brand values",
      "SEO optimization for premium service keywords",
      "Social media visibility strategy",
    ],
    results: [
      "200% increase in qualified leads",
      "Top rankings for premium service keywords",
      "Enhanced brand perception and trust",
      "Consistent messaging across all touchpoints",
    ],
  },
  {
    title: "E-commerce Brand Growth",
    client: "Artisan Goods Co.",
    industry: "E-commerce",
    challenges: [
      "Low search rankings for product categories",
      "Poor website conversion rates",
      "Limited brand awareness",
    ],
    strategy: [
      "Technical SEO optimization",
      "Website UX improvements and conversion optimization",
      "Brand storytelling and content strategy",
      "Ongoing performance monitoring and optimization",
    ],
    results: [
      "180% increase in organic traffic",
      "35% improvement in conversion rate",
      "Top 5 rankings for 12 product category keywords",
      "Sustained growth month over month",
    ],
  },
];
