import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // Azul para botones, textos principales
        secondary: "#9333EA", // Morado para detalles secundarios
        navBar: "#000000", // Morado para detalles secundarios
        background: "#101110", // color de youtube modo oscuro
        foreground: "var(--foreground)",
        textPrimary: "#FFFFFF", // Negro para texto principal
        textSecondary: "#6B7280", // Gris oscuro para texto secundario
        icon: "#F59E0B", // Amarillo para iconos
      },
      fontFamily: {
        primary: ['var(--font-geist-mono)', 'monospace'],
        sans: ['var(--font-geist-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
