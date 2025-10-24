import { Metadata } from 'next';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'Faq',
  description: 'Faq page - Access and manage your content',
};

export default function FAQPage() {
  return <FAQ />;
}