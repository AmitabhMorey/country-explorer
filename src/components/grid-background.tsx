'use client';

import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface GridBackgroundProps {
    children: ReactNode;
    className?: string;
    gridSize?: 'small' | 'medium' | 'large';
    variant?: 'line' | 'dot';
}

export const GridBackground = ({
    children,
    className,
    gridSize = 'medium',
    variant = 'line',
}: GridBackgroundProps) => {
    const gridClass = variant === 'line'
        ? gridSize === 'small'
            ? 'grid-background-dense'
            : gridSize === 'large'
                ? 'grid-background-subtle'
                : 'grid-background'
        : 'dot-grid';

    return (
        <div className={cn('relative', className)}>
            <div className={cn('absolute inset-0', gridClass)} />
            <div className="relative z-10">{children}</div>
        </div>
    );
};
