'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AuroraBackgroundProps {
  children: ReactNode;
  className?: string;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  children,
  className,
  showRadialGradient = true,
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        'relative min-h-screen w-full overflow-hidden bg-[#0a0a0f]',
        className
      )}
    >
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          transform: 'scale(1.2)',
        }}
      >
        {/* Aurora gradient layers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute -inset-[100%]"
          style={{
            background: `
              radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 0% 0%, rgba(139, 92, 246, 0.1) 0%, transparent 40%),
              radial-gradient(circle at 100% 100%, rgba(6, 182, 212, 0.1) 0%, transparent 40%)
            `,
          }}
        />
        
        {/* Animated aurora waves */}
        <motion.div
          animate={{
            x: ['0%', '100%', '0%'],
            y: ['0%', '50%', '0%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -inset-[100%] opacity-30"
          style={{
            background: `
              conic-gradient(
                from 0deg at 50% 50%,
                transparent 0deg,
                rgba(99, 102, 241, 0.1) 60deg,
                transparent 120deg,
                rgba(139, 92, 246, 0.1) 180deg,
                transparent 240deg,
                rgba(6, 182, 212, 0.1) 300deg,
                transparent 360deg
              )
            `,
            filter: 'blur(60px)',
          }}
        />
        
        <motion.div
          animate={{
            x: ['0%', '-100%', '0%'],
            y: ['0%', '-50%', '0%'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -inset-[100%] opacity-20"
          style={{
            background: `
              conic-gradient(
                from 180deg at 50% 50%,
                transparent 0deg,
                rgba(6, 182, 212, 0.1) 60deg,
                transparent 120deg,
                rgba(99, 102, 241, 0.1) 180deg,
                transparent 240deg,
                rgba(139, 92, 246, 0.1) 300deg,
                transparent 360deg
              )
            `,
            filter: 'blur(80px)',
          }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Radial gradient overlay */}
      {showRadialGradient && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(10, 10, 15, 0.4) 100%)',
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
