import { useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { FiSend, FiMapPin, FiMail } from 'react-icons/fi';
import {
  SiGooglescholar,
  SiOrcid,
  SiResearchgate,
  SiGithub,
} from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import SEO from '@/components/ui/SEO';
import Container from '@/components/ui/Container';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import Toast, { type ToastState } from '@/components/ui/Toast';
import { site, socialLinks } from '@/data/profile';

const iconMap: Record<string, IconType> = {
  scholar: SiGooglescholar,
  orcid: SiOrcid,
  scopus: SiGooglescholar,
  researchgate: SiResearchgate,
  linkedin: FaLinkedin,
  github: SiGithub,
  email: FiMail,
};

// EmailJS credentials — set these in a .env file (see .env.example).
// If any is missing, the form gracefully falls back to a pre-filled
// mailto: link instead of failing silently.
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;
const isEmailJsConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

interface FormState {
  name: string;
  email: string;
  institution: string;
  country: string;
  subject: string;
  message: string;
}

const emptyForm: FormState = { name: '', email: '', institution: '', country: '', subject: '', message: '' };

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState<ToastState>(null);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!form.email.trim()) next.email = 'Please enter your email.';
    else if (!emailRegex.test(form.email)) next.email = 'Please enter a valid email address.';
    if (!form.subject.trim()) next.subject = 'Please enter a subject.';
    if (!form.message.trim()) next.message = 'Please enter a message.';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function buildMailto(): string {
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.institution && `Institution: ${form.institution}`,
      form.country && `Country: ${form.country}`,
      '',
      form.message,
    ]
      .filter(Boolean)
      .join('\n');
    const params = new URLSearchParams({ subject: form.subject || 'Website enquiry', body });
    return `mailto:${site.email}?${params.toString()}`;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    if (!isEmailJsConfigured) {
      // Graceful fallback: open the user's email client with a pre-filled message.
      window.location.href = buildMailto();
      setToast({
        type: 'success',
        message: 'Email isn\u2019t configured on this site yet, so we\u2019ve opened your email client with your message pre-filled instead.',
      });
      return;
    }

    setSending(true);
    try {
      await emailjs.send(
        SERVICE_ID!,
        TEMPLATE_ID!,
        {
          from_name: form.name,
          from_email: form.email,
          institution: form.institution,
          country: form.country,
          subject: form.subject,
          message: form.message,
          to_email: site.email,
        },
        { publicKey: PUBLIC_KEY! },
      );
      setToast({ type: 'success', message: 'Thank you \u2014 your message has been sent successfully. I\u2019ll respond as soon as possible.' });
      setForm(emptyForm);
    } catch (err) {
      console.error('EmailJS send failed:', err);
      setToast({
        type: 'error',
        message: 'Something went wrong sending your message. Please try again, or email directly at ' + site.email,
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <SEO title="Contact" description="Get in touch with Dr. Kiran Bijapur for research collaborations, postdoctoral opportunities, and funding partnerships." path="/contact" />
      <PageHero eyebrow="Contact" title="Let's start a conversation" description="For collaborations, postdoctoral opportunities, funding partnerships, or general enquiries." />

      <Toast toast={toast} onClose={() => setToast(null)} />

      <section className="section">
        <Container className="grid gap-12 lg:grid-cols-[1.2fr,0.8fr]">
          <Reveal>
            <form onSubmit={handleSubmit} noValidate className="card p-8 space-y-5">
              {!isEmailJsConfigured && (
                <p className="rounded-md border border-gold-400/30 bg-gold-50/60 dark:bg-gold-400/10 px-4 py-3 text-sm text-gold-800 dark:text-gold-200">
                  Email sending isn&rsquo;t configured yet — messages will open in your email client instead. See <code className="font-mono text-xs">.env.example</code> to enable direct EmailJS delivery.
                </p>
              )}

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy-700 dark:text-navy-100 mb-1.5">
                    Name <span className="text-emerald-600">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className="w-full rounded-sm border border-navy-800/15 dark:border-white/20 bg-white dark:bg-navy-800 px-4 py-2.5 text-sm text-navy-800 dark:text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
                  />
                  {errors.name && <p id="name-error" className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy-700 dark:text-navy-100 mb-1.5">
                    Email <span className="text-emerald-600">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className="w-full rounded-sm border border-navy-800/15 dark:border-white/20 bg-white dark:bg-navy-800 px-4 py-2.5 text-sm text-navy-800 dark:text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
                  />
                  {errors.email && <p id="email-error" className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="institution" className="block text-sm font-medium text-navy-700 dark:text-navy-100 mb-1.5">
                    Institution
                  </label>
                  <input
                    id="institution"
                    type="text"
                    value={form.institution}
                    onChange={(e) => updateField('institution', e.target.value)}
                    className="w-full rounded-sm border border-navy-800/15 dark:border-white/20 bg-white dark:bg-navy-800 px-4 py-2.5 text-sm text-navy-800 dark:text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-navy-700 dark:text-navy-100 mb-1.5">
                    Country
                  </label>
                  <input
                    id="country"
                    type="text"
                    value={form.country}
                    onChange={(e) => updateField('country', e.target.value)}
                    className="w-full rounded-sm border border-navy-800/15 dark:border-white/20 bg-white dark:bg-navy-800 px-4 py-2.5 text-sm text-navy-800 dark:text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-navy-700 dark:text-navy-100 mb-1.5">
                  Subject <span className="text-emerald-600">*</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  value={form.subject}
                  onChange={(e) => updateField('subject', e.target.value)}
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                  className="w-full rounded-sm border border-navy-800/15 dark:border-white/20 bg-white dark:bg-navy-800 px-4 py-2.5 text-sm text-navy-800 dark:text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
                />
                {errors.subject && <p id="subject-error" className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy-700 dark:text-navy-100 mb-1.5">
                  Message <span className="text-emerald-600">*</span>
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={form.message}
                  onChange={(e) => updateField('message', e.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className="w-full rounded-sm border border-navy-800/15 dark:border-white/20 bg-white dark:bg-navy-800 px-4 py-2.5 text-sm text-navy-800 dark:text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none resize-y"
                />
                {errors.message && <p id="message-error" className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.message}</p>}
              </div>

              <button type="submit" disabled={sending} className="btn-primary w-full sm:w-auto">
                <FiSend aria-hidden="true" /> {sending ? 'Sending\u2026' : 'Send Message'}
              </button>
            </form>
          </Reveal>

          <div className="space-y-8">
            <Reveal delay={0.08} className="card p-7">
              <h3 className="font-display text-lg text-navy-800 dark:text-white mb-4">Direct Contact</h3>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-sm text-emerald-700 dark:text-emerald-300 hover:underline break-all">
                <FiMail aria-hidden="true" /> {site.email}
              </a>
              <p className="mt-3 flex items-center gap-3 text-sm text-ink-light dark:text-navy-200">
                <FiMapPin aria-hidden="true" /> {site.location}
              </p>
            </Reveal>

            <Reveal delay={0.14} className="card p-7">
              <h3 className="font-display text-lg text-navy-800 dark:text-white mb-4">Academic & Social Profiles</h3>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((s) => {
                  const Icon = iconMap[s.icon];
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.icon === 'email' ? undefined : '_blank'}
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-navy-800/15 dark:border-white/20 px-3 py-1.5 text-xs font-medium text-navy-700 dark:text-navy-100 hover:border-emerald-400/60 hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors"
                    >
                      <Icon size={13} /> {s.label}
                    </a>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={0.2} className="card overflow-hidden">
              <iframe
                title="Location map"
                src={`https://www.google.com/maps?q=${encodeURIComponent(site.location)}&output=embed`}
                width="100%"
                height="240"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
