"use client"

import { useState } from "react"
import { CatalogGrid } from "@/components/catalog/CatalogGrid"
import { ContactModal } from "@/components/landing/ContactModal"
import type { CatalogProduct } from "@/components/catalog/data/catalog-data"

export default function CatalogClient() {
  // Estado y manejadores de eventos para el catálogo que necesitan interactividad
  const [selectedProduct, setSelectedProduct] = useState<CatalogProduct | null>(null)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const handleContactClick = (product: CatalogProduct) => {
    setSelectedProduct(product)
    setIsContactModalOpen(true)
  }

  const handleContactModalClose = () => {
    setIsContactModalOpen(false)
    setSelectedProduct(null)
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
