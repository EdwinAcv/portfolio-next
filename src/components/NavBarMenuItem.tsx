"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

interface IRuta {
    label: string;
    path: string;
}

export const NavBarMenuItem = ({ label, path }: IRuta) => {
    const pathname = usePathname();
  return (
    <Link href={path}>
      <div
        className={
          ` ${ pathname === `${path}` ? 'text-textPrimary font-bold border-b-2 ' : 'text-gray-400'} 
          p-5  hover:border-b-2 decoration-2 border-textPrimary font-mono font-semibold hover:bg-background hover:border-gray-400 transition duration-300`
      }
      >

            <h1 className='uppercase'>{label}</h1>
      </div>
    </Link>
  )
}
