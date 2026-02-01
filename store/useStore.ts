
import { useState, useEffect } from 'react';
import { UserStats } from '../types';

const INITIAL_STATS: UserStats = {
  xp: 0,
  level: 1,
  hearts: 5,
  streak: 0,
  lastActive: new Date().toISOString(),
  completedLessons: [],
  badges: [],
  accuracy: 100,
  totalTime: 0
};

export function useStore() {
  const [stats, setStats] = useState<UserStats>(() => {
    const saved = localStorage.getItem('cq_user_stats');
    return saved ? JSON.parse(saved) : INITIAL_STATS;
  });

  useEffect(() => {
    localStorage.setItem('cq_user_stats', JSON.stringify(stats));
  }, [stats]);

  const addXP = (amount: number) => {
    setStats(prev => {
      const newXP = prev.xp + amount;
      const newLevel = Math.floor(newXP / 500) + 1;
      return { ...prev, xp: newXP, level: newLevel };
    });
  };

  const completeLesson = (lessonId: string, xp: number) => {
    setStats(prev => {
      const completed = prev.completedLessons.includes(lessonId) 
        ? prev.completedLessons 
        : [...prev.completedLessons, lessonId];
      return { 
        ...prev, 
        completedLessons: completed,
        xp: prev.xp + xp,
        level: Math.floor((prev.xp + xp) / 500) + 1,
        streak: prev.streak + 1 // Simplified streak logic
      };
    });
  };

  const loseHeart = () => {
    setStats(prev => ({ ...prev, hearts: Math.max(0, prev.hearts - 1) }));
  };

  const refillHearts = () => {
    setStats(prev => ({ ...prev, hearts: 5 }));
  };

  const resetProgress = () => {
    setStats(INITIAL_STATS);
  };

  return { stats, addXP, completeLesson, loseHeart, refillHearts, resetProgress };
}
