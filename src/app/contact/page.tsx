import { Metadata } from 'next';
import ContactUs from '@/components/ContactUs';

export const metadata: Metadata = {
  title: 'Contact Us - ABA Therapy in Minneapolis',
  description: 'Contact Ability Avenues in Minneapolis for ABA therapy services. Reach us by phone, email, or visit our Eden Prairie location. Get started today.',
  openGraph: {
    title: 'Contact Us - ABA Therapy in Minneapolis',
    description: 'Contact Ability Avenues in Minneapolis for ABA therapy services. Reach us by phone, email, or visit our Eden Prairie location.',
    url: 'https://abilityavenues.com/contact',
    siteName: 'Ability Avenues',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Ability Avenues - ABA Therapy Minneapolis',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - ABA Therapy in Minneapolis',
    description: 'Contact Ability Avenues in Minneapolis for ABA therapy services. Reach us by phone, email, or visit our location.',
    images: ['/images/og-default.jpg'],
  },
  alternates: {
    canonical: 'https://abilityavenues.com/contact',
  },
};

export default function ContactUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact Ability Avenues',
            url: 'https://abilityavenues.com/contact',
            description: 'Contact page for Ability Avenues ABA therapy services in Minneapolis.',
            mainEntity: {
              '@type': 'Organization',
              name: 'Ability Avenues',
              telephone: '',
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
          }),
        }}
      />
      <ContactUs />
    </>
  );
}