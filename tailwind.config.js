export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8f2ff',
          100: '#d1e5ff',
          200: '#a3cbff',
          300: '#75b1ff',
          400: '#4797ff',
          500: '#1e4a8c',
          600: '#1a3f7a',
          700: '#163468',
          800: '#122956',
          900: '#0e1e44',
        },
        silver: {
          50: '#f8f9fa',
          100: '#f1f3f4',
          200: '#e3e5e8',
          300: '#d5d7db',
          400: '#c7c9cf',
          500: '#9ca0a6', // Main Silver
          600: '#8c9096',
          700: '#7c8086',
          800: '#6c7076',
          900: '#5c6066',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#000000',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [],
}