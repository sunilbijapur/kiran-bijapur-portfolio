import type { TimelineEvent } from '@/data/timeline';
import Reveal from '../ui/Reveal';

export default function TimelineItemRow({ event, index = 0, isLast = false }: { event: TimelineEvent; index?: number; isLast?: boolean }) {
  return (
    <Reveal delay={Math.min(index * 0.05, 0.3)} className="relative pl-10">
      {!isLast && <span className="absolute left-[15px] top-8 h-full w-px bg-emerald-500/25" aria-hidden="true" />}
      <span className="absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 font-mono text-xs font-semibold text-white">
        {event.year.slice(2)}
      </span>
      <div className="pb-10">
        <span className="font-mono text-sm text-emerald-600 dark:text-emerald-300">{event.year}</span>
        <h3 className="mt-1 text-lg font-display font-medium text-navy-800 dark:text-white">{event.title}</h3>
        <p className="text-sm text-ink-light dark:text-navy-200">{event.organisation}</p>
        <p className="mt-2 text-sm text-ink-muted dark:text-navy-300 leading-relaxed max-w-xl">{event.description}</p>
      </div>
    </Reveal>
  );
}
