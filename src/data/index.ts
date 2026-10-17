import type { NavLink, Project, ExperienceEntry, SkillCategory, ServiceItem } from '../types';

// ─── Navigation ────────────────────────────────────────────────────────────────
export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
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
    title: 'SEO & Organic Growth',
    description:
      'Search-focused optimization built around keyword research, search intent, on-page SEO, content structure, competitor analysis, and organic visibility.',
    capabilities: [
      'Keyword Research',
      'On-page SEO',
      'Content Optimization',
      'SEO Audits',
      'Competitor Research',
      'Internal Linking',
      'Search Intent Analysis',
    ],
  },
  {
    number: '02',
    title: 'Generative Engine Optimization (GEO)',
    description:
      'Content and visibility strategies designed to help brands strengthen their discoverability across evolving AI-powered search experiences.',
    capabilities: [
      'GEO Content Strategy',
      'AI Search Visibility',
      'Brand Entity Optimization Concepts',
      'AI Citation & Mention Analysis',
      'Competitor Visibility Research',
      'AI-Search-Focused Content Optimization',
    ],
  },
  {
    number: '03',
    title: 'E-commerce & Marketplace Optimization',
    description:
      'Product catalog and listing optimization focused on relevance, clarity, discoverability, and the overall shopping experience.',
    capabilities: [
      'Amazon Listing Optimization',
      'Shopify Product Management',
      'Product Keyword Research',
      'Product Titles & Bullet Points',
      'Product Image Optimization',
      'Catalog Management',
      'Marketplace SEO',
    ],
  },
  {
    number: '04',
    title: 'Performance & Social Media Marketing',
    description:
      'Campaign and content execution combining audience understanding, creative development, paid media, and performance monitoring.',
    capabilities: [
      'Meta Ads',
      'Campaign Monitoring',
      'Social Media Strategy',
      'Creative Planning',
      'Content Calendars',
      'Performance Analysis',
    ],
  },
  {
    number: '05',
    title: 'Content Strategy & Website Development',
    description:
      'Digital content and website experiences that communicate brand value clearly and support organic discovery and audience engagement.',
    capabilities: [
      'SEO Content Strategy',
      'Blog Planning & Optimization',
      'Website Management',
      'Website Development',
      'Landing Page Content',
      'Social Media Content',
      'AI-Assisted Creative Workflows',
    ],
  },
];

// ─── Experience ────────────────────────────────────────────────────────────────
export const experiences: ExperienceEntry[] = [
  {
    id: 1,
    number: '01',
    organization: 'Chloia',
    role: 'Amazon E-commerce Listing Intern → Freelance E-commerce Professional',
    type: 'Internship → Freelance',
    period: 'Apr 2026 – Present',
    description:
      'Worked on Amazon listing creation and management, listing accuracy, product details, images, customization options, keyword research, and ongoing e-commerce operations. Internship ran from 26 April 2026 to 28 May 2026. Continued with broader freelance support across Amazon and Shopify, including product listing optimization, catalog management, and e-commerce SEO.',
    tags: ['Amazon SEO', 'Shopify', 'Product Listings', 'Catalog Management', 'E-commerce'],
  },
  {
    id: 2,
    number: '02',
    organization: 'GEO SEO Lab',
    role: 'SEO & Generative Engine Optimization',
    type: 'Part-time',
    description:
      'Worked on SEO and GEO strategies, content development, keyword planning, competitor research, LinkedIn creatives, and social media campaigns. Contributed to content focused on improving brand discovery across traditional search and AI-powered search experiences.',
    tags: ['SEO', 'Generative Engine Optimization', 'Content Strategy', 'Competitor Research', 'Social Media'],
  },
  {
    id: 3,
    number: '03',
    organization: 'Sri Ganpati Collection',
    role: 'Marketing & Digital Presence',
    type: 'Freelance',
    description:
      'Supported website management, social media, AI-assisted product creatives, Meta Ads, and campaign performance monitoring as part of digital marketing activities.',
    tags: ['Digital Marketing', 'Meta Ads', 'Social Media', 'Creative Strategy', 'Website Management'],
  },
  {
    id: 4,
    number: '04',
    organization: 'Ray Talent Hunt',
    role: 'Freelance Digital Marketing & Website Development',
    type: 'Freelance',
    description:
      'Supported website development and management, social media presence, and day-to-day digital marketing execution.',
    tags: ['Website Development', 'Website Management', 'Social Media', 'Digital Marketing'],
  },
];

// ─── Projects ──────────────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: 1,
    number: '01',
    name: 'GEO SEO Lab',
    category: 'SEO / GEO / Content Strategy',
    role: 'SEO & Generative Engine Optimization (Part-time)',
    summary:
      'SEO and AI-search-focused content and visibility work, including keyword strategies, competitor research, educational content, LinkedIn creatives, and social media campaigns.',
    tags: ['SEO', 'Generative Engine Optimization', 'AI Search Visibility', 'Content Strategy', 'Competitor Research'],
    details: [
      'Researched competitor visibility patterns across emerging AI search platforms.',
      'Developed content strategies aligned with user search intent and informational queries.',
      'Designed social media creatives and educational LinkedIn assets to communicate technical SEO concepts.',
      'Contributed to brand discovery workflows bridging traditional SEO and Generative Engine Optimization.',
    ],
    featured: true,
  },
  {
    id: 2,
    number: '02',
    name: 'Chloia',
    category: 'E-commerce / Amazon / Shopify',
    role: 'Amazon Listing Intern → Freelance E-commerce Specialist',
    summary:
      'E-commerce listing and catalog work spanning Amazon listing creation, keyword optimization, product information accuracy, product images, Shopify operations, and marketplace optimization.',
    tags: ['Amazon SEO', 'Shopify', 'Product Listings', 'Keyword Research', 'Catalog Management'],
    details: [
      'Created and optimized product listings on Amazon with relevant search terms and attributes.',
      'Structured clear titles, high-converting bullet points, and optimized product information.',
      'Managed catalog data, product variations, and image asset consistency.',
      'Extended e-commerce support to Shopify store catalog management and marketplace SEO.',
    ],
    featured: true,
  },
  {
    id: 3,
    number: '03',
    name: 'Sri Ganpati Collection',
    category: 'Digital Marketing / Paid Campaigns / Social Media',
    role: 'Marketing & Digital Presence',
    summary:
      'Digital marketing support involving website management, social media, AI-assisted product creatives, Meta Ads, and campaign performance monitoring.',
    tags: ['Digital Marketing', 'Meta Ads', 'Social Media', 'Creative Strategy', 'Website Management'],
    details: [
      'Managed store website updates, content maintenance, and product presentation.',
      'Created AI-assisted product imagery and visual creative variations for social channels.',
      'Configured and monitored Meta Ads campaigns to track ad impressions and performance.',
      'Coordinated day-to-day social media publishing and promotional messaging.',
    ],
  },
  {
    id: 4,
    number: '04',
    name: 'Ray Talent Hunt',
    category: 'Website Development / Digital Marketing',
    role: 'Freelance Digital Marketing & Web Development',
    summary:
      'Website development and management combined with social media support and day-to-day digital marketing activities.',
    tags: ['Website Development', 'Website Management', 'Social Media', 'Digital Marketing'],
    details: [
      'Developed and maintained the brand website to ensure clean layout and responsiveness.',
      'Managed digital presence and day-to-day operational marketing activities.',
      'Created social media posts and community communication materials.',
      'Ensured digital brand consistency across web pages and promotional touchpoints.',
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
      'Amazon Listing Optimization',
      'Shopify',
      'Product SEO',
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
      'Campaign Monitoring',
    ],
  },
  {
    category: 'Web & Creative',
    skills: [
      'Website Development',
      'Website Management',
      'AI-assisted Creative Workflows',
      'Digital Content Creation',
    ],
  },
];
