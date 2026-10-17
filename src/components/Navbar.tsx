import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data';

// ─── Active section tracker via IntersectionObserver ─────────────────────────
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState('');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.querySelector(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.25, rootMargin: '-80px 0px -30% 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);

  return active;
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const shouldReduce = useReducedMotion();
  const sectionIds = navLinks.map((l) => l.href);
  const activeSection = useActiveSection(sectionIds);

  const easing = [0.22, 1, 0.36, 1] as [number, number, number, number];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: shouldReduce ? 'auto' : 'smooth' });
  };

  return (
    <motion.header
      initial={shouldReduce ? false : { y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: easing }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#080B12]/90 backdrop-blur-md border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="container-padded">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: shouldReduce ? 'auto' : 'smooth' });
            }}
            className="font-display font-bold text-sm tracking-[0.12em] text-[#F4F7FB] uppercase hover:text-[#4F8CFF] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4F8CFF] rounded"
          >
            Anubhav Agarwal
          </a>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="relative text-xs tracking-[0.14em] uppercase font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4F8CFF] rounded py-1"
                  style={{ color: isActive ? '#F4F7FB' : '#A7B1C2' }}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {link.label}
                  {/* Active dot */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-dot"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#4F8CFF]"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-[#A7B1C2] hover:text-[#F4F7FB] transition-colors p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4F8CFF] rounded"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            id="mobile-nav"
            initial={shouldReduce ? { opacity: 1 } : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden bg-[#0D1220]/97 backdrop-blur-md border-b border-white/[0.08]"
          >
            <nav
              aria-label="Mobile navigation"
              className="container-padded py-6 flex flex-col gap-1"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="flex items-center gap-3 text-sm tracking-[0.12em] uppercase font-medium transition-colors text-left py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4F8CFF] rounded"
                    style={{ color: isActive ? '#F4F7FB' : '#A7B1C2' }}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4F8CFF] flex-shrink-0" />
                    )}
                    {link.label}
                  </button>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
