import SEO from '@/components/ui/SEO';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import Badge from '@/components/ui/Badge';
import { currentResearch, pastResearch } from '@/data/research';
import { researchInterests, researchVision } from '@/data/profile';

export default function Research() {
  return (
    <>
      <SEO
        title="Research"
        description="Current and past research programmes led by Dr. Kiran Bijapur: green hydrogen electrocatalysis, seawater electrolysis, and biomass-derived nanomaterials."
        path="/research"
      />
      <PageHero
        eyebrow="Research"
        title="Bridging materials science and clean-energy technology"
        description="A research programme spanning electrocatalyst design for green hydrogen, biomass-derived nanomaterials, and sustainable thermal management technologies."
      />

      <section className="section">
        <Container>
          <SectionHeading eyebrow="Current Research" title="Active research programmes" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {currentResearch.map((theme, i) => (
              <Reveal key={theme.id} delay={i * 0.1} className="card p-7">
                <h3 className="font-display text-xl text-navy-800 dark:text-white">{theme.title}</h3>
                <p className="mt-3 text-sm text-ink-light dark:text-navy-200 leading-relaxed">{theme.summary}</p>
                <ul className="mt-4 space-y-2">
                  {theme.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-ink-light dark:text-navy-200">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section bg-navy-50/60 dark:bg-navy-900/40">
        <Container>
          <SectionHeading eyebrow="Past Research" title="Doctoral research foundations" />
          <div className="mt-10 grid gap-6">
            {pastResearch.map((theme, i) => (
              <Reveal key={theme.id} delay={i * 0.1} className="card p-7 md:flex md:gap-8">
                <div className="md:w-1/2">
                  <h3 className="font-display text-xl text-navy-800 dark:text-white">{theme.title}</h3>
                  <p className="mt-3 text-sm text-ink-light dark:text-navy-200 leading-relaxed">{theme.summary}</p>
                </div>
                <ul className="mt-4 md:mt-0 md:w-1/2 space-y-2">
                  {theme.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-ink-light dark:text-navy-200">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container className="grid gap-10 lg:grid-cols-2">
          <Reveal className="card p-8">
            <h3 className="font-display text-xl text-navy-800 dark:text-white mb-5">Research Interests</h3>
            <div className="flex flex-wrap gap-2">
              {researchInterests.map((r) => (
                <Badge key={r} tone="emerald">
                  {r}
                </Badge>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08} className="card glass-strong border-none bg-navy-800 text-white p-8">
            <h3 className="font-display text-xl">Research Vision</h3>
            <p className="mt-4 text-white/85 leading-relaxed">{researchVision}</p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
