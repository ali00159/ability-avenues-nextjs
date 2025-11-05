import { Metadata } from 'next';
import EidbiVsAbaPost from '@/components/blog/EidbiVsAbaPost';

export const metadata: Metadata = {
  title: 'EIDBI vs ABA in Minnesota: How Families Access ABA',
  description: 'Confused by EIDBI vs ABA? See how Minnesota\'s EIDBI benefit helps families access ABA therapy, what\'s covered, and simple next steps in Minneapolis.',
  openGraph: {
    title: 'EIDBI vs ABA in Minnesota: How Families Access ABA',
    description: 'Confused by EIDBI vs ABA? See how Minnesota\'s EIDBI benefit helps families access ABA therapy, what\'s covered, and simple next steps in Minneapolis.',
    url: 'https://abilityavenues.com/blog/eidbi-vs-aba-minnesota',
    siteName: 'Ability Avenues',
    images: [
      {
        url: '/images/eidbi-blog-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'EIDBI vs ABA: How Minnesota\'s Program Helps Families Access ABA Therapy',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-11-05T00:00:00.000Z',
    modifiedTime: '2025-11-05T00:00:00.000Z',
    authors: ['Ability Avenues Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EIDBI vs ABA in Minnesota: How Families Access ABA',
    description: 'Confused by EIDBI vs ABA? See how Minnesota\'s EIDBI benefit helps families access ABA therapy, what\'s covered, and simple next steps in Minneapolis.',
    images: ['/images/eidbi-blog-cover.jpg'],
  },
  alternates: {
    canonical: 'https://abilityavenues.com/blog/eidbi-vs-aba-minnesota',
  },
};

export default function EidbiVsAbaPostPage() {
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
                name: 'EIDBI vs ABA: How Minnesota\'s Program Helps Families Access ABA Therapy',
                item: 'https://abilityavenues.com/blog/eidbi-vs-aba-minnesota',
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
            headline: 'EIDBI vs ABA: How Minnesota\'s Program Helps Families Access ABA Therapy',
            description: 'Confused by EIDBI vs ABA? See how Minnesota\'s EIDBI benefit helps families access ABA therapy, what\'s covered, and simple next steps in Minneapolis.',
            image: 'https://abilityavenues.com/images/eidbi-blog-cover.jpg',
            datePublished: '2025-11-05T00:00:00.000Z',
            dateModified: '2025-11-05T00:00:00.000Z',
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
              '@id': 'https://abilityavenues.com/blog/eidbi-vs-aba-minnesota',
            },
            keywords: 'EIDBI, ABA therapy, Minnesota Medicaid, autism therapy, early intervention, Medical Assistance, MA-TEFRA, Minneapolis autism services',
            articleSection: 'Education',
            inLanguage: 'en-US',
          }),
        }}
      />
      <EidbiVsAbaPost />
    </>
  );
}
