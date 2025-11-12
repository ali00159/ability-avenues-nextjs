import { Location, organizationInfo, baseUrl } from './locations';

export function generateBreadcrumbJsonLd(location: Location) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Contact',
        item: `${baseUrl}/contact`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: location.name,
        item: `${baseUrl}/contact/${location.slug}`,
      },
    ],
  };
}

export function generateContactPageJsonLd(location: Location) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Contact Ability Avenues - ${location.name}`,
    url: `${baseUrl}/contact/${location.slug}`,
    description: location.jsonLdDescription,
    telephone: organizationInfo.telephone,
    email: organizationInfo.email,
    address: {
      '@type': 'PostalAddress',
      ...organizationInfo.address,
    },
    mainEntity: {
      '@type': 'Organization',
      name: organizationInfo.name,
      email: organizationInfo.email,
      telephone: organizationInfo.telephone,
      address: {
        '@type': 'PostalAddress',
        ...organizationInfo.address,
      },
    },
  };
}

