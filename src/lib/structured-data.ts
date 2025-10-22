export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ricks Energy Ltd',
  alternateName: 'Ricks Energy Limited',
  url: 'https://ricksenergy.com',
  logo: 'https://ricksenergy.com/logo.jpg',
  description: 'Leading African energy services provider delivering world-class inspection, welding, fabrication, NDT, rope access, and comprehensive maintenance solutions across West, East, and Southern Africa.',
  foundingDate: '2019',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'GH',
    addressRegion: 'Western Region',
    addressLocality: 'Takoradi',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+233-24-123-4567',
    contactType: 'customer service',
    areaServed: ['GH', 'NG', 'KE', 'ZA'],
    availableLanguage: ['en'],
  },
  sameAs: [
    'https://www.linkedin.com/company/ricks-energy',
    'https://www.facebook.com/ricksenergy',
    'https://twitter.com/ricksenergy',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '100',
  },
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Ricks Energy Ltd',
  image: 'https://ricksenergy.com/logo.jpg',
  '@id': 'https://ricksenergy.com',
  url: 'https://ricksenergy.com',
  telephone: '+233-24-123-4567',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'GH',
    addressRegion: 'Western Region',
    addressLocality: 'Takoradi',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 4.8845,
    longitude: -1.7554,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '17:00',
  },
  sameAs: [
    'https://www.linkedin.com/company/ricks-energy',
    'https://www.facebook.com/ricksenergy',
    'https://twitter.com/ricksenergy',
  ],
};

export const servicesOfferedSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Oil & Gas Services',
  provider: {
    '@type': 'Organization',
    name: 'Ricks Energy Ltd',
  },
  areaServed: {
    '@type': 'Country',
    name: ['Ghana', 'Nigeria', 'Kenya', 'South Africa'],
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Energy Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'NDT Inspection Services',
          description: 'Non-Destructive Testing inspection services for oil and gas industry',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Rope Access Services',
          description: 'Professional rope access solutions for industrial maintenance',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Welding & Fabrication',
          description: 'Industrial welding and fabrication services',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'IRATA Training',
          description: 'Professional rope access training and certification',
        },
      },
    ],
  },
};
