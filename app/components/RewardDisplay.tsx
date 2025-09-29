'use client';

import { RewardItem } from '@/lib/types';
import { cn, formatNumber } from '@/lib/utils';
import { Star, Coins, Palette } from 'lucide-react';

interface RewardDisplayProps {
  reward: RewardItem;
  userPoints: number;
  onRedeem: (rewardId: string) => void;
  variant?: 'points' | 'badge' | 'crypto' | 'customization';
  disabled?: boolean;
}

export function RewardDisplay({ 
  reward, 
  userPoints, 
  onRedeem, 
  variant = 'points',
  disabled = false 
}: RewardDisplayProps) {
  const canAfford = userPoints >= reward.cost;
  const isDisabled = disabled || !canAfford;

  const getVariantIcon = () => {
    switch (variant) {
      case 'crypto':
        return <Coins className="w-6 h-6" />;
      case 'badge':
        return <Star className="w-6 h-6" />;
      case 'customization':
        return <Palette className="w-6 h-6" />;
      case 'points':
      default:
        return <Palette className="w-6 h-6" />;
    }
  };

  const getVariantStyle = () => {
    switch (variant) {
      case 'crypto':
        return 'border-yellow-400 bg-yellow-400 bg-opacity-10';
      case 'badge':
        return 'border-purple-400 bg-purple-400 bg-opacity-10';
      case 'customization':
        return 'border-pink-400 bg-pink-400 bg-opacity-10';
      default:
        return 'border-blue-400 bg-blue-400 bg-opacity-10';
    }
  };

  return (
    <div className={cn(
      "glass-card p-6 rounded-xl transition-all duration-300 hover:shadow-lift",
      getVariantStyle(),
      !canAfford && "opacity-60"
    )}>
      {/* Reward Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="text-3xl">{reward.icon}</div>
          <div>
            <h3 className="font-semibold text-fg text-lg">{reward.name}</h3>
            <p className="text-text-secondary text-sm">{reward.description}</p>
          </div>
        </div>
        {getVariantIcon()}
      </div>

      {/* Cost and Affordability */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Star className="w-4 h-4 text-accent" />
          <span className="font-medium text-fg">
            {formatNumber(reward.cost)} points
          </span>
        </div>
        
        <div className={cn(
          "text-sm font-medium",
          canAfford ? "text-green-400" : "text-red-400"
        )}>
          {canAfford ? "Available" : `Need ${formatNumber(reward.cost - userPoints)} more`}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="progress-bar">
          <div 
            className={cn(
              "progress-fill",
              canAfford ? "bg-green-400" : "bg-accent"
            )}
            style={{ 
              width: `${Math.min((userPoints / reward.cost) * 100, 100)}%` 
            }}
          />
        </div>
        <div className="flex justify-between text-xs text-text-secondary mt-1">
          <span>{formatNumber(userPoints)} pts</span>
          <span>{formatNumber(reward.cost)} pts</span>
        </div>
      </div>

      {/* Redeem Button */}
      <button
        onClick={() => onRedeem(reward.id)}
        disabled={isDisabled}
        className={cn(
          "w-full py-3 px-4 rounded-lg font-medium transition-all duration-200",
          canAfford && !disabled
            ? "btn-primary"
            : "bg-gray-600 text-gray-300 cursor-not-allowed"
        )}
      >
        {disabled ? 'Coming Soon' : canAfford ? 'Redeem Now' : 'Insufficient Points'}
      </button>

      {/* Additional Info */}
      {variant === 'crypto' && (
        <div className="mt-3 text-xs text-text-secondary text-center">
          <p>Rewards are sent to your connected wallet on Base</p>
        </div>
      )}
    </div>
  );
}
