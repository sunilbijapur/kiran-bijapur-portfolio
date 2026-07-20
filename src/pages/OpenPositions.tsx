import { Link } from 'react-router-dom';
import SEO from '@/components/ui/SEO';
import Container from '@/components/ui/Container';
import PageHero from '@/components/ui/PageHero';
import EmptyState from '@/components/ui/EmptyState';
import { openPositions } from '@/data/positions';

export default function OpenPositions() {
  return (
    <>
      <SEO title="Open Positions" description="Open postdoctoral, PhD and research assistant positions with Dr. Kiran Bijapur's research group." path="/open-positions" />
      <PageHero eyebrow="Open Positions" title="Join the research group" description="Postdoctoral, doctoral and project-assistant opportunities will be listed here as they become available." />
      <section className="section">
        <Container>
          {openPositions.length === 0 ? (
            <EmptyState
              title="No open positions at present"
              description="There are currently no advertised positions. Please check back later, or reach out directly — I welcome informal enquiries from prospective postdocs and students."
              action={
                <Link to="/contact" className="btn-primary">
                  Get in touch
                </Link>
              }
            />
          ) : (
            <div className="grid gap-6 md:grid-cols-2">{/* Populated positions render here */}</div>
          )}
        </Container>
      </section>
    </>
  );
}
