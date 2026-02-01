
import React, { useState, useEffect } from 'react';
import { useStore } from './store/useStore';
import SplashScreen from './views/SplashScreen';
import Onboarding from './views/Onboarding';
import Home from './views/Home';
import LearningPath from './views/LearningPath';
import LessonEngine from './views/LessonEngine';
import Profile from './views/Profile';
import Leaderboard from './views/Leaderboard';
import Settings from './views/Settings';
import { Unit, Lesson } from './types';

export default function App() {
  const { stats, ...actions } = useStore();
  const [currentView, setCurrentView] = useState<'splash' | 'onboarding' | 'home' | 'path' | 'lesson' | 'profile' | 'leaderboard' | 'settings'>('splash');
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (stats.xp === 0 && stats.completedLessons.length === 0) {
        setCurrentView('onboarding');
      } else {
        setCurrentView('home');
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleStartLesson = (lesson: Lesson) => {
    setActiveLesson(lesson);
    setCurrentView('lesson');
  };

  const renderView = () => {
    switch (currentView) {
      case 'splash': return <SplashScreen />;
      case 'onboarding': return <Onboarding onComplete={() => setCurrentView('home')} />;
      case 'home': return <Home stats={stats} onNavigate={setCurrentView} onStartLesson={handleStartLesson} />;
      case 'path': return <LearningPath stats={stats} onNavigate={setCurrentView} onStartLesson={handleStartLesson} />;
      case 'lesson': return activeLesson ? (
        <LessonEngine 
          lesson={activeLesson} 
          stats={stats} 
          actions={actions} 
          onFinish={() => setCurrentView('path')} 
        />
      ) : null;
      case 'profile': return <Profile stats={stats} onNavigate={setCurrentView} />;
      case 'leaderboard': return <Leaderboard onNavigate={setCurrentView} />;
      case 'settings': return <Settings stats={stats} actions={actions} onNavigate={setCurrentView} />;
      default: return <Home stats={stats} onNavigate={setCurrentView} onStartLesson={handleStartLesson} />;
    }
  };

  return (
    <div className="min-h-screen cyber-gradient text-slate-100 flex flex-col max-w-md mx-auto relative overflow-hidden shadow-2xl">
      {renderView()}
      
      {/* Navigation Bar - Sticky bottom for mobile-first feel */}
      {['home', 'path', 'leaderboard', 'profile'].includes(currentView) && (
        <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto glass border-t border-white/10 flex justify-around py-3 z-50">
          <button onClick={() => setCurrentView('home')} className={`p-2 transition-all ${currentView === 'home' ? 'text-violet-400 neon-text-violet' : 'text-slate-500'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          </button>
          <button onClick={() => setCurrentView('path')} className={`p-2 transition-all ${currentView === 'path' ? 'text-violet-400 neon-text-violet' : 'text-slate-500'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
          </button>
          <button onClick={() => setCurrentView('leaderboard')} className={`p-2 transition-all ${currentView === 'leaderboard' ? 'text-violet-400 neon-text-violet' : 'text-slate-500'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
          </button>
          <button onClick={() => setCurrentView('profile')} className={`p-2 transition-all ${currentView === 'profile' ? 'text-violet-400 neon-text-violet' : 'text-slate-500'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
          </button>
        </nav>
      )}
    </div>
  );
}
