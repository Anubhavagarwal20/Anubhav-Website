import { HeroSection } from './components/landing/HeroSection';
import { MarqueeSection } from './components/landing/MarqueeSection';
import { AboutSection } from './components/landing/AboutSection';
import { ServicesSection } from './components/landing/ServicesSection';
import { ProjectsSection } from './components/landing/ProjectsSection';

function App() {
  return (
    <div
      className="bg-[#0C0C0C] text-[#D7E2EA] font-sans w-full min-h-screen selection:bg-[#D7E2EA] selection:text-[#0C0C0C]"
      style={{ overflowX: 'clip' }}
    >
      <main id="main-content">
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
      </main>
    </div>
  );
}

export default App;
