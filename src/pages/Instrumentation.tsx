import SEO from '@/components/ui/SEO';
import Container from '@/components/ui/Container';
import PageHero from '@/components/ui/PageHero';
import InstrumentCard from '@/components/cards/InstrumentCard';
import { instruments } from '@/data/instrumentation';

export default function Instrumentation() {
  return (
    <>
      <SEO title="Instrumentation" description="Analytical and electrochemical instrumentation used by Dr. Kiran Bijapur, including SEM, TEM, XRD, XPS and electrochemical workstations." path="/instrumentation" />
      <PageHero eyebrow="Instrumentation" title="Analytical & electrochemical instrumentation" description="Characterisation and testing techniques central to materials and electrocatalysis research." />
      <section className="section">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {instruments.map((inst, i) => (
              <InstrumentCard key={inst.id} instrument={inst} index={i} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
