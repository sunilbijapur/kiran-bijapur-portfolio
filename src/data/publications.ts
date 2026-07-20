/**
 * Publications data.
 *
 * NOTE: The entries below are SAMPLE placeholders that follow the shape of a
 * real publication record (journal, DOI, impact factor, citations). They are
 * illustrative only — replace every field with your verified bibliographic
 * data (from Scopus / Google Scholar / ORCID) before publishing this site.
 */

export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi: string;
  impactFactor?: string;
  citations?: number;
  category: 'Journal Article' | 'Conference Paper' | 'Book Chapter' | 'Review';
  abstract: string;
  isSample: true;
}

export const publications: Publication[] = [
  {
    id: 'pub-01',
    title: 'Rare-Earth Doped NiFe Layered Double Hydroxide Electrocatalysts for Enhanced Seawater Electrolysis',
    authors: 'Bijapur, K. et al.',
    journal: 'Journal Name Placeholder — e.g., Journal of Materials Chemistry A',
    year: 2025,
    doi: '10.xxxx/placeholder-doi-01',
    impactFactor: 'Add IF',
    citations: 0,
    category: 'Journal Article',
    abstract:
      'Sample abstract placeholder: describes rare-earth element doping strategies used to improve HER/OER activity and long-term durability of LDH-based catalysts under simulated seawater conditions.',
    isSample: true,
  },
  {
    id: 'pub-02',
    title: 'Biomass-Derived Porous Carbon Nanomaterials via a Waste-to-Wealth Approach: Synthesis and Thermophysical Properties',
    authors: 'Bijapur, K. et al.',
    journal: 'Journal Name Placeholder — e.g., Journal of Cleaner Production',
    year: 2023,
    doi: '10.xxxx/placeholder-doi-02',
    impactFactor: 'Add IF',
    citations: 0,
    category: 'Journal Article',
    abstract:
      'Sample abstract placeholder: reports biomass-derived carbon nanomaterial synthesis and the influence of particle size, morphology and surface chemistry on nanofluid thermophysical properties.',
    isSample: true,
  },
  {
    id: 'pub-03',
    title: 'Effect of Particle Size and Morphology on the Thermal Conductivity of Carbon-Based Nanofluids',
    authors: 'Bijapur, K. et al.',
    journal: 'Journal Name Placeholder — e.g., International Journal of Thermal Sciences',
    year: 2022,
    doi: '10.xxxx/placeholder-doi-03',
    impactFactor: 'Add IF',
    citations: 0,
    category: 'Journal Article',
    abstract:
      'Sample abstract placeholder: examines thermal management performance of engineered nanofluids for advanced heat transfer applications.',
    isSample: true,
  },
  {
    id: 'pub-04',
    title: 'Surface-Engineered Carbon Nanostructures for Electrochemical Energy Conversion: A Review',
    authors: 'Bijapur, K. et al.',
    journal: 'Journal Name Placeholder — e.g., Renewable and Sustainable Energy Reviews',
    year: 2024,
    doi: '10.xxxx/placeholder-doi-04',
    impactFactor: 'Add IF',
    citations: 0,
    category: 'Review',
    abstract:
      'Sample abstract placeholder: a review of surface chemistry strategies for tuning carbon nanostructures for HER/OER and related energy-conversion technologies.',
    isSample: true,
  },
  {
    id: 'pub-05',
    title: 'Sustainable Nanofluid Formulations from Agricultural Waste Precursors',
    authors: 'Bijapur, K. et al.',
    journal: 'Journal Name Placeholder — e.g., ACS Sustainable Chemistry & Engineering',
    year: 2021,
    doi: '10.xxxx/placeholder-doi-05',
    impactFactor: 'Add IF',
    citations: 0,
    category: 'Journal Article',
    abstract:
      'Sample abstract placeholder: circular-economy approach converting agricultural waste into functional carbon nanomaterials for thermal fluids.',
    isSample: true,
  },
  {
    id: 'pub-06',
    title: 'Advances in Electrocatalyst Design for Green Hydrogen Production — Conference Proceedings',
    authors: 'Bijapur, K. et al.',
    journal: 'Conference Name Placeholder',
    year: 2024,
    doi: '10.xxxx/placeholder-doi-06',
    citations: 0,
    category: 'Conference Paper',
    abstract:
      'Sample abstract placeholder: conference contribution summarising catalyst design strategies for scalable green hydrogen electrolysis.',
    isSample: true,
  },
];

export const publicationCategories = ['All', 'Journal Article', 'Review', 'Conference Paper', 'Book Chapter'] as const;
