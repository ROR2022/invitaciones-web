"use client"

import { useState } from "react"
import { CatalogGrid } from "@/components/catalog/CatalogGrid"
import type { CatalogProduct } from "@/components/catalog/data/catalog-data"

export default function CatalogClient() {
  // Estado y manejadores de eventos para el catálogo que necesitan interactividad
  const [selectedProduct, setSelectedProduct] = useState<CatalogProduct | null>(null)

  const handleContactClick = (product: CatalogProduct) => {
    setSelectedProduct(product)
    // Aquí podrías abrir un modal de contacto o realizar otra acción
    console.log("Contactando para:", product.name)
  }

  return (
    <CatalogGrid 
      onContactClick={handleContactClick}
      initialCategory="all"
      initialView="grid"
    />
  )
}
