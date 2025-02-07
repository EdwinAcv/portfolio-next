import React from 'react'
import { NavBarMenuItem } from './NavBarMenuItem';
import Image from 'next/image';

const rutas = [
    {
        label: 'Inicio',
        path: '/',
    },
    {
        label: 'acerca de',
        path: '/aboutme',
    },
    {
        label: 'Habilidades',
        path: '/skills',
    },
    {
        label: 'projectos',
        path: '/projects',
    },
    {
        label: 'contactame',
        path: '/contact',
    },
]

export const NabBar = () => {
  return (
    <div>
        {/* <nav className='bg-[#F5F4D7] sm:flex p-3 justify-between items-center'> */}
        <nav className='bg-navBar shadow sm:flex  justify-between items-center'>
            <div className='p-2'>
                {/* <h1 className='text-textPrimary'>logo</h1> */}
                <Image className='hover:cursor-pointer' src={'/logo.svg'} alt='logo' width={40} height={40}/>
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
