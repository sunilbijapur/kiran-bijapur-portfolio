import { FiGlobe } from 'react-icons/fi';
import SEO from '@/components/ui/SEO';
import Container from '@/components/ui/Container';
import PageHero from '@/components/ui/PageHero';
import SampleDataNote from '@/components/ui/SampleDataNote';
import Reveal from '@/components/ui/Reveal';
import Badge from '@/components/ui/Badge';
import { collaborations } from '@/data/collaborations';
import { openToCollaboration } from '@/data/profile';

export default function Collaborations() {
  return (
    <>
      <SEO title="Research Collaborations" description="Academic, government, industry and international research collaborations involving Dr. Kiran Bijapur." path="/collaborations" />
      <PageHero eyebrow="Research Collaborations" title="Building partnerships across sectors and borders" description={openToCollaboration} />
      <section className="section">
        <Container>
          <SampleDataNote text="Sample collaborating institutions — replace with verified partners before publishing." />
          <div className="grid gap-6 md:grid-cols-2">
            {collaborations.map((c, i) => (
              <Reveal key={c.id} delay={i * 0.08} className="card p-7 flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-300">
                  <FiGlobe aria-hidden="true" />
                </div>
                <div>
                  <Badge tone="gold">{c.type}</Badge>
                  <h3 className="mt-2 font-display text-lg text-navy-800 dark:text-white">{c.name}</h3>
                  <p className="mt-2 text-sm text-ink-light dark:text-navy-200 leading-relaxed">{c.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
