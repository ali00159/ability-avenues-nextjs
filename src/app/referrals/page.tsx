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
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Partner with Ability Avenues - Referrals',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Referrals - Partner with Ability Avenues for ABA Therapy',
    description: 'Healthcare providers can refer patients to Ability Avenues for comprehensive ABA therapy services in Minneapolis.',
    images: ['/images/og-default.jpg'],
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
            '@type': 'Service',
            name: 'ABA Therapy Referral Services',
            serviceType: 'Healthcare Referral Service',
            provider: {
              '@type': 'Organization',
              name: 'Ability Avenues',
              url: 'https://abilityavenues.com',
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
            description: 'Seamless ABA therapy referral process for healthcare providers in Minneapolis.',
          }),
        }}
      />
      <Referrals />
    </>
  );
}