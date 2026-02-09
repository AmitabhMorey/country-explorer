'use client';

import { Children, type ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedListProps {
  children: ReactNode[];
  className?: string;
  itemClassName?: string;
  staggerDelay?: number;
  initialDelay?: number;
}

export const AnimatedList = ({
  children,
  className,
  itemClassName,
  staggerDelay = 0.1,
  initialDelay = 0,
}: AnimatedListProps) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <motion.div
      className={cn(className)}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {Children.map(children, (child, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className={cn(itemClassName)}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

// Horizontal scroll version for reels
interface AnimatedHorizontalListProps {
  children: ReactNode[];
  className?: string;
  itemClassName?: string;
}

export const AnimatedHorizontalList = ({
  children,
  className,
  itemClassName,
}: AnimatedHorizontalListProps) => {
  return (
    <motion.div
      className={cn('flex gap-4 overflow-x-auto pb-4 scrollbar-hide', className)}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {Children.map(children, (child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 30, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.1,
            ease: 'easeOut',
          }}
          className={cn('flex-shrink-0', itemClassName)}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};
