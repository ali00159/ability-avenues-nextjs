import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ContactUs from '@/components/ContactUs';
import ContactJsonLd from '@/components/shared/ContactJsonLd';
import { getLocationBySlug, getAllLocationSlugs } from '@/lib/locations';
import { generateContactMetadata } from '@/lib/contact-metadata';

export async function generateStaticParams() {
  const slugs = getAllLocationSlugs();
  return slugs.map((slug) => ({
    city: slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const location = getLocationBySlug(city);
  
  if (!location) {
    return {
      title: 'Contact Not Found',
    };
  }

  return generateContactMetadata(location);
}

export default async function ContactCityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const location = getLocationBySlug(city);

  if (!location) {
    notFound();
  }

  return (
    <>
      <ContactJsonLd location={location} />
      <ContactUs location={location} />
    </>
  );
}

