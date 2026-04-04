/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a3c6e',
          light: '#2354a0',
          dark: '#102847',
        },
        secondary: {
          DEFAULT: '#f4a61d',
          light: '#f7bc50',
          dark: '#d08a0f',
        },
        accent: '#e8f0fe',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
        pill: '9999px',
        input: '8px',
      },
      boxShadow: {
        card: '0 2px 12px rgba(0,0,0,0.08)',
        hover: '0 8px 24px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
};
