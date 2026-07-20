import { useState, useId } from 'react';
import { FiPlus } from 'react-icons/fi';
import type { FAQItem } from '@/data/faq';
import Reveal from '../ui/Reveal';

export default function FAQAccordionItem({ item, index = 0 }: { item: FAQItem; index?: number }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <Reveal delay={Math.min(index * 0.05, 0.3)} className="card overflow-hidden">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="font-display text-base md:text-lg font-medium text-navy-800 dark:text-white">{item.question}</span>
        <FiPlus className={`shrink-0 transition-transform duration-200 text-emerald-600 dark:text-emerald-300 ${open ? 'rotate-45' : ''}`} aria-hidden="true" />
      </button>
      <div id={panelId} role="region" className={`grid transition-all duration-200 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm text-ink-light dark:text-navy-200 leading-relaxed">{item.answer}</p>
        </div>
      </div>
    </Reveal>
  );
}
