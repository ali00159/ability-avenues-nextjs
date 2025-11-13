import { Metadata } from 'next';
import ContactUs from '@/components/ContactUs';
import { getLocationBySlug } from '@/lib/locations';

// Get Minneapolis location data
const minneapolisLocation = getLocationBySlug('minneapolis');

export const metadata: Metadata = {
  title: 'Contact Us - ABA Therapy in Minneapolis, MN | Ability Avenues',
  description: 'Contact Ability Avenues in Minneapolis for ABA therapy services. Center-based & in-home ABA. EIDBI/MA accepted. Transparent wait times. Call or schedule today.',
  openGraph: {
    title: 'Contact Us - ABA Therapy in Minneapolis, MN | Ability Avenues',
    description: 'Contact Ability Avenues in Minneapolis for ABA therapy services. Center-based & in-home options. EIDBI provider.',
    url: 'https://abilityavenues.com/contact',
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
    title: 'Contact Us - ABA Therapy in Minneapolis, MN',
    description: 'Contact Ability Avenues in Minneapolis for ABA therapy services. EIDBI/MA accepted.',
    images: ['/images/opengraph-image.jpg'],
  },
  alternates: {
    canonical: 'https://abilityavenues.com/contact',
  },
};

export default function ContactUsPage() {
  if (!minneapolisLocation) {
    throw new Error('Minneapolis location not found');
  }

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
                name: 'Contact',
                item: 'https://abilityavenues.com/contact',
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
            '@type': 'ContactPage',
            name: 'Contact Ability Avenues',
            url: 'https://abilityavenues.com/contact',
            description: 'Contact Ability Avenues in Minneapolis for ABA therapy services. Reach us by phone, email, or visit our Eden Prairie location.',
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
            mainEntity: {
              '@type': 'Organization',
              name: 'Ability Avenues',
              email: 'info@abilityavenues.com',
              telephone: '+1-952-900-2344',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '6385 Old Shady Oak Rd Suite 250',
                addressLocality: 'Eden Prairie',
                addressRegion: 'MN',
                postalCode: '55344',
                addressCountry: 'US',
              },
            },
          }),
        }}
      />
      <ContactUs location={minneapolisLocation} />
    </>
  );
}