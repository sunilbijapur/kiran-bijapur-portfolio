/**
 * Patents data.
 * SAMPLE placeholder entries — replace with your verified Indian Patent
 * Office (or international) application/grant numbers and status before
 * publishing.
 */

export interface Patent {
  id: string;
  title: string;
  patentNumber: string;
  status: 'Granted' | 'Published' | 'Filed' | 'Under Examination';
  filingYear: number;
  description: string;
  inventors: string;
  isSample: true;
}

export const patents: Patent[] = [
  {
    id: 'pat-01',
    title: 'A Process for Synthesis of Biomass-Derived Carbon Nanomaterials for Nanofluid Applications',
    patentNumber: 'Application No. XXXXXXXXXX (India) — placeholder',
    status: 'Filed',
    filingYear: 2022,
    description:
      'Sample placeholder: describes a scalable waste-to-wealth process converting agricultural biomass into functional carbon nanomaterials for thermal management fluids.',
    inventors: 'Bijapur, K. et al.',
    isSample: true,
  },
  {
    id: 'pat-02',
    title: 'Rare-Earth Doped Electrocatalyst Composition for Seawater Electrolysis',
    patentNumber: 'Application No. XXXXXXXXXX (India) — placeholder',
    status: 'Under Examination',
    filingYear: 2024,
    description:
      'Sample placeholder: covers a catalyst composition and doping method to enhance HER/OER activity and durability in saline electrolytes.',
    inventors: 'Bijapur, K. et al.',
    isSample: true,
  },
  {
    id: 'pat-03',
    title: 'Method for Tuning Thermophysical Properties of Nanofluids via Surface Functionalisation',
    patentNumber: 'Application No. XXXXXXXXXX (India) — placeholder',
    status: 'Published',
    filingYear: 2021,
    description:
      'Sample placeholder: a surface-chemistry-based method for controlling nanofluid viscosity and thermal conductivity for industrial cooling systems.',
    inventors: 'Bijapur, K. et al.',
    isSample: true,
  },
];
