import { Metadata } from 'next';
import IntakeProcess from '@/components/IntakeProcess';

export const metadata: Metadata = {
  title: 'Intake Process - Simple Steps to Start ABA Therapy',
  description: 'Get started with Ability Avenues in Minneapolis. Simple 5-step intake process: initial contact, insurance verification, assessment, treatment plan, and ongoing support.',
  openGraph: {
    title: 'Intake Process - Simple Steps to Start ABA Therapy',
    description: 'Get started with Ability Avenues in Minneapolis. Simple 5-step intake process for ABA therapy services.',
    url: 'https://abilityavenues.com/intake-process',
    siteName: 'Ability Avenues',
    images: [
      {
        url: '/images/hero-family-therapy.jpg',
        width: 1200,
        height: 630,
        alt: 'Intake Process - Ability Avenues ABA Therapy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Intake Process - Simple Steps to Start ABA Therapy',
    description: 'Get started with Ability Avenues in Minneapolis. Simple 5-step intake process for ABA therapy services.',
    images: ['/images/hero-family-therapy.jpg'],
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
            '@type': 'HowTo',
            name: 'Intake Process for ABA Therapy at Ability Avenues',
            description: 'Simple 5-step process to get started with ABA therapy services in Minneapolis.',
            step: [
              {
                '@type': 'HowToStep',
                position: 1,
                name: 'Initial Contact',
                text: 'Reach out to us via phone or email to express your interest in our services. Our intake coordinator will gather basic information about your child and family.',
              },
              {
                '@type': 'HowToStep',
                position: 2,
                name: 'Insurance & Documentation',
                text: 'We\'ll verify your insurance benefits and review any existing documentation. This helps us understand your coverage and plan accordingly.',
              },
              {
                '@type': 'HowToStep',
                position: 3,
                name: 'Comprehensive Assessment',
                text: 'Our clinical team will conduct a comprehensive assessment to understand your child\'s strengths, challenges, and goals.',
              },
              {
                '@type': 'HowToStep',
                position: 4,
                name: 'Treatment Plan Development',
                text: 'We\'ll create a customized treatment plan with specific goals and interventions tailored to your child\'s unique needs.',
              },
              {
                '@type': 'HowToStep',
                position: 5,
                name: 'Begin Therapy',
                text: 'Start therapy sessions and receive ongoing support, progress updates, and family training to support your child\'s development.',
              },
            ],
          }),
        }}
      />
      <IntakeProcess />
    </>
  );
}