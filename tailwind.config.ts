import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'star-movement-bottom': 'star-movement-bottom linear infinite alternate',
        'star-movement-top': 'star-movement-top linear infinite alternate',
      },
      keyframes: {
        'star-movement-bottom': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
        },
        'star-movement-top': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
        },
      },
      colors: {
        primary: "#1D4ED8",
        secondary: "#9333EA",
        // navBar: "#000000",
        navBar: "#18181B",
        // background: "#101110",
        background: "#0E0E10",
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
