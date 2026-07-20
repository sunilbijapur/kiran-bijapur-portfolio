import SEO from '@/components/ui/SEO';
import Container from '@/components/ui/Container';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import StatCounter from '@/components/ui/StatCounter';
import { impactStats } from '@/data/profile';
import { publications } from '@/data/publications';

export default function Impact() {
  const totalCitations = publications.reduce((sum, p) => sum + (p.citations ?? 0), 0);

  return (
    <>
      <SEO title="Research Impact" description="Quantitative research impact metrics for Dr. Kiran Bijapur, including publications, patents, citations and funded projects." path="/impact" />
      <PageHero eyebrow="Research Impact" title="Measuring contribution to the field" description="A snapshot of research output and engagement — update figures regularly from Scopus, Google Scholar and ORCID." />

      <section className="section bg-navy-800 text-white">
        <Container className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {impactStats.map((s, i) => (
            <StatCounter key={s.label} value={s.value} label={s.label} suffix={s.suffix} delay={i * 0.06} />
          ))}
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeading eyebrow="Citation Snapshot" title="Publication-level metrics" description="Aggregated from the Publications page — keep individual citation counts current for an accurate total." />
          <Reveal delay={0.1} className="mt-10 card p-8 max-w-md">
            <p className="text-sm text-ink-muted dark:text-navy-300">Total tracked citations (sample data)</p>
            <p className="mt-2 font-mono text-4xl font-semibold text-emerald-600 dark:text-emerald-300">{totalCitations}</p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
