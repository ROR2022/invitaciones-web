import { Metadata } from 'next'
import { BasicHero } from '@/components/demo/bautizo/basic/BasicHero'
import { BasicCountdown } from '@/components/demo/bautizo/basic/BasicCountdown'
import { BasicEventDetails } from '@/components/demo/bautizo/basic/BasicEventDetails'
import { BasicAttendance } from '@/components/demo/bautizo/basic/BasicAttendance'
import { BasicGiftOptions } from '@/components/demo/bautizo/basic/BasicGiftOptions'

export const metadata: Metadata = {
  title: 'Demo Bautizo Básico - Invitaciones Web MX',
  description: 'Demostración del paquete básico para bautizos. Incluye cuenta regresiva, información del evento, confirmación de asistencia y opciones de regalo.',
  keywords: 'bautizo, invitación digital, paquete básico, cuenta regresiva, confirmación asistencia',
  openGraph: {
    title: 'Demo Bautizo Básico - Invitaciones Web MX',
    description: 'Demostración del paquete básico para bautizos con todas las características esenciales.',
    type: 'website',
    url: 'https://invitacioneswebmx.com/demo/bautizo/basic',
    images: [
      {
        url: '/images/bautizo/bautizo1.jpeg',
        width: 1200,
        height: 630,
        alt: 'Demo Bautizo Básico'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Demo Bautizo Básico - Invitaciones Web MX',
    description: 'Demostración del paquete básico para bautizos con todas las características esenciales.',
    images: ['/images/bautizo/bautizo1.jpeg']
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function BautizoBasicPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <BasicHero />
      <BasicCountdown />
      <BasicEventDetails />
      <BasicAttendance />
      <BasicGiftOptions />
    </div>
  )
}
