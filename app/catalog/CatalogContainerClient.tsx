"use client"

import { useState } from "react"
import { CatalogGrid } from "@/components/catalog/CatalogGrid"
import { ContactModal } from "@/components/landing/ContactModal"
import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"
import Link from "next/link"

/**
 * Componente cliente que contiene la parte interactiva del catálogo
 * Separado como client component para permitir server rendering de la mayor parte de la página
 */
export function CatalogContainerClient() {
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
    <div>
      {/* CTA de contacto directo */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <Button 
          onClick={handleContactClick}
          size="lg"
          className="bg-blue-600 hover:bg-blue-700"
        >
          <Phone className="w-4 h-4 mr-2" />
          Solicitar información
        </Button>
        <Link href="mailto:contacto@invitacionesinteractivas.mx">
          <Button 
            variant="outline" 
            size="lg"
          >
            <Mail className="w-4 h-4 mr-2" />
            contacto@invitacionesinteractivas.mx
          </Button>
        </Link>
      </div>

      {/* Grid del Catálogo con lazy loading y paginación optimizada */}
      <CatalogGrid 
        onContactClick={handleContactClick} 
        initialCategory="all"
        initialView="grid"
      />
      
      {/* Modal de contacto */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={handleContactModalClose}
      />
    </div>
  )
}
