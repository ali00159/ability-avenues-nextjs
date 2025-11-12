import { Metadata } from 'next';
import { Location, baseUrl } from './locations';

export function generateContactMetadata(location: Location): Metadata {
  return {
    title: `ABA Therapy in ${location.name}, Minnesota`,
    description: location.metaDescription,
    openGraph: {
      title: `ABA Therapy in ${location.name}, Minnesota`,
      description: location.ogDescription,
      url: `${baseUrl}/contact/${location.slug}`,
      siteName: 'Ability Avenues',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `ABA Therapy in ${location.name}, Minnesota`,
      description: location.twitterDescription,
    },
    alternates: {
      canonical: `${baseUrl}/contact/${location.slug}`,
    },
  };
}

