import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ExpertiseMarquee } from './components/ExpertiseMarquee';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      {/* Skip to main content — keyboard accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded focus:bg-[#4F8CFF] focus:text-[#080B12] focus:font-medium focus:text-sm"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <HeroSection />
        <ExpertiseMarquee />
        <AboutSection />
        <ServicesSection />
        <SkillsSection />
        <ExperienceTimeline />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}

export default App;
