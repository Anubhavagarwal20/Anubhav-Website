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
    name: 'GEO SEO Lab',
    category: 'SEO & GEO Strategy',
    description:
      'Worked on SEO and Generative Engine Optimization content, competitor research, content planning, and social media assets focused on digital visibility and AI-powered search.',
    tags: ['SEO Strategy', 'GEO', 'Content Optimization', 'Competitor Research'],
    col1Img1: {
      src: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      alt: 'GEO SEO Lab - AI search visibility analysis dashboard and keyword research framework',
    },
    col1Img2: {
      src: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
      alt: 'GEO SEO Lab - Competitor search intent research and content optimization planner',
    },
    col2Img: {
      src: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
      alt: 'GEO SEO Lab - Generative Engine Optimization strategy overview and educational content structure',
    },
    link: '#experience',
  },
  {
    number: '02',
    name: 'Chloia',
    category: 'Amazon & Shopify E-commerce Operations',
    description:
      'Worked on Amazon product listings, keyword research, catalog structure, product variations, listing copy, and e-commerce operations across Amazon and Shopify.',
    tags: ['Amazon Seller Central', 'Shopify', 'Product Listings', 'E-commerce SEO'],
    col1Img1: {
      src: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      alt: 'Chloia - Amazon Seller Central product catalog hierarchy and variant management interface',
    },
    col1Img2: {
      src: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
      alt: 'Chloia - High-converting Amazon product listing titles, bullet points, and backend search terms',
    },
    col2Img: {
      src: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
      alt: 'Chloia - Multi-channel e-commerce storefront integration and Shopify catalog management showcase',
    },
    link: '#experience',
  },
  {
    number: '03',
    name: 'Sri Ganpati Collection',
    category: 'Performance Marketing & Digital Content',
    description:
      'Managed website and social media activities, supported Meta Ads campaign optimization, and created product creatives using AI-assisted design tools.',
    tags: ['Meta Ads', 'Website Management', 'Product Creatives', 'Digital Marketing'],
    col1Img1: {
      src: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
      alt: 'Sri Ganpati Collection - Meta Ads campaign audience targeting and 2X ROI performance optimization',
    },
    col1Img2: {
      src: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
      alt: 'Sri Ganpati Collection - 20+ AI-assisted branded product creatives produced for social campaigns',
    },
    col2Img: {
      src: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
      alt: 'Sri Ganpati Collection - Store website management, on-page SEO layout, and digital presence',
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
      className="min-h-[85vh] sticky top-20 md:top-28 flex items-center justify-center w-full py-4"
    >
      <motion.div
        style={{
          scale,
          top: `${index * 24}px`,
        }}
        className="relative w-full rounded-[36px] sm:rounded-[48px] md:rounded-[56px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-5 sm:p-7 md:p-9 flex flex-col justify-between gap-6 overflow-hidden shadow-2xl"
      >
        {/* ─── Top Row: Meta & Header ─── */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-2 border-b border-[#D7E2EA]/10">
          <div className="flex items-start sm:items-center gap-4 sm:gap-6">
            {/* Number (large) */}
            <span
              className="font-black text-[#D7E2EA] leading-none select-none flex-shrink-0"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 84px)' }}
            >
              {project.number}
            </span>

            {/* Category label and project name */}
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-light uppercase tracking-widest text-[#D7E2EA]/60">
                {project.category}
              </span>
              <h3 className="font-medium uppercase tracking-tight text-[#D7E2EA] text-xl sm:text-2xl md:text-3xl">
                {project.name}
              </h3>
            </div>
          </div>

          {/* Project Details Link */}
          <a
            href={project.link}
            className="inline-flex items-center justify-center rounded-full border border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-wider px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm transition-colors duration-200 hover:bg-[#D7E2EA] hover:text-[#0C0C0C] active:scale-[0.98] select-none whitespace-nowrap self-start lg:self-center"
          >
            View Experience Details
          </a>
        </div>

        {/* ─── Description & Tags ─── */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-xs sm:text-sm font-light text-[#D7E2EA]/80 leading-relaxed max-w-3xl">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 flex-shrink-0">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-[#161616] border border-[#D7E2EA]/15 text-[11px] sm:text-xs font-light uppercase tracking-wider text-[#D7E2EA]/75"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ─── Bottom Row: Two-Column Image Grid with Descriptive Alt Texts ─── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 w-full items-stretch">
          {/* Left Column (40% width): 2 stacked images */}
          <div className="md:col-span-5 flex flex-col gap-4 sm:gap-6">
            <div
              className="w-full overflow-hidden rounded-[24px] sm:rounded-[32px] md:rounded-[40px] bg-[#141414]"
              style={{ height: 'clamp(120px, 15vw, 210px)' }}
            >
              <img
                src={project.col1Img1.src}
                alt={project.col1Img1.alt}
                loading="lazy"
                className="w-full h-full object-cover rounded-[24px] sm:rounded-[32px] md:rounded-[40px]"
              />
            </div>
            <div
              className="w-full overflow-hidden rounded-[24px] sm:rounded-[32px] md:rounded-[40px] bg-[#141414]"
              style={{ height: 'clamp(140px, 18vw, 270px)' }}
            >
              <img
                src={project.col1Img2.src}
                alt={project.col1Img2.alt}
                loading="lazy"
                className="w-full h-full object-cover rounded-[24px] sm:rounded-[32px] md:rounded-[40px]"
              />
            </div>
          </div>

          {/* Right Column (60% width): 1 tall image */}
          <div className="md:col-span-7 w-full overflow-hidden rounded-[24px] sm:rounded-[32px] md:rounded-[40px] bg-[#141414] min-h-[200px] sm:min-h-[280px]">
            <img
              src={project.col2Img.src}
              alt={project.col2Img.alt}
              loading="lazy"
              className="w-full h-full object-cover rounded-[24px] sm:rounded-[32px] md:rounded-[40px]"
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
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-24 sm:pb-32"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Heading: "Projects" */}
        <FadeIn delay={0} y={40}>
          <h2
            id="projects-heading"
            className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-4 sm:mb-6"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Projects
          </h2>
          <p className="text-center font-light uppercase tracking-widest text-[#D7E2EA]/60 text-xs sm:text-sm md:text-base mb-16 sm:mb-20 md:mb-28 max-w-xl mx-auto">
            Selected client, freelance, and operational digital marketing engagements
          </p>
        </FadeIn>

        {/* 3 Sticky Stacking Cards */}
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
