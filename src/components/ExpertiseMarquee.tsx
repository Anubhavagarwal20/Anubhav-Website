import { useReducedMotion } from 'framer-motion';
import { expertiseLabels } from '../data';

export function ExpertiseMarquee() {
  const shouldReduce = useReducedMotion();

  // Duplicate for seamless loop
  const items = [...expertiseLabels, ...expertiseLabels];

  return (
    <section
      className="py-5 border-y border-white/[0.08] overflow-hidden bg-[#0D1220]"
      aria-label="Areas of expertise"
    >
      {/* Screen reader only full list */}
      <ul className="sr-only">
        {expertiseLabels.map((label) => (
          <li key={label}>{label}</li>
        ))}
      </ul>

      {/* Visual marquee (aria-hidden so the SR-only list isn't doubled) */}
      <div className="marquee-container" aria-hidden="true">
        <div
          className="marquee-track"
          style={{ animationPlayState: shouldReduce ? 'paused' : 'running' }}
        >
          {items.map((label, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-4 mx-4"
            >
              <span
                className="font-display font-semibold text-xs tracking-[0.16em] uppercase"
                style={{ color: i % 3 === 0 ? '#4F8CFF' : i % 3 === 1 ? '#A7B1C2' : '#4DE2FF' }}
              >
                {label}
              </span>
              <span
                className="w-1 h-1 rounded-full flex-shrink-0"
                style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
