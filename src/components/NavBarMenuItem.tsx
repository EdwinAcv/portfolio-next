import Link from "next/link";

interface IRuta {
  label: string;
  path: string;
  activeSection: string;
}

export const NavBarMenuItem = ({ label, path, activeSection }: IRuta) => {
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
