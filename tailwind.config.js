/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7f2',
          100: '#c8e2cf',
          200: '#8fc9a0',
          300: '#4daa6a',
          400: '#1a7a42',
          500: '#145a32',
          600: '#0f4426',
          700: '#0a2e1a',
        },
      },
      fontFamily: {
        display: ['"Newsreader"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
