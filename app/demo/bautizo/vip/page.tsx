import { Metadata } from 'next'
import { VipHero } from '@/components/demo/bautizo/vip/VipHero'
import { VipAccommodation } from '@/components/demo/bautizo/vip/VipAccommodation'
import { VipItinerary } from '@/components/demo/bautizo/vip/VipItinerary'
import { VipGuestPasses } from '@/components/demo/bautizo/vip/VipGuestPasses'
import { VipGallery } from '@/components/demo/bautizo/vip/VipGallery'
import { VipMusicPlayer } from '@/components/demo/bautizo/vip/VipMusicPlayer'
import { AudioElement } from '@/components/demo/bautizo/vip/AudioElement'
import { FloatingMusicPlayer } from '@/components/demo/bautizo/vip/FloatingMusicPlayer'

export const metadata: Metadata = {
  title: 'Demo Bautizo VIP - Invitaciones Web MX',
  description: 'Demostración del paquete VIP para bautizos. Experiencia completa con hospedaje, itinerario, pases de invitados y características exclusivas.',
  keywords: 'bautizo, invitación digital, paquete vip, hospedaje, itinerario, pases invitados',
  openGraph: {
    title: 'Demo Bautizo VIP - Invitaciones Web MX',
    description: 'Demostración del paquete VIP para bautizos con experiencia completa.',
    type: 'website',
    url: 'https://invitacioneswebmx.com/demo/bautizo/vip',
    images: [
      {
        url: '/images/bautizo/bautizo3.jpeg',
        width: 1200,
        height: 630,
        alt: 'Demo Bautizo VIP'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Demo Bautizo VIP - Invitaciones Web MX',
    description: 'Demostración del paquete VIP para bautizos con experiencia completa.',
    images: ['/images/bautizo/bautizo3.jpeg']
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function BautizoVipDemo() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100">
      {/* Componente para reproducir audio (oculto) */}
      <AudioElement />
      
      {/* Botón flotante para controlar música */}
      <FloatingMusicPlayer />
      
      {/* Componentes de contenido */}
      <VipHero />
      <VipAccommodation />
      <VipItinerary />
      <VipGuestPasses />
      <VipMusicPlayer />
      <VipGallery />
    </main>
  )
}
