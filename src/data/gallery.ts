/**
 * Research Gallery data — masonry gallery items grouped by category.
 * `image` paths point to /public/images/<category>/... — add your own
 * photographs there using the same filenames, or update the paths below.
 * Until real photos are added, the gallery renders elegant placeholder
 * tiles so the layout never looks broken.
 */

export type GalleryCategory = 'Laboratory' | 'Conference' | 'Posters' | 'Awards' | 'Field Visits' | 'Instrumentation';

export interface GalleryImage {
  id: string;
  category: GalleryCategory;
  caption: string;
  image?: string;
  aspect: 'square' | 'tall' | 'wide';
}

export const galleryImages: GalleryImage[] = [
  { id: 'g-01', category: 'Laboratory', caption: 'Electrochemical workstation setup for HER/OER testing', aspect: 'wide' },
  { id: 'g-02', category: 'Laboratory', caption: 'Sample preparation for carbon nanomaterial synthesis', aspect: 'square' },
  { id: 'g-03', category: 'Conference', caption: 'Presenting research at a national materials science conference', aspect: 'tall' },
  { id: 'g-04', category: 'Conference', caption: 'Panel discussion on green hydrogen technologies', aspect: 'square' },
  { id: 'g-05', category: 'Posters', caption: 'Poster presentation — biomass-derived nanomaterials', aspect: 'tall' },
  { id: 'g-06', category: 'Awards', caption: 'Recognition ceremony for research contributions', aspect: 'square' },
  { id: 'g-07', category: 'Field Visits', caption: 'Site visit to a clean-energy pilot facility', aspect: 'wide' },
  { id: 'g-08', category: 'Instrumentation', caption: 'XRD characterisation of catalyst samples', aspect: 'square' },
  { id: 'g-09', category: 'Instrumentation', caption: 'SEM imaging session for nanostructure analysis', aspect: 'tall' },
  { id: 'g-10', category: 'Laboratory', caption: 'Glovebox handling of air-sensitive materials', aspect: 'square' },
  { id: 'g-11', category: 'Conference', caption: 'Networking with international collaborators', aspect: 'square' },
  { id: 'g-12', category: 'Field Visits', caption: 'Field sampling of biomass feedstock', aspect: 'wide' },
];

export const galleryCategories: ('All' | GalleryCategory)[] = [
  'All', 'Laboratory', 'Conference', 'Posters', 'Awards', 'Field Visits', 'Instrumentation',
];
