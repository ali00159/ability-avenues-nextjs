import { Metadata } from 'next';
import ContactUs from '@/components/ContactUs';

export const metadata: Metadata = {
  title: 'ABA Therapy in Eden Prairie, Minnesota',
  description:
    'Contact Ability Avenues in Eden Prairie, Minnesota for ABA therapy services. Reach us by phone, email, or visit our Eden Prairie support team. Start your intake today.',
  openGraph: {
    title: 'ABA Therapy in Eden Prairie, Minnesota',
    description:
      'Contact Ability Avenues in Eden Prairie, Minnesota for ABA therapy services. Reach us by phone, email, or visit our Eden Prairie support team.',
    url: 'https://abilityavenues.com/contact/eden-prairie',
    siteName: 'Ability Avenues',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABA Therapy in Eden Prairie, Minnesota',
    description:
      'Contact Ability Avenues in Eden Prairie, Minnesota for ABA therapy services. Reach our Eden Prairie team by phone or email to get started.',
  },
  alternates: {
    canonical: 'https://abilityavenues.com/contact/eden-prairie',
  },
};

export default function EdenPrairieContactPage() {
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
                name: 'Eden Prairie',
                item: 'https://abilityavenues.com/contact/eden-prairie',
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
            name: 'Contact Ability Avenues - Eden Prairie',
            url: 'https://abilityavenues.com/contact/eden-prairie',
            description:
              'Contact Ability Avenues in Eden Prairie for ABA therapy services. Reach us by phone, email, or connect with our Eden Prairie intake team.',
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
        cityName="Eden Prairie"
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9029.3!2d-93.4708!3d44.8547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f62f7d3f5c5c5b%3A0x5e5c5c5c5c5c5c5c!2sEden+Prairie%2C+MN+55344!5e0!3m2!1sen!2sus!4v1735000000&z=11"
        mapTitle="Eden Prairie Service Area Map"
      />
    </>
  );
}

