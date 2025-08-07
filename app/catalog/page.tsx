"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Phone, Mail } from "lucide-react"
import { CatalogGrid } from "@/components/catalog/CatalogGrid"
import { ContactModal } from "@/components/landing/ContactModal"


// Página del catálogo con SEO optimizado
export default function CatalogPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  // Manejar clic en contacto desde cualquier producto
  const handleContactClick = () => {
    setIsContactModalOpen(true)
  }

  // Cerrar modal de contacto
  const handleContactModalClose = () => {
    setIsContactModalOpen(false)
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header del Catálogo */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          {/* Navegación */}
          <div className="flex items-center gap-4 mb-6">
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al inicio
              </Button>
            </Link>
          </div>

          {/* Título principal */}
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Catálogo de Invitaciones Digitales
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              Descubre nuestros diseños únicos para bodas, XV años y eventos especiales. 
              Desde paquetes básicos hasta experiencias VIP completas.
            </p>
            
            {/* Estadísticas rápidas */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                <span>Paquetes desde <strong>$299</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-purple-400 rounded-full"></span>
                <span><strong>Demos interactivos</strong> disponibles</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                <span><strong>Contacto directo</strong> via WhatsApp</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal del catálogo */}
      <div className="container mx-auto px-4 py-8">
        <CatalogGrid 
          onContactClick={handleContactClick}
          initialCategory="all"
          initialView="grid"
        />
      </div>

      {/* Footer informativo */}
      <div className="bg-white border-t border-gray-200 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Información de contacto */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">¿Necesitas ayuda?</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Phone className="w-4 h-4" />
                  <span>WhatsApp: +52 777 793 7484</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Mail className="w-4 h-4" />
                  <span>Respuesta en menos de 2 horas</span>
                </div>
              </div>
            </div>

            {/* Proceso de trabajo */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">¿Cómo funciona?</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <div>1. Explora nuestro catálogo</div>
                <div>2. Ve los demos interactivos</div>
                <div>3. Contacta por WhatsApp</div>
                <div>4. Recibe tu invitación personalizada</div>
              </div>
            </div>

            {/* Garantías */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Nuestras garantías</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <div>✅ Diseños 100% personalizables</div>
                <div>✅ Entrega en 24-48 horas</div>
                <div>✅ Soporte técnico incluido</div>
                <div>✅ Revisiones sin costo adicional</div>
              </div>
            </div>
          </div>

          {/* Call to action final */}
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              ¿No encuentras lo que buscas?
            </h3>
            <p className="text-gray-600 mb-4">
              Creamos diseños completamente personalizados según tus necesidades específicas
            </p>
            <Button 
              onClick={() => handleContactClick()}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
            >
              Solicitar Diseño Personalizado
            </Button>
          </div>
        </div>
      </div>

      {/* Modal de contacto */}
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={handleContactModalClose}
      />
    </main>
  )
}