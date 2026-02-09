'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TiltedCardProps {
  children: React.ReactNode;
  className?: string;
  tiltAmount?: number;
  glareOpacity?: number;
}

export const TiltedCard = ({
  children,
  className,
  tiltAmount = 15,
  glareOpacity = 0.15,
}: TiltedCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateXValue = (mouseY / (rect.height / 2)) * -tiltAmount;
    const rotateYValue = (mouseX / (rect.width / 2)) * tiltAmount;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
    
    setGlarePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        'relative overflow-hidden rounded-xl bg-[#1a1a25]',
        'transform-gpu perspective-1000',
        className
      )}
      style={{
        transformStyle: 'preserve-3d',
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      {/* Glare effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10"
        animate={{
          opacity: isHovered ? glareOpacity : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{
          background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.3), transparent 50%)`,
        }}
      />
      
      {/* Border glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-xl"
        animate={{
          opacity: isHovered ? 1 : 0,
          boxShadow: isHovered 
            ? 'inset 0 0 20px rgba(99, 102, 241, 0.2), 0 0 30px rgba(99, 102, 241, 0.1)' 
            : 'none',
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Content */}
      <div className="relative z-0">{children}</div>
    </motion.div>
  );
};
