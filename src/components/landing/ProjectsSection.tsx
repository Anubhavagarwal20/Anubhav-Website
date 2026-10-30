import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '../ui/FadeIn';

interface ProjectData {
  number: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  col1Img1: { src: string; alt: string };
  col1Img2: { src: string; alt: string };
  col2Img: { src: string; alt: string };
  link: string;
}

const projectsList: ProjectData[] = [
  {
    number: '01',
    name: 'Ray Talent Hunt',
    category: 'Class 12th Olympiad Platform & Web Growth',
    description:
      'Architected and deployed the digital examination and registration portal for Ray Talent Hunt, a premier national Olympiad platform for Class 12th students. Implemented high-performance web architecture, student registration funnels, subject-wise examination guidelines, and targeted digital marketing campaigns that scaled student participation across schools.',
    tags: ['Class 12th Olympiad', 'EdTech Web Portal', 'Student Registration Funnels', 'Exam System UI', 'Organic Search SEO'],
    col1Img1: {
      src: '/projects/talenthunt-2.jpg',
      alt: 'Ray Talent Hunt - Class 12th National Olympiad student registration portal and guidelines interface',
    },
    col1Img2: {
      src: '/projects/talenthunt-3.jpg',
      alt: 'Ray Talent Hunt - EdTech student acquisition funnel and Olympiad participation analytics',
    },
    col2Img: {
      src: '/projects/talenthunt-1.jpg',
      alt: 'Ray Talent Hunt - National Olympiad examination management platform, leaderboard, and scholarship dashboard',
    },
    link: '#experience',
  },
  {
    number: '02',
    name: 'Chloia',
    category: 'Premium Mobile Covers & E-Commerce Operations',
    description:
      'Directed marketplace catalog operations and growth strategy for Chloia, a brand specializing in premium smartphone cases and protective mobile covers. Structured high-converting Amazon & Shopify listings with modular A+ content, multi-device model variations (iPhone & flagship Android), backend SEO search terms, and real-time inventory synchronization.',
    tags: ['Premium Mobile Covers', 'Amazon Seller Central', 'Shopify Plus', 'A+ Listing Optimization', '18.4% Conv Rate', 'MagSafe Cases'],
    col1Img1: {
      src: '/projects/chloia-2.jpg',
      alt: 'Chloia - High-converting Amazon product listing for premium MagSafe mobile covers with modular A+ content',
    },
    col1Img2: {
      src: '/projects/chloia-3.jpg',
      alt: 'Chloia - Multi-channel smartphone case catalog, parent-child variation matrix, and live inventory sync',
    },
    col2Img: {
      src: '/projects/chloia-1.jpg',
      alt: 'Chloia - Amazon Seller Central and Shopify sales growth dashboard for premium mobile covers',
    },
    link: '#experience',
  },
  {
    number: '03',
    name: 'Sri Ganpati Collection',
    category: 'Performance Marketing & Digital Content',
    description:
      'Architected performance marketing campaigns and paid social funnels, delivering a verified 2.0X ROAS on Meta Ads. Produced 20+ AI-assisted high-converting product creatives for ethnic wear collections and managed day-to-day e-commerce storefront operations.',
    tags: ['Meta Ads Manager', '2.0X ROAS Delivered', 'AI Product Creatives', 'Ethnic Fashion E-Commerce', 'Funnel Optimization'],
    col1Img1: {
      src: '/projects/ganpati-2.jpg',
      alt: 'Sri Ganpati Collection - Curated AI-assisted ethnic fashion ad creative grid',
    },
    col1Img2: {
      src: '/projects/ganpati-3.jpg',
      alt: 'Sri Ganpati Collection - Mobile e-commerce store interface and Instagram Shop checkout',
    },
    col2Img: {
      src: '/projects/ganpati-1.jpg',
      alt: 'Sri Ganpati Collection - Meta Ads Manager dashboard showcasing 2.0X ROAS performance metrics',
    },
    link: '#experience',
  },
];

interface CardProps {
  project: ProjectData;
  index: number;
  totalCards: number;
}

function Card({ project, index, totalCards }: CardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="min-h-auto md:min-h-[85vh] relative md:sticky md:top-24 lg:top-28 flex items-center justify-center w-full py-3 sm:py-4 mb-6 md:mb-0"
    >
      <motion.div
        style={{
          scale,
          top: `${index * 20}px`,
        }}
        className="relative w-full rounded-[28px] sm:rounded-[36px] md:rounded-[48px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 lg:p-9 flex flex-col justify-between gap-5 sm:gap-6 overflow-hidden shadow-2xl"
      >
        {/* ─── Top Row: Meta & Header ─── */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-3 border-b border-[#D7E2EA]/10">
          <div className="flex items-start sm:items-center gap-3.5 sm:gap-6">
            {/* Number (large) */}
            <span
              className="font-black text-[#D7E2EA] leading-none select-none flex-shrink-0"
              style={{ fontSize: 'clamp(2.25rem, 5.5vw, 84px)' }}
            >
              {project.number}
            </span>

            {/* Category label and project name */}
            <div className="flex flex-col">
              <span className="text-[11px] sm:text-xs md:text-sm font-light uppercase tracking-widest text-[#D7E2EA]/60">
                {project.category}
              </span>
              <h3 className="font-medium uppercase tracking-tight text-[#D7E2EA] text-lg sm:text-2xl md:text-3xl">
                {project.name}
              </h3>
            </div>
          </div>

          {/* Project Details Link */}
          <a
            href={project.link}
            className="w-full sm:w-auto text-center inline-flex items-center justify-center rounded-full border border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-wider px-5 py-2.5 sm:px-7 sm:py-3 text-xs sm:text-sm transition-colors duration-200 hover:bg-[#D7E2EA] hover:text-[#0C0C0C] active:scale-[0.98] select-none whitespace-nowrap self-start lg:self-center"
          >
            View Experience Details
          </a>
        </div>

        {/* ─── Description & Tags ─── */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm font-light text-[#D7E2EA]/80 leading-relaxed max-w-3xl">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 flex-shrink-0">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-full bg-[#161616] border border-[#D7E2EA]/15 text-[10px] sm:text-xs font-light uppercase tracking-wider text-[#D7E2EA]/75"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ─── Bottom Row: Two-Column Image Grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 md:gap-6 w-full items-stretch">
          {/* Left Column (5 of 12 cols): 2 stacked images */}
          <div className="md:col-span-5 flex flex-col sm:flex-row md:flex-col gap-3 sm:gap-4 md:gap-6">
            <div
              className="w-full overflow-hidden rounded-[18px] sm:rounded-[24px] md:rounded-[32px] bg-[#141414] h-[150px] sm:h-[180px] md:h-[170px] lg:h-[200px] group"
            >
              <img
                src={project.col1Img1.src}
                alt={project.col1Img1.alt}
                loading="lazy"
                className="w-full h-full object-cover rounded-[18px] sm:rounded-[24px] md:rounded-[32px] group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div
              className="w-full overflow-hidden rounded-[18px] sm:rounded-[24px] md:rounded-[32px] bg-[#141414] h-[150px] sm:h-[180px] md:h-[190px] lg:h-[230px] group"
            >
              <img
                src={project.col1Img2.src}
                alt={project.col1Img2.alt}
                loading="lazy"
                className="w-full h-full object-cover rounded-[18px] sm:rounded-[24px] md:rounded-[32px] group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column (7 of 12 cols): 1 tall image */}
          <div className="md:col-span-7 w-full overflow-hidden rounded-[18px] sm:rounded-[24px] md:rounded-[32px] bg-[#141414] h-[200px] sm:h-[260px] md:h-full min-h-[200px] sm:min-h-[260px] group">
            <img
              src={project.col2Img.src}
              alt={project.col2Img.alt}
              loading="lazy"
              className="w-full h-full object-cover rounded-[18px] sm:rounded-[24px] md:rounded-[32px] group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-4 sm:px-8 md:px-10 pt-16 sm:pt-24 md:pt-32 pb-20 sm:pb-32"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Heading: "Projects" */}
        <FadeIn delay={0} y={40}>
          <h2
            id="projects-heading"
            className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-3 sm:mb-5"
            style={{ fontSize: 'clamp(2.75rem, 11vw, 160px)' }}
          >
            Projects
          </h2>
          <p className="text-center font-light uppercase tracking-widest text-[#D7E2EA]/60 text-xs sm:text-sm md:text-base mb-12 sm:mb-18 md:mb-24 max-w-xl mx-auto">
            Selected client, freelance, and operational digital marketing engagements
          </p>
        </FadeIn>

        {/* Stacking Cards */}
        <div className="relative w-full flex flex-col">
          {projectsList.map((project, index) => (
            <Card
              key={project.number}
              project={project}
              index={index}
              totalCards={projectsList.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
