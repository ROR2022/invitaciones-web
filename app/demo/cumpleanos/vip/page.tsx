"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check, Crown, Sparkles } from 'lucide-react'
import { VipHero } from '@/components/demo/cumpleanos/vip/VipHero'
import { VipInfo } from '@/components/demo/cumpleanos/vip/VipInfo'
import { VipTimeline } from '@/components/demo/cumpleanos/vip/VipTimeline'
import { VipGallery } from '@/components/demo/cumpleanos/vip/VipGallery'
import { VipMusicPlayer } from '@/components/demo/cumpleanos/vip/VipMusicPlayer'
import { VipGuestList } from '@/components/demo/cumpleanos/vip/VipGuestList'
import { vipDemoData } from '@/components/demo/cumpleanos/vip/data/vip-demo-data'
import { useState } from 'react'
import { ContactModal } from '@/components/landing/ContactModal'

export default function VipCumpleanosDemoPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const handleModalContact = () => {
    setIsContactModalOpen(true)
  }

  return (
    <main className="min-h-screen">
      {/* Hero de princesas */}
      <VipHero />
      
      {/* Información del evento */}
      <VipInfo />
      
      {/* Galería VIP */}
      <VipGallery />
      
      {/* Lista de invitados VIP */}
      <VipGuestList />
      
      {/* Reproductor de música VIP */}
      <VipMusicPlayer />
      
      {/* Cronograma del evento */}
      <VipTimeline />
      
      {/* Call to Action final VIP */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 relative overflow-hidden">
        {/* Efectos mágicos de fondo */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-yellow-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-pink-300/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-purple-300/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-6xl mx-auto text-white">
            <h2 className="text-5xl md:text-6xl font-black mb-8">
              ¿Te gusta este diseño real? 👸
            </h2>
            <p className="text-2xl md:text-3xl mb-10 text-pink-100">
              La experiencia más mágica para una celebración de ensueño
            </p>
            
            {/* Características incluidas VIP */}
            <div className="grid lg:grid-cols-3 gap-8 mb-12 text-left">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 border-white/20">
                <h3 className="font-black text-2xl mb-6 flex items-center text-purple-200">
                  <Check className="w-7 h-7 mr-3 text-green-300" />
                  ✅ Todo del Premium + VIP:
                </h3>
                <ul className="space-y-3 text-purple-100">
                  {vipDemoData.demo.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-3 h-3 bg-purple-300 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 border-white/20">
                <h3 className="font-black text-2xl mb-6 flex items-center text-pink-200">
                  <Crown className="w-7 h-7 mr-3 text-yellow-300" />
                  👸 Personalización Real:
                </h3>
                <ul className="space-y-3 text-pink-100">
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-yellow-300 rounded-full mr-3"></span>
                    Cambiar nombre de la princesa
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-pink-300 rounded-full mr-3"></span>
                    Personalizar reino encantado
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-purple-300 rounded-full mr-3"></span>
                    Adaptar ceremonias reales
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-rose-300 rounded-full mr-3"></span>
                    Agregar invitados especiales
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-blue-300 rounded-full mr-3"></span>
                    Música orquestal personalizada
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 border-white/20">
                <h3 className="font-black text-2xl mb-6 flex items-center text-rose-200">
                  <Sparkles className="w-7 h-7 mr-3 text-yellow-300" />
                  ✨ Exclusivo VIP:
                </h3>
                <ul className="space-y-3 text-rose-100">
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-yellow-300 rounded-full mr-3"></span>
                    Lista de invitados especiales
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-pink-300 rounded-full mr-3"></span>
                    4 tracks de música orquestal
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-purple-300 rounded-full mr-3"></span>
                    Efectos mágicos avanzados
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-rose-300 rounded-full mr-3"></span>
                    Soporte prioritario 24/7
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-blue-300 rounded-full mr-3"></span>
                    Cronograma extendido real
                  </li>
                </ul>
              </div>
            </div>

            {/* Comparación de paquetes */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-10 border border-white/10">
              <h3 className="font-black text-2xl mb-6 text-yellow-300">
                👑 ¿Por qué elegir VIP?
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="text-purple-200">
                  <span className="font-bold text-lg">🆚 vs Básico:</span>
                  <p className="text-sm mt-1">+Galería, +Música, +Lista VIP, +Efectos mágicos</p>
                </div>
                <div className="text-pink-200">
                  <span className="font-bold text-lg">🆚 vs Premium:</span>
                  <p className="text-sm mt-1">+Lista de invitados, +Track extra, +Soporte 24/7</p>
                </div>
                <div className="text-rose-200">
                  <span className="font-bold text-lg">👸 Solo VIP:</span>
                  <p className="text-sm mt-1">Experiencia completa del reino encantado</p>
                </div>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                onClick={handleModalContact}
                size="lg"
                className="bg-white text-purple-600 hover:bg-pink-50 font-black px-10 py-5 text-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Contratar Paquete VIP - $699
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              
              <Link href="/catalog">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-5 text-lg"
                >
                  Ver Otros Diseños
                </Button>
              </Link>
            </div>

            {/* Información adicional VIP */}
            <div className="mt-10 text-pink-100">
              <p className="text-lg">💬 WhatsApp: +52 777 793 7484 • ⏱️ Entrega en 24-48 horas • 👸 Soporte VIP incluido</p>
              <p className="text-sm mt-2 text-purple-200">🎵 4 tracks de música • 📸 Galería organizada • 👥 Lista de invitados • ✨ Efectos mágicos</p>
            </div>

            {/* Elementos decorativos */}
            <div className="mt-8 flex justify-center space-x-4 text-4xl">
              ✨ 👑 💎 🏰 🧚‍♀️ 🦄 🌟 💫
            </div>
          </div>
        </div>

        {/* Efectos mágicos flotantes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/6 left-1/5 w-3 h-3 bg-pink-300 rounded-full animate-ping opacity-60"></div>
          <div className="absolute top-1/4 right-1/5 w-2 h-2 bg-purple-300 rounded-full animate-ping delay-700 opacity-70"></div>
          <div className="absolute bottom-1/3 left-1/2 w-2.5 h-2.5 bg-rose-300 rounded-full animate-ping delay-300 opacity-50"></div>
        </div>
      </section>

      {/* Modal de contacto */}
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </main>
  )
}
