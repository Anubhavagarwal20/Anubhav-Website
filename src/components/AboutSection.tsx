import { motion, useReducedMotion } from 'framer-motion';
import { FadeIn } from './ui/FadeIn';
import { Search, BarChart2, ShoppingBag, Cpu } from 'lucide-react';

const aboutParagraphs = [
  `I'm Anubhav Agarwal, a digital marketing professional interested in the intersection of search, content, e-commerce, and AI. My work spans SEO, Generative Engine Optimization, performance marketing, content strategy, and website development.`,
  `From optimizing product listings on Amazon and Shopify to building SEO and AI-search content strategies, I enjoy working across both the strategic and execution sides of digital marketing.`,
  `I believe strong marketing starts with understanding how people discover information, what influences their decisions, and how brands can earn attention in an increasingly competitive digital environment.`,
];

const pillars = [
  { Icon: Search, label: 'Search & SEO', color: '#4F8CFF' },
  { Icon: Cpu, label: 'AI & GEO', color: '#4DE2FF' },
  { Icon: ShoppingBag, label: 'E-commerce', color: '#9B7BFF' },
  { Icon: BarChart2, label: 'Performance', color: '#4F8CFF' },
];

function AbstractVisual() {
  const shouldReduce = useReducedMotion();
  const easing = [0.22, 1, 0.36, 1] as [number, number, number, number];
  return (
    <div className="relative w-full aspect-square max-w-[380px] mx-auto" aria-hidden="true">
      {/* Background gradient */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#0D1220] to-[#080B12] border border-white/[0.08]" />
      
      {/* Grid lines */}
      <div className="absolute inset-4 grid grid-cols-4 grid-rows-4">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="border border-white/[0.04]" />
        ))}
      </div>

      {/* Animated bars representing digital growth */}
      <div className="absolute bottom-8 left-8 right-8 flex items-end gap-2 h-28">
        {[40, 55, 45, 70, 60, 80, 65, 90, 75, 95].map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-t"
            style={{
              background: `linear-gradient(to top, #4F8CFF${i % 2 === 0 ? 'CC' : '80'}, #4DE2FF40)`,
            }}
            initial={shouldReduce ? { height: `${h}%` } : { height: '0%' }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 * i, ease: easing }}
          />
        ))}
      </div>

      {/* Floating pillars */}
      <div className="absolute top-6 left-6 right-6 flex flex-wrap gap-2">
        {pillars.map(({ Icon, label, color }, idx) => (
          <motion.div
            key={label}
            animate={shouldReduce ? {} : { y: [0, -4, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: idx * 0.6 }}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-[11px] font-medium"
            style={{
              borderColor: `${color}25`,
              color,
              backgroundColor: `${color}10`,
            }}
          >
            <Icon size={11} />
            {label}
          </motion.div>
        ))}
      </div>

      {/* Central stat */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <p className="font-display font-bold text-3xl gradient-blue">~3 yrs</p>
          <p className="text-[11px] text-[#A7B1C2] mt-1 tracking-wide uppercase">Freelance Experience</p>
        </div>
      </div>
    </div>
  );
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-[#080B12]"
      aria-labelledby="about-heading"
    >
      <div className="container-padded">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Left: Text */}
          <div className="flex flex-col gap-8">
            <FadeIn>
              <p className="section-label">A Little About Me</p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2
                id="about-heading"
                className="font-display font-bold leading-tight"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
              >
                <span className="gradient-text">Marketing Meets</span>
                <br />
                <span className="gradient-text">Search Intelligence</span>
              </h2>
            </FadeIn>

            <div className="flex flex-col gap-5">
              {aboutParagraphs.map((para, i) => (
                <FadeIn key={i} delay={0.15 + i * 0.08}>
                  <p className="text-[#A7B1C2] leading-relaxed text-[15px] md:text-base">
                    {para}
                  </p>
                </FadeIn>
              ))}
            </div>

            {/* Education */}
            <FadeIn delay={0.4}>
              <div className="mt-2 p-5 rounded-2xl border border-white/[0.08] bg-white/[0.02]">
                <p className="text-[11px] tracking-[0.14em] uppercase text-[#4F8CFF] font-medium mb-3">Education</p>
                <ul className="flex flex-col gap-3">
                  <li>
                    <p className="text-sm font-medium text-[#F4F7FB]">MBA Candidate — Expected 2027</p>
                    <p className="text-xs text-[#A7B1C2] mt-0.5">Maharaja Agrasen Institute of Technology (MAIT), Rohini, Delhi</p>
                  </li>
                  <li className="border-t border-white/[0.06] pt-3">
                    <p className="text-sm font-medium text-[#F4F7FB]">BBA in Digital Marketing — 2024</p>
                    <p className="text-xs text-[#A7B1C2] mt-0.5">Chandigarh University</p>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>

          {/* Right: Visual */}
          <FadeIn delay={0.2} x={30} y={0}>
            <AbstractVisual />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
