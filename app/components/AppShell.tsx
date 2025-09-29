'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Trophy, Star, User, Settings2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AppShellProps {
  children: React.ReactNode;
  variant?: 'default' | 'compact';
}

export function AppShell({ children, variant = 'default' }: AppShellProps) {
  const pathname = usePathname();

  const tabs = [
    { id: 'home', path: '/', icon: Home, label: 'Home' },
    { id: 'leaderboard', path: '/leaderboard', icon: Trophy, label: 'Leaderboard' },
    { id: 'rewards', path: '/rewards', icon: Star, label: 'Rewards' },
    { id: 'profile', path: '/profile', icon: User, label: 'Profile' },
    { id: 'settings', path: '/settings', icon: Settings2, label: 'Settings' },
  ];

  return (
    <div className="min-h-screen bg-bg flex flex-col">
      {/* Header */}
      <header className="glass-card border-b border-white border-opacity-10 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-coral to-accent-gold rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <h1 className="text-xl font-bold text-gradient">EduSpin</h1>
          </div>
          <div className="text-sm text-text-secondary">
            Spin for Knowledge
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className={cn(
        "flex-1 overflow-y-auto",
        variant === 'compact' ? 'p-2' : 'p-4'
      )}>
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="glass-card border-t border-white border-opacity-10 p-2">
        <div className="flex items-center justify-around">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = pathname === tab.path;

            return (
              <Link
                key={tab.id}
                href={tab.path}
                className={cn(
                  "flex flex-col items-center space-y-1 p-2 rounded-lg transition-all duration-200",
                  isActive
                    ? "text-accent bg-accent bg-opacity-20"
                    : "text-text-secondary hover:text-fg"
                )}
              >
                <Icon size={20} />
                <span className="text-xs font-medium">{tab.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
