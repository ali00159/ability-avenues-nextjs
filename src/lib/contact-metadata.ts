import { Metadata } from 'next';
import { Location, baseUrl } from './locations';

export function generateContactMetadata(location: Location): Metadata {
  return {
    title: `ABA Therapy in ${location.name} | ABA in Minnesota`,
    description: location.metaDescription,
    openGraph: {
      title: `ABA Therapy in ${location.name} | ABA in Minnesota`,
      description: location.ogDescription,
      url: `${baseUrl}/contact/${location.slug}`,
      siteName: 'Ability Avenues',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: '/images/opengraph-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Ability Avenues - ABA in Minnesota',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `ABA Therapy in ${location.name} | ABA in Minnesota`,
      description: location.twitterDescription,
      images: ['/images/opengraph-image.jpg'],
    },
    alternates: {
      canonical: `${baseUrl}/contact/${location.slug}`,
    },
  };
}

