import { Metadata } from 'next';
import ContactUs from '@/components/ContactUs';

export const metadata: Metadata = {
  title: 'ABA Therapy in Golden Valley, Minnesota',
  description: 'Contact Ability Avenues in Golden Valley, Minnesota for autism therapy services. Reach us by phone, email, or visit our location. Get started today.',
  openGraph: {
    title: 'ABA Therapy in Golden Valley, Minnesota',
    description: 'Contact Ability Avenues in Golden Valley, Minnesota for autism therapy services. Reach us by phone, email, or visit our location.',
    url: 'https://abilityavenues.com/contact/golden-valley',
    siteName: 'Ability Avenues',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABA Therapy in Golden Valley, Minnesota',
    description: 'Contact Ability Avenues in Golden Valley, Minnesota for autism therapy services. Reach us by phone, email, or visit our location.',
  },
  alternates: {
    canonical: 'https://abilityavenues.com/contact/golden-valley',
  },
};

export default function GoldenValleyContactPage() {
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
                name: 'Golden Valley',
                item: 'https://abilityavenues.com/contact/golden-valley',
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
            name: 'Contact Ability Avenues - Golden Valley',
            url: 'https://abilityavenues.com/contact/golden-valley',
            description: 'Contact Ability Avenues in Golden Valley for ABA therapy services. Reach us by phone, email, or visit our location.',
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
        cityName="Golden Valley"
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9032.8!2d-93.3566!3d44.9912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b332b3b6f6f6f6%3A0x0000000000000000!2sGolden%20Valley%2C%20MN!5e0!3m2!1sen!2sus!4v1735000000&z=11"
        mapTitle="Golden Valley Service Area Map"
      />
    </>
  );
}

