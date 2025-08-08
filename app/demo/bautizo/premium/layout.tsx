import type { Metadata } from 'next'

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
      {children}
    </div>
  )
}
