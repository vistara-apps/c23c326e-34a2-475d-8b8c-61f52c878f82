'use client';

import { useState } from 'react';
import { AppShell } from '../components/AppShell';
import { User, Badge } from '@/lib/types';
import { BADGES } from '@/lib/constants';
import { User as UserIcon, Star, Flame, Trophy, BookOpen, Target, Calendar, Award, Settings } from 'lucide-react';
import { formatNumber, getAccuracyPercentage } from '@/lib/utils';

export default function ProfilePage() {
  const [user, setUser] = useState<User>({
    userId: 'current-user',
    farcasterId: 'alice',
    walletAddress: '0x1234...5678',
    points: 1250,
    streakCount: 5,
    badges: [
      { badgeId: 'first-spin', name: 'First Spin', description: 'Completed your first daily spin', icon: '🎯', rarity: 'Common', earnedAt: new Date('2024-01-15') },
      { badgeId: 'streak-master', name: 'Streak Master', description: 'Maintained a 7-day learning streak', icon: '🔥', rarity: 'Rare', earnedAt: new Date('2024-01-20') }
    ],
    profileCustomizations: [],
    spinTokens: 1,
    createdAt: new Date('2024-01-01'),
    totalQuizzes: 25,
    correctAnswers: 18,
    lastSpinDate: new Date(),
  });

  const [selectedTab, setSelectedTab] = useState<'stats' | 'badges' | 'progress'>('stats');

  const accuracy = getAccuracyPercentage(user.correctAnswers, user.totalQuizzes);
  const daysSinceJoined = Math.floor((Date.now() - user.createdAt.getTime()) / (1000 * 60 * 60 * 24));

  const stats = [
    {
      icon: Star,
      label: 'Total Points',
      value: formatNumber(user.points),
      color: 'text-yellow-400'
    },
    {
      icon: Flame,
      label: 'Current Streak',
      value: `${user.streakCount} days`,
      color: 'text-orange-400'
    },
    {
      icon: BookOpen,
      label: 'Quizzes Taken',
      value: user.totalQuizzes.toString(),
      color: 'text-blue-400'
    },
    {
      icon: Target,
      label: 'Accuracy',
      value: `${accuracy}%`,
      color: 'text-green-400'
    },
    {
      icon: Trophy,
      label: 'Badges Earned',
      value: user.badges.length.toString(),
      color: 'text-purple-400'
    },
    {
      icon: Calendar,
      label: 'Days Learning',
      value: daysSinceJoined.toString(),
      color: 'text-indigo-400'
    }
  ];

  const availableBadges = BADGES.filter(badge =>
    !user.badges.some(userBadge => userBadge.badgeId === badge.badgeId)
  );

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common': return 'border-gray-400 bg-gray-400';
      case 'Rare': return 'border-blue-400 bg-blue-400';
      case 'Epic': return 'border-purple-400 bg-purple-400';
      case 'Legendary': return 'border-yellow-400 bg-yellow-400';
      default: return 'border-gray-400 bg-gray-400';
    }
  };

  return (
    <AppShell>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Profile Header */}
        <div className="glass-card p-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-coral to-accent-gold rounded-full flex items-center justify-center">
              <UserIcon className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-fg">Your Profile</h1>
              <p className="text-text-secondary">@{user.farcasterId}</p>
              <p className="text-xs text-text-secondary font-mono">{user.walletAddress}</p>
            </div>
            <button className="btn-secondary flex items-center space-x-2">
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-gradient">{user.points}</div>
              <div className="text-sm text-text-secondary">Points</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gradient">{user.streakCount}</div>
              <div className="text-sm text-text-secondary">Day Streak</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gradient">#{42}</div>
              <div className="text-sm text-text-secondary">Global Rank</div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 bg-surface bg-opacity-50 p-1 rounded-lg">
          {[
            { id: 'stats', label: 'Statistics', icon: Star },
            { id: 'badges', label: 'Badges', icon: Award },
            { id: 'progress', label: 'Progress', icon: Target }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = selectedTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id as any)}
                className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-md font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-accent text-white shadow-lg'
                    : 'text-text-secondary hover:text-fg hover:bg-opacity-30'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        {selectedTab === 'stats' && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-fg">Your Statistics</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="glass-card p-6 text-center">
                    <Icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                    <div className="text-2xl font-bold text-fg mb-1">{stat.value}</div>
                    <div className="text-sm text-text-secondary">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Recent Activity */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-fg mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-surface bg-opacity-50 rounded-lg">
                  <div className="w-10 h-10 bg-green-500 bg-opacity-20 rounded-full flex items-center justify-center">
                    <Target className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-fg font-medium">Completed Science Quiz</p>
                    <p className="text-sm text-text-secondary">Earned 25 points • 2 hours ago</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-surface bg-opacity-50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-500 bg-opacity-20 rounded-full flex items-center justify-center">
                    <Flame className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-fg font-medium">5-Day Streak Achieved</p>
                    <p className="text-sm text-text-secondary">Bonus multiplier unlocked • 1 day ago</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-surface bg-opacity-50 rounded-lg">
                  <div className="w-10 h-10 bg-yellow-500 bg-opacity-20 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-fg font-medium">Badge Unlocked: First Spin</p>
                    <p className="text-sm text-text-secondary">Achievement unlocked • 5 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'badges' && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-fg mb-2">Your Badges</h2>
              <p className="text-text-secondary">Achievements you've unlocked through learning</p>
            </div>

            {/* Earned Badges */}
            <div>
              <h3 className="text-lg font-semibold text-fg mb-4">Earned Badges ({user.badges.length})</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {user.badges.map((badge) => (
                  <div key={badge.badgeId} className="glass-card p-4 text-center">
                    <div className={`w-16 h-16 mx-auto mb-3 rounded-full border-2 flex items-center justify-center text-2xl ${getRarityColor(badge.rarity)} bg-opacity-20`}>
                      {badge.icon}
                    </div>
                    <h4 className="font-semibold text-fg">{badge.name}</h4>
                    <p className="text-sm text-text-secondary mb-2">{badge.description}</p>
                    <div className={`text-xs px-2 py-1 rounded-full inline-block ${getRarityColor(badge.rarity)} bg-opacity-20 text-white`}>
                      {badge.rarity}
                    </div>
                    {badge.earnedAt && (
                      <p className="text-xs text-text-secondary mt-2">
                        Earned {badge.earnedAt.toLocaleDateString()}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Available Badges */}
            <div>
              <h3 className="text-lg font-semibold text-fg mb-4">Available Badges ({availableBadges.length})</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {availableBadges.map((badge) => (
                  <div key={badge.badgeId} className="glass-card p-4 text-center opacity-60">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full border-2 border-gray-500 bg-gray-500 bg-opacity-20 flex items-center justify-center text-2xl text-gray-400">
                      {badge.icon}
                    </div>
                    <h4 className="font-semibold text-text-secondary">{badge.name}</h4>
                    <p className="text-sm text-text-secondary mb-2">{badge.description}</p>
                    <div className="text-xs px-2 py-1 rounded-full inline-block border border-gray-500 bg-gray-500 bg-opacity-20 text-gray-400">
                      {badge.rarity}
                    </div>
                    <p className="text-xs text-text-secondary mt-2">Not yet earned</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'progress' && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-fg mb-2">Learning Progress</h2>
              <p className="text-text-secondary">Track your educational journey</p>
            </div>

            {/* Progress Overview */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold text-fg mb-4">Subject Mastery</h3>
                <div className="space-y-4">
                  {[
                    { subject: 'Math', progress: 75, quizzes: 8 },
                    { subject: 'Science', progress: 60, quizzes: 6 },
                    { subject: 'History', progress: 45, quizzes: 4 },
                    { subject: 'Literature', progress: 30, quizzes: 3 }
                  ].map((item) => (
                    <div key={item.subject} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-fg">{item.subject}</span>
                        <span className="text-text-secondary">{item.quizzes} quizzes</span>
                      </div>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                      <div className="text-xs text-text-secondary text-right">{item.progress}% accuracy</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold text-fg mb-4">Weekly Goals</h3>
                <div className="space-y-4">
                  {[
                    { goal: 'Daily Spins', current: 5, target: 7, unit: 'days' },
                    { goal: 'Quiz Accuracy', current: 72, target: 80, unit: '%' },
                    { goal: 'Points Earned', current: 450, target: 500, unit: 'pts' }
                  ].map((item) => (
                    <div key={item.goal} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-fg">{item.goal}</span>
                        <span className="text-text-secondary">{item.current}/{item.target} {item.unit}</span>
                      </div>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: `${(item.current / item.target) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Achievement Progress */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-fg mb-4">Achievement Progress</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-fg">Quiz Champion</span>
                    <span className="text-text-secondary">18/50 quizzes</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '36%' }} />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-fg">Knowledge Seeker</span>
                    <span className="text-text-secondary">2/8 subjects</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '25%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}
