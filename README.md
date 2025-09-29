# EduSpin 🎓🎯

**Spin for Knowledge, Earn for Real** - A gamified learning platform on Base that makes daily education engaging and rewarding.

![EduSpin Banner](https://img.shields.io/badge/EduSpin-Learning%20Gamified-blue?style=for-the-badge&logo=react)
![Base Network](https://img.shields.io/badge/Base-Network-orange?style=flat-square&logo=ethereum)
![Farcaster](https://img.shields.io/badge/Farcaster-Integrated-purple?style=flat-square)

## 🌟 Overview

EduSpin is a revolutionary Base MiniApp that transforms daily learning into an exciting gamified experience. Users spin a wheel to discover quiz topics, answer questions to earn points, and redeem rewards through microtransactions and crypto payouts. Built for students aged 12-25, EduSpin makes education addictive through:

- **Daily Spin-to-Win Quizzes**: Gamified topic selection with varying difficulty levels
- **Reward System**: Points, badges, USDC redemptions, and profile customizations
- **Social Leaderboards**: Friendly competition with friends and global rankings
- **Progress Tracking**: Visual dashboards and streak counters
- **Farcaster Integration**: Seamless social features and wallet connectivity

## 🚀 Features

### Core Functionality
- **🎲 Daily Knowledge Spin**: Wheel-based topic and difficulty selection
- **🧠 Adaptive Quizzes**: Questions across 8 subjects (Math, Science, History, Literature, Geography, Technology, Philosophy, Art)
- **🏆 Achievement System**: 4 rarity tiers of badges (Common, Rare, Epic, Legendary)
- **💰 Reward Marketplace**: Redeem points for USDC, badges, and customizations
- **📊 Leaderboards**: Global and friend-based rankings
- **📈 Progress Analytics**: Detailed statistics and learning insights

### Technical Features
- **🔗 Farcaster Integration**: Social authentication and frame interactions
- **⛓️ Base Network**: On-chain rewards and microtransactions
- **💾 Redis Storage**: Serverless data persistence
- **🎨 Modern UI**: Glassmorphism design with Tailwind CSS
- **📱 Responsive**: Optimized for mobile and desktop
- **⚡ Performance**: Fast loading with Next.js 15 and React 19

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   API Routes    │    │   External APIs │
│   (Next.js)     │◄──►│   (Next.js)     │◄──►│                 │
│                 │    │                 │    │ • Farcaster     │
└─────────────────┘    └─────────────────┘    │ • Base Network │
                                              │ • Upstash Redis│
                                              │ • Pinata IPFS  │
                                              └─────────────────┘
```

### Tech Stack

**Frontend:**
- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Lucide React (Icons)

**Backend & APIs:**
- Next.js API Routes
- Upstash Redis
- Coinbase OnchainKit
- Farcaster MiniApp SDK

**Blockchain:**
- Base Network
- USDC Token
- Smart Contracts (Future)

## 📋 Prerequisites

- Node.js 18+
- npm or yarn
- Git
- Farcaster account (for testing)
- Base-compatible wallet

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/vistara-apps/c23c326e-34a2-475d-8b8c-61f52c878f82.git
   cd eduspin
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` with your API keys:
   ```env
   # Farcaster Integration
   FARCASTER_CLIENT_ID=your_farcaster_client_id
   FARCASTER_CLIENT_SECRET=your_farcaster_client_secret
   FARCASTER_ACCESS_TOKEN=your_access_token

   # Coinbase OnchainKit
   NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_onchainkit_api_key

   # Upstash Redis
   UPSTASH_REDIS_REST_URL=your_upstash_redis_url
   UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token

   # Pinata IPFS (Optional)
   PINATA_API_KEY=your_pinata_api_key
   PINATA_SECRET_API_KEY=your_pinata_secret_key
   PINATA_JWT=your_pinata_jwt
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## 🎮 Usage

### For Users

1. **Connect Wallet**: Link your Farcaster account and wallet
2. **Daily Spin**: Click the spin button to get your quiz topic
3. **Answer Questions**: Complete the quiz to earn points
4. **Track Progress**: View your stats and streaks
5. **Redeem Rewards**: Exchange points for USDC or customizations
6. **Compete**: Check leaderboards and earn badges

### For Developers

#### Project Structure
```
eduspin/
├── app/                    # Next.js app directory
│   ├── components/         # Reusable UI components
│   ├── leaderboard/        # Leaderboard page
│   ├── rewards/           # Rewards marketplace
│   ├── profile/           # User profile page
│   ├── settings/          # Settings page
│   └── api/               # API routes
├── lib/                   # Utility functions and types
│   ├── constants.ts       # App constants and quiz data
│   ├── types.ts          # TypeScript interfaces
│   └── utils.ts          # Helper functions
├── public/               # Static assets
└── API_DOCUMENTATION.md  # Complete API documentation
```

#### Key Components

**AppShell**: Main layout with navigation
**SpinWheel**: Interactive spinning wheel component
**QuizCard**: Question display and answer selection
**LeaderboardEntry**: Individual leaderboard entries
**RewardDisplay**: Reward items with redemption logic

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `FARCASTER_CLIENT_ID` | Farcaster OAuth client ID | Yes |
| `FARCASTER_CLIENT_SECRET` | Farcaster OAuth client secret | Yes |
| `FARCASTER_ACCESS_TOKEN` | Farcaster access token | Yes |
| `NEXT_PUBLIC_ONCHAINKIT_API_KEY` | Coinbase OnchainKit API key | Yes |
| `UPSTASH_REDIS_REST_URL` | Upstash Redis REST URL | Yes |
| `UPSTASH_REDIS_REST_TOKEN` | Upstash Redis REST token | Yes |

### Build Configuration

The app uses Next.js 15 with the following key configurations:

- **TypeScript**: Strict type checking enabled
- **Tailwind CSS**: Custom design system with CSS variables
- **ESLint**: Code quality enforcement
- **PostCSS**: CSS processing and optimization

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository:**
   ```bash
   # Install Vercel CLI
   npm i -g vercel

   # Deploy
   vercel --prod
   ```

2. **Set Environment Variables** in Vercel dashboard

3. **Configure Domain** (optional)

### Manual Deployment

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Start production server:**
   ```bash
   npm start
   ```

### Docker Deployment

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🧪 Testing

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Manual Testing Checklist
- [ ] Spin wheel functionality
- [ ] Quiz answer submission
- [ ] Point calculation and streaks
- [ ] Leaderboard updates
- [ ] Reward redemptions
- [ ] Farcaster authentication
- [ ] Wallet connections
- [ ] Responsive design

## 📊 Analytics & Monitoring

### Built-in Metrics
- User engagement tracking
- Quiz completion rates
- Point earning patterns
- Reward redemption statistics

### External Monitoring
- Vercel Analytics (deployment metrics)
- Upstash Redis (performance monitoring)
- Base network explorers (transaction tracking)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript strict mode
- Use descriptive commit messages
- Add tests for new features
- Update documentation
- Follow the existing code style

## 📝 API Documentation

See [API_DOCUMENTATION.md](./API_DOCUMENTATION.md) for comprehensive API documentation including:

- Farcaster MiniApp SDK integration
- Coinbase OnchainKit usage
- Upstash Redis data models
- Internal API endpoints
- Smart contract specifications

## 🔒 Security

### Authentication
- Farcaster-based user verification
- Wallet signature validation
- Session token management

### Data Protection
- Encrypted Redis storage
- GDPR-compliant data handling
- User-controlled privacy settings

### Smart Contract Security
- OpenZeppelin audited contracts
- Multi-signature admin controls
- Emergency pause functionality

## 🐛 Troubleshooting

### Common Issues

**Build Errors:**
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

**Redis Connection Issues:**
- Verify Upstash credentials
- Check Redis REST URL format
- Ensure proper network connectivity

**Farcaster Integration:**
- Confirm Farcaster app registration
- Verify OAuth redirect URIs
- Check access token validity

**Wallet Connection:**
- Ensure Base network support
- Verify wallet compatibility
- Check network configuration

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Base Network** for blockchain infrastructure
- **Farcaster** for social integration
- **Coinbase** for OnchainKit
- **Upstash** for Redis hosting
- **Pinata** for IPFS services

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Check the API documentation
- Review the troubleshooting guide

## 🎯 Roadmap

### Phase 1 (Current)
- ✅ Core quiz and spin mechanics
- ✅ Basic reward system
- ✅ Leaderboard functionality
- ✅ Farcaster integration

### Phase 2 (Next)
- 🔄 Smart contract deployment
- 🔄 Advanced social features
- 🔄 Mobile app development
- 🔄 AI-powered quiz generation

### Phase 3 (Future)
- 🔄 Multi-chain support
- 🔄 NFT achievements
- 🔄 Educational partnerships
- 🔄 Global expansion

---

**Made with ❤️ for the future of learning**

*Spin. Learn. Earn. Repeat.* 🎓💎
