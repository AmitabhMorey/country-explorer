'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ShinyTextProps {
    text: string;
    className?: string;
    shimmerWidth?: number;
    shimmerDuration?: number;
}

export const ShinyText = ({
    text,
    className,
    shimmerWidth = 100,
    shimmerDuration = 3,
}: ShinyTextProps) => {
    return (
        <motion.span
            className={cn(
                'inline-block bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white',
                'relative',
                className
            )}
            style={{
                backgroundSize: `${shimmerWidth}% 100%`,
                backgroundPosition: '-${shimmerWidth}% 0',
            }}
            animate={{
                backgroundPosition: ['${shimmerWidth * 2}% 0', '-${shimmerWidth}% 0'],
            }}
            transition={{
                duration: shimmerDuration,
                repeat: Infinity,
                ease: 'linear',
            }}
        >
            <span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                style={{
                    backgroundSize: `${shimmerWidth}% 100%`,
                    animation: `shine ${shimmerDuration}s linear infinite`,
                }}
            />
            {text}
        </motion.span>
    );
};
