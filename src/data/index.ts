import type { NavLink, Project, ExperienceEntry, SkillCategory, ServiceItem } from '../types';

// ─── Navigation ────────────────────────────────────────────────────────────────
export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

// ─── Expertise Marquee ─────────────────────────────────────────────────────────
export const expertiseLabels: string[] = [
  'SEARCH ENGINE OPTIMIZATION',
  'GENERATIVE ENGINE OPTIMIZATION',
  'E-COMMERCE SEO',
  'AMAZON LISTING OPTIMIZATION',
  'SHOPIFY',
  'PERFORMANCE MARKETING',
  'CONTENT STRATEGY',
  'AI SEARCH VISIBILITY',
  'SOCIAL MEDIA MARKETING',
  'WEBSITE DEVELOPMENT',
];

// ─── Services ──────────────────────────────────────────────────────────────────
export const services: ServiceItem[] = [
  {
    number: '01',
    title: 'SEO & Generative Engine Optimization (GEO)',
    description:
      'Keyword research, search intent analysis, on-page SEO, content optimization, and technical SEO fundamentals to help websites improve organic discoverability. I also work on making content clear and useful for AI-powered search experiences.',
    capabilities: [
      'Keyword Research',
      'Search Intent Analysis',
      'On-Page SEO',
      'Content Optimization',
      'AI Search Visibility',
      'Technical SEO Fundamentals',
    ],
  },
  {
    number: '02',
    title: 'E-commerce & Marketplace Optimization',
    description:
      'Amazon Seller Central and Shopify catalog operations, product listing optimization, keyword research, product titles, bullet points, backend search terms, product variations, and catalog management.',
    capabilities: [
      'Amazon Seller Central',
      'Shopify Catalog Operations',
      'Product Listing Optimization',
      'Keyword Research',
      'Backend Search Terms',
      'Catalog Hygiene & Variations',
    ],
  },
  {
    number: '03',
    title: 'Performance Marketing & Paid Social',
    description:
      'Campaign planning, audience targeting, creative testing, lead generation, and campaign analysis across Meta Ads and relevant paid advertising channels. My approach focuses on measurable objectives and evidence-led optimization.',
    capabilities: [
      'Meta Ads',
      'Audience Targeting',
      'Creative Testing',
      'Lead Generation',
      'Budget Optimization',
      'Performance Analytics',
    ],
  },
  {
    number: '04',
    title: 'Analytics & Market Research',
    description:
      'GA4 analysis, competitor benchmarking, market research, lead pipeline analysis, and campaign performance reporting to help identify opportunities and make better marketing decisions.',
    capabilities: [
      'Google Analytics 4 (GA4)',
      'Competitor Benchmarking',
      'Market Research',
      'Pipeline Analysis',
      'Performance Reporting',
      'Data-Informed Insights',
    ],
  },
  {
    number: '05',
    title: 'Content Strategy & Social Media',
    description:
      'Editorial planning, SEO-informed blog content, social media calendars, LinkedIn content, platform-specific creative assets, and multi-channel content management.',
    capabilities: [
      'Editorial Planning',
      'SEO-Informed Blog Content',
      'Social Media Calendars',
      'LinkedIn Creative Assets',
      'Multi-Channel Content',
      'Meta Business Suite',
    ],
  },
];

// ─── Experience ────────────────────────────────────────────────────────────────
export const experiences: ExperienceEntry[] = [
  {
    id: 1,
    number: '01',
    organization: 'GEO SEO Lab',
    role: 'Content & Social Media Marketing Intern / Part-time',
    type: 'Internship / Part-time',
    period: 'April 2026 – Present',
    description:
      'Manage multi-channel content and social media activities across LinkedIn, Instagram, Facebook, X, and Reddit. Support SEO and GEO strategies through blog writing, keyword research, and content optimization. Research competitors and create LinkedIn visuals and educational content about SEO and AI-powered search.',
    tags: ['SEO', 'GEO', 'Content Strategy', 'Meta Business Suite', 'Competitor Research'],
  },
  {
    id: 2,
    number: '02',
    organization: 'Chloia',
    role: 'E-commerce Specialist (Previously Amazon Listing Intern)',
    type: 'Internship → Freelance',
    period: 'April 2026 – Present',
    description:
      'Started as an Amazon E-commerce Listing Intern (26 April 2026 – 28 May 2026), continuing with ongoing freelance e-commerce operations. Manage Amazon and Shopify product listings, catalog information, models, images, and customization options. Conduct keyword research, listing titles, bullet points, backend search terms, and catalog consistency.',
    tags: ['Amazon Seller Central', 'Shopify', 'Keyword Research', 'Catalog Management', 'E-commerce SEO'],
  },
  {
    id: 3,
    number: '03',
    organization: 'Moirét Consulting',
    role: 'Digital Strategy & Performance Marketing Intern',
    type: 'Internship',
    period: 'September – December 2025',
    description:
      'Supported on-page SEO and content optimization for B2B brand growth and consulting outreach. Conducted search intent analysis and competitor research. Developed SEO-driven blog plans and editorial calendars, and designed LinkedIn marketing assets.',
    tags: ['On-Page SEO', 'Search Intent', 'Blog Planning', 'B2B Strategy'],
  },
  {
    id: 4,
    number: '04',
    organization: 'Ray Talent Hunt',
    role: 'Freelance Digital Marketing & Web Development',
    type: 'Freelance',
    period: 'July 2025 – August 2026',
    description:
      'Developed and maintained the company website. Supported website management, social media content, and digital marketing activities. Assisted with promotional campaigns and brand visibility across channels.',
    tags: ['Website Development', 'Website Management', 'Social Media', 'Digital Strategy'],
  },
  {
    id: 5,
    number: '05',
    organization: 'Sri Ganpati Collection',
    role: 'Digital Marketing Freelancer',
    type: 'Freelance',
    period: 'July 2023 – June 2024',
    description:
      'Managed website and social media activities. Supported Meta Ads campaign targeting and budget optimization, achieving a reported 2× ROI. Produced 20+ product creatives using AI-assisted design tools and integrated on-page SEO practices.',
    tags: ['Meta Ads', 'Website SEO', 'AI-Assisted Creatives', 'Lead Generation'],
  },
  {
    id: 6,
    number: '06',
    organization: 'My Equation (formerly Tech Analogy)',
    role: 'Sales & Marketing Operations Intern',
    type: 'Internship',
    period: 'June – August 2023',
    description:
      'Identified 1,000+ prospective leads for targeted outreach. Supported pipeline development and direct client communication. Assisted with email marketing, outbound campaigns, and CRM reviews.',
    tags: ['Lead Research', 'Email Marketing', 'CRM', 'Market Research'],
  },
];

// ─── Projects ──────────────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: 1,
    number: '01',
    name: 'Ray Talent Hunt',
    category: 'Class 12th Olympiad Platform & Web Growth',
    role: 'Freelance Digital Marketing & Web Development',
    summary:
      'Architected and deployed the digital examination and registration portal for Ray Talent Hunt, a premier national Olympiad platform for Class 12th students, combining responsive web architecture with student acquisition funnels.',
    tags: ['Class 12th Olympiad', 'EdTech Web Portal', 'Student Registration Funnels', 'Exam System UI', 'Organic Search SEO'],
    details: [
      'Developed and maintained the national Olympiad examination and registration portal for Class 12 students.',
      'Implemented on-page technical SEO, syllabus guideline architectures, and participant onboarding funnels.',
      'Designed multi-channel digital marketing campaigns targeting high school students and educational institutions.',
      'Streamlined registration workflows, mock exam access, and scholarship program promotion.',
    ],
    featured: true,
  },
  {
    id: 2,
    number: '02',
    name: 'Chloia',
    category: 'Premium Mobile Covers & E-Commerce Operations',
    role: 'E-commerce Specialist (Previously Amazon Listing Intern)',
    summary:
      'Directed marketplace catalog operations and growth strategy for Chloia, a brand specializing in premium smartphone cases and MagSafe covers, managing Amazon Seller Central and Shopify Plus.',
    tags: ['Premium Mobile Covers', 'Amazon Seller Central', 'Shopify Plus', 'A+ Listing Optimization', '18.4% Conv Rate', 'MagSafe Cases'],
    details: [
      'Created and optimized product listings for premium mobile covers on Amazon with relevant search terms, attributes, and 18.4% conversion rate.',
      'Structured high-converting titles, protective feature bullet points, and modular A+ content showcasing MagSafe & drop-test specs.',
      'Managed phone model catalog variations (iPhone & flagship Android), parent-child variations, and image consistency.',
      'Coordinated real-time inventory synchronization across Amazon FBA and Shopify Plus storefronts.',
    ],
    featured: true,
  },
  {
    id: 3,
    number: '03',
    name: 'Sri Ganpati Collection',
    category: 'Performance Marketing & Digital Content',
    role: 'Digital Marketing Freelancer',
    summary:
      'Directed full-funnel performance marketing and paid social advertising, generating a verified 2.0X ROAS on Meta Ads. Produced 20+ AI-assisted ethnic apparel product creatives and administered the online store.',
    tags: ['Meta Ads Manager', '2.0X ROAS Delivered', 'AI Product Creatives', 'Ethnic Fashion E-Commerce', 'Funnel Optimization'],
    details: [
      'Managed store website operations, content updates, responsive UI maintenance, and product presentation.',
      'Produced 20+ AI-assisted luxury product creatives and festive social ad variations for Meta campaigns.',
      'Configured audience targeting, budget pacing, and creative A/B testing to achieve a verified 2.0X ROAS.',
      'Integrated Instagram Shop tag overlays and streamlined mobile e-commerce checkout flows.',
    ],
  },
];

// ─── Skills ────────────────────────────────────────────────────────────────────
export const skillCategories: SkillCategory[] = [
  {
    category: 'SEO & AI Search',
    skills: [
      'SEO',
      'Generative Engine Optimization',
      'Keyword Research',
      'On-page SEO',
      'Content Optimization',
      'Competitor Analysis',
      'AI Search Visibility',
    ],
  },
  {
    category: 'E-commerce',
    skills: [
      'Amazon Seller Central',
      'Shopify',
      'Product Listing Optimization',
      'Catalog Management',
      'Product Image Optimization',
    ],
  },
  {
    category: 'Marketing & Content',
    skills: [
      'Performance Marketing',
      'Meta Ads',
      'Social Media Marketing',
      'Content Strategy',
      'Creative Planning',
      'Campaign Optimization',
    ],
  },
  {
    category: 'Web & Analytics',
    skills: [
      'Website Development',
      'Website Management',
      'Google Analytics 4 (GA4)',
      'Lead Research',
      'CRM',
    ],
  },
];
