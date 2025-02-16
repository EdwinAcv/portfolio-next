import React from 'react'
import { NavBarMenuItem } from './NavBarMenuItem';
import Image from 'next/image';

const rutas = [
    {
        label: 'sobre mi',
        path: '/',
    },
    // {
    //     label: 'acerca de',
    //     path: '/aboutme',
    // },
    {
        label: 'tecnologias',
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
        <nav className='bg-navBar sm:flex  justify-between items-center'>
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
