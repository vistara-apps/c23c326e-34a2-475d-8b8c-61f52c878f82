'use client';

import { useState, useEffect } from 'react';
import { AppShell } from './components/AppShell';
import { SpinWheel } from './components/SpinWheel';
import { QuizCard } from './components/QuizCard';
import { LeaderboardEntry } from './components/LeaderboardEntry';
import { RewardDisplay } from './components/RewardDisplay';
import { User, QuizQuestion, SpinResult, LeaderboardEntry as LeaderboardEntryType } from '@/lib/types';
import { QUIZ_QUESTIONS, REWARDS } from '@/lib/constants';
import { calculatePoints, canSpinToday, getTimeUntilNextSpin, generateUserId, shuffleArray, checkForNewBadges } from '@/lib/utils';
import { Star, Flame, Trophy, BookOpen, Target } from 'lucide-react';

export default function HomePage() {
  const [user, setUser] = useState<User>({
    userId: generateUserId(),
    points: 150,
    streakCount: 3,
    badges: [],
    profileCustomizations: [],
    spinTokens: 1,
    createdAt: new Date(),
    lastSpinDate: undefined,
    totalQuizzes: 0,
    correctAnswers: 0,
  });

  const [currentQuiz, setCurrentQuiz] = useState<QuizQuestion | null>(null);
  const [quizResult, setQuizResult] = useState<{
    isCorrect: boolean;
    userAnswer: string;
    earnedPoints: number;
  } | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [hasSpunToday, setHasSpunToday] = useState(false);

  // Mock leaderboard data
  const [leaderboard] = useState<LeaderboardEntryType[]>([
    {
      userId: 'user1',
      username: 'QuizMaster',
      points: 2450,
      streakCount: 15,
      rank: 1,
      badges: [{ badgeId: 'champion', name: 'Champion', description: '', icon: '🏆', rarity: 'Legendary' }]
    },
    {
      userId: 'user2', 
      username: 'BrainBox',
      points: 1890,
      streakCount: 8,
      rank: 2,
      badges: [{ badgeId: 'streak', name: 'Streak', description: '', icon: '🔥', rarity: 'Rare' }]
    },
    {
      userId: user.userId,
      username: 'You',
      points: user.points,
      streakCount: user.streakCount,
      rank: 3,
      badges: user.badges
    }
  ]);

  useEffect(() => {
    setHasSpunToday(!canSpinToday(user.lastSpinDate));
  }, [user.lastSpinDate]);

  const handleSpinComplete = (result: SpinResult) => {
    // Get questions for the selected topic and difficulty
    const topicQuestions = QUIZ_QUESTIONS[result.topic as keyof typeof QUIZ_QUESTIONS];
    if (!topicQuestions) return;

    const difficultyQuestions = topicQuestions[result.difficulty];
    if (!difficultyQuestions || difficultyQuestions.length === 0) return;

    // Select a random question
    const randomQuestion = difficultyQuestions[Math.floor(Math.random() * difficultyQuestions.length)];
    
    // Shuffle the options
    const shuffledQuestion = {
      ...randomQuestion,
      options: shuffleArray(randomQuestion.options)
    };

    setCurrentQuiz(shuffledQuestion);
    setShowQuiz(true);
    
    // Update user's last spin date
    setUser(prev => ({
      ...prev,
      lastSpinDate: new Date()
    }));
    setHasSpunToday(true);
  };

  const handleQuizAnswer = (answer: string) => {
    if (!currentQuiz) return;

    const isCorrect = answer === currentQuiz.correctAnswer;
    const earnedPoints = isCorrect ? calculatePoints(
      // Extract difficulty from current quiz context
      'Medium', // Default to medium for demo
      user.streakCount
    ) : 0;

    // Update user stats
    setUser(prev => {
      const newUser = {
        ...prev,
        points: prev.points + earnedPoints,
        totalQuizzes: prev.totalQuizzes + 1,
        correctAnswers: prev.correctAnswers + (isCorrect ? 1 : 0),
        streakCount: isCorrect ? prev.streakCount + 1 : Math.max(0, prev.streakCount - 1)
      };

      // Check for new badges
      const newBadges = checkForNewBadges(newUser, {
        attemptId: 'temp',
        userId: newUser.userId,
        quizTopic: 'Math', // Would be dynamic
        quizDifficulty: 'Medium',
        score: isCorrect ? 100 : 0,
        timestamp: new Date(),
        earnedPoints,
        questions: [currentQuiz],
        userAnswers: [answer]
      });

      return {
        ...newUser,
        badges: [...newUser.badges, ...newBadges]
      };
    });

    setQuizResult({
      isCorrect,
      userAnswer: answer,
      earnedPoints
    });
  };

  const handleRewardRedeem = (rewardId: string) => {
    const reward = REWARDS.find(r => r.id === rewardId);
    if (!reward || user.points < reward.cost) return;

    setUser(prev => ({
      ...prev,
      points: prev.points - reward.cost
    }));

    // In a real app, this would trigger the actual reward distribution
    alert(`Successfully redeemed ${reward.name}!`);
  };

  const resetQuiz = () => {
    setCurrentQuiz(null);
    setQuizResult(null);
    setShowQuiz(false);
  };

  return (
    <AppShell>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Welcome Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gradient">
            Welcome to EduSpin!
          </h1>
          <p className="text-text-secondary text-lg">
            Spin for Knowledge, Earn for Real
          </p>
        </div>

        {/* User Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass-card p-4 text-center">
            <Star className="w-8 h-8 text-accent mx-auto mb-2" />
            <div className="text-2xl font-bold text-fg">{user.points}</div>
            <div className="text-sm text-text-secondary">Points</div>
          </div>
          
          <div className="glass-card p-4 text-center">
            <Flame className="w-8 h-8 text-orange-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-fg">{user.streakCount}</div>
            <div className="text-sm text-text-secondary">Day Streak</div>
          </div>
          
          <div className="glass-card p-4 text-center">
            <BookOpen className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-fg">{user.totalQuizzes}</div>
            <div className="text-sm text-text-secondary">Quizzes</div>
          </div>
          
          <div className="glass-card p-4 text-center">
            <Target className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-fg">
              {user.totalQuizzes > 0 ? Math.round((user.correctAnswers / user.totalQuizzes) * 100) : 0}%
            </div>
            <div className="text-sm text-text-secondary">Accuracy</div>
          </div>
        </div>

        {/* Main Content */}
        {!showQuiz ? (
          <div className="space-y-8">
            {/* Daily Spin Section */}
            <div className="text-center space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-fg">Daily Knowledge Spin</h2>
                {hasSpunToday ? (
                  <p className="text-text-secondary">
                    Next spin available in: {getTimeUntilNextSpin(user.lastSpinDate)}
                  </p>
                ) : (
                  <p className="text-text-secondary">
                    Spin the wheel to discover your learning topic for today!
                  </p>
                )}
              </div>
              
              <SpinWheel 
                onSpinComplete={handleSpinComplete}
                disabled={hasSpunToday}
              />
            </div>

            {/* Leaderboard Preview */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-fg flex items-center space-x-2">
                  <Trophy className="w-6 h-6 text-accent" />
                  <span>Leaderboard</span>
                </h2>
                <button className="text-accent text-sm hover:underline">
                  View All
                </button>
              </div>
              
              <div className="space-y-3">
                {leaderboard.slice(0, 3).map((entry) => (
                  <LeaderboardEntry 
                    key={entry.userId}
                    entry={entry}
                    isCurrentUser={entry.userId === user.userId}
                    variant={entry.userId === user.userId ? 'userHighlight' : 'default'}
                  />
                ))}
              </div>
            </div>

            {/* Rewards Preview */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-fg flex items-center space-x-2">
                <Star className="w-6 h-6 text-accent" />
                <span>Available Rewards</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {REWARDS.slice(0, 2).map((reward) => (
                  <RewardDisplay
                    key={reward.id}
                    reward={reward}
                    userPoints={user.points}
                    onRedeem={handleRewardRedeem}
                    variant={reward.type}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Quiz Section */
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-fg mb-2">
                Daily Quiz Challenge
              </h2>
              <p className="text-text-secondary">
                Answer correctly to earn points and maintain your streak!
              </p>
            </div>

            {currentQuiz && (
              <QuizCard
                question={currentQuiz}
                onAnswer={handleQuizAnswer}
                showResult={quizResult !== null}
                userAnswer={quizResult?.userAnswer}
                isCorrect={quizResult?.isCorrect}
              />
            )}

            {quizResult && (
              <div className="text-center space-y-4">
                <div className="glass-card p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-fg mb-2">
                    {quizResult.isCorrect ? '🎉 Excellent!' : '💪 Keep Learning!'}
                  </h3>
                  <p className="text-text-secondary mb-4">
                    {quizResult.isCorrect 
                      ? `You earned ${quizResult.earnedPoints} points!`
                      : 'Better luck next time. Come back tomorrow for another chance!'
                    }
                  </p>
                  <button
                    onClick={resetQuiz}
                    className="btn-primary"
                  >
                    Continue Learning
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </AppShell>
  );
}
