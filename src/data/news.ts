/**
 * News data — achievements, talks, publications, events.
 * SAMPLE placeholders — replace with real dated updates.
 */

export interface NewsItem {
  id: string;
  title: string;
  date: string; // ISO date
  category: 'Achievement' | 'Talk' | 'Publication' | 'Event';
  summary: string;
  isSample: true;
}

export const newsItems: NewsItem[] = [
  { id: 'nw-01', title: 'Invited to speak on Green Hydrogen Electrocatalysts (Placeholder)', date: '2025-11-10', category: 'Talk', summary: 'Sample placeholder for an invited talk announcement — add venue and details.', isSample: true },
  { id: 'nw-02', title: 'New publication on rare-earth doped electrocatalysts (Placeholder)', date: '2025-08-02', category: 'Publication', summary: 'Sample placeholder announcing a new peer-reviewed article — link to the Publications page.', isSample: true },
  { id: 'nw-03', title: 'Recognised for contributions to national funding programme design (Placeholder)', date: '2025-04-18', category: 'Achievement', summary: 'Sample placeholder for an internal or external recognition.', isSample: true },
  { id: 'nw-04', title: 'Participated in Green Hydrogen Mission stakeholder workshop (Placeholder)', date: '2025-02-05', category: 'Event', summary: 'Sample placeholder for participation in a national workshop or consultation.', isSample: true },
  { id: 'nw-05', title: 'Patent application published (Placeholder)', date: '2024-10-22', category: 'Achievement', summary: 'Sample placeholder announcing patent progress — link to the Patents page.', isSample: true },
];
