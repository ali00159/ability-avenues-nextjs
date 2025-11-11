import { Metadata } from 'next';
import ContactUs from '@/components/ContactUs';

export const metadata: Metadata = {
  title: 'ABA Therapy in Apple Valley, Minnesota',
  description:
    'Contact Ability Avenues in Apple Valley, Minnesota for ABA therapy services. Reach us by phone, email, or visit our Apple Valley support team. Start your intake today.',
  openGraph: {
    title: 'ABA Therapy in Apple Valley, Minnesota',
    description:
      'Contact Ability Avenues in Apple Valley, Minnesota for ABA therapy services. Reach us by phone, email, or visit our Apple Valley support team.',
    url: 'https://abilityavenues.com/contact/apple-valley',
    siteName: 'Ability Avenues',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABA Therapy in Apple Valley, Minnesota',
    description:
      'Contact Ability Avenues in Apple Valley, Minnesota for ABA therapy services. Reach our Apple Valley team by phone or email to get started.',
  },
  alternates: {
    canonical: 'https://abilityavenues.com/contact/apple-valley',
  },
};

export default function AppleValleyContactPage() {
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
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Apple Valley',
                item: 'https://abilityavenues.com/contact/apple-valley',
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
            name: 'Contact Ability Avenues - Apple Valley',
            url: 'https://abilityavenues.com/contact/apple-valley',
            description:
              'Contact Ability Avenues in Apple Valley for ABA therapy services. Reach us by phone, email, or connect with our Apple Valley intake team.',
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
      <ContactUs
        cityName="Apple Valley"
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27863.38977992653!2d-93.2354084!3d44.7319096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f63257f782a13d%3A0x97ea032be29b8a0a!2sApple%20Valley%2C%20MN!5e0!3m2!1sen!2sus!4v1736469600&z=11"
        mapTitle="Apple Valley Service Area Map"
      />
    </>
  );
}


