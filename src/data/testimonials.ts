/** SAMPLE placeholders — replace with real, permission-cleared quotes. */
export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  designation: string;
  isSample: true;
}

export const testimonials: Testimonial[] = [
  {
    id: 'ts-01',
    quote: 'Placeholder testimonial text. Replace with a real quote from a supervisor, collaborator, or mentee, with their permission, describing collaborative research experience.',
    name: 'Name Placeholder, Title Placeholder',
    designation: 'Institution Placeholder',
    isSample: true,
  },
  {
    id: 'ts-02',
    quote: 'Placeholder testimonial text. Replace with a real quote highlighting research rigor, collaboration style, or mentoring impact.',
    name: 'Name Placeholder, Title Placeholder',
    designation: 'Institution Placeholder',
    isSample: true,
  },
  {
    id: 'ts-03',
    quote: 'Placeholder testimonial text. Replace with a real quote from a funding-agency colleague or industry partner.',
    name: 'Name Placeholder, Title Placeholder',
    designation: 'Institution Placeholder',
    isSample: true,
  },
];
