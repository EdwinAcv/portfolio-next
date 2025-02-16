import React from 'react'
import { NavBarMenuItem } from './NavBarMenuItem';
import Image from 'next/image';

const rutas = [
    {
        label: 'sobre mi',
        path: '#aboutme',
    },
    // {
    //     label: 'acerca de',
    //     path: '/aboutme',
    // },
    {
        label: 'tecnologias',
        path: '#skills',
    },
    {
        label: 'projectos',
        path: '#projects',
    },
    {
        label: 'contactame',
        path: '#contact',
    },
]

export const NabBar = () => {
  return (
    <div>
        {/* <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4 flex justify-center space-x-6">
              <a href="#aboutme" className="text-blue-600 hover:underline">Inicio</a>
              <a href="#skills" className="text-blue-600 hover:underline">Servicios</a>
              <a href="#projects" className="text-blue-600 hover:underline">Contacto</a>
            </nav> */}
        <nav className='bg-navBar sm:fixed top-0 left-0 w-full z-[15] sm:flex  justify-between items-center'>
            <div className='p-2'>
                <Image className='hover:cursor-pointer size-[40px]' src={'/logo.svg'} alt='logo' width={0} height={0}/>
            </div>
            <ul className='sm:flex gap'>
                {rutas.map((ruta) => (
                     <NavBarMenuItem key={ruta.path} {...ruta}/>
                ))}
            </ul>
        </nav>
    </div>
  )
}
