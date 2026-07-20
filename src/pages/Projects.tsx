import SEO from '@/components/ui/SEO';
import Container from '@/components/ui/Container';
import PageHero from '@/components/ui/PageHero';
import SampleDataNote from '@/components/ui/SampleDataNote';
import ProjectCard from '@/components/cards/ProjectCard';
import { projects } from '@/data/projects';

export default function Projects() {
  const ongoing = projects.filter((p) => p.status === 'Ongoing');
  const completed = projects.filter((p) => p.status === 'Completed');

  return (
    <>
      <SEO
        title="Projects & Grants"
        description="Research projects, government funding, and collaborations led by Dr. Kiran Bijapur in green hydrogen and sustainable materials research."
        path="/projects"
      />
      <PageHero
        eyebrow="Projects & Grants"
        title="Research programmes and funded projects"
        description="Government-funded research initiatives, doctoral projects, and industry collaborations."
      />
      <section className="section">
        <Container>
          <SampleDataNote text="The projects below are sample placeholders — replace titles, funding agencies and durations with your verified records before publishing." />

          <h2 className="font-display text-2xl text-navy-800 dark:text-white mb-6">Ongoing Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 mb-14">
            {ongoing.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>

          <h2 className="font-display text-2xl text-navy-800 dark:text-white mb-6">Completed Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {completed.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
