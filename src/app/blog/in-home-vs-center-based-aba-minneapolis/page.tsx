import { Metadata } from 'next';
import InHomeVsCenterPost from '@/components/blog/InHomeVsCenterPost';

export const metadata: Metadata = {
  title: 'In-Home vs Center-Based ABA in Minneapolis | Guide',
  description: 'We compare in-home vs center-based ABA in the Twin Cities—pros/cons, who thrives where, and a simple checklist to choose what fits your family.',
  openGraph: {
    title: 'In-Home vs Center-Based ABA in Minneapolis | Guide',
    description: 'We compare in-home vs center-based ABA in the Twin Cities—pros/cons, who thrives where, and a simple checklist to choose what fits your family.',
    url: 'https://abilityavenues.com/blog/in-home-vs-center-based-aba-minneapolis',
    siteName: 'Ability Avenues',
    images: [
      {
        url: '/images/center-based-vs-in-home-blog-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'In-Home vs Center-Based ABA in the Twin Cities: Which Fits Your Family?',
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
    title: 'In-Home vs Center-Based ABA in Minneapolis | Guide',
    description: 'We compare in-home vs center-based ABA in the Twin Cities—pros/cons, who thrives where, and a simple checklist to choose what fits your family.',
    images: ['/images/center-based-vs-in-home-blog-cover.jpg'],
  },
  alternates: {
    canonical: 'https://abilityavenues.com/blog/in-home-vs-center-based-aba-minneapolis',
  },
};

export default function InHomeVsCenterPostPage() {
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
                name: 'In-Home vs Center-Based ABA in the Twin Cities: Which Fits Your Family?',
                item: 'https://abilityavenues.com/blog/in-home-vs-center-based-aba-minneapolis',
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
            headline: 'In-Home vs Center-Based ABA in the Twin Cities: Which Fits Your Family?',
            description: 'We compare in-home vs center-based ABA in the Twin Cities—pros/cons, who thrives where, and a simple checklist to choose what fits your family.',
            image: 'https://abilityavenues.com/images/center-based-vs-in-home-blog-cover.jpg',
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
              '@id': 'https://abilityavenues.com/blog/in-home-vs-center-based-aba-minneapolis',
            },
            keywords: 'ABA therapy, in-home ABA, center-based ABA, autism therapy, Twin Cities, Minneapolis, ABA services, autism treatment',
            articleSection: 'Education',
            inLanguage: 'en-US',
          }),
        }}
      />
      <InHomeVsCenterPost />
    </>
  );
}
