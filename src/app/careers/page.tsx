import { Metadata } from 'next';
import Careers from '@/components/Careers';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Careers page - Access and manage your content',
};

export default function CareersPage() {
  return <Careers />;
}