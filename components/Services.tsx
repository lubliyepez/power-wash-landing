import React from 'react';

const services = [
  {
    title: "House Pressure Washing",
    description: "Safely eliminate green mold, algae, and dirt from siding, brick, and stucco using our advanced soft-wash technique.",
    features: ["Vinyl & Wood Siding", "Brick & Stucco", "Low-Pressure Soft Wash"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    )
  },
  {
    title: "Roof Algae Treatment",
    description: "Remove ugly black streaks and destructive moss without damaging your shingles. Extends the lifespan of your roof instantly.",
    features: ["Asphalt Shingle Safe", "Eco-Friendly Cleaners", "Prevents Wood Decay"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5M2.25 14h19.5M2.25 7h19.5M4.5 21v-7m15 7v-7M7.5 14v-7m9 7v-7M10.5 7V3.75c0-.414.336-.75.75-.75h1.5c.414 0 .75.336.75.75V7M12 21V7" />
      </svg>
    )
  },
  {
    title: "Driveway & Concrete Cleaning",
    description: "Blast away deep oil stains, dark tire marks, and slippery grime from your concrete driveways, sidewalks, and patios.",
    features: ["High-PSI Surface Cleaners", "Oil Stain Pre-Treatment", "Sidewalks & Patios"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m11.142 0L21.75 12l-4.179-2.25M12 5.25v13.5" />
      </svg>
    )
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-[#0f172a] py-20 lg:py-28 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[#10b981] uppercase tracking-wider font-semibold text-sm">Our Premium Services</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Professional Exterior Cleaning Results</h2>
          <p className="text-slate-400 text-lg">We combine commercial-grade surface equipment with tailored soft-washing to handle every surface around your property safely.</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-[#020617] p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-5">
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#10b981] group-hover:bg-[#10b981] group-hover:text-black transition-all duration-300">
                  {service.icon}
                </div>
                
                {/* Title and Description */}
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                
                {/* Feature Mini-list */}
                <ul className="space-y-2.5 pt-4 border-t border-slate-800/60">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-sm text-slate-300">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#10b981]">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
