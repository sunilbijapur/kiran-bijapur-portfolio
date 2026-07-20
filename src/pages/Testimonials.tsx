import SEO from '@/components/ui/SEO';
import Container from '@/components/ui/Container';
import PageHero from '@/components/ui/PageHero';
import SampleDataNote from '@/components/ui/SampleDataNote';
import TestimonialCard from '@/components/cards/TestimonialCard';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  return (
    <>
      <SEO title="Testimonials" description="Testimonials from collaborators, mentors and mentees of Dr. Kiran Bijapur." path="/testimonials" />
      <PageHero eyebrow="Testimonials" title="What collaborators say" />
      <section className="section">
        <Container>
          <SampleDataNote text="Sample testimonial text — replace with real, permission-cleared quotes before publishing." />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
