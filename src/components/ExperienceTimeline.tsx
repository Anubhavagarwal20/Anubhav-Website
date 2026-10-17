import { motion, useReducedMotion } from 'framer-motion';
import { FadeIn } from './ui/FadeIn';
import { experiences } from '../data';

function ExperienceCard({ entry, index }: { entry: typeof experiences[0]; index: number }) {
  const shouldReduce = useReducedMotion();
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={shouldReduce ? false : { opacity: 0, x: isEven ? -24 : 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
      className="relative pl-12 md:pl-16"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 flex flex-col items-center">
        <div
          className="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0"
          style={{
            borderColor: '#4F8CFF',
            backgroundColor: '#080B12',
          }}
        >
          <div className="w-2 h-2 rounded-full bg-[#4F8CFF]" />
        </div>
      </div>

      {/* Card */}
      <div className="group pb-12 last:pb-0">
        <div className="p-5 md:p-7 rounded-2xl border border-white/[0.08] bg-[#0D1220]/60 hover:border-[#4F8CFF]/25 hover:bg-[#0D1220] transition-all duration-300">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
            <div>
              <span className="text-[10px] tracking-[0.16em] uppercase text-[#4F8CFF] font-medium font-display">
                {entry.number}
              </span>
              <h3 className="font-display font-bold text-lg md:text-xl text-[#F4F7FB] mt-1">
                {entry.organization}
              </h3>
              <p className="text-sm text-[#A7B1C2] mt-0.5">{entry.role}</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="px-3 py-1 text-[11px] font-medium rounded-full border border-white/[0.1] text-[#A7B1C2]">
                {entry.type}
              </span>
              {entry.period && (
                <span className="text-[11px] text-[#A7B1C2]/60">{entry.period}</span>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-[#A7B1C2] text-sm leading-relaxed mb-4">
            {entry.description}
          </p>

          {/* Tags */}
          <ul className="flex flex-wrap gap-2" aria-label="Skills used">
            {entry.tags.map((tag) => (
              <li
                key={tag}
                className="px-2.5 py-1 text-[11px] font-medium rounded-full border border-white/[0.08] text-[#A7B1C2] bg-white/[0.03]"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 bg-[#080B12]"
      aria-labelledby="experience-heading"
    >
      <div className="container-padded">
        {/* Header */}
        <div className="mb-16">
          <FadeIn>
            <p className="section-label mb-4">Professional History</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              id="experience-heading"
              className="font-display font-bold leading-tight"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              <span className="gradient-text">Where I've Worked</span>
              <br />
              <span className="gradient-text">& What I've Done</span>
            </h2>
          </FadeIn>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl">
          {/* Vertical line */}
          <div
            className="absolute left-[9px] top-2 bottom-12 w-[1px]"
            style={{ background: 'linear-gradient(to bottom, #4F8CFF40, transparent)' }}
            aria-hidden="true"
          />

          {/* Entries */}
          <div className="flex flex-col">
            {experiences.map((entry, i) => (
              <ExperienceCard key={entry.id} entry={entry} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
