import { useState } from 'react';
import { Menu, X } from 'lucide-react';
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen h-[100dvh] w-full flex flex-col justify-between relative overflow-x-clip bg-[#0C0C0C]">
      {/* ─── Navbar ─── */}
      <FadeIn delay={0} y={-20} className="w-full z-40">
        <header className="w-full px-5 sm:px-8 md:px-10 pt-5 sm:pt-6 md:pt-8">
          <nav
            aria-label="Main Navigation"
            className="flex items-center justify-between w-full"
          >
            {/* Mobile Brand Mark */}
            <a
              href="#"
              className="sm:hidden font-black text-sm tracking-wider uppercase text-[#D7E2EA] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D7E2EA] rounded px-1"
            >
              ANUBHAV
            </a>

            {/* Desktop / Laptop Navigation Links */}
            <div className="hidden sm:flex items-center justify-between w-full">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-base lg:text-lg transition-opacity duration-200 hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D7E2EA] rounded py-1 px-1 sm:px-2"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              className="sm:hidden p-2 rounded-xl bg-white/[0.06] border border-white/10 text-[#D7E2EA] active:scale-95 transition-transform cursor-pointer"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>
        </header>

        {/* Mobile Navigation Drawer / Dropdown */}
        {mobileMenuOpen && (
          <div
            className="sm:hidden fixed inset-x-0 top-[70px] mx-4 p-5 rounded-3xl bg-[#121212]/95 backdrop-blur-2xl border border-white/15 shadow-2xl flex flex-col gap-3 z-50 animate-in fade-in slide-in-from-top-4 duration-200"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm py-3 px-4 rounded-xl hover:bg-white/[0.08] active:bg-white/[0.12] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-2 border-t border-white/10">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="w-full flex items-center justify-center py-3 rounded-full bg-[#D7E2EA] text-[#0C0C0C] font-semibold uppercase tracking-wider text-xs active:scale-[0.98] transition-transform"
              >
                Let&apos;s Connect
              </a>
            </div>
          </div>
        )}
      </FadeIn>

      {/* ─── Hero Heading (Background) ─── */}
      <div className="w-full overflow-hidden flex justify-center items-center mt-1 sm:mt-0 md:-mt-3 select-none pointer-events-none z-0 px-2">
        <FadeIn delay={0.15} y={40} className="w-full text-center">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-[0.86] text-center flex flex-col items-center select-none">
            <span className="block text-[12vw] sm:text-[13vw] md:text-[14vw] lg:text-[15vw]">
              HI, I&apos;M
            </span>
            <span className="block text-[14vw] sm:text-[15.5vw] md:text-[17vw] lg:text-[18.5vw] tracking-tighter">
              ANUBHAV
            </span>
          </h1>
        </FadeIn>
      </div>

      {/* ─── Hero Portrait ─── */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 top-[50%] -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto flex justify-center items-end">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={120}
            strength={2.5}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <img
              src={heroAvatar}
              alt="Anubhav Agarwal — 3D Avatar Portrait"
              width={520}
              height={520}
              fetchPriority="high"
              className="w-[210px] sm:w-[320px] md:w-[400px] lg:w-[460px] xl:w-[520px] max-h-[44vh] sm:max-h-[52vh] md:max-h-[60vh] lg:max-h-[68vh] object-contain select-none pointer-events-none drop-shadow-2xl"
              draggable={false}
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* ─── Bottom Bar ─── */}
      <div className="w-full px-5 sm:px-8 md:px-10 pb-6 sm:pb-8 md:pb-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-6 relative z-20">
        {/* Left: Paragraph text */}
        <FadeIn delay={0.35} y={20}>
          <div className="flex flex-col gap-1 max-w-[280px] sm:max-w-[360px] md:max-w-[440px] lg:max-w-[520px]">
            <p
              className="text-[#D7E2EA] font-semibold uppercase tracking-wider leading-tight text-xs sm:text-sm md:text-base lg:text-lg"
            >
              DIGITAL MARKETER &amp; MBA CANDIDATE
            </p>
            <p
              className="text-[#D7E2EA]/75 font-light uppercase tracking-wide leading-relaxed text-[10px] sm:text-xs md:text-sm"
            >
              SEO • GEO • PERFORMANCE MARKETING • E-COMMERCE • WEB DESIGN &amp; DEVELOPMENT • CONTENT • SOCIAL MEDIA • PAID ADS • ANALYTICS
            </p>
          </div>
        </FadeIn>

        {/* Right: Contact button */}
        <FadeIn delay={0.5} y={20} className="self-end sm:self-auto">
          <ContactButton href="#contact" />
        </FadeIn>
      </div>
    </section>
  );
}
