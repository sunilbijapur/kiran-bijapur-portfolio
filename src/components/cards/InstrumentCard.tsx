import type { Instrument } from '@/data/instrumentation';
import Reveal from '../ui/Reveal';
import { FiActivity } from 'react-icons/fi';

export default function InstrumentCard({ instrument, index = 0 }: { instrument: Instrument; index?: number }) {
  return (
    <Reveal delay={Math.min(index * 0.05, 0.3)} className="card p-6 text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-300">
        <FiActivity size={22} aria-hidden="true" />
      </div>
      <h3 className="mt-4 font-mono text-lg font-semibold text-navy-800 dark:text-white">{instrument.name}</h3>
      <p className="text-sm font-medium text-ink-light dark:text-navy-200">{instrument.fullName}</p>
      <p className="mt-2 text-sm text-ink-muted dark:text-navy-300 leading-relaxed">{instrument.use}</p>
    </Reveal>
  );
}
