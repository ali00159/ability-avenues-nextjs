'use client';

import type { LocationTestimonial } from '@/lib/locations';
import ContactTestimonialsMarquee from './ContactTestimonialsMarquee';

interface TestimonialsSectionProps {
  testimonials: LocationTestimonial[];
  cityName: string;
}

const TestimonialsSection = ({ testimonials, cityName }: TestimonialsSectionProps) => {
  return <ContactTestimonialsMarquee cityName={cityName} testimonials={testimonials} />;
};

export default TestimonialsSection;

