
import React from 'react';
import { UserStats, Lesson } from '../types';
import { UNITS } from '../data/content';

export default function Home({ stats, onNavigate, onStartLesson }: { 
  stats: UserStats, 
  onNavigate: (v: any) => void,
  onStartLesson: (l: Lesson) => void 
}) {
  const nextLesson = UNITS[0].lessons[0]; // Logic to find real next lesson

  return (
    <div className="flex-1 flex flex-col p-6 space-y-8 pb-24 overflow-y-auto">
      {/* Top Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-orbitron font-bold flex items-center gap-2">
            <span className="text-magenta-400">CYBER</span>QUEST
          </h1>
          <p className="text-slate-500 text-sm">Welcome back, Defender</p>
        </div>
        <div className="flex space-x-3">
          <div className="glass px-3 py-1 rounded-full flex items-center space-x-1 border-violet-500/30">
            <span className="text-red-400">❤️</span>
            <span className="font-bold">{stats.hearts}</span>
          </div>
          <div className="glass px-3 py-1 rounded-full flex items-center space-x-1 border-magenta-500/30">
            <span className="text-yellow-400">🔥</span>
            <span className="font-bold">{stats.streak}</span>
          </div>
        </div>
      </div>

      {/* Level Card */}
      <div className="glass-magenta rounded-3xl p-6 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10 transform scale-150 rotate-12 transition-transform group-hover:rotate-45">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        </div>
        <div className="relative z-10 space-y-4">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-magenta-300 font-bold text-xs uppercase tracking-widest">Current Status</p>
              <h3 className="text-2xl font-bold font-orbitron">Level {stats.level}</h3>
            </div>
            <p className="text-sm font-medium text-slate-400">{stats.xp} / {(stats.level) * 500} XP</p>
          </div>
          <div className="w-full h-3 bg-black/40 rounded-full overflow-hidden border border-white/5">
            <div 
              className="h-full bg-gradient-to-r from-magenta-500 to-violet-500 shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all duration-1000" 
              style={{ width: `${(stats.xp % 500) / 5}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Action */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold font-orbitron tracking-tight text-slate-300">Continue Mission</h2>
        <button 
          onClick={() => onStartLesson(nextLesson)}
          className="w-full glass rounded-2xl p-6 flex items-center justify-between border-violet-500/20 group hover:border-violet-500/50 transition-all hover:translate-y-[-4px]"
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-violet-600/20 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              🚀
            </div>
            <div className="text-left">
              <p className="text-xs text-violet-400 font-bold uppercase tracking-widest">Unit 1: Lesson 1</p>
              <h4 className="text-xl font-bold">The Cyber Mindset</h4>
            </div>
          </div>
          <div className="bg-violet-600 p-2 rounded-lg shadow-lg group-hover:bg-violet-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </div>
        </button>
      </div>

      {/* Daily Quests */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold font-orbitron tracking-tight text-slate-300">Daily Quests</h2>
        <div className="space-y-3">
          {[
            { label: "Complete 1 lesson", progress: stats.completedLessons.length > 0 ? 1 : 0, total: 1 },
            { label: "Earn 100 XP", progress: Math.min(stats.xp, 100), total: 100 },
          ].map((q, i) => (
            <div key={i} className="glass rounded-2xl p-4 flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-lg">
                {q.progress >= q.total ? '✅' : '🎯'}
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex justify-between text-xs font-bold">
                  <span>{q.label}</span>
                  <span>{q.progress}/{q.total}</span>
                </div>
                <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-violet-400" style={{ width: `${(q.progress/q.total)*100}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Quick Practice */}
      <button 
        onClick={() => onNavigate('path')}
        className="py-4 glass border-magenta-500/20 rounded-2xl font-bold text-magenta-400 hover:bg-magenta-500/10 transition-all border-dashed"
      >
        + Quick Practice Weak Topics
      </button>
    </div>
  );
}
