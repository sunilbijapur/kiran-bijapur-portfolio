/**
 * Central site configuration and researcher profile data.
 * Edit this file to update names, contact details, social links, and
 * headline research metrics used across the site.
 */

export interface SocialLink {
  label: string;
  href: string;
  icon: 'scholar' | 'orcid' | 'scopus' | 'researchgate' | 'linkedin' | 'github' | 'email';
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
}

export const site = {
  name: 'Dr. Kiran Bijapur',
  credentials: 'MRSC',
  fullTitle: 'Dr. Kiran Bijapur, MRSC',
  roles: ['Materials Chemist', 'Green Hydrogen Researcher', 'Sustainable Energy Scientist'],
  tagline: 'Advancing Sustainable Materials for a Greener Future',
  position: 'Researcher & Program Manager',
  organisation: 'Department of Science and Technology (DST), Government of India',
  supervisor: 'Dr. Ranjith Krishna Pai, FRSC, Scientist F',
  phdInstitution: 'CHRIST (Deemed to be University), Bengaluru',
  email: 'bijapursunil880@gmail.com',
  location: 'New Delhi, India',
  siteUrl: 'https://kiranbijapur.example.com',
};

export const socialLinks: SocialLink[] = [
  { label: 'Google Scholar', href: 'https://scholar.google.com/', icon: 'scholar' },
  { label: 'ORCID', href: 'https://orcid.org/', icon: 'orcid' },
  { label: 'Scopus', href: 'https://www.scopus.com/', icon: 'scopus' },
  { label: 'ResearchGate', href: 'https://www.researchgate.net/', icon: 'researchgate' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/', icon: 'github' },
  { label: 'Email', href: 'mailto:bijapursunil880@gmail.com', icon: 'email' },
];

// Headline counters shown on the homepage hero.
// Replace placeholder values with verified figures before publishing.
export const heroStats: StatItem[] = [
  { label: 'Publications', value: 14 },
  { label: 'Patents', value: 3 },
  { label: 'Awards', value: 6 },
  { label: 'Research Projects', value: 5 },
  { label: 'Teaching Experience', value: 3, suffix: ' yrs' },
  { label: 'Research Grants', value: 4 },
];

// Extended metrics shown on the Research Impact page.
export const impactStats: StatItem[] = [
  { label: 'Publications', value: 14 },
  { label: 'Patents Filed', value: 3 },
  { label: 'Awards & Honours', value: 6 },
  { label: 'Conferences', value: 12 },
  { label: 'Projects', value: 5 },
  { label: 'Research Grants', value: 4 },
  { label: 'Invited Talks', value: 8 },
  { label: 'Students Mentored', value: 10 },
];

export const researchInterests: string[] = [
  'Green Hydrogen and Seawater Electrolysis',
  'Electrocatalysis (HER & OER)',
  'Biomass-Derived Functional Nanomaterials',
  'Carbon Nanostructures and Nanocomposites',
  'Sustainable Materials Chemistry',
  'Thermal Management and Nanofluids',
  'Energy Storage and Conversion',
  'Circular Economy and Waste-to-Wealth Technologies',
];

export const researchVision =
  'To develop advanced functional materials and electrocatalytic technologies that accelerate the global transition toward green hydrogen, clean energy, and a sustainable circular economy by bridging fundamental materials science with real-world technological innovation.';

export const aboutParagraphs: string[] = [
  'I am Dr. Kiran Bijapur, MRSC, a Materials Chemist and Member of the Royal Society of Chemistry (MRSC) with research interests in sustainable nanomaterials, electrocatalysis, green hydrogen, and advanced energy materials. My work is driven by the goal of developing innovative material solutions for clean energy, environmental sustainability, and next-generation energy conversion technologies.',
  'During my PhD at CHRIST (Deemed to be University), Bengaluru, I focused on the development of biomass-derived carbon nanomaterials through a sustainable waste-to-wealth approach. My research investigated the influence of particle size, morphology, and surface chemistry on the thermophysical properties of nanofluids, contributing to the development of advanced thermal management technologies. This work resulted in high-impact publications, Indian patents, competitive research funding, and national and international recognition.',
  'Currently, I serve as a Researcher and Program Manager at the Department of Science and Technology (DST), Government of India, where I contribute to national initiatives in Green Hydrogen, Clean Energy, and Advanced Energy Materials. Under the guidance of Dr. Ranjith Krishna Pai, FRSC, Scientist F, I support the scientific evaluation of research proposals, development of new funding calls, technology assessment, and research program planning in the areas of clean energy, with a particular emphasis on green hydrogen and materials for energy storage and conversion.',
  'I am actively involved in developing advanced electrocatalysts for sustainable green hydrogen production, exploring rare-earth element doping to improve the efficiency, durability, and catalytic performance of seawater electrolysis. My research also focuses on catalyst design, electrochemical energy conversion, HER/OER electrocatalysis, and advanced materials for green hydrogen and clean energy technologies, while contributing to broader research activities that support India\u2019s clean energy mission.',
  'My research interests include green hydrogen, electrocatalysis, biomass-derived functional nanomaterials, carbon nanostructures, energy storage, thermal management, sustainable materials chemistry, and circular economy technologies. I am passionate about translating fundamental materials research into scalable technologies with real-world impact and welcome international collaborations, interdisciplinary research partnerships, and postdoctoral opportunities in advanced materials, sustainable energy, and green hydrogen technologies.',
];

export const closingStatement =
  'I welcome international collaborations, interdisciplinary research partnerships and postdoctoral opportunities.';

export const currentPosition = {
  title: 'Researcher & Program Manager',
  organisation: 'Department of Science and Technology (DST), Government of India',
  summary:
    'Currently, I contribute to India\u2019s national research and innovation ecosystem by supporting Green Hydrogen and Clean Energy initiatives. My role combines scientific research with research management, enabling the translation of emerging technologies into impactful national programs.',
  responsibilities: [
    'Developing advanced electrocatalysts for seawater electrolysis and sustainable hydrogen production.',
    'Designing LDH-based and carbon-based catalytic materials for efficient HER and OER reactions.',
    'Supporting technical evaluation and scientific review of research proposals submitted under national funding programs.',
    'Contributing to technology assessment, research planning, project documentation, and innovation strategy.',
    'Engaging with researchers, academic institutions, industries, and policymakers to accelerate clean-energy technologies and promote translational research.',
  ],
};

export const openToCollaboration =
  'I welcome collaborations in green hydrogen, electrocatalysis, advanced nanomaterials, biomass valorization, sustainable energy, and interdisciplinary materials research. I am also interested in postdoctoral opportunities, international research partnerships, and industry\u2013academia collaborations focused on clean energy and advanced functional materials.';

export const dstResponsibilities: string[] = [
  'Evaluating scientific research proposals',
  'Developing new national funding calls',
  'Supporting research program planning',
  'Technology assessment',
  'Scientific programme management',
  'Green Hydrogen Mission',
];
