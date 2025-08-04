import { MetadataRoute } from 'next'
import { catalogCategories, catalogProducts } from '@/components/catalog/data/catalog-data'

// Sitemap dinámico para el catálogo
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://invitacioneswebmx.com'
  
  // Página principal del catálogo
  const catalogMain = {
    url: `${baseUrl}/catalog`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }

  // URLs de demos de productos (si existen páginas específicas)
  const productUrls = catalogProducts.map(product => ({
    url: `${baseUrl}${product.demoLink}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // URLs de categorías (si tienes páginas específicas por categoría)
  const categoryUrls = catalogCategories.map(category => ({
    url: `${baseUrl}/catalog?category=${category.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [
    catalogMain,
    ...productUrls,
    ...categoryUrls,
  ]
}