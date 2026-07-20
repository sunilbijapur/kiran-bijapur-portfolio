import { Helmet } from 'react-helmet-async';
import { site } from '@/data/profile';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
}

/**
 * Per-page SEO tags. Combined with the base tags in index.html, this keeps
 * every route crawlable with a distinct, descriptive <title> and
 * <meta name="description"> — important for academic discoverability.
 */
export default function SEO({ title, description, path = '' }: SEOProps) {
  const fullTitle = `${title} | ${site.fullTitle}`;
  const url = `${site.siteUrl}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
