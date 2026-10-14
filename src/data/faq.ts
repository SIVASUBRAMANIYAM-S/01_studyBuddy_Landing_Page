// Single source of truth for FAQ content (CONTENT.md §13).
// Faq.astro renders this list, and Base.astro's FAQPage JSON-LD is built
// from the exact same array, so the schema can never drift from what a
// visitor actually sees in the accordion.
export interface FaqItem {
  q: string;
  a: string;
}

export const faqs: FaqItem[] = [
  {
    q: 'How long does setup take, and do we need an IT team?',
    a: "No IT team is needed. Study Buddy runs in the cloud and opens on phones, tablets and computers. We configure your branded portal, student rosters and teacher accounts, and you're live within 48 hours.",
  },
  {
    q: 'How does handwritten answer-sheet evaluation work, and can we trust it?',
    a: 'Teachers scan or photograph answer sheets and upload them. Study Buddy grades them in seconds, highlights every mistake and gives step-wise feedback. Your teachers see every evaluated sheet and stay in charge of the final result.',
  },
  {
    q: 'Will this replace our teachers?',
    a: 'No. Study Buddy takes on repetitive work like correction, test creation and late-night doubts, so teachers can spend more time teaching and supporting the students who need them most.',
  },
  {
    q: 'What does it cost?',
    a: "Pricing is tailored to your institute's size and the modules you need, so we don't publish a single price. Book a free demo and we'll share a plan that fits your school, along with the pilot details.",
  },
  {
    q: 'Which boards, classes and exams do you cover?',
    a: 'CBSE and Tamil Nadu State Board for Classes 8 to 12, plus JEE Main, JEE Advanced and NEET preparation. Content is aligned with NCERT chapters.',
  },
  {
    q: "Is our students' data safe? Who owns it?",
    a: 'Your institute owns its data. It is hosted in India, encrypted at rest and in transit, and protected by role-based access, so each person sees only what they should. We follow the Digital Personal Data Protection (DPDP) Act, including parent consent and data deletion on request.',
  },
  {
    q: "Can the platform carry our school's name?",
    a: 'Yes. Your logo, name and brand colours appear across the student, parent and teacher dashboards, with a small "Powered by Vivodha" mark.',
  },
  {
    q: "What happens if the pilot doesn't work for us?",
    a: "Then you don't expand. The 30-day pilot exists so you can decide on evidence. We agree the measures with you at the start and review them together at the end. There's no long-term commitment.",
  },
];
