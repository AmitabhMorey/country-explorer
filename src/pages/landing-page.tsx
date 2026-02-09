'use client';

import { motion } from 'framer-motion';
import { Compass, Sparkles, Globe, Plane, MapPin } from 'lucide-react';
import { AuroraBackground } from '@/components/aurora-background';
import { DecryptedText } from '@/components/decrypted-text';
import { GridBackground } from '@/components/grid-background';
import { CountrySearch } from '@/components/country-search';
import { cn } from '@/lib/utils';

interface LandingPageProps {
  onSearch: (country: string) => void;
  isLoading: boolean;
}

export const LandingPage = ({ onSearch, isLoading }: LandingPageProps) => {
  const features = [
    {
      icon: Globe,
      title: 'Discover Reels',
      description: 'Watch trending travel videos from Instagram, TikTok & YouTube',
    },
    {
      icon: Plane,
      title: 'Find Opportunities',
      description: 'Work, study, volunteer & teach abroad programs',
    },
    {
      icon: MapPin,
      title: 'Real Programs',
      description: 'Apply directly to verified travel opportunities',
    },
  ];

  const popularCountries = [
    { name: 'Japan', flag: '🇯🇵' },
    { name: 'Italy', flag: '🇮🇹' },
    { name: 'Brazil', flag: '🇧🇷' },
    { name: 'Thailand', flag: '🇹🇭' },
    { name: 'France', flag: '🇫🇷' },
    { name: 'Australia', flag: '🇦🇺' },
  ];

  return (
    <AuroraBackground className="min-h-screen flex flex-col">
      <GridBackground className="min-h-screen flex flex-col" gridSize="medium">
        {/* Header */}
        <motion.header
          className="w-full px-6 py-4 flex items-center justify-between glass-dark rounded-b-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2">
            <div className={cn(
              'p-2 rounded-lg',
              'bg-gradient-to-br from-primary to-purple-500 glow-primary'
            )}>
              <Compass className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-wide">CountryExplorer</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-muted-foreground hover:text-white transition-all hover:glow-primary">Features</a>
            <a href="#popular" className="text-muted-foreground hover:text-white transition-all hover:glow-primary">Popular</a>
            <a href="#about" className="text-muted-foreground hover:text-white transition-all hover:glow-primary">About</a>
          </nav>
        </motion.header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
          {/* Badge */}
          <motion.div
            className={cn(
              'flex items-center gap-2 px-4 py-2 rounded-full mb-8',
              'bg-primary/10 border border-primary/20',
              'text-sm text-primary'
            )}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Sparkles className="h-4 w-4" />
            <span>Discover travel opportunities worldwide</span>
          </motion.div>

          {/* Title */}
          <div className="text-center mb-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 tracking-tight">
              <DecryptedText
                text="Discover Your Next"
                delay={300}
                duration={1200}
              />
            </h1>
            <motion.h2
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Adventure
              </span>
            </motion.h2>
          </div>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mb-12 text-balance"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            Enter any country name and unlock a world of travel reels,
            work opportunities, scholarships, and free programs waiting for you.
          </motion.p>

          {/* Search Component */}
          <CountrySearch onSearch={onSearch} isLoading={isLoading} />

          {/* Popular Countries */}
          <motion.div
            id="popular"
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <p className="text-center text-gray-400 text-sm mb-4 tracking-wide">Popular destinations</p>
            <div className="flex flex-wrap justify-center gap-3">
              {popularCountries.map((country, index) => (
                <motion.button
                  key={country.name}
                  onClick={() => onSearch(country.name)}
                  className={cn(
                    'flex items-center gap-2 px-4 py-2 rounded-full',
                    'glass-card hover-glow hover-scale',
                    'transition-all duration-300'
                  )}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.1 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{country.flag}</span>
                  <span className="text-sm text-white">{country.name}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Features */}
          <motion.section
            id="features"
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.3 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className={cn(
                  'p-6 rounded-xl glass-card',
                  'hover-lift hover-glow',
                  'transition-all duration-300 group'
                )}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.4 + index * 0.1 }}
              >
                <div className={cn(
                  'w-12 h-12 rounded-lg mb-4',
                  'bg-gradient-to-br from-primary/20 to-purple-500/20',
                  'flex items-center justify-center',
                  'group-hover:glow-primary transition-all duration-300'
                )}>
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.section>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 md:gap-16 mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.6 }}
          >
            {[
              { value: '50+', label: 'Countries' },
              { value: '200+', label: 'Programs' },
              { value: '10K+', label: 'Reels' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.7 + index * 0.1 }}
              >
                <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </main>

        {/* Footer */}
        <motion.footer
          id="about"
          className="w-full px-6 py-8 text-center text-muted-foreground text-sm border-t border-border"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.9 }}
        >
          <p>© 2026 CountryExplorer. Discover the world, one country at a time.</p>
          <p className="mt-2 text-xs">
            Data sourced from official program websites and social media platforms.
          </p>
        </motion.footer>
      </GridBackground>
    </AuroraBackground>
  );
};
