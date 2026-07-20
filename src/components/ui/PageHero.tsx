import Container from './Container';
import Reveal from './Reveal';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
}

/** Compact dark hero banner used at the top of interior (non-Home) pages. */
export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="bg-navy-800 text-white py-20 hex-bg">
      <Container>
        <Reveal>
          <span className="eyebrow text-emerald-300">{eyebrow}</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-display font-medium max-w-2xl text-balance">{title}</h1>
          {description && <p className="mt-4 max-w-2xl text-white/75 leading-relaxed">{description}</p>}
        </Reveal>
      </Container>
    </section>
  );
}
