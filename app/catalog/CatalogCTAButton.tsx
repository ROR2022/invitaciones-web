"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ContactModal } from "@/components/landing/ContactModal"

export function CatalogCTAButton() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const handleContactClick = () => {
    setIsContactModalOpen(true)
  }

  return (
    <>
      <Button 
        onClick={handleContactClick}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
      >
        Solicitar Diseño Personalizado
      </Button>
      
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  )
}
