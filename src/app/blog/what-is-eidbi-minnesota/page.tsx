import { Metadata } from 'next';
import WhatIsEidbiPost from '@/components/blog/WhatIsEidbiPost';

export const metadata: Metadata = {
  title: 'What Is EIDBI? Minnesota\'s Autism Benefit Explained',
  description: 'Wondering what EIDBI is in Minnesota? Learn how this autism benefit works, who qualifies, and how it helps Minneapolis families access ABA and related supports.',
  openGraph: {
    title: 'What Is EIDBI? Minnesota\'s Autism Benefit Explained',
    description: 'Wondering what EIDBI is in Minnesota? Learn how this autism benefit works, who qualifies, and how it helps Minneapolis families access ABA and related supports.',
    url: 'https://abilityavenues.com/blog/what-is-eidbi-minnesota',
    siteName: 'Ability Avenues',
    images: [
      {
        url: '/images/what-is-eidbi-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'What Is EIDBI in Minnesota? A Plain-English Guide for Minneapolis Families',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-01-15T00:00:00.000Z',
    modifiedTime: '2025-01-15T00:00:00.000Z',
    authors: ['Ability Avenues Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is EIDBI? Minnesota\'s Autism Benefit Explained',
    description: 'Wondering what EIDBI is in Minnesota? Learn how this autism benefit works, who qualifies, and how it helps Minneapolis families access ABA and related supports.',
    images: ['/images/what-is-eidbi-blog.jpg'],
  },
  alternates: {
    canonical: 'https://abilityavenues.com/blog/what-is-eidbi-minnesota',
  },
};

export default function WhatIsEidbiPostPage() {
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
                name: 'What Is EIDBI in Minnesota? A Plain-English Guide for Minneapolis Families',
                item: 'https://abilityavenues.com/blog/what-is-eidbi-minnesota',
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
            headline: 'What Is EIDBI in Minnesota? A Plain-English Guide for Minneapolis Families',
            description: 'Wondering what EIDBI is in Minnesota? Learn how this autism benefit works, who qualifies, and how it helps Minneapolis families access ABA and related supports.',
            image: 'https://abilityavenues.com/images/what-is-eidbi-blog.jpg',
            datePublished: '2025-01-15T00:00:00.000Z',
            dateModified: '2025-01-15T00:00:00.000Z',
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
              '@id': 'https://abilityavenues.com/blog/what-is-eidbi-minnesota',
            },
            keywords: 'EIDBI, Minnesota autism benefit, ABA therapy, Medical Assistance, autism services Minneapolis',
            articleSection: 'Education',
            inLanguage: 'en-US',
          }),
        }}
      />
      <WhatIsEidbiPost />
    </>
  );
}

