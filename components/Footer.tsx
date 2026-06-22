import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#020617] text-slate-500 text-xs py-8 border-t border-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-extrabold text-sm tracking-tight text-white uppercase">
            Premium<span className="text-[#10b981]">Wash</span>
          </span>
          <p className="mt-1">© {new Date().getFullYear()} PremiumWash. All rights reserved.</p>
        </div>
        <div className="flex space-x-6 text-slate-400">
          <p>Licensed & Insured</p>
          <p>Satisfaction Guaranteed</p>
        </div>
      </div>
    </footer>
  );
}
