import { Metadata } from 'next';
import ContactUs from '@/components/ContactUs';

export const metadata: Metadata = {
  title: 'ABA Therapy in Maple Grove, Minnesota',
  description:
    'Contact Ability Avenues in Maple Grove, Minnesota for ABA therapy services. Reach us by phone, email, or visit our Maple Grove support team. Start your intake today.',
  openGraph: {
    title: 'ABA Therapy in Maple Grove, Minnesota',
    description:
      'Contact Ability Avenues in Maple Grove, Minnesota for ABA therapy services. Reach us by phone, email, or visit our Maple Grove support team.',
    url: 'https://abilityavenues.com/contact/maple-grove',
    siteName: 'Ability Avenues',
    images: [
      {
        url: '/images/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Ability Avenues - ABA Therapy Maple Grove',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABA Therapy in Maple Grove, Minnesota',
    description:
      'Contact Ability Avenues in Maple Grove, Minnesota for ABA therapy services. Reach our Maple Grove team by phone or email to get started.',
    images: ['/images/opengraph-image.jpg'],
  },
  alternates: {
    canonical: 'https://abilityavenues.com/contact/maple-grove',
  },
};

export default function MapleGroveContactPage() {
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
                name: 'Maple Grove',
                item: 'https://abilityavenues.com/contact/maple-grove',
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
            name: 'Contact Ability Avenues - Maple Grove',
            url: 'https://abilityavenues.com/contact/maple-grove',
            description:
              'Contact Ability Avenues in Maple Grove for ABA therapy services. Reach us by phone, email, or connect with our Maple Grove intake team.',
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
        cityName="Maple Grove"
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27888.350402995763!2d-93.4878893!3d45.0724646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b35fcb1b8c0e3d%3A0x1e9c5f2dda8369d9!2sMaple%20Grove%2C%20MN!5e0!3m2!1sen!2sus!4v1736470800&z=11"
        mapTitle="Maple Grove Service Area Map"
      />
    </>
  );
}


