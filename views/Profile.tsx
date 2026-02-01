
import React from 'react';
import { UserStats, Badge } from '../types';
import { BADGES } from '../data/content';

export default function Profile({ stats, onNavigate }: { stats: UserStats, onNavigate: (v: any) => void }) {
  return (
    <div className="flex-1 flex flex-col p-6 space-y-8 pb-32 overflow-y-auto">
      <div className="flex flex-col items-center text-center space-y-4 py-6">
        <div className="relative">
          <div className="w-24 h-24 rounded-full border-4 border-magenta-500 p-1">
            <img src="https://picsum.photos/200/200" className="w-full h-full rounded-full object-cover" alt="Profile" />
          </div>
          <div className="absolute bottom-0 right-0 w-8 h-8 bg-violet-600 rounded-full border-4 border-slate-950 flex items-center justify-center text-xs font-bold">
            {stats.level}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-orbitron font-bold">Agent_Cyber</h2>
          <p className="text-magenta-400 text-sm font-bold uppercase tracking-widest">Elite Defender</p>
        </div>
      </div>

      {/* Grid Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="glass p-4 rounded-2xl text-center space-y-1">
          <p className="text-3xl font-black text-violet-400 font-orbitron">{stats.streak}</p>
          <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Day Streak</p>
        </div>
        <div className="glass p-4 rounded-2xl text-center space-y-1">
          <p className="text-3xl font-black text-magenta-400 font-orbitron">{stats.completedLessons.length}</p>
          <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Missions</p>
        </div>
      </div>

      {/* Badges Section */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold font-orbitron">Badges</h3>
          <span className="text-xs text-slate-500">{stats.badges.length} / {BADGES.length}</span>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {BADGES.map((badge) => {
            const isUnlocked = stats.xp > 50; // Mock unlock logic
            return (
              <div key={badge.id} className={`flex flex-col items-center space-y-2 opacity-${isUnlocked ? '100' : '20'}`}>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl glass ${isUnlocked ? 'border-yellow-500/50 bg-yellow-500/10' : ''}`}>
                  {badge.icon}
                </div>
                <p className="text-[8px] font-bold text-center uppercase tracking-tight">{badge.name}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Activity Graph placeholder */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold font-orbitron">Defensive Accuracy</h3>
        <div className="glass p-6 rounded-3xl h-32 flex items-end justify-between space-x-1">
           {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
             <div key={i} className="flex-1 bg-violet-600/20 rounded-t-sm relative group">
               <div 
                className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-violet-600 to-magenta-500 rounded-t-sm transition-all duration-1000" 
                style={{ height: `${h}%` }}
               />
             </div>
           ))}
        </div>
      </div>

      <button onClick={() => onNavigate('settings')} className="text-slate-500 text-sm font-bold underline">Agent Settings</button>
    </div>
  );
}
