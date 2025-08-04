import { Metadata } from 'next'
import { catalogMetadata } from '@/components/catalog/data/catalog-data'

// Metadata SEO optimizada para el catálogo
export const metadata: Metadata = {
  title: catalogMetadata.title,
  description: catalogMetadata.description,
  keywords: catalogMetadata.keywords,
  
  // Open Graph para redes sociales
  openGraph: {
    title: catalogMetadata.title,
    description: catalogMetadata.description,
    url: '/catalog',
    siteName: 'Invitaciones Web MX',
    images: [
      {
        url: catalogMetadata.ogImage,
        width: 1200,
        height: 630,
        alt: 'Catálogo de Invitaciones Digitales - Bodas y XV Años',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: catalogMetadata.title,
    description: catalogMetadata.description,
    images: [catalogMetadata.ogImage],
    creator: '@invitacioneswebmx',
  },

  // Metadatos adicionales
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Canonical URL
  alternates: {
    canonical: '/catalog',
  },

  // Metadatos para aplicaciones
  applicationName: 'Invitaciones Web MX',
  category: 'Events & Entertainment',

  // Autor y creador
  authors: [{ name: 'Invitaciones Web MX' }],
  creator: 'Invitaciones Web MX',
  publisher: 'Invitaciones Web MX',

  // Formato y clasificación
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Viewport y dispositivos móviles
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

// JSON-LD Structured Data para SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": catalogMetadata.title,
  "description": catalogMetadata.description,
  "url": "https://invitacioneswebmx.com/catalog",
  "mainEntity": {
    "@type": "ItemList",
    "name": "Catálogo de Invitaciones Digitales",
    "description": "Paquetes de invitaciones digitales para bodas, XV años y eventos especiales",
    "numberOfItems": 8,
    "itemListElement": [
      {
        "@type": "Product",
        "position": 1,
        "name": "Paquete Básico de Boda",
        "description": "Incluye todas las características esenciales para tu boda",
        "image": "https://invitacioneswebmx.com/images/boda/boda1.jpeg",
        "offers": {
          "@type": "Offer",
          "price": "299",
          "priceCurrency": "MXN",
          "availability": "https://schema.org/InStock",
          "priceValidUntil": "2025-12-31"
        },
        "category": "Invitaciones Digitales"
      },
      {
        "@type": "Product", 
        "position": 2,
        "name": "Paquete Premium de Boda",
        "description": "¡La más solicitada! - Incluye música, galería y padrinos",
        "image": "https://invitacioneswebmx.com/images/boda/boda2.jpeg",
        "offers": {
          "@type": "Offer",
          "price": "499",
          "priceCurrency": "MXN",
          "availability": "https://schema.org/InStock",
          "priceValidUntil": "2025-12-31"
        },
        "category": "Invitaciones Digitales"
      },
      {
        "@type": "Product",
        "position": 3, 
        "name": "Paquete VIP de Boda",
        "description": "¡El más exclusivo! - Experiencia completa con logística del evento",
        "image": "https://invitacioneswebmx.com/images/boda/boda3.jpeg",
        "offers": {
          "@type": "Offer",
          "price": "699",
          "priceCurrency": "MXN",
          "availability": "https://schema.org/InStock",
          "priceValidUntil": "2025-12-31"
        },
        "category": "Invitaciones Digitales"
      }
    ]
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://invitacioneswebmx.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Catálogo",
        "item": "https://invitacioneswebmx.com/catalog"
      }
    ]
  },
  "provider": {
    "@type": "Organization",
    "name": "Invitaciones Web MX",
    "url": "https://invitacioneswebmx.com",
    "logo": "https://invitacioneswebmx.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+52-777-793-7484",
      "contactType": "Customer Service",
      "availableLanguage": ["Spanish"],
      "areaServed": "MX"
    }
  }
}

export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      
      {/* Contenido del catálogo */}
      {children}
    </>
  )
}