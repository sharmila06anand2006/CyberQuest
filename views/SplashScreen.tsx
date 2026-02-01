
import React from 'react';

export default function SplashScreen() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-1000">
      <div className="relative">
        <div className="w-32 h-32 rounded-full border-4 border-violet-500 flex items-center justify-center animate-pulse shadow-[0_0_50px_rgba(139,92,246,0.5)]">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <div className="absolute -inset-4 border border-magenta-500/20 rounded-full animate-ping opacity-20"></div>
      </div>
      
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-black font-orbitron tracking-tighter neon-text-violet">CYBERQUEST</h1>
        <p className="text-violet-300 font-medium tracking-[0.2em] uppercase text-xs opacity-75">Play. Detect. Defend.</p>
      </div>
      
      <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-violet-600 to-magenta-500 w-1/3 animate-[loading_2s_infinite_linear]"></div>
      </div>
      
      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
}
