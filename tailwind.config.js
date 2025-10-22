/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors - Warm browns and neutrals from the design
        primary: {
          DEFAULT: '#3d2817',
          dark: '#2a1a0f',
          light: '#5c3f28',
        },
        secondary: {
          DEFAULT: '#c7986b',
          dark: '#a67e56',
          light: '#ddb389',
        },
        accent: {
          DEFAULT: '#d4a574',
          dark: '#c08f5c',
          light: '#e6c09d',
        },
        // Neutral/Background colors - Beige tones
        neutral: {
          cream: '#f5f0eb',
          beige: '#e8ddd4',
          light: '#f9f6f3',
          dark: '#4a3f35',
        },
        // Utility colors
        success: '#4d7b0f',
        warning: '#f59e0b',
        error: '#dc2626',
      },
      fontFamily: {
        sans: ['Lato', 'Inter', 'system-ui', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
