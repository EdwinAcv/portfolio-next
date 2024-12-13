import React from 'react'
import { NavBarMenuItem } from './NavBarMenuItem';

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
        <nav className='bg-[#F5F4D7] flex p-3 justify-between items-center'>
            <div>
                <h1>logo</h1>
            </div>
            <ul className='flex gap-2'>
                {rutas.map((ruta) => (
                    <NavBarMenuItem key={ruta.path} {...ruta}/>
                ))}
            </ul>
        </nav>
    </div>
  )
}
