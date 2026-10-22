import { useRef } from 'react';
import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
  useAnimationFrame,
  useMotionValue,
} from 'framer-motion';

const allGifs: string[] = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

const row1Gifs = allGifs.slice(0, 11);
const row2Gifs = allGifs.slice(11);

// Tripled lists for seamless wrap-around loop
const repeatedRow1 = [...row1Gifs, ...row1Gifs, ...row1Gifs];
const repeatedRow2 = [...row2Gifs, ...row2Gifs, ...row2Gifs];

export function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  // Base progress counters
  const baseX1 = useMotionValue(0);
  const baseX2 = useMotionValue(0);

  // Velocity factor multiplier
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  useAnimationFrame((_time, delta) => {
    // Standard baseline speed in pixels per second + scroll acceleration
    const baseSpeed = 45;
    const scrollBoost = velocityFactor.get() * 30;
    const moveBy = ((baseSpeed + scrollBoost) * delta) / 1000;

    let newX1 = baseX1.get() - moveBy;
    let newX2 = baseX2.get() + moveBy;

    // Wrap-around modulo calculation (approx width of 11 items = 11 * 432 = 4752)
    const wrapWidth = 11 * 432;
    if (newX1 <= -wrapWidth) newX1 += wrapWidth;
    if (newX1 > 0) newX1 -= wrapWidth;

    if (newX2 >= wrapWidth) newX2 -= wrapWidth;
    if (newX2 < 0) newX2 += wrapWidth;

    baseX1.set(newX1);
    baseX2.set(newX2);
  });

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden w-full select-none"
      aria-label="Digital design and creative motion showcase"
    >
      <div className="flex flex-col gap-4 w-full">
        {/* ─── Row 1: Smooth Glide Left with Velocity Acceleration ─── */}
        <motion.div
          className="flex gap-4 w-max will-change-transform"
          style={{ x: baseX1 }}
        >
          {repeatedRow1.map((src, i) => (
            <div
              key={`row1-${i}`}
              className="w-[340px] sm:w-[420px] h-[220px] sm:h-[270px] min-w-[340px] sm:min-w-[420px] rounded-2xl overflow-hidden bg-[#181818] flex-shrink-0 relative group"
            >
              <img
                src={src}
                alt="Creative digital marketing and web interface preview"
                loading="lazy"
                width={420}
                height={270}
                className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </motion.div>

        {/* ─── Row 2: Smooth Glide Right with Velocity Acceleration ─── */}
        <motion.div
          className="flex gap-4 w-max will-change-transform"
          style={{ x: baseX2 }}
        >
          {repeatedRow2.map((src, i) => (
            <div
              key={`row2-${i}`}
              className="w-[340px] sm:w-[420px] h-[220px] sm:h-[270px] min-w-[340px] sm:min-w-[420px] rounded-2xl overflow-hidden bg-[#181818] flex-shrink-0 relative group"
            >
              <img
                src={src}
                alt="Interactive digital campaign visual preview"
                loading="lazy"
                width={420}
                height={270}
                className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
