"use client"
import React, { useEffect, useState } from 'react'
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
    // {
    //     label: 'acerca de',
    //     path: '/aboutme',
    // },
    {
        label: 'tecnologias',
        path: 'skills',
    },
    {
        label: 'projectos',
        path: 'projects',
    },
    {
        label: 'contactame',
        path: 'contact',
    },
]

export const NabBar = () => {
    // console.log('nav');
    const searchParams = useSearchParams();
    const param = searchParams.get("section") || "aboutme"; // Si no hay `section`, usa `aboutme`
    
    const router = useRouter();
    const [activeSection, setActiveSection] = useState(param);
    const [openMenu, setoPenMenu] = useState(false);

    const toggleMenu = () => {
        setTimeout(() => {
            setoPenMenu(!openMenu);
        }, 500);
    }

    // Hacer scroll suave cuando cambia el query param
    useEffect(() => {
        const sectionElement = document.getElementById(param);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: "smooth" });
        }
    }, [param]);

    useEffect(() => {
        const sections = document.querySelectorAll("section"); // Seleccionar todas las secciones
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSection = entries.find((entry) => entry.isIntersecting);
                if (!visibleSection) return; 

                const newSection = visibleSection.target.id;
                if (!(newSection !== activeSection)) return;
                
                setActiveSection(newSection);
                
                // router.push(`?sectione=${newSection}`, { scroll: false });
            }, { threshold: 0.6 } // Se activa cuando el 60% de la sección es visible
        );
        sections.forEach((section) => observer.observe(section));
    
        return () => observer.disconnect(); // Limpiar el observer al desmontar

    }, [activeSection]);
    
    useEffect(() => {
        const param = searchParams.get("section") || "aboutme"; // Si no hay `section`, usa `aboutme`
         router.push(`?section=${param}`, { scroll: false });// toma la seccion actual cuando se recarga la pagina
    }), []

  return (
    <div>
        <nav className='bg-navBar fixed top-0 left-0 w-full z-[15] sm:flex  justify-between items-center'>
            <div className='p-4 flex justify-between'>
                <Image className='hover:cursor-pointer size-[40px]' src={'/logo.svg'} alt='logo' width={0} height={0}/>
                <div className='sm:hidden'> 
                    <MyButton
                        className='text-gray-500 hover:text-white'
                        icon={<MdMenu color='white' size={30} />}
                        action={() => toggleMenu()}
                    />        
                </div>
            </div>
            <ul className={ `hidden sm:visible sm:flex transition-transform duration-300 ease-in-out origin-top
                    ` 
                }>
                {rutas.map((ruta) => (
                     <NavBarMenuItem activeSection={activeSection} key={ruta.path} {...ruta}/>
                ))}
            </ul>
        </nav>
            <ul className={ `bg-navBar bg-opacity-90 z-10 mt-[72px] sm:hidden fixed w-full  transition-transform duration-300 ease-in-out origin-top
                   ${openMenu ? 'visible scale-y-100' : 'invincible scale-y-0'} ` 
                }>
                {rutas.map((ruta) => (
                     <NavBarMenuItem activeSection={activeSection} key={ruta.path} {...ruta}/>
                ))}
            </ul>
    </div>
  )
}
