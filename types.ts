
export enum QuestionType {
  MCQ = 'mcq',
  TRUE_FALSE = 'true_false',
  INBOX_SIM = 'inbox_sim',
  PHISHING_SPOTTER = 'phishing_spotter',
  DRAG_DROP = 'drag_drop',
  SCENARIO_CHOICE = 'scenario_choice'
}

export interface Question {
  id: string;
  type: QuestionType;
  title: string;
  content: any; // Context specific to question type
  options?: string[];
  correctAnswer: any;
  explanation: string;
  redFlags: string[];
  safetyTip: string;
  difficulty: number;
}

export interface Lesson {
  id: string;
  unitId: string;
  title: string;
  description: string;
  questions: Question[];
  xpReward: number;
}

export interface Unit {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface UserStats {
  xp: number;
  level: number;
  hearts: number;
  streak: number;
  lastActive: string;
  completedLessons: string[];
  badges: string[];
  accuracy: number;
  totalTime: number;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
}
