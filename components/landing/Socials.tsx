import Link from 'next/link'
import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export function Socials () {
  return (
    <div 
    style={{zIndex: 5000}}
    className='fixed bottom-4 right-4'>
        <div className='flex flex-col gap-4 justify-center items-center my-4 border-2 rounded-2xl px-2 py-4 bg-white/70 backdrop-blur-md shadow-lg'>
            <Link href="https://www.facebook.com/profile.php?id=61578702819936" target="_blank" rel="noopener noreferrer" className='mx-2'>
                <FaFacebookSquare className='text-3xl text-blue-600 hover:text-blue-800 transition-all duration-300'/>
            </Link>
            <Link href="https://www.instagram.com/invitacionesweb1/" target="_blank" rel="noopener noreferrer" className='mx-2'>
                <FaInstagram className='text-3xl text-pink-500 hover:text-pink-700 transition-all duration-300'/>
            </Link>
            <Link href="https://www.tiktok.com/@invitaciones_web2025_lat?lang=es-419" target="_blank" rel="noopener noreferrer" className='mx-2'>
                <FaTiktok className='text-3xl text-black hover:text-gray-800 transition-all duration-300'/>
            </Link>
        </div>
        
    </div>
  )
}

