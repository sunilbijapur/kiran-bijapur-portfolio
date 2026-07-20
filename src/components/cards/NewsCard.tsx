import type { NewsItem } from '@/data/news';
import Badge from '../ui/Badge';
import Reveal from '../ui/Reveal';

const dateFmt = (iso: string) => new Date(iso).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });

export default function NewsCard({ item, index = 0 }: { item: NewsItem; index?: number }) {
  return (
    <Reveal delay={Math.min(index * 0.06, 0.3)} className="card p-6">
      <div className="flex items-center justify-between gap-3">
        <Badge tone="emerald">{item.category}</Badge>
        <time dateTime={item.date} className="font-mono text-xs text-ink-muted dark:text-navy-300">
          {dateFmt(item.date)}
        </time>
      </div>
      <h3 className="mt-3 text-lg font-display font-medium text-navy-800 dark:text-white leading-snug">{item.title}</h3>
      <p className="mt-2 text-sm text-ink-light dark:text-navy-200 leading-relaxed">{item.summary}</p>
    </Reveal>
  );
}
