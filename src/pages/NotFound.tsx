import { Link } from 'react-router-dom';
import SEO from '@/components/ui/SEO';
import Container from '@/components/ui/Container';
import { FiArrowLeft } from 'react-icons/fi';

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you're looking for could not be found." path="/404" />
      <section className="section min-h-[60vh] flex items-center">
        <Container className="text-center">
          <span className="font-mono text-6xl font-semibold text-emerald-500">404</span>
          <h1 className="mt-4 text-2xl font-display text-navy-800 dark:text-white">Page not found</h1>
          <p className="mt-2 text-ink-light dark:text-navy-200">The page you're looking for doesn't exist or has moved.</p>
          <Link to="/" className="btn-primary mt-8 inline-flex">
            <FiArrowLeft aria-hidden="true" /> Back to Home
          </Link>
        </Container>
      </section>
    </>
  );
}
