/**
 * Teaching & Mentoring data. SAMPLE placeholders — replace with verified
 * course titles, institutions and mentee details.
 */

export interface Course {
  id: string;
  title: string;
  level: string;
  institution: string;
  years: string;
}

export interface GuestLecture {
  id: string;
  title: string;
  venue: string;
  year: number;
}

export interface Mentee {
  id: string;
  name: string;
  program: string;
  topic: string;
  status: 'Ongoing' | 'Completed';
}

export const courses: Course[] = [
  { id: 'crs-01', title: 'Materials Chemistry Fundamentals (Placeholder)', level: 'Postgraduate', institution: 'CHRIST (Deemed to be University)', years: '2019 — 2022' },
  { id: 'crs-02', title: 'Introduction to Electrochemistry & Energy Materials (Placeholder)', level: 'Postgraduate', institution: 'CHRIST (Deemed to be University)', years: '2020 — 2022' },
  { id: 'crs-03', title: 'Nanomaterials Lab Techniques (Placeholder)', level: 'Undergraduate', institution: 'CHRIST (Deemed to be University)', years: '2019 — 2021' },
];

export const guestLectures: GuestLecture[] = [
  { id: 'gl-01', title: 'Green Hydrogen: Materials Challenges and Opportunities (Placeholder)', venue: 'National Workshop Placeholder', year: 2024 },
  { id: 'gl-02', title: 'Biomass to Nanomaterials: A Circular Economy Approach (Placeholder)', venue: 'University Seminar Placeholder', year: 2023 },
  { id: 'gl-03', title: 'Electrocatalyst Design for HER/OER (Placeholder)', venue: 'Research Institute Placeholder', year: 2024 },
];

export const mentees: Mentee[] = [
  { id: 'mt-01', name: 'Student Name Placeholder', program: 'M.Sc. Chemistry', topic: 'Carbon nanomaterial synthesis (placeholder topic)', status: 'Completed' },
  { id: 'mt-02', name: 'Student Name Placeholder', program: 'PhD Scholar', topic: 'Electrocatalysis for seawater splitting (placeholder topic)', status: 'Ongoing' },
  { id: 'mt-03', name: 'Student Name Placeholder', program: 'B.Tech Intern', topic: 'Nanofluid characterisation (placeholder topic)', status: 'Completed' },
];
