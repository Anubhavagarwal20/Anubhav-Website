import { useRef, useState, type ReactNode } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
  borderColor?: string;
}

export function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(215, 226, 234, 0.08)',
  borderColor = 'rgba(215, 226, 234, 0.25)',
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }

  const backgroundGradient = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, ${spotlightColor}, transparent 80%)`;
  const borderGradient = useMotionTemplate`radial-gradient(280px circle at ${mouseX}px ${mouseY}px, ${borderColor}, transparent 70%)`;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md overflow-hidden transition-all duration-300 ${className}`}
    >
      {/* Animated illuminated border highlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300"
        style={{
          background: borderGradient,
          opacity: isHovered ? 1 : 0,
        }}
        aria-hidden="true"
      />

      {/* Animated illuminated surface spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
        style={{
          background: backgroundGradient,
          opacity: isHovered ? 1 : 0,
        }}
        aria-hidden="true"
      />

      {/* Content wrapper */}
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}
