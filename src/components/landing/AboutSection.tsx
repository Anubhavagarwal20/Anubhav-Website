import { FadeIn } from '../ui/FadeIn';
import { AnimatedText } from '../ui/AnimatedText';

export function AboutSection() {
  const aboutText =
    "I'm Anubhav Agarwal, a Digital Marketing professional and MBA candidate. My experience spans Search Engine Optimisation (SEO), Generative Engine Optimisation (GEO), Amazon and Shopify Operations, Meta Ads, Content Strategy, Social Media Marketing, and market research. I specialise in keyword research, search intent analysis, on-page optimisation, product listing management, campaign analytics, competitor research, and content planning. My approach combines practical execution with data-driven analysis to help businesses identify opportunities and strengthen their digital presence.";

  return (
    <section
      id="about"
      className="min-h-screen relative flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* ─── 4 Decorative 3D Images ─── */}
      {/* Top-Left: Moon icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none z-0" aria-hidden="true">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt=""
            width={210}
            height={210}
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto aspect-square object-contain drop-shadow-xl select-none"
          />
        </FadeIn>
      </div>

      {/* Bottom-Left: 3D object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none z-0" aria-hidden="true">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt=""
            width={180}
            height={180}
            className="w-[100px] sm:w-[140px] md:w-[180px] h-auto aspect-square object-contain drop-shadow-xl select-none"
          />
        </FadeIn>
      </div>

      {/* Top-Right: Lego icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none z-0" aria-hidden="true">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt=""
            width={210}
            height={256}
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto aspect-[210/256] object-contain drop-shadow-xl select-none"
          />
        </FadeIn>
      </div>

      {/* Bottom-Right: 3D group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none z-0" aria-hidden="true">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt=""
            width={220}
            height={220}
            className="w-[130px] sm:w-[170px] md:w-[220px] h-auto aspect-square object-contain drop-shadow-xl select-none"
          />
        </FadeIn>
      </div>

      {/* ─── Centered Content ─── */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl w-full text-center">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            id="about-heading"
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About Me
          </h2>
        </FadeIn>

        {/* Gap between heading & text */}
        <div className="h-10 sm:h-14 md:h-16" aria-hidden="true" />

        {/* Animated paragraph */}
        <AnimatedText
          text={aboutText}
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[680px]"
          style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.25rem)' }}
        />

        {/* Gap between text block and button */}
        <div className="h-14 sm:h-18 md:h-20" aria-hidden="true" />

        {/* CTA Link */}
        <FadeIn delay={0.25} y={20}>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3.5 sm:px-10 sm:py-4 text-xs sm:text-sm transition-all duration-200 hover:bg-[#D7E2EA] hover:text-[#0C0C0C] active:scale-[0.98]"
          >
            Let&apos;s Connect
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
