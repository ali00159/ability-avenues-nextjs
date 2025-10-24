import { Metadata } from 'next';
import ContactUs from '@/components/ContactUs';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact page - Access and manage your content',
};

export default function ContactUsPage() {
  return <ContactUs />;
}