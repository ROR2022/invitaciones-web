import { Metadata } from 'next'
import { PremiumHero } from '@/components/demo/bautizo/premium/PremiumHero'
import { PremiumInvitation } from '@/components/demo/bautizo/premium/PremiumInvitation'
import { PremiumPadrinos } from '@/components/demo/bautizo/premium/PremiumPadrinos'
import { PremiumGallery } from '@/components/demo/bautizo/premium/PremiumGallery'
import { PremiumThankYou } from '@/components/demo/bautizo/premium/PremiumThankYou'
import { PremiumMusicPlayer } from '@/components/demo/bautizo/premium/PremiumMusicPlayer'
import { FloatingMusicPlayer } from '@/components/demo/bautizo/premium/FloatingMusicPlayer'
import { AudioElement } from '@/components/demo/bautizo/premium/AudioElement'

export const metadata: Metadata = {
  title: 'Demo Bautizo Premium - Invitaciones Web MX',
  description: 'Demostración del paquete premium para bautizos. Incluye música, galería de fotos, lista de padrinos y más características exclusivas.',
  keywords: 'bautizo, invitación digital, paquete premium, música, galería, padrinos',
  openGraph: {
    title: 'Demo Bautizo Premium - Invitaciones Web MX',
    description: 'Demostración del paquete premium para bautizos con características exclusivas.',
    type: 'website',
    url: 'https://invitacioneswebmx.com/demo/bautizo/premium',
    images: [
      {
        url: '/images/bautizo/bautizo2.jpeg',
        width: 1200,
        height: 630,
        alt: 'Demo Bautizo Premium'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Demo Bautizo Premium - Invitaciones Web MX',
    description: 'Demostración del paquete premium para bautizos con características exclusivas.',
    images: ['/images/bautizo/bautizo2.jpeg']
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function BautizoPremiumPage() {
  return (
    <main className="overflow-hidden pb-20">
      {/* Componente de audio oculto para manejar la reproducción global */}
      <AudioElement />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
        <PremiumHero />
        <PremiumInvitation />
        <PremiumPadrinos />
        <PremiumGallery />
        <PremiumThankYou />
        <PremiumMusicPlayer />
        
        {/* Control flotante de música */}
        <FloatingMusicPlayer />
      </div>
    </main>
  )
}
