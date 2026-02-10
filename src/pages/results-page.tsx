'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Play, Instagram, Youtube, Globe } from 'lucide-react';
import { AuroraBackground } from '@/components/aurora-background';
import { AnimatedHorizontalList } from '@/components/animated-list';
import { ReelCard } from '@/components/reel-card';
import { OpportunityCard } from '@/components/opportunity-card';
import type { CountryData, Reel, Opportunity } from '@/types';
import { cn } from '@/lib/utils';
import { socialAPI } from '@/services/social-api';
import { ThemeToggleButton } from '@/components/ui/skiper-ui/skiper26';

interface ResultsPageProps {
  countryData: CountryData;
  onBack: () => void;
  onReelClick: (reel: Reel) => void;
  onOpportunityClick: (opportunity: Opportunity) => void;
}

export const ResultsPage = ({
  countryData,
  onBack,
  onReelClick,
  onOpportunityClick
}: ResultsPageProps) => {
  const { info, reels, opportunities } = countryData;
  const socialLinks = socialAPI.getSocialSearchLinks(info.name);

  return (
    <AuroraBackground className="min-h-screen">
      {/* Navigation */}
      <motion.nav
        className="w-full px-6 py-4 flex items-center justify-between sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.button
          onClick={onBack}
          className={cn(
            'flex items-center gap-2 px-4 py-2 rounded-lg',
            'text-muted-foreground hover:text-foreground hover:bg-accent',
            'transition-all duration-200'
          )}
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Search</span>
        </motion.button>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{info.flag}</span>
            <span className="font-semibold hidden sm:inline">{info.name}</span>
          </div>
          <ThemeToggleButton />
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="px-6 py-8 max-w-7xl mx-auto">
        {/* Country Header */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
            <span className="text-6xl md:text-8xl">{info.flag}</span>
            <div>
              <motion.h1
                className="text-4xl md:text-6xl font-bold"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {info.name}
              </motion.h1>
              <motion.div
                className="flex flex-wrap items-center gap-4 mt-2 text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>Capital: {info.capital}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Globe className="h-4 w-4" />
                  <span>{info.region}</span>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.p
            className="text-lg text-muted-foreground max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {info.description}
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            className="flex flex-wrap gap-6 mt-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {info.population > 0 && (
              <div>
                <span className="text-sm text-muted-foreground">Population</span>
                <p className="font-semibold">{(info.population / 1000000).toFixed(1)}M</p>
              </div>
            )}
            <div>
              <span className="text-sm text-muted-foreground">Currency</span>
              <p className="font-semibold">{info.currency}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Language</span>
              <p className="font-semibold">{info.language}</p>
            </div>
          </motion.div>
        </motion.section>

        {/* Reels Section */}
        <section className="mb-12">
          <motion.div
            className="flex items-center justify-between mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center gap-3">
              <div className={cn(
                'p-2 rounded-lg bg-gradient-to-br from-pink-500/20 to-purple-500/20'
              )}>
                <Play className="h-5 w-5 text-pink-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Trending Reels</h2>
                <p className="text-sm text-muted-foreground">
                  From Instagram, TikTok & YouTube
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {socialLinks.slice(0, 3).map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-accent hover:bg-accent/80 transition-colors"
                  title={`View on ${link.platform}`}
                >
                  {link.platform === 'Instagram' && <Instagram className="h-4 w-4" />}
                  {link.platform === 'YouTube' && <Youtube className="h-4 w-4" />}
                  {link.platform === 'TikTok' && <span className="text-xs font-bold">TT</span>}
                </a>
              ))}
            </div>
          </motion.div>

          <AnimatedHorizontalList className="scrollbar-hide">
            {reels.map((reel) => (
              <div key={reel.id} onClick={() => onReelClick(reel)} className="cursor-pointer">
                <ReelCard reel={reel} />
              </div>
            ))}
          </AnimatedHorizontalList>
        </section>

        {/* Opportunities Section */}
        <section>
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className={cn(
              'p-2 rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20'
            )}>
              <svg
                className="h-5 w-5 text-emerald-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Travel Opportunities</h2>
              <p className="text-sm text-muted-foreground">
                Work, study, volunteer & more
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunities.map((opportunity, index) => (
              <motion.div
                key={opportunity.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                onClick={() => onOpportunityClick(opportunity)}
                className="cursor-pointer"
              >
                <OpportunityCard opportunity={opportunity} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <motion.section
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <p className="text-muted-foreground mb-4">
            Want to explore more countries?
          </p>
          <motion.button
            onClick={onBack}
            className={cn(
              'px-8 py-3 rounded-xl font-medium',
              'bg-primary text-primary-foreground',
              'hover:bg-primary/90 transition-colors'
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Search Another Country
          </motion.button>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="w-full px-6 py-8 text-center text-muted-foreground text-sm border-t border-border">
        <p>Data sourced from various travel programs and social media platforms.</p>
      </footer>
    </AuroraBackground>
  );
};
