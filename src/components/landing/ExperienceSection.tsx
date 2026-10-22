import { FadeIn } from '../ui/FadeIn';

interface ExperienceItem {
  number: string;
  role: string;
  company: string;
  period: string;
  type: string;
  description: string;
  highlights: string[];
  skills: string[];
}

const experienceList: ExperienceItem[] = [
  {
    number: '01',
    role: 'Content & Social Media Marketing Intern',
    company: 'GEO SEO Lab',
    period: 'April 2026 – Present',
    type: 'Internship / Part-time',
    description:
      'Manage multi-channel brand presence across LinkedIn, Instagram, Facebook, Twitter/X, and Reddit using Meta Business Suite for scheduling and performance analytics.',
    highlights: [
      'Execute SEO and Generative Engine Optimization (GEO) strategies, including blog writing and content optimization, to improve AI and organic search visibility.',
      'Conduct market and competitor visibility benchmarking to identify high-potential content opportunities.',
      'Design high-engagement LinkedIn visual assets and educational copy to communicate advanced search concepts.',
    ],
    skills: ['GEO', 'SEO', 'Meta Business Suite', 'Content Strategy', 'Competitor Analysis', 'AI Visibility'],
  },
  {
    number: '02',
    role: 'Freelance E-commerce Specialist (prev. Intern)',
    company: 'Chloia',
    period: 'May 2026 – Present',
    type: 'Freelance',
    description:
      'Direct end-to-end marketplace operations across Amazon and Shopify, administering Amazon Seller Central cataloging, variations, models, images, and customization.',
    highlights: [
      'Conduct keyword research and on-page listing optimization to lift organic ranking on Amazon and Shopify.',
      'Structure high-converting product titles, bullet points, backend search terms, and image assets.',
      'Manage catalog hygiene, parent-child variations, and product launch readiness.',
    ],
    skills: ['Amazon Seller Central', 'Shopify', 'Keyword Research', 'Catalog Management', 'E-commerce SEO'],
  },
  {
    number: '03',
    role: 'Digital Strategy & Performance Associate Intern',
    company: 'Moiret',
    period: 'September – December 2025',
    type: 'Internship',
    description:
      'Executed on-page SEO frameworks and performance marketing alignment for B2B brand growth and consulting outreach.',
    highlights: [
      'Conducted search intent analysis, competitor ranking audits, and content optimization to boost organic visibility.',
      'Built SEO-driven blog planners and editorial content calendars aligned with corporate brand positioning.',
      'Designed LinkedIn marketing creatives supporting digital engagement and lead acquisition.',
    ],
    skills: ['On-Page SEO', 'Search Intent Analysis', 'Blog Planning', 'Content Calendars', 'B2B Strategy'],
  },
  {
    number: '04',
    role: 'Freelance Digital Marketing & Web Development',
    company: 'Ray Talent Hunt',
    period: 'July 2025 – August 2026',
    type: 'Freelance',
    description:
      'Developed and managed the corporate website while orchestrating multi-channel social media marketing campaigns.',
    highlights: [
      'Built and maintained responsive website architectures ensuring consistent brand presentation.',
      'Managed day-to-day digital marketing execution, social content distribution, and promotional initiatives.',
      'Assisted in brand promotion strategy to elevate cross-channel discoverability.',
    ],
    skills: ['Website Development', 'Website Management', 'Social Media', 'Digital Strategy', 'Brand Promotion'],
  },
  {
    number: '05',
    role: 'Digital Marketing Freelancer',
    company: 'Sri Ganpati Collection',
    period: 'July 2023 – June 2024',
    type: 'Freelance',
    description:
      'Led end-to-end digital marketing initiatives across website management, Meta Ads, social media, and influencer collaborations.',
    highlights: [
      'Achieved verified 2X ROI on paid Meta Ads performance campaigns through rigorous targeting and ad spend optimization.',
      'Built and managed company website with on-page SEO integration and fast catalog browsing.',
      'Produced 20+ branded product creatives leveraging AI-assisted design tools to increase click-through rates.',
    ],
    skills: ['Meta Ads (2X ROI)', 'Lead Generation', 'AI Product Creatives', 'Web SEO', 'Influencer Marketing'],
  },
  {
    number: '06',
    role: 'Sales & Marketing Operations Intern',
    company: 'My Equation (formerly Tech Analogy)',
    period: 'June – August 2023',
    type: 'Internship',
    description:
      'Drove market research, prospective lead identification, and outbound client communication to build the core sales pipeline.',
    highlights: [
      'Identified 1,000+ prospective leads contributing to approximately 50% of the active sales pipeline.',
      'Executed targeted email marketing campaigns and supported 600+ direct client interactions.',
      'Tracked and analyzed campaign metrics in CRM to refine conversion-focused sales pitches.',
    ],
    skills: ['1,000+ Leads', '50% Pipeline Contributed', 'Email Marketing', '600+ Client Interactions', 'CRM'],
  },
];

const educationList = [
  {
    degree: 'Master of Business Administration (MBA)',
    institution: 'Maharaja Agrasen Institute of Technology (MAIT), Rohini, Delhi',
    period: 'Expected 2027',
    badge: 'In Progress',
  },
  {
    degree: 'Bachelor of Business Administration (BBA) — Digital Marketing',
    institution: 'Chandigarh University, Ajitgarh, Punjab',
    period: 'Completed 2024',
    badge: 'Score: 74.7%',
  },
  {
    degree: 'Class 12 (Commerce) — CBSE',
    institution: 'Ajmani International School, Lakhimpur Kheri, U.P.',
    period: 'Completed 2022',
    badge: 'Score: 76.2%',
  },
];

const leadershipList = [
  {
    title: "Event Organiser & Host | DigiQuest '26",
    organization: 'E-Summit, Maharaja Agrasen Institute of Technology',
    detail: 'Led registrations, operations, and hosted a 3-round digital marketing competition featuring case studies and tool challenges.',
  },
  {
    title: 'Organizing Committee Member',
    organization: 'Alumni Cell, Maharaja Agrasen Institute of Technology',
    detail: 'Coordinated alumni outreach, onsite registrations, stage logistics, and RSVP follow-ups.',
  },
  {
    title: 'Graphic Designer & Event Coordinator',
    organization: 'Chandigarh University (Apex Dept & Event Management)',
    detail: 'Designed promotional graphics, banners, and coordinated student team workflows for university events.',
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="bg-[#0C0C0C] relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-28 md:py-36 text-[#D7E2EA]"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            id="experience-heading"
            className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-6 sm:mb-8"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Experience
          </h2>
          <p className="text-center font-light uppercase tracking-widest text-[#D7E2EA]/60 text-sm sm:text-base md:text-lg mb-16 sm:mb-20 md:mb-24 max-w-2xl mx-auto">
            Track record across SEO, GEO, E-Commerce, and Performance Marketing
          </p>
        </FadeIn>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 mb-24 sm:mb-32">
          {experienceList.map((item, index) => (
            <FadeIn key={item.number} delay={index * 0.08} y={30} className="w-full">
              <div className="rounded-[32px] sm:rounded-[40px] border border-[#D7E2EA]/20 bg-[#121212] p-6 sm:p-8 md:p-10 hover:border-[#D7E2EA]/60 transition-colors duration-300">
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#D7E2EA]/10">
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span
                      className="font-black text-[#D7E2EA]/40 leading-none select-none"
                      style={{ fontSize: 'clamp(2rem, 5vw, 64px)' }}
                    >
                      {item.number}
                    </span>
                    <div>
                      <h3 className="font-medium uppercase tracking-tight text-xl sm:text-2xl md:text-3xl text-[#D7E2EA]">
                        {item.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <span className="text-base sm:text-lg font-light text-[#D7E2EA]/80">
                          {item.company}
                        </span>
                        <span className="text-[#D7E2EA]/40">•</span>
                        <span className="text-xs uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-[#D7E2EA]/20 text-[#D7E2EA]/70">
                          {item.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <span className="text-xs sm:text-sm font-light uppercase tracking-wider text-[#D7E2EA]/60 md:text-right whitespace-nowrap">
                    {item.period}
                  </span>
                </div>

                {/* Description & Highlights */}
                <div className="pt-6 flex flex-col gap-4">
                  <p className="font-light text-sm sm:text-base leading-relaxed text-[#D7E2EA]/85">
                    {item.description}
                  </p>

                  <ul className="space-y-2">
                    {item.highlights.map((highlight, hIdx) => (
                      <li
                        key={hIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm font-light text-[#D7E2EA]/75 leading-relaxed"
                      >
                        <span className="text-[#D7E2EA] mt-1 text-xs">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-2 pt-3">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full bg-[#1A1A1A] border border-[#D7E2EA]/15 text-[11px] sm:text-xs font-light uppercase tracking-wider text-[#D7E2EA]/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Education & Leadership Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {/* Education */}
          <FadeIn delay={0.2} y={30}>
            <div className="rounded-[32px] sm:rounded-[40px] border border-[#D7E2EA]/20 bg-[#121212] p-6 sm:p-8 md:p-10 h-full flex flex-col justify-between">
              <div>
                <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA]/50 block mb-2">
                  Academic Background
                </span>
                <h3 className="font-black uppercase tracking-tight text-2xl sm:text-3xl text-[#D7E2EA] mb-6">
                  Education
                </h3>

                <div className="space-y-6">
                  {educationList.map((edu, idx) => (
                    <div
                      key={idx}
                      className={idx !== 0 ? 'pt-6 border-t border-[#D7E2EA]/10' : ''}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="font-medium text-base sm:text-lg text-[#D7E2EA]">
                          {edu.degree}
                        </h4>
                        <span className="text-xs uppercase px-2.5 py-1 rounded-full border border-[#D7E2EA]/20 text-[#D7E2EA]/80 whitespace-nowrap">
                          {edu.badge}
                        </span>
                      </div>
                      <p className="font-light text-sm text-[#D7E2EA]/70 mt-1">
                        {edu.institution}
                      </p>
                      <span className="text-xs font-light text-[#D7E2EA]/50 block mt-1">
                        {edu.period}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Leadership & Activities */}
          <FadeIn delay={0.3} y={30}>
            <div className="rounded-[32px] sm:rounded-[40px] border border-[#D7E2EA]/20 bg-[#121212] p-6 sm:p-8 md:p-10 h-full flex flex-col justify-between">
              <div>
                <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA]/50 block mb-2">
                  Campus & Community
                </span>
                <h3 className="font-black uppercase tracking-tight text-2xl sm:text-3xl text-[#D7E2EA] mb-6">
                  Leadership
                </h3>

                <div className="space-y-6">
                  {leadershipList.map((lead, idx) => (
                    <div
                      key={idx}
                      className={idx !== 0 ? 'pt-6 border-t border-[#D7E2EA]/10' : ''}
                    >
                      <h4 className="font-medium text-base sm:text-lg text-[#D7E2EA]">
                        {lead.title}
                      </h4>
                      <p className="text-xs uppercase tracking-wider text-[#D7E2EA]/60 mt-0.5">
                        {lead.organization}
                      </p>
                      <p className="font-light text-xs sm:text-sm text-[#D7E2EA]/75 mt-2 leading-relaxed">
                        {lead.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
