"use client"

import { useState, useEffect, useMemo } from "react"
import { CatalogCard } from "./CatalogCard"
import { CatalogList } from "./CatalogList"
import { CatalogFilters } from "./CatalogFilters"
import { catalogProducts, getProductsByCategory } from "./data/catalog-data"
import type { CatalogProduct } from "./data/catalog-data"

interface CatalogGridProps {
  onContactClick: (product: CatalogProduct) => void
  initialCategory?: string
  initialView?: 'grid' | 'list'
  className?: string
}

export function CatalogGrid({ 
  onContactClick, 
  initialCategory = 'all',
  initialView = 'grid',
  className = "" 
}: CatalogGridProps) {
  // Estados principales
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>(initialView)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Seguridad: resetear isTransitioning si se queda colgado
  useEffect(() => {
    if (isTransitioning) {
      const safetyTimeout = setTimeout(() => {
        setIsTransitioning(false)
      }, 1000) // Máximo 1 segundo de transición
      
      return () => clearTimeout(safetyTimeout)
    }
  }, [isTransitioning])

  // Productos filtrados con memoización para performance
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') {
      return catalogProducts
    }
    return getProductsByCategory(selectedCategory)
  }, [selectedCategory])

  // Manejar cambio de categoría con animación
  const handleCategoryChange = (categoryId: string) => {
    if (categoryId === selectedCategory) return
    
    // Simplificado para móviles - cambio inmediato
    setSelectedCategory(categoryId)
  }

  // Manejar cambio de vista con animación
  const handleViewModeChange = (mode: 'grid' | 'list') => {
    if (mode === viewMode) return
    
    // Simplificado para móviles - cambio inmediato
    setViewMode(mode)
  }

  // Effect para scroll suave cuando cambia la categoría
  useEffect(() => {
    if (selectedCategory !== initialCategory) {
      // Scroll suave hacia el grid después del cambio
      setTimeout(() => {
        const gridElement = document.getElementById('catalog-grid')
        if (gridElement) {
          gridElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          })
        }
      }, 300)
    }
  }, [selectedCategory, initialCategory])

  // Renderizar el grid de productos
  const renderProductGrid = () => {
    if (isTransitioning) {
      return (
        <div className="flex items-center justify-center py-16">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4" />
            <p className="text-gray-600">Cargando productos...</p>
          </div>
        </div>
      )
    }

    if (filteredProducts.length === 0) {
      return (
        <div className="text-center py-16">
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No hay productos en esta categoría
            </h3>
            <p className="text-gray-600 mb-4">
              Prueba seleccionando una categoría diferente o ve todos los productos disponibles.
            </p>
            <button
              onClick={() => handleCategoryChange('all')}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Ver todos los productos →
            </button>
          </div>
        </div>
      )
    }

    // Renderizar según el modo de vista
    if (viewMode === 'list') {
      return (
        <div className="animate-fade-in">
          <CatalogList 
            products={filteredProducts}
            onContactClick={onContactClick}
          />
        </div>
      )
    }

    // Grid view (default)
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
        {filteredProducts.map((product) => (
          <CatalogCard
            key={product.id}
            product={product}
            onContactClick={onContactClick}
            className="h-full" // Para mantener altura uniforme
          />
        ))}
      </div>
    )
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Filtros */}
      <CatalogFilters
        selectedCategory={selectedCategory}
        viewMode={viewMode}
        onCategoryChange={handleCategoryChange}
        onViewModeChange={handleViewModeChange}
        productsCount={filteredProducts.length}
      />

      {/* Grid de productos */}
      <div id="catalog-grid" className="min-h-[400px]">
        {renderProductGrid()}
      </div>

      {/* Información adicional del catálogo */}
      {filteredProducts.length > 0 && !isTransitioning && (
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="text-center space-y-3">
            <p className="text-sm text-gray-600">
              Mostrando <span className="font-medium">{filteredProducts.length}</span> {filteredProducts.length === 1 ? 'producto' : 'productos'}
              {selectedCategory !== 'all' && (
                <span> en la categoría <span className="font-medium capitalize">{selectedCategory}</span></span>
              )}
            </p>
            
            {/* Estadísticas rápidas */}
            <div className="flex justify-center gap-6 text-xs text-gray-500">
              <span>
                <span className="font-medium">{filteredProducts.filter(p => p.packageType === 'basico').length}</span> Básicos
              </span>
              <span>
                <span className="font-medium">{filteredProducts.filter(p => p.packageType === 'premium').length}</span> Premium
              </span>
              <span>
                <span className="font-medium">{filteredProducts.filter(p => p.packageType === 'vip').length}</span> VIP
              </span>
              <span>
                <span className="font-medium">{filteredProducts.filter(p => p.popular).length}</span> Populares
              </span>
            </div>

            {/* Call to action */}
            {selectedCategory === 'all' && (
              <div className="pt-3">
                <p className="text-sm text-gray-700">
                  ¿No encuentras lo que buscas? 
                  <button 
                    onClick={() => onContactClick(filteredProducts[0])}
                    className="ml-1 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Contáctanos para una propuesta personalizada
                  </button>
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

// Hook personalizado para manejar el estado del catálogo (opcional, para uso externo)
export function useCatalogState(initialCategory = 'all', initialView: 'grid' | 'list' = 'grid') {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>(initialView)

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') {
      return catalogProducts
    }
    return getProductsByCategory(selectedCategory)
  }, [selectedCategory])

  return {
    selectedCategory,
    setSelectedCategory,
    viewMode,
    setViewMode,
    filteredProducts,
    productsCount: filteredProducts.length
  }
}