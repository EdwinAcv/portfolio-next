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
    <div 
        className={
            ` ${ pathname === path ? 'text-black underline decoration-2 underline-offset-8' : 'text-gray-400'} 
            hover:underline decoration-2 underline-offset-8 font-semibold `
        }
    >
        <li key={path} 
            className={
                ` ${ pathname === path ? 'text-black underline decoration-2 underline-offset-8' : 'text-gray-400'} 
                mx-2  hover:underline decoration-2 underline-offset-8 font-semibold hover:bg-[#d7f5f4cc]`
            }>
            <Link href={path} className='capitalize'>{label}</Link>
        </li>
    </div>
  )
}
