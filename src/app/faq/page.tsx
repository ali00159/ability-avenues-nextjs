import { Metadata } from 'next';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ - Common Questions About ABA Therapy & Autism Services',
  description: 'Get answers to frequently asked questions about ABA therapy, autism services, insurance coverage, therapy sessions, and getting started with Ability Avenues in Minneapolis.',
  openGraph: {
    title: 'FAQ - Common Questions About ABA Therapy & Autism Services',
    description: 'Get answers to frequently asked questions about ABA therapy, autism services, insurance coverage, and getting started with Ability Avenues.',
    url: 'https://abilityavenues.com/faq',
    siteName: 'Ability Avenues',
    images: [
      {
        url: '/images/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FAQ - Ability Avenues ABA Therapy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ - Common Questions About ABA Therapy & Autism Services',
    description: 'Get answers to frequently asked questions about ABA therapy, autism services, and getting started with Ability Avenues.',
    images: ['/images/opengraph-image.jpg'],
  },
  alternates: {
    canonical: 'https://abilityavenues.com/faq',
  },
};

export default function FAQPage() {
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
                name: 'FAQ',
                item: 'https://abilityavenues.com/faq',
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
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is ABA therapy?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Applied Behavior Analysis (ABA) is a scientific approach to understanding and changing behavior. It focuses on teaching meaningful skills and reducing challenging behaviors through evidence-based techniques. ABA therapy is highly individualized and adapts to each child\'s unique needs and learning style.',
                },
              },
              {
                '@type': 'Question',
                name: 'What ages do you serve?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We provide services for children and teens ages 1-18. Our programs are tailored to meet the developmental needs of each age group, ensuring age-appropriate goals and activities.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you accept insurance?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, we accept most major insurance plans. We work directly with insurance companies to verify benefits and handle billing. Our team will help you understand your coverage and any potential out-of-pocket costs during the intake process.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is center-based therapy?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Center-based therapy takes place in our specialized facility designed specifically for ABA services. It provides a structured learning environment with access to specialized equipment, peer interaction opportunities, and a team of professionals working together to support your child\'s development.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I get started?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Getting started is easy! Contact us to schedule an initial consultation. We\'ll discuss your child\'s needs, answer your questions, and guide you through our intake process. This includes insurance verification, assessment scheduling, and creating a customized treatment plan.',
                },
              },
              {
                '@type': 'Question',
                name: 'What should I expect during the first visit?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'During the first visit, you\'ll meet with our clinical team for a comprehensive assessment. We\'ll observe your child, gather information about their strengths and challenges, and discuss your family\'s goals. This helps us create an individualized treatment plan tailored to your child\'s needs.',
                },
              },
              {
                '@type': 'Question',
                name: 'How long are therapy sessions?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Session length varies based on each child\'s individualized treatment plan and recommendations from our clinical team. Typical sessions range from 2-6 hours per day, depending on your child\'s needs, goals, and insurance coverage.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can parents observe therapy sessions?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes! Family involvement is crucial to our approach. Parents are welcome to observe sessions and will receive regular updates on their child\'s progress. We also provide parent training to help you implement strategies at home and support your child\'s continued development.',
                },
              },
              {
                '@type': 'Question',
                name: 'What qualifications do your therapists have?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Our team includes Board Certified Behavior Analysts (BCBAs), Board Certified Assistant Behavior Analysts (BCaBAs), and Registered Behavior Technicians (RBTs). All staff members undergo rigorous training and maintain current certifications. We\'re committed to ongoing professional development to provide the highest quality care.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do you measure progress?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We use data-driven methods to continuously track progress toward individualized goals. Regular assessments, behavioral data collection, and progress reports keep families informed. Our team reviews data regularly to adjust treatment plans and ensure your child is making meaningful progress.',
                },
              },
            ],
          }),
        }}
      />
      <FAQ />
    </>
  );
}