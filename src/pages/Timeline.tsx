import SEO from '@/components/ui/SEO';
import Container from '@/components/ui/Container';
import PageHero from '@/components/ui/PageHero';
import SampleDataNote from '@/components/ui/SampleDataNote';
import TimelineItemRow from '@/components/cards/TimelineItem';
import { timelineEvents } from '@/data/timeline';

export default function Timeline() {
  return (
    <>
      <SEO title="Academic Timeline" description="A chronological academic and career timeline for Dr. Kiran Bijapur, from doctoral research to national programme management." path="/timeline" />
      <PageHero eyebrow="Academic Timeline" title="A journey through research and impact" />
      <section className="section">
        <Container className="max-w-2xl">
          <SampleDataNote text="Sample chronology — verify years and milestones before publishing." />
          {timelineEvents.map((e, i) => (
            <TimelineItemRow key={e.id} event={e} index={i} isLast={i === timelineEvents.length - 1} />
          ))}
        </Container>
      </section>
    </>
  );
}
