"use client";

import React from 'react';

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#020617]/80 backdrop-blur-md border-b border-slate-900 text-white transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Branding */}
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="text-xl font-black tracking-wider uppercase">
              Premium<span className="text-[#10b981]">Wash</span>
            </span>
          </div>

          {/* Center Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <button onClick={() => scrollToSection('services')} className="hover:text-[#10b981] transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('gallery')} className="hover:text-[#10b981] transition-colors">
              Our Work
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-[#10b981] transition-colors">
              Testimonials
            </button>
          </div>

          {/* Right Action Button */}
          <div>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-[#10b981] hover:bg-[#0ea5e9] text-black font-extrabold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-md transition-all duration-300 transform active:scale-95"
            >
              Get a Quote
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}
