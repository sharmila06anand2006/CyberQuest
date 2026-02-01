
import React, { useState, useEffect } from 'react';
import { Lesson, Question, QuestionType, UserStats } from '../types';

interface LessonEngineProps {
  lesson: Lesson;
  stats: UserStats;
  actions: any;
  onFinish: () => void;
}

export default function LessonEngine({ lesson, stats, actions, onFinish }: LessonEngineProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<any>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [lessonFinished, setLessonFinished] = useState(false);
  const [score, setScore] = useState(0);

  const question = lesson.questions[currentIdx];

  const handleCheck = () => {
    const correct = selectedOption === question.correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);
    if (correct) {
      setScore(s => s + 1);
    } else {
      actions.loseHeart();
    }
  };

  const nextQuestion = () => {
    if (currentIdx < lesson.questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    } else {
      actions.completeLesson(lesson.id, lesson.xpReward);
      setLessonFinished(true);
    }
  };

  if (lessonFinished) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-8 animate-in zoom-in duration-500">
        <div className="text-8xl">🏆</div>
        <div className="space-y-2">
          <h2 className="text-4xl font-black font-orbitron neon-text-magenta">MISSION COMPLETE</h2>
          <p className="text-slate-400">You've successfully defended this sector!</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="glass p-4 rounded-2xl">
            <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">XP Gained</p>
            <p className="text-2xl font-bold text-violet-400">+{lesson.xpReward}</p>
          </div>
          <div className="glass p-4 rounded-2xl">
            <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Accuracy</p>
            <p className="text-2xl font-bold text-magenta-400">{Math.round((score / lesson.questions.length) * 100)}%</p>
          </div>
        </div>

        <button 
          onClick={onFinish}
          className="w-full py-4 bg-magenta-600 rounded-xl font-bold text-lg shadow-xl shadow-magenta-900/40"
        >
          Return to Path
        </button>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-slate-950">
      {/* Top Bar */}
      <div className="p-4 flex items-center space-x-4 border-b border-white/5">
        <button onClick={onFinish} className="text-slate-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <div className="flex-1 h-3 bg-slate-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-violet-500 shadow-[0_0_10px_#8b5cf6] transition-all duration-500" 
            style={{ width: `${((currentIdx) / lesson.questions.length) * 100}%` }}
          />
        </div>
        <div className="flex items-center space-x-1 font-bold text-red-400">
          <span>❤️</span>
          <span>{stats.hearts}</span>
        </div>
      </div>

      {/* Question Content */}
      <div className="flex-1 p-6 space-y-6 overflow-y-auto">
        <h3 className="text-sm font-bold text-violet-400 uppercase tracking-widest">{question.title}</h3>
        
        {question.type === QuestionType.INBOX_SIM ? (
          <div className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
             <div className="p-3 bg-slate-800 border-b border-white/5 flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-magenta-600 flex items-center justify-center text-xs">💬</div>
                <div>
                  <p className="text-xs font-bold leading-none">{question.content.sender}</p>
                  <p className="text-[10px] text-slate-500">Active now</p>
                </div>
             </div>
             <div className="p-4">
                <div className="bg-slate-800 rounded-2xl rounded-tl-none p-4 text-sm inline-block max-w-[90%]">
                  {question.content.message}
                </div>
             </div>
          </div>
        ) : (
          <div className="text-xl font-medium leading-relaxed">
            {question.content}
          </div>
        )}

        {/* Options */}
        <div className="space-y-3 pt-4">
          {(question.options || ['True', 'False']).map((opt, i) => (
            <button
              key={i}
              onClick={() => !showFeedback && setSelectedOption(question.type === QuestionType.MCQ || question.type === QuestionType.INBOX_SIM || question.type === QuestionType.SCENARIO_CHOICE ? i : opt === 'True')}
              className={`
                w-full p-4 rounded-xl text-left font-medium transition-all border-2
                ${(selectedOption === (question.type === QuestionType.MCQ || question.type === QuestionType.INBOX_SIM || question.type === QuestionType.SCENARIO_CHOICE ? i : opt === 'True')) 
                  ? 'border-violet-500 bg-violet-500/10' 
                  : 'border-slate-800 bg-slate-900 hover:border-slate-700'}
                ${showFeedback && question.correctAnswer === (question.type === QuestionType.MCQ || question.type === QuestionType.INBOX_SIM || question.type === QuestionType.SCENARIO_CHOICE ? i : opt === 'True') ? 'border-green-500 bg-green-500/10' : ''}
              `}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Footer / Feedback */}
      <div className={`p-6 border-t border-white/5 transition-all duration-300 ${showFeedback ? (isCorrect ? 'bg-green-950/40' : 'bg-red-950/40') : 'bg-slate-900'}`}>
        {!showFeedback ? (
          <button
            disabled={selectedOption === null}
            onClick={handleCheck}
            className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest shadow-lg transform active:scale-95 transition-all
              ${selectedOption !== null ? 'bg-violet-600 shadow-violet-900/40' : 'bg-slate-800 text-slate-500 cursor-not-allowed'}
            `}
          >
            Check
          </button>
        ) : (
          <div className="space-y-4 animate-in slide-in-from-bottom duration-300">
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${isCorrect ? 'bg-green-500' : 'bg-red-500'}`}>
                {isCorrect ? '✨' : '⚠️'}
              </div>
              <div>
                <h4 className={`font-black text-xl ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                  {isCorrect ? 'EXCELLENT!' : 'HACKED!'}
                </h4>
                <p className="text-xs text-slate-400">Mission Intelligence Report</p>
              </div>
            </div>
            
            <div className="space-y-2">
               <p className="text-sm text-slate-200 font-medium leading-tight">{question.explanation}</p>
               <div className="bg-black/20 p-3 rounded-lg border border-white/5">
                 <p className="text-[10px] text-yellow-400 font-bold uppercase tracking-widest">Red Flags</p>
                 <ul className="text-xs text-slate-400 list-disc list-inside">
                   {question.redFlags.map((flag, idx) => <li key={idx}>{flag}</li>)}
                 </ul>
               </div>
            </div>

            <button
              onClick={nextQuestion}
              className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest shadow-lg ${isCorrect ? 'bg-green-600' : 'bg-red-600'}`}
            >
              Next Security Probe
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
