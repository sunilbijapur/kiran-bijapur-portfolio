import type { ReactNode } from 'react';
import { FiInbox } from 'react-icons/fi';
import Reveal from './Reveal';

export default function EmptyState({ title, description, action }: { title: string; description: string; action?: ReactNode }) {
  return (
    <Reveal className="card p-14 text-center max-w-xl mx-auto">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy-800/5 dark:bg-white/10 text-navy-500 dark:text-navy-200">
        <FiInbox size={22} aria-hidden="true" />
      </div>
      <h3 className="mt-5 font-display text-xl text-navy-800 dark:text-white">{title}</h3>
      <p className="mt-2 text-sm text-ink-light dark:text-navy-200 leading-relaxed">{description}</p>
      {action && <div className="mt-6">{action}</div>}
    </Reveal>
  );
}
