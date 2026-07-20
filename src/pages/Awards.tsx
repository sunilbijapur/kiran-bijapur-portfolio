import SEO from '@/components/ui/SEO';
import Container from '@/components/ui/Container';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import SampleDataNote from '@/components/ui/SampleDataNote';
import AwardCard from '@/components/cards/AwardCard';
import TimelineItemRow from '@/components/cards/TimelineItem';
import { awards } from '@/data/awards';
import { timelineEvents } from '@/data/timeline';

const awardYears = [...new Set(awards.map((a) => a.year))].sort((a, b) => b - a);

export default function Awards() {
  return (
    <>
      <SEO
        title="Awards & Recognition"
        description="Awards, fellowships, and recognitions received by Dr. Kiran Bijapur for research contributions in materials chemistry and green hydrogen."
        path="/awards"
      />
      <PageHero
        eyebrow="Awards & Recognition"
        title="Honours and recognitions"
        description="Fellowships, awards and recognitions received across doctoral research and national programme contributions."
      />

      <section className="section">
        <Container>
          <SampleDataNote text="The awards below are sample placeholders — replace with your verified honours, awarding bodies and years before publishing." />
          <div className="grid gap-6 md:grid-cols-2">
            {awards.map((a, i) => (
              <AwardCard key={a.id} award={a} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <section className="section bg-navy-50/60 dark:bg-navy-900/40">
        <Container>
          <SectionHeading eyebrow="Recognition Timeline" title={`Milestones, ${awardYears[awardYears.length - 1]}\u2013${awardYears[0]}`} />
          <div className="mt-10 max-w-2xl">
            {timelineEvents
              .filter((e) => e.title.toLowerCase().includes('award') || e.title.toLowerCase().includes('mrsc') || e.title.toLowerCase().includes('recognit'))
              .map((e, i, arr) => (
                <TimelineItemRow key={e.id} event={e} index={i} isLast={i === arr.length - 1} />
              ))}
          </div>
        </Container>
      </section>
    </>
  );
}
