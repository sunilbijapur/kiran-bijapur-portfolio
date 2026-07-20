import SEO from '@/components/ui/SEO';
import Container from '@/components/ui/Container';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import SkillBar from '@/components/cards/SkillBar';
import { skillGroups } from '@/data/skills';

export default function Skills() {
  return (
    <>
      <SEO title="Skills" description="Technical, research management, and transferable skills of Dr. Kiran Bijapur." path="/skills" />
      <PageHero eyebrow="Skills" title="Technical & research capabilities" />
      <section className="section">
        <Container className="grid gap-10 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.id} delay={gi * 0.08} className="card p-7">
              <h3 className="font-display text-lg text-navy-800 dark:text-white mb-6">{group.title}</h3>
              <div className="space-y-5">
                {group.skills.map((s, i) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} index={i} />
                ))}
              </div>
            </Reveal>
          ))}
        </Container>
      </section>
    </>
  );
}
