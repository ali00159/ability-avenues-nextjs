import { Metadata } from 'next';
import AboutUs from '@/components/AboutUs';

export const metadata: Metadata = {
  title: 'About',
  description: 'About page - Access and manage your content',
};

export default function AboutUsPage() {
  return <AboutUs />;
}