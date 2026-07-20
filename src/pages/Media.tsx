import { FiExternalLink } from 'react-icons/fi';
import SEO from '@/components/ui/SEO';
import Container from '@/components/ui/Container';
import PageHero from '@/components/ui/PageHero';
import SampleDataNote from '@/components/ui/SampleDataNote';
import Reveal from '@/components/ui/Reveal';
import { mediaItems } from '@/data/media';

const dateFmt = (iso: string) => new Date(iso).toLocaleDateString('en-IN', { year: 'numeric', month: 'long' });

export default function Media() {
  return (
    <>
      <SEO title="Media Coverage" description="Press and media coverage of Dr. Kiran Bijapur's research in green hydrogen and sustainable materials." path="/media" />
      <PageHero eyebrow="Media Coverage" title="In the press" />
      <section className="section">
        <Container className="max-w-2xl">
          <SampleDataNote text="Sample media mentions — replace with real coverage links before publishing." />
          <ul className="space-y-4">
            {mediaItems.map((m, i) => (
              <Reveal key={m.id} as="li" delay={i * 0.08} className="card p-6 flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-base text-navy-800 dark:text-white">{m.title}</h3>
                  <p className="mt-1 text-sm text-ink-muted dark:text-navy-300">
                    {m.outlet} &middot; {dateFmt(m.date)}
                  </p>
                </div>
                <a href={m.url} target="_blank" rel="noreferrer" className="shrink-0 text-emerald-600 dark:text-emerald-300">
                  <FiExternalLink aria-hidden="true" />
                </a>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
