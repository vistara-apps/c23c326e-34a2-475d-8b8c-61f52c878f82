'use client';

import { useState } from 'react';
import { AppShell } from '../components/AppShell';
import { User } from '@/lib/types';
import { Settings, Bell, Shield, Palette, Volume2, VolumeX, Moon, Sun, Smartphone } from 'lucide-react';

export default function SettingsPage() {
  const [user, setUser] = useState<User>({
    userId: 'current-user',
    farcasterId: 'alice',
    walletAddress: '0x1234...5678',
    points: 1250,
    streakCount: 5,
    badges: [],
    profileCustomizations: [],
    spinTokens: 1,
    createdAt: new Date(),
    totalQuizzes: 25,
    correctAnswers: 18,
  });

  const [settings, setSettings] = useState({
    notifications: {
      dailySpinReminder: true,
      quizResults: true,
      newBadges: true,
      leaderboardUpdates: false,
    },
    appearance: {
      theme: 'dark', // 'light', 'dark', 'auto'
      animations: true,
      soundEffects: false,
    },
    privacy: {
      showInLeaderboard: true,
      shareProgress: false,
      allowAnalytics: true,
    },
    gameplay: {
      dailySpinLimit: true,
      showExplanations: true,
      autoAdvance: false,
    }
  });

  const updateSetting = (category: string, setting: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [setting]: value
      }
    }));
  };

  return (
    <AppShell>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <Settings className="w-8 h-8 text-accent" />
            <h1 className="text-3xl font-bold text-gradient">Settings</h1>
          </div>
          <p className="text-text-secondary">
            Customize your EduSpin experience
          </p>
        </div>

        {/* Account Info */}
        <div className="glass-card p-6">
          <h2 className="text-lg font-semibold text-fg mb-4 flex items-center space-x-2">
            <Shield className="w-5 h-5" />
            <span>Account Information</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-text-secondary mb-1">Farcaster ID</label>
              <div className="glass-card p-3 text-fg">@{user.farcasterId}</div>
            </div>
            <div>
              <label className="block text-sm text-text-secondary mb-1">Wallet Address</label>
              <div className="glass-card p-3 text-fg font-mono text-sm">{user.walletAddress}</div>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="glass-card p-6">
          <h2 className="text-lg font-semibold text-fg mb-4 flex items-center space-x-2">
            <Bell className="w-5 h-5" />
            <span>Notifications</span>
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-fg">Daily Spin Reminder</h3>
                <p className="text-sm text-text-secondary">Get reminded when your daily spin is available</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.notifications.dailySpinReminder}
                  onChange={(e) => updateSetting('notifications', 'dailySpinReminder', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-fg">Quiz Results</h3>
                <p className="text-sm text-text-secondary">Receive notifications about your quiz performance</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.notifications.quizResults}
                  onChange={(e) => updateSetting('notifications', 'quizResults', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-fg">New Badges</h3>
                <p className="text-sm text-text-secondary">Get notified when you earn new achievements</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.notifications.newBadges}
                  onChange={(e) => updateSetting('notifications', 'newBadges', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-fg">Leaderboard Updates</h3>
                <p className="text-sm text-text-secondary">Notifications about leaderboard position changes</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.notifications.leaderboardUpdates}
                  onChange={(e) => updateSetting('notifications', 'leaderboardUpdates', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Appearance */}
        <div className="glass-card p-6">
          <h2 className="text-lg font-semibold text-fg mb-4 flex items-center space-x-2">
            <Palette className="w-5 h-5" />
            <span>Appearance</span>
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-fg mb-3">Theme</h3>
              <div className="flex space-x-2">
                {[
                  { value: 'light', label: 'Light', icon: Sun },
                  { value: 'dark', label: 'Dark', icon: Moon },
                  { value: 'auto', label: 'Auto', icon: Smartphone }
                ].map((theme) => {
                  const Icon = theme.icon;
                  return (
                    <button
                      key={theme.value}
                      onClick={() => updateSetting('appearance', 'theme', theme.value)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        settings.appearance.theme === theme.value
                          ? 'bg-accent text-white'
                          : 'glass-card text-fg hover:bg-opacity-30'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{theme.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-fg">Animations</h3>
                <p className="text-sm text-text-secondary">Enable smooth animations and transitions</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.appearance.animations}
                  onChange={(e) => updateSetting('appearance', 'animations', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-fg">Sound Effects</h3>
                <p className="text-sm text-text-secondary">Play sounds for spins, correct answers, and achievements</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.appearance.soundEffects}
                  onChange={(e) => updateSetting('appearance', 'soundEffects', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Privacy */}
        <div className="glass-card p-6">
          <h2 className="text-lg font-semibold text-fg mb-4 flex items-center space-x-2">
            <Shield className="w-5 h-5" />
            <span>Privacy</span>
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-fg">Show in Leaderboard</h3>
                <p className="text-sm text-text-secondary">Allow others to see your ranking and progress</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.privacy.showInLeaderboard}
                  onChange={(e) => updateSetting('privacy', 'showInLeaderboard', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-fg">Share Progress</h3>
                <p className="text-sm text-text-secondary">Allow sharing your learning progress on social media</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.privacy.shareProgress}
                  onChange={(e) => updateSetting('privacy', 'shareProgress', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-fg">Analytics</h3>
                <p className="text-sm text-text-secondary">Help improve EduSpin by sharing anonymous usage data</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.privacy.allowAnalytics}
                  onChange={(e) => updateSetting('privacy', 'allowAnalytics', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Gameplay */}
        <div className="glass-card p-6">
          <h2 className="text-lg font-semibold text-fg mb-4 flex items-center space-x-2">
            <Settings className="w-5 h-5" />
            <span>Gameplay</span>
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-fg">Daily Spin Limit</h3>
                <p className="text-sm text-text-secondary">Enforce one spin per day rule</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.gameplay.dailySpinLimit}
                  onChange={(e) => updateSetting('gameplay', 'dailySpinLimit', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-fg">Show Explanations</h3>
                <p className="text-sm text-text-secondary">Display answer explanations after each question</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.gameplay.showExplanations}
                  onChange={(e) => updateSetting('gameplay', 'showExplanations', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-fg">Auto Advance</h3>
                <p className="text-sm text-text-secondary">Automatically move to next question after answering</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.gameplay.autoAdvance}
                  onChange={(e) => updateSetting('gameplay', 'autoAdvance', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="text-center">
          <button className="btn-primary px-8 py-3">
            Save Settings
          </button>
        </div>
      </div>
    </AppShell>
  );
}
