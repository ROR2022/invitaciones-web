// Estructura de datos para el catálogo de invitaciones digitales
// Integra con los datos existentes del proyecto

import { contactFormData } from '@/components/landing/data/contact-form-data'

// Interfaces principales
export interface CatalogCategory {
  id: string
  name: string
  icon: string
  description: string
  images: string[]
  demoLink: string
  featured?: boolean
  color: string
  gradient: string
}

export interface CatalogProduct {
  id: string
  categoryId: string
  name: string
  description: string
  image: string
  packageType: 'basico' | 'premium' | 'vip'
  price: string
  features: string[]
  demoLink: string
  popular?: boolean
}

// Categorías principales del catálogo
export const catalogCategories: CatalogCategory[] = [
  {
    id: "bodas",
    name: "Bodas",
    icon: "💒",
    description: "Invitaciones elegantes para tu día más especial",
    images: [
      "/images/boda/boda1.jpeg",
      "/images/boda/boda2.jpeg", 
      "/images/boda/boda3.jpeg",
      "/images/boda/boda4.jpeg",
      "/images/boda/boda5.jpeg"
    ],
    demoLink: "/demo/boda",
    color: "rose",
    gradient: "from-rose-500 to-pink-500"
  },
  {
    id: "quince",
    name: "XV Años",
    icon: "👑", 
    description: "Celebra tus quince años con estilo único",
    images: [
      "/images/quince/quince1.jpeg",
      "/images/quince/quince2.jpeg",
      "/images/quince/quince3.jpeg",
      "/images/quince/quince4.jpeg"
    ],
    demoLink: "/demo/quince",
    color: "purple",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: "bautizos",
    name: "Bautizos",
    icon: "🍼",
    description: "Celebra el bautizo de tu bebé con amor y fe",
    images: [
      "/images/bautizo/bautizo1.jpeg",
      "/images/bautizo/bautizo2.jpeg",
      "/images/bautizo/bautizo3.jpeg",
      "/images/bautizo/bautizo4.jpeg"
    ],
    demoLink: "/demo/bautizo",
    color: "blue",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: "cumpleanos-infantiles",
    name: "Cumpleaños Infantiles",
    icon: "🎂",
    description: "Celebra el cumpleaños de tu pequeño con temas mágicos y divertidos",
    images: [
      "/images/cumple/vaqueros/vaqueros1.png",
      "/images/cumple/vaqueros/vaqueros2.png",
      "/images/cumple/vaqueros/vaqueros3.png"
    ],
    demoLink: "/demo/cumpleanos",
    color: "green",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    id: "recientes",
    name: "Trabajos Recientes",
    icon: "✨",
    description: "Nuestros diseños más nuevos y destacados",
    images: [
      "/images/boda/boda1.jpeg",
      "/images/quince/quince1.jpeg", 
      "/images/bautizo/bautizo1.jpeg",
      "/images/boda/boda5.jpeg",
      "/images/quince/quince3.jpeg"
    ],
    demoLink: "/demo",
    featured: true,
    color: "amber",
    gradient: "from-amber-500 to-orange-500"
  }
]

// Productos del catálogo basados en paquetes existentes
export const catalogProducts: CatalogProduct[] = [
  // BODAS
  {
    id: "boda-basico",
    categoryId: "bodas", 
    name: "Boda Básica",
    description: "Incluye todas las características esenciales para tu boda",
    image: "/images/boda/boda1.jpeg",
    packageType: "basico",
    price: "$299",
    features: [
      "Cuenta Regresiva",
      "Cuándo y dónde", 
      "Confirmación de asistencia",
      "Opciones de regalo",
      "Código de vestimenta"
    ],
    demoLink: "/demo/boda/basic"
  },
  {
    id: "boda-premium",
    categoryId: "bodas",
    name: "Boda Premium", 
    description: "¡La más solicitada! - Incluye música, galería y padrinos",
    image: "/images/boda/boda2.jpeg",
    packageType: "premium",
    price: "$499",
    features: [
      "Todo del Básico",
      "Música personalizada",
      "Galería de fotos",
      "Lista de padrinos",
      "Invitación completa"
    ],
    demoLink: "/demo/boda/premium",
    popular: true
  },
  {
    id: "boda-vip",
    categoryId: "bodas",
    name: "Boda VIP",
    description: "¡El más exclusivo! - Experiencia completa con logística del evento", 
    image: "/images/boda/boda3.jpeg",
    packageType: "vip",
    price: "$699",
    features: [
      "Todo del Premium",
      "Hospedaje recomendado",
      "Itinerario completo",
      "Pases de invitados",
      "Playlist múltiple"
    ],
    demoLink: "/demo/boda/vip"
  },

  // XV AÑOS
  {
    id: "quince-basico",
    categoryId: "quince",
    name: "XV Años Básico",
    description: "Incluye todas las características esenciales para tu evento",
    image: "/images/quince/quince1.jpeg", 
    packageType: "basico",
    price: "$299",
    features: [
      "Cuenta Regresiva",
      "Cuándo y dónde",
      "Confirmación de asistencia", 
      "Opciones de regalo",
      "Código de vestimenta"
    ],
    demoLink: "/demo/quince/basic"
  },
  {
    id: "quince-premium",
    categoryId: "quince",
    name: "XV Años Premium",
    description: "¡La más solicitada! - Incluye música, galería y padrinos",
    image: "/images/quince/quince2.jpeg",
    packageType: "premium", 
    price: "$499",
    features: [
      "Todo del Básico",
      "Música personalizada",
      "Galería de fotos",
      "Lista de padrinos",
      "Invitación completa"
    ],
    demoLink: "/demo/quince/premium",
    popular: true
  },
  {
    id: "quince-vip", 
    categoryId: "quince",
    name: "XV Años VIP",
    description: "¡El más exclusivo! - Experiencia completa con logística del evento",
    image: "/images/quince/quince3.jpeg",
    packageType: "vip",
    price: "$699", 
    features: [
      "Todo del Premium",
      "Hospedaje recomendado",
      "Itinerario completo",
      "Pases de invitados", 
      "Playlist múltiple"
    ],
    demoLink: "/demo/quince/vip"
  },

  // BAUTIZOS
  {
    id: "bautizo-basico",
    categoryId: "bautizos",
    name: "Bautizo Básico",
    description: "Incluye todas las características esenciales para el bautizo de tu bebé",
    image: "/images/bautizo/bautizo1.jpeg",
    packageType: "basico",
    price: "$299",
    features: [
      "Cuenta Regresiva",
      "Cuándo y dónde",
      "Confirmación de asistencia",
      "Opciones de regalo",
      "Información del bebé"
    ],
    demoLink: "/demo/bautizo/basic"
  },
  {
    id: "bautizo-premium",
    categoryId: "bautizos",
    name: "Bautizo Premium",
    description: "¡La más solicitada! - Incluye música, galería y padrinos",
    image: "/images/bautizo/bautizo2.jpeg",
    packageType: "premium",
    price: "$499",
    features: [
      "Todo del Básico",
      "Música religiosa",
      "Galería de fotos",
      "Lista de padrinos",
      "Invitación especial"
    ],
    demoLink: "/demo/bautizo/premium",
    popular: true
  },
  {
    id: "bautizo-vip",
    categoryId: "bautizos",
    name: "Bautizo VIP",
    description: "¡El más exclusivo! - Experiencia completa con logística del evento",
    image: "/images/bautizo/bautizo3.jpeg",
    packageType: "vip",
    price: "$699",
    features: [
      "Todo del Premium",
      "Hospedaje recomendado",
      "Itinerario completo",
      "Pases de invitados",
      "Playlist múltiple"
    ],
    demoLink: "/demo/bautizo/vip"
  },

  // CUMPLEAÑOS INFANTILES
  {
    id: "cumpleanos-basico",
    categoryId: "cumpleanos-infantiles",
    name: "Cumpleaños Vaqueros",
    description: "¡Yeehaw! Celebra con el tema del salvaje oeste y aventuras vaqueras",
    image: "/images/cumple/vaqueros/vaqueros1.png",
    packageType: "basico",
    price: "$299",
    features: [
      "Cuenta Regresiva",
      "Cuándo y dónde",
      "Confirmación de asistencia",
      "Opciones de regalo",
      "Código de vestimenta vaquero"
    ],
    demoLink: "/demo/cumpleanos/basic"
  },
  {
    id: "cumpleanos-premium",
    categoryId: "cumpleanos-infantiles",
    name: "Cumpleaños Superhéroes",
    description: "¡Poderes activados! Celebra con música épica y galería heroica",
    image: "/images/cumple/vaqueros/vaqueros2.png",
    packageType: "premium",
    price: "$499",
    features: [
      "Todo del Básico",
      "Música de superhéroes",
      "Galería de fotos épica",
      "Lista de invitados especiales",
      "Invitación heroica completa"
    ],
    demoLink: "/demo/cumpleanos/premium",
    popular: true
  },
  {
    id: "cumpleanos-vip",
    categoryId: "cumpleanos-infantiles",
    name: "Cumpleaños Princesas",
    description: "¡Magia real! Experiencia VIP con música orquestal y lista de invitados especiales",
    image: "/images/cumple/vaqueros/vaqueros3.png",
    packageType: "vip",
    price: "$699",
    features: [
      "Todo del Premium",
      "Música orquestal real",
      "Galería VIP con categorías",
      "Lista de invitados especiales",
      "Experiencia mágica completa"
    ],
    demoLink: "/demo/cumpleanos/vip"
  },

  // TRABAJOS RECIENTES (destacados)
  {
    id: "reciente-quince-basico",
    categoryId: "recientes",
    name: "XV Años Joanny Valeria",
    description: "Diseño reciente con música romántica y galería elegante",
    image: "/images/quince/quince4.jpeg",
    packageType: "basico",
    price: "$299",
    features: [
      "Cuenta Regresiva",
      "Cuándo y dónde",
      "Confirmación de asistencia",
      "Opciones de regalo",
      "Código de vestimenta"
    ],
    demoLink: "https://quince-joanny.vercel.app/"
  },
  {
    id: "reciente-boda-premium",
    categoryId: "recientes",
    name: "Boda Vero & Arodi",
    description: "Diseño reciente con música romántica y galería elegante",
    image: "/images/boda/boda5.jpeg",
    packageType: "premium",
    price: "$499",
    features: [
      "Música personalizada",
      "Galería romántica", 
      "Lista de padrinos",
      "Invitación completa"
    ],
    demoLink: "https://boda-premium-arodi.vercel.app/",
    popular: true
  },
  {
    id: "reciente-bautizo-vip", 
    categoryId: "recientes",
    name: "Bautizo Mia Isabel",
    description: "Experiencia VIP completa con hospedaje e itinerario",
    image: "/images/bautizo/bautizo4.jpeg",
    packageType: "vip", 
    price: "$699",
    features: [
      "Logística completa",
      "Hospedaje premium",
      "Itinerario detallado",
      "Pases VIP"
    ],
    demoLink: "https://bautizo-vip-mia-isabel.vercel.app/"
  },
  {
    id: "reciente-cumpleanos-premium",
    categoryId: "recientes",
    name: "Cumpleaños Superhéroes",
    description: "Diseño reciente con música épica y galería heroica",
    image: "/images/cumple/vaqueros/vaqueros2.png",
    packageType: "premium",
    price: "$499",
    features: [
      "Música de superhéroes",
      "Galería épica",
      "Lista de invitados especiales",
      "Invitación heroica"
    ],
    demoLink: "/demo/cumpleanos/premium",
    popular: true
  }
]

// Información de paquetes (reutilizar datos existentes)
export const catalogPackages = contactFormData.packages

// Utilidades para filtrado y búsqueda
export const getCategoryById = (categoryId: string): CatalogCategory | undefined => {
  return catalogCategories.find(cat => cat.id === categoryId)
}

export const getProductsByCategory = (categoryId: string): CatalogProduct[] => {
  return catalogProducts.filter(product => product.categoryId === categoryId)
}

export const getProductsByPackage = (packageType: 'basico' | 'premium' | 'vip'): CatalogProduct[] => {
  return catalogProducts.filter(product => product.packageType === packageType)
}

export const getFeaturedProducts = (): CatalogProduct[] => {
  return catalogProducts.filter(product => product.popular)
}

// Configuración del catálogo
export const catalogConfig = {
  itemsPerPage: 9,
  defaultView: 'grid' as 'grid' | 'list',
  defaultCategory: 'all',
  showPriceRange: true,
  enableSearch: false, // Por ahora solo filtros
  animations: true
}

// Metadata para SEO
export const catalogMetadata = {
  title: "Catálogo de Invitaciones Digitales | Bodas, XV Años, Cumpleaños y Más",
  description: "Descubre nuestro catálogo completo de invitaciones digitales. Paquetes desde $299 para bodas, XV años, cumpleaños infantiles y eventos especiales. Ver demos interactivos.",
  keywords: "invitaciones digitales, bodas, XV años, cumpleaños infantiles, catálogo, precios, demos, México",
  ogImage: "/images/boda/boda1.jpeg"
}

