import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { basicDemoData } from '@/components/demo/cumpleanos/basic/data/basic-demo-data'

export const metadata: Metadata = {
  title: 'Demo Cumpleaños Básico - Tema Vaqueros | Web Invitations',
  description: 'Demostración del paquete básico para cumpleaños infantiles tema vaqueros ($299) - Diseño del Salvaje Oeste',
  keywords: ['cumpleaños infantil', 'vaqueros', 'básico', 'salvaje oeste', 'invitación digital', 'temático'],
}

export default function BasicCumpleanosDemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      {/* Badge básico con gradiente vaquero */}
      <div className={`bg-gradient-to-r ${basicDemoData.theme.primary} text-white text-center py-3 relative z-50 shadow-lg`}>
        <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
          <span className="text-xl">🤠</span>
          <span className="font-medium">{basicDemoData.demo.badge}</span>
          <span className="hidden sm:inline">- {basicDemoData.demo.description}</span>
          <span className="text-xl">🐎</span>
        </div>
        
        {/* Indicador de características básicas */}
        <div className="text-xs text-amber-100 mt-1">
          📱 Responsive • 🕐 Cronograma • 📍 Ubicación • 🤠 Tema Vaquero
        </div>
      </div>

      {/* Botón de navegación de regreso */}
      <Link 
        href="/catalog"
        className="fixed top-20 left-4 z-40 bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full shadow-lg hover:bg-white transition-all duration-300 border border-gray-200"
      >
        <div className="flex items-center gap-2 text-sm">
          <ArrowLeft size={16} />
          <span className="hidden sm:inline">Regresar al catálogo</span>
          <span className="sm:hidden">Catálogo</span>
        </div>
      </Link>

      {/* Contenido principal */}
      {children}
    </div>
  )
}
