"use client"
import React from 'react'
import { dataBodaExpress } from './dataBodaExpress'
import { MessageCircle, Check } from 'lucide-react'

// este componente lo unico que hace es mostrar un boton que confirma la asistencia a la boda

const Confirmation = () => {

    const handleConfirm = () => {
        const confirmationNumber = dataBodaExpress.confirmationNumber;
        // aqui se crea el mensaje
        const message = `¡Gracias por confirmar tu asistencia a la boda de ${dataBodaExpress.bride} y ${dataBodaExpress.groom}!
        Detalles de la boda:
        Fecha: ${dataBodaExpress.date}
        Hora: ${dataBodaExpress.ceremonyTime}
        Ubicación: ${dataBodaExpress.locationCeremony}`;
        // se envia el mensaje via WhatsApp
        const whatsappUrl = `https://wa.me/${confirmationNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }

  return (
    <div className="space-y-4">
      <div className="text-center mb-4">
        <p className="text-white/90 text-sm">
          Por favor confirma tu asistencia
        </p>
      </div>
      
      <button 
        onClick={handleConfirm}
        className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
      >
        <MessageCircle className="w-5 h-5" />
        Confirmar Asistencia por WhatsApp
        <Check className="w-5 h-5" />
      </button>
      
      <p className="text-white/70 text-xs text-center">
        Se abrirá WhatsApp con un mensaje pre-escrito
      </p>
    </div>
  )
}

export default Confirmation