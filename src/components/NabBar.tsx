"use client"
import React, { useEffect, useRef, useState } from 'react'
import { NavBarMenuItem } from './NavBarMenuItem';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { MdMenu } from 'react-icons/md';
import { MyButton } from '@/app/projects/components/MyButton';

const rutas = [
    {
        label: 'sobre mi',
        path: 'aboutme',
    },
    {
        label: 'tecnologías',
        path: 'skills',
    },
    {
        label: 'proyectos',
        path: 'projects',
    },
    {
        label: 'contáctame',
        path: 'contact',
    },
]

export const NabBar = () => {
    const searchParams = useSearchParams();
    const param = searchParams.get("section") || "aboutme";
    
    const [activeSection, setActiveSection] = useState(param);
    const [openMenu, setOpenMenu] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const toggleMenu = () => {
        setOpenMenu( !openMenu );
        setTimeout(() => {
        }, 500);
    }



    
    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSection = entries.find((entry) => entry.isIntersecting);
                if (!visibleSection) return;

                const newSection = visibleSection.target.id;

                // Solo actualiza la URL si la sección es válida
                if (newSection && newSection !== activeSection) {
                    
                    router.replace(`/?section=${newSection}`, { scroll: false });
                    setActiveSection(newSection);
                }
            },
            { threshold: 0.75 }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, [activeSection, router]);
    

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (navRef.current && !navRef.current.contains(event.target as Node)) {
            setOpenMenu(false);
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [navRef]);
    

  return (
    <div ref={navRef}>
        <nav className='bg-navBar fixed top-0 left-0 w-full z-[15] sm:flex  justify-between items-center'>
            <div className='p-4 flex justify-between'>
                {/* logo */}
                <Image className='hover:cursor-pointer size-[40px]' src={'/logov2.svg'} alt='logo' width={0} height={0}/>
                
                {/* button to open menu items movile */}

                
                <div className='sm:hidden'> 
                    <MyButton
                        className='text-gray-500 hover:text-white'
                        icon={<MdMenu color='white' size={30} />}
                        action={() => toggleMenu()}
                    />        
                </div>
            </div>

            {/* menu items */}
            <ul className={ `hidden sm:visible sm:flex transition-transform duration-300 ease-in-out origin-top
                    ` 
                }>
                {rutas.map((ruta) => (
                     <NavBarMenuItem activeSection={activeSection} key={ruta.path} {...ruta}/>
                ))}
            </ul>
        </nav>

        {/* menu items movile */}
        <ul className={ `bg-navBar bg-opacity-90 z-10 mt-[72px] sm:hidden fixed w-full  transition-transform duration-300 ease-in-out origin-top
                ${openMenu ? 'scale-y-100' : 'scale-y-0'} ` 
            }>
            {rutas.map((ruta) => (
                    <NavBarMenuItem activeSection={activeSection} key={ruta.path} {...ruta}/>
            ))}
        </ul>
    </div>
  )
}
