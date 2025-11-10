import { Metadata } from 'next';
import Blog from '@/components/Blog';

export const metadata: Metadata = {
  title: 'Minnesota ABA Therapy Blog | EIDBI Funding & In-Home vs Center Guides',
  description:
    'Actionable ABA therapy resources for Minnesota families: understand EIDBI vs ABA funding, CMDE requirements, and compare in-home versus center-based therapy options from Ability Avenues in Minneapolis.',
  keywords: [
    'EIDBI',
    'ABA therapy',
    'Minnesota Medicaid',
    'In-home ABA',
    'Center-based ABA',
    'Autism services Minneapolis',
  ],
  openGraph: {
    title: 'Minnesota ABA Therapy Blog | EIDBI Funding & In-Home vs Center Guides',
    description:
      'Explore how Minnesota’s EIDBI benefit funds ABA therapy, what CMDE and TEFRA mean for coverage, and compare in-home versus center-based programs with real-world checklists.',
    url: 'https://abilityavenues.com/blog',
    siteName: 'Ability Avenues',
    images: [
      {
        url: 'https://abilityavenues.com/images/eidbi-blog-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Ability Avenues guide to Minnesota EIDBI and ABA therapy funding',
      },
      {
        url: 'https://abilityavenues.com/images/center-based-vs-in-home-blog-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Ability Avenues comparison of in-home and center-based ABA therapy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Minnesota ABA Therapy Blog | EIDBI Funding & In-Home vs Center Guides',
    description:
      'Dive into Minnesota EIDBI funding steps, CMDE checklists, and side-by-side comparisons of in-home vs center-based ABA therapy from Ability Avenues.',
    images: [
      'https://abilityavenues.com/images/eidbi-blog-cover.jpg',
      'https://abilityavenues.com/images/center-based-vs-in-home-blog-cover.jpg',
    ],
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
            description:
              'Practical ABA therapy resources for Minnesota families: EIDBI funding guidance, Medicaid/TEFRA steps, and in-home versus center-based therapy comparisons.',
            url: 'https://abilityavenues.com/blog',
            inLanguage: 'en-US',
            about: [
              { '@type': 'Thing', name: 'EIDBI' },
              { '@type': 'Thing', name: 'Applied Behavior Analysis' },
              { '@type': 'Thing', name: 'In-home ABA therapy' },
              { '@type': 'Thing', name: 'Center-based ABA therapy' },
            ],
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
            blogPost: [
              {
                '@type': 'BlogPosting',
                headline: 'EIDBI vs ABA: How Minnesota\'s Program Helps Families Access ABA Therapy',
                url: 'https://abilityavenues.com/blog/eidbi-vs-aba-minnesota',
                datePublished: '2025-11-05T00:00:00.000Z',
                dateModified: '2025-11-05T00:00:00.000Z',
                image: 'https://abilityavenues.com/images/eidbi-blog-cover.jpg',
                description:
                  'Breaks down Minnesota’s EIDBI benefit, CMDE requirements, MA/TEFRA eligibility, and the services it funds so families can start ABA therapy without cost barriers.',
                keywords: [
                  'EIDBI',
                  'ABA therapy',
                  'CMDE',
                  'Minnesota Medicaid',
                  'Autism services',
                ],
                author: {
                  '@type': 'Organization',
                  name: 'Ability Avenues Team',
                },
              },
              {
                '@type': 'BlogPosting',
                headline: "What's the Difference Between In-Home and Center-Based ABA Therapy?",
                url: 'https://abilityavenues.com/blog/in-home-vs-center-based-aba-minneapolis',
                datePublished: '2025-11-05T00:00:00.000Z',
                dateModified: '2025-11-05T00:00:00.000Z',
                image: 'https://abilityavenues.com/images/center-based-vs-in-home-blog-cover.jpg',
                description:
                  'Compares in-home and center-based ABA therapy in Minneapolis, outlining pros/cons, family checklists, scheduling considerations, and typical goals for each setting.',
                keywords: [
                  'In-home ABA',
                  'Center-based ABA',
                  'ABA therapy comparison',
                  'Autism services Minneapolis',
                  'Parent checklist',
                ],
                author: {
                  '@type': 'Organization',
                  name: 'Ability Avenues Team',
                },
              },
            ],
          }),
        }}
      />
      <Blog />
    </>
  );
}