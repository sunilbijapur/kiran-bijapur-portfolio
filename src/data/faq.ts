export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  { id: 'faq-01', question: 'Are you open to postdoctoral collaborations?', answer: 'Yes. I welcome international collaborations, interdisciplinary research partnerships, and postdoctoral opportunities in green hydrogen, electrocatalysis, and sustainable materials chemistry — please reach out via the Contact page.' },
  { id: 'faq-02', question: 'What are your core research areas?', answer: 'My research spans green hydrogen and seawater electrolysis, electrocatalysis (HER/OER), biomass-derived nanomaterials, carbon nanostructures, thermal management, and circular-economy technologies.' },
  { id: 'faq-03', question: 'Do you offer guest lectures or workshops?', answer: 'Yes, I regularly contribute guest lectures and workshops on green hydrogen, electrocatalysis, and sustainable nanomaterials — see the Teaching & Mentoring page for recent examples.' },
  { id: 'faq-04', question: 'How can funding agencies or industry reach out for collaboration?', answer: 'Please use the Contact form and select the relevant subject, or email directly. I am happy to discuss research partnerships, technology assessment, or joint funding proposals.' },
  { id: 'faq-05', question: 'Where can I find your full publication list and CV?', answer: 'The Downloads page provides a CV, research statement, and full publication list. The Publications page also lists individual papers with DOIs.' },
];
