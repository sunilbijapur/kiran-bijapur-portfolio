export interface OpenPosition {
  id: string;
  title: string;
  type: string;
  description: string;
}

// No open positions at present — this array intentionally starts empty.
// Add entries here when postdoctoral, PhD, or project-assistant positions open.
export const openPositions: OpenPosition[] = [];
