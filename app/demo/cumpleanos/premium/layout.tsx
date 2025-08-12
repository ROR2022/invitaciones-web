import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Toaster } from "@/components/ui/toaster"
import { MusicProvider } from '@/context/music-context'
import { premiumDemoData } from '@/components/demo/cumpleanos/premium/data/premium-demo-data'

export const metadata: Metadata = {
  title: 'Demo Cumpleaños Premium - Tema Superhéroes | Web Invitations',
  description: 'Demostración del paquete premium para cumpleaños infantiles tema superhéroes ($499) - Con música y galería',
  keywords: ['cumpleaños infantil', 'superhéroes', 'premium', 'música', 'galería', 'invitación digital', 'héroes'],
}

export default function PremiumCumpleanosDemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      {/* Badge premium con gradiente heroico */}
      <div className={`bg-gradient-to-r ${premiumDemoData.premium.color} text-white text-center py-3 relative z-50 shadow-lg`}>
        <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
          <span className="text-xl">🦸‍♀️</span>
          <span className="font-medium">{premiumDemoData.demo.badge}</span>
          <span className="hidden sm:inline">- {premiumDemoData.demo.description}</span>
          <span className="text-xl">⚡</span>
        </div>
        
        {/* Indicador de características premium */}
        <div className="text-xs text-blue-100 mt-1">
          🎵 Música Épica • 🖼️ Galería Heroica • ⚡ Efectos Especiales
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
