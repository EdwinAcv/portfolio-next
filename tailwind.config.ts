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
        primary: "#1D4ED8",
        secondary: "#9333EA",
        navBar: "#000000",
        background: "#101110",
        secondaryBackground: "#1F2937",
        foreground: "var(--foreground)",
        textPrimary: "#FFFFFF",
        textSecondary: "#D4D4D4", 
        icon: "#F59E0B",
      },
      fontFamily: {
        primary: ['var(--font-geist-mono)', 'monospace'],
        sans: ['var(--font-geist-sans)', 'sans-serif'],
      },
      fontSize: {
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        md: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
      }
    },
  },
  plugins: [],
};
export default config;
