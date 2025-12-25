/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './components/**/*.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#8B4513',
          'primary-dark': '#6B3410',
          secondary: '#D4A574',
          accent: '#C19A6B',
          background: '#FDFBF7',
          surface: '#FFFFFF',
          'surface-variant': '#F5F1EB',
          text: '#2C1810',
          'text-secondary': '#6B5A4C',
          'text-tertiary': '#9B8B7E',
          border: '#E8E0D5',
          error: '#C44536',
          success: '#4A7C59',
          badge: '#E53935',
        },
        dark: {
          primary: '#D4A574',
          'primary-dark': '#C19A6B',
          secondary: '#8B4513',
          accent: '#B8956A',
          background: '#1A1410',
          surface: '#2C2218',
          'surface-variant': '#3A3028',
          text: '#F5F1EB',
          'text-secondary': '#C8BAAC',
          'text-tertiary': '#9B8B7E',
          border: '#3A3028',
          error: '#E57373',
          success: '#81C784',
          badge: '#EF5350',
        },
      },
    },
  },
  plugins: [],
};
