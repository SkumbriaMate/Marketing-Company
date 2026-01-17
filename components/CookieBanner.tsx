"use client";

import { useState, useEffect } from "react";
import { Cookie } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookiesAccepted");
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slideUp">
      <div className="bg-gray-900 text-white shadow-2xl border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start space-x-4 flex-1">
              <Cookie className="w-6 h-6 text-white flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm sm:text-base leading-relaxed">
                  We use cookies to ensure our website functions properly. No personal information is stored or tracked. Cookies are only necessary for booking consultations and site functionality. If you prefer not to use cookies, we kindly ask that you do not proceed with booking.
                </p>
              </div>
            </div>
            <button
              onClick={handleAccept}
              className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap flex-shrink-0 w-full sm:w-auto"
            >
              Yes, I Understand
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
