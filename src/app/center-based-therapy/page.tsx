import { Metadata } from 'next';
import CenterBasedTherapy from '@/components/CenterBasedTherapy';

export const metadata: Metadata = {
  title: 'Center-Based ABA Therapy in Minneapolis | Ability Avenues Autism Programs',
  description:
    'Explore Ability Avenues’ center-based ABA therapy in Minneapolis: four age-specific tracks (1-18), BCBA-led care teams, daily skill-building schedules, and EIDBI-friendly onboarding for Minnesota families.',
  keywords: [
    'center-based ABA',
    'ABA therapy Minneapolis',
    'autism center Minnesota',
    'BCBA supervised programs',
    'EIDBI ABA coverage',
    'Ability Avenues',
  ],
  openGraph: {
    title: 'Center-Based ABA Therapy in Minneapolis | Ability Avenues Autism Programs',
    description:
      'Tour a bright, BCBA-led center offering four age-specific ABA programs, daily group learning, and EIDBI-friendly support for Minnesota families.',
    url: 'https://abilityavenues.com/center-based-therapy',
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
    title: 'Center-Based ABA Therapy in Minneapolis | Ability Avenues Autism Programs',
    description:
      'See Ability Avenues\' center-based ABA therapy tracks for ages 1-18, BCBA-led teams, and EIDBI onboarding support in Minneapolis.',
    images: ['/images/opengraph-image.jpg'],
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
            name: 'Ability Avenues Center-Based ABA Therapy',
            image: 'https://abilityavenues.com/images/hero-family-therapy.jpg',
            '@id': 'https://abilityavenues.com/center-based-therapy#business',
            url: 'https://abilityavenues.com/center-based-therapy',
            telephone: '+1-952-900-2344',
            email: 'info@abilityavenues.com',
            priceRange: '$$',
            paymentAccepted: 'EIDBI Medicaid Benefit, Major Insurance Plans',
            areaServed: {
              '@type': 'City',
              name: 'Minneapolis',
            },
            address: {
              '@type': 'PostalAddress',
              streetAddress: '6385 Old Shady Oak Rd Suite 250',
              addressLocality: 'Eden Prairie',
              addressRegion: 'MN',
              postalCode: '55344',
              addressCountry: 'US',
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Center-Based ABA Programs',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Early Steps (Ages 1-3)',
                    description: 'Play-based ABA therapy focused on early communication, joint attention, and caregiver coaching for toddlers.',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Foundations (Ages 4-7)',
                    description: 'School-readiness ABA program featuring group learning, daily routines, and visual supports.',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Skills Builder (Ages 8-12)',
                    description: 'Functional living skill development, social coaching, and regulation support for elementary-age learners.',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Transition (Ages 13-18)',
                    description: 'Teen-focused ABA therapy emphasizing independence, community readiness, and vocational strengths.',
                  },
                },
              ],
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 44.9778,
              longitude: -93.2650,
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '08:00',
                closes: '18:00',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Saturday',
                opens: '10:00',
                closes: '16:00',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Sunday',
                opens: '10:00',
                closes: '16:00',
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
            '@type': 'MedicalBusiness',
            name: 'Ability Avenues Center-Based ABA Therapy',
            description:
              'Center-based ABA therapy for children and teens with autism ages 1-18 in Minneapolis with BCBA-led care teams and daily small-group learning.',
            url: 'https://abilityavenues.com/center-based-therapy',
            medicalSpecialty: 'BehavioralTherapy',
            isAcceptingNewPatients: true,
            address: {
              '@type': 'PostalAddress',
              streetAddress: '6385 Old Shady Oak Rd Suite 250',
              addressLocality: 'Eden Prairie',
              addressRegion: 'MN',
              postalCode: '55344',
              addressCountry: 'US',
            },
            availableService: [
              {
                '@type': 'TherapeuticProcedure',
                name: 'Center-Based Applied Behavior Analysis (ABA)',
                description: 'Individualized ABA sessions with BCBA oversight, data-driven goals, and parent collaboration.',
              },
              {
                '@type': 'MedicalTherapy',
                name: 'BCBA Supervision & Family Coaching',
                description: 'Ongoing supervision, caregiver training, and interdisciplinary collaboration led by Board Certified Behavior Analysts.',
              },
            ],
            healthPlanNetworkId: [
              'EIDBI Medicaid Benefit',
              'Blue Cross Blue Shield of Minnesota',
              'HealthPartners',
              'Medica',
              'Ucare',
              'Humana',
              'UnitedHealthcare',
            ],
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
            serviceAudience: {
              '@type': 'PeopleAudience',
              audienceType: 'Families of children and teens with autism spectrum disorder ages 1-18',
              healthCondition: {
                '@type': 'MedicalCondition',
                name: 'Autism Spectrum Disorder',
              },
            },
            areaServed: {
              '@type': 'City',
              name: 'Minneapolis',
            },
            availableChannel: {
              '@type': 'ServiceChannel',
              serviceType: 'Center-Based ABA Therapy',
              serviceName: 'Center-Based ABA Therapy for Ages 1-18',
              hoursAvailable: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '08:30',
                  closes: '16:30',
                },
              ],
            },
            offers: [
              {
                '@type': 'Offer',
                name: 'EIDBI-Covered Center-Based ABA Therapy',
                availability: 'https://schema.org/InStock',
                priceCurrency: 'USD',
                price: 0,
                description: 'Comprehensive ABA therapy covered through Minnesota EIDBI and major insurance plans for eligible families.',
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