import { Metadata } from 'next';
import IntakeProcess from '@/components/IntakeProcess';

export const metadata: Metadata = {
  title: 'Intake Process',
  description: 'Intake Process page - Access and manage your content',
};

export default function IntakeProcessPage() {
  return <IntakeProcess />;
}