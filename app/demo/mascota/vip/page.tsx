"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'

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

export default function MascotaVipPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <MusicProvider>
      <main className="min-h-screen">
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
      <VipPetPlaylist />
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
      
      {/* Modal de contacto (simulado) */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-6 max-w-md w-full"
          >
            <h3 className="text-2xl font-bold text-purple-800 mb-4">¡Contáctanos!</h3>
            <p className="text-gray-600 mb-6">
              Completa el formulario y nos pondremos en contacto contigo para crear la invitación perfecta para tu celebración de mascotas.
            </p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                <input 
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                <textarea 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 h-24"
                  placeholder="Cuéntanos sobre tu evento..."
                ></textarea>
              </div>
              <div className="flex justify-between">
                <button 
                  className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                  onClick={() => setIsContactModalOpen(false)}
                >
                  Cancelar
                </button>
                <button 
                  className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-md transition-all"
                >
                  Enviar
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
      </main>
    </MusicProvider>
  )
}
