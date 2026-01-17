export interface ServiceDetail {
  slug: string;
  title: string;
  tagline: string;
  imageNumber: number;
  whyNeeded: {
    title: string;
    content: string[];
  };
  benefits: {
    title: string;
    items: string[];
  };
  howItWorks: {
    title: string;
    steps: string[];
  };
  whoItsFor: string[];
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "seo-management",
    title: "SEO Management",
    tagline: "Be found when it matters most",
    imageNumber: 1,
    whyNeeded: {
      title: "Why SEO Management is Essential",
      content: [
        "In today's digital landscape, businesses that fail to optimize for search engines risk being invisible to potential customers. Organic search drives over 53% of website traffic on average, yet many businesses struggle with fragmented SEO strategies, poorly optimized content, and technical site issues. Without proactive SEO management, websites may rank lower, lose visibility to competitors, and miss critical opportunities for lead generation.",
        "Search engines evolve constantly. Algorithms now reward sites with quality content, technical accuracy, and user-focused design. Businesses without expert SEO oversight often face slow page load times, broken links, and content misalignment, all of which contribute to reduced traffic and poor engagement. Over time, this leads to missed revenue and diminished brand authority.",
        "Consistent SEO management ensures your website is not only discoverable but also authoritative in your niche. Beyond traffic, high-ranking sites earn credibility with customers. According to BrightEdge, 68% of online experiences begin with a search engine, emphasizing that visibility is a non-negotiable element of customer acquisition.",
        "Ongoing optimization also prevents competitors from capturing your audience. Without monitoring and adjustment, rankings can drop unexpectedly due to algorithm changes or competitor activity, creating volatility in your digital presence and revenue streams.",
      ],
    },
    benefits: {
      title: "Key Benefits",
      items: [
        "Increased organic traffic and qualified leads",
        "Improved keyword rankings for target search terms",
        "Enhanced website authority and trustworthiness",
        "Greater ROI compared to paid channels over time",
        "Reduced bounce rates through optimized content and structure",
        "Visibility into competitor performance and industry trends",
        "Sustainable, long-term search engine positioning",
      ],
    },
    howItWorks: {
      title: "Our Approach",
      steps: [
        "Conduct a full SEO audit including technical, on-page, and off-page factors",
        "Perform in-depth keyword research aligned with business objectives",
        "Optimize website structure, meta tags, and schema markup",
        "Develop content strategy targeting high-value keywords and user intent",
        "Monitor backlinks and disavow harmful links",
        "Implement technical fixes (speed, mobile, crawl errors)",
        "Track performance metrics with regular reporting",
        "Adjust strategy based on algorithm updates and competitor insights",
        "Conduct quarterly performance reviews and strategy refinement",
        "Provide ongoing recommendations for content and technical growth",
      ],
    },
    whoItsFor: [
      "Businesses looking to increase organic lead generation",
      "Companies with underperforming websites or declining traffic",
      "Local and national businesses seeking visibility in competitive niches",
      "E-commerce platforms needing optimized product pages",
      "Brands aiming to improve authority and trust online",
    ],
  },
  {
    slug: "brand-identity-management",
    title: "Brand Identity Management",
    tagline: "Be recognized, remembered, and trusted",
    imageNumber: 2,
    whyNeeded: {
      title: "Why Brand Identity Management is Essential",
      content: [
        "A strong, consistent brand identity is no longer optional—it's a key driver of customer trust and retention. Businesses without clear branding often appear disjointed, unprofessional, or forgettable. According to Lucidpress, consistent branding can increase revenue by up to 23%, highlighting the direct business impact.",
        "Inconsistent messaging across social media, websites, or advertising can confuse potential customers and dilute your value proposition. When audiences cannot recognize or relate to your brand, conversion rates drop and customer loyalty diminishes.",
        "Brand identity extends beyond logos and color palettes; it encompasses voice, messaging, and digital presentation. Without management, businesses risk losing strategic alignment between marketing campaigns, customer touchpoints, and long-term goals.",
        "Professional brand identity management ensures your company is seen as credible, memorable, and differentiated. Strong branding creates a foundation for all marketing efforts, from SEO and social media to partnerships and product launches, supporting sustained growth.",
      ],
    },
    benefits: {
      title: "Key Benefits",
      items: [
        "Clear, consistent visual and verbal brand presentation",
        "Stronger audience recognition and recall",
        "Increased trust and credibility among customers",
        "Higher engagement across digital platforms",
        "Cohesive messaging supporting campaigns and launches",
        "Competitive differentiation and market positioning",
        "Streamlined content creation aligned with brand guidelines",
      ],
    },
    howItWorks: {
      title: "Our Approach",
      steps: [
        "Conduct brand audit across all digital touchpoints",
        "Define or refine brand mission, vision, and values",
        "Develop comprehensive visual identity guidelines",
        "Standardize tone of voice and messaging framework",
        "Align social, web, and advertising content with brand",
        "Train internal teams on consistent brand usage",
        "Audit all existing materials for inconsistencies",
        "Implement brand management tools for oversight",
        "Monitor perception and adjust guidelines as needed",
        "Provide ongoing updates aligned with growth and strategy",
      ],
    },
    whoItsFor: [
      "Companies launching or refreshing a brand",
      "Businesses struggling with inconsistent messaging",
      "Organizations entering new markets or demographics",
      "Companies seeking to improve trust and loyalty",
      "Agencies or franchises needing standardized branding",
    ],
  },
  {
    slug: "google-business-profile-optimization",
    title: "Google Business Profile Optimization",
    tagline: "Dominate local search results",
    imageNumber: 3,
    whyNeeded: {
      title: "Why Google Business Profile Optimization is Essential",
      content: [
        "For businesses serving local customers, Google Business Profile (GBP) is often the first point of contact. Without optimization, businesses miss visibility on Google Search and Maps—platforms that drive over 80% of local searches according to Google.",
        "An incomplete or outdated profile can reduce inquiries, phone calls, and foot traffic. Many businesses fail to leverage reviews, posts, and updated hours, leaving them behind competitors who actively manage their online presence.",
        "Optimized GBP listings improve local SEO, increase engagement, and create trust signals. Accurate information, quality visuals, and timely updates are critical to capturing nearby customers at the exact moment they are ready to act.",
        "Active management ensures that your business ranks consistently in local searches, receives positive reviews, and maintains high engagement metrics. Without this, even a well-designed website may fail to convert nearby prospects.",
      ],
    },
    benefits: {
      title: "Key Benefits",
      items: [
        "Higher local search visibility and map rankings",
        "Increased calls, directions requests, and website clicks",
        "Positive influence on customer perception and trust",
        "Better conversion of nearby leads into sales",
        "Enhanced engagement through Google posts and offers",
        "Monitoring and response to customer reviews",
        "Accurate, up-to-date business information",
      ],
    },
    howItWorks: {
      title: "Our Approach",
      steps: [
        "Audit current Google Business Profile setup",
        "Optimize business description and categories",
        "Upload professional, high-quality images and videos",
        "Ensure accurate contact info, hours, and location data",
        "Implement structured posts and updates regularly",
        "Monitor and respond to reviews promptly",
        "Track performance metrics like clicks and calls",
        "Conduct competitive local research",
        "Adjust strategy to maximize visibility and engagement",
        "Provide ongoing management and reporting",
      ],
    },
    whoItsFor: [
      "Local retail and service businesses",
      "Restaurants, cafés, and hospitality venues",
      "Professionals relying on foot traffic or local clients",
      "Businesses with multiple locations seeking consistent listings",
      "Companies with underperforming local search visibility",
    ],
  },
  {
    slug: "social-media-visibility-strategy",
    title: "Social Media Visibility Strategy",
    tagline: "Build trust through strategic presence",
    imageNumber: 4,
    whyNeeded: {
      title: "Why Social Media Visibility Strategy is Essential",
      content: [
        "Random posting on social media rarely drives business results. Businesses without a clear strategy waste resources, miss audience engagement, and fail to strengthen their positioning. A structured approach ensures social channels support long-term growth rather than vanity metrics.",
        "Social media has shifted from awareness to conversion. According to Sprout Social, 57% of consumers are more likely to buy from a brand they follow, yet only a fraction of businesses maintain strategic oversight over content, engagement, and campaigns. Without a plan, brands struggle to demonstrate ROI.",
        "A visibility strategy ensures your social media aligns with brand identity, business objectives, and audience preferences. It converts channels into a measurable driver of leads, trust, and retention rather than a passive presence.",
        "Regular monitoring and iterative optimization help businesses capitalize on trends, audience behavior, and platform features. Without strategic management, social efforts can stagnate or even harm brand perception.",
      ],
    },
    benefits: {
      title: "Key Benefits",
      items: [
        "Increased engagement with target audiences",
        "Measurable growth in followers and conversions",
        "Cohesive, brand-aligned social presence",
        "Insights into audience behavior and preferences",
        "Improved campaign ROI through strategic focus",
        "Consistent posting cadence aligned with objectives",
        "Ability to capitalize on trends and platform updates",
      ],
    },
    howItWorks: {
      title: "Our Approach",
      steps: [
        "Audit current social media presence",
        "Identify target audiences and engagement patterns",
        "Define objectives and KPIs aligned with business goals",
        "Develop a content calendar and messaging strategy",
        "Create platform-specific content aligned with brand",
        "Implement posting and engagement schedule",
        "Monitor performance and audience feedback",
        "Adjust strategy based on analytics and trends",
        "Coordinate with other marketing channels for consistency",
        "Provide monthly reporting and insights",
      ],
    },
    whoItsFor: [
      "Brands aiming to improve social presence strategically",
      "Businesses struggling with low engagement or inconsistent posting",
      "Companies looking to integrate social media into wider marketing strategy",
      "E-commerce or service-based businesses targeting digital audiences",
      "Organizations seeking measurable social ROI",
    ],
  },
  {
    slug: "website-optimization-ux",
    title: "Website Optimization & UX",
    tagline: "Convert visitors into customers",
    imageNumber: 5,
    whyNeeded: {
      title: "Why Website Optimization & UX is Essential",
      content: [
        "A website that is slow, confusing, or poorly structured directly impacts conversions. Research from Google shows that 53% of mobile users abandon sites taking longer than three seconds to load. Poor UX frustrates users, damages credibility, and reduces revenue potential.",
        "Many businesses fail to optimize navigation, design, and accessibility, resulting in lost opportunities. Without expert oversight, small technical issues compound, leading to higher bounce rates and lower search rankings.",
        "Optimizing a website improves performance, guides visitors efficiently, and maximizes conversion rates. It ensures users complete desired actions, whether submitting inquiries, purchasing products, or engaging with content.",
        "Websites with excellent UX build trust and increase retention. Customers are more likely to return to sites that are responsive, intuitive, and fast, creating a foundation for sustainable digital growth.",
      ],
    },
    benefits: {
      title: "Key Benefits",
      items: [
        "Faster page load times and improved site performance",
        "Clear, intuitive navigation for better user engagement",
        "Higher conversion rates through optimized layouts",
        "Enhanced mobile experience for broader audience reach",
        "Reduced bounce rates and increased time on site",
        "Accessibility improvements for inclusivity and compliance",
        "Positive impact on SEO and search rankings",
      ],
    },
    howItWorks: {
      title: "Our Approach",
      steps: [
        "Conduct website performance audit",
        "Analyze UX/UI and identify pain points",
        "Optimize site speed, mobile responsiveness, and code efficiency",
        "Redesign navigation and content structure for clarity",
        "Implement A/B testing on critical pages",
        "Optimize visuals and interactive elements",
        "Ensure accessibility standards are met",
        "Track visitor behavior using analytics tools",
        "Iterate improvements based on testing and metrics",
        "Provide ongoing optimization and monitoring",
      ],
    },
    whoItsFor: [
      "Businesses with slow or underperforming websites",
      "E-commerce stores seeking higher conversions",
      "Companies aiming to improve user experience",
      "Organizations needing mobile-friendly design",
      "Brands preparing for digital growth campaigns",
    ],
  },
  {
    slug: "ongoing-brand-growth-oversight",
    title: "Ongoing Brand & Growth Oversight",
    tagline: "Continuous strategic management",
    imageNumber: 6,
    whyNeeded: {
      title: "Why Ongoing Brand & Growth Oversight is Essential",
      content: [
        "Digital presence is complex, spanning SEO, brand, content, and social channels. Without coordinated oversight, businesses risk fragmented strategies, misaligned messaging, and missed opportunities for growth.",
        "Companies often focus on short-term campaigns but lack a unified plan. This can lead to inefficiencies, inconsistent brand presentation, and lost revenue potential. Continuous oversight ensures all marketing initiatives reinforce each other and deliver measurable results.",
        "Ongoing management provides proactive adjustments. Market conditions, competitor activity, and platform changes demand constant attention—without it, businesses can quickly fall behind. Strategic oversight ensures your brand maintains visibility, authority, and relevance.",
        "This service unifies marketing efforts under a clear growth strategy, providing insight, accountability, and data-driven decision-making. It protects long-term ROI and aligns digital presence with business objectives.",
      ],
    },
    benefits: {
      title: "Key Benefits",
      items: [
        "Consistent, aligned brand and marketing strategy",
        "Enhanced efficiency and resource allocation",
        "Proactive adjustments to market or algorithm changes",
        "Increased long-term ROI from digital marketing efforts",
        "Clear visibility into performance metrics",
        "Improved competitive positioning",
        "Streamlined decision-making across channels",
      ],
    },
    howItWorks: {
      title: "Our Approach",
      steps: [
        "Audit current digital presence and marketing initiatives",
        "Establish key objectives and growth targets",
        "Align SEO, branding, social media, and web efforts",
        "Create integrated marketing calendar",
        "Monitor performance metrics across channels",
        "Identify opportunities for optimization or expansion",
        "Conduct regular strategy reviews with stakeholders",
        "Provide actionable recommendations for improvements",
        "Implement cross-channel adjustments",
        "Deliver ongoing reporting and analysis",
      ],
    },
    whoItsFor: [
      "Businesses managing multiple marketing channels",
      "Companies seeking long-term digital growth oversight",
      "Organizations lacking internal strategy coordination",
      "Brands entering competitive or evolving markets",
      "Agencies needing strategic consultation for client work",
    ],
  },
  {
    slug: "strategy-calls",
    title: "Strategy Calls",
    tagline: "Direct guidance when you need it",
    imageNumber: 7,
    whyNeeded: {
      title: "Why Strategy Calls are Essential",
      content: [
        "Making decisions without expert insight can lead to wasted resources and missed opportunities. Strategy calls provide direct, personalized guidance, helping business leaders make informed, actionable decisions quickly.",
        "Many companies operate reactively, responding to daily operational pressures rather than strategic priorities. A structured 1:1 session allows leaders to clarify objectives, evaluate options, and understand risks with expert perspective.",
        "Real-time guidance ensures decisions are data-driven and aligned with long-term growth objectives. Without it, businesses risk implementing initiatives that underperform or misalign with brand identity.",
        "Strategy calls also accelerate learning and execution. By connecting with experienced professionals, teams gain clarity, confidence, and actionable next steps, avoiding costly trial-and-error.",
      ],
    },
    benefits: {
      title: "Key Benefits",
      items: [
        "Expert guidance on business and marketing decisions",
        "Faster decision-making with actionable insights",
        "Improved alignment between strategy and execution",
        "Clarification of growth opportunities and priorities",
        "Reduced risk of misallocated resources",
        "Direct answers to pressing operational or marketing questions",
        "Access to best practices and industry benchmarks",
      ],
    },
    howItWorks: {
      title: "Our Approach",
      steps: [
        "Schedule 1:1 consultation at mutually convenient times",
        "Review client business goals, challenges, and metrics",
        "Analyze current strategies and opportunities",
        "Identify potential gaps or areas for improvement",
        "Provide actionable recommendations",
        "Prioritize next steps based on impact and feasibility",
        "Document insights and agreed-upon actions",
        "Follow up with resources or further clarification",
        "Reassess outcomes in subsequent calls as needed",
      ],
    },
    whoItsFor: [
      "Business owners seeking clarity on marketing decisions",
      "Teams needing guidance on growth strategy",
      "Companies facing digital marketing challenges",
      "Executives evaluating expansion or operational pivots",
      "Startups requiring expert insight for early-stage strategy",
    ],
  },
  {
    slug: "website-creation-maintenance",
    title: "Website Creation & Maintenance",
    tagline: "Build and maintain high-performance sites",
    imageNumber: 8,
    whyNeeded: {
      title: "Why Website Creation & Maintenance is Essential",
      content: [
        "A website is the cornerstone of your digital presence. Without a well-designed, performant, and maintained site, businesses risk losing credibility, leads, and revenue. Poor design, outdated content, or technical issues can erode customer trust immediately.",
        "According to Blue Corona, 48% of people judge a company's credibility based on website design alone. Businesses without professional design and ongoing maintenance often face slow performance, broken links, and security vulnerabilities, all of which reduce conversions and search visibility.",
        "A well-built website communicates brand value, engages users, and supports business goals. Beyond initial creation, regular updates and maintenance ensure it remains secure, fast, and aligned with evolving marketing strategies.",
        "Investing in both creation and maintenance provides a reliable foundation for all other digital marketing efforts. A high-performing website improves SEO, supports social media campaigns, and converts visitors into loyal customers.",
      ],
    },
    benefits: {
      title: "Key Benefits",
      items: [
        "Professionally designed website aligned with brand and objectives",
        "Secure, fast, and responsive performance across devices",
        "Optimized for search engines and user experience",
        "Scalable structure supporting growth and content updates",
        "Reduced downtime and technical issues",
        "Easy-to-update content for marketing agility",
        "Analytics and performance tracking integrated",
      ],
    },
    howItWorks: {
      title: "Our Approach",
      steps: [
        "Gather client requirements, goals, and brand assets",
        "Develop sitemap and wireframes for structure and UX",
        "Design visual layouts aligned with brand identity",
        "Build responsive, fast, and secure website",
        "Integrate SEO best practices and analytics tools",
        "Test across devices and browsers for functionality",
        "Launch website with monitoring for immediate issues",
        "Provide ongoing maintenance, updates, and backups",
        "Optimize for performance, security, and user experience",
        "Recommend iterative improvements based on analytics",
      ],
    },
    whoItsFor: [
      "Businesses launching a new website or redesign",
      "Companies with outdated or underperforming websites",
      "E-commerce or service businesses needing optimized digital storefronts",
      "Organizations requiring secure, scalable, and maintainable websites",
      "Brands seeking seamless integration with digital marketing efforts",
    ],
  },
];
