import SEO from '@/components/ui/SEO';
import Container from '@/components/ui/Container';
import PageHero from '@/components/ui/PageHero';
import SampleDataNote from '@/components/ui/SampleDataNote';
import NewsCard from '@/components/cards/NewsCard';
import { newsItems } from '@/data/news';

export default function News() {
  const sorted = [...newsItems].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <SEO
        title="News"
        description="Latest achievements, invited talks, publications and events involving Dr. Kiran Bijapur's research programme."
        path="/news"
      />
      <PageHero eyebrow="News" title="Latest updates" description="Achievements, invited talks, new publications, and events." />
      <section className="section">
        <Container>
          <SampleDataNote text="These are sample news items — replace with real, dated updates as they happen." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sorted.map((n, i) => (
              <NewsCard key={n.id} item={n} index={i} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
