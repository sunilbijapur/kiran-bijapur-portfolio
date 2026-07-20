import { FiInfo } from 'react-icons/fi';

/**
 * Transparent notice shown on pages populated with placeholder/sample
 * records, so visitors and the site owner both know to replace them with
 * verified data before the site goes live publicly.
 */
export default function SampleDataNote({ text = 'Sample entries shown for layout purposes — replace with your verified records before publishing.' }: { text?: string }) {
  return (
    <div className="mb-10 flex items-start gap-3 rounded-md border border-gold-400/30 bg-gold-50/60 dark:bg-gold-400/10 px-4 py-3 text-sm text-gold-800 dark:text-gold-200">
      <FiInfo className="mt-0.5 shrink-0" aria-hidden="true" />
      <p>{text}</p>
    </div>
  );
}
