import { Metadata } from 'next';
import ContactUs from '@/components/ContactUs';

export const metadata: Metadata = {
  title: 'ABA Therapy in Edina, Minnesota',
  description: 'Contact Ability Avenues in Edina, Minnesota for autism therapy services. Reach us by phone, email, or visit our location. Get started today.',
  openGraph: {
    title: 'ABA Therapy in Edina, Minnesota',
    description: 'Contact Ability Avenues in Edina, Minnesota for autism therapy services. Reach us by phone, email, or visit our location.',
    url: 'https://abilityavenues.com/contact/edina',
    siteName: 'Ability Avenues',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABA Therapy in Edina, Minnesota',
    description: 'Contact Ability Avenues in Edina, Minnesota for autism therapy services. Reach us by phone, email, or visit our location.',
  },
  alternates: {
    canonical: 'https://abilityavenues.com/contact/edina',
  },
};

export default function EdinaContactPage() {
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
                name: 'Edina',
                item: 'https://abilityavenues.com/contact/edina',
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
            name: 'Contact Ability Avenues - Edina',
            url: 'https://abilityavenues.com/contact/edina',
            description: 'Contact Ability Avenues in Edina for ABA therapy services. Reach us by phone, email, or visit our location.',
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
        cityName="Edina"
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9035.5!2d-93.3499!3d44.8897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f6233c0f0f0f0f%3A0x0000000000000000!2sEdina%2C%20MN!5e0!3m2!1sen!2sus!4v1735000000&z=11"
        mapTitle="Edina Service Area Map"
      />
    </>
  );
}

