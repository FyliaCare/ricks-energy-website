import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ricksenergy.com'; // Update with your actual domain

  // Static pages
  const staticPages = [
    '',
    '/about',
    '/services',
    '/services/rope-access',
    '/contact',
    '/news',
    '/projects',
    '/capabilities/quality-assurance',
    '/capabilities/safety-excellence',
    '/capabilities/global-experience',
    '/capabilities/local-expertise',
  ];

  // Service pages
  const services = [
    'ndt-inspection',
    'mechanical-maintenance',
    'rope-access',
    'welding-fabrication',
    'irata-training',
    'renewable-energy',
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPages.map(page => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'daily' : 'weekly',
    priority: page === '' ? 1.0 : 0.8,
  }));

  const serviceEntries: MetadataRoute.Sitemap = services.map(service => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...staticEntries, ...serviceEntries];
}
