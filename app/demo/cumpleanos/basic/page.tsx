"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check, Star } from 'lucide-react'
import { BasicHero } from '@/components/demo/cumpleanos/basic/BasicHero'
import { BasicInfo } from '@/components/demo/cumpleanos/basic/BasicInfo'
import { BasicTimeline } from '@/components/demo/cumpleanos/basic/BasicTimeline'
import { basicDemoData } from '@/components/demo/cumpleanos/basic/data/basic-demo-data'
import { useState } from 'react'
import { ContactModal } from '@/components/landing/ContactModal'

export default function BasicCumpleanosDemoPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const handleModalContact = () => {
    setIsContactModalOpen(true)
  }

  return (
    <main className="min-h-screen">
      {/* Hero del vaquero */}
      <BasicHero />
      
      {/* Información del evento */}
      <BasicInfo />
      
      {/* Cronograma del evento */}
      <BasicTimeline />
      
      {/* Call to Action final */}
      <section className="py-16 bg-gradient-to-br from-amber-500 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Te gusta este diseño vaquero? 🤠
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-amber-100">
              Perfecto para celebraciones temáticas del Salvaje Oeste
            </p>
            
            {/* Características incluidas */}
            <div className="grid md:grid-cols-2 gap-6 mb-10 text-left max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center">
                  <Check className="w-5 h-5 mr-2 text-green-300" />
                  ✅ Incluido en el Paquete Básico:
                </h3>
                <ul className="space-y-2 text-amber-100">
                  {basicDemoData.demo.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-amber-300 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center">
                  <Star className="w-5 h-5 mr-2 text-yellow-300" />
                  🤠 Personalización Vaquera:
                </h3>
                <ul className="space-y-2 text-amber-100">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></span>
                    Cambiar nombres y fechas
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></span>
                    Personalizar ubicación del rancho
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></span>
                    Ajustar actividades del evento
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></span>
                    Adaptar código de vestimenta
                  </li>
                </ul>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={handleModalContact}
                size="lg"
                className="bg-white text-orange-600 hover:bg-amber-50 font-bold px-8 py-4 text-lg"
              >
                Contratar Paquete Básico - $299
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Link href="/catalog">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10 font-medium px-6 py-4"
                >
                  Ver Otros Diseños
                </Button>
              </Link>
            </div>

            {/* Información adicional */}
            <div className="mt-8 text-amber-100 text-sm">
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
