"use client"
import React, { useEffect, useState } from 'react'
import { NavBarMenuItem } from './NavBarMenuItem';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';

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
        <nav className='bg-navBar sm:fixed top-0 left-0 w-full z-[15] sm:flex  justify-between items-center'>
            <div className='p-2'>
                <Image className='hover:cursor-pointer size-[40px]' src={'/logo.svg'} alt='logo' width={0} height={0}/>
            </div>
            <ul className='sm:flex gap'>
                {rutas.map((ruta) => (
                     <NavBarMenuItem activeSection={activeSection} key={ruta.path} {...ruta}/>
                ))}
            </ul>
        </nav>
    </div>
  )
}
