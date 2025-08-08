import type { Metadata } from 'next'
import Link from 'next/link'
import { MusicProvider } from '@/context/music-context'
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: {
    template: '%s | Demo Bautizo VIP',
    default: 'Demo Bautizo VIP - Invitaciones Web MX'
  },
  description: 'Demostración del paquete VIP para bautizos con experiencia completa.',
  keywords: ['bautizo', 'invitación digital', 'paquete vip', 'hospedaje', 'itinerario', 'pases invitados'],
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
    canonical: '/demo/bautizo/vip',
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://invitacioneswebmx.com/demo/bautizo/vip',
    siteName: 'Invitaciones Web MX',
    title: 'Demo Bautizo VIP - Invitaciones Web MX',
    description: 'Demostración del paquete VIP para bautizos con experiencia completa.',
    images: [
      {
        url: '/images/bautizo/bautizo3.jpeg',
        width: 1200,
        height: 630,
        alt: 'Demo Bautizo VIP',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Demo Bautizo VIP - Invitaciones Web MX',
    description: 'Demostración del paquete VIP para bautizos con experiencia completa.',
    images: ['/images/bautizo/bautizo3.jpeg'],
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

export default function BautizoVipLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
       {/* Badge VIP flotante */}
       <div className="fixed top-4 left-4 z-50 bg-gradient-to-r from-yellow-400 to-amber-500 text-amber-900 px-4 py-2 rounded-full text-sm font-bold shadow-2xl border-2 border-yellow-300 animate-pulse">
          👑 DEMO VIP - Boda
        </div>
        
        {/* Badge de regreso */}
        <div className="fixed top-4 right-4 z-50">
          <Link
            href="/catalog" 
            className="bg-white/90 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-full text-sm font-medium shadow-lg border border-gray-200 hover:bg-white transition-all duration-300"
          >
            ← Catalogo
          </Link>
        </div>
      {/* MusicProvider para funcionalidad VIP de música */}
      <MusicProvider>
        {/* Contenido principal */}
        {children}
      </MusicProvider>
      
      {/* Toaster para notificaciones */}
      <Toaster />
    </div>
  )
}
