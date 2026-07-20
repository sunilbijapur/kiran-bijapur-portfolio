import { FiDownload, FiFileText } from 'react-icons/fi';
import SEO from '@/components/ui/SEO';
import Container from '@/components/ui/Container';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import SampleDataNote from '@/components/ui/SampleDataNote';
import { asset } from '@/lib/paths';

const downloads = [
  {
    id: 'dl-cv',
    title: 'Curriculum Vitae',
    description: 'Full academic CV including education, positions, publications, patents and awards.',
    file: 'documents/Dr-Kiran-Bijapur-CV.pdf',
  },
  {
    id: 'dl-statement',
    title: 'Research Statement',
    description: 'A summary of research vision, past contributions, and future directions.',
    file: 'documents/Dr-Kiran-Bijapur-Research-Statement.pdf',
  },
  {
    id: 'dl-publist',
    title: 'Full Publication List',
    description: 'Complete list of journal articles, conference papers and patents.',
    file: 'documents/Dr-Kiran-Bijapur-Publication-List.pdf',
  },
];

export default function Downloads() {
  return (
    <>
      <SEO
        title="Downloads"
        description="Download Dr. Kiran Bijapur's CV, research statement, and full publication list."
        path="/downloads"
      />
      <PageHero eyebrow="Downloads" title="CV, research statement & publication list" />

      <section className="section">
        <Container>
          <SampleDataNote text="These PDFs are auto-generated placeholder templates. Replace the files in public/documents/ (same filenames) with your real, verified documents before publishing." />
          <div className="grid gap-6 md:grid-cols-3">
            {downloads.map((d, i) => (
              <Reveal key={d.id} delay={i * 0.08} className="card p-7 flex flex-col">
                <FiFileText className="text-emerald-600 dark:text-emerald-300" size={26} aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg text-navy-800 dark:text-white">{d.title}</h3>
                <p className="mt-2 text-sm text-ink-light dark:text-navy-200 leading-relaxed flex-1">{d.description}</p>
                <a href={asset(d.file)} download className="btn-primary mt-6 self-start">
                  <FiDownload aria-hidden="true" /> Download PDF
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
