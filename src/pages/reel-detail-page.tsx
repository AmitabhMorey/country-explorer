'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Heart, Eye, Share2, ExternalLink, Play, Instagram, Youtube } from 'lucide-react';
import { AuroraBackground } from '@/components/aurora-background';
import type { Reel } from '@/types';
import { cn } from '@/lib/utils';
import { socialAPI } from '@/services/social-api';
import { ThemeToggleButton } from '@/components/ui/skiper-ui/skiper26';

interface ReelDetailPageProps {
  reel: Reel;
  countryName: string;
  onBack: () => void;
}

export const ReelDetailPage = ({ reel, countryName, onBack }: ReelDetailPageProps) => {
  // Related reels would be fetched here
  // const relatedReels = socialAPI.getReels(countryName, 4);

  const formatNumber = (num: number): string => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const PlatformIcon = reel.platform === 'instagram' ? Instagram :
    reel.platform === 'youtube' ? Youtube :
      () => <span className="text-lg font-bold">TT</span>;

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
          <span>Back</span>
        </motion.button>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <PlatformIcon className="h-5 w-5 text-primary" />
            <span className="font-semibold capitalize">{reel.platform}</span>
          </div>
          <ThemeToggleButton />
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="px-6 py-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Video/Image Section */}
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-[9/16] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-card border border-border">
              <img
                src={reel.thumbnail}
                alt={reel.description}
                className="w-full h-full object-cover"
              />

              {/* Play Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <motion.a
                  href={reel.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'w-20 h-20 rounded-full bg-primary/90',
                    'flex items-center justify-center',
                    'hover:bg-primary transition-colors cursor-pointer'
                  )}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="h-8 w-8 text-primary-foreground fill-primary-foreground ml-1" />
                </motion.a>
              </div>

              {/* Platform Badge */}
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm flex items-center gap-2">
                <PlatformIcon className="h-4 w-4 text-white" />
                <span className="text-sm text-white capitalize">{reel.platform}</span>
              </div>
            </div>
          </motion.section>

          {/* Info Section */}
          <motion.section
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-primary-foreground font-bold text-lg">
                {reel.author.charAt(1).toUpperCase()}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{reel.author}</h3>
                <p className="text-muted-foreground text-sm">{reel.location}</p>
              </div>
            </div>

            {/* Description */}
            <div>
              <p className="text-lg leading-relaxed">{reel.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {reel.hashtags.map((tag, i) => (
                  <span key={i} className="text-primary text-sm">{tag}</span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-6 py-4 border-y border-border">
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-pink-500" />
                <span className="font-semibold">{formatNumber(reel.likes)}</span>
                <span className="text-muted-foreground text-sm">likes</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-blue-500" />
                <span className="font-semibold">{formatNumber(reel.views)}</span>
                <span className="text-muted-foreground text-sm">views</span>
              </div>
              <div className="flex items-center gap-2">
                <Share2 className="h-5 w-5 text-green-500" />
                <span className="text-muted-foreground text-sm">Share</span>
              </div>
            </div>

            {/* Posted Date */}
            <p className="text-muted-foreground text-sm">
              Posted on {new Date(reel.postedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.a
                href={reel.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'flex items-center justify-center gap-2',
                  'px-6 py-3 rounded-xl font-medium',
                  'bg-primary text-primary-foreground',
                  'hover:bg-primary/90 transition-colors'
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink className="h-5 w-5" />
                <span>View on {reel.platform}</span>
              </motion.a>

              <motion.button
                className={cn(
                  'flex items-center justify-center gap-2',
                  'px-6 py-3 rounded-xl font-medium',
                  'bg-accent text-accent-foreground',
                  'hover:bg-accent/90 transition-colors'
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Share2 className="h-5 w-5" />
                <span>Share</span>
              </motion.button>
            </div>

            {/* More Content Links */}
            <div className="bg-card rounded-xl p-4 border border-border">
              <h4 className="font-semibold mb-3">Discover More on {reel.platform}</h4>
              <div className="space-y-2">
                {socialAPI.getSocialSearchLinks(countryName).map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-accent transition-colors"
                  >
                    <span className="text-sm">{link.platform}</span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </a>
                ))}
              </div>
            </div>
          </motion.section>
        </div>

        {/* Related Reels */}
        <motion.section
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6">More from {countryName}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {/* This would show related reels - simplified for now */}
          </div>
        </motion.section>
      </main>
    </AuroraBackground>
  );
};
