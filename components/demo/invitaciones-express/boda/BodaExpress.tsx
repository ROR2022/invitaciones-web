"use client"
import React from 'react'
import { dataBodaExpress } from './dataBodaExpress'
import Confirmation from './Confirmation'
import AudioElement from './AudioElement'
import CorazonesFlotantes from './CorazonesFlotantes'
import { Calendar, Clock, MapPin, Heart, Music } from 'lucide-react'

const BodaExpress = () => {
  return (
    <div
      className="z-0 relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-4"
      style={{
        backgroundImage: `url(${dataBodaExpress.backgroundImage})`,
      }}
    >
      {/* Corazones flotantes decorativos */}
      <CorazonesFlotantes />
      
      {/* Overlay para mejorar legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/50 to-black/30 z-1"></div>
      
      {/* Contenido principal */}
      <div className="relative z-10 max-w-2xl mx-auto text-center text-white">
        
        {/* Header con título y descripción */}
        <div className="mb-8">
          <div className="flex justify-center mb-4 animate-fade-in-scale">
            <Heart className="w-8 h-8 text-pink-300 fill-current" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif mb-2 text-shadow-xl animate-slide-up-fade animation-delay-200">
            {dataBodaExpress.title}
          </h1>
          <p className="text-lg md:text-xl text-pink-100 font-light text-shadow-lg animate-slide-up-fade animation-delay-400">
            {dataBodaExpress.description}
          </p>
        </div>

        {/* Nombres de los novios */}
        <div className="mb-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 animate-slide-up-fade animation-delay-600">
          <div className="flex items-center justify-center gap-4 text-2xl md:text-3xl font-serif">
            <span className="text-blue-200 text-shadow-lg animate-slide-in-left animation-delay-700">{dataBodaExpress.groom}</span>
            <Heart className="w-6 h-6 text-pink-300 fill-current animate-fade-in-scale animation-delay-800" />
            <span className="text-pink-200 text-shadow-lg animate-slide-in-right animation-delay-700">{dataBodaExpress.bride}</span>
          </div>
        </div>

        {/* Información del evento */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          
          {/* Fecha */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 animate-slide-up-fade animation-delay-900">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="w-5 h-5 text-pink-300" />
              <span className="font-semibold text-pink-100">Fecha</span>
            </div>
            <p className="text-white font-medium">{dataBodaExpress.date}</p>
          </div>

          {/* Invitados */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 animate-slide-up-fade animation-delay-1000">
            <div className="flex items-center gap-3 mb-2">
              <Heart className="w-5 h-5 text-pink-300" />
              <span className="font-semibold text-pink-100">Invitados</span>
            </div>
            <p className="text-white font-medium">{dataBodaExpress.guests} personas</p>
          </div>

          {/* Ceremonia */}
          <div 
          onClick={()=>window.open(dataBodaExpress.ubiLinkCeremony, '_blank')}
          style={{cursor:'pointer'}}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 animate-slide-up-fade animation-delay-1200">
            <div className="flex items-center gap-3 mb-2">
              <MapPin className="w-5 h-5 text-blue-300" />
              <span className="font-semibold text-blue-100">Ceremonia</span>
            </div>
            <p className="text-white font-medium">{dataBodaExpress.locationCeremony}</p>
            <div className="flex items-center gap-2 mt-1">
              <Clock className="w-4 h-4 text-blue-200" />
              <span className="text-blue-100 text-sm">{dataBodaExpress.ceremonyTime}</span>
            </div>
          </div>

          {/* Recepción */}
          <div 
          onClick={()=>window.open(dataBodaExpress.ubiLinkReception, '_blank')}
          style={{cursor:'pointer'}}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 animate-slide-up-fade animation-delay-1400">
            <div className="flex items-center gap-3 mb-2">
              <MapPin className="w-5 h-5 text-green-300" />
              <span className="font-semibold text-green-100">Recepción</span>
            </div>
            <p className="text-white font-medium">{dataBodaExpress.locationReception}</p>
            <div className="flex items-center gap-2 mt-1">
              <Clock className="w-4 h-4 text-green-200" />
              <span className="text-green-100 text-sm">{dataBodaExpress.receptionTime}</span>
            </div>
          </div>
        </div>

       

        {/* Audio Element */}
        <div className="mb-6 animate-slide-up-fade animation-delay-1600">
          <AudioElement />
        </div>

        {/* Confirmación */}
        <div className="animate-bounce-in animation-delay-1800">
          <Confirmation />
        </div>

        {/* Decoración inferior */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-pink-300 animate-draw-line animation-delay-2000"></div>
            <Heart className="w-4 h-4 text-pink-300 fill-current animate-fade-in-scale animation-delay-2200" />
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-pink-300 animate-draw-line animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BodaExpress