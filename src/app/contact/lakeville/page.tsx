import { Metadata } from 'next';
import ContactUs from '@/components/ContactUs';

export const metadata: Metadata = {
  title: 'ABA Therapy in Lakeville, Minnesota',
  description:
    'Contact Ability Avenues in Lakeville, Minnesota for ABA therapy services. Reach us by phone, email, or visit our Lakeville support team. Start your intake today.',
  openGraph: {
    title: 'ABA Therapy in Lakeville, Minnesota',
    description:
      'Contact Ability Avenues in Lakeville, Minnesota for ABA therapy services. Reach us by phone, email, or visit our Lakeville support team.',
    url: 'https://abilityavenues.com/contact/lakeville',
    siteName: 'Ability Avenues',
    images: [
      {
        url: '/images/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Ability Avenues - ABA Therapy Lakeville',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABA Therapy in Lakeville, Minnesota',
    description:
      'Contact Ability Avenues in Lakeville, Minnesota for ABA therapy services. Reach our Lakeville team by phone or email to get started.',
    images: ['/images/opengraph-image.jpg'],
  },
  alternates: {
    canonical: 'https://abilityavenues.com/contact/lakeville',
  },
};

export default function LakevilleContactPage() {
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
                name: 'Lakeville',
                item: 'https://abilityavenues.com/contact/lakeville',
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
            name: 'Contact Ability Avenues - Lakeville',
            url: 'https://abilityavenues.com/contact/lakeville',
            description:
              'Contact Ability Avenues in Lakeville for ABA therapy services. Reach us by phone, email, or connect with our Lakeville intake team.',
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
        cityName="Lakeville"
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27506.94200634732!2d-93.2821976!3d44.6496866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f637bb38f8ef33%3A0x9bde4b6b64b0d3d5!2sLakeville%2C%20MN!5e0!3m2!1sen!2sus!4v1736467200&z=11"
        mapTitle="Lakeville Service Area Map"
      />
    </>
  );
}


