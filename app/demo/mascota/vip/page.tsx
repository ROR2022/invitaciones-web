"use client"

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ContactModal } from '@/components/landing/ContactModal'

// Importamos componentes para el sistema de música
import { MusicProvider } from '@/components/demo/mascota/vip/context/MusicProvider'
import { FloatingMusicPlayer } from '@/components/demo/mascota/vip/FloatingMusicPlayer'
import { AudioElement } from '@/components/demo/mascota/vip/AudioElement'

// Importamos los componentes exclusivos VIP
import { VipPetHero } from '@/components/demo/mascota/vip/VipPetHero'
import { VipPetAccommodation } from '@/components/demo/mascota/vip/VipPetAccommodation'
import { VipPetItinerary } from '@/components/demo/mascota/vip/VipPetItinerary'
import { VipPetCareTakers } from '@/components/demo/mascota/vip/VipPetCareTakers'

// Importamos los componentes premium mejorados
import { VipPetPlaylist } from '@/components/demo/mascota/vip/VipPetPlaylist'
import { VipPetGallery } from '@/components/demo/mascota/vip/VipPetGallery'

// Importamos componentes básicos adaptados
import { PetInvitation } from '@/components/demo/mascota/vip/PetInvitation'
import { PetCountdown } from '@/components/demo/mascota/vip/PetCountdown'
import { PetEventDetails } from '@/components/demo/mascota/vip/PetEventDetails'
import { PetAttendance } from '@/components/demo/mascota/vip/PetAttendance'
import { PetGiftOptions } from '@/components/demo/mascota/vip/PetGiftOptions'
import { PetThankYou } from '@/components/demo/mascota/vip/PetThankYou'

// Importamos los datos del VIP
import { vipMascotaData } from '@/components/demo/mascota/vip/data/vip-mascota-data'
import { ArrowLeft } from 'lucide-react'

export default function MascotaVipPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <MusicProvider>
      <main className="min-h-screen">
        {/* Botón de navegación de regreso */}
      <Link 
        href="/catalog"
        className="fixed top-20 left-4 z-40 bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full shadow-lg hover:bg-white transition-all duration-300 border border-gray-200"
      >
        <div className="flex items-center gap-2 text-sm">
          <ArrowLeft size={16} />
          <span className="hidden sm:inline">Regresar a catalogo</span>
          <span className="sm:hidden">Catalogo</span>
        </div>
      </Link>
      
        {/* Componente de audio invisible */}
        <AudioElement />
        
        {/* Reproductor flotante */}
        <FloatingMusicPlayer />
      {/* Hero principal con cuenta regresiva */}
      <VipPetHero />
      
      {/* Componentes exclusivos VIP */}
      <VipPetAccommodation />
      <VipPetItinerary />
      <VipPetCareTakers />
      
      {/* Componentes premium mejorados */}
      {/* <VipPetPlaylist /> */}
      <VipPetGallery />
      
      {/* Componentes básicos adaptados */}
      <PetInvitation />
      <PetCountdown />
      <PetEventDetails />
      <PetAttendance />
      <PetGiftOptions />
      <PetThankYou />
      
      {/* CTA final */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-xl">
            <div className="flex items-center gap-2">
              <span>👑</span>
              <span>Paquete VIP Exclusivo</span>
              <span>👑</span>
            </div>
          </div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-purple-800 mb-6"
          >
            {vipMascotaData.cta.title}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-purple-700 mb-8 leading-relaxed"
          >
            {vipMascotaData.cta.subtitle}
          </motion.p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">Básico</h3>
              <div className="text-3xl font-bold text-purple-600 mb-4">$299</div>
              <ul className="text-left space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Invitación digital</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Cuenta regresiva</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Confirmación asistencia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span className="text-gray-400">Funciones premium</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-fuchsia-300 transform md:-translate-y-4"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">Premium</h3>
              <div className="text-3xl font-bold text-fuchsia-600 mb-4">$499</div>
              <ul className="text-left space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Todo lo básico</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Galería mejorada</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Música personalizada</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span className="text-gray-400">Características VIP</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-2xl p-6 shadow-xl border-2 border-purple-500"
            >
              <div className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold mb-3 inline-block">
                MÁS POPULAR
              </div>
              <h3 className="text-xl font-bold text-purple-800 mb-4">VIP</h3>
              <div className="text-3xl font-bold text-purple-700 mb-4">$699</div>
              <ul className="text-left space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Todo lo premium</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Hospedaje para invitados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Itinerario completo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Cuidadores especiales</span>
                </li>
              </ul>
            </motion.div>
          </div>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all"
            onClick={() => setIsContactModalOpen(true)}
          >
            ¡Quiero esta invitación para mi mascota!
          </motion.button>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-6 text-sm text-purple-600"
          >
            * Las invitaciones incluyen hosting por un año y soporte técnico.
          </motion.p>
        </div>
      </section>
      
      {/* Modal de contacto  */}
     <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
      </main>
    </MusicProvider>
  )
}
