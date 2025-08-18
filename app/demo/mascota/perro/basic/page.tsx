"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check, Star, ArrowLeft } from 'lucide-react'
import { DogHero, DogInfo, DogRSVP, DogCountdown, DogGiftRegistry } from '@/components/demo/mascota/perro/basic'
import { dogBirthdayDemoData } from '@/components/demo/mascota/perro/basic/data/basic-demo-data'
import { useState } from 'react'
import { ContactModal } from '@/components/landing/ContactModal'

export default function BasicDogBirthdayDemoPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const handleModalContact = () => {
    setIsContactModalOpen(true)
  }

  return (
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
      
      {/* Sección Hero */}
      <DogHero />
      
      {/* Información del evento */}
      <DogInfo />

      {/* Cuenta regresiva */}
      <DogCountdown />
      
      {/* Cronograma de actividades */}
      {/* <DogActivities /> */}
      
      {/* Opciones de regalo */}
      <DogGiftRegistry />
      
      {/* Confirmación de asistencia */}
      <DogRSVP />
      
      {/* Call to Action final */}
      <section className="py-16 bg-gradient-to-br from-blue-500 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Te gusta este diseño para tu mascota? 🐾
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Perfecto para celebraciones de cumpleaños de tus amigos peludos
            </p>
            
            {/* Características incluidas */}
            <div className="grid md:grid-cols-2 gap-6 mb-10 text-left max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center">
                  <Check className="w-5 h-5 mr-2 text-green-300" />
                  ✅ Incluido en el Paquete Básico:
                </h3>
                <ul className="space-y-2 text-blue-100">
                  {dogBirthdayDemoData.demo.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-300 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center">
                  <Star className="w-5 h-5 mr-2 text-yellow-300" />
                  🐾 Personalización para mascotas:
                </h3>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></span>
                    Cambiar foto, nombre y edad de la mascota
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></span>
                    Personalizar ubicación del evento
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></span>
                    Ajustar actividades y cronograma
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></span>
                    Definir sugerencias de regalos
                  </li>
                </ul>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={handleModalContact}
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-4 text-lg"
              >
                Contratar Paquete Básico - ${dogBirthdayDemoData.demo.price}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Link href="/catalog">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/20 backdrop-blur-sm border-white border-2 text-white hover:bg-white/30 font-medium px-6 py-4 transition-all shadow-md hover:shadow-lg"
                >
                  Ver Otros Diseños
                </Button>
              </Link>
            </div>

            {/* Información adicional */}
            <div className="mt-8 text-blue-100 text-sm">
              <p>💬 WhatsApp: +52 777 793 7484 • ⏱️ Entrega en 24-48 horas</p>
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
  )
}
