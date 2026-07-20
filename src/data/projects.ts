/**
 * Projects & Grants data.
 * SAMPLE placeholder entries — replace with verified project titles,
 * funding agencies, amounts and collaborators.
 */

export interface Project {
  id: string;
  title: string;
  role: 'Principal Investigator' | 'Co-Investigator' | 'Program Manager' | 'Researcher';
  fundingAgency: string;
  duration: string;
  amount?: string;
  collaborators?: string;
  description: string;
  status: 'Ongoing' | 'Completed';
  isSample: true;
}

export const projects: Project[] = [
  {
    id: 'proj-01',
    title: 'Advanced Electrocatalysts for Seawater Electrolysis and Green Hydrogen Production',
    role: 'Researcher',
    fundingAgency: 'Department of Science and Technology (DST), Government of India',
    duration: '2023 — Ongoing',
    collaborators: 'National Green Hydrogen Mission stakeholders (placeholder)',
    description:
      'Sample placeholder: development of rare-earth doped LDH and carbon-based catalysts to improve HER/OER efficiency and durability for saline electrolytes.',
    status: 'Ongoing',
    isSample: true,
  },
  {
    id: 'proj-02',
    title: 'Biomass-Derived Nanomaterials for Sustainable Thermal Management (PhD Research)',
    role: 'Principal Investigator',
    fundingAgency: 'CHRIST (Deemed to be University), Bengaluru',
    duration: '2018 — 2022',
    description:
      'Sample placeholder: doctoral research programme on waste-to-wealth conversion of biomass into functional carbon nanomaterials for nanofluid applications.',
    status: 'Completed',
    isSample: true,
  },
  {
    id: 'proj-03',
    title: 'National Funding Call Development — Green Hydrogen & Advanced Energy Materials',
    role: 'Program Manager',
    fundingAgency: 'Department of Science and Technology (DST), Government of India',
    duration: '2023 — Ongoing',
    description:
      'Sample placeholder: scientific evaluation of research proposals and design of new national funding calls supporting the clean-energy research ecosystem.',
    status: 'Ongoing',
    isSample: true,
  },
  {
    id: 'proj-04',
    title: 'Circular Economy Approaches to Carbon Nanomaterial Synthesis (Placeholder)',
    role: 'Co-Investigator',
    fundingAgency: 'Funding Agency Placeholder',
    duration: '2021 — 2023',
    description:
      'Sample placeholder: collaborative project exploring agricultural-waste valorisation routes to functional nanomaterials.',
    status: 'Completed',
    isSample: true,
  },
  {
    id: 'proj-05',
    title: 'Industry–Academia Collaboration on Catalyst Scale-Up (Placeholder)',
    role: 'Co-Investigator',
    fundingAgency: 'Industry Partner Placeholder',
    duration: '2024 — Ongoing',
    description:
      'Sample placeholder: translational project assessing scale-up feasibility of electrocatalyst formulations for pilot-scale hydrogen production.',
    status: 'Ongoing',
    isSample: true,
  },
];
