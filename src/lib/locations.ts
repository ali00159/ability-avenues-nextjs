// Location configuration for all contact pages

export interface Location {
  name: string;
  slug: string;
  metaDescription: string;
  ogDescription: string;
  twitterDescription: string;
  jsonLdDescription: string;
  mapEmbedUrl: string;
  mapTitle: string;
}

export interface OrganizationInfo {
  name: string;
  telephone: string;
  telephoneFormatted: string;
  email: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
}

export const baseUrl = 'https://abilityavenues.com';

export const organizationInfo: OrganizationInfo = {
  name: 'Ability Avenues',
  telephone: '+1-952-900-2344',
  telephoneFormatted: '(952) 900-2344',
  email: 'info@abilityavenues.com',
  address: {
    streetAddress: '6385 Old Shady Oak Rd Suite 250',
    addressLocality: 'Eden Prairie',
    addressRegion: 'MN',
    postalCode: '55344',
    addressCountry: 'US',
  },
};

export const locations: Location[] = [
  {
    name: 'Apple Valley',
    slug: 'apple-valley',
    metaDescription: 'Contact Ability Avenues in Apple Valley, Minnesota for ABA therapy services. Reach us by phone, email, or visit our Apple Valley support team. Start your intake today.',
    ogDescription: 'Contact Ability Avenues in Apple Valley, Minnesota for ABA therapy services. Reach us by phone, email, or visit our Apple Valley support team.',
    twitterDescription: 'Contact Ability Avenues in Apple Valley, Minnesota for ABA therapy services. Reach our Apple Valley team by phone or email to get started.',
    jsonLdDescription: 'Contact Ability Avenues in Apple Valley for ABA therapy services. Reach us by phone, email, or connect with our Apple Valley intake team.',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27863.38977992653!2d-93.2354084!3d44.7319096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f63257f782a13d%3A0x97ea032be29b8a0a!2sApple%20Valley%2C%20MN!5e0!3m2!1sen!2sus!4v1736469600&z=11',
    mapTitle: 'Apple Valley Service Area Map',
  },
  {
    name: 'Bloomington',
    slug: 'bloomington',
    metaDescription: 'Contact Ability Avenues in Bloomington, Minnesota for autism therapy services. Reach us by phone, email, or visit our location. Get started today.',
    ogDescription: 'Contact Ability Avenues in Bloomington, Minnesota for autism therapy services. Reach us by phone, email, or visit our location.',
    twitterDescription: 'Contact Ability Avenues in Bloomington, Minnesota for autism therapy services. Reach us by phone, email, or visit our location.',
    jsonLdDescription: 'Contact Ability Avenues in Bloomington for ABA therapy services. Reach us by phone, email, or visit our location.',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9029.9!2d-93.2796!3d44.8408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f6293a3a3a3a3a%3A0x0000000000000000!2sBloomington%2C%20MN!5e0!3m2!1sen!2sus!4v1735000000&z=11',
    mapTitle: 'Bloomington Service Area Map',
  },
  {
    name: 'Brooklyn Park',
    slug: 'brooklyn-park',
    metaDescription: 'Contact Ability Avenues in Brooklyn Park, Minnesota for ABA therapy services. Reach us by phone, email, or visit our Brooklyn Park support team. Start your intake today.',
    ogDescription: 'Contact Ability Avenues in Brooklyn Park, Minnesota for ABA therapy services. Reach us by phone, email, or visit our Brooklyn Park support team.',
    twitterDescription: 'Contact Ability Avenues in Brooklyn Park, Minnesota for ABA therapy services. Reach our Brooklyn Park team by phone or email to get started.',
    jsonLdDescription: 'Contact Ability Avenues in Brooklyn Park for ABA therapy services. Reach us by phone, email, or connect with our Brooklyn Park intake team.',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27854.640694454195!2d-93.40344!3d45.0941319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b3335cdcf86e1d%3A0xfef4360e5d46df4!2sBrooklyn%20Park%2C%20MN!5e0!3m2!1sen!2sus!4v1736470200&z=11',
    mapTitle: 'Brooklyn Park Service Area Map',
  },
  {
    name: 'Burnsville',
    slug: 'burnsville',
    metaDescription: 'Contact Ability Avenues in Burnsville, Minnesota for ABA therapy services. Reach us by phone, email, or visit our Burnsville support team. Start your intake today.',
    ogDescription: 'Contact Ability Avenues in Burnsville, Minnesota for ABA therapy services. Reach us by phone, email, or visit our Burnsville support team.',
    twitterDescription: 'Contact Ability Avenues in Burnsville, Minnesota for ABA therapy services. Reach our Burnsville team by phone or email to get started.',
    jsonLdDescription: 'Contact Ability Avenues in Burnsville for ABA therapy services. Reach us by phone, email, or connect with our Burnsville intake team.',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27911.46501585954!2d-93.311928!3d44.7677426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f6353d4c6df3e5%3A0x3adfed0d2979275e!2sBurnsville%2C%20MN!5e0!3m2!1sen!2sus!4v1736469000&z=11',
    mapTitle: 'Burnsville Service Area Map',
  },
  {
    name: 'Chanhassen',
    slug: 'chanhassen',
    metaDescription: 'Contact Ability Avenues in Chanhassen, Minnesota for autism therapy services. Reach us by phone, email, or visit our location. Get started today.',
    ogDescription: 'Contact Ability Avenues in Chanhassen, Minnesota for autism therapy services. Reach us by phone, email, or visit our location.',
    twitterDescription: 'Contact Ability Avenues in Chanhassen, Minnesota for autism therapy services. Reach us by phone, email, or visit our location.',
    jsonLdDescription: 'Contact Ability Avenues in Chanhassen for ABA therapy services. Reach us by phone, email, or visit our location.',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9030.8!2d-93.5294!3d44.8611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b332b3b2e2e2e2%3A0x0000000000000000!2sChanhassen%2C%20MN!5e0!3m2!1sen!2sus!4v1735000000&z=11',
    mapTitle: 'Chanhassen Service Area Map',
  },
  {
    name: 'Chaska',
    slug: 'chaska',
    metaDescription: 'Contact Ability Avenues in Chaska, Minnesota for autism therapy services. Reach us by phone, email, or visit our location. Get started today.',
    ogDescription: 'Contact Ability Avenues in Chaska, Minnesota for autism therapy services. Reach us by phone, email, or visit our location.',
    twitterDescription: 'Contact Ability Avenues in Chaska, Minnesota for autism therapy services. Reach us by phone, email, or visit our location.',
    jsonLdDescription: 'Contact Ability Avenues in Chaska for ABA therapy services. Reach us by phone, email, or visit our location.',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9028.4!2d-93.6021!3d44.7814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b332b3b5f5f5f5%3A0x0000000000000000!2sChaska%2C%20MN!5e0!3m2!1sen!2sus!4v1735000000&z=11',
    mapTitle: 'Chaska Service Area Map',
  },
  {
    name: 'Eagan',
    slug: 'eagan',
    metaDescription: 'Contact Ability Avenues in Eagan, Minnesota for ABA therapy services. Reach us by phone, email, or visit our Eagan support team. Start your intake today.',
    ogDescription: 'Contact Ability Avenues in Eagan, Minnesota for ABA therapy services. Reach us by phone, email, or visit our Eagan support team.',
    twitterDescription: 'Contact Ability Avenues in Eagan, Minnesota for ABA therapy services. Reach our Eagan team by phone or email to get started.',
    jsonLdDescription: 'Contact Ability Avenues in Eagan for ABA therapy services. Reach us by phone, email, or connect with our Eagan intake team.',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27889.01723046464!2d-93.1769444!3d44.8041326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f632a39c4b5105%3A0xb9b418f27ae9ea77!2sEagan%2C%20MN!5e0!3m2!1sen!2sus!4v1736468400&z=11',
    mapTitle: 'Eagan Service Area Map',
  },
  {
    name: 'Eden Prairie',
    slug: 'eden-prairie',
    metaDescription: 'Contact Ability Avenues in Eden Prairie, Minnesota for ABA therapy services. Reach us by phone, email, or visit our Eden Prairie support team. Start your intake today.',
    ogDescription: 'Contact Ability Avenues in Eden Prairie, Minnesota for ABA therapy services. Reach us by phone, email, or visit our Eden Prairie support team.',
    twitterDescription: 'Contact Ability Avenues in Eden Prairie, Minnesota for ABA therapy services. Reach our Eden Prairie team by phone or email to get started.',
    jsonLdDescription: 'Contact Ability Avenues in Eden Prairie for ABA therapy services. Reach us by phone, email, or connect with our Eden Prairie intake team.',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9029.3!2d-93.4708!3d44.8547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f62f7d3f5c5c5b%3A0x5e5c5c5c5c5c5c5c!2sEden+Prairie%2C+MN+55344!5e0!3m2!1sen!2sus!4v1735000000&z=11',
    mapTitle: 'Eden Prairie Service Area Map',
  },
  {
    name: 'Edina',
    slug: 'edina',
    metaDescription: 'Contact Ability Avenues in Edina, Minnesota for autism therapy services. Reach us by phone, email, or visit our location. Get started today.',
    ogDescription: 'Contact Ability Avenues in Edina, Minnesota for autism therapy services. Reach us by phone, email, or visit our location.',
    twitterDescription: 'Contact Ability Avenues in Edina, Minnesota for autism therapy services. Reach us by phone, email, or visit our location.',
    jsonLdDescription: 'Contact Ability Avenues in Edina for ABA therapy services. Reach us by phone, email, or visit our location.',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9035.5!2d-93.3499!3d44.8897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f6233c0f0f0f0f%3A0x0000000000000000!2sEdina%2C%20MN!5e0!3m2!1sen!2sus!4v1735000000&z=11',
    mapTitle: 'Edina Service Area Map',
  },
  {
    name: 'Golden Valley',
    slug: 'golden-valley',
    metaDescription: 'Contact Ability Avenues in Golden Valley, Minnesota for autism therapy services. Reach us by phone, email, or visit our location. Get started today.',
    ogDescription: 'Contact Ability Avenues in Golden Valley, Minnesota for autism therapy services. Reach us by phone, email, or visit our location.',
    twitterDescription: 'Contact Ability Avenues in Golden Valley, Minnesota for autism therapy services. Reach us by phone, email, or visit our location.',
    jsonLdDescription: 'Contact Ability Avenues in Golden Valley for ABA therapy services. Reach us by phone, email, or visit our location.',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9032.8!2d-93.3566!3d44.9912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b332b3b6f6f6f6%3A0x0000000000000000!2sGolden%20Valley%2C%20MN!5e0!3m2!1sen!2sus!4v1735000000&z=11',
    mapTitle: 'Golden Valley Service Area Map',
  },
  {
    name: 'Hopkins',
    slug: 'hopkins',
    metaDescription: 'Contact Ability Avenues in Hopkins, Minnesota for autism therapy services. Reach us by phone, email, or visit our location. Get started today.',
    ogDescription: 'Contact Ability Avenues in Hopkins, Minnesota for autism therapy services. Reach us by phone, email, or visit our location.',
    twitterDescription: 'Contact Ability Avenues in Hopkins, Minnesota for autism therapy services. Reach us by phone, email, or visit our location.',
    jsonLdDescription: 'Contact Ability Avenues in Hopkins for ABA therapy services. Reach us by phone, email, or visit our location.',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9033.5!2d-93.4094!3d44.9244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b332b3b8d8d8d8%3A0x0000000000000000!2sHopkins%2C%20MN!5e0!3m2!1sen!2sus!4v1735000000&z=11',
    mapTitle: 'Hopkins Service Area Map',
  },
  {
    name: 'Lakeville',
    slug: 'lakeville',
    metaDescription: 'Contact Ability Avenues in Lakeville, Minnesota for ABA therapy services. Reach us by phone, email, or visit our Lakeville support team. Start your intake today.',
    ogDescription: 'Contact Ability Avenues in Lakeville, Minnesota for ABA therapy services. Reach us by phone, email, or visit our Lakeville support team.',
    twitterDescription: 'Contact Ability Avenues in Lakeville, Minnesota for ABA therapy services. Reach our Lakeville team by phone or email to get started.',
    jsonLdDescription: 'Contact Ability Avenues in Lakeville for ABA therapy services. Reach us by phone, email, or connect with our Lakeville intake team.',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27506.94200634732!2d-93.2821976!3d44.6496866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f637bb38f8ef33%3A0x9bde4b6b64b0d3d5!2sLakeville%2C%20MN!5e0!3m2!1sen!2sus!4v1736467200&z=11',
    mapTitle: 'Lakeville Service Area Map',
  },
  {
    name: 'Maple Grove',
    slug: 'maple-grove',
    metaDescription: 'Contact Ability Avenues in Maple Grove, Minnesota for ABA therapy services. Reach us by phone, email, or visit our Maple Grove support team. Start your intake today.',
    ogDescription: 'Contact Ability Avenues in Maple Grove, Minnesota for ABA therapy services. Reach us by phone, email, or visit our Maple Grove support team.',
    twitterDescription: 'Contact Ability Avenues in Maple Grove, Minnesota for ABA therapy services. Reach our Maple Grove team by phone or email to get started.',
    jsonLdDescription: 'Contact Ability Avenues in Maple Grove for ABA therapy services. Reach us by phone, email, or connect with our Maple Grove intake team.',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27888.350402995763!2d-93.4878893!3d45.0724646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b35fcb1b8c0e3d%3A0x1e9c5f2dda8369d9!2sMaple%20Grove%2C%20MN!5e0!3m2!1sen!2sus!4v1736470800&z=11',
    mapTitle: 'Maple Grove Service Area Map',
  },
  {
    name: 'Maplewood',
    slug: 'maplewood',
    metaDescription: 'Contact Ability Avenues in Maplewood, Minnesota for ABA therapy services. Reach us by phone, email, or visit our Maplewood support team. Start your intake today.',
    ogDescription: 'Contact Ability Avenues in Maplewood, Minnesota for ABA therapy services. Reach us by phone, email, or visit our Maplewood support team.',
    twitterDescription: 'Contact Ability Avenues in Maplewood, Minnesota for ABA therapy services. Reach our Maplewood team by phone or email to get started.',
    jsonLdDescription: 'Contact Ability Avenues in Maplewood for ABA therapy services. Reach us by phone, email, or connect with our Maplewood intake team.',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27935.05706684535!2d-93.0271651!3d44.9530214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b2d942ee1e4ed5%3A0xf7f3b7f0e68c3f8!2sMaplewood%2C%20MN!5e0!3m2!1sen!2sus!4v1736467800&z=11',
    mapTitle: 'Maplewood Service Area Map',
  },
  {
    name: 'Minnetonka',
    slug: 'minnetonka',
    metaDescription: 'Contact Ability Avenues in Minnetonka, Minnesota for autism therapy services. Reach us by phone, email, or visit our location. Get started today.',
    ogDescription: 'Contact Ability Avenues in Minnetonka, Minnesota for autism therapy services. Reach us by phone, email, or visit our location.',
    twitterDescription: 'Contact Ability Avenues in Minnetonka, Minnesota for autism therapy services. Reach us by phone, email, or visit our location.',
    jsonLdDescription: 'Contact Ability Avenues in Minnetonka for ABA therapy services. Reach us by phone, email, or visit our location.',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9040.2!2d-93.5033!3d44.9133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f62f3b2d7c73a7%3A0x0000000000000000!2sMinnetonka%2C%20MN!5e0!3m2!1sen!2sus!4v1735000000&z=11',
    mapTitle: 'Minnetonka Service Area Map',
  },
  {
    name: 'Plymouth',
    slug: 'plymouth',
    metaDescription: 'Contact Ability Avenues in Plymouth, Minnesota for autism therapy services. Reach us by phone, email, or visit our location. Get started today.',
    ogDescription: 'Contact Ability Avenues in Plymouth, Minnesota for autism therapy services. Reach us by phone, email, or visit our location.',
    twitterDescription: 'Contact Ability Avenues in Plymouth, Minnesota for autism therapy services. Reach us by phone, email, or visit our location.',
    jsonLdDescription: 'Contact Ability Avenues in Plymouth for ABA therapy services. Reach us by phone, email, or visit our location.',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9034.4!2d-93.4556!3d44.9933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b332b3b4d4d4d4%3A0x0000000000000000!2sPlymouth%2C%20MN!5e0!3m2!1sen!2sus!4v1735000000&z=11',
    mapTitle: 'Plymouth Service Area Map',
  },
  {
    name: 'Shakopee',
    slug: 'shakopee',
    metaDescription: 'Contact Ability Avenues in Shakopee, Minnesota for autism therapy services. Reach us by phone, email, or visit our location. Get started today.',
    ogDescription: 'Contact Ability Avenues in Shakopee, Minnesota for autism therapy services. Reach us by phone, email, or visit our location.',
    twitterDescription: 'Contact Ability Avenues in Shakopee, Minnesota for autism therapy services. Reach us by phone, email, or visit our location.',
    jsonLdDescription: 'Contact Ability Avenues in Shakopee for ABA therapy services. Reach us by phone, email, or visit our location.',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9028.5!2d-93.5269!3d44.7983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b332b3b7f7f7f7%3A0x0000000000000000!2sShakopee%2C%20MN!5e0!3m2!1sen!2sus!4v1735000000&z=11',
    mapTitle: 'Shakopee Service Area Map',
  },
  {
    name: 'St. Louis Park',
    slug: 'st-louis-park',
    metaDescription: 'Contact Ability Avenues in St. Louis Park, Minnesota for autism therapy services. Reach us by phone, email, or visit our location. Get started today.',
    ogDescription: 'Contact Ability Avenues in St. Louis Park, Minnesota for autism therapy services. Reach us by phone, email, or visit our location.',
    twitterDescription: 'Contact Ability Avenues in St. Louis Park, Minnesota for autism therapy services. Reach us by phone, email, or visit our location.',
    jsonLdDescription: 'Contact Ability Avenues in St. Louis Park for ABA therapy services. Reach us by phone, email, or visit our location.',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9028.8!2d-93.3481!3d44.9483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b332b3b8f8f8f8%3A0x0000000000000000!2sSt%20Louis%20Park%2C%20MN!5e0!3m2!1sen!2sus!4v1735000000&z=11',
    mapTitle: 'St. Louis Park Service Area Map',
  },
  {
    name: 'St. Paul',
    slug: 'st-paul',
    metaDescription: 'Contact Ability Avenues in St. Paul, Minnesota for autism therapy services. Reach us by phone, email, or visit our location. Get started today.',
    ogDescription: 'Contact Ability Avenues in St. Paul, Minnesota for autism therapy services. Reach us by phone, email, or visit our location.',
    twitterDescription: 'Contact Ability Avenues in St. Paul, Minnesota for autism therapy services. Reach us by phone, email, or visit our location.',
    jsonLdDescription: 'Contact Ability Avenues in St. Paul for ABA therapy services. Reach us by phone, email, or visit our location.',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9026.8!2d-93.0900!3d44.9534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b332b3b3b3b3b3%3A0x0000000000000000!2sSt%20Paul%2C%20MN!5e0!3m2!1sen!2sus!4v1735000000&z=11',
    mapTitle: 'St. Paul Service Area Map',
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((location) => location.slug === slug);
}

export function getAllLocationSlugs(): string[] {
  return locations.map((location) => location.slug);
}

