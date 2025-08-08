import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Metadata } from "next"
import { Suspense } from "react"
import CatalogClient from "./CatalogClient"
import { CatalogCTAButton } from "./CatalogCTAButton"

// Metadatos para SEO
export const metadata: Metadata = {
  title: "Catálogo de Invitaciones Digitales | Invitaciones Interactivas",
  description: "Explora nuestro catálogo de invitaciones digitales interactivas para bodas, XV años y eventos especiales. Desde paquetes básicos hasta experiencias VIP personalizadas.",
  keywords: "invitaciones digitales, invitaciones interactivas, bodas, XV años, bautizos, eventos",
}

// Componente de página como Server Component
export default function CatalogPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header del Catálogo - Server Component */}
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

          {/* Título principal - Renderizado en servidor */}
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Catálogo de Invitaciones Digitales
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              Descubre nuestros diseños únicos para bodas, XV años y eventos especiales. 
              Desde paquetes básicos hasta experiencias VIP completas.
            </p>
            
            {/* Estadísticas rápidas - Renderizado en servidor */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">Diseños diferentes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">1,200+</div>
                <div className="text-sm text-gray-600">Clientes satisfechos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">3</div>
                <div className="text-sm text-gray-600">Paquetes disponibles</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contenido principal - Catálogo */}
      <div className="container mx-auto px-4 py-12">
        {/* Usar Suspense para mejorar la UX durante la carga */}
        <Suspense fallback={
          <div className="w-full py-20 flex justify-center items-center">
            <div className="flex items-center space-x-4">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600"></div>
              <span className="text-lg text-gray-700">Cargando catálogo...</span>
            </div>
          </div>
        }>
          {/* Usamos el componente cliente para manejar la interactividad */}
          <CatalogClient />
        </Suspense>
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
                  <span>WhatsApp: +52 777 793 7484</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
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
            <CatalogCTAButton />
          </div>
        </div>
      </div>
    </main>
  )
}