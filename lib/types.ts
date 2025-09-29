export interface User {
  userId: string;
  farcasterId?: string;
  walletAddress?: string;
  points: number;
  streakCount: number;
  badges: Badge[];
  profileCustomizations: ProfileCustomization[];
  spinTokens: number;
  createdAt: Date;
  lastSpinDate?: Date;
  totalQuizzes: number;
  correctAnswers: number;
}

export interface QuizAttempt {
  attemptId: string;
  userId: string;
  quizTopic: string;
  quizDifficulty: 'Easy' | 'Medium' | 'Hard';
  score: number;
  timestamp: Date;
  earnedPoints: number;
  questions: QuizQuestion[];
  userAnswers: string[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}

export interface Badge {
  badgeId: string;
  name: string;
  description: string;
  icon: string;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
  earnedAt?: Date;
}

export interface ProfileCustomization {
  id: string;
  type: 'avatar' | 'background' | 'border';
  name: string;
  value: string;
  cost: number;
}

export interface SpinResult {
  topic: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  color: string;
  pointsMultiplier: number;
}

export interface LeaderboardEntry {
  userId: string;
  username: string;
  avatar?: string;
  points: number;
  streakCount: number;
  rank: number;
  badges: Badge[];
}

export interface RewardItem {
  id: string;
  name: string;
  description: string;
  cost: number;
  type: 'crypto' | 'badge' | 'customization';
  value: string;
  icon: string;
}
