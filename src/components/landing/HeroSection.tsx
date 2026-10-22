import { FadeIn } from '../ui/FadeIn';
import { Magnet } from '../ui/Magnet';
import heroAvatar from '../../assets/avatar.png';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function HeroSection() {
  return (
    <section
      className="min-h-screen w-full flex flex-col justify-between relative overflow-x-clip bg-[#0C0C0C]"
      aria-labelledby="hero-title"
    >
      {/* ─── Navbar ─── */}
      <FadeIn delay={0} y={-20} className="w-full z-30">
        <header className="w-full px-6 md:px-10 pt-6 md:pt-8">
          <nav
            aria-label="Main Navigation"
            className="flex items-center justify-between w-full"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-lg lg:text-[1.35rem] transition-opacity duration-200 hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D7E2EA] rounded"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </header>
      </FadeIn>

      {/* ─── Hero Heading & Eyebrow ─── */}
      <div className="w-full px-6 md:px-10 mt-6 sm:mt-8 md:mt-4 text-center z-10 select-none">
        <FadeIn delay={0.1} y={20}>
          <p className="text-xs sm:text-sm font-light uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#D7E2EA]/70 mb-3 sm:mb-4">
            SEO • GEO • E-commerce • Performance Marketing
          </p>
        </FadeIn>
        <FadeIn delay={0.15} y={30}>
          <h1
            id="hero-title"
            className="hero-heading font-black uppercase tracking-tight leading-[0.95] max-w-5xl mx-auto text-[8.5vw] sm:text-[6.5vw] md:text-[5vw] lg:text-[3.9rem] xl:text-[4.5rem]"
          >
            Digital Marketing Specialist in SEO, GEO &amp; E-commerce
          </h1>
        </FadeIn>
      </div>

      {/* ─── Hero Portrait ─── */}
      <div className="relative sm:absolute sm:left-1/2 sm:-translate-x-1/2 z-10 my-4 sm:my-0 sm:bottom-0 pointer-events-auto flex justify-center">
        <FadeIn delay={0.5} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <img
              src={heroAvatar}
              alt="Anubhav Agarwal — 3D Avatar Portrait"
              className="w-[240px] sm:w-[320px] md:w-[380px] lg:w-[440px] object-contain select-none pointer-events-none drop-shadow-2xl opacity-90 sm:opacity-100"
              draggable={false}
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* ─── Bottom Bar ─── */}
      <div className="w-full px-6 md:px-10 pb-8 sm:pb-10 md:pb-12 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 relative z-20">
        {/* Left: Supporting Copy */}
        <FadeIn delay={0.35} y={20}>
          <div className="max-w-[320px] sm:max-w-[380px] md:max-w-[440px] flex flex-col gap-2">
            <p className="text-[#D7E2EA] font-light text-xs sm:text-sm leading-relaxed">
              I help businesses improve online discoverability, strengthen product visibility, and make data-informed marketing decisions through SEO, AI search optimization, e-commerce operations, content strategy, and performance marketing.
            </p>
            <p className="text-[#D7E2EA]/75 font-light text-xs sm:text-sm leading-relaxed hidden sm:block">
              I&apos;m Anubhav Agarwal, an MBA candidate with hands-on experience across digital marketing and e-commerce projects.
            </p>
          </div>
        </FadeIn>

        {/* Right: CTAs */}
        <FadeIn delay={0.5} y={20}>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-[#D7E2EA] text-[#0C0C0C] font-semibold uppercase tracking-wider px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm transition-all duration-200 hover:bg-white hover:scale-[1.02] active:scale-[0.98] text-center"
            >
              Explore My Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-wider px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm transition-all duration-200 hover:bg-[#D7E2EA]/10 active:scale-[0.98] text-center"
            >
              Let&apos;s Connect
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
