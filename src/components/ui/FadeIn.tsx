import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  as?: keyof typeof motion;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className = '',
}: FadeInProps) {
  const shouldReduce = useReducedMotion();
  const easing = [0.25, 0.1, 0.25, 1] as [number, number, number, number];

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: shouldReduce ? 0 : x,
        y: shouldReduce ? 0 : y,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{
        duration: shouldReduce ? 0 : duration,
        delay: shouldReduce ? 0 : delay,
        ease: easing,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
