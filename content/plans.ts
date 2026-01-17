export interface PlanFeature {
  name: string;
  icon?: string;
}

export interface Plan {
  name: string;
  description: string;
  features: PlanFeature[];
}

export const planFeatures: PlanFeature[] = [
  { name: "1:1 Strategy Calls" },
  { name: "24/7 Support" },
  { name: "Customized Roadmaps" },
  { name: "Ongoing Optimization" },
];

export const plans: Plan[] = [
  {
    name: "Starter",
    description:
      "Perfect for businesses just starting their digital presence journey.",
    features: [
      { name: "1:1 Strategy Calls" },
      { name: "Customized Roadmaps" },
      { name: "Ongoing Optimization" },
    ],
  },
  {
    name: "Growth",
    description:
      "Ideal for growing businesses ready to scale their digital presence.",
    features: [
      { name: "1:1 Strategy Calls" },
      { name: "24/7 Support" },
      { name: "Customized Roadmaps" },
      { name: "Ongoing Optimization" },
    ],
  },
  {
    name: "Executive Brand Partnership",
    description:
      "Comprehensive strategy and management for established brands.",
    features: [
      { name: "1:1 Strategy Calls" },
      { name: "24/7 Support" },
      { name: "Customized Roadmaps" },
      { name: "Ongoing Optimization" },
    ],
  },
];
