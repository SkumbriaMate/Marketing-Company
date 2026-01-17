"use client";

import { useState } from "react";
import {
  Search,
  Palette,
  MapPin,
  Share2,
  Monitor,
  TrendingUp,
  MessageSquare,
  Code,
  ChevronDown,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

const services: Service[] = [
  {
    title: "SEO Management",
    description:
      "Managing your search visibility through ongoing optimization, technical improvements, and content alignment to drive consistent, long-term growth.",
    icon: Search,
  },
  {
    title: "Brand Identity Management",
    description:
      "Ensuring your brand remains clear, consistent, and trustworthy across all digital touchpoints.",
    icon: Palette,
  },
  {
    title: "Google Business Profile Optimization",
    description:
      "Optimizing and managing your Google Business Profile to improve local visibility, credibility, and customer discovery.",
    icon: MapPin,
  },
  {
    title: "Social Media Visibility Strategy",
    description:
      "Strategic oversight of social channels to support brand positioning, visibility, and trust — without vanity posting.",
    icon: Share2,
  },
  {
    title: "Website Optimization & UX",
    description:
      "Improving website speed, structure, and user experience so visitors understand your value quickly and take action.",
    icon: Monitor,
  },
  {
    title: "Ongoing Brand & Growth Oversight",
    description:
      "Continuous strategic management to align SEO, brand, and digital presence as your business grows.",
    icon: TrendingUp,
  },
  {
    title: "Strategy Calls",
    description:
      "1:1 strategy sessions providing direct guidance, planning, and decision-making support.",
    icon: MessageSquare,
  },
  {
    title: "Website Creation & Maintenance",
    description:
      "Building and maintaining performance-focused websites that evolve alongside your brand.",
    icon: Code,
  },
];

export default function ServicesAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {services.map((service, index) => {
        const Icon = service.icon;
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-colors"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full px-6 py-4 flex items-center justify-between text-left group"
            >
              <div className="flex items-center space-x-3 flex-1">
                <Icon className="w-5 h-5 text-gray-600 flex-shrink-0" />
                <span className="font-semibold text-gray-900 text-sm">
                  {service.title}
                </span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`transition-all duration-200 ease-in-out ${
                isOpen
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              <div className="px-6 pb-4 pt-0">
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
