import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Detect touch / coarse pointer
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }
    setIsTouchDevice(false);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check targets for hover interactions
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest('a, button, [role="button"], input, textarea, select, [data-cursor]');
      if (interactiveEl) {
        setIsHovered(true);
        const customText = interactiveEl.getAttribute('data-cursor');
        setCursorText(customText || null);
      } else {
        setIsHovered(false);
        setCursorText(null);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Central crisp dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#D7E2EA] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isHovered ? (cursorText ? 0 : 0.5) : 1,
          opacity: isHovered && cursorText ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Outer fluid trailing aura */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center font-mono text-[9px] uppercase tracking-wider font-bold text-[#0C0C0C]"
        style={{
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          width: cursorText ? 68 : isHovered ? 48 : 28,
          height: cursorText ? 68 : isHovered ? 48 : 28,
          backgroundColor: cursorText
            ? 'rgba(215, 226, 234, 0.95)'
            : isHovered
            ? 'rgba(215, 226, 234, 0.15)'
            : 'rgba(215, 226, 234, 0.05)',
          borderColor: isHovered ? 'rgba(215, 226, 234, 0.8)' : 'rgba(215, 226, 234, 0.3)',
          borderWidth: cursorText ? '0px' : '1px',
          backdropFilter: isHovered ? 'blur(4px)' : 'none',
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="select-none text-center leading-none"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
