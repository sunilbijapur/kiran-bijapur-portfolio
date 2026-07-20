import { useMemo, useState } from 'react';
import SEO from '@/components/ui/SEO';
import Container from '@/components/ui/Container';
import PageHero from '@/components/ui/PageHero';
import SampleDataNote from '@/components/ui/SampleDataNote';
import PublicationCard from '@/components/cards/PublicationCard';
import { publications, publicationCategories } from '@/data/publications';

export default function Publications() {
  const [filter, setFilter] = useState<(typeof publicationCategories)[number]>('All');

  const filtered = useMemo(
    () => (filter === 'All' ? publications : publications.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <>
      <SEO
        title="Publications"
        description="Peer-reviewed journal articles, reviews, and conference papers by Dr. Kiran Bijapur on green hydrogen, electrocatalysis and sustainable nanomaterials."
        path="/publications"
      />
      <PageHero
        eyebrow="Publications"
        title="Peer-reviewed research"
        description="Journal articles, reviews and conference contributions spanning electrocatalysis, green hydrogen and sustainable nanomaterials."
      />

      <section className="section">
        <Container>
          <SampleDataNote text="The publications below are sample placeholders showing the intended layout — replace titles, journals, DOIs and metrics with your verified bibliographic record before publishing." />

          <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filter publications by category">
            {publicationCategories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={filter === cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  filter === cat
                    ? 'bg-emerald-500 text-white'
                    : 'border border-navy-800/15 dark:border-white/20 text-navy-700 dark:text-navy-100 hover:bg-navy-800/5 dark:hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {filtered.map((pub, i) => (
              <PublicationCard key={pub.id} pub={pub} index={i} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
