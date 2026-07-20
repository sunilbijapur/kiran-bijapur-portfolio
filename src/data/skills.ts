export interface SkillGroup {
  id: string;
  title: string;
  skills: { name: string; level: number }[]; // level 0-100
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'sk-technical',
    title: 'Technical & Laboratory Skills',
    skills: [
      { name: 'Electrocatalyst Synthesis & Characterisation', level: 92 },
      { name: 'Nanomaterial Synthesis (Biomass-Derived Carbon)', level: 95 },
      { name: 'Electrochemical Analysis (HER/OER, LSV, EIS)', level: 90 },
      { name: 'Nanofluid Formulation & Thermophysical Testing', level: 88 },
      { name: 'Material Characterisation (XRD, SEM, TEM, XPS)', level: 85 },
    ],
  },
  {
    id: 'sk-research',
    title: 'Research Management',
    skills: [
      { name: 'Scientific Proposal Evaluation', level: 90 },
      { name: 'Research Funding Call Design', level: 85 },
      { name: 'Technology Assessment', level: 82 },
      { name: 'Programme & Project Management', level: 88 },
    ],
  },
  {
    id: 'sk-transferable',
    title: 'Transferable & Communication Skills',
    skills: [
      { name: 'Scientific Writing & Publication', level: 90 },
      { name: 'Grant Writing', level: 85 },
      { name: 'Stakeholder Engagement & Policy Liaison', level: 84 },
      { name: 'Mentoring & Teaching', level: 88 },
    ],
  },
];
