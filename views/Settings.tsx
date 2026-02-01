
import React from 'react';

export default function Settings({ stats, actions, onNavigate }: any) {
  return (
    <div className="flex-1 flex flex-col p-6 space-y-8">
      <div className="flex items-center space-x-4">
        <button onClick={() => onNavigate('profile')} className="p-2 glass rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <h2 className="text-2xl font-orbitron font-bold">Settings</h2>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest p-2">General</p>
        <div className="glass rounded-2xl overflow-hidden divide-y divide-white/5">
          <div className="p-4 flex justify-between items-center">
            <span>Sound Effects</span>
            <div className="w-12 h-6 bg-violet-600 rounded-full p-1 relative cursor-pointer">
              <div className="absolute right-1 w-4 h-4 bg-white rounded-full shadow-md"></div>
            </div>
          </div>
          <div className="p-4 flex justify-between items-center">
            <span>Dark Theme</span>
            <div className="w-12 h-6 bg-magenta-600 rounded-full p-1 relative cursor-pointer">
              <div className="absolute right-1 w-4 h-4 bg-white rounded-full shadow-md"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest p-2">Account Data</p>
        <div className="glass rounded-2xl overflow-hidden divide-y divide-white/5">
          <button onClick={() => {
            if(confirm("Are you sure? This will wipe all your progress.")) {
              actions.resetProgress();
              onNavigate('splash');
              window.location.reload();
            }
          }} className="w-full p-4 text-left text-red-400 font-bold">Reset All Progress</button>
          <button className="w-full p-4 text-left">Export Learning Report</button>
        </div>
      </div>

      <div className="flex-1" />

      <div className="text-center p-8 space-y-2 opacity-50">
        <p className="text-xs font-bold font-orbitron tracking-widest">CYBERQUEST V1.0.4</p>
        <p className="text-[10px]">ENCRYPTED SECURE CONNECTION ACTIVE</p>
      </div>
    </div>
  );
}
