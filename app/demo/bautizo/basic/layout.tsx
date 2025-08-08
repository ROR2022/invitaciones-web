import type { Metadata } from 'next'

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
      {children}
    </div>
  )
}
