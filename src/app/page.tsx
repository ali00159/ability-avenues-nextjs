import { Metadata } from 'next';
import Index from '@/components/Index';

export const metadata: Metadata = {
  title: 'Ability Avenues - ABA Therapy for Children with Autism in Minneapolis',
  description: 'Personalized autism therapy and ABA services for children with autism. Center-based and in-home autism therapy in Minneapolis, Minnesota.',
};

export default function IndexPage() {
  return <Index />;
}