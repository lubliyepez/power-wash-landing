import React from 'react';

const reviews = [
  {
    name: "Sarah M.",
    role: "Homeowner in North Va",
    stars: 5,
    text: "Absolutely incredible service! Our siding was covered in green mold from the winter, and they made it look brand new in under two hours. Polite, fast, and highly professional.",
  },
  {
    name: "David K.",
    role: "Property Manager",
    stars: 5,
    text: "We hired them to clean a long commercial concrete walkway and dumpster pad. The deep oil stains are completely gone. Will absolutely be using them for our other properties.",
  },
  {
    name: "Elena R.",
    role: "Townhouse Owner",
    stars: 5,
    text: "I was worried about our delicate wooden deck, but their soft-wash treatment was gentle and perfectly cleared away years of gray weathering. It looks stunning now!",
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#020617] py-20 lg:py-28 text-white border-t border-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[#10b981] uppercase tracking-wider font-semibold text-sm">Customer Reviews</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">What Your Neighbors Are Saying</h2>
          <p className="text-slate-400 text-lg">We pride ourselves on 5-star quality and pristine attention to detail.</p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-[#0f172a] p-8 rounded-3xl border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors">
              <div className="space-y-4">
                {/* Stars */}
                <div className="flex text-amber-400">
                  {[...Array(review.stars)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 italic text-sm leading-relaxed">"{review.text}"</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/60">
                <h4 className="font-bold text-base text-white">{review.name}</h4>
                <p className="text-xs text-slate-500">{review.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
