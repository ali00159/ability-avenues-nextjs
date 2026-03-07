import { Metadata } from 'next';
import EarlySignsAutismPost from '@/components/blog/EarlySignsAutismPost';

export const metadata: Metadata = {
  title: 'Early Signs of Autism in Toddlers: A Minnesota Parent\'s Guide',
  description: 'Learn the early signs of autism in toddlers, when to talk to your pediatrician, and how Minnesota families can access screening, evaluation, and support.',
  openGraph: {
    title: 'Early Signs of Autism in Toddlers: A Minnesota Parent\'s Guide',
    description: 'Learn the early signs of autism in toddlers, when to talk to your pediatrician, and how Minnesota families can access screening, evaluation, and support.',
    url: 'https://abilityavenues.com/blog/early-signs-autism-toddlers-minnesota',
    siteName: 'Ability Avenues',
    images: [
      {
        url: '/images/blog-placeholder.jpg',
        width: 1200,
        height: 630,
        alt: 'Early Signs of Autism in Toddlers: A Minnesota Parent\'s Guide',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-03-07T00:00:00.000Z',
    modifiedTime: '2026-03-07T00:00:00.000Z',
    authors: ['Ability Avenues Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Early Signs of Autism in Toddlers: A Minnesota Parent\'s Guide',
    description: 'Learn the early signs of autism in toddlers, when to talk to your pediatrician, and how Minnesota families can access screening, evaluation, and support.',
    images: ['/images/blog-placeholder.jpg'],
  },
  alternates: {
    canonical: 'https://abilityavenues.com/blog/early-signs-autism-toddlers-minnesota',
  },
};

export default function EarlySignsAutismPostPage() {
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
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Early Signs of Autism in Toddlers: A Minnesota Parent\'s Guide',
                item: 'https://abilityavenues.com/blog/early-signs-autism-toddlers-minnesota',
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
            '@type': 'BlogPosting',
            headline: 'Early Signs of Autism in Toddlers: A Minnesota Parent\'s Guide',
            description: 'Learn the early signs of autism in toddlers, when to talk to your pediatrician, and how Minnesota families can access screening, evaluation, and support.',
            image: 'https://abilityavenues.com/images/blog-placeholder.jpg',
            datePublished: '2026-03-07T00:00:00.000Z',
            dateModified: '2026-03-07T00:00:00.000Z',
            author: {
              '@type': 'Organization',
              name: 'Ability Avenues Team',
              url: 'https://abilityavenues.com',
            },
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
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://abilityavenues.com/blog/early-signs-autism-toddlers-minnesota',
            },
            keywords: 'early signs of autism, autism signs toddlers, autism screening Minnesota, developmental milestones autism, Help Me Grow Minnesota, ABA therapy Minneapolis, autism diagnosis toddler',
            articleSection: 'Education',
            inLanguage: 'en-US',
          }),
        }}
      />
      <EarlySignsAutismPost />
    </>
  );
}
