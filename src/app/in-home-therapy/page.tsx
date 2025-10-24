import { Metadata } from 'next';
import InHomeTherapy from '@/components/InHomeTherapy';

export const metadata: Metadata = {
  title: 'In-Home ABA Therapy',
  description: 'Personalized one-on-one ABA therapy delivered in the comfort and familiarity of your home environment, helping children learn and practice skills in their natural setting.',
};

export default function InHomeTherapyPage() {
  return <InHomeTherapy />;
}

