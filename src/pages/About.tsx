import { FiTarget, FiBriefcase, FiUsers, FiCheckCircle } from 'react-icons/fi';
import SEO from '@/components/ui/SEO';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import Badge from '@/components/ui/Badge';
import {
  site,
  aboutParagraphs,
  closingStatement,
  researchInterests,
  researchVision,
  currentPosition,
  openToCollaboration,
} from '@/data/profile';

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="About Dr. Kiran Bijapur, MRSC — Materials Chemist, Green Hydrogen Researcher, and Researcher & Program Manager at DST, Government of India."
        path="/about"
      />

      <section className="section bg-navy-800 text-white">
        <Container>
          <Reveal>
            <span className="eyebrow text-emerald-300">About</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-display font-medium max-w-2xl text-balance">{site.tagline}</h1>
          </Reveal>
        </Container>
      </section>

      <section className="section">
        <Container className="grid gap-12 lg:grid-cols-[1.15fr,0.85fr]">
          <div className="space-y-5">
            {aboutParagraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="text-ink-light dark:text-navy-100 leading-relaxed">{p}</p>
              </Reveal>
            ))}
            <Reveal delay={0.3} className="border-l-2 border-gold-400 pl-5">
              <p className="font-display italic text-lg text-navy-800 dark:text-white">&ldquo;{closingStatement}&rdquo;</p>
            </Reveal>
          </div>

          <div className="space-y-8">
            <Reveal className="card p-7">
              <h3 className="flex items-center gap-2 font-display text-lg text-navy-800 dark:text-white">
                <FiTarget className="text-emerald-600 dark:text-emerald-300" aria-hidden="true" /> Research Vision
              </h3>
              <p className="mt-3 text-sm text-ink-light dark:text-navy-200 leading-relaxed">{researchVision}</p>
            </Reveal>

            <Reveal delay={0.08} className="card p-7">
              <h3 className="font-display text-lg text-navy-800 dark:text-white mb-4">Research Interests</h3>
              <div className="flex flex-wrap gap-2">
                {researchInterests.map((r) => (
                  <Badge key={r} tone="emerald">
                    {r}
                  </Badge>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* CURRENT POSITION */}
      <section className="section bg-navy-50/60 dark:bg-navy-900/40">
        <Container>
          <SectionHeading eyebrow="Current Role" title={currentPosition.title} description={currentPosition.organisation} />
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <Reveal className="card p-8">
              <h3 className="flex items-center gap-2 font-display text-lg text-navy-800 dark:text-white">
                <FiBriefcase className="text-emerald-600 dark:text-emerald-300" aria-hidden="true" /> Role Summary
              </h3>
              <p className="mt-3 text-sm text-ink-light dark:text-navy-200 leading-relaxed">{currentPosition.summary}</p>
            </Reveal>
            <Reveal delay={0.08} className="card p-8">
              <h3 className="font-display text-lg text-navy-800 dark:text-white mb-4">Key Responsibilities</h3>
              <ul className="space-y-3">
                {currentPosition.responsibilities.map((r) => (
                  <li key={r} className="flex gap-3 text-sm text-ink-light dark:text-navy-200">
                    <FiCheckCircle className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-300" aria-hidden="true" />
                    {r}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* OPEN TO COLLABORATION */}
      <section className="section">
        <Container>
          <Reveal className="card glass-strong border-none bg-emerald-600 text-white p-10 md:p-14">
            <h3 className="flex items-center gap-2 font-display text-2xl">
              <FiUsers aria-hidden="true" /> Open to Collaboration
            </h3>
            <p className="mt-4 max-w-3xl text-white/90 leading-relaxed">{openToCollaboration}</p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
