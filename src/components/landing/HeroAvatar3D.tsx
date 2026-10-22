import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import heroAvatar from '../../assets/avatar.png';

export function HeroAvatar3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse coordinate values normalized between -1 and 1
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for smooth weight & organic movement
  const springConfig = { damping: 20, stiffness: 180, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3D rotation transforms
  const rotateY = useTransform(smoothX, [-1, 1], [-16, 16]); // look left/right
  const rotateX = useTransform(smoothY, [-1, 1], [14, -14]); // look up/down
  const translateX = useTransform(smoothX, [-1, 1], [-18, 18]);
  const translateY = useTransform(smoothY, [-1, 1], [-12, 12]);

  // Shadow shift in opposite direction
  const shadowX = useTransform(smoothX, [-1, 1], [25, -25]);
  const shadowY = useTransform(smoothY, [-1, 1], [25, -25]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize relative to screen center
      const { innerWidth, innerHeight } = window;
      const normX = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const normY = (e.clientY - innerHeight / 2) / (innerHeight / 2);
      mouseX.set(Math.max(-1, Math.min(1, normX)));
      mouseY.set(Math.max(-1, Math.min(1, normY)));
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center select-none"
      style={{ perspective: 1000 }}
    >
      {/* Dynamic ambient back-glow */}
      <motion.div
        className="absolute -inset-10 rounded-full bg-gradient-to-tr from-[#4F8CFF]/15 via-[#4DE2FF]/10 to-[#FF9E4F]/15 blur-3xl pointer-events-none"
        style={{
          x: shadowX,
          y: shadowY,
        }}
        aria-hidden="true"
      />

      {/* Floating Levitation Wrapper (idle breathing) */}
      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 4.8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          rotateX,
          rotateY,
          x: translateX,
          y: translateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative will-change-transform cursor-pointer"
        data-cursor="HELLO 👋"
      >
        {/* Avatar Image */}
        <motion.img
          src={heroAvatar}
          alt="Anubhav Agarwal — 3D Avatar Portrait"
          width={520}
          height={520}
          fetchPriority="high"
          draggable={false}
          className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] object-contain select-none pointer-events-none drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)]"
        />

        {/* Shimmer light-glint across glasses/face on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-full overflow-hidden opacity-0 hover:opacity-100 transition-opacity duration-300"
          aria-hidden="true"
        >
          <motion.div
            className="w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatDelay: 4,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
