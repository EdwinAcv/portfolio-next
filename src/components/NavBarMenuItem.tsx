"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface IRuta {
  label: string;
  path: string;
}

export const NavBarMenuItem = ({ label, path }: IRuta) => {
  const searchParams = useSearchParams();
  const param = searchParams.get("section") || "aboutme"; // Si no hay `section`, usa `aboutme`

  const router = useRouter();
  const [activeSection, setActiveSection] = useState(param);

  // 📌 Hacer scroll suave cuando cambia el query param
  useEffect(() => {
    const sectionElement = document.getElementById(param);
    if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  }, [param]);

  // 📌 Detectar scroll manualmente y actualizar la URL
  useEffect(() => {
    const sections = document.querySelectorAll("section"); // Seleccionar todas las secciones
    const observer = new IntersectionObserver(
        (entries) => {
            const visibleSection = entries.find((entry) => entry.isIntersecting);
            if (visibleSection) {
                const newSection = visibleSection.target.id;
                if (newSection !== activeSection) {
                    setActiveSection(newSection);
                }
            }
        },
        { threshold: 0.6 } // Se activa cuando el 60% de la sección es visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect(); // Limpiar el observer al desmontar
}, [activeSection]);
  const push = (pa: string) => {
    router.push(`?section=${pa}`, { scroll: false });
  };

  return (
    <Link href={`?section=${path}`} scroll={false}>
      <div
        className={`
          ${activeSection === path ? "text-textPrimary font-bold border-b-2 " : "text-gray-400 "} 
          p-5 hover:border-b-2 decoration-2 border-textPrimary font-mono font-semibold 
          hover:bg-background hover:border-gray-400 
        `}
      >
        <h1 className="uppercase">{label}</h1>
      </div>
    </Link>
  );
};
