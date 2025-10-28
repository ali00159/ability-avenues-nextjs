import { Metadata } from 'next';
import Index from '@/components/Index';

export const metadata: Metadata = {
  title: 'Ability Avenues - ABA Therapy for Children with Autism in Minneapolis',
  description: 'Personalized autism therapy and ABA services for children with autism. Center-based and in-home autism therapy in Minneapolis, Minnesota.',
  openGraph: {
    title: 'Ability Avenues - ABA Therapy for Children with Autism in Minneapolis',
    description: 'Personalized autism therapy and ABA services for children with autism. Center-based and in-home autism therapy in Minneapolis, Minnesota.',
    url: 'https://abilityavenues.com',
    siteName: 'Ability Avenues',
    images: [
      {
        url: '/images/opengraph-image.jpg',
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
    title: 'Ability Avenues - ABA Therapy for Children with Autism in Minneapolis',
    description: 'Personalized autism therapy and ABA services for children with autism. Center-based and in-home autism therapy in Minneapolis, Minnesota.',
    images: ['/images/opengraph-image.jpg'],
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
            '@type': 'Organization',
            name: 'Ability Avenues',
            url: 'https://abilityavenues.com',
            logo: 'https://abilityavenues.com/images/opengraph-image.jpg',
            description: 'Personalized autism therapy and ABA services for children with autism in Minneapolis, Minnesota.',
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