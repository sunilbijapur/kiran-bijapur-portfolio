/** SAMPLE placeholders — replace with real media coverage links. */
export interface MediaItem {
  id: string;
  title: string;
  outlet: string;
  date: string;
  url: string;
  isSample: true;
}

export const mediaItems: MediaItem[] = [
  { id: 'md-01', title: 'Feature on green hydrogen research initiatives (Placeholder)', outlet: 'Outlet Name Placeholder', date: '2025-06-01', url: '#', isSample: true },
  { id: 'md-02', title: 'Interview on sustainable nanomaterials research (Placeholder)', outlet: 'Outlet Name Placeholder', date: '2024-11-15', url: '#', isSample: true },
];
