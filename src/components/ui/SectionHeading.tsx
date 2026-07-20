import Reveal from './Reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <Reveal className={align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'}>
      {eyebrow && <span className="eyebrow mb-3">{eyebrow}</span>}
      <h2 className="text-3xl md:text-4xl font-display font-medium text-balance leading-tight">{title}</h2>
      {description && <p className="mt-4 text-ink-light dark:text-navy-100 leading-relaxed">{description}</p>}
    </Reveal>
  );
}
