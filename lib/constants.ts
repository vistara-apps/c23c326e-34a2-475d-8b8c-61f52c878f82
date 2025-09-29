import { SpinResult } from './types';

export const SPIN_TOPICS: SpinResult[] = [
  { topic: 'Math', difficulty: 'Easy', color: '#ff6b6b', pointsMultiplier: 1 },
  { topic: 'Science', difficulty: 'Medium', color: '#4ecdc4', pointsMultiplier: 1.5 },
  { topic: 'History', difficulty: 'Hard', color: '#45b7d1', pointsMultiplier: 2 },
  { topic: 'Literature', difficulty: 'Easy', color: '#96ceb4', pointsMultiplier: 1 },
  { topic: 'Geography', difficulty: 'Medium', color: '#feca57', pointsMultiplier: 1.5 },
  { topic: 'Art', difficulty: 'Hard', color: '#ff9ff3', pointsMultiplier: 2 },
  { topic: 'Technology', difficulty: 'Easy', color: '#54a0ff', pointsMultiplier: 1 },
  { topic: 'Philosophy', difficulty: 'Hard', color: '#5f27cd', pointsMultiplier: 2 },
];

export const QUIZ_QUESTIONS = {
  Math: {
    Easy: [
      {
        id: '1',
        question: 'What is 15 + 27?',
        options: ['40', '42', '44', '46'],
        correctAnswer: '42',
        explanation: '15 + 27 = 42'
      },
      {
        id: '2',
        question: 'What is 8 × 7?',
        options: ['54', '56', '58', '60'],
        correctAnswer: '56',
        explanation: '8 × 7 = 56'
      }
    ],
    Medium: [
      {
        id: '3',
        question: 'What is the square root of 144?',
        options: ['10', '11', '12', '13'],
        correctAnswer: '12',
        explanation: '√144 = 12 because 12² = 144'
      }
    ],
    Hard: [
      {
        id: '4',
        question: 'What is the derivative of x³?',
        options: ['3x²', '3x', 'x²', '3x³'],
        correctAnswer: '3x²',
        explanation: 'The derivative of x³ is 3x²'
      }
    ]
  },
  Science: {
    Easy: [
      {
        id: '5',
        question: 'What is the chemical symbol for water?',
        options: ['H2O', 'CO2', 'O2', 'H2'],
        correctAnswer: 'H2O',
        explanation: 'Water is composed of 2 hydrogen atoms and 1 oxygen atom'
      }
    ],
    Medium: [
      {
        id: '6',
        question: 'What is the speed of light in vacuum?',
        options: ['299,792,458 m/s', '300,000,000 m/s', '299,000,000 m/s', '298,000,000 m/s'],
        correctAnswer: '299,792,458 m/s',
        explanation: 'The speed of light in vacuum is exactly 299,792,458 meters per second'
      }
    ],
    Hard: [
      {
        id: '7',
        question: 'What is the Heisenberg Uncertainty Principle?',
        options: [
          'Energy cannot be created or destroyed',
          'Position and momentum cannot both be precisely determined',
          'Matter and energy are equivalent',
          'Time is relative to the observer'
        ],
        correctAnswer: 'Position and momentum cannot both be precisely determined',
        explanation: 'The uncertainty principle states that the more precisely you know the position of a particle, the less precisely you can know its momentum'
      }
    ]
  },
  History: {
    Easy: [
      {
        id: '8',
        question: 'In which year did World War II end?',
        options: ['1944', '1945', '1946', '1947'],
        correctAnswer: '1945',
        explanation: 'World War II ended in 1945 with the surrender of Japan'
      }
    ],
    Medium: [
      {
        id: '9',
        question: 'Who was the first person to walk on the moon?',
        options: ['Buzz Aldrin', 'Neil Armstrong', 'John Glenn', 'Alan Shepard'],
        correctAnswer: 'Neil Armstrong',
        explanation: 'Neil Armstrong was the first person to walk on the moon on July 20, 1969'
      }
    ],
    Hard: [
      {
        id: '10',
        question: 'What was the primary cause of the Thirty Years\' War?',
        options: [
          'Religious conflicts between Catholics and Protestants',
          'Trade disputes',
          'Territorial expansion',
          'Succession disputes'
        ],
        correctAnswer: 'Religious conflicts between Catholics and Protestants',
        explanation: 'The Thirty Years\' War (1618-1648) was primarily caused by religious tensions in the Holy Roman Empire'
      }
    ]
  }
};

export const POINT_VALUES = {
  Easy: 10,
  Medium: 20,
  Hard: 30,
};

export const STREAK_BONUSES = {
  3: 1.1,  // 10% bonus
  7: 1.25, // 25% bonus
  14: 1.5, // 50% bonus
  30: 2.0, // 100% bonus
};

export const BADGES = [
  {
    badgeId: 'first-spin',
    name: 'First Spin',
    description: 'Completed your first daily spin',
    icon: '🎯',
    rarity: 'Common' as const
  },
  {
    badgeId: 'streak-master',
    name: 'Streak Master',
    description: 'Maintained a 7-day learning streak',
    icon: '🔥',
    rarity: 'Rare' as const
  },
  {
    badgeId: 'quiz-champion',
    name: 'Quiz Champion',
    description: 'Answered 50 questions correctly',
    icon: '🏆',
    rarity: 'Epic' as const
  },
  {
    badgeId: 'knowledge-seeker',
    name: 'Knowledge Seeker',
    description: 'Completed quizzes in all 8 topics',
    icon: '📚',
    rarity: 'Legendary' as const
  }
];

export const REWARDS = [
  {
    id: 'usdc-1',
    name: '1 USDC',
    description: 'Redeem for 1 USDC on Base',
    cost: 1000,
    type: 'crypto' as const,
    value: '1',
    icon: '💰'
  },
  {
    id: 'usdc-5',
    name: '5 USDC',
    description: 'Redeem for 5 USDC on Base',
    cost: 4500,
    type: 'crypto' as const,
    value: '5',
    icon: '💎'
  },
  {
    id: 'golden-border',
    name: 'Golden Border',
    description: 'Unlock golden profile border',
    cost: 500,
    type: 'customization' as const,
    value: 'golden-border',
    icon: '✨'
  }
];
