import { useRef, useState, useEffect } from 'react';

const allPreviews: string[] = [
  '/marquee/preview-01.webp',
  '/marquee/preview-02.webp',
  '/marquee/preview-03.webp',
  '/marquee/preview-04.webp',
  '/marquee/preview-05.webp',
  '/marquee/preview-06.webp',
  '/marquee/preview-07.webp',
  '/marquee/preview-08.webp',
  '/marquee/preview-09.webp',
  '/marquee/preview-10.webp',
  '/marquee/preview-11.webp',
  '/marquee/preview-12.webp',
  '/marquee/preview-13.webp',
  '/marquee/preview-14.webp',
  '/marquee/preview-15.webp',
  '/marquee/preview-16.webp',
  '/marquee/preview-17.webp',
  '/marquee/preview-18.webp',
  '/marquee/preview-19.webp',
  '/marquee/preview-20.webp',
  '/marquee/preview-21.webp',
];

const row1Gifs = allPreviews.slice(0, 11);
const row2Gifs = allPreviews.slice(11);

// Tripled lists for seamless scroll length
const tripledRow1 = [...row1Gifs, ...row1Gifs, ...row1Gifs];
const tripledRow2 = [...row2Gifs, ...row2Gifs, ...row2Gifs];

export function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const sectionTop = rect.top + window.scrollY;
            const currentOffset =
              (window.scrollY - sectionTop + window.innerHeight) * 0.3;
            setOffset(currentOffset);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const row1Transform = `translateX(${offset - 200}px)`;
  const row2Transform = `translateX(${-(offset - 200)}px)`;

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-16 sm:pt-24 md:pt-36 pb-8 sm:pb-10 overflow-hidden w-full select-none"
      aria-label="Digital design and creative motion showcase"
    >
      <div className="flex flex-col gap-2.5 sm:gap-3.5 w-full">
        {/* ─── Row 1: Moves RIGHT on scroll ─── */}
        <div
          className="flex gap-2.5 sm:gap-3.5 w-max"
          style={{
            transform: row1Transform,
            willChange: 'transform',
          }}
        >
          {tripledRow1.map((src, i) => (
            <div
              key={`row1-${i}`}
              className="w-[240px] h-[155px] min-w-[240px] sm:w-[320px] sm:h-[205px] sm:min-w-[320px] md:w-[400px] md:h-[255px] md:min-w-[400px] rounded-2xl overflow-hidden bg-[#181818] flex-shrink-0"
            >
              <img
                src={src}
                alt="Creative digital marketing and web interface preview"
                loading="lazy"
                decoding="async"
                width={400}
                height={255}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>

        {/* ─── Row 2: Moves LEFT on scroll ─── */}
        <div
          className="flex gap-2.5 sm:gap-3.5 w-max"
          style={{
            transform: row2Transform,
            willChange: 'transform',
          }}
        >
          {tripledRow2.map((src, i) => (
            <div
              key={`row2-${i}`}
              className="w-[240px] h-[155px] min-w-[240px] sm:w-[320px] sm:h-[205px] sm:min-w-[320px] md:w-[400px] md:h-[255px] md:min-w-[400px] rounded-2xl overflow-hidden bg-[#181818] flex-shrink-0"
            >
              <img
                src={src}
                alt="Interactive digital campaign visual preview"
                loading="lazy"
                decoding="async"
                width={400}
                height={255}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
