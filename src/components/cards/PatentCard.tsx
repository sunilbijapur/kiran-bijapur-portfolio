import type { Patent } from '@/data/patents';
import Badge from '../ui/Badge';
import Reveal from '../ui/Reveal';
import { FiAward } from 'react-icons/fi';

const statusTone: Record<Patent['status'], 'emerald' | 'gold' | 'navy'> = {
  Granted: 'emerald',
  Published: 'navy',
  Filed: 'gold',
  'Under Examination': 'gold',
};

export default function PatentCard({ patent, index = 0 }: { patent: Patent; index?: number }) {
  return (
    <Reveal delay={Math.min(index * 0.06, 0.3)} className="card p-6">
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-300">
          <FiAward aria-hidden="true" />
        </div>
        <Badge tone={statusTone[patent.status]}>{patent.status}</Badge>
      </div>
      <h3 className="mt-4 text-lg font-display font-medium text-navy-800 dark:text-white leading-snug">{patent.title}</h3>
      <p className="mt-2 font-mono text-xs text-ink-muted dark:text-navy-300">{patent.patentNumber}</p>
      <p className="mt-3 text-sm text-ink-light dark:text-navy-200 leading-relaxed">{patent.description}</p>
      <div className="mt-4 flex items-center justify-between text-xs text-ink-muted dark:text-navy-300">
        <span>{patent.inventors}</span>
        <span>Filed {patent.filingYear}</span>
      </div>
    </Reveal>
  );
}
