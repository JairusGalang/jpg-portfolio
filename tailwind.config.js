/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dirtyWhite: '#eae7e6',
        dirtyPink: '#fdcece',
        dirtyPinkTransparent: '#FEE6E6',
        accent: '#e74c3c',
        background: '#f5f5f5',
        textWhite: '#FFFFFF',
        textBlack: '#0A0B0B',
      },
      fontSize: {
        'title': ['2.5rem', { lineHeight: '1.2' }],
        'subtitle': ['1.8rem', { lineHeight: '1.3' }],
        'body': ['1rem', { lineHeight: '1.5' }],
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        'regular': 400,
        'medium': 500,
      },
     
    },
  },
  plugins: [],
}