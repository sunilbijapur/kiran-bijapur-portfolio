import { Link } from 'react-router-dom';
import { FiArrowUp, FiMail } from 'react-icons/fi';
import {
  SiGooglescholar,
  SiOrcid,
  SiResearchgate,
  SiGithub,
} from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { site, socialLinks, researchInterests } from '@/data/profile';
import type { IconType } from 'react-icons';

const iconMap: Record<string, IconType> = {
  scholar: SiGooglescholar,
  orcid: SiOrcid,
  scopus: SiGooglescholar, // Scopus has no dedicated simple-icon; reuse a scholarly glyph
  researchgate: SiResearchgate,
  linkedin: FaLinkedin,
  github: SiGithub,
  email: FiMail,
};

const quickLinks = [
  { label: 'About', path: '/about' },
  { label: 'Research', path: '/research' },
  { label: 'Publications', path: '/publications' },
  { label: 'Patents', path: '/patents' },
  { label: 'Downloads', path: '/downloads' },
  { label: 'Contact', path: '/contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-800 text-navy-100 hex-bg">
      <div className="container-page py-16 grid gap-10 md:grid-cols-4">
        <div>
          <Link to="/" className="font-display text-xl text-white">
            {site.name}
          </Link>
          <p className="mt-3 text-sm text-navy-200 leading-relaxed">{site.tagline}</p>
          <p className="mt-4 text-sm text-navy-300">{site.position}</p>
          <p className="text-sm text-navy-300">{site.organisation}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            {quickLinks.map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="text-sm text-navy-200 hover:text-emerald-300 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">Research Areas</h3>
          <ul className="mt-4 space-y-2">
            {researchInterests.slice(0, 6).map((r) => (
              <li key={r} className="text-sm text-navy-200">
                {r}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">Contact</h3>
          <p className="mt-4 text-sm text-navy-200">{site.location}</p>
          <a href={`mailto:${site.email}`} className="mt-1 inline-block text-sm text-emerald-300 hover:text-emerald-200 break-all">
            {site.email}
          </a>

          <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-white/90">Social &amp; Academic Profiles</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {socialLinks.map((s) => {
              const Icon = iconMap[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.icon === 'email' ? undefined : '_blank'}
                  rel="noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-navy-200 hover:text-emerald-300 hover:border-emerald-400/50 transition-colors"
                >
                  <Icon size={15} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-navy-300">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 hover:text-emerald-300 hover:border-emerald-400/50 transition-colors"
          >
            Back to top <FiArrowUp size={12} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
