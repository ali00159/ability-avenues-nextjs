import { Metadata } from 'next';
import ContactUs from '@/components/ContactUs';

export const metadata: Metadata = {
  title: 'ABA Therapy in Eagan, Minnesota',
  description:
    'Contact Ability Avenues in Eagan, Minnesota for ABA therapy services. Reach us by phone, email, or visit our Eagan support team. Start your intake today.',
  openGraph: {
    title: 'ABA Therapy in Eagan, Minnesota',
    description:
      'Contact Ability Avenues in Eagan, Minnesota for ABA therapy services. Reach us by phone, email, or visit our Eagan support team.',
    url: 'https://abilityavenues.com/contact/eagan',
    siteName: 'Ability Avenues',
    images: [
      {
        url: '/images/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Ability Avenues - ABA Therapy Eagan',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABA Therapy in Eagan, Minnesota',
    description:
      'Contact Ability Avenues in Eagan, Minnesota for ABA therapy services. Reach our Eagan team by phone or email to get started.',
    images: ['/images/opengraph-image.jpg'],
  },
  alternates: {
    canonical: 'https://abilityavenues.com/contact/eagan',
  },
};

export default function EaganContactPage() {
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
                name: 'Eagan',
                item: 'https://abilityavenues.com/contact/eagan',
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
            name: 'Contact Ability Avenues - Eagan',
            url: 'https://abilityavenues.com/contact/eagan',
            description:
              'Contact Ability Avenues in Eagan for ABA therapy services. Reach us by phone, email, or connect with our Eagan intake team.',
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
        cityName="Eagan"
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27889.01723046464!2d-93.1769444!3d44.8041326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f632a39c4b5105%3A0xb9b418f27ae9ea77!2sEagan%2C%20MN!5e0!3m2!1sen!2sus!4v1736468400&z=11"
        mapTitle="Eagan Service Area Map"
      />
    </>
  );
}


