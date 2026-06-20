"use client";

import React, { useState } from 'react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#0f172a] py-20 lg:py-28 text-white border-t border-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-[#020617] rounded-3xl border border-slate-800 p-8 sm:p-12 shadow-2xl transition-all duration-500">
          
          {!isSubmitted ? (
            <>
              {/* Form Header */}
              <div className="text-center space-y-3 mb-10">
                <span className="text-[#10b981] uppercase tracking-wider font-semibold text-sm">Get a Free Estimate</span>
                <h2 className="text-3xl font-extrabold tracking-tight">Request Your Service Today</h2>
                <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
                  Fill out the form below and our team will reach out with a personalized, hassle-free quote within 24 hours.
                </p>
              </div>

              {/* Interactive Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="bg-[#0f172a] border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#10b981] transition-colors"
                      required 
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="(555) 000-0000" 
                      className="bg-[#0f172a] border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#10b981] transition-colors"
                      required 
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-[#0f172a] border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#10b981] transition-colors"
                    required 
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Requested Service</label>
                  <select className="bg-[#0f172a] border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#10b981] text-slate-300 transition-colors appearance-none cursor-pointer">
                    <option value="house">House Pressure Washing / Soft-Wash</option>
                    <option value="roof">Roof Algae & Moss Treatment</option>
                    <option value="concrete">Driveway, Patio & Concrete Cleaning</option>
                    <option value="multiple">Multiple / Full Property Package</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Property Details / Notes</label>
                  <textarea 
                    rows={4} 
                    placeholder="Tell us a little bit about your project..." 
                    className="bg-[#0f172a] border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#10b981] transition-colors resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#10b981] hover:bg-[#0ea5e9] text-black font-extrabold text-sm uppercase tracking-wider py-4 rounded-xl shadow-lg transition-all duration-300 transform active:scale-[0.99] mt-4"
                >
                  Submit Quote Request
                </button>
              </form>
            </>
          ) : (
            /* Premium Success State Box */
            <div className="text-center py-12 space-y-6">
              <div className="mx-auto w-16 h-16 bg-[#10b981]/10 rounded-full flex items-center justify-center border border-[#10b981]/30">
                <svg className="w-8 h-8 text-[#10b981]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-extrabold tracking-tight text-white">Estimate Request Received!</h2>
                <p className="text-slate-400 text-base max-w-md mx-auto">
                  Thank you for reaching out. Our team is already reviewing your property details and will connect with you shortly.
                </p>
              </div>
              <div className="pt-4">
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs font-semibold uppercase tracking-wider text-[#10b981] hover:text-[#0ea5e9] underline transition-colors"
                >
                  ← Fill out another request
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
