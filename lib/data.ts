import { Building2, HardHat, ShieldCheck, Star, Zap } from 'lucide-react';

export type ServiceType = {
  slug: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  image: string;
};

export const COMPANY = {
  name: 'ON-Eaglewings Group',
  tagline: 'You Build, We Finish',
  founded: 2004,
  description:
    'A premier construction, engineering, finishes, and renewable energy corporation operating across South Africa and Zimbabwe. Founded 20 years ago in South Africa, with expansion into Harare, Zimbabwe.',
  phoneSA: '+27 73 703 0213',
  phoneZim: '+263 789 068 104',
  email: 'info@on-eaglewingsgroup.com',
  addressSA: 'Gauteng HQ, South Africa',
  addressZim: 'Harare Branch, Zimbabwe',
  yearsExperience: '20+',
  countries: 2,
  divisions: 9,
};

export const SERVICES: ServiceType[] = [
  {
    slug: 'steel-glass-balustrades',
    title: 'Steel & Glass Balustrades',
    description: 'Precision-crafted steel and glass balustrade systems for residential and commercial properties.',
    icon: 'Squares',
    features: ['Stainless steel framing', 'Tempered safety glass', 'Custom measurements', 'SABS compliant'],
    image: '/images/services/balustrades.webp',
  },
  {
    slug: 'pools',
    title: 'Pools',
    description: 'Luxury swimming pool design and construction. From infinity pools to family leisure pools.',
    icon: 'Pool',
    features: ['Infinity edge designs', 'Filtration systems', 'Pool heating', 'Landscape integration'],
    image: '/images/services/pools.webp',
  },
  {
    slug: 'steel-staircases',
    title: 'Steel Staircases',
    description: 'Architectural steel staircases for modern interiors and exteriors.',
    icon: 'Staircase',
    features: ['Structural engineering', 'Fire-rated designs', 'Custom fabrication', 'Load certified'],
    image: '/images/services/staircases.webp',
  },
  {
    slug: 'decking',
    title: 'Decking',
    description: 'Premium timber and composite decking solutions for outdoor living spaces.',
    icon: 'Sailboat',
    features: ['Hardwood decking', 'Composite materials', 'Substructure design', 'Weather sealing'],
    image: '/images/services/decking.webp',
  },
  {
    slug: 'waterproofing',
    title: 'Waterproofing',
    description: 'Professional waterproofing systems including bitumen tanking for basements, roofs, and wet areas.',
    icon: 'Droplet',
    features: ['Bitumen tanking', 'Roof waterproofing', 'Basement protection', 'Wet area sealing'],
    image: '/images/services/waterproofing.webp',
  },
  {
    slug: 'solar-energy',
    title: 'Solar Energy',
    description: 'Renewable energy solutions including solar PV installation, battery storage, and off-grid systems.',
    icon: 'Sun',
    features: ['Solar PV systems', 'Battery storage', 'Off-grid solutions', 'Energy audits'],
    image: '/images/services/solar.webp',
  },
  {
    slug: 'roller-shutters',
    title: 'Roller Shutters',
    description: 'Security roller shutters for commercial and residential properties.',
    icon: 'Shutter',
    features: ['Manual shutters', 'Automated systems', 'Security rated', 'Weather protection'],
    image: '/images/services/roller-shutters.webp',
  },
  {
    slug: 'garage-doors',
    title: 'Garage Doors',
    description: 'Custom garage door solutions including sectional, roller, and swing designs.',
    icon: 'Garage',
    features: ['Sectional doors', 'Roller doors', 'Automated openers', 'Custom finishes'],
    image: '/images/services/garage-doors.webp',
  },
  {
    slug: 'wall-skimming',
    title: 'Wall Skimming',
    description: 'Professional wall skimming and plastering services for smooth, flawless interior finishes.',
    icon: 'Palette',
    features: ['Plaster skimming', 'Surface preparation', 'Smooth finishes', 'Interior & exterior'],
    image: '/images/services/wall-skimming.webp',
  },
];

export const PROJECTS = [
  {
    id: '1',
    title: 'O.R. Tambo Airport Fire Escape Staircase',
    location: 'Gauteng, South Africa',
    category: 'Steel Staircases',
    image: '/images/projects/ortambo.webp',
    loadSpecs: 'Fire-rated, 5kN/m2 live load',
    description: 'Flagship project featuring a complete fire escape staircase system at O.R. Tambo International Airport.',
    downloadUrl: '/pdfs/ortambo-case-study.pdf',
  },
  {
    id: '2',
    title: 'Harare Solar Farm Installation',
    location: 'Harare, Zimbabwe',
    category: 'Solar Energy',
    image: '/images/projects/harare-solar.webp',
    loadSpecs: '500kW PV array, 2MWh battery storage',
    description: 'Large-scale solar energy installation for commercial client in Harare.',
    downloadUrl: '/pdfs/harare-solar-case-study.pdf',
  },
  {
    id: '3',
    title: 'Sandton Luxury Residence Pool & Decking',
    location: 'Sandton, South Africa',
    category: 'Pools',
    image: '/images/projects/sandton-pool.webp',
    loadSpecs: '60,000L capacity, composite decking',
    description: 'Luxury residential pool with infinity edge and composite decking.',
    downloadUrl: '/pdfs/sandton-pool-case-study.pdf',
  },
  {
    id: '4',
    title: 'Pretoria Office Balustrade System',
    location: 'Pretoria, South Africa',
    category: 'Steel & Glass Balustrades',
    image: '/images/projects/pretoria-balustrade.webp',
    loadSpecs: '1.5kN lateral load rated',
    description: 'Complete stainless steel and glass balustrade system for multi-story office building.',
    downloadUrl: '/pdfs/pretoria-balustrade-case-study.pdf',
  },
  {
    id: '5',
    title: 'Bulawayo Waterproofing Package',
    location: 'Bulawayo, Zimbabwe',
    category: 'Waterproofing',
    image: '/images/projects/bulawayo-waterproofing.webp',
    loadSpecs: 'Bitumen tanking, 10-year warranty',
    description: 'Commercial basement waterproofing using bitumen tanking system.',
    downloadUrl: '/pdfs/bulawayo-waterproofing-case-study.pdf',
  },
];

export type ProjectType = (typeof PROJECTS)[number];

export const BRANCHES = [
  {
    name: 'Gauteng HQ',
    country: 'South Africa',
    phone: '+27 73 703 0213',
    email: 'gauteng@on-eaglewingsgroup.com',
  },
  {
    name: 'Harare Branch',
    country: 'Zimbabwe',
    phone: '+263 789 068 104',
    email: 'harare@on-eaglewingsgroup.com',
  },
];

export const LEADERSHIP_VALUES = [
  {
    title: 'Safety First',
    description: 'We protect our teams, clients, and communities through disciplined processes and rigorous site controls.',
    icon: ShieldCheck,
    image: '/images/projects/bulawayo-waterproofing.webp',
  },
  {
    title: 'Integrity',
    description: 'Every commitment is delivered with honesty, accountability, and transparent communication.',
    icon: Star,
    image: '/images/projects/pretoria-balustrade.webp',
  },
  {
    title: 'Innovation',
    description: 'We embrace modern methods, efficient systems, and practical engineering to deliver better outcomes.',
    icon: Zap,
    image: '/images/projects/harare-solar.webp',
  },
  {
    title: 'Craftsmanship',
    description: 'Precision in execution is the standard that defines quality across our specialized divisions.',
    icon: HardHat,
    image: '/images/services/staircases.webp',
  },
];

export type BranchType = (typeof BRANCHES)[number];
