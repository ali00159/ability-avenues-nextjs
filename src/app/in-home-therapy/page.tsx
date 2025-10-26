import { Metadata } from 'next';
import InHomeTherapy from '@/components/InHomeTherapy';

export const metadata: Metadata = {
  title: 'In-Home ABA Therapy Minneapolis & Minnesota | Ability Avenues',
  description: 'Personalized in-home ABA therapy for children with autism ages 1-18 in Minneapolis & Minnesota. BCBA-supervised, flexible scheduling, family involvement, and natural environment learning. EIDBI accepted.',
  openGraph: {
    title: 'In-Home ABA Therapy Minneapolis & Minnesota | Ability Avenues',
    description: 'Personalized in-home ABA therapy for children with autism ages 1-18 in Minneapolis & Minnesota. BCBA-supervised, flexible scheduling, family involvement, and natural environment learning.',
    url: 'https://abilityavenues.com/in-home-therapy',
    siteName: 'Ability Avenues',
    images: [
      {
        url: '/images/therapy-session.jpg',
        width: 1200,
        height: 630,
        alt: 'In-home ABA therapy at Ability Avenues in Minneapolis',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'In-Home ABA Therapy Minneapolis & Minnesota | Ability Avenues',
    description: 'Personalized in-home ABA therapy for children with autism ages 1-18 in Minneapolis & Minnesota. BCBA-supervised, flexible scheduling, family involvement.',
    images: ['/images/therapy-session.jpg'],
  },
  alternates: {
    canonical: 'https://abilityavenues.com/in-home-therapy',
  },
};

export default function InHomeTherapyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'In-Home Applied Behavior Analysis Therapy',
            provider: {
              '@type': 'Organization',
              name: 'Ability Avenues',
            },
            areaServed: {
              '@type': 'City',
              name: 'Minneapolis',
            },
            availableChannel: {
              '@type': 'ServiceChannel',
              serviceType: 'In-Home ABA Therapy',
              serviceName: 'In-Home ABA Therapy for Ages 1-18',
            },
            description: 'Personalized in-home ABA therapy for children with autism ages 1-18 in Minneapolis & Minnesota. BCBA-supervised, flexible scheduling, family involvement, and natural environment learning.',
            offers: {
              '@type': 'Offer',
              description: 'In-home ABA therapy services with flexible scheduling',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What age ranges do you serve for in-home ABA therapy?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We serve children and teens ages 1-18 in our in-home ABA therapy programs. Our flexible scheduling and natural environment approach works well for all age groups, from early intervention to transition planning.',
                },
              },
              {
                '@type': 'Question',
                name: 'How flexible is the scheduling for in-home therapy?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Our in-home ABA therapy offers very flexible scheduling with 20-40 hours per week of personalized support. Sessions can be scheduled mornings, afternoons, evenings, or weekends to fit your family\'s unique routine and preferences.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can family members participate in in-home therapy sessions?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes! Family involvement is a key component of our in-home ABA therapy. Parents, siblings, and caregivers are encouraged to participate in sessions, learning strategies to support their child\'s development throughout the day.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you accept insurance and EIDBI coverage for in-home therapy?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes! We accept EIDBI coverage for ages 1-18 and work with most major insurance providers including Blue Cross Blue Shield, Medica, HealthPartners, Ucare, Humana, and UnitedHealthcare for our in-home ABA therapy services.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is there a waitlist for in-home ABA therapy?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No waitlist! We have immediate availability for in-home ABA therapy services. Contact us to schedule an assessment and get started with your child\'s personalized therapy program.',
                },
              },
            ],
          }),
        }}
      />
      <InHomeTherapy />
    </>
  );
}

