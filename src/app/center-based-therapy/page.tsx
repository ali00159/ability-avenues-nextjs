import { Metadata } from 'next';
import CenterBasedTherapy from '@/components/CenterBasedTherapy';

export const metadata: Metadata = {
  title: 'Center Based Therapy',
  description: 'Center Based Therapy page - Access and manage your content',
};

export default function CenterBasedTherapyPage() {
  return <CenterBasedTherapy />;
}