# EduSpin API Documentation

## Overview

EduSpin is a Base MiniApp that integrates with multiple services and APIs to provide a comprehensive learning gamification experience. This document outlines all the APIs, integrations, and technical specifications used in the application.

## Architecture

EduSpin follows a hybrid architecture combining:
- **Frontend**: Next.js 15 with React 19, TypeScript, and Tailwind CSS
- **State Management**: React hooks with local state (expandable to global state)
- **Data Storage**: Upstash Redis for serverless data persistence
- **Blockchain Integration**: Base network via Coinbase OnchainKit
- **Social Integration**: Farcaster MiniApp SDK
- **File Storage**: Pinata IPFS (planned for future use)

## API Integrations

### 1. Farcaster MiniApp SDK

**Purpose**: User authentication, social features, and frame interactions

**SDK**: `@farcaster/miniapp-sdk`
**Version**: `0.1.10`
**Documentation**: https://docs.farcaster.xyz/learn/essentials/frames/

#### Key Features Used:
- **User Authentication**: Seamless login via Farcaster ID
- **Frame Interactions**: In-frame quiz interactions and spin mechanics
- **Social Graph**: Friend connections and social leaderboards
- **Wallet Connection**: Integration with user's Farcaster-connected wallet

#### Implementation:
```typescript
// User authentication flow
const farcasterUser = await sdk.actions.authenticate({
  accessToken: process.env.FARCASTER_ACCESS_TOKEN
});

// Frame interactions
const frameResult = await sdk.actions.openFrame({
  url: `${process.env.NEXT_PUBLIC_APP_URL}/quiz/${quizId}`,
  method: 'POST'
});
```

#### Environment Variables:
```env
FARCASTER_CLIENT_ID=your_farcaster_client_id
FARCASTER_CLIENT_SECRET=your_farcaster_client_secret
FARCASTER_ACCESS_TOKEN=your_access_token
```

### 2. Coinbase OnchainKit

**Purpose**: Base network integration, wallet connections, and on-chain transactions

**SDK**: `@coinbase/onchainkit`
**Version**: `^0.38.19`
**Documentation**: https://docs.base.org/base-app/build-with-minikit/deploy-your-miniapp

#### Key Features Used:
- **Wallet Connection**: Connect to Base-compatible wallets
- **Transaction Handling**: Process USDC redemptions and token purchases
- **Network Integration**: Base mainnet/testnet switching
- **Smart Contract Interactions**: Future reward distribution contracts

#### Implementation:
```typescript
import { OnchainKitProvider } from '@coinbase/onchainkit';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <OnchainKitProvider
      apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY || 'cdp_demo_key'}
      chain={base}
    >
      {children}
    </OnchainKitProvider>
  );
}
```

#### Environment Variables:
```env
NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_onchainkit_api_key
```

### 3. Upstash Redis

**Purpose**: Serverless data persistence for user profiles, quiz attempts, and leaderboards

**SDK**: `@upstash/redis`
**Version**: `^1.34.4`
**Documentation**: https://docs.upstash.com/redis

#### Data Models:

**User Data Structure:**
```typescript
interface User {
  userId: string;
  farcasterId?: string;
  walletAddress?: string;
  points: number;
  streakCount: number;
  badges: Badge[];
  profileCustomizations: ProfileCustomization[];
  spinTokens: number;
  createdAt: Date;
  lastSpinDate?: Date;
  totalQuizzes: number;
  correctAnswers: number;
}
```

**Quiz Attempt Structure:**
```typescript
interface QuizAttempt {
  attemptId: string;
  userId: string;
  quizTopic: string;
  quizDifficulty: 'Easy' | 'Medium' | 'Hard';
  score: number;
  timestamp: Date;
  earnedPoints: number;
  questions: QuizQuestion[];
  userAnswers: string[];
}
```

#### Key Operations:
- **User Profile Management**: CRUD operations for user data
- **Quiz Attempt Logging**: Store and retrieve quiz results
- **Leaderboard Calculation**: Real-time ranking computations
- **Badge Tracking**: Achievement progress and unlocks

#### Implementation:
```typescript
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// Store user data
await redis.set(`user:${userId}`, JSON.stringify(userData));

// Retrieve leaderboard
const leaderboard = await redis.zrevrange('leaderboard:points', 0, 9, 'WITHSCORES');
```

#### Environment Variables:
```env
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
```

### 4. Pinata IPFS (Future Integration)

**Purpose**: Decentralized storage for user profile customizations and dynamic assets

**SDK**: `@pinata/sdk`
**Documentation**: https://docs.pinata.cloud/

#### Planned Features:
- **Profile Images**: Store user avatar customizations
- **Badge Assets**: Decentralized badge icons and animations
- **Achievement Media**: Dynamic content for unlocked achievements

#### Environment Variables:
```env
PINATA_API_KEY=your_pinata_api_key
PINATA_SECRET_API_KEY=your_pinata_secret_key
PINATA_JWT=your_pinata_jwt
```

## Internal APIs

### Quiz Engine API

**Purpose**: Manages quiz generation, scoring, and progress tracking

#### Endpoints:

**GET /api/quiz/generate**
- Generate a random quiz based on spin result
- Parameters: `topic`, `difficulty`
- Returns: `QuizQuestion` object

**POST /api/quiz/submit**
- Submit quiz answers and calculate scores
- Parameters: `attemptId`, `answers[]`
- Returns: `QuizResult` with points earned

**GET /api/quiz/history**
- Retrieve user's quiz attempt history
- Parameters: `userId`, `limit`, `offset`
- Returns: Array of `QuizAttempt` objects

### Leaderboard API

**Purpose**: Real-time leaderboard calculations and rankings

#### Endpoints:

**GET /api/leaderboard/global**
- Get global leaderboard rankings
- Parameters: `limit`, `offset`
- Returns: Array of leaderboard entries

**GET /api/leaderboard/friends**
- Get leaderboard for user's social connections
- Parameters: `userId`, `limit`
- Returns: Filtered leaderboard entries

**GET /api/leaderboard/user-rank**
- Get specific user's ranking
- Parameters: `userId`
- Returns: User's rank and surrounding context

### Reward System API

**Purpose**: Handle point redemptions and reward distributions

#### Endpoints:

**GET /api/rewards/available**
- Get available rewards for user
- Parameters: `userId`
- Returns: Array of redeemable rewards

**POST /api/rewards/redeem**
- Redeem points for rewards
- Parameters: `userId`, `rewardId`, `amount`
- Returns: Transaction confirmation

**GET /api/rewards/history**
- Get user's redemption history
- Parameters: `userId`
- Returns: Array of redemption records

## Smart Contracts (Future)

### Reward Distribution Contract

**Purpose**: Handle on-chain reward redemptions and token distributions

**Network**: Base
**Language**: Solidity
**Key Functions**:
- `redeemUSDC(uint256 amount)`: Redeem points for USDC
- `mintBadge(address user, uint256 badgeId)`: Mint achievement NFTs
- `distributeRewards(address[] users, uint256[] amounts)`: Batch reward distributions

### Token Purchase Contract

**Purpose**: Handle spin token purchases and microtransactions

**Network**: Base
**Key Features**:
- ERC-20 compatible token purchases
- Gasless transactions via meta-transactions
- Subscription management for premium features

## Security Considerations

### Authentication
- Farcaster-based authentication with wallet verification
- Session management via secure tokens
- Rate limiting on API endpoints

### Data Privacy
- Minimal data collection (GDPR compliant)
- Encrypted user data storage
- User-controlled data sharing preferences

### Smart Contract Security
- OpenZeppelin audited contracts
- Multi-signature controls for admin functions
- Emergency pause mechanisms

## Performance Optimization

### Caching Strategy
- Redis caching for leaderboard data
- CDN for static assets
- Browser caching for quiz questions

### Database Optimization
- Indexed queries for leaderboard calculations
- Batch operations for bulk updates
- Connection pooling for Redis

### Frontend Optimization
- Code splitting for route-based loading
- Image optimization and lazy loading
- Service worker for offline functionality

## Monitoring & Analytics

### Application Metrics
- User engagement tracking
- Quiz completion rates
- Revenue metrics (token purchases, redemptions)

### Performance Monitoring
- Response time tracking
- Error rate monitoring
- Resource usage analytics

### Business Intelligence
- User retention analysis
- Feature usage patterns
- Conversion funnel optimization

## Deployment & Infrastructure

### Hosting
- **Frontend**: Vercel/Netlify for Next.js deployment
- **Database**: Upstash Redis (serverless)
- **File Storage**: Pinata IPFS
- **Smart Contracts**: Base network

### CI/CD Pipeline
- Automated testing on pull requests
- Staging environment for feature testing
- Production deployment with rollback capabilities

### Backup & Recovery
- Redis data snapshots
- Smart contract state backups
- User data export capabilities

## Future Enhancements

### Advanced Features
- **AI-Powered Quiz Generation**: Dynamic question creation
- **Social Challenges**: Friend vs friend competitions
- **NFT Achievements**: Soulbound tokens for badges
- **Cross-Platform Sync**: Mobile app integration

### Scalability Improvements
- **Microservices Architecture**: Separate services for different features
- **Global CDN**: Worldwide content distribution
- **Database Sharding**: Horizontal scaling for user data

### Integration Expansions
- **Additional Blockchains**: Multi-chain reward support
- **Social Platforms**: Twitter, Discord integrations
- **Educational APIs**: Integration with learning platforms

---

## Support & Maintenance

For API-related issues or integration questions:
- Check the respective documentation links provided
- Review the implementation examples in the codebase
- Contact the development team for custom integrations

## Version History

- **v1.0.0**: Initial release with core quiz and reward functionality
- **v1.1.0**: Added leaderboard and social features
- **v1.2.0**: Integrated Farcaster and Base network support
- **v1.3.0**: Enhanced UI/UX and performance optimizations
