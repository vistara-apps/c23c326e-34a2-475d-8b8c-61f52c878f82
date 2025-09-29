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
      },
      {
        id: '3',
        question: 'What is 100 ÷ 4?',
        options: ['20', '25', '30', '35'],
        correctAnswer: '25',
        explanation: '100 ÷ 4 = 25'
      },
      {
        id: '4',
        question: 'What is 3²?',
        options: ['6', '8', '9', '12'],
        correctAnswer: '9',
        explanation: '3² = 3 × 3 = 9'
      }
    ],
    Medium: [
      {
        id: '5',
        question: 'What is the square root of 144?',
        options: ['10', '11', '12', '13'],
        correctAnswer: '12',
        explanation: '√144 = 12 because 12² = 144'
      },
      {
        id: '6',
        question: 'What is 25% of 200?',
        options: ['40', '45', '50', '55'],
        correctAnswer: '50',
        explanation: '25% of 200 = 0.25 × 200 = 50'
      },
      {
        id: '7',
        question: 'Solve for x: 2x + 5 = 15',
        options: ['x = 5', 'x = 6', 'x = 7', 'x = 8'],
        correctAnswer: 'x = 5',
        explanation: '2x + 5 = 15 → 2x = 10 → x = 5'
      }
    ],
    Hard: [
      {
        id: '8',
        question: 'What is the derivative of x³?',
        options: ['3x²', '3x', 'x²', '3x³'],
        correctAnswer: '3x²',
        explanation: 'The derivative of x³ is 3x²'
      },
      {
        id: '9',
        question: 'What is the integral of 2x dx?',
        options: ['x²', 'x² + C', '2x²', '2x² + C'],
        correctAnswer: 'x² + C',
        explanation: '∫2x dx = x² + C'
      },
      {
        id: '10',
        question: 'What is the Pythagorean theorem?',
        options: ['a² + b² = c²', 'a² - b² = c²', 'a² × b² = c²', 'a² ÷ b² = c²'],
        correctAnswer: 'a² + b² = c²',
        explanation: 'In a right triangle, the square of the hypotenuse equals the sum of the squares of the other two sides'
      }
    ]
  },
  Science: {
    Easy: [
      {
        id: '11',
        question: 'What is the chemical symbol for water?',
        options: ['H2O', 'CO2', 'O2', 'H2'],
        correctAnswer: 'H2O',
        explanation: 'Water is composed of 2 hydrogen atoms and 1 oxygen atom'
      },
      {
        id: '12',
        question: 'How many planets are in our solar system?',
        options: ['7', '8', '9', '10'],
        correctAnswer: '8',
        explanation: 'There are 8 planets in our solar system: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune'
      },
      {
        id: '13',
        question: 'What gas do plants absorb from the atmosphere?',
        options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
        correctAnswer: 'Carbon Dioxide',
        explanation: 'Plants absorb carbon dioxide during photosynthesis'
      }
    ],
    Medium: [
      {
        id: '14',
        question: 'What is the speed of light in vacuum?',
        options: ['299,792,458 m/s', '300,000,000 m/s', '299,000,000 m/s', '298,000,000 m/s'],
        correctAnswer: '299,792,458 m/s',
        explanation: 'The speed of light in vacuum is exactly 299,792,458 meters per second'
      },
      {
        id: '15',
        question: 'What is the powerhouse of the cell?',
        options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Endoplasmic Reticulum'],
        correctAnswer: 'Mitochondria',
        explanation: 'Mitochondria are known as the powerhouse of the cell because they generate ATP energy'
      },
      {
        id: '16',
        question: 'What is the chemical formula for table salt?',
        options: ['NaCl', 'KCl', 'CaCl2', 'MgCl2'],
        correctAnswer: 'NaCl',
        explanation: 'Table salt is sodium chloride with the chemical formula NaCl'
      }
    ],
    Hard: [
      {
        id: '17',
        question: 'What is the Heisenberg Uncertainty Principle?',
        options: [
          'Energy cannot be created or destroyed',
          'Position and momentum cannot both be precisely determined',
          'Matter and energy are equivalent',
          'Time is relative to the observer'
        ],
        correctAnswer: 'Position and momentum cannot both be precisely determined',
        explanation: 'The uncertainty principle states that the more precisely you know the position of a particle, the less precisely you can know its momentum'
      },
      {
        id: '18',
        question: 'What is the name of the theoretical boundary around a black hole?',
        options: ['Photon Sphere', 'Event Horizon', 'Schwarzschild Radius', 'Singularity'],
        correctAnswer: 'Event Horizon',
        explanation: 'The event horizon is the boundary around a black hole beyond which nothing can escape'
      },
      {
        id: '19',
        question: 'What is the SI unit of electrical resistance?',
        options: ['Volt', 'Ampere', 'Ohm', 'Watt'],
        correctAnswer: 'Ohm',
        explanation: 'The ohm (Ω) is the SI unit of electrical resistance'
      }
    ]
  },
  History: {
    Easy: [
      {
        id: '20',
        question: 'In which year did World War II end?',
        options: ['1944', '1945', '1946', '1947'],
        correctAnswer: '1945',
        explanation: 'World War II ended in 1945 with the surrender of Japan'
      },
      {
        id: '21',
        question: 'Who was the first President of the United States?',
        options: ['Thomas Jefferson', 'George Washington', 'Abraham Lincoln', 'John Adams'],
        correctAnswer: 'George Washington',
        explanation: 'George Washington was the first President of the United States, serving from 1789 to 1797'
      },
      {
        id: '22',
        question: 'In which year did the Titanic sink?',
        options: ['1910', '1912', '1914', '1916'],
        correctAnswer: '1912',
        explanation: 'The RMS Titanic sank on April 15, 1912, after hitting an iceberg'
      }
    ],
    Medium: [
      {
        id: '23',
        question: 'Who was the first person to walk on the moon?',
        options: ['Buzz Aldrin', 'Neil Armstrong', 'John Glenn', 'Alan Shepard'],
        correctAnswer: 'Neil Armstrong',
        explanation: 'Neil Armstrong was the first person to walk on the moon on July 20, 1969'
      },
      {
        id: '24',
        question: 'What ancient civilization built the pyramids at Giza?',
        options: ['Romans', 'Greeks', 'Egyptians', 'Mayans'],
        correctAnswer: 'Egyptians',
        explanation: 'The ancient Egyptians built the pyramids at Giza around 2580–2565 BC'
      },
      {
        id: '25',
        question: 'In which year did the Berlin Wall fall?',
        options: ['1987', '1988', '1989', '1990'],
        correctAnswer: '1989',
        explanation: 'The Berlin Wall fell on November 9, 1989, leading to the reunification of Germany'
      }
    ],
    Hard: [
      {
        id: '26',
        question: 'What was the primary cause of the Thirty Years\' War?',
        options: [
          'Religious conflicts between Catholics and Protestants',
          'Trade disputes',
          'Territorial expansion',
          'Succession disputes'
        ],
        correctAnswer: 'Religious conflicts between Catholics and Protestants',
        explanation: 'The Thirty Years\' War (1618-1648) was primarily caused by religious tensions in the Holy Roman Empire'
      },
      {
        id: '27',
        question: 'Who was the longest-reigning British monarch?',
        options: ['Queen Victoria', 'Queen Elizabeth II', 'King George III', 'Queen Elizabeth I'],
        correctAnswer: 'Queen Elizabeth II',
        explanation: 'Queen Elizabeth II reigned for 70 years and 214 days, from 1952 to 2022'
      },
      {
        id: '28',
        question: 'What was the name of the ship that carried the Pilgrims to America in 1620?',
        options: ['Santa Maria', 'Mayflower', 'Nina', 'Pinta'],
        correctAnswer: 'Mayflower',
        explanation: 'The Mayflower carried 102 passengers from England to Plymouth, Massachusetts in 1620'
      }
    ]
  },
  Geography: {
    Easy: [
      {
        id: '29',
        question: 'What is the capital of France?',
        options: ['London', 'Berlin', 'Paris', 'Madrid'],
        correctAnswer: 'Paris',
        explanation: 'Paris is the capital and most populous city of France'
      },
      {
        id: '30',
        question: 'Which is the largest ocean on Earth?',
        options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
        correctAnswer: 'Pacific Ocean',
        explanation: 'The Pacific Ocean is the largest ocean, covering about 46% of the Earth\'s water surface'
      },
      {
        id: '31',
        question: 'What is the smallest country in the world?',
        options: ['Monaco', 'Vatican City', 'San Marino', 'Liechtenstein'],
        correctAnswer: 'Vatican City',
        explanation: 'Vatican City is the smallest country in the world by land area at 0.17 square miles'
      }
    ],
    Medium: [
      {
        id: '32',
        question: 'Which river is the longest in the world?',
        options: ['Amazon River', 'Nile River', 'Yangtze River', 'Mississippi River'],
        correctAnswer: 'Nile River',
        explanation: 'The Nile River is generally considered the longest river in the world at about 4,135 miles'
      },
      {
        id: '33',
        question: 'What is the highest mountain in the world?',
        options: ['K2', 'Kangchenjunga', 'Lhotse', 'Mount Everest'],
        correctAnswer: 'Mount Everest',
        explanation: 'Mount Everest is the highest mountain above sea level at 29,032 feet'
      },
      {
        id: '34',
        question: 'Which continent is known as the "Dark Continent"?',
        options: ['Asia', 'Africa', 'South America', 'Australia'],
        correctAnswer: 'Africa',
        explanation: 'Africa was historically called the "Dark Continent" by European explorers due to its mystery and unknown interior'
      }
    ],
    Hard: [
      {
        id: '35',
        question: 'What is the smallest independent country in South America?',
        options: ['Uruguay', 'Suriname', 'Guyana', 'French Guiana'],
        correctAnswer: 'Suriname',
        explanation: 'Suriname is the smallest independent country in South America by land area'
      },
      {
        id: '36',
        question: 'Which African country has the most natural lakes?',
        options: ['Egypt', 'Ethiopia', 'Uganda', 'Kenya'],
        correctAnswer: 'Uganda',
        explanation: 'Uganda has the most natural lakes in Africa, including Lake Victoria, Lake Albert, and Lake Edward'
      },
      {
        id: '37',
        question: 'What is the capital of Bhutan?',
        options: ['Kathmandu', 'Thimphu', 'Dhaka', 'Colombo'],
        correctAnswer: 'Thimphu',
        explanation: 'Thimphu is the capital and largest city of Bhutan'
      }
    ]
  },
  Technology: {
    Easy: [
      {
        id: '38',
        question: 'What does "CPU" stand for in computers?',
        options: ['Central Processing Unit', 'Computer Power Unit', 'Central Power Unit', 'Computer Processing Unit'],
        correctAnswer: 'Central Processing Unit',
        explanation: 'CPU stands for Central Processing Unit, the main processor in a computer'
      },
      {
        id: '39',
        question: 'What does "www" stand for in a web address?',
        options: ['World Wide Web', 'World Web Way', 'Wide World Web', 'Web World Wide'],
        correctAnswer: 'World Wide Web',
        explanation: 'WWW stands for World Wide Web, the system of interlinked hypertext documents on the Internet'
      },
      {
        id: '40',
        question: 'What type of device is a smartphone?',
        options: ['Input device', 'Output device', 'Storage device', 'Mobile computing device'],
        correctAnswer: 'Mobile computing device',
        explanation: 'A smartphone is a mobile computing device that performs many of the functions of a computer'
      }
    ],
    Medium: [
      {
        id: '41',
        question: 'What programming language was created by Guido van Rossum?',
        options: ['Java', 'Python', 'JavaScript', 'C++'],
        correctAnswer: 'Python',
        explanation: 'Python was created by Guido van Rossum and first released in 1991'
      },
      {
        id: '42',
        question: 'What does "AI" stand for?',
        options: ['Artificial Intelligence', 'Advanced Interface', 'Automated Integration', 'Active Internet'],
        correctAnswer: 'Artificial Intelligence',
        explanation: 'AI stands for Artificial Intelligence, the simulation of human intelligence in machines'
      },
      {
        id: '43',
        question: 'What is the name of the first web browser?',
        options: ['Internet Explorer', 'Netscape Navigator', 'Mosaic', 'WorldWideWeb'],
        correctAnswer: 'WorldWideWeb',
        explanation: 'The first web browser was called WorldWideWeb, created by Tim Berners-Lee in 1990'
      }
    ],
    Hard: [
      {
        id: '44',
        question: 'What is the time complexity of quicksort in the average case?',
        options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(log n)'],
        correctAnswer: 'O(n log n)',
        explanation: 'Quicksort has an average time complexity of O(n log n) and worst case of O(n²)'
      },
      {
        id: '45',
        question: 'What does "HTTPS" stand for?',
        options: ['HyperText Transfer Protocol Secure', 'High Transfer Protocol Secure', 'HyperText Transfer Protocol Standard', 'Hyper Transfer Protocol Secure'],
        correctAnswer: 'HyperText Transfer Protocol Secure',
        explanation: 'HTTPS stands for HyperText Transfer Protocol Secure, providing encrypted communication over the web'
      },
      {
        id: '46',
        question: 'What is the name of the algorithm used by Google\'s search engine?',
        options: ['PageRank', 'WebRank', 'SearchRank', 'GoogleRank'],
        correctAnswer: 'PageRank',
        explanation: 'PageRank is the algorithm that Google uses to rank web pages in search results'
      }
    ]
  },
  Literature: {
    Easy: [
      {
        id: '47',
        question: 'Who wrote "Romeo and Juliet"?',
        options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
        correctAnswer: 'William Shakespeare',
        explanation: 'William Shakespeare wrote the tragedy "Romeo and Juliet" around 1595'
      },
      {
        id: '48',
        question: 'What is the name of the lion in "The Lion, the Witch and the Wardrobe"?',
        options: ['Simba', 'Mufasa', 'Aslan', 'Scar'],
        correctAnswer: 'Aslan',
        explanation: 'Aslan is the noble lion in C.S. Lewis\'s "The Lion, the Witch and the Wardrobe"'
      },
      {
        id: '49',
        question: 'Who wrote "Harry Potter and the Philosopher\'s Stone"?',
        options: ['Roald Dahl', 'J.K. Rowling', 'C.S. Lewis', 'J.R.R. Tolkien'],
        correctAnswer: 'J.K. Rowling',
        explanation: 'J.K. Rowling wrote the first Harry Potter book, originally titled "Harry Potter and the Philosopher\'s Stone"'
      }
    ],
    Medium: [
      {
        id: '50',
        question: 'What is the name of the first book in the "A Song of Ice and Fire" series?',
        options: ['A Feast for Crows', 'A Dance with Dragons', 'A Game of Thrones', 'A Clash of Kings'],
        correctAnswer: 'A Game of Thrones',
        explanation: '"A Game of Thrones" is the first book in George R.R. Martin\'s "A Song of Ice and Fire" series'
      },
      {
        id: '51',
        question: 'Who wrote "1984"?',
        options: ['Aldous Huxley', 'George Orwell', 'Ray Bradbury', 'Margaret Atwood'],
        correctAnswer: 'George Orwell',
        explanation: 'George Orwell wrote the dystopian novel "1984" in 1949'
      },
      {
        id: '52',
        question: 'What literary device is used when human qualities are given to non-human things?',
        options: ['Metaphor', 'Personification', 'Simile', 'Alliteration'],
        correctAnswer: 'Personification',
        explanation: 'Personification is a literary device where human qualities are attributed to non-human things'
      }
    ],
    Hard: [
      {
        id: '53',
        question: 'Who wrote "Ulysses", considered one of the most difficult novels to read?',
        options: ['James Joyce', 'Virginia Woolf', 'Marcel Proust', 'Thomas Mann'],
        correctAnswer: 'James Joyce',
        explanation: 'James Joyce wrote "Ulysses" in 1922, known for its complex stream-of-consciousness style'
      },
      {
        id: '54',
        question: 'What is the term for a poem that does not rhyme or have a regular rhythm?',
        options: ['Haiku', 'Sonnet', 'Free verse', 'Ballad'],
        correctAnswer: 'Free verse',
        explanation: 'Free verse is poetry that does not rhyme or have a regular metrical rhythm'
      },
      {
        id: '55',
        question: 'Who wrote "The Waste Land", one of the most influential poems of the 20th century?',
        options: ['W.B. Yeats', 'T.S. Eliot', 'Ezra Pound', 'Robert Frost'],
        correctAnswer: 'T.S. Eliot',
        explanation: 'T.S. Eliot wrote "The Waste Land" in 1922, a modernist poem that revolutionized poetry'
      }
    ]
  },
  Philosophy: {
    Easy: [
      {
        id: '56',
        question: 'What does "philosophy" literally mean in Greek?',
        options: ['Love of wisdom', 'Study of nature', 'Search for truth', 'Art of thinking'],
        correctAnswer: 'Love of wisdom',
        explanation: 'Philosophy comes from the Greek words "philos" (love) and "sophia" (wisdom), meaning "love of wisdom"'
      },
      {
        id: '57',
        question: 'Who is known as the "Father of Western Philosophy"?',
        options: ['Plato', 'Aristotle', 'Socrates', 'Thales'],
        correctAnswer: 'Socrates',
        explanation: 'Socrates is often called the "Father of Western Philosophy" for his contributions to ethics and epistemology'
      }
    ],
    Medium: [
      {
        id: '58',
        question: 'What philosophical concept deals with the study of knowledge?',
        options: ['Ethics', 'Epistemology', 'Metaphysics', 'Logic'],
        correctAnswer: 'Epistemology',
        explanation: 'Epistemology is the branch of philosophy concerned with knowledge, belief, and justification'
      },
      {
        id: '59',
        question: 'Who wrote "Thus Spoke Zarathustra"?',
        options: ['Karl Marx', 'Friedrich Nietzsche', 'Immanuel Kant', 'Georg Wilhelm Friedrich Hegel'],
        correctAnswer: 'Friedrich Nietzsche',
        explanation: 'Friedrich Nietzsche wrote "Thus Spoke Zarathustra" in 1883-1885'
      }
    ],
    Hard: [
      {
        id: '60',
        question: 'What is the name of Immanuel Kant\'s most famous work?',
        options: ['Critique of Pure Reason', 'Groundwork for the Metaphysics of Morals', 'Critique of Practical Reason', 'Critique of Judgment'],
        correctAnswer: 'Critique of Pure Reason',
        explanation: '"Critique of Pure Reason" (1781) is Kant\'s most famous work, establishing his critical philosophy'
      },
      {
        id: '61',
        question: 'What philosophical concept refers to "the study of being as being"?',
        options: ['Ontology', 'Epistemology', 'Axiology', 'Phenomenology'],
        correctAnswer: 'Ontology',
        explanation: 'Ontology is the branch of philosophy that studies concepts such as existence, being, becoming, and reality'
      }
    ]
  },
  Art: {
    Easy: [
      {
        id: '62',
        question: 'Who painted the Mona Lisa?',
        options: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Michelangelo'],
        correctAnswer: 'Leonardo da Vinci',
        explanation: 'Leonardo da Vinci painted the Mona Lisa between 1503 and 1519'
      },
      {
        id: '63',
        question: 'What art movement is Vincent van Gogh associated with?',
        options: ['Cubism', 'Impressionism', 'Post-Impressionism', 'Surrealism'],
        correctAnswer: 'Post-Impressionism',
        explanation: 'Vincent van Gogh is associated with Post-Impressionism, though he influenced many later movements'
      }
    ],
    Medium: [
      {
        id: '64',
        question: 'What is the name of the painting that features a woman with her arms crossed?',
        options: ['The Birth of Venus', 'The Scream', 'American Gothic', 'Guernica'],
        correctAnswer: 'American Gothic',
        explanation: '"American Gothic" by Grant Wood features a farmer with a pitchfork and a woman with crossed arms'
      },
      {
        id: '65',
        question: 'Who sculpted "David"?',
        options: ['Donatello', 'Michelangelo', 'Bernini', 'Rodin'],
        correctAnswer: 'Michelangelo',
        explanation: 'Michelangelo sculpted "David" between 1501 and 1504'
      }
    ],
    Hard: [
      {
        id: '66',
        question: 'What art movement was Marcel Duchamp associated with?',
        options: ['Dada', 'Futurism', 'Constructivism', 'De Stijl'],
        correctAnswer: 'Dada',
        explanation: 'Marcel Duchamp was a key figure in the Dada movement, known for his readymades like "Fountain"'
      },
      {
        id: '67',
        question: 'What is the name of the painting technique that uses small dots of color?',
        options: ['Fresco', 'Pointillism', 'Sfumato', 'Chiaroscuro'],
        correctAnswer: 'Pointillism',
        explanation: 'Pointillism is a painting technique where small dots of color are applied to create an image'
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
    id: 'streak-badge',
    name: 'Streak Master Badge',
    description: 'Unlock the exclusive Streak Master badge',
    cost: 800,
    type: 'badge' as const,
    value: 'streak-master',
    icon: '🔥'
  },
  {
    id: 'champion-badge',
    name: 'Quiz Champion Badge',
    description: 'Unlock the exclusive Quiz Champion badge',
    cost: 1200,
    type: 'badge' as const,
    value: 'quiz-champion',
    icon: '🏆'
  },
  {
    id: 'golden-border',
    name: 'Golden Border',
    description: 'Unlock golden profile border',
    cost: 500,
    type: 'customization' as const,
    value: 'golden-border',
    icon: '✨'
  },
  {
    id: 'avatar-frame',
    name: 'Special Avatar Frame',
    description: 'Unlock a special animated avatar frame',
    cost: 750,
    type: 'customization' as const,
    value: 'avatar-frame',
    icon: '🎭'
  }
];
