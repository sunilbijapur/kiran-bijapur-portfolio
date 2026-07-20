import type { Award } from '@/data/awards';
import Badge from '../ui/Badge';
import Reveal from '../ui/Reveal';
import { FiStar } from 'react-icons/fi';

export default function AwardCard({ award, index = 0 }: { award: Award; index?: number }) {
  return (
    <Reveal delay={Math.min(index * 0.06, 0.3)} className="card p-6 flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-50 dark:bg-gold-400/10 text-gold-600 dark:text-gold-300">
        <FiStar aria-hidden="true" />
      </div>
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="navy">{award.year}</Badge>
          <Badge tone="emerald">{award.category}</Badge>
        </div>
        <h3 className="mt-2 text-base font-display font-medium text-navy-800 dark:text-white leading-snug">{award.title}</h3>
        <p className="mt-1 text-sm text-ink-light dark:text-navy-200">{award.awardingBody}</p>
        <p className="mt-2 text-sm text-ink-muted dark:text-navy-300 leading-relaxed">{award.description}</p>
      </div>
    </Reveal>
  );
}
