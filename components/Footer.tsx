import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#020617] py-8 text-center text-slate-500 text-xs border-t border-slate-900">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Premium Power Washing. All rights reserved.</p>
        <p className="mt-2 text-slate-600">Built for lightning-fast performance and premium lead generation.</p>
      </div>
    </footer>
  );
}
