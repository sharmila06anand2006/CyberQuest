
import React, { useState } from 'react';

export default function Onboarding({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);
  
  const slides = [
    {
      title: "Cyber Threats are Real",
      desc: "Scammers use AI and psychological tricks to steal your data and money every day.",
      icon: "⚠️",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Interactive Missions",
      desc: "Learn by doing. Experience simulated SMS, calls, and emails in a safe environment.",
      icon: "🎯",
      color: "from-violet-500 to-magenta-500"
    },
    {
      title: "Become a Defender",
      desc: "Earn XP, unlock badges, and master the skills to keep yourself and your family safe.",
      icon: "🛡️",
      color: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <div className="flex-1 flex flex-col p-8 justify-between animate-in slide-in-from-right duration-500">
      <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6">
        <div className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${slides[step].color} shadow-2xl flex items-center justify-center text-6xl transform rotate-3`}>
          {slides[step].icon}
        </div>
        <h2 className="text-3xl font-orbitron font-bold neon-text-violet">{slides[step].title}</h2>
        <p className="text-slate-400 text-lg leading-relaxed">{slides[step].desc}</p>
      </div>

      <div className="space-y-8">
        <div className="flex justify-center space-x-2">
          {slides.map((_, i) => (
            <div key={i} className={`h-2 rounded-full transition-all duration-300 ${i === step ? 'w-8 bg-violet-500 shadow-[0_0_10px_#8b5cf6]' : 'w-2 bg-slate-700'}`} />
          ))}
        </div>
        
        <button 
          onClick={() => step < slides.length - 1 ? setStep(step + 1) : onComplete()}
          className="w-full py-4 bg-violet-600 rounded-xl font-bold text-lg shadow-xl shadow-violet-900/40 transform active:scale-95 transition-all border border-violet-400/30"
        >
          {step < slides.length - 1 ? 'Next' : 'Get Started'}
        </button>
      </div>
    </div>
  );
}
