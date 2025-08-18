"use client"

import { useState, useEffect } from 'react'
import { useMusicContext } from '@/context/music-context'
import { catBirthdayPremiumData } from './data/premium-demo-data'
import { Play, Pause, Volume2, VolumeX, Music } from 'lucide-react'

export function CatMusicPlayer() {
  const { cat } = catBirthdayPremiumData
  const { 
    isPlaying, 
    setIsPlaying, 
    isClient
  } = useMusicContext()
  
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null)
  const [isMuted, setIsMuted] = useState(false)
  const [showFullPlayer, setShowFullPlayer] = useState(false)
  
  const trackData = catBirthdayPremiumData.music.track

  // Configurar el reproductor de audio
  // Configurar el reproductor de audio una sola vez
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const audio = new Audio(trackData.file)
    setAudioElement(audio)
    
    return () => {
      audio.pause()
      audio.src = ''
    }
  }, []) // Sin dependencias, se crea una sola vez

  // Controlar reproducción/pausa
  useEffect(() => {
    if (!audioElement) return

    if (isPlaying) {
      audioElement.play().catch(error => {
        console.error('Error al reproducir audio:', error)
        setIsPlaying(false)
      })
    } else {
      audioElement.pause()
    }
    
    // Actualizar el volumen según estado de mute
    audioElement.muted = isMuted
    
    // Para una sola melodía, simplemente parar cuando termine
    const handleEnded = () => setIsPlaying(false)
    audioElement.addEventListener('ended', handleEnded)
    
    return () => {
      audioElement.removeEventListener('ended', handleEnded)
    }
  }, [audioElement, isPlaying, isMuted, setIsPlaying])
  
  // Controlar silencio
  const toggleMute = () => {
    if (!audioElement) return
    setIsMuted(!isMuted)
  }

  // Cambiar entre reproductor flotante y completo
  const togglePlayerView = () => {
    setShowFullPlayer(!showFullPlayer)
  }

  return (
    <>
      {/* Reproductor flotante (siempre visible) */}
      <div 
      
      className={`fixed ${showFullPlayer ? 'bottom-28' : 'bottom-4'} right-4 z-50 transition-all duration-300`}>
        <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-purple-200 hover:shadow-xl transition-all">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
              isPlaying
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
            }`}
            title={isPlaying ? 'Pausar "Melodía para Luna"' : 'Reproducir "Melodía para Luna"'}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
          </button>
        </div>
        
        {/* Botón pequeño para expandir reproductor */}
        <button
          onClick={togglePlayerView}
          className={`absolute -top-1 -left-1 w-6 h-6 rounded-full shadow-md flex items-center justify-center transition-all transform hover:scale-110 ${
            showFullPlayer 
              ? 'bg-purple-500 text-white' 
              : 'bg-white text-purple-600 hover:bg-purple-50'
          }`}
          title={showFullPlayer ? 'Ocultar controles avanzados' : 'Mostrar controles avanzados'}
        >
          <Music className="w-3 h-3" />
        </button>
        
        {/* Indicador de música activa mejorado */}
        {isPlaying && (
          <div className="absolute -top-2 -right-2">
            <div className="relative">
              {/* Núcleo central */}
              <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
              {/* Primera onda */}
              <div className="absolute inset-0 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-ping opacity-75"></div>
              {/* Segunda onda con delay */}
              <div className="absolute inset-0 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping opacity-50" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
        )}
      </div>
      
      {/* Reproductor completo (expandible) */}
      <div 
        className={`fixed bottom-4 right-4 z-40 transition-all duration-500 transform ${
          showFullPlayer ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-purple-200 w-72">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
              <h4 className="font-medium text-purple-900">
                {isPlaying ? 'Reproduciendo' : 'Pausado'} para {cat.name}
              </h4>
            </div>
            <button 
              onClick={toggleMute}
              className={`p-2 rounded-full transition-all hover:scale-110 ${
                isMuted ? 'bg-red-100 text-red-600' : 'hover:bg-purple-100 text-purple-500'
              }`}
              title={isMuted ? 'Activar sonido' : 'Silenciar'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
          
          {/* Info de la canción actual mejorada */}
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-4 mb-4 border border-purple-200">
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                isPlaying ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' : 'bg-purple-200 text-purple-600'
              }`}>
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-purple-800 mb-1 truncate">
                  {trackData.title}
                </div>
                <div className="text-xs text-purple-600 truncate">
                  {trackData.artist} • {trackData.duration}
                </div>
              </div>
            </div>
          </div>
          
          {/* Controles de reproducción mejorados */}
          <div className="flex items-center justify-center mb-4">            
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg ${
                isPlaying
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-purple-300'
                  : 'bg-purple-200 text-purple-700 hover:bg-purple-300 shadow-purple-200'
              }`}
              title={isPlaying ? 'Pausar "Melodía para Luna"' : 'Reproducir "Melodía para Luna"'}
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
            </button>
          </div>
          
          {/* Información adicional mejorada */}
          <div className="pt-3 border-t border-purple-100 text-center space-y-2">
            <p className="text-xs text-purple-600">
              <span className="font-medium">🎵 Una melodía especial para Luna</span>
            </p>
            <div className="flex items-center justify-center space-x-2 text-xs text-purple-500">
              <span className="px-2 py-1 bg-purple-100 rounded-full font-medium">Demo Premium</span>
              <span>•</span>
              <span className="text-purple-700 font-semibold">$499 MXN</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
