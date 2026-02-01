
import React from 'react';
import { UserStats, Lesson, Unit } from '../types';
import { UNITS } from '../data/content';

export default function LearningPath({ stats, onNavigate, onStartLesson }: { 
  stats: UserStats, 
  onNavigate: (v: any) => void,
  onStartLesson: (l: Lesson) => void 
}) {
  return (
    <div className="flex-1 flex flex-col p-6 space-y-8 pb-32 overflow-y-auto relative">
      <div className="sticky top-0 z-20 glass p-4 -mx-6 mb-4 flex justify-between items-center border-b border-white/5">
        <h2 className="text-xl font-orbitron font-bold">Learning Map</h2>
        <div className="flex space-x-2">
          <div className="bg-violet-900/50 px-3 py-1 rounded-full border border-violet-500/30 text-xs font-bold text-violet-300">
            {stats.xp} XP
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-12 py-10">
        {UNITS.map((unit, uIdx) => (
          <div key={unit.id} className="w-full space-y-8 flex flex-col items-center">
            {/* Unit Header */}
            <div className="w-full glass-magenta p-4 rounded-2xl text-center">
              <h3 className="text-sm font-bold text-magenta-300 uppercase tracking-widest">{unit.title}</h3>
              <p className="text-xs text-slate-400">{unit.description}</p>
            </div>

            {/* Lesson Nodes */}
            <div className="flex flex-col items-center space-y-16">
              {unit.lessons.map((lesson, lIdx) => {
                const isCompleted = stats.completedLessons.includes(lesson.id);
                const isUnlocked = lIdx === 0 && uIdx === 0 || isCompleted || stats.completedLessons.includes(unit.lessons[lIdx-1]?.id);
                const xOffset = lIdx % 2 === 0 ? 'translate-x-6' : '-translate-x-6';

                return (
                  <div key={lesson.id} className={`relative group ${xOffset}`}>
                    {/* Connection Line (simplified) */}
                    {lIdx < unit.lessons.length - 1 && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 h-16 w-1 border-l-2 border-dashed border-slate-700 -z-10" />
                    )}

                    <button
                      disabled={!isUnlocked}
                      onClick={() => onStartLesson(lesson)}
                      className={`
                        w-16 h-16 rounded-3xl flex items-center justify-center text-2xl transition-all relative
                        ${isUnlocked ? 'bg-violet-600 shadow-[0_0_20px_#8b5cf666] active:scale-90 hover:scale-105 border-b-4 border-violet-800 cursor-pointer' : 'bg-slate-800 cursor-not-allowed'}
                        ${isCompleted ? 'ring-4 ring-magenta-500/50' : ''}
                      `}
                    >
                      {isCompleted ? '⭐' : isUnlocked ? '🛡️' : '🔒'}
                      {isUnlocked && !isCompleted && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-ping" />
                      )}
                    </button>
                    
                    <div className="absolute top-1/2 left-20 -translate-y-1/2 w-48 text-left opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                       <p className="text-xs font-bold text-violet-400">{lesson.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
