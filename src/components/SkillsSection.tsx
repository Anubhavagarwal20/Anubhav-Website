import { FadeIn } from './ui/FadeIn';
import { skillCategories } from '../data';

interface CategoryStyle {
  text: string;
  badgeBg: string;
  dot: string;
  border: string;
}

const categoryStyles: Record<string, CategoryStyle> = {
  'SEO & AI Search': {
    text: '#1E40AF',
    badgeBg: '#DBEAFE',
    dot: '#2563EB',
    border: '#BFDBFE',
  },
  'E-commerce': {
    text: '#6B21A8',
    badgeBg: '#F3E8FF',
    dot: '#7C3AED',
    border: '#DDD6FE',
  },
  'Marketing & Content': {
    text: '#0E7490',
    badgeBg: '#CFFAFE',
    dot: '#0891B2',
    border: '#A5F3FC',
  },
  'Web & Creative': {
    text: '#1E40AF',
    badgeBg: '#DBEAFE',
    dot: '#2563EB',
    border: '#BFDBFE',
  },
};

export function SkillsSection() {
  return (
    <section
      id="tools"
      className="py-20 md:py-28 bg-[#F5F7FA] border-y border-black/[0.06]"
      aria-labelledby="skills-heading"
    >
      <div className="container-padded">
        <div className="mb-12">
          <FadeIn>
            <p
              className="text-[11px] tracking-[0.18em] uppercase font-semibold mb-3"
              style={{ color: '#1D4ED8' }}
            >
              Skills & Capabilities
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h2
              id="skills-heading"
              className="font-display font-bold leading-tight"
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                color: '#111827',
              }}
            >
              Areas I Work In
            </h2>
          </FadeIn>
          <FadeIn delay={0.12}>
            <p className="text-[#4B5563] text-sm md:text-base mt-3 max-w-xl">
              A breakdown of hands-on proficiencies across organic search, AI discovery, marketplace commerce, and creative marketing.
            </p>
          </FadeIn>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, i) => {
            const style = categoryStyles[cat.category] ?? {
              text: '#1E40AF',
              badgeBg: '#DBEAFE',
              dot: '#2563EB',
              border: '#BFDBFE',
            };
            return (
              <FadeIn key={cat.category} delay={i * 0.08}>
                <div
                  className="p-6 rounded-2xl h-full flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    border: '1px solid rgba(0,0,0,0.08)',
                    backgroundColor: '#FFFFFF',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  }}
                >
                  <div
                    className="text-[11px] tracking-[0.12em] uppercase font-bold px-3 py-1 rounded-full w-fit border"
                    style={{
                      color: style.text,
                      backgroundColor: style.badgeBg,
                      borderColor: style.border,
                    }}
                  >
                    {cat.category}
                  </div>
                  <ul className="flex flex-col gap-2.5">
                    {cat.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-2.5 text-sm font-medium"
                        style={{ color: '#1F2937' }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: style.dot }}
                          aria-hidden="true"
                        />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
