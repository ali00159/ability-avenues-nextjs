// Location configuration for all contact pages

// Supporting interfaces for location data
export interface Program {
  title: string;
  ageRange: string;
  description: string;
  bullets: string[];
  icon?: string;
}

export interface LocationTestimonial {
  quote: string;
  name: string;
  city: string;
  outcome?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Location {
  name: string;
  slug: string;
  metaDescription: string;
  ogDescription: string;
  twitterDescription: string;
  jsonLdDescription: string;
  mapEmbedUrl: string;
  mapTitle: string;
  // Enhanced location data
  neighborhoods: string[];
  zipCodes: string[];
  programs: Program[];
  testimonials: LocationTestimonial[];
  faqs: FAQ[];
  nearbyCities: string[];
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

// Base programs data (reusable across all locations)
export const basePrograms: Program[] = [
  {
    title: 'In-Home ABA Therapy',
    ageRange: '18 months - 10 years',
    description: 'One-on-one ABA therapy delivered in the comfort of your home, allowing your child to learn in their natural environment while involving the whole family.',
    bullets: [
      'Personalized therapy in familiar settings',
      'Family involvement and caregiver coaching',
      'Flexible scheduling to fit your routine',
      'Focus on daily living and communication skills'
    ]
  },
  {
    title: 'Center-Based ABA Therapy',
    ageRange: '2 - 10 years',
    description: 'Structured ABA therapy in our welcoming centers, providing opportunities for peer interaction, school-readiness skills, and intensive support.',
    bullets: [
      'Dedicated therapy space with specialized materials',
      'Peer socialization opportunities',
      'School-readiness and group participation skills',
      'BCBA supervision and ongoing assessment'
    ]
  },
  {
    title: 'Caregiver Coaching',
    ageRange: 'All ages',
    description: 'Empowering parents and caregivers with strategies and techniques to support their child\'s development throughout daily routines and activities.',
    bullets: [
      'Evidence-based behavior management strategies',
      'Communication and language support techniques',
      'Guidance for challenging behaviors',
      'Collaboration on family goals and priorities'
    ]
  },
  {
    title: 'School Collaboration',
    ageRange: 'School-age children',
    description: 'Partnering with schools and educators to ensure consistent support across all environments and smooth transitions to school settings.',
    bullets: [
      'IEP meeting participation and consultation',
      'Teacher training and classroom strategies',
      'Coordination with school-based services',
      'Transition planning and support'
    ]
  }
];

// Base testimonials (reusable with city name swapped)
export const baseTestimonials: LocationTestimonial[] = [
  {
    quote: 'Ability Avenues surrounded our family with so much encouragement. Our son now asks for playtime with his siblings, and we never thought we would hear that confidence in his voice.',
    name: 'Amina Hassan',
    city: '', // Will be filled per location
    outcome: 'Stronger communication skills'
  },
  {
    quote: 'From the first intake call, every step felt organized and compassionate. Insurance questions were handled quickly, and therapy started sooner than we expected.',
    name: 'Carlos Ramirez',
    city: '', // Will be filled per location
    outcome: 'Streamlined intake experience'
  },
  {
    quote: 'Our daughter is using new words every week and even tells us about her sessions. The BCBA keeps us involved with clear goals that fit our family routine.',
    name: 'Danielle Lewis',
    city: '', // Will be filled per location
    outcome: 'Meaningful language gains'
  },
  {
    quote: 'Coordinating with our child’s kindergarten team was a priority for us. Ability Avenues showed up to meetings, shared strategies, and helped create consistency across home and school.',
    name: 'Gregory Chen',
    city: '', // Will be filled per location
    outcome: 'Seamless school collaboration'
  },
  {
    quote: 'We love that therapy happens both at the center and at home. The flexible schedule lets us keep family routines while still giving our daughter structured support.',
    name: 'Hannah Peterson',
    city: '', // Will be filled per location
    outcome: 'Flexible scheduling that works'
  },
  {
    quote: 'Our son was extremely anxious during transitions. After a few months, he runs to the door when it’s time for his therapist to visit. The team truly sees his strengths.',
    name: 'Imran Siddiqui',
    city: '', // Will be filled per location
    outcome: 'Reduced transition anxiety'
  },
  {
    quote: 'The caregiver coaching sessions made a huge difference. We finally have tools that work during bedtime and mealtimes, and we feel like an equal partner in his progress.',
    name: 'Jessica Collins',
    city: '', // Will be filled per location
    outcome: 'Empowered caregivers'
  },
  {
    quote: 'We were nervous about ABA, but the therapists are warm, professional, and transparent. Our daughter now greets grandparents with a hug and has more patience with changes in routine.',
    name: 'Lily Nguyen',
    city: '', // Will be filled per location
    outcome: 'Improved social confidence'
  }
];

// Base FAQs (reusable with city name swapped)
export const baseFAQs: FAQ[] = [
  {
    question: 'Do you accept EIDBI and Medical Assistance (Medicaid) in {city}?',
    answer: 'Yes! We are an EIDBI-certified provider and accept Medical Assistance (Minnesota Medicaid) along with most major commercial insurance plans. Our team will verify your benefits and guide you through the CMDE process if needed.'
  },
  {
    question: 'What areas do you serve near {city}?',
    answer: 'We provide both in-home and center-based ABA therapy throughout {city} and surrounding communities. Our team serves families across the Twin Cities metro area—contact us to confirm service availability in your specific neighborhood.'
  },
  {
    question: 'Do I need a CMDE before starting services?',
    answer: 'If you don\'t have a recent Comprehensive Multidisciplinary Evaluation (CMDE), we\'ll help you understand the process and coordinate with qualified evaluators. Our intake team guides families through every step.'
  },
  {
    question: 'What are the current wait times for ABA therapy in {city}?',
    answer: 'Wait times vary by program type and current capacity. Typically, in-home services start within 4-6 weeks, while center-based programs may have a 6-8 month wait. We keep families informed throughout the process and offer priority placement when possible.'
  },
  {
    question: 'Do you coordinate with schools in {city}?',
    answer: 'Absolutely. We partner with school districts throughout the area, attending IEP meetings, providing teacher consultation, and ensuring consistent support across home and school environments.'
  },
  {
    question: 'How do I get started with ABA therapy?',
    answer: 'Simply call us at (952) 900-2344 or fill out our contact form. We\'ll verify your insurance, schedule an intake meeting, and guide you through the CMDE and treatment planning process. Most families begin services within 4-8 weeks of first contact.'
  },
  {
    question: 'What ages do you serve?',
    answer: 'We provide ABA therapy for children from 18 months through 10 years old, with both in-home and center-based options. Our programs are tailored to each child\'s developmental stage and family priorities.'
  },
  {
    question: 'What makes Ability Avenues different?',
    answer: 'We combine evidence-based ABA therapy with transparent communication, EIDBI expertise, and genuine parent partnership. Our BCBAs are highly trained, and we coordinate seamlessly with schools and other providers to ensure consistent support across all environments.'
  }
];

export const locations: Location[] = [
  // Minneapolis - primary location for /contact page
  {
    name: 'Minneapolis',
    slug: 'minneapolis',
    metaDescription: 'Contact Ability Avenues in Minneapolis, Minnesota for ABA therapy services. Center-based & in-home ABA. EIDBI/MA accepted. Reach us by phone, email, or visit our location.',
    ogDescription: 'Contact Ability Avenues in Minneapolis, Minnesota for ABA therapy services. Center-based & in-home options. EIDBI provider.',
    twitterDescription: 'Contact Ability Avenues in Minneapolis for ABA therapy. EIDBI/MA accepted. Center-based & in-home services available.',
    jsonLdDescription: 'Contact Ability Avenues in Minneapolis for ABA therapy services. EIDBI provider accepting Medical Assistance.',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9051!2d-93.2650!3d44.9778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b333909377bbbd%3A0x939fcb2fcf22d956!2sMinneapolis%2C%20MN!5e0!3m2!1sen!2sus!4v1735000000&z=11',
    mapTitle: 'Minneapolis Service Area Map',
    neighborhoods: ['Downtown', 'Uptown', 'Northeast', 'North Loop', 'Dinkytown', 'Whittier', 'Longfellow', 'Powderhorn', 'Phillips', 'Seward'],
    zipCodes: ['55401', '55402', '55403', '55404', '55405', '55406', '55407', '55408', '55409', '55410', '55411', '55412', '55413', '55414', '55415', '55416', '55417', '55418', '55419'],
    programs: basePrograms,
    testimonials: baseTestimonials.map(t => ({ ...t, city: 'Minneapolis' })),
    faqs: baseFAQs.map(faq => ({
      question: faq.question.replace('{city}', 'Minneapolis'),
      answer: faq.answer.replace('{city}', 'Minneapolis')
    })),
    nearbyCities: ['St. Paul', 'Bloomington', 'Edina', 'Eden Prairie', 'Minnetonka', 'Richfield']
  },
  {
    name: 'Apple Valley',
    slug: 'apple-valley',
    metaDescription: 'Contact Ability Avenues in Apple Valley, Minnesota for ABA therapy services. Reach us by phone, email, or visit our Apple Valley support team. Start your intake today.',
    ogDescription: 'Contact Ability Avenues in Apple Valley, Minnesota for ABA therapy services. Reach us by phone, email, or visit our Apple Valley support team.',
    twitterDescription: 'Contact Ability Avenues in Apple Valley, Minnesota for ABA therapy services. Reach our Apple Valley team by phone or email to get started.',
    jsonLdDescription: 'Contact Ability Avenues in Apple Valley for ABA therapy services. Reach us by phone, email, or connect with our Apple Valley intake team.',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27863.38977992653!2d-93.2354084!3d44.7319096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f63257f782a13d%3A0x97ea032be29b8a0a!2sApple%20Valley%2C%20MN!5e0!3m2!1sen!2sus!4v1736469600&z=11',
    mapTitle: 'Apple Valley Service Area Map',
    neighborhoods: ['Cobblestone Lake', 'Galaxie', 'Diamond Path', 'Cedar Ridge', 'Valley View'],
    zipCodes: ['55124', '55068'],
    programs: basePrograms,
    testimonials: baseTestimonials.map(t => ({ ...t, city: 'Apple Valley' })),
    faqs: baseFAQs.map(faq => ({ question: faq.question.replace('{city}', 'Apple Valley'), answer: faq.answer.replace('{city}', 'Apple Valley') })),
    nearbyCities: ['Burnsville', 'Lakeville', 'Eagan', 'Rosemount']
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
    neighborhoods: ['West Bloomington', 'East Bloomington', 'Nine Mile Creek', 'Penn Lake', 'Hyland Hills'],
    zipCodes: ['55420', '55425', '55431', '55437', '55438'],
    programs: basePrograms,
    testimonials: baseTestimonials.map(t => ({ ...t, city: 'Bloomington' })),
    faqs: baseFAQs.map(faq => ({ question: faq.question.replace('{city}', 'Bloomington'), answer: faq.answer.replace('{city}', 'Bloomington') })),
    nearbyCities: ['Edina', 'Minneapolis', 'Richfield', 'Eden Prairie']
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
    neighborhoods: ['Edinburgh USA', 'Huntington Place', 'North Park', 'South Brook'],
    zipCodes: ['55443', '55444', '55445'],
    programs: basePrograms,
    testimonials: baseTestimonials.map(t => ({ ...t, city: 'Brooklyn Park' })),
    faqs: baseFAQs.map(faq => ({ question: faq.question.replace('{city}', 'Brooklyn Park'), answer: faq.answer.replace('{city}', 'Brooklyn Park') })),
    nearbyCities: ['Maple Grove', 'Brooklyn Center', 'Osseo', 'Champlin']
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
    neighborhoods: ['Crystal Lake', 'River Hills', 'Terrace Oaks', 'Sunset Ridge'],
    zipCodes: ['55306', '55337'],
    programs: basePrograms,
    testimonials: baseTestimonials.map(t => ({ ...t, city: 'Burnsville' })),
    faqs: baseFAQs.map(faq => ({ question: faq.question.replace('{city}', 'Burnsville'), answer: faq.answer.replace('{city}', 'Burnsville') })),
    nearbyCities: ['Savage', 'Apple Valley', 'Bloomington', 'Eagan']
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
    neighborhoods: ['Chan Hills', 'Longacres', 'Pleasant Acres', 'Lake Ann'],
    zipCodes: ['55317', '55331'],
    programs: basePrograms,
    testimonials: baseTestimonials.map(t => ({ ...t, city: 'Chanhassen' })),
    faqs: baseFAQs.map(faq => ({ question: faq.question.replace('{city}', 'Chanhassen'), answer: faq.answer.replace('{city}', 'Chanhassen') })),
    nearbyCities: ['Eden Prairie', 'Minnetonka', 'Victoria', 'Chaska']
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
    neighborhoods: ['Downtown Chaska', 'Chaska Heights', 'Jonathan', 'Bavaria'],
    zipCodes: ['55318'],
    programs: basePrograms,
    testimonials: baseTestimonials.map(t => ({ ...t, city: 'Chaska' })),
    faqs: baseFAQs.map(faq => ({ question: faq.question.replace('{city}', 'Chaska'), answer: faq.answer.replace('{city}', 'Chaska') })),
    nearbyCities: ['Chanhassen', 'Shakopee', 'Victoria', 'Carver']
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
    neighborhoods: ['Cedar Grove', 'Lexington Heights', 'Rahn Highlands', 'Carriage Hills'],
    zipCodes: ['55121', '55122', '55123'],
    programs: basePrograms,
    testimonials: baseTestimonials.map(t => ({ ...t, city: 'Eagan' })),
    faqs: baseFAQs.map(faq => ({ question: faq.question.replace('{city}', 'Eagan'), answer: faq.answer.replace('{city}', 'Eagan') })),
    nearbyCities: ['Apple Valley', 'Burnsville', 'Inver Grove Heights', 'Mendota Heights']
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
    neighborhoods: ['Mitchell Village', 'Bent Creek', 'Olympic Hills', 'Prairie Village', 'Hennepin Village'],
    zipCodes: ['55344', '55346', '55347'],
    programs: basePrograms,
    testimonials: baseTestimonials.map(t => ({ ...t, city: 'Eden Prairie' })),
    faqs: baseFAQs.map(faq => ({ question: faq.question.replace('{city}', 'Eden Prairie'), answer: faq.answer.replace('{city}', 'Eden Prairie') })),
    nearbyCities: ['Minnetonka', 'Chanhassen', 'Bloomington', 'Edina']
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
    neighborhoods: ['Cahill Village', 'Countryside', 'Morningside', 'Country Club', 'Indian Hills'],
    zipCodes: ['55410', '55424', '55435', '55436'],
    programs: basePrograms,
    testimonials: baseTestimonials.map(t => ({ ...t, city: 'Edina' })),
    faqs: baseFAQs.map(faq => ({ question: faq.question.replace('{city}', 'Edina'), answer: faq.answer.replace('{city}', 'Edina') })),
    nearbyCities: ['Minneapolis', 'Bloomington', 'St. Louis Park', 'Richfield']
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
    neighborhoods: ['Breck', 'Menorah Park', 'Tyrol Hills', 'Meadowbrook', 'Golden Hills'],
    zipCodes: ['55416', '55422', '55427'],
    programs: basePrograms,
    testimonials: baseTestimonials.map(t => ({ ...t, city: 'Golden Valley' })),
    faqs: baseFAQs.map(faq => ({ question: faq.question.replace('{city}', 'Golden Valley'), answer: faq.answer.replace('{city}', 'Golden Valley') })),
    nearbyCities: ['Minneapolis', 'Plymouth', 'Crystal', 'St. Louis Park']
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
    neighborhoods: ['Downtown Hopkins', 'Oak Ridge', 'Bellgrove', 'Interlachen'],
    zipCodes: ['55305', '55343'],
    programs: basePrograms,
    testimonials: baseTestimonials.map(t => ({ ...t, city: 'Hopkins' })),
    faqs: baseFAQs.map(faq => ({ question: faq.question.replace('{city}', 'Hopkins'), answer: faq.answer.replace('{city}', 'Hopkins') })),
    nearbyCities: ['Minnetonka', 'Eden Prairie', 'St. Louis Park', 'Edina']
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
    neighborhoods: ['Airlake', 'Aronson', 'Orchard Lake', 'Kenrick', 'Valley Park'],
    zipCodes: ['55044', '55068'],
    programs: basePrograms,
    testimonials: baseTestimonials.map(t => ({ ...t, city: 'Lakeville' })),
    faqs: baseFAQs.map(faq => ({ question: faq.question.replace('{city}', 'Lakeville'), answer: faq.answer.replace('{city}', 'Lakeville') })),
    nearbyCities: ['Apple Valley', 'Burnsville', 'Prior Lake', 'Savage']
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
    neighborhoods: ['The Grove', 'Arbor Lakes', 'Rush Creek', 'Maple Knoll'],
    zipCodes: ['55311', '55369'],
    programs: basePrograms,
    testimonials: baseTestimonials.map(t => ({ ...t, city: 'Maple Grove' })),
    faqs: baseFAQs.map(faq => ({ question: faq.question.replace('{city}', 'Maple Grove'), answer: faq.answer.replace('{city}', 'Maple Grove') })),
    nearbyCities: ['Plymouth', 'Brooklyn Park', 'Osseo', 'Champlin']
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
    neighborhoods: ['Hillcrest', 'Gladstone', 'Hazel Park', 'Eastside'],
    zipCodes: ['55109', '55117'],
    programs: basePrograms,
    testimonials: baseTestimonials.map(t => ({ ...t, city: 'Maplewood' })),
    faqs: baseFAQs.map(faq => ({ question: faq.question.replace('{city}', 'Maplewood'), answer: faq.answer.replace('{city}', 'Maplewood') })),
    nearbyCities: ['St. Paul', 'North St. Paul', 'Oakdale', 'White Bear Lake']
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
    neighborhoods: ['Woodland', 'Ridgedale', 'Hopkins West', 'Four Seasons'],
    zipCodes: ['55305', '55343', '55345', '55391'],
    programs: basePrograms,
    testimonials: baseTestimonials.map(t => ({ ...t, city: 'Minnetonka' })),
    faqs: baseFAQs.map(faq => ({ question: faq.question.replace('{city}', 'Minnetonka'), answer: faq.answer.replace('{city}', 'Minnetonka') })),
    nearbyCities: ['Eden Prairie', 'Hopkins', 'St. Louis Park', 'Wayzata']
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
    neighborhoods: ['Plymouth Creek', 'Parkers Lake', 'Medicine Lake', 'Vicksburg'],
    zipCodes: ['55441', '55442', '55446', '55447'],
    programs: basePrograms,
    testimonials: baseTestimonials.map(t => ({ ...t, city: 'Plymouth' })),
    faqs: baseFAQs.map(faq => ({ question: faq.question.replace('{city}', 'Plymouth'), answer: faq.answer.replace('{city}', 'Plymouth') })),
    nearbyCities: ['Maple Grove', 'Wayzata', 'Minnetonka', 'Golden Valley']
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
    neighborhoods: ['Dean Lakes', 'Jackson Oaks', 'Sterling Estates', 'Pioneer Ridge'],
    zipCodes: ['55379'],
    programs: basePrograms,
    testimonials: baseTestimonials.map(t => ({ ...t, city: 'Shakopee' })),
    faqs: baseFAQs.map(faq => ({ question: faq.question.replace('{city}', 'Shakopee'), answer: faq.answer.replace('{city}', 'Shakopee') })),
    nearbyCities: ['Savage', 'Prior Lake', 'Chaska', 'Jordan']
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
    neighborhoods: ['Elmwood', 'Minikahda Vista', 'Westwood Hills', 'Fern Hill'],
    zipCodes: ['55416', '55426'],
    programs: basePrograms,
    testimonials: baseTestimonials.map(t => ({ ...t, city: 'St. Louis Park' })),
    faqs: baseFAQs.map(faq => ({ question: faq.question.replace('{city}', 'St. Louis Park'), answer: faq.answer.replace('{city}', 'St. Louis Park') })),
    nearbyCities: ['Minneapolis', 'Hopkins', 'Edina', 'Golden Valley']
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
    neighborhoods: ['Downtown', 'Summit Hill', 'Highland Park', 'Como', 'West Seventh', 'East Side'],
    zipCodes: ['55101', '55102', '55103', '55104', '55105', '55106', '55107', '55108', '55116', '55117'],
    programs: basePrograms,
    testimonials: baseTestimonials.map(t => ({ ...t, city: 'St. Paul' })),
    faqs: baseFAQs.map(faq => ({ question: faq.question.replace('{city}', 'St. Paul'), answer: faq.answer.replace('{city}', 'St. Paul') })),
    nearbyCities: ['Minneapolis', 'Maplewood', 'Mendota Heights', 'Roseville']
  },
  {
    name: 'Savage',
    slug: 'savage',
    metaDescription: 'Contact Ability Avenues in Savage, Minnesota for ABA therapy services. Reach us by phone, email, or visit our Savage support team. Start your intake today.',
    ogDescription: 'Contact Ability Avenues in Savage, Minnesota for ABA therapy services. Reach us by phone, email, or visit our Savage support team.',
    twitterDescription: 'Contact Ability Avenues in Savage, Minnesota for ABA therapy services. Reach our Savage team by phone or email to get started.',
    jsonLdDescription: 'Contact Ability Avenues in Savage for ABA therapy services. Reach us by phone, email, or connect with our Savage intake team.',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23456!2d-93.3366!3d44.7797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f6352e8e8e8e8e%3A0x0000000000000000!2sSavage%2C%20MN!5e0!3m2!1sen!2sus!4v1735000000&z=11',
    mapTitle: 'Savage Service Area Map',
    neighborhoods: ['Hamilton Creek', 'Southbridge', 'Mill Pond', 'Oak Ridge'],
    zipCodes: ['55378'],
    programs: basePrograms,
    testimonials: baseTestimonials.map(t => ({ ...t, city: 'Savage' })),
    faqs: baseFAQs.map(faq => ({ question: faq.question.replace('{city}', 'Savage'), answer: faq.answer.replace('{city}', 'Savage') })),
    nearbyCities: ['Burnsville', 'Shakopee', 'Prior Lake', 'Eden Prairie']
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((location) => location.slug === slug);
}

export function getAllLocationSlugs(): string[] {
  return locations.map((location) => location.slug);
}

