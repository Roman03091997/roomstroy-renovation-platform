# ROOM/STROY - AI-Powered Renovation Platform

🏠 Professional renovation company website for the Russian market with advanced AI integration.

## ✨ Features

- **YandexGPT-5 Pro Integration** - AI consultant Anna for personalized renovation advice
- **Interactive Cost Calculator** - Real-time cost estimation with detailed breakdowns
- **Telegram Notifications** - Instant lead notifications for sales team
- **Portfolio Showcase** - Beautiful gallery of completed projects
- **SEO Optimized** - Built for Russian market with Yandex integration
- **Responsive Design** - Perfect on all devices

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript + Tailwind CSS
- **Backend**: Express.js + TypeScript
- **AI**: YandexGPT-5 Pro API
- **Database**: PostgreSQL with Drizzle ORM
- **Deployment**: Vercel/Netlify ready
- **Notifications**: Telegram Bot API

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/Roman03091997/roomstroy-renovation-platform.git
cd roomstroy-renovation-platform
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Required environment variables:
- `YANDEX_API_KEY` - YandexGPT API key
- `YANDEX_FOLDER_ID` - Yandex Cloud folder ID
- `TELEGRAM_BOT_TOKEN` - Telegram bot token
- `TELEGRAM_CHAT_ID` - Telegram chat ID for notifications
- `DATABASE_URL` - PostgreSQL connection string

4. Run development server:
```bash
npm run dev
```

## 📁 Project Structure

```
├── client/          # React frontend
│   ├── src/
│   │   ├── components/  # UI components
│   │   ├── pages/       # Route pages
│   │   └── hooks/       # Custom hooks
├── server/          # Express backend
│   ├── routes.ts    # API routes
│   ├── yandex-gpt.ts # AI integration
│   └── telegram.ts  # Notifications
├── shared/          # Shared types and schemas
└── public/          # Static assets
```

## 🔧 Configuration

### YandexGPT Setup
1. Get API key from Yandex Cloud Console
2. Create folder in Yandex Cloud
3. Add credentials to environment variables

### Telegram Integration
1. Create bot with @BotFather
2. Get bot token and chat ID
3. Configure in environment variables

## 🚀 Deployment

### Vercel Deployment
```bash
npm run build
Vercel --prod
```

### Manual Deployment
```bash
npm run build
npm start
```

## 📊 Features Overview

### AI Chat Assistant (Anna)
- Conversational interface for renovation planning
- Context-aware responses
- Memory of previous conversations
- Professional consultation on materials and costs

### Cost Calculator
- Room type selection
- Area calculation
- Renovation type options
- Instant cost estimation
- Lead capture integration

### Admin Panels
- Marketing dashboard
- Lead management
- Yandex Direct integration
- Analytics and reporting

## 🛡️ Security Features

- Rate limiting on API endpoints
- Input validation and sanitization
- Secure environment variable handling
- CORS protection
- XSS prevention

## 📱 Mobile Optimization

- Responsive design for all screen sizes
- Touch-friendly interface
- Fast loading on mobile networks
- Progressive Web App features

## 🎨 Design System

- Professional cream/beige color scheme
- Brown accent colors
- Modern typography
- Consistent spacing and layout
- Accessible design principles

## 📈 SEO Features

- Russian market optimization
- Yandex search engine compatibility
- Meta tags and structured data
- Sitemap generation
- Fast loading speeds

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check` - TypeScript type checking

### Code Quality
- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Consistent file structure

## 📞 Contact & Support

- **Website**: офисремонт.рф
- **Phone**: +7 925 555 11-94
- **Email**: info@roomstroy.ru

## 📄 License

MIT License - see LICENSE file for details

---

Built with ❤️ for the Russian renovation market