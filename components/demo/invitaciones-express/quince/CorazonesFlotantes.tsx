"use client"
import React from 'react'
import { Heart } from 'lucide-react'

const CorazonesFlotantes = () => {
  return (
    <div 
    style={{zIndex: 5000}}
    className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Corazón 1 - Rosa suave, tamaño pequeño */}
      <div className="absolute floating-heart-1">
        <Heart 
          className="w-4 h-4 text-pink-300 fill-current" 
          style={{ opacity: 0.15, filter: 'blur(0.5px)' }}
        />
      </div>

      {/* Corazón 2 - Blanco transparente, tamaño mediano */}
      <div className="absolute floating-heart-2">
        <Heart 
          className="w-6 h-6 text-white fill-current heart-pulse" 
          style={{ opacity: 0.12, filter: 'blur(0.3px)' }}
        />
      </div>

      {/* Corazón 3 - Púrpura suave, tamaño pequeño */}
      <div className="absolute floating-heart-3">
        <Heart 
          className="w-3 h-3 text-purple-300 fill-current" 
          style={{ opacity: 0.18, filter: 'blur(0.4px)' }}
        />
      </div>

      {/* Corazón 4 - Rosa claro, tamaño mediano */}
      <div className="absolute floating-heart-4">
        <Heart 
          className="w-5 h-5 text-pink-200 fill-current heart-pulse-slow" 
          style={{ opacity: 0.14, filter: 'blur(0.6px)' }}
        />
      </div>

      {/* Corazón 5 - Azul suave, tamaño pequeño */}
      <div className="absolute floating-heart-5">
        <Heart 
          className="w-4 h-4 text-blue-200 fill-current" 
          style={{ opacity: 0.16, filter: 'blur(0.4px)' }}
        />
      </div>

      {/* Corazón 6 - Rosa intenso, tamaño muy pequeño */}
      <div className="absolute floating-heart-6">
        <Heart 
          className="w-3 h-3 text-pink-400 fill-current" 
          style={{ opacity: 0.13, filter: 'blur(0.3px)' }}
        />
      </div>

      {/* Corazones adicionales para mayor densidad en pantallas grandes */}
      <div className="hidden lg:block">
        {/* Corazón extra 1 */}
        <div className="absolute floating-heart-1" style={{ animationDelay: '8s' }}>
          <Heart 
            className="w-5 h-5 text-white fill-current" 
            style={{ opacity: 0.08, filter: 'blur(0.5px)' }}
          />
        </div>

        {/* Corazón extra 2 */}
        <div className="absolute floating-heart-3" style={{ animationDelay: '16s' }}>
          <Heart 
            className="w-4 h-4 text-purple-200 fill-current" 
            style={{ opacity: 0.11, filter: 'blur(0.4px)' }}
          />
        </div>

        {/* Corazón extra 3 */}
        <div className="absolute floating-heart-5" style={{ animationDelay: '12s' }}>
          <Heart 
            className="w-3 h-3 text-pink-300 fill-current heart-pulse" 
            style={{ opacity: 0.09, filter: 'blur(0.6px)' }}
          />
        </div>
      </div>

      {/* Corazones adicionales para mayor densidad en pantallas grandes */}
      <div className="hidden lg:block">
        {/* Corazón extra 1 */}
        <div className="absolute floating-heart-1" style={{ animationDelay: '8s' }}>
          <Heart 
            className="w-5 h-5 text-white fill-current" 
            style={{ opacity: 0.12, filter: 'blur(0.5px)' }}
          />
        </div>

        {/* Corazón extra 2 */}
        <div className="absolute floating-heart-3" style={{ animationDelay: '16s' }}>
          <Heart 
            className="w-4 h-4 text-purple-200 fill-current" 
            style={{ opacity: 0.18, filter: 'blur(0.4px)' }}
          />
        </div>
      </div>
    </div>
  )
}

export default CorazonesFlotantes