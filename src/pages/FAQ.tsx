import SEO from '@/components/ui/SEO';
import Container from '@/components/ui/Container';
import PageHero from '@/components/ui/PageHero';
import FAQAccordionItem from '@/components/cards/FAQAccordionItem';
import { faqItems } from '@/data/faq';

export default function FAQ() {
  return (
    <>
      <SEO title="Frequently Asked Questions" description="Answers to common questions about collaborating with, contacting, or learning more about Dr. Kiran Bijapur's research." path="/faq" />
      <PageHero eyebrow="FAQ" title="Frequently asked questions" />
      <section className="section">
        <Container className="max-w-3xl space-y-4">
          {faqItems.map((f, i) => (
            <FAQAccordionItem key={f.id} item={f} index={i} />
          ))}
        </Container>
      </section>
    </>
  );
}
