'use client';

import { useState, useCallback } from 'react';
import { SPIN_TOPICS } from '@/lib/constants';
import { SpinResult } from '@/lib/types';
import { cn } from '@/lib/utils';

interface SpinWheelProps {
  onSpinComplete: (result: SpinResult) => void;
  disabled?: boolean;
  variant?: 'animated' | 'static';
}

export function SpinWheel({ onSpinComplete, disabled = false, variant = 'animated' }: SpinWheelProps) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  const handleSpin = useCallback(() => {
    if (isSpinning || disabled) return;

    setIsSpinning(true);
    
    // Calculate random rotation (multiple full rotations + random angle)
    const randomAngle = Math.random() * 360;
    const fullRotations = 5 + Math.random() * 3; // 5-8 full rotations
    const totalRotation = rotation + (fullRotations * 360) + randomAngle;
    
    setRotation(totalRotation);

    // Determine which segment was selected
    const normalizedAngle = (360 - (randomAngle % 360)) % 360;
    const segmentAngle = 360 / SPIN_TOPICS.length;
    const selectedIndex = Math.floor(normalizedAngle / segmentAngle);
    const result = SPIN_TOPICS[selectedIndex];

    // Complete spin after animation
    setTimeout(() => {
      setIsSpinning(false);
      onSpinComplete(result);
    }, 3000);
  }, [isSpinning, disabled, rotation, onSpinComplete]);

  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Wheel Container */}
      <div className="relative">
        {/* Pointer */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 z-10">
          <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-white drop-shadow-lg"></div>
        </div>

        {/* Wheel */}
        <div 
          className={cn(
            "spin-wheel transition-transform duration-[3000ms] ease-out",
            variant === 'static' && "transition-none"
          )}
          style={{ 
            transform: `rotate(${rotation}deg)`,
            background: `conic-gradient(${SPIN_TOPICS.map((topic, index) => {
              const startAngle = (index * 45);
              const endAngle = ((index + 1) * 45);
              return `${topic.color} ${startAngle}deg ${endAngle}deg`;
            }).join(', ')})`
          }}
        >
          {/* Wheel Segments with Labels */}
          {SPIN_TOPICS.map((topic, index) => {
            const angle = (index * 45) + 22.5; // Center of each segment
            const radian = (angle * Math.PI) / 180;
            const x = Math.cos(radian) * 80; // Radius for text positioning
            const y = Math.sin(radian) * 80;
            
            return (
              <div
                key={topic.topic}
                className="absolute text-white font-bold text-sm transform -translate-x-1/2 -translate-y-1/2 text-center"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: `translate(-50%, -50%) rotate(${angle + 90}deg)`,
                }}
              >
                <div className="transform rotate-180">
                  {topic.topic}
                  <div className="text-xs opacity-80">{topic.difficulty}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center Circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="w-4 h-4 bg-gradient-to-r from-coral to-accent-gold rounded-full"></div>
        </div>
      </div>

      {/* Spin Button */}
      <button
        onClick={handleSpin}
        disabled={isSpinning || disabled}
        className={cn(
          "btn-primary text-lg font-bold py-4 px-8 rounded-xl",
          (isSpinning || disabled) && "opacity-50 cursor-not-allowed transform-none"
        )}
      >
        {isSpinning ? (
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Spinning...</span>
          </div>
        ) : disabled ? (
          'Come back tomorrow!'
        ) : (
          'SPIN NOW!'
        )}
      </button>

      {/* Spin Info */}
      <div className="text-center text-text-secondary text-sm">
        <p>Spin the wheel to get your daily quiz topic!</p>
        <p className="text-xs mt-1">Higher difficulty = More points</p>
      </div>
    </div>
  );
}
