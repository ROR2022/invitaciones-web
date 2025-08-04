"use client"
import React from 'react'
import { ContactModal } from '@/components/landing/ContactModal'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function ContactPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const router = useRouter();

  const handleModalContact = () => {
    setIsContactModalOpen(true);
  };

  const handleHome = () => {
    
    router.push('/');
  };



  useEffect(() => {
    handleModalContact();
  }, []);


  return (
    <div>
    <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      {!isContactModalOpen && (
        <div className="flex flex-col justify-center items-center h-screen">
            {/* Botones de contacto y volver a la página principal el primero debe ser verde y el segundo gris */}
          <Button variant="outline" className='mt-4 bg-green-500 text-white hover:bg-green-600' onClick={handleModalContact}>Contactar</Button>
          <Button variant="outline" className='mt-4 border-gray-300 text-gray-500 hover:bg-gray-100' onClick={handleHome}>Volver a la página principal</Button>
        </div>

      )}
      </div>
  )
}