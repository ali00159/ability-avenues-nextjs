import { Metadata } from 'next';
import ContactUs from '@/components/ContactUs';

export const metadata: Metadata = {
  title: 'ABA Therapy in Maplewood, Minnesota',
  description:
    'Contact Ability Avenues in Maplewood, Minnesota for ABA therapy services. Reach us by phone, email, or visit our Maplewood support team. Start your intake today.',
  openGraph: {
    title: 'ABA Therapy in Maplewood, Minnesota',
    description:
      'Contact Ability Avenues in Maplewood, Minnesota for ABA therapy services. Reach us by phone, email, or visit our Maplewood support team.',
    url: 'https://abilityavenues.com/contact/maplewood',
    siteName: 'Ability Avenues',
    images: [
      {
        url: '/images/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Ability Avenues - ABA Therapy Maplewood',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABA Therapy in Maplewood, Minnesota',
    description:
      'Contact Ability Avenues in Maplewood, Minnesota for ABA therapy services. Reach our Maplewood team by phone or email to get started.',
    images: ['/images/opengraph-image.jpg'],
  },
  alternates: {
    canonical: 'https://abilityavenues.com/contact/maplewood',
  },
};

export default function MaplewoodContactPage() {
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
                name: 'Maplewood',
                item: 'https://abilityavenues.com/contact/maplewood',
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
            name: 'Contact Ability Avenues - Maplewood',
            url: 'https://abilityavenues.com/contact/maplewood',
            description:
              'Contact Ability Avenues in Maplewood for ABA therapy services. Reach us by phone, email, or connect with our Maplewood intake team.',
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
        cityName="Maplewood"
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27935.05706684535!2d-93.0271651!3d44.9530214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b2d942ee1e4ed5%3A0xf7f3b7f0e68c3f8!2sMaplewood%2C%20MN!5e0!3m2!1sen!2sus!4v1736467800&z=11"
        mapTitle="Maplewood Service Area Map"
      />
    </>
  );
}


