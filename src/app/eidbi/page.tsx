import type { Metadata } from 'next';
import EIDBI from '@/components/EIDBI';

export const metadata: Metadata = {
  title: 'EIDBI Services in Minnesota | Early Autism Intervention | Ability Avenues',
  description:
    'EIDBI (Early Intensive Developmental and Behavioral Intervention) provides comprehensive, evidence-based autism services at no cost to eligible Minnesota families through Medical Assistance. Learn about eligibility, services, and how to get started.',
  keywords: [
    'EIDBI',
    'EIDBI Minnesota',
    'Early Intensive Developmental Behavioral Intervention',
    'autism services Minnesota',
    'ABA therapy Minnesota',
    'Medical Assistance autism',
    'Minnesota autism intervention',
    'CMDE evaluation',
    'autism support Minnesota',
    'developmental therapy',
    'behavioral intervention',
  ],
  openGraph: {
    title: 'EIDBI Services in Minnesota - Comprehensive Autism Support',
    description:
      'Get no-cost, evidence-based autism intervention through Minnesota\'s EIDBI program. Check eligibility and start your child\'s services today.',
    type: 'website',
  },
};

export default function EIDBIPage() {
  return <EIDBI />;
}

