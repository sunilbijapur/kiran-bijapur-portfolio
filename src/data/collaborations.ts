export interface Collaboration {
  id: string;
  name: string;
  type: 'Academic' | 'Government' | 'Industry' | 'International';
  description: string;
}

// SAMPLE placeholders — replace with verified collaborating institutions.
export const collaborations: Collaboration[] = [
  { id: 'col-01', name: 'CHRIST (Deemed to be University), Bengaluru', type: 'Academic', description: 'Doctoral research collaboration on biomass-derived nanomaterials and nanofluids.' },
  { id: 'col-02', name: 'Department of Science and Technology, Government of India', type: 'Government', description: 'National research programme management for Green Hydrogen and Clean Energy.' },
  { id: 'col-03', name: 'Industry Partner Placeholder', type: 'Industry', description: 'Translational collaboration on electrocatalyst scale-up for pilot-scale hydrogen production.' },
  { id: 'col-04', name: 'International Research Group Placeholder', type: 'International', description: 'Placeholder for an international collaborative research partnership.' },
];
