import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { PrimaryButton, SecondaryButton } from './ui/Buttons';

// ─── Abstract search / AI visual ─────────────────────────────────────────────
function HeroVisual() {
  const shouldReduce = useReducedMotion();

  return (
    <div className="relative w-full max-w-[420px] mx-auto aspect-square" aria-hidden="true">
      {/* Outer ring */}
      <motion.div
        className="absolute inset-0 rounded-full border border-[#4F8CFF]/20"
        animate={shouldReduce ? {} : { rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      />
      {/* Middle ring */}
      <motion.div
        className="absolute inset-[12%] rounded-full border border-[#4DE2FF]/15"
        animate={shouldReduce ? {} : { rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />
      {/* Inner ring */}
      <motion.div
        className="absolute inset-[24%] rounded-full border border-[#9B7BFF]/20"
        animate={shouldReduce ? {} : { rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      {/* Core glow */}
      <div className="absolute inset-[36%] rounded-full bg-gradient-to-br from-[#4F8CFF]/20 via-[#4DE2FF]/10 to-[#9B7BFF]/20 blur-xl" />
      <div className="absolute inset-[40%] rounded-full bg-gradient-to-br from-[#4F8CFF]/30 to-[#4DE2FF]/20" />

      {/* Orbiting dots */}
      {[0, 60, 120, 180, 240, 300].map((deg, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full"
          style={{
            backgroundColor: i % 2 === 0 ? '#4F8CFF' : '#4DE2FF',
            transform: `rotate(${deg}deg) translateX(${i % 3 === 0 ? 155 : i % 3 === 1 ? 120 : 85}px) translateY(-50%)`,
          }}
          animate={shouldReduce ? {} : { opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2 + i * 0.4, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}

      {/* Floating label chips */}
      <FloatingChip
        label="SEO"
        x="-left-4"
        y="top-[20%]"
        delay={0}
        color="#4F8CFF"
        shouldReduce={shouldReduce ?? false}
      />
      <FloatingChip
        label="GEO"
        x="-right-2"
        y="top-[30%]"
        delay={0.5}
        color="#4DE2FF"
        shouldReduce={shouldReduce ?? false}
      />
      <FloatingChip
        label="E-Commerce"
        x="-left-6"
        y="bottom-[25%]"
        delay={1}
        color="#9B7BFF"
        shouldReduce={shouldReduce ?? false}
      />
      <FloatingChip
        label="AI Search"
        x="-right-4"
        y="bottom-[18%]"
        delay={0.7}
        color="#4F8CFF"
        shouldReduce={shouldReduce ?? false}
      />

      {/* Conceptual label */}
      <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-widest uppercase text-[#A7B1C2]/50 whitespace-nowrap">
        Digital Presence Visualized
      </p>
    </div>
  );
}

interface FloatingChipProps {
  label: string;
  x: string;
  y: string;
  delay: number;
  color: string;
  shouldReduce: boolean;
}

function FloatingChip({ label, x, y, delay, color, shouldReduce }: FloatingChipProps) {
  return (
    <motion.div
      className={`absolute ${x} ${y} px-2.5 py-1 rounded-full text-[10px] font-medium tracking-wide border`}
      style={{
        borderColor: `${color}30`,
        color,
        backgroundColor: `${color}10`,
        backdropFilter: 'blur(8px)',
      }}
      animate={shouldReduce ? {} : { y: [0, -6, 0] }}
      transition={{ duration: 3, repeat: Infinity, delay, ease: 'easeInOut' }}
    >
      {label}
    </motion.div>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
export function HeroSection() {
  const shouldReduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: shouldReduce ? 0 : 0.12 },
    },
  };

  const easing = [0.22, 1, 0.36, 1] as [number, number, number, number];

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduce ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduce ? 0 : 0.7, ease: easing },
    },
  };

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: shouldReduce ? 'auto' : 'smooth' });
  };

  return (
    <>
      {/* Scroll progress bar — fixed at top of page */}
      {!shouldReduce && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left"
          style={{
            scaleX,
            background: 'linear-gradient(90deg, #4F8CFF 0%, #4DE2FF 50%, #9B7BFF 100%)',
          }}
          aria-hidden="true"
        />
      )}

    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center pt-20 pb-16 overflow-hidden"
      aria-label="Introduction"
    >
      {/* Background radial glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none opacity-30"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(circle at 70% 30%, rgba(79,140,255,0.18) 0%, transparent 60%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none opacity-20"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(circle at 30% 70%, rgba(155,123,255,0.18) 0%, transparent 60%)',
        }}
      />

      <div className="container-padded w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 lg:gap-8"
          >
            {/* Eyebrow */}
            <motion.p
              variants={itemVariants}
              className="section-label"
            >
              Digital Marketing • SEO • AI Search
            </motion.p>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-bold leading-[0.95] tracking-tight"
              style={{
                fontSize: 'clamp(3rem, 9vw, 7.5rem)',
              }}
            >
              <span className="gradient-text block">I MAKE</span>
              <span className="gradient-text block">BRANDS</span>
              <span
                className="block"
                style={{
                  background: 'linear-gradient(135deg, #4F8CFF 0%, #4DE2FF 60%, #9B7BFF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                MORE
              </span>
              <span className="gradient-text block">VISIBLE</span>
            </motion.h1>

            {/* Supporting statement */}
            <motion.p
              variants={itemVariants}
              className="text-[#A7B1C2] text-base md:text-lg leading-relaxed max-w-lg"
            >
              I combine SEO, AI search visibility, e-commerce optimization, and creative
              marketing to help brands strengthen their digital presence.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 pt-2"
            >
              <PrimaryButton
                onClick={() => handleScroll('#projects')}
                showArrow
              >
                Explore My Work
              </PrimaryButton>
              <SecondaryButton
                onClick={() => handleScroll('#contact')}
              >
                Let's Connect
              </SecondaryButton>
            </motion.div>

            {/* Stat pills */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 pt-2"
            >
              {[
                { label: '~3 Years', sub: 'Freelance Experience' },
                { label: 'MBA', sub: 'Candidate 2027' },
                { label: 'SEO + GEO', sub: 'Specialization' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.03]"
                >
                  <p className="text-sm font-semibold font-display text-[#F4F7FB]">{stat.label}</p>
                  <p className="text-[11px] text-[#A7B1C2] mt-0.5">{stat.sub}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={shouldReduce ? false : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex items-center justify-center py-8"
          >
            {/* Photo placeholder — replace with real portrait when available */}
            <div className="relative">
              <HeroVisual />
              <p className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-[#A7B1C2]/40 tracking-widest uppercase whitespace-nowrap">
                [Portrait — Add Photo Here]
              </p>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={shouldReduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
          aria-hidden="true"
        >
          <motion.div
            animate={shouldReduce ? {} : { y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={18} className="text-[#A7B1C2]/40" />
          </motion.div>
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#A7B1C2]/40">Scroll</span>
        </motion.div>
      </div>
    </section>
    </>
  );
}
