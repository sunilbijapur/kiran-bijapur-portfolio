import { FiBookOpen, FiMic, FiUsers } from 'react-icons/fi';
import SEO from '@/components/ui/SEO';
import Container from '@/components/ui/Container';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import SampleDataNote from '@/components/ui/SampleDataNote';
import Reveal from '@/components/ui/Reveal';
import Badge from '@/components/ui/Badge';
import { courses, guestLectures, mentees } from '@/data/teaching';

export default function Teaching() {
  return (
    <>
      <SEO
        title="Teaching & Mentoring"
        description="Courses taught, guest lectures delivered, and students mentored by Dr. Kiran Bijapur in materials chemistry and energy science."
        path="/teaching"
      />
      <PageHero eyebrow="Teaching & Mentoring" title="Shaping the next generation of researchers" />

      <section className="section">
        <Container>
          <SampleDataNote />

          <SectionHeading eyebrow="Courses" title="Courses Taught" />
          <div className="mt-8 grid gap-6 md:grid-cols-3 mb-16">
            {courses.map((c, i) => (
              <Reveal key={c.id} delay={i * 0.08} className="card p-6">
                <FiBookOpen className="text-emerald-600 dark:text-emerald-300" size={20} aria-hidden="true" />
                <h3 className="mt-3 font-display text-lg text-navy-800 dark:text-white">{c.title}</h3>
                <p className="mt-1 text-sm text-ink-light dark:text-navy-200">{c.institution}</p>
                <div className="mt-3 flex gap-2">
                  <Badge tone="emerald">{c.level}</Badge>
                  <Badge tone="navy">{c.years}</Badge>
                </div>
              </Reveal>
            ))}
          </div>

          <SectionHeading eyebrow="Guest Lectures" title="Invited Talks & Workshops" />
          <div className="mt-8 grid gap-6 md:grid-cols-3 mb-16">
            {guestLectures.map((g, i) => (
              <Reveal key={g.id} delay={i * 0.08} className="card p-6">
                <FiMic className="text-emerald-600 dark:text-emerald-300" size={20} aria-hidden="true" />
                <h3 className="mt-3 font-display text-lg text-navy-800 dark:text-white leading-snug">{g.title}</h3>
                <p className="mt-2 text-sm text-ink-light dark:text-navy-200">{g.venue}</p>
                <Badge tone="navy">{g.year}</Badge>
              </Reveal>
            ))}
          </div>

          <SectionHeading eyebrow="Mentorship" title="Students Mentored" />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {mentees.map((m, i) => (
              <Reveal key={m.id} delay={i * 0.08} className="card p-6">
                <FiUsers className="text-emerald-600 dark:text-emerald-300" size={20} aria-hidden="true" />
                <h3 className="mt-3 font-display text-lg text-navy-800 dark:text-white">{m.name}</h3>
                <p className="mt-1 text-sm text-ink-light dark:text-navy-200">{m.program}</p>
                <p className="mt-2 text-sm text-ink-muted dark:text-navy-300">{m.topic}</p>
                <Badge tone={m.status === 'Ongoing' ? 'emerald' : 'navy'}>{m.status}</Badge>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
