import { Metadata } from 'next';
import ContactUs from '@/components/ContactUs';

export const metadata: Metadata = {
  title: 'ABA Therapy in Burnsville, Minnesota',
  description:
    'Contact Ability Avenues in Burnsville, Minnesota for ABA therapy services. Reach us by phone, email, or visit our Burnsville support team. Start your intake today.',
  openGraph: {
    title: 'ABA Therapy in Burnsville, Minnesota',
    description:
      'Contact Ability Avenues in Burnsville, Minnesota for ABA therapy services. Reach us by phone, email, or visit our Burnsville support team.',
    url: 'https://abilityavenues.com/contact/burnsville',
    siteName: 'Ability Avenues',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABA Therapy in Burnsville, Minnesota',
    description:
      'Contact Ability Avenues in Burnsville, Minnesota for ABA therapy services. Reach our Burnsville team by phone or email to get started.',
  },
  alternates: {
    canonical: 'https://abilityavenues.com/contact/burnsville',
  },
};

export default function BurnsvilleContactPage() {
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
                name: 'Burnsville',
                item: 'https://abilityavenues.com/contact/burnsville',
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
            name: 'Contact Ability Avenues - Burnsville',
            url: 'https://abilityavenues.com/contact/burnsville',
            description:
              'Contact Ability Avenues in Burnsville for ABA therapy services. Reach us by phone, email, or connect with our Burnsville intake team.',
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
        cityName="Burnsville"
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27911.46501585954!2d-93.311928!3d44.7677426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f6353d4c6df3e5%3A0x3adfed0d2979275e!2sBurnsville%2C%20MN!5e0!3m2!1sen!2sus!4v1736469000&z=11"
        mapTitle="Burnsville Service Area Map"
      />
    </>
  );
}


