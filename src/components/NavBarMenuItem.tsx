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
          ` ${ pathname === path ? 'text-black border-b-2 ' : 'text-gray-400'} 
          p-2 hover:border-b-2 decoration-2 border-black font-semibold hover:bg-[#d7f5f4cc] hover:border-gray-400`
      }
      >

            <h1 className='capitalize'>{label}</h1>
      </div>
    </Link>
  )
}
