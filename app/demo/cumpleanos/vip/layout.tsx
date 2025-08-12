import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Toaster } from "@/components/ui/toaster"
import { MusicProvider } from '@/context/music-context'
import { vipDemoData } from '@/components/demo/cumpleanos/vip/data/vip-demo-data'

export const metadata: Metadata = {
  title: 'Demo Cumpleaños VIP - Tema Princesas | Web Invitations',
  description: 'Demostración del paquete VIP para cumpleaños infantiles tema princesas ($699) - La experiencia más completa',
  keywords: ['cumpleaños infantil', 'princesas', 'VIP', 'música', 'galería', 'invitados', 'reino encantado', 'invitación digital'],
}

export default function VipCumpleanosDemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      {/* Badge VIP con gradiente real */}
      <div className={`bg-gradient-to-r ${vipDemoData.vip.color} text-white text-center py-4 relative z-50 shadow-xl`}>
        <div className="flex items-center justify-center gap-3 text-sm sm:text-base">
          <span className="text-xl">👸</span>
          <span className="font-bold">{vipDemoData.demo.badge}</span>
          <span className="hidden sm:inline">- {vipDemoData.demo.description}</span>
          <span className="text-xl">✨</span>
        </div>
        
        {/* Indicador de características VIP */}
        <div className="text-xs text-pink-100 mt-2">
          🎵 Música Orquestal • 🖼️ Galería Real • 👥 Lista VIP • ✨ Efectos Mágicos • 👑 Soporte 24/7
        </div>
      </div>

      {/* Botón de navegación de regreso centrado */}
      <Link 
        href="/catalog"
        className="fixed top-24 left-1/2 transform -translate-x-1/2 z-40 bg-white/90 backdrop-blur-sm text-gray-800 px-6 py-3 rounded-full shadow-xl hover:bg-white transition-all duration-300 border-2 border-pink-200 hover:border-pink-300"
      >
        <div className="flex items-center gap-2 text-sm font-medium">
          <ArrowLeft size={16} />
          <span className="hidden sm:inline">Regresar al catálogo</span>
          <span className="sm:hidden">Catálogo</span>
        </div>
      </Link>

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
