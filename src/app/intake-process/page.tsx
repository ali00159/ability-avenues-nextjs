import { Metadata } from 'next';
import IntakeProcess from '@/components/IntakeProcess';

export const metadata: Metadata = {
  title: 'Intake Process - Supportive Steps to Start ABA Therapy',
  description: 'Get started with Ability Avenues in Minneapolis. Supportive 6-step intake process covering eligibility review, intake meeting, document collection, CMDE, individualized treatment plan, and insurance authorization.',
  openGraph: {
    title: 'Intake Process - Supportive Steps to Start ABA Therapy',
    description: 'Get started with Ability Avenues in Minneapolis. Supportive 6-step intake process for ABA therapy services.',
    url: 'https://abilityavenues.com/intake-process',
    siteName: 'Ability Avenues',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ability Avenues - ABA Therapy in Minneapolis',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Intake Process - Supportive Steps to Start ABA Therapy',
    description: 'Get started with Ability Avenues in Minneapolis. Supportive 6-step intake process for ABA therapy services.',
    images: ['/images/opengraph-image.jpg'],
  },
  alternates: {
    canonical: 'https://abilityavenues.com/intake-process',
  },
};

export default function IntakeProcessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://abilityavenues.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Intake Process',
                item: 'https://abilityavenues.com/intake-process',
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'Intake Process for ABA Therapy at Ability Avenues',
            description: 'Supportive 6-step process to get started with ABA therapy services in Minneapolis.',
            step: [
              {
                '@type': 'HowToStep',
                position: 1,
                name: 'Eligibility Review (1 day)',
                text: 'We gather your child’s full name, date of birth, and insurance card so we can verify insurance eligibility and begin enrollment.',
              },
              {
                '@type': 'HowToStep',
                position: 2,
                name: 'Intake Meeting (30 minutes)',
                text: 'We schedule a video intake meeting to complete paperwork, review policies, and sign a Release of Information for coordinated support.',
              },
              {
                '@type': 'HowToStep',
                position: 3,
                name: 'Document Collection (1–2 weeks)',
                text: 'You gather key documents, including medical records, IEP or school-based assessments, and prior evaluations or treatment summaries.',
              },
              {
                '@type': 'HowToStep',
                position: 4,
                name: 'Comprehensive Multidisciplinary Evaluation (1 week)',
                text: 'Our Qualified Supervising Professional conducts a telehealth caregiver interview, observes your child in a familiar setting, reviews collected documents, and uses standardized tools.',
              },
              {
                '@type': 'HowToStep',
                position: 5,
                name: 'Individualized Treatment Plan (1 week)',
                text: 'Your BCBA integrates CMDE findings and caregiver input to create a customized plan, including a telehealth interview and follow-up observation.',
              },
              {
                '@type': 'HowToStep',
                position: 6,
                name: 'Insurance Authorization & Start of Services (1 week)',
                text: 'We obtain insurance approval for the plan and begin scheduling ABA sessions delivered by a Behavior Technician under BCBA supervision through Passage Health.',
              },
            ],
          }),
        }}
      />
      <IntakeProcess />
    </>
  );
}