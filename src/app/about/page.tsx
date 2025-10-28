import { Metadata } from 'next';
import AboutUs from '@/components/AboutUs';

export const metadata: Metadata = {
  title: 'About Us - Our Mission to Support Children with Autism',
  description: 'Learn about Ability Avenues, a leading ABA therapy provider in Minneapolis. Our dedicated team and evidence-based approach help children with autism reach their full potential.',
  openGraph: {
    title: 'About Us - Our Mission to Support Children with Autism',
    description: 'Learn about Ability Avenues, a leading ABA therapy provider in Minneapolis. Our dedicated team and evidence-based approach help children with autism reach their full potential.',
    url: 'https://abilityavenues.com/about',
    siteName: 'Ability Avenues',
    images: [
      {
        url: '/images/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ability Avenues Team - ABA Therapy Minneapolis',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - Our Mission to Support Children with Autism',
    description: 'Learn about Ability Avenues, a leading ABA therapy provider in Minneapolis. Our dedicated team and evidence-based approach.',
    images: ['/images/opengraph-image.jpg'],
  },
  alternates: {
    canonical: 'https://abilityavenues.com/about',
  },
};

export default function AboutUsPage() {
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
            description: 'Leading ABA therapy provider in Minneapolis dedicated to supporting children with autism through evidence-based interventions.',
            foundingDate: '2020',
            areaServed: {
              '@type': 'City',
              name: 'Minneapolis',
            },
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Minneapolis',
              addressRegion: 'MN',
              addressCountry: 'US',
            },
          }),
        }}
      />
      <AboutUs />
    </>
  );
}