"use client"

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function MascotaDemoPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  
  const petDemos = [
    {
      id: "perro",
      title: "Cumpleaños de Perro",
      description: "Celebra el cumpleaños de tu fiel amigo canino con una invitación especial",
      icon: "🐕",
      color: "bg-blue-500",
      link: "/demo/mascota/perro/basic"
    },
    {
      id: "gato",
      title: "Cumpleaños de Gato",
      description: "Próximamente - Celebra el día especial de tu felino favorito",
      icon: "🐈",
      color: "bg-purple-500",
      link: "#",
      comingSoon: true
    }
  ]
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Botón para volver al catálogo */}
      <div className="container mx-auto px-4 py-4">
        <Link href="/catalog">
          <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al catálogo
          </Button>
        </Link>
      </div>
      
      {/* Encabezado */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-800">
            Invitaciones para Mascotas
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Celebra los momentos especiales de tus amigos peludos con invitaciones digitales interactivas
          </p>
        </div>
      </section>
      
      {/* Tarjetas de demos */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {petDemos.map((demo) => (
              <div 
                key={demo.id}
                className="relative"
                onMouseEnter={() => setHoveredCard(demo.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Card className={`
                  overflow-hidden transition-all duration-300 border-2
                  ${hoveredCard === demo.id ? 'shadow-lg scale-105 border-blue-300' : 'shadow border-gray-200'} 
                  ${demo.comingSoon ? 'opacity-70' : ''}
                `}>
                  <div className={`h-3 w-full ${demo.color}`}></div>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <span className="text-3xl">{demo.icon}</span>
                      {demo.title}
                      {demo.comingSoon && (
                        <span className="ml-2 px-2 py-1 text-xs font-medium bg-gray-200 text-gray-600 rounded">
                          Próximamente
                        </span>
                      )}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {demo.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
                      <span className="text-7xl">{demo.icon}</span>
                    </div>
                  </CardContent>
                  
                  <CardFooter>
                    {demo.comingSoon ? (
                      <Button disabled className="w-full">
                        Próximamente
                      </Button>
                    ) : (
                      <Link href={demo.link} className="w-full">
                        <Button className={`w-full ${demo.color.replace('bg-', 'bg-')}`}>
                          Ver Demo
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    )}
                  </CardFooter>
                </Card>
                
                {demo.comingSoon && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white bg-opacity-70 px-4 py-2 rounded-lg text-gray-800 font-semibold transform -rotate-12">
                      Próximamente
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
