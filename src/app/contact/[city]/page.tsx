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

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const location = getLocationBySlug(params.city);
  
  if (!location) {
    return {
      title: 'Contact Not Found',
    };
  }

  return generateContactMetadata(location);
}

export default function ContactCityPage({ params }: { params: { city: string } }) {
  const location = getLocationBySlug(params.city);

  if (!location) {
    notFound();
  }

  return (
    <>
      <ContactJsonLd location={location} />
      <ContactUs
        cityName={location.name}
        mapEmbedUrl={location.mapEmbedUrl}
        mapTitle={location.mapTitle}
      />
    </>
  );
}

