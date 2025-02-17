"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

interface IRuta {
  label: string;
  path: string;
}

export const NavBarMenuItem = ({ label, path }: IRuta) => {
  const searchParams = useSearchParams();
  const param = searchParams.get("section") || "aboutme"; // Si no hay `section`, usa `aboutme`

  useEffect(() => {
    const sectionElement = document.getElementById(param);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  }, [param]); // Ejecutar cuando cambie el query param `section`

  return (
    <Link href={`?section=${path}`} scroll={false}>
      <div
        className={`
          ${param === path ? "text-textPrimary font-bold border-b-2 " : "text-gray-400 "} 
          p-5 hover:border-b-2 decoration-2 border-textPrimary font-mono font-semibold 
          hover:bg-background hover:border-gray-400
        `}
      >
        <h1 className="uppercase">{label}</h1>
      </div>
    </Link>
  );
};
