export const CTA_PRIMARY = 'Book a free institute demo';
export const CTA_PRIMARY_HREF = '#demo';
export const CTA_WHATSAPP = 'Chat on WhatsApp';

export const WHATSAPP_NUMBER = '917397108049';
export const WHATSAPP_DISPLAY = '+91 73971 08049';
export const CONTACT_EMAIL = 'info@vivodha.com';
export const DEMO_FORM_ENDPOINT = import.meta.env.PUBLIC_DEMO_FORM_ENDPOINT ?? '';
const WHATSAPP_MESSAGE = "Hi, I'd like to book a Study Buddy demo for [school name].";
export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const SIGN_IN_HREF = 'https://studybuddy.vivodha.com/login';

export const NAV = [
  { label: 'Platform', href: '#platform' },
  { label: 'Features', href: '#features' },
  { label: 'For management', href: '#management' },
  { label: 'Pilot', href: '#pilot' },
  { label: 'FAQ', href: '#faq' },
];
