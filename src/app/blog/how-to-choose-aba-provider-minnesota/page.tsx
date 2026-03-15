import { Metadata } from 'next';
import ChooseAbaProviderPost from '@/components/blog/ChooseAbaProviderPost';

export const metadata: Metadata = {
  title: 'How to Choose an ABA Therapy Provider in Minnesota',
  description: 'Learn how to choose the right ABA therapy provider in Minnesota. A parent\'s guide to credentials, insurance, EIDBI, and key questions to ask before starting.',
  openGraph: {
    title: 'How to Choose an ABA Therapy Provider in Minnesota',
    description: 'Learn how to choose the right ABA therapy provider in Minnesota. A parent\'s guide to credentials, insurance, EIDBI, and key questions to ask before starting.',
    url: 'https://abilityavenues.com/blog/how-to-choose-aba-provider-minnesota',
    siteName: 'Ability Avenues',
    images: [
      {
        url: '/images/how-to-choose-a-provider-blog-cover.png',
        width: 1200,
        height: 630,
        alt: 'How to Choose an ABA Therapy Provider in Minnesota: A Parent\'s Checklist',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-03-13T00:00:00.000Z',
    modifiedTime: '2026-03-13T00:00:00.000Z',
    authors: ['Ability Avenues Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Choose an ABA Therapy Provider in Minnesota',
    description: 'Learn how to choose the right ABA therapy provider in Minnesota. A parent\'s guide to credentials, insurance, EIDBI, and key questions to ask before starting.',
    images: ['/images/how-to-choose-a-provider-blog-cover.png'],
  },
  alternates: {
    canonical: 'https://abilityavenues.com/blog/how-to-choose-aba-provider-minnesota',
  },
};

export default function ChooseAbaProviderPage() {
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
                name: 'How to Choose an ABA Therapy Provider in Minnesota',
                item: 'https://abilityavenues.com/blog/how-to-choose-aba-provider-minnesota',
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
            headline: 'How to Choose an ABA Therapy Provider in Minnesota: A Parent\'s Checklist',
            description: 'Learn how to choose the right ABA therapy provider in Minnesota. A parent\'s guide to credentials, insurance, EIDBI, and key questions to ask before starting.',
            image: 'https://abilityavenues.com/images/how-to-choose-a-provider-blog-cover.png',
            datePublished: '2026-03-13T00:00:00.000Z',
            dateModified: '2026-03-13T00:00:00.000Z',
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
              '@id': 'https://abilityavenues.com/blog/how-to-choose-aba-provider-minnesota',
            },
            keywords: 'choose ABA therapy provider Minnesota, ABA provider Minneapolis, BCBA supervision, EIDBI provider, ABA therapy insurance Minnesota, autism therapy provider Twin Cities',
            articleSection: 'Education',
            inLanguage: 'en-US',
          }),
        }}
      />
      <ChooseAbaProviderPost />
    </>
  );
}
