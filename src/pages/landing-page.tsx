'use client';

import { motion } from 'framer-motion';
import { Compass, Sparkles, Globe, Plane, MapPin } from 'lucide-react';
import { AuroraBackground } from '@/components/aurora-background';
import { CountrySearch } from '@/components/country-search';
import { cn } from '@/lib/utils';
import { ThemeToggleButton } from '@/components/ui/skiper-ui/skiper26';

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
    <AuroraBackground className="flex flex-col">
      {/* Header */}
      <motion.header
        className="w-full px-6 py-4 flex items-center justify-between bg-card/50 backdrop-blur-md rounded-b-2xl border-b border-border/50"
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
          <a href="#features" className="text-muted-foreground hover:text-primary transition-all hover:glow-primary">Features</a>
          <a href="#popular" className="text-muted-foreground hover:text-primary transition-all hover:glow-primary">Popular</a>
          <a href="#about" className="text-muted-foreground hover:text-primary transition-all hover:glow-primary">About</a>
          <ThemeToggleButton className="ml-2 mt-2" />
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
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 tracking-tight font-serif"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Discover Your Next
          </motion.h1>
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight font-serif"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Adventure
            </span>
          </motion.h2>
        </div>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-muted-foreground text-center max-w-2xl mb-12 text-balance"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Enter any country name and unlock a world of travel reels,
          work opportunities, scholarships, and free programs waiting for you.
        </motion.p>

        {/* Search Component */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="w-full max-w-xl mx-auto"
        >
          <CountrySearch onSearch={onSearch} isLoading={isLoading} />
        </motion.div>

        {/* Popular Countries */}
        <motion.div
          id="popular"
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <p className="text-center text-muted-foreground text-sm mb-4 tracking-wide">Popular destinations</p>
          <div className="flex flex-wrap justify-center gap-3">
            {popularCountries.map((country) => (
              <motion.button
                key={country.name}
                onClick={() => onSearch(country.name)}
                className={cn(
                  'flex items-center gap-2 px-4 py-2 rounded-full',
                  'glass-card border border-border hover-glow hover-scale',
                  'transition-all duration-300'
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{country.flag}</span>
                <span className="text-sm text-foreground">{country.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.section
          id="features"
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={cn(
                'p-6 rounded-xl glass-card border border-border',
                'hover-lift hover-glow',
                'transition-all duration-300 group'
              )}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <div className={cn(
                'w-12 h-12 rounded-lg mb-4',
                'bg-gradient-to-br from-primary/20 to-purple-500/20',
                'flex items-center justify-center',
                'group-hover:glow-primary transition-all duration-300'
              )}>
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 md:gap-16 mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
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
    </AuroraBackground>
  );
};
