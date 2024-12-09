import Link from 'next/link';
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
        label: 'projectos',
        path: '/projects',
    },
]

export const NabBar = () => {
  return (
    <div>
        <nav className='bg-[#F5F4D7] flex p-4 justify-between'>
            <div>
                <h1>logo</h1>
            </div>
            <ul className='flex'>
                {rutas.map((ruta) => (
                    <NavBarMenuItem {...ruta}/>
                ))}
            </ul>
        </nav>
    </div>
  )
}
