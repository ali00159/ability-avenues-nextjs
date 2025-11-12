import { Metadata } from 'next';
import Referrals from '@/components/Referrals';

export const metadata: Metadata = {
  title: 'Referrals - Partner with Ability Avenues for ABA Therapy',
  description: 'Healthcare providers and professionals can refer patients to Ability Avenues for comprehensive ABA therapy services in Minneapolis. Seamless intake process and collaborative care.',
  openGraph: {
    title: 'Referrals - Partner with Ability Avenues for ABA Therapy',
    description: 'Healthcare providers and professionals can refer patients to Ability Avenues for comprehensive ABA therapy services in Minneapolis.',
    url: 'https://abilityavenues.com/referrals',
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
    title: 'Referrals - Partner with Ability Avenues for ABA Therapy',
    description: 'Healthcare providers can refer patients to Ability Avenues for comprehensive ABA therapy services in Minneapolis.',
    images: ['/images/opengraph-image.jpg'],
  },
  alternates: {
    canonical: 'https://abilityavenues.com/referrals',
  },
};

export default function ReferralsPage() {
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
                name: 'Referrals',
                item: 'https://abilityavenues.com/referrals',
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
            '@type': 'Service',
            name: 'ABA Therapy Referral Services',
            serviceType: 'Healthcare Referral Service',
            provider: {
              '@type': 'Organization',
              name: 'Ability Avenues',
              url: 'https://abilityavenues.com',
              telephone: '+1-952-900-2344',
              email: 'info@abilityavenues.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '6385 Old Shady Oak Rd Suite 250',
                addressLocality: 'Eden Prairie',
                addressRegion: 'MN',
                postalCode: '55344',
                addressCountry: 'US',
              },
            },
            areaServed: {
              '@type': 'City',
              name: 'Minneapolis',
            },
            description: 'Healthcare providers and professionals can refer patients to Ability Avenues for comprehensive ABA therapy services in Minneapolis. Seamless intake process and collaborative care with quick response times and personalized treatment planning.',
            offers: {
              '@type': 'Offer',
              description: 'Streamlined referral process with dedicated support for healthcare providers and families.',
            },
          }),
        }}
      />
      <Referrals />
    </>
  );
}