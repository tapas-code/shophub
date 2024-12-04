/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#0A0F1E',  // Darker background
          100: '#111827', // Navbar background
          200: '#1F2937', // Card background
          300: '#374151', // Border color
          400: '#6B7280', // Muted text
          500: '#9CA3AF', // Secondary text
          600: '#D1D5DB', // Primary text
          700: '#E5E7EB', // Bright text
          800: '#F3F4F6', // Headings
          900: '#F9FAFB'  // Pure white text
        },
        brand: {
          primary: '#3B82F6',    // Bright blue
          secondary: '#8B5CF6',  // Purple
          accent: '#10B981'      // Success green
        }
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 0 rgba(59, 130, 246, 0)' },
          '100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};