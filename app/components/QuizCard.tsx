'use client';

import { useState, useEffect } from 'react';
import { QuizQuestion } from '@/lib/types';
import { cn } from '@/lib/utils';
import { CheckCircle, XCircle, Clock } from 'lucide-react';

interface QuizCardProps {
  question: QuizQuestion;
  onAnswer: (answer: string) => void;
  variant?: 'question' | 'answer' | 'result';
  timeLimit?: number;
  showResult?: boolean;
  userAnswer?: string;
  isCorrect?: boolean;
}

export function QuizCard({ 
  question, 
  onAnswer, 
  variant = 'question',
  timeLimit = 30,
  showResult = false,
  userAnswer,
  isCorrect
}: QuizCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [hasAnswered, setHasAnswered] = useState(false);

  useEffect(() => {
    if (variant === 'question' && !hasAnswered) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleTimeUp();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [variant, hasAnswered]);

  const handleTimeUp = () => {
    if (!hasAnswered) {
      setHasAnswered(true);
      onAnswer(''); // Empty answer for timeout
    }
  };

  const handleAnswerSelect = (answer: string) => {
    if (hasAnswered || variant !== 'question') return;
    
    setSelectedAnswer(answer);
    setHasAnswered(true);
    onAnswer(answer);
  };

  const getOptionStyle = (option: string) => {
    if (variant === 'question' && !showResult) {
      return selectedAnswer === option 
        ? 'bg-accent bg-opacity-30 border-accent' 
        : 'hover:bg-white hover:bg-opacity-10';
    }

    if (showResult) {
      if (option === question.correctAnswer) {
        return 'bg-green-500 bg-opacity-30 border-green-500';
      }
      if (option === userAnswer && option !== question.correctAnswer) {
        return 'bg-red-500 bg-opacity-30 border-red-500';
      }
    }

    return 'hover:bg-white hover:bg-opacity-10';
  };

  const getOptionIcon = (option: string) => {
    if (!showResult) return null;

    if (option === question.correctAnswer) {
      return <CheckCircle className="w-5 h-5 text-green-400" />;
    }
    if (option === userAnswer && option !== question.correctAnswer) {
      return <XCircle className="w-5 h-5 text-red-400" />;
    }
    return null;
  };

  return (
    <div className="quiz-card max-w-2xl mx-auto">
      {/* Timer */}
      {variant === 'question' && !hasAnswered && (
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2 text-text-secondary">
            <Clock className="w-4 h-4" />
            <span className="text-sm">Time remaining</span>
          </div>
          <div className={cn(
            "text-2xl font-bold",
            timeLeft <= 10 ? "text-red-400 animate-pulse" : "text-accent"
          )}>
            {timeLeft}s
          </div>
        </div>
      )}

      {/* Question */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-fg mb-2">
          {question.question}
        </h2>
      </div>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(option)}
            disabled={hasAnswered && variant === 'question'}
            className={cn(
              "w-full p-4 rounded-lg border border-white border-opacity-20 text-left transition-all duration-200 flex items-center justify-between",
              getOptionStyle(option),
              (hasAnswered && variant === 'question') && "cursor-not-allowed"
            )}
          >
            <span className="font-medium">{option}</span>
            {getOptionIcon(option)}
          </button>
        ))}
      </div>

      {/* Result Information */}
      {showResult && (
        <div className="border-t border-white border-opacity-20 pt-6">
          <div className={cn(
            "flex items-center space-x-2 mb-3",
            isCorrect ? "text-green-400" : "text-red-400"
          )}>
            {isCorrect ? (
              <CheckCircle className="w-6 h-6" />
            ) : (
              <XCircle className="w-6 h-6" />
            )}
            <span className="font-semibold text-lg">
              {isCorrect ? 'Correct!' : 'Incorrect'}
            </span>
          </div>
          
          {question.explanation && (
            <div className="bg-white bg-opacity-5 rounded-lg p-4">
              <h4 className="font-medium text-fg mb-2">Explanation:</h4>
              <p className="text-text-secondary text-sm leading-relaxed">
                {question.explanation}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Progress Bar */}
      <div className="mt-6">
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ 
              width: variant === 'question' 
                ? `${((timeLimit - timeLeft) / timeLimit) * 100}%`
                : '100%'
            }}
          />
        </div>
      </div>
    </div>
  );
}
