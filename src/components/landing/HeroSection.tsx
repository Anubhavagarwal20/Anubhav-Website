import { FadeIn } from '../ui/FadeIn';
import { ContactButton } from '../ui/ContactButton';
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
    <section className="min-h-screen h-[100dvh] w-full flex flex-col justify-between relative overflow-x-clip bg-[#0C0C0C]">
      {/* ─── Navbar ─── */}
      <FadeIn delay={0} y={-20} className="w-full z-20">
        <header className="w-full px-6 md:px-10 pt-6 md:pt-8">
          <nav
            aria-label="Main Navigation"
            className="flex items-center justify-between w-full"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-lg lg:text-[1.35rem] transition-opacity duration-200 hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D7E2EA] rounded py-1 px-1 sm:px-2"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </header>
      </FadeIn>

      {/* ─── Hero Heading (Background) ─── */}
      <div className="w-full overflow-hidden flex justify-center items-center mt-6 sm:mt-4 md:-mt-5 select-none pointer-events-none z-0">
        <FadeIn delay={0.15} y={40} className="w-full text-center">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15.5vw] md:text-[16.5vw] lg:text-[18vw]">
            I&apos;M ANUBHAV
          </h1>
        </FadeIn>
      </div>

      {/* ─── Hero Portrait ─── */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <img
              src={heroAvatar}
              alt="Anubhav Agarwal — 3D Avatar Portrait"
              width={520}
              height={520}
              fetchPriority="high"
              className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] object-contain select-none pointer-events-none drop-shadow-2xl"
              draggable={false}
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* ─── Bottom Bar ─── */}
      <div className="w-full px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex justify-between items-end relative z-20">
        {/* Left: Paragraph text */}
        <FadeIn delay={0.35} y={20}>
          <div className="flex flex-col gap-1.5 max-w-[260px] sm:max-w-[360px] md:max-w-[440px] lg:max-w-[520px]">
            <p
              className="text-[#D7E2EA] font-medium uppercase tracking-wider leading-tight"
              style={{ fontSize: 'clamp(0.85rem, 1.3vw, 1.35rem)' }}
            >
              DIGITAL MARKETER &amp; MBA CANDIDATE
            </p>
            <p
              className="text-[#D7E2EA]/75 font-light uppercase tracking-wide leading-relaxed"
              style={{ fontSize: 'clamp(0.65rem, 0.9vw, 0.9rem)' }}
            >
              SEO • GEO • PERFORMANCE MARKETING • E-COMMERCE • WEB DESIGN &amp; DEVELOPMENT • CONTENT • SOCIAL MEDIA • PAID ADS • ANALYTICS
            </p>
          </div>
        </FadeIn>

        {/* Right: Contact button */}
        <FadeIn delay={0.5} y={20}>
          <ContactButton href="#contact" />
        </FadeIn>
      </div>
    </section>
  );
}
