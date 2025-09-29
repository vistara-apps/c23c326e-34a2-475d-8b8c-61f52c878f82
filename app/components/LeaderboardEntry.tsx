'use client';

import { LeaderboardEntry as LeaderboardEntryType } from '@/lib/types';
import { cn, formatNumber } from '@/lib/utils';
import { Trophy, Flame, Star } from 'lucide-react';

interface LeaderboardEntryProps {
  entry: LeaderboardEntryType;
  variant?: 'default' | 'userHighlight' | 'highlight';
  isCurrentUser?: boolean;
}

export function LeaderboardEntry({ 
  entry, 
  variant = 'default',
  isCurrentUser = false 
}: LeaderboardEntryProps) {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-400" />;
      case 2:
        return <Trophy className="w-6 h-6 text-gray-300" />;
      case 3:
        return <Trophy className="w-6 h-6 text-amber-600" />;
      default:
        return (
          <div className="w-6 h-6 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
            <span className="text-sm font-bold">{rank}</span>
          </div>
        );
    }
  };

  const getRankStyle = (rank: number) => {
    if (rank <= 3) {
      return "bg-gradient-to-r from-yellow-400 to-amber-500 bg-opacity-20 border-yellow-400";
    }
    return "";
  };

  return (
    <div className={cn(
      "leaderboard-entry",
      variant === 'userHighlight' && "bg-accent bg-opacity-20 border-accent",
      variant === 'highlight' && "bg-gradient-to-r from-yellow-400 to-amber-500 bg-opacity-10 border-yellow-400",
      isCurrentUser && "ring-2 ring-accent ring-opacity-50",
      getRankStyle(entry.rank)
    )}>
      {/* Rank and Avatar */}
      <div className="flex items-center space-x-4">
        {getRankIcon(entry.rank)}
        
        <div className="flex items-center space-x-3">
          {/* Avatar */}
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-coral to-accent-gold flex items-center justify-center">
            {entry.avatar ? (
              <img 
                src={entry.avatar} 
                alt={entry.username}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <span className="text-white font-bold text-lg">
                {entry.username.charAt(0).toUpperCase()}
              </span>
            )}
          </div>

          {/* User Info */}
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-semibold text-fg">
                {entry.username}
                {isCurrentUser && (
                  <span className="text-xs text-accent ml-2">(You)</span>
                )}
              </h3>
              {entry.badges.length > 0 && (
                <div className="flex space-x-1">
                  {entry.badges.slice(0, 3).map((badge, index) => (
                    <span key={index} className="text-sm" title={badge.name}>
                      {badge.icon}
                    </span>
                  ))}
                  {entry.badges.length > 3 && (
                    <span className="text-xs text-text-secondary">
                      +{entry.badges.length - 3}
                    </span>
                  )}
                </div>
              )}
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-text-secondary">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4" />
                <span>{formatNumber(entry.points)} pts</span>
              </div>
              
              {entry.streakCount > 0 && (
                <div className="flex items-center space-x-1">
                  <Flame className="w-4 h-4 text-orange-400" />
                  <span>{entry.streakCount} day streak</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Points Display */}
      <div className="text-right">
        <div className="text-2xl font-bold text-accent">
          {formatNumber(entry.points)}
        </div>
        <div className="text-xs text-text-secondary">
          points
        </div>
      </div>
    </div>
  );
}
