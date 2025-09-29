'use client';

import { useTheme } from '../components/ThemeProvider';
import { AppShell } from '../components/AppShell';
import { SpinWheel } from '../components/SpinWheel';
import { QuizCard } from '../components/QuizCard';
import { LeaderboardEntry } from '../components/LeaderboardEntry';
import { RewardDisplay } from '../components/RewardDisplay';

const themes = [
  { id: 'default', name: 'EduSpin Default', description: 'Warm educational theme' },
  { id: 'celo', name: 'Celo', description: 'Black & yellow theme' },
  { id: 'solana', name: 'Solana', description: 'Purple gradient theme' },
  { id: 'base', name: 'Base', description: 'Blue blockchain theme' },
  { id: 'coinbase', name: 'Coinbase', description: 'Navy corporate theme' },
];

const mockQuestion = {
  id: '1',
  question: 'What is the capital of France?',
  options: ['London', 'Berlin', 'Paris', 'Madrid'],
  correctAnswer: 'Paris',
  explanation: 'Paris is the capital and largest city of France.'
};

const mockLeaderboardEntry = {
  userId: 'demo',
  username: 'DemoUser',
  points: 1250,
  streakCount: 7,
  rank: 1,
  badges: [{ badgeId: 'test', name: 'Test', description: '', icon: '🏆', rarity: 'Epic' as const }]
};

const mockReward = {
  id: 'demo-reward',
  name: 'Demo Reward',
  description: 'A sample reward for theme preview',
  cost: 500,
  type: 'badge' as const,
  value: 'demo',
  icon: '🎁'
};

export default function ThemePreview() {
  const { theme, setTheme } = useTheme();

  return (
    <AppShell variant="compact">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Theme Selector */}
        <div className="glass-card p-6 rounded-xl">
          <h1 className="text-2xl font-bold text-fg mb-4">Theme Preview</h1>
          <p className="text-text-secondary mb-6">
            Preview how EduSpin looks with different blockchain themes
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => setTheme(t.id as any)}
                className={`p-3 rounded-lg border transition-all duration-200 text-left ${
                  theme === t.id
                    ? 'border-accent bg-accent bg-opacity-20'
                    : 'border-white border-opacity-20 hover:border-opacity-40'
                }`}
              >
                <div className="font-medium text-fg text-sm">{t.name}</div>
                <div className="text-xs text-text-secondary mt-1">{t.description}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Component Previews */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Spin Wheel */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-fg">Spin Wheel</h2>
            <div className="glass-card p-6 rounded-xl flex justify-center">
              <SpinWheel 
                onSpinComplete={() => {}}
                variant="static"
              />
            </div>
          </div>

          {/* Quiz Card */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-fg">Quiz Card</h2>
            <QuizCard
              question={mockQuestion}
              onAnswer={() => {}}
              variant="question"
            />
          </div>

          {/* Leaderboard Entry */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-fg">Leaderboard</h2>
            <LeaderboardEntry
              entry={mockLeaderboardEntry}
              variant="userHighlight"
              isCurrentUser={true}
            />
          </div>

          {/* Reward Display */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-fg">Rewards</h2>
            <RewardDisplay
              reward={mockReward}
              userPoints={750}
              onRedeem={() => {}}
              variant="badge"
            />
          </div>
        </div>

        {/* Color Palette */}
        <div className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold text-fg mb-4">Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="w-full h-12 bg-bg rounded border border-white border-opacity-20"></div>
              <div className="text-sm text-text-secondary">Background</div>
            </div>
            <div className="space-y-2">
              <div className="w-full h-12 bg-surface rounded border border-white border-opacity-20"></div>
              <div className="text-sm text-text-secondary">Surface</div>
            </div>
            <div className="space-y-2">
              <div className="w-full h-12 bg-accent rounded"></div>
              <div className="text-sm text-text-secondary">Accent</div>
            </div>
            <div className="space-y-2">
              <div className="w-full h-12 bg-fg rounded"></div>
              <div className="text-sm text-text-secondary">Foreground</div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
