'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface DecryptedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  onComplete?: () => void;
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

export const DecryptedText = ({
  text,
  className,
  delay = 0,
  duration = 1500,
  onComplete,
}: DecryptedTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isDecoding, setIsDecoding] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const decode = useCallback(() => {
    if (!hasStarted) return;

    setIsDecoding(true);
    const textLength = text.length;
    const iterations = 10;
    const intervalTime = duration / (textLength * iterations);

    let currentIndex = 0;
    let iterationCount = 0;

    const interval = setInterval(() => {
      setDisplayText(() => {
        let result = '';
        for (let i = 0; i < textLength; i++) {
          if (i < currentIndex) {
            result += text[i];
          } else if (i === currentIndex) {
            result += CHARS[Math.floor(Math.random() * CHARS.length)];
          } else {
            result += CHARS[Math.floor(Math.random() * CHARS.length)];
          }
        }
        return result;
      });

      iterationCount++;

      if (iterationCount >= iterations) {
        currentIndex++;
        iterationCount = 0;
      }

      if (currentIndex >= textLength) {
        clearInterval(interval);
        setDisplayText(text);
        setIsDecoding(false);
        onComplete?.();
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [text, duration, hasStarted, onComplete]);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setHasStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (hasStarted) {
      decode();
    }
  }, [hasStarted, decode]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'font-mono tracking-tight',
        isDecoding ? 'text-indigo-400' : 'text-white',
        className
      )}
    >
      {displayText || text.split('').map(() => ' ').join('')}
    </motion.span>
  );
};
