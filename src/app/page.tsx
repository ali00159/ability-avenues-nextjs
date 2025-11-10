import { Metadata } from 'next';
import Index from '@/components/Index';

export const metadata: Metadata = {
  title: 'ABA Therapy in Minneapolis | Center & In-Home Autism Services | Ability Avenues',
  description:
    'Compassionate ABA therapy in Minneapolis for children and teens ages 1-18. Ability Avenues offers center-based and in-home programs, BCBA-led teams, EIDBI Medicaid support, and family coaching every step of the way.',
  keywords: [
    'ABA therapy Minneapolis',
    'autism services Minnesota',
    'center-based ABA',
    'in-home ABA therapy',
    'EIDBI providers',
    'Ability Avenues',
  ],
  openGraph: {
    title: 'ABA Therapy in Minneapolis | Center & In-Home Autism Services | Ability Avenues',
    description:
      'Discover Ability Avenues’ BCBA-led ABA therapy across Minneapolis—center-based classrooms, in-home support, and EIDBI guidance tailored for ages 1-18.',
    url: 'https://abilityavenues.com',
    siteName: 'Ability Avenues',
    images: [
      {
        url: 'https://abilityavenues.com/images/hero-family-therapy.jpg',
        width: 1200,
        height: 630,
        alt: 'Family celebrating progress at Ability Avenues ABA therapy center in Minneapolis',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABA Therapy in Minneapolis | Center & In-Home Autism Services | Ability Avenues',
    description:
      'Explore center-based and in-home ABA therapy with BCBA-led teams, family coaching, and EIDBI support throughout the Twin Cities.',
    images: ['https://abilityavenues.com/images/hero-family-therapy.jpg'],
  },
  alternates: {
    canonical: 'https://abilityavenues.com',
  },
};

export default function IndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': 'https://abilityavenues.com',
            name: 'Ability Avenues',
            url: 'https://abilityavenues.com',
            logo: 'https://abilityavenues.com/images/opengraph-image.jpg',
            image: ['https://abilityavenues.com/images/opengraph-image.jpg'],
            description:
              'Evidence-based ABA therapy by Board Certified Behavior Analysts (BCBAs) for children with autism ages 1-18 in Minneapolis, Minnesota.',
            email: 'info@abilityavenues.com',
            slogan: 'Milestones start with compassionate ABA therapy in Minneapolis.',
            knowsAbout: [
              'Applied Behavior Analysis',
              'Center-based ABA therapy',
              'In-home ABA therapy',
              'EIDBI funding support',
              'Autism family coaching',
            ],
            address: {
              '@type': 'PostalAddress',
              streetAddress: '6385 Old Shady Oak Rd Suite 250',
              addressLocality: 'Eden Prairie',
              addressRegion: 'MN',
              postalCode: '55344',
              addressCountry: 'US',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 44.9778,
              longitude: -93.265,
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
                dayOfWeek: ['Saturday', 'Sunday'],
                opens: '10:00',
                closes: '16:00',
              },
            ],
            areaServed: {
              '@type': 'City',
              name: 'Minneapolis',
            },
            telephone: '+1-952-900-2344',
            contactPoint: [
              {
                '@type': 'ContactPoint',
                telephone: '+1-952-900-2344',
                contactType: 'customer service',
                email: 'info@abilityavenues.com',
                availableLanguage: ['English'],
                areaServed: 'US',
              },
            ],
            priceRange: '$$',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: 4.8,
              reviewCount: 150,
              bestRating: 5,
              worstRating: 1,
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'ABA Therapy Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Center-Based ABA Therapy',
                    description:
                      'Comprehensive, play-based therapy in a preschool-like setting for children with autism spectrum disorder.',
                  },
                  availabilityEnds: '2026-12-31',
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'In-Home ABA Therapy',
                    description:
                      'Personalized one-on-one Applied Behavior Analysis delivered in the comfort of your home.',
                  },
                  areaServed: 'Minneapolis–Saint Paul Metro',
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Early Intensive Developmental & Behavioral Intervention',
                    description:
                      'Comprehensive early intervention services for children ages 1-18 with developmental delays and autism spectrum disorder.',
                  },
                  eligibleCustomerType: 'Families utilizing Minnesota Medicaid / EIDBI benefit',
                },
              ],
            },
            makesOffer: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Family Training & Coaching',
                  description: 'BCBA-led caregiver coaching to extend progress beyond sessions.',
                },
              },
            ],
            review: {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: 5,
                bestRating: 5,
              },
              author: {
                '@type': 'Person',
                name: 'Twin Cities Parent',
              },
              reviewBody:
                'Ability Avenues built a thoughtful ABA program that helped our child communicate more and navigate school with confidence.',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            '@id': 'https://abilityavenues.com/#website',
            name: 'Ability Avenues',
            url: 'https://abilityavenues.com',
            inLanguage: 'en-US',
            description:
              'Ability Avenues delivers center-based and in-home ABA therapy across Minneapolis with BCBA-led teams, family coaching, and Minnesota EIDBI support.',
            about: [
              { '@type': 'Thing', name: 'ABA Therapy' },
              { '@type': 'Thing', name: 'Autism Services in Minneapolis' },
              { '@type': 'Thing', name: 'EIDBI Providers' },
            ],
            publisher: {
              '@type': 'Organization',
              name: 'Ability Avenues',
              url: 'https://abilityavenues.com',
              logo: {
                '@type': 'ImageObject',
                url: 'https://abilityavenues.com/images/opengraph-image.jpg',
              },
            },
            potentialAction: {
              '@type': 'ContactAction',
              target: 'https://abilityavenues.com/contact',
              name: 'Schedule ABA Consultation',
              description: 'Connect with Ability Avenues to discuss ABA therapy options in Minneapolis.',
            },
          }),
        }}
      />
      <Index />
    </>
  );
}