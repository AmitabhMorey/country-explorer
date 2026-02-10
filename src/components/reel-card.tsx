'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Heart, Eye, Instagram, Youtube } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Reel } from '@/types';

interface ReelCardProps {
  reel: Reel;
  className?: string;
}

export const ReelCard = ({ reel, className }: ReelCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const formatNumber = (num: number): string => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const PlatformIcon = reel.platform === 'instagram' ? Instagram :
    reel.platform === 'youtube' ? Youtube :
      () => <span className="text-xs font-bold">TT</span>;

  const platformColors: Record<string, string> = {
    instagram: 'from-pink-500 to-purple-500',
    tiktok: 'from-cyan-500 to-pink-500',
    youtube: 'from-red-500 to-red-600',
    facebook: 'from-blue-500 to-blue-600',
  };

  return (
    <motion.div
      className={cn(
        'relative w-[180px] h-[280px] rounded-xl overflow-hidden cursor-pointer',
        'bg-card group border border-border/50',
        'hover-lift transition-all duration-300',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      {/* Thumbnail */}
      <div className="absolute inset-0">
        <img
          src={reel.thumbnail}
          alt={reel.description}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      {/* Platform badge */}
      <motion.div
        className={cn(
          'absolute top-3 left-3 px-2 py-1 rounded-full',
          'glass-dark flex items-center gap-1.5'
        )}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <PlatformIcon className="h-3 w-3 text-white" />
        <span className="text-xs text-white capitalize">{reel.platform}</span>
      </motion.div>

      {/* Play button */}
      <motion.div
        className={cn(
          'absolute inset-0 flex items-center justify-center',
          'opacity-0 group-hover:opacity-100 transition-opacity duration-300'
        )}
      >
        <motion.div
          className={cn(
            'w-12 h-12 rounded-full flex items-center justify-center',
            'bg-gradient-to-br',
            platformColors[reel.platform] || platformColors.instagram
          )}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Play className="h-5 w-5 text-white fill-white ml-0.5" />
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        {/* Author */}
        <p className="text-xs text-zinc-300 mb-1">{reel.author}</p>

        {/* Description */}
        <p className="text-xs text-white line-clamp-2 mb-2">{reel.description}</p>

        {/* Stats */}
        <div className="flex items-center gap-3 text-zinc-400">
          <div className="flex items-center gap-1">
            <Heart className="h-3 w-3" />
            <span className="text-xs">{formatNumber(reel.likes)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Eye className="h-3 w-3" />
            <span className="text-xs">{formatNumber(reel.views)}</span>
          </div>
        </div>
      </div>

      {/* Glassmorphism overlay on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-xl glass-card"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-xl"
        animate={{
          boxShadow: isHovered
            ? '0 0 30px color-mix(in srgb, var(--primary), transparent 60%), inset 0 0 30px color-mix(in srgb, var(--primary), transparent 90%)'
            : '0 0 0px color-mix(in srgb, var(--primary), transparent 100%)',
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};
