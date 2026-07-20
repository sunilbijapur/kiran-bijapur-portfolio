export interface NavLink {
  label: string;
  path: string;
}

export interface NavGroup {
  label: string;
  path?: string; // if present, the group label itself is also a link
  children: NavLink[];
}

export type NavEntry = NavLink | NavGroup;

export function isNavGroup(entry: NavEntry): entry is NavGroup {
  return 'children' in entry;
}

export const navigation: NavEntry[] = [
  { label: 'Home', path: '/' },
  {
    label: 'About',
    path: '/about',
    children: [
      { label: 'About Me', path: '/about' },
      { label: 'Academic Timeline', path: '/timeline' },
      { label: 'Skills', path: '/skills' },
      { label: 'Memberships', path: '/memberships' },
    ],
  },
  {
    label: 'Research',
    path: '/research',
    children: [
      { label: 'Research Overview', path: '/research' },
      { label: 'Publications', path: '/publications' },
      { label: 'Patents', path: '/patents' },
      { label: 'Projects & Grants', path: '/projects' },
      { label: 'Research Impact', path: '/impact' },
      { label: 'Collaborations', path: '/collaborations' },
      { label: 'Instrumentation', path: '/instrumentation' },
    ],
  },
  {
    label: 'Engage',
    children: [
      { label: 'Teaching & Mentoring', path: '/teaching' },
      { label: 'Research Gallery', path: '/gallery' },
      { label: 'News', path: '/news' },
      { label: 'Media Coverage', path: '/media' },
      { label: 'Testimonials', path: '/testimonials' },
      { label: 'FAQ', path: '/faq' },
      { label: 'Open Positions', path: '/open-positions' },
    ],
  },
  { label: 'Awards', path: '/awards' },
  { label: 'Downloads', path: '/downloads' },
  { label: 'Contact', path: '/contact' },
];

// Flat list of every route — used to generate sitemap-adjacent checks and the footer.
export const allRoutes: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Research', path: '/research' },
  { label: 'Publications', path: '/publications' },
  { label: 'Patents', path: '/patents' },
  { label: 'Awards & Recognition', path: '/awards' },
  { label: 'Projects & Grants', path: '/projects' },
  { label: 'Teaching & Mentoring', path: '/teaching' },
  { label: 'Research Gallery', path: '/gallery' },
  { label: 'News', path: '/news' },
  { label: 'Downloads', path: '/downloads' },
  { label: 'Contact', path: '/contact' },
  { label: 'Academic Timeline', path: '/timeline' },
  { label: 'Research Impact', path: '/impact' },
  { label: 'Collaborations', path: '/collaborations' },
  { label: 'Skills', path: '/skills' },
  { label: 'Instrumentation', path: '/instrumentation' },
  { label: 'Memberships', path: '/memberships' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Media Coverage', path: '/media' },
  { label: 'Open Positions', path: '/open-positions' },
];
