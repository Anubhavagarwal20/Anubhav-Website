import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  once?: boolean;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  x = 0,
  y = 24,
  className = '',
  once = true,
}: FadeInProps) {
  const shouldReduce = useReducedMotion();
  const easing = [0.22, 1, 0.36, 1] as [number, number, number, number];

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: shouldReduce ? 0 : x,
      y: shouldReduce ? 0 : y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: shouldReduce ? 0 : duration,
        delay: shouldReduce ? 0 : delay,
        ease: easing,
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
