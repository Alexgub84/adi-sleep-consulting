/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#f8f5f1',          // Soft page background
        'brand-accent': '#d28885',      // Main accent (buttons, highlights)
        'brand-accent-dark': '#c3766e', // Hover for accent
        'text-dark': '#333333',         // Primary text color
        'soft-border': '#cccccc',       // Light borders
        'form-bg': '#d0cfc8'            // Optional form section background
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        handwritten: ['"Patrick Hand"', 'cursive']
      }
    },
  },
  plugins: [],
} 