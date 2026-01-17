"use client";

import { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Review {
  id: number;
  name: string;
  company: string;
  rating: number;
  comment: string;
  date: string;
}

// Placeholder reviews - will be replaced with real data later
const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "TechStart Solutions",
    rating: 5,
    comment: "Aurora Marketing transformed our online presence completely. Our traffic increased by 200% in just 3 months. Highly professional team!",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "Elite Consulting Group",
    rating: 5,
    comment: "The strategic approach to SEO and brand management is unmatched. We finally rank on the first page for our key services.",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    company: "Bloom Wellness",
    rating: 5,
    comment: "Outstanding service! They don't just do SEO, they understand our brand and help us grow strategically. Worth every penny.",
    date: "3 weeks ago",
  },
  {
    id: 4,
    name: "David Thompson",
    company: "Premier Legal Services",
    rating: 5,
    comment: "Finally found a marketing partner who delivers results. Our consultation bookings have doubled since working with Aurora Marketing.",
    date: "2 months ago",
  },
  {
    id: 5,
    name: "Jessica Martinez",
    company: "Artisan Goods Co.",
    rating: 4,
    comment: "Great team to work with. They're responsive, strategic, and genuinely care about our success. Seeing consistent growth.",
    date: "1 month ago",
  },
];

export default function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4000); // Auto-switch every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50; // Minimum distance for a valid swipe

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        // Swiped left - go to next
        goToNext();
      } else {
        // Swiped right - go to previous
        goToPrevious();
      }
    }
  };

  const currentReview = reviews[currentIndex];

  return (
    <div 
      className="relative bg-gray-50 rounded-lg p-8 sm:p-12 touch-pan-y select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-3xl mx-auto">
        {/* Stars */}
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className={`w-5 h-5 ${
                index < currentReview.rating
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Review Text */}
        <blockquote className="text-center mb-6">
          <p className="text-lg text-gray-700 italic leading-relaxed">
            "{currentReview.comment}"
          </p>
        </blockquote>

        {/* Author */}
        <div className="text-center">
          <p className="font-semibold text-gray-900">{currentReview.name}</p>
          <p className="text-sm text-gray-600">{currentReview.company}</p>
          <p className="text-xs text-gray-500 mt-1">{currentReview.date}</p>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center space-x-4 mt-8">
          <button
            onClick={goToPrevious}
            className="p-2 rounded-full border border-gray-300 hover:bg-white transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          {/* Dots */}
          <div className="flex space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-gray-900" : "bg-gray-300"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="p-2 rounded-full border border-gray-300 hover:bg-white transition-colors"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
