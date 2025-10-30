import { Metadata } from 'next';
import Blog from '@/components/Blog';

export const metadata: Metadata = {
  title: 'ABA Therapy Blog - Resources for Autism & Child Development',
  description: 'Expert insights, resources, and educational content about ABA therapy, autism support, and child development from Ability Avenues in Minneapolis.',
  openGraph: {
    title: 'ABA Therapy Blog - Resources for Autism & Child Development',
    description: 'Expert insights, resources, and educational content about ABA therapy, autism support, and child development from Ability Avenues in Minneapolis.',
    url: 'https://abilityavenues.com/blog',
    siteName: 'Ability Avenues',
    images: [
      {
        url: '/images/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ability Avenues Blog - ABA Therapy Resources',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABA Therapy Blog - Resources for Autism & Child Development',
    description: 'Expert insights, resources, and educational content about ABA therapy, autism support, and child development.',
    images: ['/images/opengraph-image.jpg'],
  },
  alternates: {
    canonical: 'https://abilityavenues.com/blog',
  },
};

export default function BlogPage() {
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
                name: 'Blog',
                item: 'https://abilityavenues.com/blog',
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
            '@type': 'Blog',
            name: 'Ability Avenues Blog',
            description: 'Expert insights, resources, and educational content about ABA therapy, autism support, and child development from Board Certified Behavior Analysts in Minneapolis.',
            url: 'https://abilityavenues.com/blog',
            publisher: {
              '@type': 'Organization',
              name: 'Ability Avenues',
              url: 'https://abilityavenues.com',
              logo: {
                '@type': 'ImageObject',
                url: 'https://abilityavenues.com/images/opengraph-image.jpg',
                width: 1200,
                height: 630,
              },
            },
          }),
        }}
      />
      <Blog />
    </>
  );
}