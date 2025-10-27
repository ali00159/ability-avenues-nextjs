import { Metadata } from 'next';
import CenterBasedTherapy from '@/components/CenterBasedTherapy';

export const metadata: Metadata = {
  title: 'Center-Based ABA Therapy in Minneapolis',
  description: 'Evidence-based center-based ABA therapy for children and teens with autism ages 1-18 in Minneapolis. BCBA-supervised programs, EIDBI accepted ages 1-18. Tour our autism center today.',
  openGraph: {
    title: 'Center-Based ABA Therapy in Minneapolis',
    description: 'Evidence-based center-based ABA therapy for children and teens with autism ages 1-18 in Minneapolis. BCBA-supervised programs, EIDBI accepted ages 1-18.',
    url: 'https://abilityavenues.com/center-based-therapy',
    siteName: 'Ability Avenues',
    images: [
      {
        url: '/images/therapy-session.jpg',
        width: 1200,
        height: 630,
        alt: 'Center-based ABA therapy at Ability Avenues in Minneapolis',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Center-Based ABA Therapy in Minneapolis',
    description: 'Evidence-based center-based ABA therapy for children and teens with autism ages 1-18 in Minneapolis.',
    images: ['/images/therapy-session.jpg'],
  },
  alternates: {
    canonical: 'https://abilityavenues.com/center-based-therapy',
  },
};

export default function CenterBasedTherapyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Ability Avenues',
            image: 'https://abilityavenues.com/images/therapy-session.jpg',
            '@id': 'https://abilityavenues.com',
            url: 'https://abilityavenues.com',
            telephone: '',
            priceRange: '$$',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Minneapolis',
              addressRegion: 'MN',
              addressCountry: 'US',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 44.9778,
              longitude: -93.2650,
            },
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
              ],
              opens: '08:30',
              closes: '16:30',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MedicalBusiness',
            name: 'Ability Avenues',
            description: 'Center-based ABA therapy for children and teens with autism ages 1-18 in Minneapolis',
            url: 'https://abilityavenues.com/center-based-therapy',
            telephone: '',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Minneapolis',
              addressRegion: 'MN',
              addressCountry: 'US',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Applied Behavior Analysis Therapy',
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
              serviceType: 'Center-Based ABA Therapy',
              serviceName: 'Center-Based ABA Therapy for Ages 1-18',
            },
          }),
        }}
      />
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
                name: 'Center-Based Therapy',
                item: 'https://abilityavenues.com/center-based-therapy',
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
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What age ranges do you serve in center-based ABA therapy?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We serve children and teens ages 1-18 in our Minneapolis center. We offer four specialized programs: Early Steps for ages 1-3, Foundations for ages 4-7, Skills Builder for ages 8-12, and Transition for ages 13-18. Each program is designed to meet the unique developmental needs of different age groups.',
                },
              },
              {
                '@type': 'Question',
                name: 'What are your hours of operation?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Our center-based programs operate Monday through Friday from 8:30 AM to 4:30 PM. We follow a structured daily schedule that balances individual therapy, group activities, and age-appropriate learning opportunities.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is BCBA supervision and why is it important?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'BCBA (Board Certified Behavior Analyst) supervision ensures clinical excellence in your child\'s ABA therapy. Our BCBAs develop individualized treatment plans, train and oversee therapy staff, analyze progress data, and adjust interventions to ensure your child makes meaningful progress toward their goals.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you accept insurance and EIDBI coverage?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes! We accept EIDBI coverage for ages 1-18 and work with most major insurance providers including Blue Cross Blue Shield, Medica, HealthPartners, Ucare, Humana, and UnitedHealthcare. Coverage varies by plan, so we recommend contacting us to verify your specific insurance benefits.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is there a waitlist for center-based ABA therapy?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Waitlist availability varies based on current program capacity and your child\'s age group. We recommend scheduling an assessment as soon as possible to secure a spot. We\'ll discuss current availability and estimated start dates during your intake consultation.',
                },
              },
            ],
          }),
        }}
      />
      <CenterBasedTherapy />
    </>
  );
}