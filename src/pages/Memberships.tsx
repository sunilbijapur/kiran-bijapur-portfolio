import { FiAward } from 'react-icons/fi';
import SEO from '@/components/ui/SEO';
import Container from '@/components/ui/Container';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import { memberships } from '@/data/memberships';

export default function Memberships() {
  return (
    <>
      <SEO title="Memberships" description="Professional society memberships held by Dr. Kiran Bijapur, including the Royal Society of Chemistry (MRSC)." path="/memberships" />
      <PageHero eyebrow="Memberships" title="Professional affiliations" />
      <section className="section">
        <Container className="grid gap-6 md:grid-cols-3">
          {memberships.map((m, i) => (
            <Reveal key={m.id} delay={i * 0.08} className="card p-7 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold-50 dark:bg-gold-400/10 text-gold-600 dark:text-gold-300">
                <FiAward size={20} aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-display text-lg text-navy-800 dark:text-white">{m.organisation}</h3>
              <p className="mt-1 text-sm text-ink-light dark:text-navy-200">{m.designation}</p>
              <p className="mt-1 text-xs font-mono text-ink-muted dark:text-navy-300">Since {m.since}</p>
            </Reveal>
          ))}
        </Container>
      </section>
    </>
  );
}
