/**
 * Awards & Recognition data.
 * SAMPLE placeholder entries — replace with verified award names, awarding
 * bodies and years.
 */

export interface Award {
  id: string;
  title: string;
  awardingBody: string;
  year: number;
  category: 'Award' | 'Fellowship' | 'Recognition' | 'Grant';
  description: string;
  isSample: true;
}

export const awards: Award[] = [
  {
    id: 'awd-01',
    title: 'Member, Royal Society of Chemistry (MRSC)',
    awardingBody: 'Royal Society of Chemistry, UK',
    year: 2023,
    category: 'Fellowship',
    description: 'Professional membership recognising contributions to the chemical sciences.',
    isSample: true,
  },
  {
    id: 'awd-02',
    title: 'Best PhD Thesis Award (Placeholder)',
    awardingBody: 'CHRIST (Deemed to be University), Bengaluru',
    year: 2022,
    category: 'Award',
    description: 'Sample placeholder recognising doctoral research on biomass-derived nanomaterials.',
    isSample: true,
  },
  {
    id: 'awd-03',
    title: 'Young Researcher Recognition (Placeholder)',
    awardingBody: 'National Conference on Materials Science — placeholder',
    year: 2021,
    category: 'Recognition',
    description: 'Sample placeholder for a conference-level recognition or best-paper award.',
    isSample: true,
  },
  {
    id: 'awd-04',
    title: 'Competitive Research Grant (Placeholder)',
    awardingBody: 'Funding Agency Placeholder',
    year: 2024,
    category: 'Grant',
    description: 'Sample placeholder for a competitively awarded research grant supporting green hydrogen work.',
    isSample: true,
  },
  {
    id: 'awd-05',
    title: 'Travel Fellowship for International Conference (Placeholder)',
    awardingBody: 'Funding Body Placeholder',
    year: 2023,
    category: 'Grant',
    description: 'Sample placeholder for a travel grant supporting presentation of research abroad.',
    isSample: true,
  },
  {
    id: 'awd-06',
    title: 'Departmental Recognition for Programme Management (Placeholder)',
    awardingBody: 'Department of Science and Technology, Government of India',
    year: 2025,
    category: 'Recognition',
    description: 'Sample placeholder recognising contribution to national funding-call development.',
    isSample: true,
  },
];
