
import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-slate-900 py-16 sm:py-24">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
          <Zap className="w-4 h-4" />
          <span>New Arrivals: Quantum Series 2024</span>
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
          The Future of Tech, <span className="text-blue-500">Available Today.</span>
        </h1>
        
        <p className="text-lg text-slate-300 max-w-2xl mb-10">
          Discover hand-picked premium electronics designed to elevate your lifestyle. From flagship smartphones to custom gaming rigs, experience innovation.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/25">
            Explore Store <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/10 transition-all">
            View Deals
          </button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-slate-400 font-medium">
          <div className="flex flex-col items-center">
            <span className="text-2xl text-white">24/7</span>
            <span className="text-sm">Expert Support</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl text-white">Free</span>
            <span className="text-sm">Global Shipping</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl text-white">2yr</span>
            <span className="text-sm">Full Warranty</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl text-white">4.9/5</span>
            <span className="text-sm">User Rating</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
