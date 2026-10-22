import { FadeIn } from '../ui/FadeIn';
import { ContactButton } from '../ui/ContactButton';
import { AnimatedText } from '../ui/AnimatedText';

export function AboutSection() {
  const aboutText =
    "Digital marketer and MBA candidate with hands-on experience across SEO, Generative Engine Optimization (GEO), e-commerce (Amazon and Shopify), paid social, and performance marketing. Skilled in keyword research, listing and on-page optimization, content planning, lead generation, and campaign analytics using GA4 and Meta Ads. Delivered a 2X ROI on freelance performance marketing campaigns and identified 1,000+ leads during sales and marketing operations. Let's build something incredible together!";

  return (
    <section
      id="about"
      className="min-h-screen relative flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
      aria-label="About Anubhav Agarwal"
    >
      {/* ─── 4 Decorative 3D Images ─── */}
      {/* Top-Left: Moon icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none z-0">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="Decorative Moon 3D"
            loading="lazy"
            className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-xl select-none"
          />
        </FadeIn>
      </div>

      {/* Bottom-Left: 3D object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none z-0">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="Decorative 3D Object"
            loading="lazy"
            className="w-[100px] sm:w-[140px] md:w-[180px] object-contain drop-shadow-xl select-none"
          />
        </FadeIn>
      </div>

      {/* Top-Right: Lego icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none z-0">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="Decorative Lego 3D"
            loading="lazy"
            className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-xl select-none"
          />
        </FadeIn>
      </div>

      {/* Bottom-Right: 3D group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none z-0">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="Decorative 3D Group"
            loading="lazy"
            className="w-[130px] sm:w-[170px] md:w-[220px] object-contain drop-shadow-xl select-none"
          />
        </FadeIn>
      </div>

      {/* ─── Centered Content ─── */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl w-full text-center">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Gap between heading & text */}
        <div className="h-10 sm:h-14 md:h-16" aria-hidden="true" />

        {/* Animated paragraph */}
        <AnimatedText
          text={aboutText}
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[620px]"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        />

        {/* Stat Cards from Resume */}
        <FadeIn delay={0.15} y={20} className="w-full mt-10 sm:mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto w-full">
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/[0.1] backdrop-blur-sm text-center">
              <span className="font-black text-2xl sm:text-3xl lg:text-4xl text-[#D7E2EA] block">
                2X ROI
              </span>
              <span className="text-xs uppercase tracking-wider text-[#D7E2EA]/70 mt-1 block font-light">
                Performance Campaigns
              </span>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/[0.1] backdrop-blur-sm text-center">
              <span className="font-black text-2xl sm:text-3xl lg:text-4xl text-[#D7E2EA] block">
                1,000+
              </span>
              <span className="text-xs uppercase tracking-wider text-[#D7E2EA]/70 mt-1 block font-light">
                Leads Generated
              </span>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/[0.1] backdrop-blur-sm text-center">
              <span className="font-black text-2xl sm:text-3xl lg:text-4xl text-[#D7E2EA] block">
                MBA &apos;27
              </span>
              <span className="text-xs uppercase tracking-wider text-[#D7E2EA]/70 mt-1 block font-light">
                MAIT Rohini, Delhi
              </span>
            </div>
          </div>
        </FadeIn>

        {/* Gap between stats and button */}
        <div className="h-12 sm:h-16 md:h-20" aria-hidden="true" />

        {/* Contact button */}
        <FadeIn delay={0.25} y={20}>
          <ContactButton href="#contact" />
        </FadeIn>
      </div>
    </section>
  );
}
