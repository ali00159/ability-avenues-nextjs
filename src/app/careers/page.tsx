import { Metadata } from 'next';
import Careers from '@/components/Careers';

export const metadata: Metadata = {
  title: 'Careers - Join Our ABA Therapy Team in Minneapolis',
  description: 'Join the Ability Avenues team in Minneapolis. We offer rewarding careers in ABA therapy, competitive benefits, and opportunities to make a difference in children\'s lives.',
  openGraph: {
    title: 'Careers - Join Our ABA Therapy Team in Minneapolis',
    description: 'Join the Ability Avenues team in Minneapolis. We offer rewarding careers in ABA therapy, competitive benefits, and opportunities to make a difference.',
    url: 'https://abilityavenues.com/careers',
    siteName: 'Ability Avenues',
    images: [
      {
        url: '/images/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ability Avenues Careers - Join Our ABA Therapy Team',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers - Join Our ABA Therapy Team in Minneapolis',
    description: 'Join the Ability Avenues team. We offer rewarding careers in ABA therapy, competitive benefits, and opportunities to make a difference.',
    images: ['/images/opengraph-image.jpg'],
  },
  alternates: {
    canonical: 'https://abilityavenues.com/careers',
  },
};

export default function CareersPage() {
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
                name: 'Careers',
                item: 'https://abilityavenues.com/careers',
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
            '@type': 'Organization',
            name: 'Ability Avenues',
            url: 'https://abilityavenues.com',
            logo: {
              '@type': 'ImageObject',
              url: 'https://abilityavenues.com/images/opengraph-image.jpg',
              width: 1200,
              height: 630,
            },
            description: 'Join our team of ABA therapy professionals dedicated to supporting children with autism in Minneapolis. We offer rewarding careers in ABA therapy, competitive benefits, and opportunities to make a difference in children\'s lives.',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '6385 Old Shady Oak Rd Suite 250',
              addressLocality: 'Eden Prairie',
              addressRegion: 'MN',
              postalCode: '55344',
              addressCountry: 'US',
            },
            jobLocation: {
              '@type': 'Place',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Eden Prairie',
                addressRegion: 'MN',
                addressCountry: 'US',
              },
            },
          }),
        }}
      />
      <Careers />
    </>
  );
}