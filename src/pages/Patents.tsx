import SEO from '@/components/ui/SEO';
import Container from '@/components/ui/Container';
import PageHero from '@/components/ui/PageHero';
import SampleDataNote from '@/components/ui/SampleDataNote';
import PatentCard from '@/components/cards/PatentCard';
import { patents } from '@/data/patents';

export default function Patents() {
  return (
    <>
      <SEO
        title="Patents"
        description="Patents filed by Dr. Kiran Bijapur on sustainable nanomaterial synthesis and electrocatalyst compositions for green hydrogen production."
        path="/patents"
      />
      <PageHero
        eyebrow="Patents"
        title="Translating research into protected innovation"
        description="Patent applications covering nanomaterial synthesis processes and electrocatalyst compositions for clean-energy technologies."
      />
      <section className="section">
        <Container>
          <SampleDataNote text="The patents below are sample placeholders — replace application/grant numbers, status and descriptions with your verified records before publishing." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {patents.map((p, i) => (
              <PatentCard key={p.id} patent={p} index={i} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
