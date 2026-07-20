/**
 * Academic timeline data — chronological milestones.
 * SAMPLE placeholders for education/career years — verify before publishing.
 */

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  organisation: string;
  description: string;
}

export const timelineEvents: TimelineEvent[] = [
  { id: 'tl-01', year: '2018', title: 'Commenced PhD in Materials Chemistry', organisation: 'CHRIST (Deemed to be University), Bengaluru', description: 'Began doctoral research on biomass-derived carbon nanomaterials and nanofluid thermophysics.' },
  { id: 'tl-02', year: '2021', title: 'First Patent Filed (Placeholder)', organisation: 'Indian Patent Office', description: 'Sample placeholder — filed patent application on nanomaterial synthesis methodology.' },
  { id: 'tl-03', year: '2022', title: 'PhD Awarded', organisation: 'CHRIST (Deemed to be University), Bengaluru', description: 'Completed doctoral studies with high-impact publications and national recognition.' },
  { id: 'tl-04', year: '2023', title: 'Elected MRSC', organisation: 'Royal Society of Chemistry, UK', description: 'Admitted as a Member of the Royal Society of Chemistry.' },
  { id: 'tl-05', year: '2023', title: 'Joined DST as Researcher & Program Manager', organisation: 'Department of Science and Technology, Government of India', description: 'Began contributing to Green Hydrogen, Clean Energy and Advanced Energy Materials initiatives.' },
  { id: 'tl-06', year: '2024', title: 'Advanced Electrocatalyst Research Programme', organisation: 'DST, Government of India', description: 'Leading research into rare-earth doped catalysts for seawater electrolysis.' },
  { id: 'tl-07', year: '2025', title: 'Ongoing National Funding Call Development', organisation: 'DST, Government of India', description: 'Supporting the design of new funding calls for the green hydrogen research ecosystem.' },
];
