import { Metadata } from 'next';
import ContactUs from '@/components/ContactUs';

export const metadata: Metadata = {
  title: 'Contact Us - ABA Therapy in Minneapolis',
  description: 'Contact Ability Avenues in Minneapolis for ABA therapy services. Reach us by phone, email, or visit our Eden Prairie location. Get started today.',
  openGraph: {
    title: 'Contact Us - ABA Therapy in Minneapolis',
    description: 'Contact Ability Avenues in Minneapolis for ABA therapy services. Reach us by phone, email, or visit our Eden Prairie location.',
    url: 'https://abilityavenues.com/contact',
    siteName: 'Ability Avenues',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ability Avenues - ABA Therapy in Minneapolis',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - ABA Therapy in Minneapolis',
    description: 'Contact Ability Avenues in Minneapolis for ABA therapy services. Reach us by phone, email, or visit our location.',
    images: ['/images/opengraph-image.jpg'],
  },
  alternates: {
    canonical: 'https://abilityavenues.com/contact',
  },
};

export default function ContactUsPage() {
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
            name: 'Contact Ability Avenues',
            url: 'https://abilityavenues.com/contact',
            description: 'Contact Ability Avenues in Minneapolis for ABA therapy services. Reach us by phone, email, or visit our Eden Prairie location.',
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
        cityName="Minneapolis"
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9051!2d-93.2650!3d44.9778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b333909377bbbd%3A0x939fcb2fcf22d956!2sMinneapolis%2C%20MN!5e0!3m2!1sen!2sus!4v1735000000&z=11"
        mapTitle="Minneapolis Service Area Map"
      />
    </>
  );
}