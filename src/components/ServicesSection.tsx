import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';
import { services } from '../data';

function ServiceRow({ service, index }: { service: typeof services[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
    >
      <div
        className="border-t border-white/[0.08] group"
        role="region"
        aria-labelledby={`service-${service.number}-heading`}
      >
        <button
          className="w-full py-6 flex items-start gap-5 text-left hover:bg-white/[0.015] transition-colors px-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4F8CFF] rounded"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          aria-controls={`service-${service.number}-capabilities`}
        >
          {/* Number */}
          <span
            className="font-display font-bold text-4xl md:text-5xl leading-none mt-1 transition-colors duration-300 flex-shrink-0 w-16"
            style={{ color: expanded ? '#4F8CFF' : 'rgba(255,255,255,0.12)' }}
            aria-hidden="true"
          >
            {service.number}
          </span>

          <div className="flex-1 min-w-0">
            <h3
              id={`service-${service.number}-heading`}
              className="font-display font-semibold text-lg md:text-2xl text-[#F4F7FB] group-hover:text-[#4F8CFF] transition-colors duration-300"
            >
              {service.title}
            </h3>
            <p className="mt-2 text-[#A7B1C2] text-sm leading-relaxed max-w-2xl">
              {service.description}
            </p>
          </div>

          <span
            className="flex-shrink-0 mt-1 ml-4 p-2 rounded-full border border-white/[0.1] text-[#A7B1C2] group-hover:border-[#4F8CFF]/40 group-hover:text-[#4F8CFF] transition-all duration-300"
            aria-hidden="true"
          >
            {expanded ? <Minus size={14} /> : <Plus size={14} />}
          </span>
        </button>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              id={`service-${service.number}-capabilities`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
              className="overflow-hidden"
            >
              <div className="pb-6 pl-[84px] pr-1">
                <ul className="flex flex-wrap gap-2">
                  {service.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="px-3 py-1.5 text-xs font-medium rounded-full border border-[#4F8CFF]/20 text-[#4F8CFF] bg-[#4F8CFF]/5"
                    >
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section
      id="skills"
      className="py-24 md:py-32"
      style={{ background: 'linear-gradient(180deg, #080B12 0%, #0D1220 50%, #080B12 100%)' }}
      aria-labelledby="services-heading"
    >
      <div className="container-padded">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <FadeIn>
            <div>
              <p className="section-label mb-4">What I Offer</p>
              <h2
                id="services-heading"
                className="font-display font-bold leading-tight gradient-text"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
              >
                What I Bring to
                <br />
                the Table
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-[#A7B1C2] leading-relaxed text-[15px] md:text-base lg:mt-auto lg:max-w-md">
              From search visibility and e-commerce optimization to content and campaign execution,
              I work across the areas that shape a brand's digital presence.
            </p>
          </FadeIn>
        </div>

        {/* Service rows */}
        <div>
          {services.map((service, i) => (
            <ServiceRow key={service.number} service={service} index={i} />
          ))}
          {/* Bottom border */}
          <div className="border-t border-white/[0.08]" />
        </div>
      </div>
    </section>
  );
}
