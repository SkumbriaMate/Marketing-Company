"use client";

import Link from "next/link";

interface HeroProps {
  headline: string;
  subheadline: string;
  cta: string;
  ctaHref?: string;
}

export default function Hero({
  headline,
  subheadline,
  cta,
  ctaHref = "/book",
}: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 py-24 sm:py-32 lg:py-40 overflow-hidden">
      {/* Animated Vertical Lines - Subtle Movement */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 w-px bg-white transition-all duration-1000"
            style={{
              left: `${i * 5}%`,
              animation: `floatVertical ${8 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* Animated Horizontal Lines - Subtle Movement */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute left-0 right-0 h-px bg-white transition-all duration-1000"
            style={{
              top: `${i * 6.66}%`,
              animation: `floatHorizontal ${10 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Animated Diagonal Lines - Slow Rotation */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 bg-white transform rotate-45"
            style={{
              left: `${i * 15}%`,
              top: '-50%',
              height: '200%',
              animation: `drift ${15 + i}s linear infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Slowly Moving Gradient Orbs */}
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        style={{
          animation: 'moveOrb1 20s ease-in-out infinite',
        }}
      ></div>
      <div 
        className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-red-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        style={{
          animation: 'moveOrb2 25s ease-in-out infinite',
        }}
      ></div>
      <div 
        className="absolute top-1/2 left-1/2 w-72 h-72 bg-red-600 rounded-full mix-blend-multiply filter blur-2xl opacity-15"
        style={{
          animation: 'moveOrb3 30s ease-in-out infinite',
        }}
      ></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `
          repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255,255,255,0.1) 50px, rgba(255,255,255,0.1) 51px),
          repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,255,255,0.1) 50px, rgba(255,255,255,0.1) 51px)
        `,
      }}></div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes floatVertical {
          0%, 100% { transform: translateY(0px); opacity: 0.3; }
          50% { transform: translateY(-15px); opacity: 0.6; }
        }
        
        @keyframes floatHorizontal {
          0%, 100% { transform: translateX(0px); opacity: 0.3; }
          50% { transform: translateX(15px); opacity: 0.6; }
        }
        
        @keyframes drift {
          0% { transform: translateX(0) rotate(45deg); opacity: 0.3; }
          50% { transform: translateX(30px) rotate(45deg); opacity: 0.5; }
          100% { transform: translateX(0) rotate(45deg); opacity: 0.3; }
        }
        
        @keyframes moveOrb1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.1); }
        }
        
        @keyframes moveOrb2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, 30px) scale(1.15); }
        }
        
        @keyframes moveOrb3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, 20px) scale(1.05); }
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight animate-fadeIn">
            {headline}
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            {subheadline}
          </p>
          <Link
            href={ctaHref}
            className="inline-block bg-white text-gray-900 px-10 py-5 rounded-lg text-lg font-bold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-2xl animate-fadeIn"
            style={{ animationDelay: '0.4s' }}
          >
            {cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
