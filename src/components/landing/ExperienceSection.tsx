import { FadeIn } from '../ui/FadeIn';

interface ExperienceItem {
  number: string;
  role: string;
  company: string;
  period: string;
  type: string;
  transitionNote?: string;
  dateNote?: string;
  highlights: string[];
  skills: string[];
}

const experienceList: ExperienceItem[] = [
  {
    number: '01',
    role: 'Content & Social Media Marketing Intern / Part-time',
    company: 'GEO SEO Lab',
    period: 'April 2026 – Present',
    type: 'Internship / Part-time',
    highlights: [
      'Manage multi-channel content and social media activities across LinkedIn, Instagram, Facebook, X, and Reddit.',
      'Support SEO and GEO strategies through blog writing, keyword research, and content optimization.',
      'Research competitors and identify relevant content opportunities.',
      'Create LinkedIn visuals and educational content about SEO and AI-powered search.',
    ],
    skills: ['SEO', 'GEO', 'Content Strategy', 'Meta Business Suite', 'Competitor Research'],
  },
  {
    number: '02',
    role: 'E-commerce Specialist (Previously Amazon Listing Intern)',
    company: 'Chloia',
    period: 'April 2026 – Present',
    type: 'Internship → Freelance',
    transitionNote:
      'Started as an Amazon E-commerce Listing Intern (26 April 2026 – 28 May 2026), continuing with ongoing freelance e-commerce operations across Amazon and Shopify.',
    highlights: [
      'Manage Amazon and Shopify product listings, catalog information, models, images, and customization options.',
      'Conduct keyword research and optimize listing titles, bullet points, backend search terms, and product content.',
      'Support catalog consistency, parent-child variations, and listing readiness.',
    ],
    skills: ['Amazon Seller Central', 'Shopify', 'Keyword Research', 'Catalog Management', 'E-commerce SEO'],
  },
  {
    number: '03',
    role: 'Digital Strategy & Performance Marketing Intern',
    company: 'Moirét Consulting',
    period: 'September – December 2025',
    type: 'Internship',
    highlights: [
      'Supported on-page SEO and content optimization for B2B brand growth and consulting outreach.',
      'Conducted search intent analysis and competitor research.',
      'Developed SEO-driven blog plans and editorial calendars.',
      'Created LinkedIn marketing assets supporting digital engagement and outreach.',
    ],
    skills: ['On-Page SEO', 'Search Intent', 'Blog Planning', 'B2B Strategy'],
  },
  {
    number: '04',
    role: 'Freelance Digital Marketing & Web Development',
    company: 'Ray Talent Hunt',
    period: 'July 2025 – August 2026',
    type: 'Freelance',
    dateNote: 'Dates supplied per initial project agreement',
    highlights: [
      'Developed and maintained the company website.',
      'Supported website management, social media content, and digital marketing activities.',
      'Assisted with promotional campaigns and brand visibility across channels.',
    ],
    skills: ['Website Development', 'Website Management', 'Social Media', 'Digital Strategy'],
  },
  {
    number: '05',
    role: 'Digital Marketing Freelancer',
    company: 'Sri Ganpati Collection',
    period: 'July 2023 – June 2024',
    type: 'Freelance',
    highlights: [
      'Managed website and social media activities.',
      'Supported Meta Ads campaign targeting and budget optimization, achieving a reported 2× ROI on campaigns.',
      'Produced 20+ product creatives using AI-assisted design tools.',
      'Integrated on-page SEO practices into website management.',
    ],
    skills: ['Meta Ads', 'Website SEO', 'AI-Assisted Creatives', 'Lead Generation'],
  },
  {
    number: '06',
    role: 'Sales & Marketing Operations Intern',
    company: 'My Equation (formerly Tech Analogy)',
    period: 'June – August 2023',
    type: 'Internship',
    highlights: [
      'Identified 1,000+ prospective leads for targeted outreach.',
      'Supported pipeline development and direct client communication.',
      'Assisted with email marketing and outbound campaigns.',
      'Reviewed CRM and campaign information to support sales outreach improvements.',
    ],
    skills: ['Lead Research', 'Email Marketing', 'CRM', 'Market Research'],
  },
];

const educationList = [
  {
    degree: 'Master of Business Administration (MBA)',
    institution: 'Maharaja Agrasen Institute of Technology (MAIT), Rohini, Delhi',
    period: 'Expected 2027',
  },
  {
    degree: 'Bachelor of Business Administration — Digital Marketing',
    institution: 'Chandigarh University, Ajitgarh, Punjab',
    period: 'Completed 2024',
  },
  {
    degree: 'Class 12 — Commerce, CBSE',
    institution: 'Ajmani International School, Lakhimpur Kheri, Uttar Pradesh',
    period: 'Completed 2022',
  },
];

const leadershipList = [
  {
    title: "Event Organiser & Host — DigiQuest '26",
    organization: 'E-Summit, Maharaja Agrasen Institute of Technology',
    detail:
      'Led registrations and event operations and hosted a three-round digital marketing competition featuring case studies and marketing-tool challenges.',
  },
  {
    title: 'Organizing Committee Member — Alumni Cell',
    organization: 'Maharaja Agrasen Institute of Technology',
    detail:
      'Supported alumni outreach, event registrations, stage logistics, and RSVP coordination.',
  },
  {
    title: 'Graphic Designer & Event Coordinator',
    organization: 'Chandigarh University — Apex Department and Event Management',
    detail:
      'Designed promotional graphics and event banners and coordinated student-team workflows.',
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
            className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-4 sm:mb-6"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Experience
          </h2>
          <p className="text-center font-light uppercase tracking-widest text-[#D7E2EA]/60 text-xs sm:text-sm md:text-base mb-16 sm:mb-20 md:mb-24 max-w-2xl mx-auto">
            Professional record in SEO, GEO, E-Commerce, and Performance Marketing
          </p>
        </FadeIn>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 gap-5 sm:gap-8 mb-20 sm:mb-32">
          {experienceList.map((item, index) => (
            <FadeIn key={item.number} delay={index * 0.08} y={30} className="w-full">
              <div className="rounded-[28px] sm:rounded-[36px] md:rounded-[40px] border border-[#D7E2EA]/20 bg-[#121212] p-5 sm:p-7 md:p-10 hover:border-[#D7E2EA]/60 transition-colors duration-300">
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 pb-5 border-b border-[#D7E2EA]/10">
                  <div className="flex items-center gap-3.5 sm:gap-6">
                    <span
                      className="font-black text-[#D7E2EA]/40 leading-none select-none flex-shrink-0"
                      style={{ fontSize: 'clamp(1.75rem, 4.5vw, 64px)' }}
                    >
                      {item.number}
                    </span>
                    <div>
                      <h3 className="font-medium uppercase tracking-tight text-lg sm:text-2xl md:text-3xl text-[#D7E2EA]">
                        {item.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <span className="text-sm sm:text-lg font-light text-[#D7E2EA]/90">
                          {item.company}
                        </span>
                        <span className="text-[#D7E2EA]/40">•</span>
                        <span className="text-[10px] sm:text-xs uppercase tracking-wider px-2 py-0.5 rounded-full border border-[#D7E2EA]/20 text-[#D7E2EA]/70">
                          {item.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:items-end gap-1">
                    <span className="text-xs sm:text-sm font-light uppercase tracking-wider text-[#D7E2EA]/60">
                      {item.period}
                    </span>
                    {item.dateNote && (
                      <span className="text-[11px] font-light text-[#D7E2EA]/70 italic">
                        {item.dateNote}
                      </span>
                    )}
                  </div>
                </div>

                {/* Transition Note (if any) */}
                {item.transitionNote && (
                  <div className="mt-4 p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs font-light text-[#D7E2EA]/80 leading-relaxed">
                    <span className="font-medium text-[#D7E2EA] uppercase tracking-wider text-[11px] mr-1.5">
                      Role Transition:
                    </span>
                    {item.transitionNote}
                  </div>
                )}

                {/* Highlights List */}
                <div className="pt-4 sm:pt-5 flex flex-col gap-3.5 sm:gap-4">
                  <ul className="space-y-2">
                    {item.highlights.map((highlight, hIdx) => (
                      <li
                        key={hIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm font-light text-[#D7E2EA]/85 leading-relaxed"
                      >
                        <span className="text-[#D7E2EA] mt-1 text-xs">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1.5">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#1A1A1A] border border-[#D7E2EA]/15 text-[10px] sm:text-xs font-light uppercase tracking-wider text-[#D7E2EA]/80"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
          {/* Education */}
          <FadeIn delay={0.2} y={30}>
            <div className="rounded-[28px] sm:rounded-[36px] md:rounded-[40px] border border-[#D7E2EA]/20 bg-[#121212] p-5 sm:p-7 md:p-10 h-full flex flex-col justify-between">
              <div>
                <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA]/70 block mb-2">
                  Academic Credentials
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
                      <h4 className="font-medium text-base sm:text-lg text-[#D7E2EA]">
                        {edu.degree}
                      </h4>
                      <p className="font-light text-sm text-[#D7E2EA]/75 mt-1">
                        {edu.institution}
                      </p>
                      <span className="text-xs font-light text-[#D7E2EA]/70 block mt-1">
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
                <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA]/70 block mb-2">
                  Campus &amp; Community
                </span>
                <h3 className="font-black uppercase tracking-tight text-2xl sm:text-3xl text-[#D7E2EA] mb-6">
                  Leadership &amp; Activities
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
                      <p className="font-light text-xs sm:text-sm text-[#D7E2EA]/80 mt-2 leading-relaxed">
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
