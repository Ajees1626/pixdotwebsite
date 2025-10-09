/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0C1338',
        secondary: '#00AEEF',
        accent: '#A0937D',
        white: '#FFFFFF',
        dark: '#0C1338',
        light: '#A0937D'
      },
      fontFamily: {
        sans: ['Noto Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'bodoni': ['Bodoni Moda', 'serif'],
        'cinzel': ['Cinzel', 'serif'],
        'great-vibes': ['Great Vibes', 'cursive'],
        'julius': ['Julius Sans One', 'sans-serif'],
        'merienda': ['Merienda', 'cursive'],
        'noto-sans': ['Noto Sans', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0C1338 0%, #00AEEF 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #00AEEF 0%, #A0937D 100%)',
      }
    },
  },
  plugins: [],
}
