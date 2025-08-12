"use client"

import { useState } from "react"
import { CatalogGrid } from "@/components/catalog/CatalogGrid"
import { ContactModal } from "@/components/landing/ContactModal"

export default function CatalogClient() {
  // Estado y manejadores de eventos para el catálogo que necesitan interactividad
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const handleContactClick = () => {
    setIsContactModalOpen(true)
  }

  const handleContactModalClose = () => {
    setIsContactModalOpen(false)
  }

  return (
    <>
      <CatalogGrid 
        onContactClick={handleContactClick}
        initialCategory="all"
        initialView="grid"
      />
      
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={handleContactModalClose}
      />
    </>
  )
}
