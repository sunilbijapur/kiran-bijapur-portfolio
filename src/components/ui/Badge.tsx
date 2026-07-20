import type { ReactNode } from 'react';

export default function Badge({ children, tone = 'emerald' }: { children: ReactNode; tone?: 'emerald' | 'gold' | 'navy' }) {
  const tones: Record<string, string> = {
    emerald: 'tag',
    gold: 'inline-flex items-center rounded-full border border-gold-400/40 bg-gold-50 dark:bg-gold-400/10 px-3 py-1 text-xs font-medium text-gold-700 dark:text-gold-300',
    navy: 'inline-flex items-center rounded-full border border-navy-500/30 bg-navy-50 dark:bg-navy-500/20 px-3 py-1 text-xs font-medium text-navy-700 dark:text-navy-100',
  };
  return <span className={tones[tone]}>{children}</span>;
}
