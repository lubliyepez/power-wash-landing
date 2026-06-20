import React from 'react';

const heroConfig = {
  badge: "⭐ Rated #1 in Fairfax & Loudoun Counties",
  title: "Professional Pressure Washing & Exterior Cleaning",
  subtitle: "We restore your home's curb appeal in hours. Licensed, insured, and proudly serving local homeowners with 5-star service.",
  ctaText: "Get Your Free Quote",
  ctaLink: "#contact",
  phoneText: "Call (703) 555-0199",
  phoneLink: "tel:7035550199",
  bgImage: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80"
};

export default function Hero() {
  return (
    <section className="relative bg-[#020617] text-white overflow-hidden min-h-[85vh] flex items-center">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 z-0"
        style={{ backgroundImage: `url(${heroConfig.bgImage})` }}
      />
      
      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#0f172a]/90 to-transparent z-0" />

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-32">
        <div className="max-w-3xl space-y-6 text-left">
          
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-medium text-[#10b981] tracking-wide border border-white/10">
            {heroConfig.badge}
          </div>

          {/* Main Value Proposition */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            {heroConfig.title}
          </h1>

          {/* Subtitle description */}
          <p className="text-lg sm:text-xl text-slate-200 font-normal max-w-2xl leading-relaxed">
            {heroConfig.subtitle}
          </p>

          {/* Call to Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={heroConfig.ctaLink}
              className="inline-flex items-center justify-center bg-[#10b981] hover:bg-[#34d399] text-black font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 text-center text-lg"
            >
              {heroConfig.ctaText}
            </a>
            
            <a
              href={heroConfig.phoneLink}
              className="inline-flex items-center justify-center bg-transparent hover:bg-white/5 text-white font-semibold px-8 py-4 rounded-xl border-2 border-slate-700 hover:border-slate-500 transition-all duration-200 text-center text-lg gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#10b981]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 0 1-7.197-7.197c-.154-.441.012-.928.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              {heroConfig.phoneText}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}