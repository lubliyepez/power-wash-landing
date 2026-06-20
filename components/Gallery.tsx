import React from 'react';

const projects = [
  {
    title: "Driveway Deep Clean",
    description: "3 years of deeply embedded oil stains and tire marks completely eliminated using high-pressure surface cleaners.",
    before: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80", 
    after: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80"   
  },
  {
    title: "Vinyl Siding Soft-Wash",
    description: "Safely cleared heavy green mold and algae buildup using specialized low-pressure chemical treatments.",
    before: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80", 
    after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"   
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#020617] py-20 lg:py-28 text-white border-t border-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[#10b981] uppercase tracking-wider font-semibold text-sm">Recent Transformations</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Our Work Speaks For Itself</h2>
          <p className="text-slate-400 text-lg">Real results from local properties. Click or hover over the transformations to check out the premium quality control.</p>
        </div>

        {/* Gallery Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="space-y-4 bg-[#0f172a] p-6 rounded-3xl border border-slate-800">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-slate-400 text-sm">{project.description}</p>
              
              {/* Before/After Split Grid */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="relative group overflow-hidden rounded-2xl border border-slate-800">
                  <img src={project.before} alt="Before cleaning" className="w-full h-64 object-cover filter grayscale brightness-50 group-hover:scale-105 transition-all duration-500" />
                  <span className="absolute bottom-3 left-3 bg-red-600/90 text-white font-bold text-xs uppercase px-2.5 py-1 rounded-md tracking-wider backdrop-blur-sm">Before</span>
                </div>
                <div className="relative group overflow-hidden rounded-2xl border border-slate-800">
                  <img src={project.after} alt="After cleaning" className="w-full h-64 object-cover group-hover:scale-105 transition-all duration-500" />
                  <span className="absolute bottom-3 left-3 bg-[#10b981]/90 text-black font-extrabold text-xs uppercase px-2.5 py-1 rounded-md tracking-wider backdrop-blur-sm">After Results</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
