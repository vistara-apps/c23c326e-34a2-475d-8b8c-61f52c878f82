import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { User, QuizAttempt, Badge } from './types';
import { POINT_VALUES, STREAK_BONUSES, BADGES } from './constants';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculatePoints(difficulty: 'Easy' | 'Medium' | 'Hard', streakCount: number): number {
  const basePoints = POINT_VALUES[difficulty];
  const streakMultiplier = getStreakMultiplier(streakCount);
  return Math.floor(basePoints * streakMultiplier);
}

export function getStreakMultiplier(streakCount: number): number {
  if (streakCount >= 30) return STREAK_BONUSES[30];
  if (streakCount >= 14) return STREAK_BONUSES[14];
  if (streakCount >= 7) return STREAK_BONUSES[7];
  if (streakCount >= 3) return STREAK_BONUSES[3];
  return 1;
}

export function checkForNewBadges(user: User, quizAttempt: QuizAttempt): Badge[] {
  const newBadges: Badge[] = [];
  const userBadgeIds = user.badges.map(b => b.badgeId);

  // First spin badge
  if (!userBadgeIds.includes('first-spin') && user.totalQuizzes === 1) {
    const badge = BADGES.find(b => b.badgeId === 'first-spin');
    if (badge) newBadges.push({ ...badge, earnedAt: new Date() });
  }

  // Streak master badge
  if (!userBadgeIds.includes('streak-master') && user.streakCount >= 7) {
    const badge = BADGES.find(b => b.badgeId === 'streak-master');
    if (badge) newBadges.push({ ...badge, earnedAt: new Date() });
  }

  // Quiz champion badge
  if (!userBadgeIds.includes('quiz-champion') && user.correctAnswers >= 50) {
    const badge = BADGES.find(b => b.badgeId === 'quiz-champion');
    if (badge) newBadges.push({ ...badge, earnedAt: new Date() });
  }

  return newBadges;
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

export function getAccuracyPercentage(correctAnswers: number, totalQuizzes: number): number {
  if (totalQuizzes === 0) return 0;
  return Math.round((correctAnswers / totalQuizzes) * 100);
}

export function canSpinToday(lastSpinDate?: Date): boolean {
  if (!lastSpinDate) return true;
  
  const today = new Date();
  const lastSpin = new Date(lastSpinDate);
  
  return today.toDateString() !== lastSpin.toDateString();
}

export function getTimeUntilNextSpin(lastSpinDate?: Date): string {
  if (!lastSpinDate || canSpinToday(lastSpinDate)) return 'Available now!';
  
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  
  const now = new Date();
  const diff = tomorrow.getTime() - now.getTime();
  
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  
  return `${hours}h ${minutes}m`;
}

export function generateUserId(): string {
  return 'user_' + Math.random().toString(36).substr(2, 9);
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
