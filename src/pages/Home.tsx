import { Link } from 'react-router-dom';
import { FiDownload, FiBookOpen, FiMail, FiArrowRight } from 'react-icons/fi';
import SEO from '@/components/ui/SEO';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import StatCounter from '@/components/ui/StatCounter';
import HeroIllustration from '@/components/ui/HeroIllustration';
import Badge from '@/components/ui/Badge';
import { site, heroStats, researchInterests, aboutParagraphs, closingStatement } from '@/data/profile';
import { currentResearch } from '@/data/research';
import { asset } from '@/lib/paths';

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="Dr. Kiran Bijapur, MRSC — Materials Chemist and Green Hydrogen Researcher at the Department of Science and Technology, Government of India."
        path="/"
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-800 text-white">
        <HeroIllustration />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800/40 via-navy-800/70 to-navy-800" aria-hidden="true" />
        <Container className="relative py-28 md:py-36">
          <Reveal>
            <span className="eyebrow border border-emerald-400/30 rounded-full px-3 py-1 bg-emerald-500/10 text-emerald-300">
              Department of Science and Technology &middot; Government of India
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-display font-medium leading-[1.08] text-balance max-w-3xl">
              {site.fullTitle}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-lg md:text-xl text-emerald-200 font-display italic">
              {site.roles.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-6 max-w-xl text-lg text-white/80 leading-relaxed">{site.tagline}</p>
          </Reveal>
          <Reveal delay={0.32}>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href={asset('documents/Dr-Kiran-Bijapur-CV.pdf')} download className="btn-gold">
                <FiDownload aria-hidden="true" /> Download CV
              </a>
              <Link to="/publications" className="btn-outline border-white/30 text-white hover:bg-white/10">
                <FiBookOpen aria-hidden="true" /> View Publications
              </Link>
              <Link to="/contact" className="btn-ghost text-white hover:bg-white/10">
                <FiMail aria-hidden="true" /> Contact
              </Link>
            </div>
          </Reveal>
        </Container>

        {/* Stat counters */}
        <div className="relative border-t border-white/10 bg-navy-900/40">
          <Container className="py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {heroStats.map((s, i) => (
              <StatCounter key={s.label} value={s.value} label={s.label} suffix={s.suffix} delay={i * 0.08} />
            ))}
          </Container>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] items-start">
          <div>
            <SectionHeading eyebrow="About" title="A Materials Chemist advancing clean energy science" />
            <p className="mt-6 text-ink-light dark:text-navy-100 leading-relaxed">{aboutParagraphs[0]}</p>
            <p className="mt-4 text-ink-light dark:text-navy-100 leading-relaxed">{aboutParagraphs[2]}</p>
            <Reveal delay={0.15}>
              <p className="mt-6 font-display italic text-lg text-emerald-700 dark:text-emerald-300">&ldquo;{closingStatement}&rdquo;</p>
            </Reveal>
            <Reveal delay={0.2}>
              <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-300 font-semibold hover:underline">
                Read the full story <FiArrowRight aria-hidden="true" />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="card p-8">
            <h3 className="font-display text-xl text-navy-800 dark:text-white">Research Interests</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {researchInterests.map((r) => (
                <Badge key={r} tone="emerald">
                  {r}
                </Badge>
              ))}
            </div>
            <Link to="/research" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-700 dark:text-navy-100 hover:text-emerald-600 dark:hover:text-emerald-300">
              Explore full research programme <FiArrowRight aria-hidden="true" />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* CURRENT RESEARCH PREVIEW */}
      <section className="section bg-navy-50/60 dark:bg-navy-900/40">
        <Container>
          <SectionHeading eyebrow="Current Focus" title="Active research programmes" align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
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

      {/* CTA */}
      <section className="section">
        <Container>
          <Reveal className="card glass-strong flex flex-col md:flex-row items-center justify-between gap-6 p-10 md:p-14 bg-emerald-600 text-white border-none">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-medium max-w-lg">Open to postdoctoral, collaborative and industry research partnerships</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="btn-gold">
                Start a conversation
              </Link>
              <Link to="/collaborations" className="btn-outline border-white/40 text-white hover:bg-white/10">
                View collaborations
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
