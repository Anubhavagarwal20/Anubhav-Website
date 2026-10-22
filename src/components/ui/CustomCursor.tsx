import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [isPointerFine, setIsPointerFine] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState<string | null>(null);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for outer trailing ring
  const springConfig = { damping: 24, stiffness: 260, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device supports hover / fine pointer (mouse/trackpad, not touch)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsPointerFine(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsPointerFine(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    if (!mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Check if hovering interactive element
      const interactiveEl = target.closest(
        'a, button, [role="button"], input, textarea, select, label, [data-cursor]'
      );

      if (interactiveEl) {
        setIsHovered(true);
        const customText = interactiveEl.getAttribute('data-cursor-text');
        setCursorText(customText || null);
      } else {
        setIsHovered(false);
        setCursorText(null);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isPointerFine) return null;

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[99999] transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* ─── Outer Trailing Smooth Ring ─── */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicked ? 0.8 : isHovered ? 1.75 : 1,
          width: isHovered ? 48 : 36,
          height: isHovered ? 48 : 36,
          borderWidth: isHovered ? '1.5px' : '1px',
        }}
        transition={{
          scale: { type: 'spring', damping: 20, stiffness: 300 },
          width: { duration: 0.2 },
          height: { duration: 0.2 },
        }}
        className="fixed top-0 left-0 rounded-full border border-white/60 bg-white/[0.04] backdrop-blur-[1px] mix-blend-difference flex items-center justify-center pointer-events-none"
      >
        {cursorText && (
          <span className="text-[9px] font-bold tracking-widest uppercase text-white select-none">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* ─── Inner Precision Dot ─── */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicked ? 0.6 : isHovered ? 0.4 : 1,
          opacity: isHovered ? 0.5 : 1,
        }}
        transition={{ duration: 0.15 }}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white mix-blend-difference pointer-events-none"
      />
    </div>
  );
}
