'use client';

import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AuroraBackgroundProps {
  children: ReactNode;
  className?: string;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  children,
  className,
}: AuroraBackgroundProps) => {
  return (
    <div className={cn("min-h-screen w-full bg-background relative", className)}>
      {/* Diagonal Fade Grid Background - Top Right */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--border) 1px, transparent 1px),
            linear-gradient(to bottom, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
        }}
      />
      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col">{children}</div>
    </div>
  );
};
