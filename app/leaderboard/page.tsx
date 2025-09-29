'use client';

import { useState, useEffect } from 'react';
import { AppShell } from '../components/AppShell';
import { LeaderboardEntry } from '../components/LeaderboardEntry';
import { User, LeaderboardEntry as LeaderboardEntryType } from '@/lib/types';
import { Trophy, Medal, Award, Crown, RefreshCw } from 'lucide-react';

// Mock leaderboard data - in production, this would come from an API
const MOCK_LEADERBOARD: LeaderboardEntryType[] = [
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
    userId: 'user3',
    username: 'KnowledgeSeeker',
    points: 1650,
    streakCount: 12,
    rank: 3,
    badges: [{ badgeId: 'scholar', name: 'Scholar', description: '', icon: '📚', rarity: 'Epic' }]
  },
  {
    userId: 'user4',
    username: 'QuizWizard',
    points: 1420,
    streakCount: 6,
    rank: 4,
    badges: []
  },
  {
    userId: 'user5',
    username: 'MindBender',
    points: 1280,
    streakCount: 9,
    rank: 5,
    badges: []
  },
  {
    userId: 'user6',
    username: 'EduExplorer',
    points: 1150,
    streakCount: 4,
    rank: 6,
    badges: []
  },
  {
    userId: 'user7',
    username: 'ThinkTank',
    points: 980,
    streakCount: 7,
    rank: 7,
    badges: []
  },
  {
    userId: 'user8',
    username: 'BrainTrainer',
    points: 850,
    streakCount: 3,
    rank: 8,
    badges: []
  }
];

export default function LeaderboardPage() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntryType[]>(MOCK_LEADERBOARD);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [currentUser] = useState<User>({
    userId: 'current-user',
    points: 750,
    streakCount: 5,
    badges: [],
    profileCustomizations: [],
    spinTokens: 1,
    createdAt: new Date(),
    totalQuizzes: 25,
    correctAnswers: 18,
  });

  // Add current user to leaderboard if not already present
  useEffect(() => {
    const userInLeaderboard = leaderboard.find(entry => entry.userId === currentUser.userId);
    if (!userInLeaderboard) {
      const userEntry: LeaderboardEntryType = {
        userId: currentUser.userId,
        username: 'You',
        points: currentUser.points,
        streakCount: currentUser.streakCount,
        rank: 0, // Will be calculated
        badges: currentUser.badges
      };

      const updatedLeaderboard = [...leaderboard, userEntry]
        .sort((a, b) => b.points - a.points)
        .map((entry, index) => ({ ...entry, rank: index + 1 }));

      setLeaderboard(updatedLeaderboard);
    }
  }, [currentUser, leaderboard]);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsRefreshing(false);
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-400" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />;
      default:
        return <span className="text-lg font-bold text-text-secondary">#{rank}</span>;
    }
  };

  const getRankStyle = (rank: number) => {
    switch (rank) {
      case 1:
        return 'border-yellow-400 bg-yellow-400 bg-opacity-10';
      case 2:
        return 'border-gray-400 bg-gray-400 bg-opacity-10';
      case 3:
        return 'border-amber-600 bg-amber-600 bg-opacity-10';
      default:
        return '';
    }
  };

  return (
    <AppShell>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <Trophy className="w-8 h-8 text-accent" />
            <h1 className="text-3xl font-bold text-gradient">Global Leaderboard</h1>
          </div>
          <p className="text-text-secondary">
            See how you stack up against other knowledge seekers!
          </p>
        </div>

        {/* Refresh Button */}
        <div className="flex justify-center">
          <button
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="btn-secondary flex items-center space-x-2"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            <span>{isRefreshing ? 'Refreshing...' : 'Refresh'}</span>
          </button>
        </div>

        {/* Top 3 Podium */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {leaderboard.slice(0, 3).map((entry, index) => {
            const position = index + 1;
            const isCurrentUser = entry.userId === currentUser.userId;

            return (
              <div
                key={entry.userId}
                className={`glass-card p-6 text-center space-y-3 transition-all duration-300 hover:shadow-lift ${
                  getRankStyle(position)
                } ${isCurrentUser ? 'ring-2 ring-accent' : ''}`}
              >
                <div className="flex justify-center">
                  {getRankIcon(position)}
                </div>
                <div className="space-y-1">
                  <h3 className={`font-semibold ${isCurrentUser ? 'text-accent' : 'text-fg'}`}>
                    {entry.username}
                  </h3>
                  <p className="text-2xl font-bold text-gradient">
                    {entry.points.toLocaleString()}
                  </p>
                  <p className="text-sm text-text-secondary">
                    {entry.streakCount} day streak
                  </p>
                </div>
                {entry.badges.length > 0 && (
                  <div className="flex justify-center space-x-1">
                    {entry.badges.slice(0, 2).map((badge) => (
                      <span key={badge.badgeId} className="text-lg" title={badge.name}>
                        {badge.icon}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Full Leaderboard */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-fg text-center">Full Rankings</h2>

          <div className="space-y-2">
            {leaderboard.map((entry) => (
              <LeaderboardEntry
                key={entry.userId}
                entry={entry}
                isCurrentUser={entry.userId === currentUser.userId}
                variant={entry.rank <= 3 ? 'highlight' : 'default'}
              />
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <div className="glass-card p-6 text-center">
          <h3 className="text-lg font-semibold text-fg mb-4">Your Stats</h3>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="text-2xl font-bold text-gradient">
                #{leaderboard.find(e => e.userId === currentUser.userId)?.rank || 'N/A'}
              </div>
              <div className="text-sm text-text-secondary">Your Rank</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gradient">
                {currentUser.points.toLocaleString()}
              </div>
              <div className="text-sm text-text-secondary">Your Points</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gradient">
                {currentUser.streakCount}
              </div>
              <div className="text-sm text-text-secondary">Day Streak</div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
