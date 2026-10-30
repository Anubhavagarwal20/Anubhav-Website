import { Briefcase, GraduationCap, Award, Sparkles, ChevronRight } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';
import { SpotlightCard } from '../ui/SpotlightCard';

interface ExperienceItem {
  number: string;
  role: string;
  company: string;
  period: string;
  type: string;
  isActive?: boolean;
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
    isActive: true,
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
    isActive: true,
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
      'Developed and maintained the Class 12th National Olympiad examination and registration portal.',
      'Structured student registration funnels, mock exam modules, and syllabus guidelines.',
      'Executed digital marketing campaigns and outreach across schools to drive Olympiad participant enrollment.',
    ],
    skills: ['Olympiad Web Portal', 'Website Development', 'Student Funnels', 'Digital Marketing'],
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
    status: 'In Progress',
    badgeColor: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-300',
  },
  {
    degree: 'Bachelor of Business Administration — Digital Marketing',
    institution: 'Chandigarh University, Ajitgarh, Punjab',
    period: 'Graduated 2024',
    status: 'Graduated',
    badgeColor: 'border-white/15 bg-white/5 text-[#D7E2EA]/80',
  },
  {
    degree: 'Class 12 — Commerce, CBSE',
    institution: 'Ajmani International School, Lakhimpur Kheri, Uttar Pradesh',
    period: 'Completed 2022',
    status: 'CBSE Board',
    badgeColor: 'border-white/15 bg-white/5 text-[#D7E2EA]/80',
  },
];

const leadershipList = [
  {
    title: "Event Organiser & Host — DigiQuest '26",
    organization: 'E-Summit, Maharaja Agrasen Institute of Technology',
    detail:
      'Led registrations and event operations and hosted a three-round digital marketing competition featuring case studies and marketing-tool challenges.',
    tag: 'Flagship Event',
  },
  {
    title: 'Organizing Committee Member — Alumni Cell',
    organization: 'Maharaja Agrasen Institute of Technology',
    detail:
      'Supported alumni outreach, event registrations, stage logistics, and RSVP coordination.',
    tag: 'Campus Outreach',
  },
  {
    title: 'Graphic Designer & Event Coordinator',
    organization: 'Chandigarh University — Apex Department and Event Management',
    detail:
      'Designed promotional graphics and event banners and coordinated student-team workflows.',
    tag: 'Design & Logistics',
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="bg-[#0C0C0C] relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-28 md:py-36 text-[#D7E2EA] overflow-hidden"
      aria-labelledby="experience-heading"
    >
      {/* Background Floating Ambient Glows */}
      <div
        className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-br from-cyan-600/10 via-blue-600/5 to-transparent rounded-full blur-3xl pointer-events-none animate-float-slow"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-48 w-96 h-96 bg-gradient-to-tl from-purple-600/10 via-indigo-600/5 to-transparent rounded-full blur-3xl pointer-events-none animate-float-reverse"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Section Heading & Subtitle */}
        <FadeIn delay={0} y={40}>
          <div className="flex flex-col items-center mb-16 sm:mb-20 md:mb-24 text-center">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-md text-[11px] font-mono uppercase tracking-widest text-[#D7E2EA]/80 mb-5 shadow-sm">
              <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
              <span>Career Trajectory &amp; Impact</span>
            </div>

            <h2
              id="experience-heading"
              className="hero-heading font-black uppercase leading-none tracking-tight mb-4 sm:mb-6"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              Experience
            </h2>

            <p className="font-light uppercase tracking-widest text-[#D7E2EA]/60 text-xs sm:text-sm md:text-base max-w-2xl mx-auto">
              Professional record in SEO, GEO, E-Commerce, and Performance Marketing
            </p>
          </div>
        </FadeIn>

        {/* Experience Cards with Spotlight, Hover Micro-interactions, and Active Beacon */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 mb-20 sm:mb-32">
          {experienceList.map((item, index) => (
            <FadeIn key={item.number} delay={index * 0.08} y={30} className="w-full">
              <SpotlightCard
                spotlightColor="rgba(215, 226, 234, 0.08)"
                spotlightSize={550}
                className="group rounded-[28px] sm:rounded-[36px] md:rounded-[40px] border border-white/15 bg-gradient-to-b from-[#15151A] via-[#111115] to-[#0D0D11] p-5 sm:p-7 md:p-10 hover:border-white/40 hover:-translate-y-1 hover:shadow-[0_20px_45px_-15px_rgba(0,0,0,0.85)] transition-all duration-300"
              >
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 pb-5 border-b border-white/10">
                  <div className="flex items-center gap-3.5 sm:gap-6">
                    {/* Dynamic Holographic / Metallic Number */}
                    <span
                      className="font-black bg-gradient-to-b from-white/40 via-white/20 to-white/5 group-hover:from-white group-hover:to-cyan-200/80 bg-clip-text text-transparent leading-none select-none flex-shrink-0 transition-all duration-300 drop-shadow-sm group-hover:drop-shadow-[0_0_20px_rgba(215,226,234,0.35)]"
                      style={{ fontSize: 'clamp(2rem, 5vw, 68px)' }}
                    >
                      {item.number}
                    </span>

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm sm:text-lg font-light text-[#D7E2EA]/90 group-hover:text-white transition-colors">
                          {item.company}
                        </span>
                        <span className="text-[#D7E2EA]/40">•</span>
                        <span className="text-[10px] sm:text-xs uppercase tracking-wider px-2 py-0.5 rounded-full border border-white/15 text-[#D7E2EA]/70 bg-white/[0.03]">
                          {item.type}
                        </span>
                        {item.isActive && (
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-[10px] font-mono tracking-wider ml-1">
                            <span className="relative flex h-1.5 w-1.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                            </span>
                            Active
                          </span>
                        )}
                      </div>

                      <h3 className="font-medium uppercase tracking-tight text-lg sm:text-2xl md:text-3xl text-[#D7E2EA] group-hover:text-white transition-colors">
                        {item.role}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-col md:items-end gap-1">
                    <span className="text-xs sm:text-sm font-light uppercase tracking-wider text-[#D7E2EA]/60 font-mono">
                      {item.period}
                    </span>
                    {item.dateNote && (
                      <span className="text-[11px] font-light text-[#D7E2EA]/70 italic">
                        {item.dateNote}
                      </span>
                    )}
                  </div>
                </div>

                {/* Role Transition Highlight Callout (Chloia) */}
                {item.transitionNote && (
                  <div className="mt-4 p-3.5 rounded-xl border-l-2 border-cyan-400/80 bg-gradient-to-r from-cyan-950/30 via-white/[0.02] to-transparent border-t border-r border-b border-white/[0.06] text-xs font-light text-[#D7E2EA]/85 leading-relaxed flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-white uppercase tracking-wider text-[11px] mr-1.5">
                        Role Transition:
                      </span>
                      {item.transitionNote}
                    </div>
                  </div>
                )}

                {/* Highlights List with Animated Chevron */}
                <div className="pt-4 sm:pt-5 flex flex-col gap-4">
                  <ul className="space-y-2.5">
                    {item.highlights.map((highlight, hIdx) => (
                      <li
                        key={hIdx}
                        className="group/item flex items-start gap-2.5 text-xs sm:text-sm font-light text-[#D7E2EA]/85 leading-relaxed"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-cyan-400/70 group-hover/item:text-cyan-300 group-hover/item:translate-x-1 flex-shrink-0 mt-1 transition-all duration-200" />
                        <span className="group-hover/item:text-white transition-colors">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills tags with Interactive Glow & Hover Scale */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full bg-[#18181E] border border-white/10 text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#D7E2EA]/75 hover:scale-105 hover:bg-white/10 hover:border-cyan-400/40 hover:text-white hover:shadow-[0_0_15px_rgba(79,140,255,0.15)] transition-all duration-200 cursor-default select-none"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </FadeIn>
          ))}
        </div>

        {/* Education & Leadership Two-Column Grid with Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
          {/* Education */}
          <FadeIn delay={0.2} y={30} className="h-full">
            <SpotlightCard
              spotlightColor="rgba(79, 140, 255, 0.08)"
              className="group rounded-[28px] sm:rounded-[36px] md:rounded-[40px] border border-white/15 bg-gradient-to-b from-[#15151A] via-[#111115] to-[#0D0D11] p-5 sm:p-7 md:p-10 h-full flex flex-col justify-between hover:border-white/35 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA]/70">
                    Academic Credentials
                  </span>
                  <div className="p-2 rounded-xl bg-white/5 text-cyan-400 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="font-black uppercase tracking-tight text-2xl sm:text-3xl text-[#D7E2EA] group-hover:text-white mb-6 transition-colors">
                  Education
                </h3>

                <div className="space-y-6">
                  {educationList.map((edu, idx) => (
                    <div
                      key={idx}
                      className={`group/edu ${
                        idx !== 0 ? 'pt-6 border-t border-white/10' : ''
                      }`}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <h4 className="font-medium text-base sm:text-lg text-[#D7E2EA] group-hover/edu:text-white transition-colors">
                          {edu.degree}
                        </h4>
                        <span
                          className={`text-[10px] uppercase font-mono tracking-wider px-2.5 py-0.5 rounded-full border ${edu.badgeColor}`}
                        >
                          {edu.status}
                        </span>
                      </div>
                      <p className="font-light text-sm text-[#D7E2EA]/75 mt-1 leading-snug">
                        {edu.institution}
                      </p>
                      <span className="text-xs font-mono text-[#D7E2EA]/60 block mt-1.5">
                        {edu.period}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </FadeIn>

          {/* Leadership & Activities */}
          <FadeIn delay={0.3} y={30} className="h-full">
            <SpotlightCard
              spotlightColor="rgba(155, 123, 255, 0.08)"
              className="group rounded-[28px] sm:rounded-[36px] md:rounded-[40px] border border-white/15 bg-gradient-to-b from-[#15151A] via-[#111115] to-[#0D0D11] p-5 sm:p-7 md:p-10 h-full flex flex-col justify-between hover:border-white/35 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA]/70">
                    Campus &amp; Community
                  </span>
                  <div className="p-2 rounded-xl bg-white/5 text-purple-400 group-hover:scale-110 transition-transform">
                    <Award className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="font-black uppercase tracking-tight text-2xl sm:text-3xl text-[#D7E2EA] group-hover:text-white mb-6 transition-colors">
                  Leadership &amp; Activities
                </h3>

                <div className="space-y-6">
                  {leadershipList.map((lead, idx) => (
                    <div
                      key={idx}
                      className={`group/lead ${
                        idx !== 0 ? 'pt-6 border-t border-white/10' : ''
                      }`}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <h4 className="font-medium text-base sm:text-lg text-[#D7E2EA] group-hover/lead:text-white transition-colors">
                          {lead.title}
                        </h4>
                        <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded-full border border-purple-500/25 bg-purple-500/10 text-purple-300">
                          {lead.tag}
                        </span>
                      </div>
                      <p className="text-xs uppercase font-mono tracking-wider text-[#D7E2EA]/60 mt-0.5">
                        {lead.organization}
                      </p>
                      <p className="font-light text-xs sm:text-sm text-[#D7E2EA]/80 mt-2 leading-relaxed">
                        {lead.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
