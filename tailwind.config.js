/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D946EF',
          light: '#F0ABFC',
          dark: '#A855F7',
        },
        secondary: '#8b5cf6',
        background: {
          DEFAULT: '#FFFFFF',
          card: '#FAFAFA',
          secondary: '#F3E8FF',
        }
      },
      borderRadius: {
        'button': '12px',
        'card': '20px',
        'badge': '8px',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'button': '0 4px 12px rgba(217, 70, 239, 0.3)',
        'modal': '0 10px 30px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}
