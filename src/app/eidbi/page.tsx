import type { Metadata } from 'next';
import EIDBI from '@/components/EIDBI';

export const metadata: Metadata = {
  title: 'EIDBI Services in Minnesota | Early Autism Intervention',
  description:
    'EIDBI (Early Intensive Developmental and Behavioral Intervention) provides comprehensive, evidence-based autism services at no cost to eligible Minnesota families through Medical Assistance. Learn about eligibility, services, and how to get started.',
  openGraph: {
    title: 'EIDBI Services in Minnesota - Comprehensive Autism Support',
    description:
      'Get no-cost, evidence-based autism intervention through Minnesota\'s EIDBI program. Check eligibility and start your child\'s services today.',
    url: 'https://abilityavenues.com/eidbi',
    siteName: 'Ability Avenues',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EIDBI Services in Minnesota - Comprehensive Autism Support',
    description:
      'Get no-cost, evidence-based autism intervention through Minnesota\'s EIDBI program. Check eligibility and start your child\'s services today.',
  },
  alternates: {
    canonical: 'https://abilityavenues.com/eidbi',
  },
};

export default function EIDBIPage() {
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
                name: 'EIDBI',
                item: 'https://abilityavenues.com/eidbi',
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
            name: 'EIDBI Services - Early Intensive Developmental and Behavioral Intervention',
            serviceType: 'EIDBI Services - Early Intensive Developmental and Behavioral Intervention',
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
            areaServed: [
              {
                '@type': 'City',
                name: 'Minneapolis',
              },
              {
                '@type': 'State',
                name: 'Minnesota',
              },
            ],
            description: 'EIDBI (Early Intensive Developmental and Behavioral Intervention) provides comprehensive, evidence-based autism services at no cost to eligible Minnesota families through Medical Assistance. Learn about eligibility, services, and how to get started with ages 1-18.',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
              description: 'No-cost EIDBI services for eligible Minnesota families through Medical Assistance',
              eligibleRegion: {
                '@type': 'State',
                name: 'Minnesota',
              },
            },
          }),
        }}
      />
      <EIDBI />
    </>
  );
}

