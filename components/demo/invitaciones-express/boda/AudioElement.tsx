"use client";

import React from 'react'
import { dataBodaExpress } from './dataBodaExpress';
import { Music } from 'lucide-react';

const AudioElement = () => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
      <div className="flex items-center gap-3 mb-3">
        <Music className="w-5 h-5 text-purple-300" />
        <h3 className="text-purple-100 font-semibold">Música de la Boda</h3>
      </div>
      <audio 
        controls 
        className="w-full h-10 rounded-lg bg-white/20 backdrop-blur-sm"
        style={{
          filter: 'invert(1) hue-rotate(180deg)',
        }}
      >
        <source src={dataBodaExpress.music} type="audio/mp3" />
        Tu navegador no soporta el elemento de audio.
      </audio>
    </div>
  )
}

export default AudioElement