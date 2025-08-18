"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Check, Star } from 'lucide-react'
import { useState } from 'react'
import { ContactModal } from '@/components/landing/ContactModal'
import { 
  CatHero, 
  CatInfo, 
  CatMusicPlayer, 
  CatGallery, 
  CatMemories, 
  CatPersonality, 
  CatRSVP, 
  CatGiftRegistry, 
  CatThankYou
} from '@/components/demo/mascota/gato/premium'
import { MusicProvider } from '@/context/music-context'

export default function PremiumCatBirthdayDemoPage() {
  // Estado para controlar el modal de contacto
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const handleModalContact = () => {
    setIsContactModalOpen(true)
  }

  return (
    <MusicProvider>
      <main className="min-h-screen">
        {/* Botón para volver al catálogo */}
        <div className="container mx-auto px-4 py-4">
          <Link href="/catalog">
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al catálogo
            </Button>
          </Link>
        </div>
        
        {/* Hero con información principal */}
        <CatHero />
        
        {/* Reproductor de música */}
        <CatMusicPlayer />
        
        {/* Información del evento y mapa */}
        <CatInfo />
        
        {/* Galería de fotos */}
        <CatGallery />
        
        {/* Línea de tiempo con recuerdos */}
        <CatMemories />
        
        {/* Personalidad del gato */}
        <CatPersonality />
        
        {/* Formulario de RSVP */}
        <CatRSVP />
        
        {/* Registro de regalos */}
        <CatGiftRegistry />
        
        {/* Sección de agradecimiento */}
        <CatThankYou />
        
        {/* CTA Section - Llamada a la acción */}
        <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Te gustó este demo premium?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Personaliza tu propia invitación para el cumpleaños de tu mascota con todas estas características premium y más.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button 
                onClick={handleModalContact}
                className="text-lg py-6 px-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              >
                Contactar ahora
              </Button>
              
              <Link href="/pricing">
                <Button 
                  variant="outline" 
                  className="text-lg py-6 px-8 border-purple-300 text-purple-700 hover:bg-purple-50"
                >
                  Ver planes y precios
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-purple-800 mb-4 flex items-center justify-center">
                <Check className="w-5 h-5 text-green-500 mr-2" /> 
                Características incluidas en el paquete premium
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-left">
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-purple-500 mr-2" />
                  <span className="text-gray-700">Hero interactivo</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-purple-500 mr-2" />
                  <span className="text-gray-700">Reproductor de música</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-purple-500 mr-2" />
                  <span className="text-gray-700">Mapa interactivo</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-purple-500 mr-2" />
                  <span className="text-gray-700">Galería categorizada</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-purple-500 mr-2" />
                  <span className="text-gray-700">Línea de tiempo</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-purple-500 mr-2" />
                  <span className="text-gray-700">Perfil de personalidad</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-purple-500 mr-2" />
                  <span className="text-gray-700">RSVP interactivo</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-purple-500 mr-2" />
                  <span className="text-gray-700">Registro de regalos</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-purple-500 mr-2" />
                  <span className="text-gray-700">Diseño responsive</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">Precio del paquete premium:</span>
                  <span className="text-2xl font-bold text-purple-700">$499 MXN</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Modal de contacto */}
        <ContactModal 
          isOpen={isContactModalOpen} 
          onClose={() => setIsContactModalOpen(false)} 
        />
      </main>
    </MusicProvider>
  )
}
