import type { Metadata } from 'next'
import { basicDemoData } from '@/components/demo/bautizo/basic/data/basic-demo-data'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: {
    template: '%s | Demo Bautizo Básico',
    default: 'Demo Bautizo Básico - Invitaciones Web MX'
  },
  description: 'Demostración del paquete básico para bautizos con todas las características esenciales.',
  keywords: ['bautizo', 'invitación digital', 'paquete básico', 'cuenta regresiva', 'confirmación asistencia'],
  authors: [{ name: 'Invitaciones Web MX' }],
  creator: 'Invitaciones Web MX',
  publisher: 'Invitaciones Web MX',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://invitacioneswebmx.com'),
  alternates: {
    canonical: '/demo/bautizo/basic',
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://invitacioneswebmx.com/demo/bautizo/basic',
    siteName: 'Invitaciones Web MX',
    title: 'Demo Bautizo Básico - Invitaciones Web MX',
    description: 'Demostración del paquete básico para bautizos con todas las características esenciales.',
    images: [
      {
        url: '/images/bautizo/bautizo1.jpeg',
        width: 1200,
        height: 630,
        alt: 'Demo Bautizo Básico',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Demo Bautizo Básico - Invitaciones Web MX',
    description: 'Demostración del paquete básico para bautizos con todas las características esenciales.',
    images: ['/images/bautizo/bautizo1.jpeg'],
    creator: '@invitacioneswebmx',
  },
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
}

export default function BautizoBasicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      {/* Badge indicador de demo */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 relative z-50">
        <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
          <span>{basicDemoData.demo.badge}</span>
          <span className="hidden sm:inline">- {basicDemoData.demo.description}</span>
        </div>
      </div>

      {/* Botón de navegación de regreso */}
      <Link 
        href="/catalog"
        className="fixed top-16 left-4 z-40 bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full shadow-lg hover:bg-white transition-all duration-300 border border-gray-200"
      >
        <div className="flex items-center gap-2 text-sm">
          <ArrowLeft size={16} />
          <span className="hidden sm:inline">Regresar a catalogo</span>
          <span className="sm:hidden">Catalogo</span>
        </div>
      </Link>
      {children}
    </div>
  )
}
