export interface ResearchTheme {
  id: string;
  title: string;
  summary: string;
  points: string[];
}

export const currentResearch: ResearchTheme[] = [
  {
    id: 'cr-01',
    title: 'Electrocatalysts for Seawater Electrolysis',
    summary: 'Designing LDH-based and carbon-based catalytic materials for efficient, durable HER and OER reactions in saline electrolytes to enable direct seawater splitting.',
    points: [
      'Rare-earth element doping to improve catalytic efficiency and durability',
      'Structure–activity relationships in layered double hydroxides',
      'Stability testing under simulated seawater conditions',
    ],
  },
  {
    id: 'cr-02',
    title: 'Green Hydrogen & Clean Energy Programme Management',
    summary: 'Supporting India\u2019s Green Hydrogen Mission through scientific evaluation of research proposals, technology assessment, and design of new national funding calls.',
    points: [
      'Scientific review of proposals for national funding programmes',
      'Technology readiness assessment for emerging clean-energy solutions',
      'Research programme planning and policy engagement',
    ],
  },
];

export const pastResearch: ResearchTheme[] = [
  {
    id: 'pr-01',
    title: 'Biomass-Derived Carbon Nanomaterials (PhD Research)',
    summary: 'Developed a sustainable waste-to-wealth approach converting biomass into functional carbon nanomaterials at CHRIST (Deemed to be University), Bengaluru.',
    points: [
      'Influence of particle size, morphology and surface chemistry on nanofluid thermophysical properties',
      'Scalable, low-cost synthesis routes from agricultural waste',
      'Applications in advanced thermal management technologies',
    ],
  },
];
