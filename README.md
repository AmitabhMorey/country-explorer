# 🌍 CountryExplorer

> Discover your next adventure - Explore travel opportunities, scholarships, and authentic experiences worldwide

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://your-demo-url.vercel.app)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18.3.1-61dafb.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-3178c6.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.3.0-646cff.svg)](https://vitejs.dev/)

## ✨ Features

### 🎬 Trending Travel Reels
- Watch authentic travel content from Instagram, TikTok & YouTube
- Discover hidden gems and popular destinations
- Filter by platform and engagement metrics

### 🎓 Travel Opportunities
- **Work Programs** - Paid positions abroad
- **Scholarships** - Fully funded education opportunities
- **Volunteer Programs** - Make a difference while traveling
- **Exchange Programs** - Cultural immersion experiences
- **Internships** - Professional development abroad
- **Teaching Programs** - Share your knowledge worldwide

### 🎨 Modern UI/UX
- **Glassmorphism Design** - Premium frosted glass effects
- **Smooth Animations** - 60fps transitions and micro-interactions
- **Grid Backgrounds** - Subtle texture overlays
- **Gradient Accents** - Vibrant purple-to-pink gradients
- **Dark Theme** - Easy on the eyes, modern aesthetic
- **Responsive Design** - Perfect on all devices

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/country-explorer.git

# Navigate to project directory
cd country-explorer/app

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see the app in action!

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## 📸 Screenshots

### Landing Page
Modern hero section with glassmorphism effects and gradient text

### Search Results
Browse trending reels and travel opportunities by country

### Opportunity Details
Detailed information about programs, requirements, and benefits

## 🛠️ Tech Stack

### Core
- **React 18.3.1** - UI library
- **TypeScript 5.7.3** - Type safety
- **Vite 7.3.0** - Build tool & dev server
- **React Router DOM 7.1.4** - Client-side routing

### UI & Styling
- **Tailwind CSS 3.4.18** - Utility-first CSS framework
- **Framer Motion 12.0.0** - Animation library
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon set

### Design Patterns
- **Glassmorphism** - Modern frosted glass effects
- **Grid Backgrounds** - Subtle texture overlays
- **Gradient Accents** - Vibrant color transitions
- **Micro-interactions** - Smooth hover effects

## 📁 Project Structure

```
app/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── aurora-background.tsx
│   │   ├── country-search.tsx
│   │   ├── decrypted-text.tsx
│   │   ├── grid-background.tsx
│   │   ├── opportunity-card.tsx
│   │   ├── reel-card.tsx
│   │   └── shiny-text.tsx
│   ├── pages/              # Page components
│   │   ├── landing-page.tsx
│   │   ├── results-page.tsx
│   │   ├── reel-detail-page.tsx
│   │   └── opportunity-detail-page.tsx
│   ├── lib/                # Utilities & helpers
│   │   ├── mock-data.ts    # Sample data
│   │   └── utils.ts        # Helper functions
│   ├── types/              # TypeScript type definitions
│   │   └── index.ts
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── dist/                   # Production build output
├── package.json            # Dependencies & scripts
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.ts          # Vite configuration
└── README.md              # This file
```

## 🎨 Design System

### Colors
- **Primary**: Purple gradient (`hsl(var(--primary))`)
- **Accent**: Pink to purple gradients
- **Background**: Dark navy (`hsl(222.2 84% 4.9%)`)
- **Card**: Translucent glass effect

### Typography
- **Font Family**: System fonts with fallbacks
- **Tracking**: Wide letter-spacing for premium feel
- **Hierarchy**: Clear heading structure

### Animations
- **Hover Lift**: Subtle elevation on hover
- **Glow Effects**: Soft glows on interactive elements
- **Scale**: Smooth scale transitions
- **Fade**: Opacity transitions

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Vercel auto-detects Vite configuration
4. Click "Deploy"

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy the dist/ folder to your hosting provider
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Add your environment variables here
# VITE_API_URL=https://api.example.com
```

### Customization

- **Colors**: Edit `tailwind.config.js` and CSS variables in `src/index.css`
- **Mock Data**: Update `src/lib/mock-data.ts` with your data
- **API Integration**: Replace mock data with real API calls

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from [TweakCN](https://tweakcn.com) and [ReactBits](https://reactbits.dev)
- Icons by [Lucide](https://lucide.dev)
- UI components by [shadcn/ui](https://ui.shadcn.com)
- Animations by [Framer Motion](https://www.framer.com/motion/)

## 📧 Contact

Your Name - [@beingamitabh](https://x.com/beingamitabh)

Project Link: [https://github.com/AmitabhMorey/country-explorer](https://github.com/AmitabhMorey/country-explorer)

---

<div align="center">
  <p>Made with ❤️ and ☕</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
