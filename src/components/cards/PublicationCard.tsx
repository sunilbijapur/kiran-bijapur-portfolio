import { FiExternalLink, FiFileText } from 'react-icons/fi';
import type { Publication } from '@/data/publications';
import Badge from '../ui/Badge';
import Reveal from '../ui/Reveal';

export default function PublicationCard({ pub, index = 0 }: { pub: Publication; index?: number }) {
  const hasDoiLink = pub.doi && !pub.doi.includes('placeholder');

  return (
    <Reveal delay={Math.min(index * 0.06, 0.3)} className="card p-6">
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <Badge tone="emerald">{pub.category}</Badge>
        <Badge tone="navy">{pub.year}</Badge>
        {pub.impactFactor && <Badge tone="gold">IF: {pub.impactFactor}</Badge>}
      </div>
      <h3 className="text-lg font-display font-medium text-navy-800 dark:text-white leading-snug">{pub.title}</h3>
      <p className="mt-2 text-sm text-ink-light dark:text-navy-200">{pub.authors}</p>
      <p className="text-sm italic text-ink-muted dark:text-navy-300">{pub.journal}</p>
      <p className="mt-3 text-sm text-ink-light dark:text-navy-200 leading-relaxed">{pub.abstract}</p>

      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
        <span className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-muted dark:text-navy-300">
          <FiFileText aria-hidden="true" /> DOI: {pub.doi}
        </span>
        {typeof pub.citations === 'number' && (
          <span className="font-mono text-xs text-ink-muted dark:text-navy-300">Citations: {pub.citations}</span>
        )}
        {hasDoiLink && (
          <a
            href={`https://doi.org/${pub.doi}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-300 font-medium hover:underline"
          >
            View DOI <FiExternalLink size={13} aria-hidden="true" />
          </a>
        )}
      </div>
    </Reveal>
  );
}
