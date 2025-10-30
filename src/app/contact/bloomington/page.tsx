import { Metadata } from 'next';
import ContactUs from '@/components/ContactUs';

export const metadata: Metadata = {
  title: 'ABA Therapy in Bloomington, Minnesota',
  description: 'Contact Ability Avenues in Bloomington, Minnesota for autism therapy services. Reach us by phone, email, or visit our location. Get started today.',
  openGraph: {
    title: 'ABA Therapy in Bloomington, Minnesota',
    description: 'Contact Ability Avenues in Bloomington, Minnesota for autism therapy services. Reach us by phone, email, or visit our location.',
    url: 'https://abilityavenues.com/contact/bloomington',
    siteName: 'Ability Avenues',
    images: [
      {
        url: '/images/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Ability Avenues - ABA Therapy Bloomington',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABA Therapy in Bloomington, Minnesota',
    description: 'Contact Ability Avenues in Bloomington, Minnesota for autism therapy services. Reach us by phone, email, or visit our location.',
    images: ['/images/opengraph-image.jpg'],
  },
  alternates: {
    canonical: 'https://abilityavenues.com/contact/bloomington',
  },
};

export default function BloomingtonContactPage() {
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
                name: 'Bloomington',
                item: 'https://abilityavenues.com/contact/bloomington',
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
            name: 'Contact Ability Avenues - Bloomington',
            url: 'https://abilityavenues.com/contact/bloomington',
            description: 'Contact Ability Avenues in Bloomington for ABA therapy services. Reach us by phone, email, or visit our location.',
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
        cityName="Bloomington"
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9029.9!2d-93.2796!3d44.8408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f6293a3a3a3a3a%3A0x0000000000000000!2sBloomington%2C%20MN!5e0!3m2!1sen!2sus!4v1735000000&z=11"
        mapTitle="Bloomington Service Area Map"
      />
    </>
  );
}

