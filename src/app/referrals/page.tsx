import { Metadata } from 'next';
import Referrals from '@/components/Referrals';

export const metadata: Metadata = {
  title: 'Referrals',
  description: 'Referrals page - Access and manage your content',
};

export default function ReferralsPage() {
  return <Referrals />;
}