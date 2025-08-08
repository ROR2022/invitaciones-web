import type { Metadata } from 'next'
import { premiumDemoData } from '@/components/demo/bautizo/premium/data/premium-demo-data'
import Link from 'next/link'
import { ArrowLeft, Star } from 'lucide-react'
import { MusicProvider } from '@/context/music-context'
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: {
    template: '%s | Demo Bautizo Premium',
    default: 'Demo Bautizo Premium - Invitaciones Web MX'
  },
  description: 'Demostración del paquete premium para bautizos con características exclusivas.',
  keywords: ['bautizo', 'invitación digital', 'paquete premium', 'música', 'galería', 'padrinos'],
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
    canonical: '/demo/bautizo/premium',
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://invitacioneswebmx.com/demo/bautizo/premium',
    siteName: 'Invitaciones Web MX',
    title: 'Demo Bautizo Premium - Invitaciones Web MX',
    description: 'Demostración del paquete premium para bautizos con características exclusivas.',
    images: [
      {
        url: '/images/bautizo/bautizo2.jpeg',
        width: 1200,
        height: 630,
        alt: 'Demo Bautizo Premium',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Demo Bautizo Premium - Invitaciones Web MX',
    description: 'Demostración del paquete premium para bautizos con características exclusivas.',
    images: ['/images/bautizo/bautizo2.jpeg'],
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

export default function BautizoPremiumLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      {/* Badge premium con gradiente distintivo */}
      <div className={`bg-gradient-to-r ${premiumDemoData.premium.color} text-white text-center py-3 relative z-50 shadow-lg`}>
        <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
          <Star className="w-4 h-4 fill-current" />
          <span className="font-medium">{premiumDemoData.demo.badge}</span>
          <span className="hidden sm:inline">- {premiumDemoData.demo.description}</span>
          <Star className="w-4 h-4 fill-current" />
        </div>
        
        {/* Indicador de características premium */}
        <div className="text-xs text-purple-100 mt-1">
          🎵 Música • 🖼️ Galería • 👥 Padrinos
        </div>
      </div>

      {/* Botón de navegación de regreso */}
      <Link 
        href="/catalog"
        className="fixed top-20 left-4 z-40 bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full shadow-lg hover:bg-white transition-all duration-300 border border-gray-200"
      >
        <div className="flex items-center gap-2 text-sm">
          <ArrowLeft size={16} />
          <span className="hidden sm:inline">Regresar a catalogo</span>
          <span className="sm:hidden">Catalogo</span>
        </div>
      </Link>
      
      {/* MusicProvider para funcionalidad premium de música */}
      <MusicProvider>
        {/* Contenido principal */}
        {children}
      </MusicProvider>
      
      {/* Toaster para notificaciones */}
      <Toaster />
    </div>
  )
}
