import { Location } from '@/lib/locations';
import { generateBreadcrumbJsonLd, generateContactPageJsonLd } from '@/lib/contact-jsonld';

interface ContactJsonLdProps {
  location: Location;
}

export default function ContactJsonLd({ location }: ContactJsonLdProps) {
  const breadcrumbData = generateBreadcrumbJsonLd(location);
  const contactPageData = generateContactPageJsonLd(location);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageData) }}
      />
    </>
  );
}

