import { useEffect } from 'react';
import Lenis from 'lenis';
import { HeroSection } from './components/landing/HeroSection';
import { MarqueeSection } from './components/landing/MarqueeSection';
import { AboutSection } from './components/landing/AboutSection';
import { ServicesSection } from './components/landing/ServicesSection';
import { MarketingInteractiveLab } from './components/landing/MarketingInteractiveLab';
import { ProjectsSection } from './components/landing/ProjectsSection';
import { ExperienceSection } from './components/landing/ExperienceSection';
import { ContactSection } from './components/landing/ContactSection';
import { CustomCursor } from './components/ui/CustomCursor';

function App() {
  useEffect(() => {
    // Initialize Lenis smooth inertia scrolling
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Smooth anchor navigation
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href !== '#' && href.startsWith('#')) {
          const el = document.querySelector(href);
          if (el) {
            e.preventDefault();
            lenis.scrollTo(el, { offset: -20, duration: 1.2 });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return (
    <div
      className="bg-[#0C0C0C] text-[#D7E2EA] font-sans w-full min-h-screen selection:bg-[#D7E2EA] selection:text-[#0C0C0C]"
      style={{ overflowX: 'clip' }}
    >
      <CustomCursor />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-5 focus:py-2.5 focus:bg-[#D7E2EA] focus:text-[#0C0C0C] focus:font-medium focus:rounded-full focus:shadow-xl focus:outline-none"
      >
        Skip to main content
      </a>
      <main id="main-content">
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <MarketingInteractiveLab />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
