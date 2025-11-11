import { Metadata } from 'next';
import ContactUs from '@/components/ContactUs';

export const metadata: Metadata = {
  title: 'ABA Therapy in Brooklyn Park, Minnesota',
  description:
    'Contact Ability Avenues in Brooklyn Park, Minnesota for ABA therapy services. Reach us by phone, email, or visit our Brooklyn Park support team. Start your intake today.',
  openGraph: {
    title: 'ABA Therapy in Brooklyn Park, Minnesota',
    description:
      'Contact Ability Avenues in Brooklyn Park, Minnesota for ABA therapy services. Reach us by phone, email, or visit our Brooklyn Park support team.',
    url: 'https://abilityavenues.com/contact/brooklyn-park',
    siteName: 'Ability Avenues',
    images: [
      {
        url: '/images/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Ability Avenues - ABA Therapy Brooklyn Park',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABA Therapy in Brooklyn Park, Minnesota',
    description:
      'Contact Ability Avenues in Brooklyn Park, Minnesota for ABA therapy services. Reach our Brooklyn Park team by phone or email to get started.',
    images: ['/images/opengraph-image.jpg'],
  },
  alternates: {
    canonical: 'https://abilityavenues.com/contact/brooklyn-park',
  },
};

export default function BrooklynParkContactPage() {
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
                name: 'Brooklyn Park',
                item: 'https://abilityavenues.com/contact/brooklyn-park',
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
            name: 'Contact Ability Avenues - Brooklyn Park',
            url: 'https://abilityavenues.com/contact/brooklyn-park',
            description:
              'Contact Ability Avenues in Brooklyn Park for ABA therapy services. Reach us by phone, email, or connect with our Brooklyn Park intake team.',
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
        cityName="Brooklyn Park"
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27854.640694454195!2d-93.40344!3d45.0941319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b3335cdcf86e1d%3A0xfef4360e5d46df4!2sBrooklyn%20Park%2C%20MN!5e0!3m2!1sen!2sus!4v1736470200&z=11"
        mapTitle="Brooklyn Park Service Area Map"
      />
    </>
  );
}


