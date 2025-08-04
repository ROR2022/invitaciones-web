import { MetadataRoute } from 'next'

// Robots.txt específico para el catálogo
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/catalog',
          '/catalog/',
          '/demo/',
        ],
        disallow: [
          '/catalog/admin/',
          '/catalog/private/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: [
          '/catalog',
          '/catalog/',
          '/demo/',
        ],
        crawlDelay: 1,
      },
    ],
    sitemap: 'https://invitacioneswebmx.com/catalog/sitemap.xml',
  }
}