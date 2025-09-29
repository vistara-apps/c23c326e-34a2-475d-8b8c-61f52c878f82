'use client';

import { useState } from 'react';
import { AppShell } from '../components/AppShell';
import { RewardDisplay } from '../components/RewardDisplay';
import { User, RewardItem } from '@/lib/types';
import { REWARDS } from '@/lib/constants';
import { Star, Coins, Palette, Gift, TrendingUp } from 'lucide-react';

export default function RewardsPage() {
  const [user, setUser] = useState<User>({
    userId: 'current-user',
    points: 1250,
    streakCount: 5,
    badges: [],
    profileCustomizations: [],
    spinTokens: 1,
    createdAt: new Date(),
    totalQuizzes: 25,
    correctAnswers: 18,
  });

  const [selectedCategory, setSelectedCategory] = useState<'all' | 'crypto' | 'badge' | 'customization'>('all');

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

  const filteredRewards = selectedCategory === 'all'
    ? REWARDS
    : REWARDS.filter(reward => reward.type === selectedCategory);

  const categories = [
    { id: 'all' as const, label: 'All Rewards', icon: Gift, count: REWARDS.length },
    { id: 'crypto' as const, label: 'Crypto Rewards', icon: Coins, count: REWARDS.filter(r => r.type === 'crypto').length },
    { id: 'badge' as const, label: 'Badges', icon: Star, count: REWARDS.filter(r => r.type === 'badge').length },
    { id: 'customization' as const, label: 'Customizations', icon: Palette, count: REWARDS.filter(r => r.type === 'customization').length },
  ];

  return (
    <AppShell>
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <Gift className="w-8 h-8 text-accent" />
            <h1 className="text-3xl font-bold text-gradient">Rewards Store</h1>
          </div>
          <p className="text-text-secondary">
            Redeem your hard-earned points for amazing rewards!
          </p>
        </div>

        {/* User Points Display */}
        <div className="glass-card p-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Star className="w-8 h-8 text-accent" />
            <div>
              <div className="text-3xl font-bold text-gradient">
                {user.points.toLocaleString()}
              </div>
              <div className="text-text-secondary">Available Points</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="space-y-1">
              <div className="text-lg font-semibold text-fg">{user.totalQuizzes}</div>
              <div className="text-xs text-text-secondary">Total Quizzes</div>
            </div>
            <div className="space-y-1">
              <div className="text-lg font-semibold text-fg">{user.correctAnswers}</div>
              <div className="text-xs text-text-secondary">Correct Answers</div>
            </div>
            <div className="space-y-1">
              <div className="text-lg font-semibold text-fg">{user.streakCount}</div>
              <div className="text-xs text-text-secondary">Day Streak</div>
            </div>
            <div className="space-y-1">
              <div className="text-lg font-semibold text-fg">{user.badges.length}</div>
              <div className="text-xs text-text-secondary">Badges Earned</div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => {
            const Icon = category.icon;
            const isSelected = selectedCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isSelected
                    ? 'bg-accent text-white shadow-lg'
                    : 'glass-card text-fg hover:bg-opacity-30'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{category.label}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  isSelected ? 'bg-white bg-opacity-20' : 'bg-accent bg-opacity-20'
                }`}>
                  {category.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Rewards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRewards.map((reward) => (
            <RewardDisplay
              key={reward.id}
              reward={reward}
              userPoints={user.points}
              onRedeem={handleRewardRedeem}
              variant={reward.type}
            />
          ))}
        </div>

        {filteredRewards.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎁</div>
            <h3 className="text-xl font-semibold text-fg mb-2">No rewards in this category</h3>
            <p className="text-text-secondary">Check back later for new rewards!</p>
          </div>
        )}

        {/* How to Earn More Points */}
        <div className="glass-card p-6">
          <div className="flex items-center space-x-3 mb-4">
            <TrendingUp className="w-6 h-6 text-accent" />
            <h3 className="text-lg font-semibold text-fg">How to Earn More Points</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-accent bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-medium text-fg">Daily Spin & Quiz</h4>
                  <p className="text-sm text-text-secondary">Spin once per day and answer quiz questions correctly</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-accent bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-medium text-fg">Maintain Streaks</h4>
                  <p className="text-sm text-text-secondary">Keep your learning streak alive for bonus multipliers</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-accent bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-medium text-fg">Challenge Higher Difficulties</h4>
                  <p className="text-sm text-text-secondary">Hard questions give more points than easy ones</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-accent bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold text-sm">4</span>
                </div>
                <div>
                  <h4 className="font-medium text-fg">Earn Badges</h4>
                  <p className="text-sm text-text-secondary">Complete achievements to unlock special rewards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
