import { HeroSection } from './components/landing/HeroSection';
import { MarqueeSection } from './components/landing/MarqueeSection';
import { AboutSection } from './components/landing/AboutSection';
import { ServicesSection } from './components/landing/ServicesSection';
import { ProjectsSection } from './components/landing/ProjectsSection';
import { ExperienceSection } from './components/landing/ExperienceSection';
import { ContactSection } from './components/landing/ContactSection';
import { CustomCursor } from './components/ui/CustomCursor';

function App() {
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
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
