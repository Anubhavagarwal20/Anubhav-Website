import { FadeIn } from '../ui/FadeIn';

interface ServiceItem {
  number: string;
  name: string;
  description: string;
}

const servicesList: ServiceItem[] = [
  {
    number: '01',
    name: 'SEO & Generative Engine Optimization (GEO)',
    description:
      'On-page search optimization, keyword research, search intent analysis, and AI search visibility designed to improve organic discoverability across Google and emerging generative search engines.',
  },
  {
    number: '02',
    name: 'E-commerce & Marketplace Operations',
    description:
      'End-to-end Amazon Seller Central and Shopify catalog administration, product variation modeling, keyword ranking strategy, and conversion-optimized listing copy.',
  },
  {
    number: '03',
    name: 'Performance Marketing & Paid Social',
    description:
      'Data-backed Meta Ads and Google Ads campaign architecture, lead generation funnels, creative A/B testing, and audience targeting that achieved 2X ROI on active campaigns.',
  },
  {
    number: '04',
    name: 'Analytics, GA4 & Market Research',
    description:
      'Google Analytics 4 tracking, pipeline analysis, competitor benchmarking, and market research that mapped 1,000+ prospective leads to power targeted marketing campaigns.',
  },
  {
    number: '05',
    name: 'Content Strategy & Social Media',
    description:
      'Multi-channel social media management across LinkedIn, Instagram, X, and Reddit, paired with editorial calendars, SEO blog planning, and AI-assisted creative workflows.',
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-0"
      aria-labelledby="services-heading"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Heading */}
        <FadeIn delay={0} y={30}>
          <h2
            id="services-heading"
            className="text-[#0C0C0C] font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Services
          </h2>
        </FadeIn>

        {/* 5 Service items in a vertical list */}
        <div className="flex flex-col w-full">
          {servicesList.map((service, index) => (
            <FadeIn
              key={service.number}
              delay={index * 0.1}
              y={25}
              className="w-full"
            >
              <div
                className={`py-8 sm:py-10 md:py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-10 md:gap-14 ${
                  index !== 0 ? 'border-t border-[rgba(12,12,12,0.15)]' : ''
                }`}
              >
                {/* Number on left */}
                <div
                  className="font-black text-[#0C0C0C] leading-none select-none flex-shrink-0 w-24 sm:w-36 md:w-44"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {service.number}
                </div>

                {/* Name + description stacked vertically on right */}
                <div className="flex flex-col gap-2 sm:gap-3 flex-1 min-w-0">
                  <h3
                    className="font-medium uppercase tracking-tight text-[#0C0C0C]"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="font-light leading-relaxed max-w-2xl text-[#0C0C0C] opacity-70"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.15rem)' }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
