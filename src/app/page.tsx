import { Metadata } from 'next';
import Index from '@/components/Index';

export const metadata: Metadata = {
  title: 'ABA Therapy Minneapolis | Board Certified Behavior Analysts | Ability Avenues',
  description: 'Evidence-based ABA therapy by Board Certified Behavior Analysts (BCBAs) for children with autism ages 2-18. Center-based and in-home therapy in Minneapolis, Minnesota. We accept EIDBI (Minnesota Medicaid) and most insurance plans.',
  openGraph: {
    title: 'ABA Therapy Minneapolis | Board Certified Behavior Analysts | Ability Avenues',
    description: 'Evidence-based ABA therapy by Board Certified Behavior Analysts (BCBAs) for children with autism ages 2-18. Center-based and in-home therapy in Minneapolis, Minnesota. We accept EIDBI (Minnesota Medicaid) and most insurance plans.',
    url: 'https://abilityavenues.com',
    siteName: 'Ability Avenues',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ability Avenues - ABA Therapy Minneapolis',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABA Therapy Minneapolis | Board Certified Behavior Analysts | Ability Avenues',
    description: 'Evidence-based ABA therapy by Board Certified Behavior Analysts (BCBAs) for children with autism ages 2-18. Center-based and in-home therapy in Minneapolis, Minnesota. We accept EIDBI (Minnesota Medicaid) and most insurance plans.',
    images: ['/opengraph-image.jpg'],
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
            logo: 'https://abilityavenues.com/opengraph-image.jpg',
            description: 'Evidence-based ABA therapy by Board Certified Behavior Analysts (BCBAs) for children with autism ages 2-18 in Minneapolis, Minnesota.',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Minneapolis',
              addressRegion: 'MN',
              addressCountry: 'US',
            },
            areaServed: {
              '@type': 'City',
              name: 'Minneapolis',
            },
            telephone: '+1-612-555-0123',
            priceRange: '$$',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              reviewCount: '150',
              bestRating: '5',
              worstRating: '1'
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
                    description: 'Comprehensive, play-based therapy in a preschool-like setting for children with autism spectrum disorder.'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'In-Home ABA Therapy',
                    description: 'Personalized one-on-one Applied Behavior Analysis delivered in the comfort of your home.'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Early Intensive Developmental & Behavioral Intervention',
                    description: 'Comprehensive early intervention services for children ages 0-7 with developmental delays and autism spectrum disorder.'
                  }
                }
              ]
            }
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Ability Avenues',
            url: 'https://abilityavenues.com',
          }),
        }}
      />
      <Index />
    </>
  );
}