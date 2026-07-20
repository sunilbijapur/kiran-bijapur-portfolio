import type { Testimonial } from '@/data/testimonials';
import Reveal from '../ui/Reveal';
import { FiUser } from 'react-icons/fi';

export default function TestimonialCard({ testimonial, index = 0 }: { testimonial: Testimonial; index?: number }) {
  return (
    <Reveal delay={Math.min(index * 0.08, 0.3)} className="card p-7 flex flex-col h-full">
      <p className="text-navy-700 dark:text-navy-50 leading-relaxed italic flex-1">&ldquo;{testimonial.quote}&rdquo;</p>
      <div className="mt-5 flex items-center gap-3 pt-4 border-t border-navy-800/10 dark:border-white/10">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-800/5 dark:bg-white/10 text-navy-600 dark:text-navy-200">
          <FiUser aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm font-semibold text-navy-800 dark:text-white">{testimonial.name}</p>
          <p className="text-xs text-ink-muted dark:text-navy-300">{testimonial.designation}</p>
        </div>
      </div>
    </Reveal>
  );
}
