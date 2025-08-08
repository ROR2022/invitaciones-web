import type { Metadata } from 'next'

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
      {children}
    </div>
  )
}
