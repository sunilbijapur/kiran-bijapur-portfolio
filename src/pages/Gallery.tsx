import { useMemo, useState } from 'react';
import SEO from '@/components/ui/SEO';
import Container from '@/components/ui/Container';
import PageHero from '@/components/ui/PageHero';
import SampleDataNote from '@/components/ui/SampleDataNote';
import GalleryTile from '@/components/cards/GalleryTile';
import { galleryImages, galleryCategories } from '@/data/gallery';

export default function Gallery() {
  const [filter, setFilter] = useState<(typeof galleryCategories)[number]>('All');

  const filtered = useMemo(
    () => (filter === 'All' ? galleryImages : galleryImages.filter((g) => g.category === filter)),
    [filter],
  );

  return (
    <>
      <SEO
        title="Research Gallery"
        description="A visual record of laboratory work, conferences, posters, awards, field visits and instrumentation from Dr. Kiran Bijapur's research."
        path="/gallery"
      />
      <PageHero eyebrow="Research Gallery" title="Life in the lab and beyond" description="Laboratory work, conferences, posters, field visits and instrumentation." />

      <section className="section">
        <Container>
          <SampleDataNote text="These tiles are elegant placeholders — add your own photographs to public/images/ (see README) and they'll replace the placeholder automatically." />

          <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filter gallery by category">
            {galleryCategories.map((cat) => (
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

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 [grid-auto-flow:dense]">
            {filtered.map((img, i) => (
              <GalleryTile key={img.id} item={img} index={i} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
